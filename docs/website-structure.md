# Website Structure Plan

**Status: approved by the client, 15 Oct 2026.** Solar is not targeted on the website (outreach only).

Blueprint for the agency website. Keyword data comes from `research/keyword-map.xlsx`
(Semrush, India database, Oct 2026). Monthly search volumes below are each page's whole keyword
cluster (main keyword plus related terms).

## 1. Architecture principles

- **Hub-and-spoke ("pillar") model.** There are 3 service pillars (Websites, Ads, SEO), and each
  pillar hub links down to its sub-service pages. Every sub-service page links back up to its hub.
- **Flat, keyword-matched URLs.** Every page is at most 2 levels deep (e.g. `/shopify-development/`,
  `/chennai/seo-company/`), with lowercase letters, hyphens and a trailing slash. Each page has
  exactly one main keyword, and no two pages target the same keyword.
- **Every page is a sales page.** Every page carries the "Free Store Audit" call to action and a
  WhatsApp button, and service pages include proof (a case study plus numbers).
- **Breadcrumbs follow the pillar, not the URL.** Example: Home › SEO › Shopify SEO.

## 2. Sitemap

Legend: **P1** = launch (weeks 0–8) · **P2** = months 2–5 · **P3** = later / early bets.
Volume = monthly searches for the page's keyword cluster · KD = difficulty of the main keyword.

```
/  Home ........................................ ecommerce marketing agency        970   KD11  P1
│
├── PILLAR 1 · WEBSITES
│   ├── /ecommerce-website-development/  (hub) .. ecommerce website development co. 1,880  KD27  P1
│   ├── /shopify-development/ .................... shopify website development co.   5,490  KD24  P1
│   └── /woocommerce-development/ ................ woocommerce development company     830  KD22  P2
│
├── PILLAR 2 · ADS
│   ├── /performance-marketing/  (hub) ........... performance marketing agency india  320  KD19  P1*
│   ├── /amazon-marketing-agency/ ................ amazon advertising agency         1,940  KD17  P1
│   ├── /amazon-account-management/ .............. amazon account management services  720  KD23  P1
│   ├── /flipkart-account-management/ ............ flipkart account management         320  KD12  P1
│   ├── /shopify-marketing/ ...................... shopify digital marketing agency     470  KD11  P2
│   ├── /ecommerce-social-media-marketing/ ....... ecommerce social media mktg agency  600  KD29  P2
│   ├── /meta-ads/ · /google-ads/ ................ (sections on the Ads hub until volume appears)      P2
│   └── /quick-commerce-marketing/ ............... blinkit / zepto / instamart ads       –  KD7   P3
│
├── PILLAR 3 · SEO
│   ├── /ecommerce-seo/  (hub) ................... ecommerce seo services            3,350  KD11  P1
│   ├── /shopify-seo/ ............................ shopify seo services                720  KD26  P2
│   ├── /amazon-seo/ ............................. amazon seo services                 540  KD10  P2
│   ├── /ai-search-optimization/ ................. AI search / GEO (no volume yet, early bet)       –        P3
│   └── /seo-services/ ........................... seo agency india                 18,700  KD28  P2
│
├── PRICING
│   ├── /pricing/  (overview of all packages) ................................................. P1
│   ├── /ecommerce-seo-packages/ ................. ecommerce website seo packages      530  KD17  P1
│   └── /seo-packages/ ........................... seo packages / seo cost in india   4,880  KD14  P2
│
├── LOCATIONS
│   ├── /chennai/digital-marketing-agency/ ....... digital marketing agency chennai  5,400  KD17  P1
│   ├── /chennai/seo-company/ .................... seo company in chennai            4,600  KD29  P1
│   ├── /chennai/ecommerce-website-development/ .. ecommerce website dev. chennai      980  KD28  P1
│   ├── /bangalore/ecommerce-website-development/  ecommerce development co. bangalore 3,300+ KD17 P2
│   └── /coimbatore/seo-services/ ................ seo services in coimbatore          850  KD28  P3
│
├── INDUSTRIES
│   ├── /industries/  (hub) ................................................................... P2
│   ├── /b2b-digital-marketing/ .................. b2b digital marketing services    4,410  KD15  P1
│   ├── /industries/fashion-apparel/ ............. (sales page – Tiruppur, sarees)        –        P2
│   ├── /industries/beauty-ayurveda/ ............. (sales page)                           –        P2
│   └── /industries/food-fmcg/ ................... (sales page)                           –        P2
│
├── GLOBAL
│   ├── /white-label-seo/ ........................ white label seo services          1,410  KD27  P2
│   ├── /seo-outsourcing-india/ .................. seo outsourcing india             2,890  KD17  P2
│   └── /uk/ · /australia/ · /uae/ ............... only after checking volume in the US/UK/AE DBs  P3
│
├── PROOF
│   ├── /case-studies/  (hub) .................................................................. P1
│   └── /case-studies/<client-slug>/ ............. one page per result                          P1
│
├── FREE TOOLS (lead magnets)
│   ├── /free-ecommerce-audit/ ................... main conversion page                          P1
│   ├── /tools/roas-calculator/ .................................................................. P2
│   └── /tools/amazon-fee-calculator/ ............................................................ P2
│
├── RESOURCES
│   ├── /blog/  (categories: websites · ads · seo · marketplaces · export)
│   ├── /ta/  Tamil section (seller guides in Tamil; volume not measured by Semrush) ............ P2
│   ├── /blog/ecommerce-website-cost-in-india/ ... ecommerce website cost in india     430  KD6   P1
│   └── /blog/how-to-find-buyers-for-export/ ..... how to find buyers for export       440  KD15  P2
│
└── COMPANY
    ├── /about/ (team, real faces, Chennai office) · /careers/ .................................. P1
    ├── /contact/ + Book a Call (Calendly, for overseas clients) .................................. P1
    └── /privacy-policy/ · /terms/ ............................................................... P1
```

