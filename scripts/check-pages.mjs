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
      const all = JSON.stringify(p);
      for (const b of banned) if (b.test(all)) fail(s, `banned/unsupported claim matched ${b}`);
      const total = words(all.replace(/"[a-zA-Z]+":/g, ' '));
      console.log(`✓ ${s} — guide ${gw} words, page ~${total} words`);
    }
  }
}
if (errors) { console.log(`\n${errors} problem(s)`); process.exit(1); } else console.log('\nAll pages pass.');
