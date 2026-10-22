# Launch checklist

## Replace placeholders
- [ ] Phone, WhatsApp number, email, street address, postcode: `src/data/site.ts` (must match Google Business Profile exactly)
- [ ] Live domain: `src/data/site.ts`, `astro.config.mjs`, `public/robots.txt`, `public/llms.txt`
- [ ] Form handler (Web3Forms / Formspree / CRM webhook): `site.formEndpoint`
- [ ] Social profile links: `site.social`
- [ ] Founder name/photo (homepage quote) and team names/photos (About page)
- [ ] Case studies marked "Example": replace with real, client-approved results or remove

## Confirm business terms used in the copy
- [ ] All starting prices (`docs/content-brief.md` price list, `src/data/pricing.ts`) and package contents
- [ ] Free audit delivered within 24 working hours
- [ ] 3-month initial period, then month to month with 30 days' notice; "no long lock-in"
- [ ] Weekly reporting; replies within one working day
- [ ] Payment terms on Pricing FAQ (50/50 for projects, retainers billed monthly in advance, USD accepted)
- [ ] Offers mentioned by page writers: monthly development retainer (Bangalore page), WooCommerce maintenance plans, 30 days post-launch support, travel costs agreed upfront for Bangalore visits
- [ ] Careers roles listed on /careers/

## Confirm terms added in the later pages
- [ ] GBP / AUD / AED invoicing, a named contact per client, meetings in Dubai for larger projects (country pages)
- [ ] "Requests before lunch handled the same day" (UK page)
- [ ] Example case-study pages (`src/data/cases.ts`, set `example: false` only with real data; they are noindexed until then)

## Confirm terms on business website pages
- [ ] Business website prices (₹30,000 WordPress, ₹35,000 business site, ₹75,000+ corporate/CMS) and package contents
- [ ] Maintenance plans: Basic ₹5,000 (weekly backups, 2 hrs changes), Business ₹12,000 (daily backups, 6 hrs), Store ₹25,000 (checkout tests, 12 hrs); 3-month initial period
- [ ] Timelines: 3–4 weeks business site, 3–8 / 6–10 weeks corporate; training videos; 2FA and daily off-site backups (WordPress)

## Review facts written by the content team
- [ ] Platform details (Amazon DSP/Brand Registry, Flipkart ad formats, Shopify technical notes, quick-commerce onboarding) are current
- [ ] Tools named on pages (Helium 10, Semrush, etc.) are ones the team actually uses
- [ ] Platform facts in blog guides (Etsy tag limits, Amazon Global Selling steps, Flipkart ad formats, quick-commerce onboarding) are current
- [ ] Privacy policy and terms reviewed by a lawyer

## Before going live
- [ ] Google Search Console + GA4 + Meta pixel, conversion events for form, WhatsApp and call clicks
- [ ] Submit sitemap (`/sitemap-index.xml`)
- [ ] Google Business Profile created with identical NAP
- [ ] Lighthouse check on home, a service page and a blog post (target 95+)

## Confirm terms on United States pages (`/us/…`)
- [ ] USD prices: white-label SEO US$350 / site / month, SEO outsourcing US$500 / month; all other US services "quoted in USD after audit"
- [ ] Time-zone promise: short overlap in the US Eastern morning, overnight turnaround
- [ ] No Shopify Plus Partner / Amazon partner status is claimed. Update the copy if you join either programme
- [ ] Engagement models on /us/hire-shopify-developer/ (fixed project, dedicated monthly developer, hourly bank)

## Confirm terms on United Kingdom pages (`/uk/…`)
- [ ] All UK services quoted in GBP after audit (no published GBP prices yet)
- [ ] Engagement options on /uk/shopify-developer/ (fixed task, monthly developer, block of hours)
- [ ] UK compliance mentions (UK GDPR, ASA/CAP, VAT) are general guidance only and reviewed by a UK adviser

## Confirm terms on UAE pages (`/uae/…`)
- [ ] All UAE services quoted in AED after audit; lead-form ranges in AED
- [ ] No Dubai office, address or meetings promised (pages say "Chennai team serving Dubai remotely")
- [ ] Noon details (seller registration, Fulfilled by Noon, Noon Ads, Yellow Friday) in /blog/how-to-sell-on-noon/ and /uae/amazon-noon-agency/ are current

## Confirm terms on Australia pages (`/australia/…`)
- [ ] All Australian services quoted in AUD after audit; lead-form ranges in AUD
- [ ] Time-zone wording (our morning = east-coast afternoon)
- [ ] Published abroad prices (17 Oct 2026): UK £275 white-label SEO / £400 outsourcing; US maintenance US$99 / 199 / 349 (2 / 6 / 12 hrs)

## Offices (added 17 Oct 2026)
- [ ] Bengaluru street address and postcode; phone numbers for Chennai, Bengaluru and London (`site.offices` in `src/data/site.ts`)
- [ ] Google Business Profile for each office, with the address exactly as on the site
- [x] Bangalore page: workshops at the Bengaluru office included in scope; much of the build done by the Chennai team (confirmed 18 Oct 2026)
- [ ] ChatGPT ads: ₹25,000 / month + ad spend; facts on /chatgpt-ads-agency/ (country availability, CPM/CPC, pixel, restricted categories) re-checked against OpenAI's help pages before launch
- [ ] London Google Business Profile at the E18 address (most London keywords show a Maps pack); UK phone number in `site.offices`
- [ ] Free ecommerce website checker: create a Google PageSpeed Insights API key (Google Cloud → APIs → PageSpeed Insights API → Credentials), restrict it to the live domain, paste it into `psiKey` in `src/data/site.ts`