\* `/performance-marketing/` is the Ads hub. Its own keyword is small, but the page is needed so
the pillar has a home.

**Launch scope (P1): 23 pages.** That is the 13 keyword pages (incl. Manufacturers & Exporters) + 3 hubs/pricing + case studies (hub + 2) +
free audit + about + contact + careers + legal. They cover about 31,000 searches a month.

## 2a. How this maps to the original structure

The original brainstorm structure is kept as the **menu people see**. Under it, each item is split
into separate keyword pages, because one page can rank for only one main keyword.

| Original item | Kept as | Change, and the reason from the data |
|---|---|---|
| Services: E-commerce Websites (Shopify · WooCommerce · Custom) | Websites pillar | Shopify, WooCommerce and the hub get their own pages; "Custom" stays a section on the hub |
| Services: E-commerce Ads (Amazon · Flipkart · Quick Commerce · Meta · Google) | Ads pillar | Amazon and Flipkart get pages (with volume). Meta and Google Ads stay sections on the hub: "meta ads agency india" and "google ads agency chennai" showed no measurable volume |
| Services: E-commerce SEO (Store · Marketplace · AI Search/GEO) | SEO pillar | Store SEO = /ecommerce-seo/ + /shopify-seo/; Marketplace SEO = /amazon-seo/; GEO is a P3 early bet (no volume yet) |
| Industries (Beauty, Fashion, Food; later Jewellery, Home, Wellness) | Industries | Kept. **Manufacturers & Exporters** added (b2b digital marketing services, 4,410/mo) |
| Locations – India: Chennai · Coimbatore · Tiruppur · Bangalore | Locations | Chennai P1, Coimbatore P3, **Bangalore P2** ("ecommerce development company in bangalore" 2,900/mo, KD17, no local pack in results). **Tiruppur dropped as a location page** (0 searches); it is covered on the Fashion industry page |
| Locations – Global: UK · Australia · UAE · Singapore · USA | Global | Starts as White-label SEO + SEO Outsourcing pages. Country pages wait for a US/UK/AE database check (India-database volumes for these were tiny) |
| Case Studies · Pricing · Free Tools | Same | Unchanged |
| Resources (Blog · Guides · Tamil section) | Resources | Blog P1, Tamil section `/ta/` P2 |
| About / Team · Contact / Book a Call | Company | Unchanged; Book a Call added to Contact |

## 3. Navigation

**Header (desktop mega-menu, mobile accordion)**

| Websites | Ads | SEO | Industries | Case Studies | Pricing | **[Get Free Audit]** |
|---|---|---|---|---|---|---|
| E-commerce Websites · Shopify · WooCommerce | Amazon Ads · Amazon Account Mgmt · Flipkart · Shopify Marketing · Social Media · Quick Commerce | E-commerce SEO · Shopify SEO · Amazon SEO · SEO Services | Manufacturers & Exporters · Fashion · Beauty & Ayurveda · Food & FMCG | | | button |

**Footer:** Locations (Chennai pages, Coimbatore) · Global (White-label SEO, SEO Outsourcing) ·
Free Tools · Blog · About · Contact · Careers · Legal. It also shows the full **name, address and
phone number (NAP)**, exactly as they appear on the Google Business Profile.

**Sticky on mobile:** WhatsApp button + "Free Audit" bar.

## 4. Page templates

Every page uses one of 6 templates, which keeps the build fast and the site consistent.

