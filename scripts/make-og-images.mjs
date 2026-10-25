// Builds a 1200x630 share image for every page from its H1: public/og/<path>.jpg (home.jpg for /).
// Run after `npm run build`, then build again so pages pick the images up:
//   npm run build && node scripts/make-og-images.mjs && npm run build
// Needs Playwright with Chromium (set PLAYWRIGHT_MODULE if it is not installed in node_modules).
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { tmpdir } from 'node:os';

const pw = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const out = join(root, 'public/og');
mkdirSync(out, { recursive: true });

const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (f === 'index.html') files.push(p); } })(dist);

const mark = readFileSync(join(root, 'src/assets/mark.svg'), 'utf8').replace(/width="\d+" height="\d+" /, '');
const font = join(root, 'node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const page = (h1, kicker) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:PJ;src:url('file://${font}') format('woff2');font-weight:200 800}
html,body{margin:0;width:1200px;height:630px;background:#17181b;font-family:PJ,Arial,sans-serif;overflow:hidden}
.g{position:absolute;right:-160px;top:-220px;width:820px;height:820px;background:radial-gradient(circle,rgba(232,98,54,.5),rgba(232,98,54,0) 62%)}
.c{position:absolute;left:80px;right:110px;top:70px;bottom:70px;display:flex;flex-direction:column}
.m{width:96px;color:#ea6a3a}.m svg{width:100%;height:auto}
.k{color:#ffb79a;font-size:26px;font-weight:600;margin-top:36px}
h1{color:#fff;font-weight:800;letter-spacing:-.02em;line-height:1.08;margin:14px 0 0}
.b{margin-top:auto;color:#a9abb1;font-size:26px}.b strong{color:#fff;font-weight:700}
</style></head><body><div class="g"></div><div class="c"><div class="m">${mark}</div>
<div class="k">${esc(kicker)}</div><h1 id="t">${esc(h1)}</h1>
<div class="b"><strong>Billion Ecommerce Agency</strong> · billionecommerceagency.com</div></div>
<script>const t=document.getElementById('t');let s=70;t.style.fontSize=s+'px';while(t.scrollHeight>300&&s>36){s-=2;t.style.fontSize=s+'px'}</script></body></html>`;

const kickerFor = (path) => {
  const top = path.split('/')[0];
  return ({ uk: 'United Kingdom', us: 'United States', australia: 'Australia', uae: 'United Arab Emirates', london: 'London', chennai: 'Chennai', bangalore: 'Bengaluru', coimbatore: 'Coimbatore', blog: 'Guide', tools: 'Free tool', resources: 'Free resource', industries: 'Industries', 'case-studies': 'Case study' })[top] ?? 'E-commerce growth';
};

const tmpFile = join(tmpdir(), 'og-page.html');
const browser = await pw.chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
let n = 0;
for (const f of files) {
  const rel = relative(dist, dirname(f)).replace(/\\/g, '/');
  if (rel === '404' || rel.startsWith('_')) continue;
  const html = readFileSync(f, 'utf8');
  if (/<meta name="robots"[^>]*noindex/.test(html)) continue;
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) continue;
  const h1 = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, '’').replace(/\s+/g, ' ').trim();
  const key = rel ? rel.replace(/\//g, '--') : 'home';
  writeFileSync(tmpFile, page(h1, kickerFor(rel)));
  await tab.goto('file://' + tmpFile);
  await tab.waitForFunction(() => document.fonts.status === 'loaded');
  await tab.screenshot({ path: join(out, `${key}.jpg`), type: 'jpeg', quality: 78 });
  n++;
}
await browser.close();
console.log(`wrote ${n} share images to public/og/`);
