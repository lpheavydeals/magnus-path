# Abroad Pages: Keyword Research Plan

**Goal:** decide which overseas pages to build (and which to skip) using real search data from each
country's own Semrush database. The India database only shows what people in India search, so it
cannot tell us demand in the UK, US, Australia or the UAE.

## Who we are targeting abroad

| Audience | What they search | Our offer | Existing page |
|---|---|---|---|
| **A. Overseas brands** (D2C, Amazon sellers, Indian-diaspora businesses) | "shopify agency uk", "amazon ppc agency" | Senior Shopify + Amazon + ads + SEO team at Indian cost | /uk/, /australia/, /uae/ ecommerce-marketing-agency |
| **B. Overseas agencies** (want delivery capacity) | "white label seo", "outsource seo", "white label shopify development" | Unbranded delivery, NDAs, time-zone overlap | /white-label-seo/, /seo-outsourcing-india/ |

## Step 1: Bulk check (Keyword Overview → Bulk Analysis)

Paste each list into **Keyword Overview → Bulk analysis**, **set the database shown**, then export to CSV.

| File (in `research/abroad-keyword-lists/`) | Semrush database | Keywords | Priority |
|---|---|---|---|
| `us-bulk.txt` | **United States (US)** | 35 | 1: biggest market, mostly agency outsourcing + Amazon PPC |
| `uk-bulk.txt` | **United Kingdom (UK)** | 24 | 1: best time-zone fit, strong Shopify market |
| `uae-bulk.txt` | **United Arab Emirates (AE)** | 24 | 1: closest, Indian-owned businesses, Amazon.ae + Noon |
| `australia-bulk.txt` | **Australia (AU)** | 19 | 2 |
| `singapore-bulk.txt` | **Singapore (SG)** | 10 | Skipped (client decision) |

## Step 2: Keyword Magic Tool (discover what we have not thought of)

Run each seed in **Keyword Magic Tool** with the database shown. Filters: **Volume ≥ 50** (≥ 20 for UAE and
Singapore), **KD ≤ 40**. Exclude words: `jobs, salary, course, free, template, login, app, theme`.
Export up to 500 rows each.

| Seed keyword | US | UK | AU | AE | Why |
|---|---|---|---|---|---|
| `shopify agency` | ✓ | ✓ | ✓ | ✓ | Core brand-side service |
| `shopify developer` | ✓ | ✓ | ✓ | ✓ | "Hire" intent, often outsourced |
| `amazon ppc` | ✓ | ✓ | ✓ | ✓ | High-value, remote-friendly |
| `ecommerce agency` | ✓ | ✓ | ✓ | ✓ | Category head term |
| `ecommerce seo` | ✓ | ✓ | ✓ | | SEO service demand |
| `white label` | ✓ | ✓ | ✓ | | Agency-side demand (SEO, Shopify, web dev) |
| `outsource` | ✓ | ✓ | ✓ | | Outsourcing intent |
| `noon` | | | | ✓ | UAE marketplace |
| `website development company dubai` | | | | ✓ | Business websites in UAE |
| `seo company dubai` | | | | ✓ | UAE SEO demand |

That is 7 seeds × 3 countries + 7 seeds for UAE = **28 exports**. If Semrush limits apply, do US, UK and UAE first.

## Step 3: How we decide which pages to build

| Signal in the data | Decision |
|---|---|
| A country + service keyword with **≥ 100 searches/month and KD ≤ 35** | Build a dedicated page, e.g. `/uk/shopify-agency/` |
| Several smaller keywords (20–100) on the same theme | Cover them as sections + FAQs on the existing country page |
| Generic keyword with no country (e.g. "white label seo") showing high volume in US/UK | Strengthen the existing global page (`/white-label-seo/`) with US/UK sections |
| City keywords (e.g. "shopify agency london", "seo company sydney") | **Skip.** These need a local office and Google Maps presence |
| KD > 50 | Skip for now; revisit once the domain has authority |

## Likely page candidates (to confirm with data)

| Candidate page | Target keyword | Country DB |
|---|---|---|
| `/uk/shopify-agency/` | shopify agency uk | UK |
| `/uk/amazon-agency/` | amazon agency uk / amazon ppc agency uk | UK |
| `/us/amazon-ppc-agency/` | amazon ppc agency / amazon ppc management | US |
| `/us/shopify-development-company/` | shopify development company | US |
| `/white-label-shopify-development/` | white label shopify development | US, UK, AU |
| `/uae/shopify-agency-dubai/` | shopify agency dubai | AE |
| `/uae/noon-account-management/` | noon seller account management | AE |
| `/uae/website-development-company-dubai/` | website development company dubai | AE |
| `/australia/shopify-agency/` | shopify agency australia | AU |

## Technical notes for country pages
- Keep them in English at `/uk/…`, `/us/…`, `/australia/…`, `/uae/…`. No hreflang is needed, because each
  page is unique content for a different market, not a translation.
