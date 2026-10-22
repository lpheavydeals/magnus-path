# Industry pages plan (category "marketing agency" pages)

User request: separate industry pages such as "Skincare Brands Marketing Agency" and "Haircare", plus other
categories with potential. Keyword volumes are to be confirmed by the user in Semrush; the list below picks
categories that are big D2C/ecommerce categories in India and abroad and have "<category> marketing agency"
style searches.

All pages: `kind: 'industry'`, no `market` (India-first, written so overseas brands also fit), breadcrumb
`[{ label: 'Industries', href: '/industries/' }]`, URL `/industries/<keyword-slug>/`.

## Existing pages (keep, do not cannibalise)

| URL | Primary keyword | Role |
|---|---|---|
| /industries/ | ecommerce marketing for d2c brands | hub |
| /industries/fashion-apparel/ | ecommerce marketing for fashion brands | fashion |
| /industries/beauty-ayurveda/ | ecommerce marketing for beauty brands | beauty hub; links down to the beauty pages below |
| /industries/food-fmcg/ | ecommerce marketing for food brands | food |

## New pages

| # | URL | Primary keyword | Secondary keywords | Angle that keeps it distinct |
|---|---|---|---|---|
| 1 | /industries/skincare-marketing-agency/ | skincare marketing agency | skincare brand marketing, skincare digital marketing agency | actives and routines, ingredient-led content, derm-style education, sampling, Nykaa/Amazon, policy-safe acne/pigmentation messaging |
| 2 | /industries/haircare-marketing-agency/ | haircare marketing agency | hair care brand marketing, hair oil marketing | hair fall/oil/shampoo categories, men's haircare, longer results window (weeks), before-after policy limits, regional buyers, quick commerce |
| 3 | /industries/cosmetics-marketing-agency/ | cosmetics marketing agency | makeup brand marketing agency, beauty brand marketing agency | shade matching, try-on, creator and UGC, launches and drops, Nykaa/Myntra beauty, gifting |
| 4 | /industries/ayurveda-marketing-agency/ | ayurveda marketing agency | ayurvedic digital marketing agency, herbal products marketing | AYUSH licence and claims rules, traditional language vs ad policy, classical vs proprietary products, diaspora buyers abroad |
| 5 | /industries/perfume-marketing-agency/ | perfume marketing agency | fragrance marketing agency, perfume brand marketing | selling a scent you cannot smell online: notes, discovery sets, samples, gifting seasons, attar and inspired-by brands |
| 6 | /industries/jewellery-marketing-agency/ | jewellery marketing agency | jewellery digital marketing agency, jewelry marketing agency | high ticket, trust, hallmarking, demifine/silver/artificial vs gold, wedding/festive seasons, video and try-on, store visits |
| 7 | /industries/supplement-marketing-agency/ | supplement marketing agency | nutraceutical marketing agency, health supplement marketing | FSSAI nutraceutical rules, strict health-claim policies, subscriptions, protein/gummies/wellness, Amazon dominance |
| 8 | /industries/home-decor-marketing-agency/ | home decor marketing agency | furniture marketing agency, home furnishing brand marketing | high AOV, long consideration, room visuals, shipping/breakage, festive and wedding seasons, Pinterest-style inspiration content |
| 9 | /industries/baby-products-marketing-agency/ | baby products marketing agency | kids brand marketing, baby care brand marketing | parents as buyers, safety and ingredients, life-stage timing, gifting, subscriptions for diapers/wipes, sensitive ad targeting |
| 10 | /industries/pet-brand-marketing-agency/ | pet brand marketing agency | pet food marketing, pet care brand marketing | repeat food purchases, vets and trust, breed/size content, subscriptions, quick commerce |
| 11 | /industries/footwear-marketing-agency/ | footwear marketing agency | shoe brand marketing agency, footwear brand marketing | size and fit, returns and exchanges, Myntra/Ajio, sneakers vs ethnic vs kids, catalogue ads |
| 12 | /industries/electronics-marketing-agency/ | consumer electronics marketing agency | electronics brand marketing, gadget brand marketing | specs and comparisons, warranty and service trust, Amazon/Flipkart dominance, sale events, reviews and video |

Rules that apply to every page: `docs/content-brief.md`, `docs/no-prices-rules.md`, the banned-word list
(best, certified, guarantee, partner claims, CRM names, Webflow). Each page owns its exact primary keyword;
other pages may mention the category but not that exact phrase as an anchor or heading.

## UK and US versions

Each of the 12 pages gets a UK and a US version: `kind: 'industry'`, `market: 'UK' | 'US'`, `twin: '<india slug>'`
(hreflang: India page is x-default), breadcrumb = the market's country hub (as in `uk-meta.ts` / `us-meta.ts`).
Same primary keyword as the India page (hreflang separates them), except US spelling: `us/jewelry-marketing-agency`,
primary keyword `jewelry marketing agency`. Slugs: `uk/<same-slug>` and `us/<same-slug>` (without the `industries/` part),
e.g. `uk/skincare-marketing-agency`, `us/skincare-marketing-agency`.

Market substance to localise (described generally and hedged, no legal advice):
- UK: ASA/CAP code, UK Cosmetics Regulation and product notification, MHRA (herbal THR, borderline products), food
  supplement and nutrition/health claims rules, UK assay office hallmarking, UK product safety/UKCA, WEEE, Amazon UK,
  eBay, Etsy, TikTok Shop, retailers such as Boots, Superdrug, John Lewis as context only, GBP quotes, London E18 office.
- US: FTC advertising and endorsement rules, FDA cosmetics (MoCRA), DSHEA structure/function claims and disclaimer,
  CPSC/CPSIA for children's products, FCC for electronics, AAFCO and state rules for pet food, Amazon US, Walmart,
  Target, TikTok Shop, Ulta/Sephora as context only, USD quotes, delivered remotely (no US office).
