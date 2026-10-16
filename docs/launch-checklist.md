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

## Review facts written by the content team
- [ ] Platform details (Amazon DSP/Brand Registry, Flipkart ad formats, Shopify technical notes, quick-commerce onboarding) are current
- [ ] Tools named on pages (Helium 10, Semrush, etc.) are ones the team actually uses
- [ ] Privacy policy and terms reviewed by a lawyer

## Before going live
- [ ] Google Search Console + GA4 + Meta pixel, conversion events for form, WhatsApp and call clicks
- [ ] Submit sitemap (`/sitemap-index.xml`)
- [ ] Google Business Profile created with identical NAP
- [ ] Lighthouse check on home, a service page and a blog post (target 95+)
