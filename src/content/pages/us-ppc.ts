import type { ServicePageData } from '../../data/types';

const usBreadcrumb = [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }];

export const usPpcPages: ServicePageData[] = [
  // ───────────────────────── Ecommerce PPC agency (US) ─────────────────────────
  {
    slug: 'us/ecommerce-ppc-agency',
    kind: 'global',
    market: 'US',
    twin: 'ecommerce-ppc-agency',
    title: 'Ecommerce PPC Agency for US Brands: Shopping & PMax',
    description: 'Ecommerce PPC agency for US online stores: Google Shopping, Performance Max, Search and Microsoft Ads run on profit, with feed fixes and USD quotes after an audit.',
    primaryKeyword: 'ecommerce PPC agency',
    navLabel: 'Ecommerce PPC Agency',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Google Shopping · Performance Max · Microsoft Ads',
    h1: 'Ecommerce PPC Agency That Bids on *Profit*, Not Revenue',
    intro: 'Billion Ecommerce Agency is an ecommerce PPC agency for US online stores. We run Google Shopping, Performance Max, Search and Microsoft Advertising from a clean Merchant Center feed, set ROAS targets from your real margins and fix conversion tracking first, so every dollar of ad spend can be traced to orders and gross profit.',
    icon: 'social',
    facts: ['Targets set from your margins', 'Accounts stay in your name', 'Quoted in USD after an audit'],
    headings: {
      pains: 'Why US store ad accounts spend more and earn less',
      includes: 'What our ecommerce PPC management covers',
      process: 'How we take over your Google and Microsoft ads in *4 steps*',
      guide: 'Ecommerce PPC for US online stores: a practical guide for founders',
    },
    pains: [
      { title: 'Performance Max eats your brand searches', body: 'Blended campaigns report a healthy ROAS, but much of it comes from people who already typed your brand name and would have bought anyway.' },
      { title: 'One ROAS target for the whole catalog', body: 'A low-margin bestseller and a high-margin accessory get the same goal, so the account scales the products that make the least money.' },
      { title: 'A feed nobody has looked at in months', body: 'Vague titles, missing GTINs and disapproved products quietly limit where your items can show, no matter how the bids are set.' },
    ],
    includes: [
      { title: 'Google Shopping and Performance Max', body: 'Campaigns split by margin, price band or product role, with brand traffic kept separate so you can see what is genuinely new demand.' },
      { title: 'Search with a brand / non-brand split', body: 'Brand terms protected at low cost in their own campaign. Non-brand category and problem searches managed on their own budget and target.' },
      { title: 'Merchant Center feed optimization', body: 'Product titles, GTINs, product types, custom labels by margin, shipping and returns settings, and fixes for disapprovals and price mismatches.' },
      { title: 'Profit-based bidding', body: 'Target ROAS calculated from each product group’s margin, and POAS reporting where your cost data allows, so scaling means more profit.' },
      { title: 'Microsoft Advertising', body: 'Your Google campaigns imported, cleaned up and tuned for Bing and partner traffic, which often behaves differently from Google.' },
      { title: 'Tracking you can trust', body: 'GA4, Google Ads conversion tags, enhanced conversions and server-side tagging set up and checked against your store orders.' },
      { title: 'Remarketing, YouTube and Demand Gen', body: 'Supporting campaigns for past visitors and lookalike-style audiences, kept on a small budget until they show incremental orders.' },
      { title: 'BFCM and holiday planning', body: 'Budgets, promotions, feed annotations and shipping cut-off messaging planned weeks before Black Friday, Cyber Monday and Christmas.' },
    ],
    platforms: ['Google Ads', 'Google Merchant Center', 'Microsoft Advertising', 'Google Analytics 4', 'Google Tag Manager', 'YouTube', 'Shopify', 'WooCommerce'],
    process: [
      { title: 'Free account audit', body: 'We review your Google Ads, Microsoft Ads, Merchant Center and GA4 data plus your margins, then walk you through what we found on a call in your morning.' },
      { title: 'Profit model and USD quote', body: 'We agree break-even ROAS by product group, propose a campaign plan and quote a monthly management fee in USD. Ad spend stays billed to you by Google and Microsoft.' },
      { title: 'Tracking and feed fixes', body: 'Conversion tracking, consent settings and the product feed are fixed first, because bidding on bad data only scales the wrong things.' },
      { title: 'Rebuild and weekly optimization', body: 'Campaigns are restructured in stages. After that we adjust targets, queries, feed labels and budgets each week, mostly overnight in US time, with a written change note.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four parts of an ecommerce PPC account that decide whether ads make money.', after: 0, center: 'Profitable store ads', branches: [
        { label: 'Campaigns', items: ['Shopping and Performance Max', 'Brand vs non-brand Search', 'Microsoft Advertising'] },
        { label: 'Product feed', items: ['Clear titles and GTINs', 'Margin custom labels', 'Shipping and returns set'] },
        { label: 'Targets', items: ['ROAS from real margins', 'Profit per order (POAS)', 'Separate goals by product'] },
        { label: 'Tracking', items: ['GA4 and Ads tags checked', 'Enhanced conversions', 'Consent handled properly'] },
      ] },
      { type: 'matrix', caption: 'Using margin and sales volume to decide how hard each product group should push.', after: 2, cols: ['High margin', 'Low margin'], rows: ['Strong sales volume', 'Weak sales volume'], cells: [
        { title: 'Scale', body: 'Lower ROAS target and more budget while profit holds' },
        { title: 'Protect profit', body: 'Higher ROAS target; sales come in, keep cost per order tight' },
        { title: 'Test properly', body: 'Give it its own budget and better feed titles before judging' },
        { title: 'Limit spend', body: 'Minimal budget, or exclude it and let organic sales carry it' },
      ] },
      { type: 'steps', caption: 'A BFCM run-up for Google Shopping and Search, starting well before the week itself.', after: 4, steps: [
        { title: 'Plan in September', body: 'Stock, offers and margin floors agreed' },
        { title: 'Load promotions', body: 'Merchant Center promos and sale prices' },
        { title: 'Raise budgets', body: 'Build data in the days before the peak' },
        { title: 'Watch it daily', body: 'Budgets, stock-outs and disapprovals' },
        { title: 'Shift to shipping', body: 'Cut-off dates, then gift cards' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce PPC agency should do for an online store',
        paragraphs: [
          'Paid search for an online store is different from lead generation. You are not bidding on a few dozen keywords; you are advertising hundreds or thousands of products, each with its own price, margin and stock level. A good ecommerce PPC agency spends as much time on the product feed, the conversion data and your margins as it does inside the Google Ads interface.',
          'In practice the weekly work looks like this: check that tracking still matches store orders, review search queries and add negatives, adjust ROAS targets by product group, fix feed errors in Merchant Center, and move budget towards the campaigns that bring new customers at a profit. Ask any agency to show you a real change log and explain how they separate brand sales from new demand.',
          'Ownership matters too. Your Google Ads, Microsoft Advertising, Merchant Center and GA4 accounts should stay in your company’s name, with the agency added as a user. Ad spend should be billed by Google and Microsoft directly to your card or invoice, not resold with a markup.',
        ],
      },
      {
        heading: 'Google Shopping, Performance Max and Search: how they fit together',
        paragraphs: [
          'Google now steers most stores towards Performance Max for Shopping, and it can work well. The catch is that it blends Shopping, Search, YouTube, Display, Gmail and Discover into one campaign, and it happily takes credit for brand searches. Without brand exclusions or a separate brand Search campaign, a strong ROAS figure can hide weak results on new customers.',
          'A structure we often use keeps three layers. A brand Search campaign protects your name at low cost. Non-brand Search covers high-intent category and problem searches, such as “waterproof hiking boots women”, with tight match types and negatives. Shopping and Performance Max campaigns are split by margin or product role using custom labels, so a bestseller and a slow mover do not share one budget. Standard Shopping is still useful for testing and for tighter control of search queries.',
          'Microsoft Advertising deserves a place too. It can import your Google campaigns, but its audience on Bing, Yahoo and partner sites behaves differently, so it needs its own bids rather than a straight copy.',
        ],
      },
      {
        heading: 'Merchant Center feed optimization for US shoppers',
        paragraphs: [
          'Shopping ads have no keywords. Google decides when to show a product mostly from your feed, so the feed is where a lot of performance is won or lost. These fixes come up in almost every audit:',
        ],
        bullets: [
          'Titles that lead with what shoppers type: brand, product type, key attribute, size or color',
          'Correct GTINs (UPC codes) for branded products, and the right identifier settings for your own products',
          'Custom labels for margin band, bestseller status, season and clearance, so campaigns can be split by profit',
          'Prices without sales tax, since US prices are shown tax-exclusive and must match your product pages',
          'Shipping speed, free shipping thresholds and return policy set in Merchant Center, so annotations can show',
          'Product reviews and promotions submitted where eligible, and disapprovals checked every week',
        ],
      },
      {
        heading: 'Profit-based bidding: target ROAS from margins, and POAS',
        paragraphs: [
          'Revenue-based ROAS hides the real question: did this ad make money? Start with break-even ROAS, which is one divided by your contribution margin after product cost, shipping, payment fees and typical returns. A product group with a 40% margin breaks even at a ROAS of 2.5; one with a 25% margin needs 4.0. Setting one target across both either overspends on the thin-margin items or holds back the profitable ones.',
          'Profit on ad spend, or POAS, goes one step further by sending gross profit instead of revenue as the conversion value, usually through server-side tagging that reads product cost. It takes more setup, but it lets Google’s bidding chase profit directly. For many stores, margin-based custom labels and separate ROAS targets get most of the benefit with far less engineering, so we usually start there.',
          'An ecommerce PPC agency should also tell you when to stop scaling. Past a certain point, extra spend buys more expensive clicks from less interested shoppers. Watch new-customer revenue, blended marketing cost and profit per order, not only in-platform ROAS.',
        ],
      },
      {
        heading: 'Tracking, privacy and the US holiday calendar',
        paragraphs: [
          'Smart bidding is only as good as the conversions it learns from. A sound setup includes GA4 with ecommerce events, Google Ads conversion tags that fire once per order, enhanced conversions using hashed customer data, and, for larger stores, server-side tagging to recover data that browsers block. We check reported conversions against actual store orders before changing any bids.',
          'Privacy rules in the US are set state by state. California’s CCPA, as amended by the CPRA, gives residents the right to opt out of the sale or sharing of personal data, and several other states have similar laws. In plain terms, your cookie banner, privacy policy and ad tags need to respect opt-outs and signals such as Global Privacy Control. We configure tags to follow your consent settings, but we are not lawyers, so have your counsel confirm what your store needs.',
          'Then there is the calendar. Black Friday and Cyber Monday raise both traffic and cost per click, and the weeks after bring shipping cut-off dates, last-minute gifts and returns. Plan offers and margin floors early, load promotions into Merchant Center ahead of time, and raise budgets a few days before peak days so campaigns have data to work with.',
        ],
      },
      {
        heading: 'Hiring an ecommerce PPC agency from India',
        paragraphs: [
          'We are a Chennai, India team with no US office, and we say so upfront. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, or 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your morning, which is our evening, for calls. Most optimization happens while the US sleeps, so you start the day with a note of what changed. We do not offer support during US business hours.',
          'If you also sell on Amazon.com, keep Google and Amazon budgets in the same plan so the two channels do not compete for the same shoppers; our Amazon PPC team handles Sponsored Products and Sponsored Brands. Whoever you hire, judge the ecommerce PPC agency on profit and new-customer growth, ask for weekly change logs, and make sure you can remove their access at any time.',
        ],
      },
    ],
    related: [
      { label: 'Free ad budget planner', href: '/tools/ad-budget-planner/' },
      { label: 'Ecommerce Meta ads agency (US)', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Amazon PPC agency for Amazon.com sellers', href: '/us/amazon-ppc-agency/' },
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Shopify SEO agency for US stores', href: '/us/shopify-seo-agency/' },
      { label: 'ChatGPT ads agency (US)', href: '/us/chatgpt-ads-agency/' },
      { label: 'Generative engine optimization agency for US brands', href: '/us/generative-engine-optimization-agency/' },
      { label: 'Free ROAS calculator for ad campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce PPC agency do?', a: 'It plans and manages paid ads for an online store, mainly Google Shopping, Performance Max, Search and Microsoft Advertising. The work covers campaign structure, Merchant Center feed fixes, conversion tracking, ROAS targets set from your margins, weekly query and budget changes, seasonal planning and clear reporting on orders and profit.' },
      { q: 'How much does an ecommerce PPC agency cost?', a: 'We quote a monthly management fee in USD after a free audit. The fee depends on the number of channels, catalog size, feed condition, tracking work needed and monthly ad spend. Your ad spend is billed by Google and Microsoft directly to your own accounts, separately from our fee.' },
      { q: 'Is Performance Max good for ecommerce stores?', a: 'It can be, once tracking and the product feed are in good shape. Keep brand searches out of it or in a separate campaign, split products by margin with custom labels, and judge it on new-customer sales and profit rather than the blended ROAS shown in Google Ads.' },
      { q: 'What is a good ROAS for an online store?', a: 'A good ROAS is one above your break-even ROAS, which is one divided by your contribution margin after product cost, shipping, fees and returns. A 40% margin breaks even at 2.5. Targets should differ by product group, and new-customer campaigns can run lower on purpose.' },
      { q: 'Do you manage Microsoft Advertising as well as Google Ads?', a: 'Yes. We import and adapt your Google Shopping and Search campaigns for Microsoft Advertising, then manage bids, negatives and budgets separately. Its audience on Bing and partner sites often behaves differently, so it rarely performs well as an untouched copy of your Google account.' },
      { q: 'Who owns the ad accounts and data?', a: 'You do. Google Ads, Microsoft Advertising, Merchant Center and GA4 stay in your company’s name, with our team added as users. Spend is billed by the platforms directly to you. If we stop working together, you remove our access and keep every campaign and all the history.' },
      { q: 'What hours do you work in US time?', a: 'India is 9.5 hours ahead of US Eastern in summer and 10.5 in winter. We overlap briefly with your morning for calls and do most optimization while the US sleeps, so changes are done when your day starts. We do not offer support during US business hours.' },
    ],
  },
];
