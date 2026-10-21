# Content Brief — Magnus Path landing pages

Applies to every page in `src/content/pages/*.ts` and every article in `src/content/blog/*.md`.

## Who we are
Magnus Path is a new e-commerce growth agency based in Chennai, Tamil Nadu. One team builds e-commerce
websites (Shopify, WooCommerce, custom), runs e-commerce ads (Amazon, Flipkart, Meta, Google, Blinkit/Zepto/Instamart)
and does e-commerce SEO (store SEO, marketplace SEO, AI-search optimisation / GEO). It also serves B2B
manufacturers and exporters (Chennai, Coimbatore, Tiruppur, Hosur). Clients: Tamil Nadu in person, the rest of India
remotely, plus the UK, UAE, Australia, Singapore and USA remotely. Focus industries: fashion & ethnic wear,
beauty & Ayurveda, food & FMCG, manufacturers & exporters.

## Voice
Plain, confident, specific. Write for a founder or marketing head. Short sentences, active voice. Indian English
spelling (optimise, catalogue), ₹ amounts in lakh/crore. No hype words ("cutting-edge", "world-class", "synergy",
"unlock", "elevate", "leverage", "seamless"). No em-dash-heavy writing; use them sparingly.

## Hard rules (the quality checker enforces several)
- **No invented proof.** No client names, no client counts ("100+ brands"), no years in business, no awards,
  no "certified" or "official partner" claims, no guarantees, no "#1", no "best in Chennai".
- **No invented statistics.** Only general, well-known facts (e.g. "most Indian shoppers browse on mobile").
  Never cite a specific percentage or market figure unless it is listed under "Allowed facts" below.
- Pricing must match the price list below exactly (these are draft prices the client will confirm).
- Every page: primary keyword in title (first), H1, first sentence of the intro, and naturally 3–6 times in the guide.
  Use the secondary keywords naturally in headings, guide and FAQs. No keyword stuffing.
- Guide: 700–1,000 words, 5–7 sections, useful to a buyer even if they never hire us (SEO + AI answer value).
- FAQs: 6–8, each answer 35–70 words, written to be quoted directly by Google/AI answers.
- Internal links (`related`) use descriptive, keyword-rich labels and only these URLs:
  /, /shopify-development/, /ecommerce-website-development/, /woocommerce-development/, /performance-marketing/,
  /amazon-marketing-agency/, /amazon-account-management/, /flipkart-account-management/, /quick-commerce-marketing/,
  /ecommerce-seo/, /shopify-seo/, /amazon-seo/, /ai-search-optimization/, /seo-services/, /ecommerce-seo-packages/,
  /seo-packages/, /industries/, /industries/fashion-apparel/, /industries/beauty-ayurveda/, /industries/food-fmcg/,
  /b2b-digital-marketing/, /white-label-seo/, /seo-outsourcing-india/, /chennai/digital-marketing-agency/,
  /chennai/seo-company/, /chennai/ecommerce-website-development/, /bangalore/ecommerce-website-development/,
  /coimbatore/seo-services/, /case-studies/, /free-ecommerce-audit/, /about/, /contact/, /blog/,
  /blog/ecommerce-website-cost-in-india/, /blog/best-ecommerce-platform-in-india/, /blog/how-to-find-buyers-for-export/,
  /blog/how-to-sell-on-etsy-from-india/, /blog/how-to-sell-on-amazon-usa-from-india/, /blog/how-to-reduce-rto-cod-returns/,
  /blog/amazon-ppc-guide-india/, /blog/flipkart-ads-guide/, /blog/how-to-sell-on-blinkit-zepto-instamart/,
  /blog/shopify-seo-checklist/, /tools/, /tools/roas-calculator/, /tools/marketplace-profit-calculator/,
  /uk/ecommerce-marketing-agency/, /australia/ecommerce-marketing-agency/, /uae/ecommerce-marketing-agency/,
  /corporate-website-development/, /wordpress-website-development/,
  /website-maintenance-services/, /chennai/website-development-company/, /chatgpt-ads-agency/