### A. Service page (Shopify, Amazon Ads, E-commerce SEO…)
1. Hero: H1 with the main keyword, a one-line promise, two CTAs (Free Audit · WhatsApp), and partner badges
2. Pain points: "Is this you?" (3–4 problems the buyer has)
3. What we do: deliverables in plain words
4. Process: 4–5 steps with a timeline
5. Proof: a case-study card with numbers, plus a testimonial
6. Pricing: a "Starting from" price plus a link to /pricing/
7. Industries we serve (links to industry pages)
8. FAQ: 6–8 questions taken from "People also ask" (with FAQ schema)
9. Related services (links to sibling and hub pages)
10. Final CTA plus a short form

### B. Location page (Chennai, Coimbatore)
Same as A, plus local proof (Chennai clients, office photo, embedded map), the NAP block,
"Areas we serve" (T. Nagar, OMR, Guindy, Ambattur…) and a short Tamil-language section.

### C. Hub page (pillar)
Overview of the pillar → cards for each sub-service → combined proof → FAQ → CTA.

### D. Case study
Client and industry → challenge → what we did → **results as numbers** → services used (links) →
quote → CTA. Anonymised versions are fine ("Chennai Ayurveda brand").

### E. Blog post / guide
H1 with the keyword → short answer at the top (for Google's AI answers) → full guide → tables and
examples → an in-content CTA box → author box (real person, with credentials) → related posts.

### F. Conversion page (Free Audit, Contact, Tools)
A short form (name, store URL, monthly sales range, service, WhatsApp number) → what they'll get →
proof → "We'll reply within 24 hours".

## 5. Internal linking rules

1. Hub ↔ every child page (both directions).
2. Each service page → 2 sibling services + 1 relevant industry page + 1 case study.
3. Each location page → the matching national service page (e.g. Chennai SEO → `/ecommerce-seo/`).
4. Each blog post → the 1 service page it supports, using keyword-rich anchor text.
5. Case studies → every service they used.
6. No page more than 3 clicks from the home page.

## 6. Technical SEO

| Item | Setting |
|---|---|
| Framework | Astro (static HTML, very fast) — final choice pending |
| Schema | Organization + LocalBusiness (site-wide) · Service · FAQPage · BreadcrumbList · Article · Review |
| Meta | Unique title (≤60 characters, keyword first) and description (≤155) per page |
| Sitemaps | `sitemap.xml` generated automatically; `robots.txt`; canonical tag on every page |
| Performance | LCP < 2.0s, CLS < 0.1, INP < 200ms; images in AVIF/WebP; no heavy plugins |
| Hreflang | Only once the `/uk/`, `/australia/`, `/uae/` pages exist (P3) |
| Tracking | GA4 + Search Console + events for form submit, WhatsApp click, call click, audit request |
| CRM | Form → Zoho CRM / Google Sheet + WhatsApp alert to the sales team |
| AI search | `llms.txt`, clear "short answer" blocks, author bios, original data |

## 7. Build sequence

| Step | Pages | Weeks |
|---|---|---|
| 1 | Design system + templates A–F, header/footer, home | 1–2 |
| 2 | Shopify, E-commerce Website Dev, E-commerce SEO, Amazon Ads, Amazon Acct, Flipkart, Ads hub, Manufacturers & Exporters | 2–4 |
| 3 | Chennai × 3, Pricing, E-com SEO Packages, Free Audit, Case Studies (2) | 4–6 |
| 4 | About, Contact, Careers, legal, first blog guide, schema, sitemap, analytics → **launch** | 6–8 |
| 5 | P2 pages: SEO Services, SEO Packages, Bangalore, White-label, Outsourcing, industries, tools | months 2–5 |
| 6 | P3 pages: Coimbatore, Quick Commerce, overseas country pages | month 5+ |

## 8. First 10 blog posts (from the keyword data)

1. E-commerce website cost in India (2026 price guide) — 430/mo, KD6
2. Best e-commerce platform in India: Shopify vs WooCommerce vs others — 260/mo, KD10
3. How to find buyers for export (step-by-step for manufacturers) — 440/mo, KD15
4. How to sell on Etsy from India — 170/mo
5. How to sell on Amazon USA from India — 110/mo
6. SEO cost in India: what you should pay (supports `/seo-packages/`)
7. Amazon PPC for beginners: ACoS, ROAS and budgets explained
8. Flipkart Ads guide for sellers
9. How to start selling on Blinkit / Zepto / Instamart (early bet)
10. Shopify SEO checklist (supports `/shopify-seo/`)

## 9. Still needed before the build

- Agency name, logo, brand colours
- Chennai address, phone/WhatsApp, email (must match the Google Business Profile exactly)
- Partner badges held (Shopify Partner, Amazon SPN, Google Partner, Meta)
- 2–3 client results for case studies (can be anonymised)
- Starting prices for each service
