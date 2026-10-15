# Magnus Path — website

Marketing website for Magnus Path, an e-commerce growth agency (websites, ads, SEO) based in Chennai.
Built with [Astro](https://astro.build) as a static site for speed and SEO.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Where things live
- `src/data/site.ts` — business details (phone, address, WhatsApp, form endpoint) and navigation. **Values marked TODO must be filled before launch.**
- `src/pages/` — one file per page (`index.astro` = homepage)
- `src/components/` — header, footer, FAQ, lead form; `components/home/` = homepage sections
- `src/styles/global.css` — design tokens (colours, fonts, spacing)
- `docs/` — website structure plan and design direction
- `research/` — keyword research workbooks

## Before launch
- Replace placeholders: contact details, founder name, form endpoint, domain (`astro.config.mjs`, `public/robots.txt`, `public/llms.txt`)
- Replace content marked **Example** / **Sample** / **Illustrative** with real, client-approved results