- Prices on country pages are quoted in GBP / USD / AUD / AED after the audit (no INR prices).
- Never imply an overseas office; every page states we are a Chennai team working remotely.

## Decision: United States (Semrush US data received 16 Oct 2026)
The client approved building these pages under `/us/`. Pages that also have a global version are paired with hreflang
(`en-US` for the US page, `x-default` for the global one), so Google shows the right page in each country.

| Page | Primary keyword (US vol / KD) | Secondary keywords | Global twin |
|---|---|---|---|
| /us/ecommerce-marketing-agency/ (hub) | ecommerce marketing agency for US brands | links to all US pages | — |
| /us/white-label-seo/ | white label seo services (4,400 / 20) | white label seo (8,100 / 35), white label seo agency (3,600 / 26) | /white-label-seo/ |
| /us/seo-outsourcing/ | outsource seo (2,400 / 27) | seo outsourcing (1,600 / 21), offshore seo company (480 / 7) | /seo-outsourcing-india/ |
| /us/shopify-seo-agency/ | shopify seo agency (3,600 / 24) | shopify seo services, shopify seo expert | /shopify-seo/ |
| /us/shopify-plus-agency/ | shopify plus agency (1,900 / 17) | shopify plus development, migration | — |
| /us/amazon-ppc-agency/ | amazon ppc agency (1,600 / 22) | amazon ppc management (1,600 / 23) | — |
| /us/generative-engine-optimization-agency/ | generative engine optimization agency (1,600 / 30) | GEO agency, AI search optimization | /ai-search-optimization/ |
| /us/hire-shopify-developer/ | hire shopify developer (1,300 / 17) | dedicated / offshore shopify developer | — |
| /us/white-label-web-development/ | white label web development (~1,000 / 17–23) | outsource web development | — |
| /us/amazon-account-management/ | amazon account management services (720 / 16) | amazon seller account management | /amazon-account-management/ |

Skipped (KD > 40): shopify experts (59), ecommerce seo agency (45), amazon marketing agency (43), ecommerce agency (42).

## Proposal: United Kingdom (Semrush UK data received 16 Oct 2026)
Full data and per-keyword decisions: `research/abroad-keyword-results/uk-bulk-results.csv`. UK pages use British spelling
(optimise, catalogue) and GBP.

| Page | Primary keyword (UK vol / KD) | Secondary | Global twin |
|---|---|---|---|
| /uk/ecommerce-marketing-agency/ (existing → UK hub) | ecommerce marketing agency uk (390 / 19) | ecommerce agency uk (1,000 / 52), white label web development uk (70 / 3) | — |
| /uk/ecommerce-seo-agency/ | ecommerce seo agency uk (1,300 / 21) | ecommerce seo agency (5,400 / 25) | /ecommerce-seo/ |
| /uk/shopify-agency/ | shopify agency uk (1,000 / 28) | shopify experts uk (480 / 23), shopify development agency uk (110 / 17) | /shopify-development/ |
| /uk/shopify-developer/ | shopify developer uk (390 / 25) | — | — |
| /uk/shopify-plus-agency/ | shopify plus agency uk (260 / 16) | — | — |
| /uk/amazon-agency/ | amazon agency uk (480 / 35) | amazon advertising agency uk (480 / 29), amazon ppc agency uk (260 / 9), amazon account management uk (40) | /amazon-marketing-agency/ |
| /uk/white-label-seo/ | white label seo uk (880 / 15) | white label seo (2,400 / 27) | /white-label-seo/ |
| /uk/seo-outsourcing/ | seo outsourcing (390 / 20) | outsource seo uk (50 / 8) | /seo-outsourcing-india/ |
| /uk/ai-search-optimisation-agency/ | ai search optimisation agency (210 / 16) | — | /ai-search-optimization/ |

Skipped: shopify agency (KD 54), ecommerce agency uk (KD 52), and three keywords with no volume.
Technical: hreflang must support several country versions per global page (en-US + en-GB + x-default).