- Location pages: we have **one office, in Chennai**. Bangalore and Coimbatore pages must say we serve those cities
  from Chennai (remote work + visits when needed). Never imply an office there.

## Prices
**No prices anywhere on the site** (client decision, 18 Oct 2026). See `docs/no-prices-rules.md`. Every service is
quoted after a free audit or scoping call. Older sections below that mention prices are superseded.

## Allowed facts (with sources, may be cited)
- India's digital ad spend is forecast to grow about 20% in 2026, with commerce/retail-media ads the fastest-growing segment (Pitch Madison / WPP Media 2026 reports).
- E-retail ad spends in India rose about 56% in 2025 (dentsu-e4m report).
- Quick-commerce advertising in India is projected to grow from about ₹4,000 crore to ₹6,000 crore in 2026 (Pitch Madison).
- Tamil Nadu: Flipkart reports about 70,000 sellers in the state (Aug 2026); Tiruppur, Erode, Salem and Kancheepuram are major textile clusters.
- Tamil Nadu's electronics exports rose about 78% to ~US$9.56 billion in FY24, roughly a third of India's total (KNN India).
- Google AI Overviews reduce clicks to organic results; AI-referred shoppers convert at higher rates than organic search (Similarweb/Adobe 2026 data).

## United States pages (`src/content/pages/us-*.ts`, URLs under `/us/`)
These override the India rules above where they conflict.
- **Audience:** US e-commerce brands, Amazon sellers and US digital agencies that want delivery capacity.
- **Spelling and money:** US English (optimize, catalog, color). Money in USD only; never ₹.
- **Set on every US page:** `market: 'US'`, `kind: 'global'` (the hub uses `kind: 'hub'`), `breadcrumb: [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }]`
  (the hub itself has an empty breadcrumb). Set `twin` to the global page's slug when one exists for the same service.
- **Honesty:** no US office, no US address or phone. Say plainly that we are a Chennai, India team working remotely.
  No "Shopify Partner", "Shopify Plus Partner", "Amazon Ads verified partner" or similar claims. Say that we
  work *on* Shopify Plus or Amazon Ads.
- **Time zones:** India (IST) is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter (12.5 / 13.5 hours
  ahead of Pacific). Say this honestly: there is a short overlap in the US Eastern morning (our evening) for calls,
  and most work is done while the US sleeps, so the client wakes up to finished tasks. Do not promise US-hours support.
- **Pricing:** only these USD prices may appear: white-label SEO **US$350 / month per client site**, SEO outsourcing
  **US$500 / month**. Every other US page has no `pricing` block; say it is quoted in USD after a free audit.
- **Primary keyword phrasing:** exactly as given in the task. Keep sentences natural; never write broken
  exact-match phrases like "amazon ppc agency US brands hire".
- **Extra allowed related URLs:** /us/ecommerce-marketing-agency/, /us/white-label-seo/, /us/seo-outsourcing/,
  /us/white-label-web-development/, /us/shopify-seo-agency/, /us/shopify-plus-agency/, /us/hire-shopify-developer/,
  /us/amazon-ppc-agency/, /us/amazon-account-management/, /us/generative-engine-optimization-agency/

## United Kingdom pages (`src/content/pages/uk-*.ts`, URLs under `/uk/`)
Same rules as the US pages above, with these differences:
- **Spelling and money:** British English (optimise, catalogue, colour, trainers, jumpers). GBP only; never ₹ or US$.
  No `pricing` block on UK pages: say we quote in GBP after a free audit.
- **Set on every UK page:** `market: 'UK'`, `kind: 'global'`, `breadcrumb: [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }]`,
  and `twin` where a global page covers the same service.
- **Time zones:** IST is 4.5 hours ahead of UK summer time (BST) and 5.5 hours ahead in winter (GMT). Our working day
  overlaps the UK morning and early afternoon; requests sent before UK lunchtime are usually handled the same day.
- **UK details worth covering where relevant:** VAT-inclusive pricing, Shopify Markets for UK + EU/Ireland, UK GDPR and
  cookie consent (we are not lawyers), Amazon.co.uk, Royal Mail / Evri / DPD delivery expectations, Klarna/Clearpay,
  Black Friday and Boxing Day peaks, the ASA/CAP code limits on health claims.
