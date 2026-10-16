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
| `singapore-bulk.txt` | **Singapore (SG)** | 10 | 3: optional |

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
