"""Keyword placement audit on the built site (dist/). Usage: python3 scripts/keyword-audit.py"""
import re, html, sys
TARGETS = [
  ('digital marketing company in chennai', '/chennai/digital-marketing-agency/'),
  ('ppc agency london', '/london/ppc-agency/'),
  ('seo company in bangalore', '/bangalore/seo-company/'),
  ('digital marketing company in bangalore', '/bangalore/digital-marketing-agency/'),
  ('website maintenance services', '/us/website-maintenance-services/'),
  ('wordpress agency london', '/london/wordpress-agency/'),
  ('white label seo services', '/us/white-label-seo/'),
  ('shopify seo agency', '/us/shopify-seo-agency/'),
  ('ecommerce seo agency uk', '/uk/ecommerce-seo-agency/'),
  ('web development company in chennai', '/chennai/website-development-company/'),
]
def text(s): return html.unescape(re.sub(r'<[^>]+>', ' ', s)).lower()
def norm(s): return re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()
def variants(kw):
    # exact phrase, plus the natural form with "in" dropped/added (e.g. "ppc agency in london")
    v = {kw}
    w = kw.split()
    if w[-2:-1] == ['in']: v.add(' '.join(w[:-2] + w[-1:]))
    else: v.add(' '.join(w[:-1] + ['in'] + w[-1:]))
    return [norm(x) for x in v]
rows = []
for kw, url in TARGETS:
    h = open('dist' + url + 'index.html', encoding='utf8').read()
    body = h[h.index('<main') if '<main' in h else 0:]
    body = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', body, flags=re.S)
    body = re.sub(r'<footer.*?</footer>|<header.*?</header>', ' ', body, flags=re.S)
    title = norm(text(re.search(r'<title>(.*?)</title>', h, re.S).group(1)))
    desc = norm(re.search(r'name="description" content="([^"]*)"', h).group(1))
    h1 = norm(text(re.search(r'<h1[^>]*>(.*?)</h1>', h, re.S).group(1)))
    subs = [norm(text(x)) for x in re.findall(r'<h[23][^>]*>(.*?)</h[23]>', body, re.S)]
    m = re.search(r'<p class="lede"[^>]*>(.*?)</p>', h, re.S); first_p = norm(text(m.group(1))) if m else ''
    words = norm(text(body)).split()
    full = ' '.join(words)
    V = variants(kw)
    has = lambda s: any(v in s for v in V)
    count = sum(full.count(v) for v in V)
    kw_words = set(norm(kw).split()) - {'in'}
    allw = lambda s: kw_words <= set(s.split())
    rows.append((kw, url, 'Y' if has(title) else ('words' if allw(title) else '-'), 'Y' if has(h1) else ('words' if allw(h1) else '-'),
                 'Y' if has(desc) else ('words' if allw(desc) else '-'), 'Y' if has(first_p) else '-',
                 sum(has(s) for s in subs), count, len(words), round(100 * count * len(kw.split()) / max(len(words), 1), 2)))
print('keyword | page | title | H1 | meta desc | intro | subheadings | times in body | words | density %')
for r in rows: print(' | '.join(map(str, r)))