- **Extra allowed related URLs:** /uk/ecommerce-seo-agency/, /uk/shopify-agency/, /uk/shopify-developer/,
  /uk/shopify-plus-agency/, /uk/amazon-agency/, /uk/white-label-seo/, /uk/seo-outsourcing/,
  /uk/ai-search-optimisation-agency/, and every /us/… URL listed above.

## UAE pages (`src/content/pages/uae-*.ts`, URLs under `/uae/`)
Same rules as the US/UK pages above, with these differences:
- **Spelling and money:** British English (the UAE business norm). AED only; no `pricing` block: quote in AED after a free audit.
- **Set on every UAE page:** `market: 'UAE'`, `kind: 'global'`, `breadcrumb: [{ label: 'United Arab Emirates', href: '/uae/ecommerce-marketing-agency/' }]`,
  and `twin` where given in the task.
- **Dubai keywords:** we have no Dubai office, address or trade licence there. Say "a Chennai team serving Dubai and the
  wider UAE remotely". Never imply a Dubai address, never say "Dubai-based". Do not promise in-person meetings.
- **Time zones:** UAE time (GST) is 1.5 hours behind India (IST), so our working days almost fully overlap; the UAE
  weekend is Saturday–Sunday. Same-day replies are realistic.
- **UAE details worth covering where relevant:** Amazon.ae and Noon (Noon Ads, Noon seller account), cash on delivery
  still common, Tabby/Tamara instalments, Arabic + English stores (RTL layouts), VAT 5%, Ramadan, Eid, White Friday and
  Dubai Shopping Festival peaks, delivery partners (Aramex etc.), Snapchat and TikTok strength in the Gulf, UAE PDPL data
  law (we are not lawyers). No invented market statistics.
- **Extra allowed related URLs:** /uae/ecommerce-marketing-agency/, /uae/digital-marketing-agency-dubai/,
  /uae/ecommerce-website-development-dubai/, /uae/seo-services-dubai/, /uae/performance-marketing-agency-dubai/,
  /uae/amazon-noon-agency/, /blog/how-to-sell-on-noon/

## Australia pages (`src/content/pages/au-*.ts`, URLs under `/australia/`)
Same rules as the US/UK/UAE pages above, with these differences:
- **Spelling and money:** Australian English (optimise, catalogue, colour). AUD only; no `pricing` block: quote in AUD after a free audit.
- **Set on every Australia page:** `market: 'AU'`, `kind: 'global'`, `breadcrumb: [{ label: 'Australia', href: '/australia/ecommerce-marketing-agency/' }]`, and `twin` as given.
- **Time zones:** Sydney/Melbourne are 4.5 hours ahead of India (AEST) and 5.5 hours in daylight saving (AEDT); Perth is 2.5 hours ahead.
  Our morning is the east-coast afternoon, so calls fit their afternoon and replies arrive by their evening.
- **Australian details worth covering where relevant:** GST-inclusive pricing (10%), Afterpay/Zip/Klarna, Australia Post,
  Sendle and couriers, Amazon.com.au, Catch/eBay AU in passing, Click Frenzy, EOFY sales, Black Friday/Cyber Monday,
  Boxing Day, the Australian Consumer Law and Privacy Act (we are not lawyers), Google.com.au.
- **Extra allowed related URLs:** /australia/ecommerce-marketing-agency/, /australia/ecommerce-seo/, /australia/white-label-seo/,
  /australia/seo-outsourcing/, /australia/shopify-agency/

## US round 2 (business websites)
- **Extra allowed related URLs:** /us/website-maintenance-services/, /us/hire-wordpress-developer/, /us/woocommerce-agency/,
  /us/white-label-wordpress-development/
- No Webflow: the client does not offer it (confirmed 17 Oct 2026). Never mention Webflow.

## UK round 2 (business websites)
- **Extra allowed related URLs:** /uk/wordpress-agency/, /uk/woocommerce-agency/, /uk/wordpress-support/

