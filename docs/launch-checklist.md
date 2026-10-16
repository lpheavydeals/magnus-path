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
