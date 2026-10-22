# Meta / Facebook ads pages (22 Oct 2026)

Client decision: a separate page for EACH of these 4 keywords in EACH of 8 locations (32 pages). Semrush shows decent
volume and KD < 30 for all of them. The 4 pages in one location must NOT reword each other: each has its own angle.

## The 4 page types (angle is mandatory)
| Type | Slug stem | Primary keyword (per location) | Angle (what makes it different) |
|---|---|---|---|
| E | ecommerce-meta-ads-agency | ecommerce Meta ads agency | Online stores only: catalogue / Advantage+ shopping campaigns, product feed & catalogue health, dynamic product ads, ROAS after COD/returns, creative testing with UGC, Shops |
| M | meta-ads-agency | Meta ads agency | The whole Meta platform: Facebook + Instagram (Reels, Stories, Explore) + Messenger + WhatsApp click-to-chat, Advantage+ campaigns, Conversions API & Events Manager, Meta Business Suite set-up and account structure |
| F | facebook-ads-agency | Facebook ads agency | Facebook-specific: lead ads and instant forms, Facebook feed / Marketplace / Reels placements, audiences for local and service businesses, lead quality & CRM-free offline conversion upload, page and comment moderation |
| A | facebook-advertising-agencies | Facebook advertising agencies | Comparison intent: types of Facebook advertising agencies (freelancers, specialists, full-service, in-house), how to compare them, questions to ask, red flags, what a proper audit looks like, contracts & account ownership, then how we work. Never rank or name competitors; no "top 10" lists |

## Locations, URLs and models
| Location | Slugs (type E, M, F, A) | market | kind / extras | Model file (structure only) |
|---|---|---|---|---|
| India | ecommerce-meta-ads-agency, meta-ads-agency, facebook-ads-agency, facebook-advertising-agencies | none | as ads.ts service pages; breadcrumb [{ label: 'Ads', href: '/performance-marketing/' }] style | india-ppc.ts |
| UK | uk/<stem> | UK | twin: '<India slug>' | uk-ppc.ts |
| US | us/<stem> | US | twin: '<India slug>' | us-ppc.ts |
| Australia | australia/<stem> | AU | twin: '<India slug>' | au-ppc.ts |
| UAE / Dubai | uae/<stem>-dubai | UAE | twin: '<India slug>'; keyword "... in Dubai" | uae-ppc.ts |
| Chennai | chennai/<stem> | none | location page, local block; keyword "... in Chennai" | chennai-ppc.ts |
| Bangalore | bangalore/<stem> | none | location page, local block; keyword "... in Bangalore" | bangalore-ppc.ts |
| London | london/<stem> | UK | location page, local block; keyword "... in London" | london-google-ads.ts |

Country primary keywords: India "... in India"; UK/US/AU the bare keyword (e.g. "Meta ads agency"), mention the country in title.

## Rules (on top of content-brief.md and no-prices-rules.md)
- Read the model file ONLY for field structure; never copy wording from any existing page.
- Each page: title <= 65, description 120-165 with keyword, intro 35-80 words with exact keyword, H1 with the keyword's
  head term, 3 facts, 3 pains, 6+ includes, 4 process steps, guide 750-1000 words in 5-6 sections, 6-7 FAQs (one
  cost FAQ, no figures), 3 figures (first = overview), 5-6 related links, icon 'social'.
- Do not use another type's exact primary keyword on a page (e.g. no "Facebook ads agency" on the Meta page). Link the
  4 sibling pages of the same location to each other via `related` with descriptive labels.
- No prices, stats (except the brief's Allowed facts), client counts, "certified", "guarantee", "best"/"bestseller",
  "#1", "Meta Business Partner"/"Facebook Partner"/"Google Partner" claims, CRM names, Webflow, "native speaker".
- Ad spend is paid directly to Meta from the client's own ad account; Business Manager and pixel stay in the
  client's name; management fee quoted after a free audit.
- Location wording per the brief: offices only in Chennai (HQ), Bengaluru, London (E18); US/AU/UAE are remote.
- Local flavour: currency context, peak seasons, languages (Tamil/Kannada/Hindi/Arabic copy "written or checked by a
  fluent writer"), privacy law in plain terms (DPDP / UK GDPR+PECR / CCPA / Privacy Act / PDPL), "we are not lawyers".
- Meta special ad categories (housing, employment, credit, politics) may be mentioned in general terms only.