## UAE and Australia round 2 (business websites)
- **Extra allowed related URLs:** /uae/web-development-company/, /uae/wordpress-development-dubai/,
  /australia/web-development-company/, /australia/wordpress-developer/

## Offices (updated 17 Oct 2026, overrides every earlier "one office" / "no UK office" rule)
Magnus Path has three **staffed offices where clients can meet the team by appointment**:
- **Chennai** (head office and main delivery team), Tamil Nadu, India
- **Bengaluru**, Karnataka, India
- **London**: 16 Avondale Court, London E18 2RD, United Kingdom
Rules: UK pages may say "our London office" and offer in-person meetings in London; delivery is still largely done by the
Chennai team, so the time-zone wording stays (work continues after UK hours). Bengaluru pages may say "our Bengaluru office"
and offer meetings there. There is still **no office in the US, UAE or Australia**: those pages keep the remote wording.
Never invent a street address; use the city name only in copy (the full addresses live in `src/data/site.ts`).

## ChatGPT ads US (18 Oct 2026)
- Extra allowed related URLs: /us/chatgpt-ads-agency/, /blog/how-to-advertise-on-chatgpt/, /chatgpt-ads-agency/
- Extra allowed related URL: /uk/chatgpt-ads-agency/

## Bangalore pages (18 Oct 2026)
- Location pages (`kind: 'location'`, `local: { city: 'Bangalore', areas, note }`), Indian English, ₹ prices from the price list.
- We have a **Bengaluru office** (meetings by appointment); much of the build/delivery is done by the Chennai head-office team; workshops at the Bengaluru office are included in project scope. Use "Bengaluru" or "Bangalore" naturally; keep the target keyword's spelling ("bangalore") in title/H1/intro.
- Extra allowed related URLs: /bangalore/seo-company/, /bangalore/digital-marketing-agency/, /bangalore/website-development-company/, /bangalore/performance-marketing-agency/

## London pages (18 Oct 2026; `src/content/pages/london-*.ts`, URLs under `/london/`)
- Location pages: `market: 'UK'` (British English, GBP), NO `twin` (the /uk/ pages target UK-wide searches; these target
  London searches — link to the matching /uk/ page instead). `local: { city: 'London', areas: [8–10 London areas, include
  East London ones near E18 such as Stratford, Walthamstow, Woodford, Ilford, Canary Wharf, plus Shoreditch, Islington, the City, Camden], note }`.
- Breadcrumb for service pages: [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }, { label: 'London', href: '/london/ecommerce-agency/' }].
  The London hub `/london/ecommerce-agency/` is `kind: 'hub'` with breadcrumb [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }].
  Service pages use `kind: 'location'`.
- Office: London office in E18 (East London) — UK clients can meet the team by appointment; most delivery is by the
  Chennai team; requests before UK lunchtime usually handled the same day. Never give the street address in copy.
- Prices: only white-label SEO from £275 / month per client site; everything else quoted in GBP after a free audit (no pricing block).
- Most London searches show a Google Maps pack: mention meeting at the London office naturally.
- Extra allowed related URLs: /london/ecommerce-agency/, /london/ppc-agency/, /london/ecommerce-seo-agency/, /london/wordpress-agency/,
  /london/shopify-agency/, /london/website-development-company/, /london/website-maintenance/, /london/amazon-agency/, /london/white-label-seo/

## Chennai round 2 (18 Oct 2026)
- Extra allowed related URL: /chennai/social-media-marketing-agency/

## Cost guides (18 Oct 2026)
- Extra allowed related URLs: /blog/digital-marketing-cost-in-chennai/, /blog/website-design-cost-in-bangalore/

## Page scope (20 Oct 2026)
Keep every page, including the non-ecommerce ones (business websites, WordPress, maintenance, white-label/outsourcing,
general city marketing). They were added for their search volume. Do not remove or redirect them, even after a rebrand.

## Ecommerce PPC pages (21 Oct 2026)
- Extra allowed related URLs: /uk/ecommerce-ppc-agency/, /us/ecommerce-ppc-agency/, /australia/ecommerce-ppc-agency/, /uae/ecommerce-ppc-agency-dubai/, /ecommerce-ppc-agency/
