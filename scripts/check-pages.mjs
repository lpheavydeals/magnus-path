// Quality gate for landing-page content. Usage: node --experimental-strip-types scripts/check-pages.mjs [file.ts ...]
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const files = process.argv.slice(2).length ? process.argv.slice(2) : ['src/content/pages/index.ts'];
const words = (s) => s.split(/\s+/).filter(Boolean).length;
const banned = [/\b\d{2,}\+?\s*(clients|brands|projects|stores)\b/i, /\bcertified\b/i, /\bofficial partner\b/i, /\bguarantee/i, /\b#1\b/, /\bbest in (india|chennai)\b/i, /lorem/i];
let errors = 0;
const fail = (slug, msg) => { errors++; console.log(`✗ [${slug}] ${msg}`); };
const seen = new Set();
for (const f of files) {
  const mod = await import(pathToFileURL(path.resolve(f)).href);
  for (const pages of Object.values(mod)) {
    if (!Array.isArray(pages)) continue;
    for (const p of pages) {
      const s = p.slug ?? '?';
      if (seen.has(s)) fail(s, 'duplicate slug'); seen.add(s);
      if (/^\/|\/$/.test(s)) fail(s, 'slug must not start/end with /');
      if (!p.title || p.title.length > 65) fail(s, `title length ${p.title?.length} (max 65)`);
      if (!p.description || p.description.length < 120 || p.description.length > 165) fail(s, `description length ${p.description?.length} (120–165)`);
      if (!p.h1.toLowerCase().replace(/\*/g, '').includes(p.primaryKeyword.split(' ')[0].toLowerCase())) fail(s, 'h1 should contain the primary keyword');
      if (!p.intro.toLowerCase().includes(p.primaryKeyword.toLowerCase())) fail(s, 'intro must contain the exact primary keyword');
      if (words(p.intro) < 35 || words(p.intro) > 80) fail(s, `intro ${words(p.intro)} words (35–80)`);
      if (p.facts?.length !== 3) fail(s, 'facts must have exactly 3 items');
      if (p.pains?.length !== 3) fail(s, 'pains must have 3 items');
      if ((p.includes?.length ?? 0) < 6) fail(s, 'includes needs 6 items');
      if (p.process?.length !== 4) fail(s, 'process must have 4 steps');
      if (!p.headings?.pains || !p.headings?.includes || !p.headings?.process || !p.headings?.guide) fail(s, 'missing headings');
      const gw = (p.guide ?? []).reduce((n, g) => n + g.paragraphs.reduce((m, x) => m + words(x), 0) + (g.bullets ?? []).reduce((m, x) => m + words(x), 0), 0);
      if (gw < 700) fail(s, `guide has ${gw} words (min 700)`);
      if ((p.faqs?.length ?? 0) < 6) fail(s, 'faqs needs 6+');
      if ((p.related?.length ?? 0) < 3) fail(s, 'related needs 3+');
      if (p.kind === 'hub' && !(p.children?.length >= 2)) fail(s, 'hub needs children');
      if (p.kind === 'location' && !p.local) fail(s, 'location page needs local');
      for (const [fi, g] of (p.figures ?? []).entries()) {
        const L = (t, n, what) => { if (!t || t.length > n) fail(s, `figure ${fi + 1} ${what} "${t}" longer than ${n} chars`); };
        L(g.caption, 110, 'caption');
        if ((g.after ?? 0) >= (p.guide?.length ?? 0)) fail(s, `figure ${fi + 1} after=${g.after} beyond guide sections`);
        if (g.type === 'mindmap') { L(g.center, 24, 'center'); if (g.branches?.length !== 4) fail(s, `figure ${fi + 1} mindmap needs 4 branches`); for (const b of g.branches ?? []) { L(b.label, 14, 'branch'); if (!(b.items?.length >= 2 && b.items.length <= 3)) fail(s, `figure ${fi + 1} branch needs 2–3 items`); b.items?.forEach((t) => L(t, 30, 'item')); } }
        else if (g.type === 'matrix') { g.cols?.forEach((t) => L(t, 22, 'col')); g.rows?.forEach((t) => L(t, 26, 'row')); if (g.cells?.length !== 4) fail(s, `figure ${fi + 1} matrix needs 4 cells`); for (const c of g.cells ?? []) { L(c.title, 18, 'cell title'); L(c.body, 64, 'cell body'); } }
        else if (g.type === 'venn') { L(g.left?.title, 26, 'venn title'); L(g.right?.title, 26, 'venn title'); L(g.left?.body, 64, 'venn body'); L(g.right?.body, 64, 'venn body'); L(g.overlap, 34, 'overlap'); }
        else if (g.type === 'steps') { if (!(g.steps?.length >= 3 && g.steps.length <= 5)) fail(s, `figure ${fi + 1} steps needs 3–5`); for (const t of g.steps ?? []) { L(t.title, 18, 'step title'); if (t.body) L(t.body, 44, 'step body'); } }
        else fail(s, `figure ${fi + 1} unknown type ${g.type}`);
      }
      const all = JSON.stringify(p);
      for (const b of banned) if (b.test(all)) fail(s, `banned/unsupported claim matched ${b}`);
      const total = words(all.replace(/"[a-zA-Z]+":/g, ' '));
      console.log(`✓ ${s} — guide ${gw} words, page ~${total} words`);
    }
  }
}
if (errors) { console.log(`\n${errors} problem(s)`); process.exit(1); } else console.log('\nAll pages pass.');
