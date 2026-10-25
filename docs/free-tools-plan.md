# Free tools & lead magnets (22 Oct 2026)

Client asked for 10 free tools + 4 lead magnets. All run in the browser (static site, no backend, no API keys).
Model: `src/pages/tools/roas-calculator.astro` + `src/components/tools/RoasCalc.astro` + `src/components/tools/calc.css`
(reuse calc.css classes; add a small scoped <style> only when needed). Newer model with richer UI:
`src/pages/tools/ecommerce-website-checker.astro` + `src/components/tools/StoreChecker.astro`.

## Tools (URL → component)
| # | URL | Component | What it does |
|---|---|---|---|
| 1 | /tools/profit-margin-calculator/ | ProfitMarginCalc.astro | price, product cost, shipping, packaging, payment fee %, marketplace/commission %, GST/VAT handling (price incl. tax toggle), return rate % + cost per return, ad cost per order → profit per order, margin %, break-even ad cost per order (CAC), break-even ROAS |
| 2 | /tools/rto-cod-calculator/ | RtoCalc.astro | monthly orders, COD share %, RTO rate on COD %, RTO rate on prepaid %, forward + reverse shipping per order, packaging, product damage % → monthly RTO cost, cost per delivered order, savings if COD share falls by X points (slider) |
| 3 | /tools/ad-budget-planner/ | AdBudgetCalc.astro | target monthly revenue, AOV, conversion rate %, CPC (or CPM+CTR toggle) → orders needed, sessions needed, ad spend, implied ROAS, CAC; compare with break-even ROAS from margin |
| 4 | /tools/conversion-rate-calculator/ | ConversionCalc.astro | sessions, orders (→ current CR), AOV, margin; target CR → extra orders, extra revenue, extra profit per month/year; also "AOV +x%" scenario |
| 5 | /tools/ltv-cac-calculator/ | LtvCacCalc.astro | AOV, gross margin %, purchases per year, customer lifespan years (or repeat rate), CAC → LTV (revenue & margin), LTV:CAC ratio, max affordable CAC, payback in orders/months |
| 6 | /tools/free-shipping-threshold-calculator/ | ShippingThresholdCalc.astro | current AOV, typical item price, shipping cost per order, margin % → suggested threshold options (AOV + one typical item, rounded), extra margin needed to cover shipping, orders that must cross threshold to break even |
| 7 | /tools/discount-calculator/ | DiscountCalc.astro | price, unit cost, current monthly units, discount % (or flat) → new margin per unit, % more units needed to keep the same profit, break-even units, table for 10/15/20/25/30% |
| 8 | /tools/utm-builder/ | UtmBuilder.astro | URL + source/medium/campaign/term/content with presets (Meta, Google, WhatsApp, Instagram bio, email, influencer) → built URL, copy button, lowercase/space checks, saves last 10 links in localStorage (try/catch) |

## Resources (content pages)
| # | URL | Notes |
|---|---|---|
| 9 | /resources/sale-calendar/ | Sale calendar Nov 2026 – Dec 2027 for India, UK, US, UAE, Australia: date (or "usually <month>"), market, event, "start ads by" and "prep by" columns, filter by market (client-side). Islamic dates (Ramadan, Eids) and lunar Indian festivals: mark "expected, depends on moon sighting / confirm closer to date". Marketplace sale dates (Big Billion Days, Great Indian Festival, Prime Day, White Friday, Click Frenzy) are announced by the platforms: write "usually <month>", never invent exact dates. Download as .ics? optional; CSV download yes |
| 10 | /resources/ecommerce-glossary/ | 45–60 terms (ROAS, ACoS, TACoS, AOV, CR, CAC, LTV, RTO, COD, NDR, SKU, GTIN, PMax, Advantage+, CAPI, pixel, UTM, CLS, LCP, INP, AOV, BNPL, GST/VAT, FBA, Easy Ship, Seller Flex, Buy Box, A+ content, Brand Registry, PLA, quick commerce, dark store, D2C, UGC, CTR, CPC, CPM, CPA, retargeting, lookalike, feed, Merchant Center, schema, hreflang, cart abandonment, upsell, cross-sell, bundle, MAP, contribution margin, break-even ROAS…), A–Z jump links + client-side search, each 1–3 plain sentences, link to the relevant tool/service page where natural, DefinedTermSet schema |

## Lead magnets (/resources/<slug>/, printable page + downloadable file)
| # | URL | File |
|---|---|---|
| 11 | /resources/ecommerce-launch-checklist/ | 50-point checklist in 7 stages (domain & platform → products → payments & shipping → legal & policies → tracking → marketing → launch week); interactive ticks saved in localStorage; "Download PDF" → /downloads/ecommerce-launch-checklist.pdf |
| 12 | /resources/product-page-checklist/ | 30-point product page checklist (images, copy, price & offers, delivery, trust, reviews, SEO, speed, mobile); interactive; PDF /downloads/product-page-checklist.pdf |
| 13 | /resources/festive-sale-playbook/ | 6-week week-by-week plan before a big sale (Diwali / Black Friday / Ramadan / EOFY), with tasks for offers, stock, creatives, ads, site, CRM; PDF /downloads/festive-sale-playbook.pdf |
| 14 | /resources/ads-report-template/ | Monthly ads report template: explain columns (channel, spend, revenue, orders, ROAS, CAC, AOV, new vs returning, profit after ads) + how to use; downloads /downloads/ads-report-template.xlsx (with formulas) and .csv |

PDFs/xlsx are generated by the coordinator after build — writers only build the HTML page and a print stylesheet (`@media print`: hide header/footer/CTA, clean black-on-white, page breaks per section). Put the download buttons in the page linking to the paths above.

## Rules for every page
- Follow `docs/content-brief.md` voice and hard rules and `docs/no-prices-rules.md` (no Billion Ecommerce Agency prices).
- No invented statistics or benchmarks ("average CR is 2.5%" etc.). Example input values are allowed and must be labelled as examples. You may say "many stores…" qualitatively.
- Currency picker on every money calculator: ₹ (default, en-IN formatting), $, £, AED, A$ — formatting with Intl.NumberFormat; no FX conversion.
- Pages: Base layout, SimpleHero (eyebrow "Free tool" / "Free resource", trail [{label:'Free Tools', href:'/tools/'}] or [{label:'Resources', href:'/resources/'}]), the tool, FigureBand (1 figure), Guide 600–900 words in 4–6 sections (+1 more figure inside), FAQ 5–6, Related 4–5 links (existing URLs only), LeadForm with a heading/sub tied to the tool.
- Title ≤ 65 chars ending "| Billion Ecommerce Agency", description 120–165 chars with the main keyword. Schema: breadcrumbSchema + faqSchema + WebApplication (tools) or Article/DefinedTermSet (resources).
- CTA inside each tool result panel: "Get the full free audit" → `/free-ecommerce-audit/?from=<tool-slug>#audit`.
- Results panel `aria-live="polite"`; inputs labelled; works at 360px width; no console errors; no external scripts.
- Do NOT edit shared files (site.ts, tools/index.astro, LeadForm, Base, calc.css, other tools). Only create your own files.