## Proposal: United Arab Emirates (Semrush AE data received 16 Oct 2026)
Full data: `research/abroad-keyword-results/uae-bulk-results.csv`. In the UAE, people search by **Dubai**, not "UAE",
so this market breaks the "skip city keywords" rule: Dubai is effectively the whole commercial market. We only target
Dubai keywords whose results do **not** show a Google Maps pack (a pack needs a local office we don't have).
"n/a" volume means Semrush has too little data (usually under 10 searches); these are cheap, high-intent extras.

| Page | Primary keyword (AE vol / KD) | Secondary |
|---|---|---|
| /uae/ecommerce-marketing-agency/ (existing → UAE hub) | ecommerce agency dubai (20 / 8) | ecommerce company dubai (170 / 26), ecommerce agency uae |
| /uae/digital-marketing-agency-dubai/ | digital marketing agency dubai (4,400 / 27) | — |
| /uae/ecommerce-website-development-dubai/ | ecommerce website development dubai (390 / 20) | ecommerce website development uae (720 / 43), shopify agency / development company / developer / experts dubai |
| /uae/seo-services-dubai/ | seo expert dubai (1,000 / 29) | ecommerce seo dubai (140 / 6); seo agency / company dubai mentioned only |
| /uae/performance-marketing-agency-dubai/ | performance marketing agency dubai (170 / 13) | — |
| /uae/amazon-noon-agency/ | amazon agency uae (n/a / 17) | amazon ppc agency dubai, amazon & noon seller account management, noon ads agency |
| /blog/how-to-sell-on-noon/ (guide) | sell on noon (260 / 27) | — |

Skipped (KD > 50): seo agency dubai (59), seo company dubai (65), web design company dubai (56), website development company dubai (60).

## Proposal: Australia (Semrush AU data received 16 Oct 2026)
Full data: `research/abroad-keyword-results/australia-bulk-results.csv`. Australian keywords are the easiest of all
four markets (most KD under 20). Australian English spelling, quotes in AUD.

| Page | Primary keyword (AU vol / KD) | Secondary |
|---|---|---|
| /australia/ecommerce-marketing-agency/ (existing → AU hub) | ecommerce agency australia (170 / 24) | ecommerce marketing agency australia (90 / 20); sections for Amazon (amazon agency australia 50 / 7) and outsourced web development |
| /australia/ecommerce-seo/ | ecommerce seo australia (880 / 9) | ecommerce seo agency australia (30 / 27) |
| /australia/white-label-seo/ | white label seo australia (720 / 7) | white label seo (1,600 / 10) |
| /australia/seo-outsourcing/ | outsource seo australia (210 / 10) | seo outsourcing (390 / 28) |
| /australia/shopify-agency/ | shopify experts australia (390 / 15) | shopify agency australia (210 / 19), shopify agency (480 / 33), shopify developer / plus agency australia (70 each) |

## Singapore
Skipped at the client's request (16 Oct 2026).

## Round 2: business websites abroad (lists prepared 16 Oct 2026)
Lists in `research/abroad-keyword-lists/business-websites/` (15 keywords per country; `all-countries-plan.csv` shows which
global page each keyword relates to). Same decision rules as above: build a country page only where a keyword has
≥ 100 searches and KD ≤ 35; Dubai keywords count only if the results show no Maps pack.

### Round 2 proposal: United States (data received 16 Oct 2026)
| Page | Primary keyword (US vol / KD) | Secondary | Global twin |
|---|---|---|---|
| /us/website-maintenance-services/ | website maintenance services (4,400 / 23) | wordpress maintenance services (1,900 / 43), woocommerce maintenance (390 / 21) | /website-maintenance-services/ |
| /us/hire-wordpress-developer/ | hire wordpress developer (1,300 / 18) | wordpress development company (2,400 / 37), wordpress developer for hire (390 / 23) | /wordpress-website-development/ |
| /us/woocommerce-agency/ | woocommerce agency (1,300 / 31) | woocommerce development company (1,000 / 32) | /woocommerce-development/ |
| /us/white-label-wordpress-development/ | white label wordpress development (590 / 9) | outsource wordpress development (320 / 9) | — (linked from /us/white-label-web-development/) |
| /us/webflow-development-agency/ (only if offered) | webflow development agency (880 / 27) | — | — |
Skipped: woocommerce developer (61), business website design services (39), corporate website design company (45), headless cms development (47).

### Round 2 proposal: United Kingdom (data received 16 Oct 2026)
| Page | Primary keyword (UK vol / KD) | Secondary | Global twin |
|---|---|---|---|
| /uk/wordpress-agency/ | wordpress agency uk (1,300 / 28) | wordpress developer uk (590 / 19), wordpress development company uk (170 / 21) | /wordpress-website-development/ |
| /uk/woocommerce-agency/ | woocommerce agency uk (720 / 11) | woocommerce developer uk (320 / 11), woocommerce development uk (140 / 12) | /woocommerce-development/ |
| /uk/wordpress-support/ | wordpress support uk (720 / 20) | wordpress maintenance uk (390 / 15), website maintenance services uk (720 / 42) | /website-maintenance-services/ |
Skipped: website design agency uk (52). Business / corporate / CMS keywords are too small (10–40) and stay on the global pages.

### Round 2 proposal: UAE (data received 16 Oct 2026)
Only 3 of the 15 keywords had data.
| Page | Primary keyword (AE vol / KD) | Secondary | Global twin |
|---|---|---|---|
| /uae/web-development-company/ | web development company uae (720 / 26) | website development company uae (70 / 25); corporate and business websites | /corporate-website-development/ |
| /uae/wordpress-development-dubai/ | wordpress development company dubai (320 / 8) | — | /wordpress-website-development/ |
Before building, check the Google results for "wordpress development company dubai": if a Maps pack shows, the page will rank only in the regular results below it.
