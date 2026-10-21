import type { ServicePageData } from '../../data/types';

const londonBreadcrumb = [
  { label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' },
  { label: 'London', href: '/london/ecommerce-agency/' },
];

const londonAreas = ['Stratford', 'Walthamstow', 'Woodford', 'Ilford', 'Canary Wharf', 'Shoreditch', 'Islington', 'the City', 'Camden', 'Hackney'];

export const londonGrowthPages: ServicePageData[] = [
  // ───────────────────────── 1. PPC Agency in London ─────────────────────────
  {
    slug: 'london/ppc-agency',
    kind: 'location',
    market: 'UK',
    title: 'PPC Agency London for Google, Microsoft & Meta | Magnus Path',
    description: 'PPC agency in London for online shops and service firms: Google Ads, Shopping, Performance Max, Microsoft and Meta ads with clean tracking. Quoted in GBP.',
    primaryKeyword: 'PPC agency in London',
    navLabel: 'PPC Agency London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'PPC in London · Google Ads · Shopping · Microsoft · Meta',
    h1: 'PPC Agency in London That Bids on *Profit, Not Clicks*',
    intro: 'Magnus Path is a PPC agency in London for online shops and service businesses that pay some of the highest click prices in the country. We run Google Ads, Shopping, Performance Max, Microsoft Ads and Meta ads with tracking you can trust and bids set by margin. Meet us at our East London office, and get a GBP quote after a free audit.',
    icon: 'social',
    facts: ['London office in E18, meetings by appointment', 'Google, Microsoft and Meta ads', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'Why London ad accounts *burn budget* faster',
      includes: 'What our London PPC team manages',
      process: 'Working with our London PPC team in *4 steps*',
      guide: 'PPC in London: a practical guide for online shops and service businesses',
    },
    pains: [
      { title: 'Paying London prices for the wrong clicks', body: 'Broad keywords, loose match types and Performance Max left on autopilot buy clicks from people who were never going to order or call. In London, every wasted click costs more.' },
      { title: 'Conversions you cannot trust', body: 'Duplicate purchase tags, missing enhanced conversions and a consent banner that blocks measurement mean Google optimises towards guesses. The account looks busy but the numbers do not match your sales.' },
      { title: 'Reports that ignore margin', body: 'A healthy ROAS on low-margin products can still lose money. Most reports show clicks, CTR and revenue, but nobody asks which products or services actually make a profit after ad costs.' },
    ],
    includes: [
      { title: 'PPC account audit', body: 'A full review of structure, search terms, match types, bidding, feeds, assets and wasted spend, explained in plain English with the fixes ranked by likely impact.' },
      { title: 'Google Search and Shopping', body: 'Search campaigns built around real buyer intent, plus Shopping and Performance Max for online shops with a cleaned-up Merchant Center feed and sensible product groups.' },
      { title: 'Microsoft Ads', body: 'Your best Google campaigns imported and tuned for Bing, where business searchers and older audiences often click for less. Run as a separate budget, not a copy left alone.' },
      { title: 'Meta ads alongside PPC', body: 'Facebook and Instagram prospecting and retargeting that feeds demand into search, with creative testing and audiences planned with your Google campaigns, not against them.' },
      { title: 'Tracking and consent', body: 'GA4, Google Tag Manager, enhanced conversions, Consent Mode v2 and offline lead imports set up so bidding learns from real orders and qualified enquiries under UK GDPR.' },
      { title: 'Margin-based bidding and GBP reports', body: 'Targets set by product or service margin, not one blanket ROAS. Monthly reports in GBP show spend, profit and leads, with notes on what changed and what comes next.' },
    ],
    platforms: ['Google Ads', 'Performance Max', 'Google Merchant Center', 'Microsoft Advertising', 'Meta Ads Manager', 'Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Shopify', 'WooCommerce'],
    process: [
      { title: 'Free audit and meeting', body: 'We audit your account and tracking, then go through the findings on a call or at our East London office, by appointment.' },
      { title: 'Plan and GBP quote', body: 'A written plan with campaign structure, budgets, margin targets and tracking fixes, and a monthly management fee in GBP.' },
      { title: 'Rebuild and launch', body: 'Tracking is fixed first, then campaigns are restructured in stages so proven keywords and learning are not thrown away.' },
      { title: 'Optimise and review', body: 'Weekly search-term, bid and creative work, with requests sent before UK lunchtime usually handled the same day and monthly reviews.' },
    ],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'Our London office is in E18, East London, close to Woodford, Walthamstow and Stratford. Clients can meet the team there by appointment, while most campaign work is done by our Chennai team, so optimisation continues after UK hours.',
    },
    figures: [
      { type: 'mindmap', caption: 'What decides whether a London PPC account makes money.', after: 0, center: 'Profitable London PPC', branches: [
        { label: 'Tracking', items: ['GA4 and enhanced conversions', 'Consent Mode v2', 'Offline lead imports'] },
        { label: 'Targeting', items: ['Tight match types', 'Negative keywords', 'London postcodes and radius'] },
        { label: 'Bidding', items: ['Targets by margin', 'Separate brand campaigns'] },
        { label: 'Channels', items: ['Google Search and Shopping', 'Microsoft Ads', 'Meta for demand'] },
      ] },
      { type: 'matrix', caption: 'Where to put the next pound of budget, by margin and search demand.', after: 3, cols: ['High margin', 'Low margin'], rows: ['Strong search demand', 'Weak search demand'], cells: [
        { title: 'Push hard', body: 'Search and Shopping with higher bids and budget' },
        { title: 'Bid carefully', body: 'Tight ROAS targets; bundle to lift order value' },
        { title: 'Create demand', body: 'Meta and video first, then retarget in search' },
        { title: 'Hold back', body: 'Keep in the feed but spend little on ads' },
      ] },
    ],
    guide: [
      {
        heading: 'What a PPC agency in London should actually do',
        paragraphs: [
          'A PPC agency in London manages your paid search and paid social so that each pound spent brings back orders or enquiries at a profit. That sounds obvious, but many accounts are judged on clicks and click-through rate instead. The work that matters is less visible: cleaning search terms, fixing tracking, shaping the product feed and deciding where budget should not go.',
          'London adds pressure. Competition for most commercial searches is heavy, because national brands, local rivals and marketplaces all bid for the same people. Click prices are usually higher than in most UK regions, so mistakes cost more and good structure pays back faster.',
          'That is why the first month with a new PPC agency in London should feel like housekeeping rather than fireworks. Expect wasted spend to be cut, tracking repaired and campaigns grouped by intent and margin. Growth comes after the account is learning from clean data, usually once budgets are moved from the weakest campaigns into the ones that already make money.',
        ],
      },
      {
        heading: 'Start with an account audit and tracking you can trust',
        paragraphs: [
          'Before changing bids, check what the account is learning from. Smart Bidding and Performance Max optimise towards the conversions you report. If purchases fire twice, if calls from a form are counted as sales, or if your cookie banner blocks tags without Consent Mode, Google is chasing the wrong signal.',
          'A proper audit covers campaign structure, search terms, match types, negatives, the Merchant Center feed, assets and landing pages. For tracking, we check GA4, Google Tag Manager, enhanced conversions and Consent Mode v2 against your real order or lead numbers. UK GDPR and cookie consent rules apply here; we set things up carefully, but we are not lawyers, so check your privacy policy with your own adviser.',
        ],
        bullets: [
          'One clean purchase or lead conversion per action, with values',
          'Enhanced conversions switched on and tested',
          'Consent Mode v2 linked to your cookie banner',
          'Offline imports for leads that close by phone or email',
        ],
      },
      {
        heading: 'Choosing a PPC partner in London',
        paragraphs: [
          'Google Ads is still where most London buyers start when they know what they want. A good PPC team separates brand and non-brand campaigns, uses exact and phrase match where intent is clear, and keeps broad match on a short leash with strong negatives and good conversion data.',
          'For London service businesses such as clinics, trades, solicitors or training providers, location settings matter. Target the postcodes and boroughs you actually serve, exclude areas you do not, and use call and lead form assets. A plumber in Walthamstow does not want to pay for clicks from Croydon.',
        ],
      },
      {
        heading: 'Shopping, Performance Max and bidding by margin',
        paragraphs: [
          'For online shops, Shopping and Performance Max usually drive most sales. Results depend on the feed: clear titles with brand, product type, colour and size, accurate GBP prices including VAT, correct stock and good images. A messy feed makes even the smartest campaign guess.',
          'Margin is the other half. A single ROAS target across the whole catalogue overspends on thin-margin lines and starves the profitable ones. We group products by margin and price, set targets for each group and review profit, not just revenue, every month.',
        ],
      },
      {
        heading: 'Microsoft Ads and Meta ads alongside PPC',
        paragraphs: [
          'Microsoft Ads is smaller than Google but often cheaper per click, and it reaches office workers and older shoppers who use Edge and Bing by default. Importing your Google campaigns is a fair start, but they need their own budgets, negatives and bid checks.',
          'Meta ads work differently. Facebook and Instagram create demand rather than capture it, so they suit new products, gifting and visual categories such as fashion, beauty and food. Run alongside PPC, they fill retargeting lists and lift branded searches, which search campaigns then convert at a lower cost.',
        ],
      },
      {
        heading: 'How to choose a PPC agency in London',
        paragraphs: [
          'Whichever PPC agency in London you talk to, ask practical questions. The answers show quickly whether they manage accounts closely or just send monthly screenshots.',
        ],
        bullets: [
          'Who works on the account each week, and can you meet them?',
          'Will you own the ad accounts, tag manager and data?',
          'How are targets set: by margin and lead quality, or one ROAS figure?',
          'What does the monthly report show, in GBP, beyond clicks?',
          'Is there a notice period rather than a long lock-in?',
        ],
      },
      {
        heading: 'Working with our London PPC team',
        paragraphs: [
          'We have a London office in E18, East London, where you can meet the team by appointment to plan campaigns or review results. Most day-to-day work is done by our Chennai team, which means search-term reviews and bid changes often happen while you are offline, and requests sent before UK lunchtime are usually handled the same day.',
          'We quote a monthly management fee in GBP after a free audit, and your ad spend is paid directly to Google, Microsoft or Meta. If you want one PPC agency in London that also understands your Shopify store and your SEO, the same team can cover those too.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce PPC agency (UK)', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'ChatGPT ads agency (UK)', href: '/uk/chatgpt-ads-agency/' },
      { label: 'E-commerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
      { label: 'E-commerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
      { label: 'Amazon agency in London', href: '/london/amazon-agency/' },
    ],
    faqs: [
      { q: 'What does a PPC agency in London do?', a: 'It plans, builds and manages paid ads on Google, Microsoft and Meta for London businesses. That covers keyword research, campaign structure, Shopping feeds, tracking, bidding, ad copy and creative, plus regular reporting. The aim is profitable orders or qualified enquiries, not just more clicks.' },
      { q: 'Do you manage Google Ads as well as Microsoft and Meta?', a: 'Yes. Google Search, Shopping, Performance Max, YouTube and Demand Gen sit alongside Microsoft Advertising and Meta for London online shops and service businesses. We have a London office for meetings by appointment, and our Chennai team handles most daily optimisation, so accounts are reviewed across a longer working day.' },
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), and you can meet the team there by appointment for planning sessions and reviews. Most delivery is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
      { q: 'How much does PPC management cost in London?', a: 'We quote a monthly management fee in GBP after a free audit, because the right scope depends on your channels, number of campaigns, product catalogue and tracking needs. Ad spend is separate and paid directly to Google, Microsoft or Meta, so you always own the accounts.' },
      { q: 'Why are Google Ads clicks so expensive in London?', a: 'London has dense competition: national brands, local rivals and marketplaces all bid on the same searches, and many London customers are worth more over time. Tight targeting, strong negatives, good landing pages and accurate conversion data are the best ways to keep cost per sale under control.' },
      { q: 'Do you set up enhanced conversions and Consent Mode?', a: 'Yes. We set up GA4, Google Tag Manager, enhanced conversions and Consent Mode v2 linked to your cookie banner, then test them against real orders or leads. We follow UK GDPR good practice, but we are not lawyers, so your privacy policy should be checked by your adviser.' },
      { q: 'Should I run Microsoft Ads and Meta ads as well as Google?', a: 'Often, yes. Microsoft Ads can bring cheaper clicks from business and older audiences, and Meta ads create demand for products people are not yet searching for. We usually start with Google, prove the tracking, then add other channels with their own budgets and targets.' },
    ],
  },

  // ───────────────────────── 2. Shopify Agency in London ─────────────────────────
  {
    slug: 'london/shopify-agency',
    kind: 'location',
    market: 'UK',
    title: 'Shopify Agency London: Builds & Developers | Magnus Path',
    description: 'Shopify agency in London for retail, fashion, beauty and food brands: builds, redesigns and Shopify developers, with meetings at our East London office. GBP.',
    primaryKeyword: 'Shopify agency in London',
    navLabel: 'Shopify Agency London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Shopify in London · Builds · Redesigns · Development',
    h1: 'Shopify Agency in London for *Independent Brands*',
    intro: 'Magnus Path is a Shopify agency in London for retail, fashion, beauty and food brands that want a store their customers enjoy using. We design, build and improve Shopify stores, from new launches to developer fixes and Shopify Plus work. Meet us at our East London office by appointment, and get a fixed GBP quote after a free audit.',
    icon: 'shopify',
    facts: ['Meet us at our East London office', 'Builds, redesigns and developer work', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'What London brands tell us about *their Shopify store*',
      includes: 'What our Shopify experts in London deliver',
      process: 'From first meeting to launch in *4 steps*',
      guide: 'Shopify in London: a guide for brands choosing an agency or developer',
    },
    pains: [
      { title: 'A store that does not match the shop', body: 'Your shop on Upper Street or your stall at a weekend market looks and feels considered. The website runs on a stock theme with blurry photos and copy that could belong to anyone.' },
      { title: 'Apps piling up, speed dropping', body: 'Each new feature arrived as another app. Now the store is slow on mobile, the monthly app bill keeps rising and nobody is sure which scripts are still needed.' },
      { title: 'Delivery promises nobody can find', body: 'You offer quick London delivery or click and collect, but shoppers only discover it at checkout, if at all. Local customers leave for brands that make the offer obvious.' },
    ],
    includes: [
      { title: 'New Shopify store builds', body: 'Online Store 2.0 builds on a premium or custom theme, designed around your products and photography, with collection, product and landing templates your team can edit.' },
      { title: 'Redesigns and migrations', body: 'Redesigns of tired themes and moves from WooCommerce, Squarespace or Magento, with product data, customers, 301 redirects and SEO checks handled before launch.' },
      { title: 'Shopify developer work', body: 'Custom sections, theme fixes, speed work, app clean-ups and integrations with your EPOS, 3PL or accounting tools, on a project or a monthly retainer.' },
      { title: 'VAT, payments and checkout', body: 'VAT-inclusive prices, GBP formatting, Shopify Payments with Apple Pay and Google Pay, plus Klarna or Clearpay and PayPal, tested on real phones.' },
      { title: 'Local delivery and click and collect', body: 'Shopify local delivery zones, pickup at your shop, courier rates and clear cut-off messages, so London customers see their delivery options before the basket.' },
      { title: 'Shopify Plus support', body: 'Checkout extensibility, Shopify Functions, B2B price lists and Markets for Ireland and the EU for growing brands that have moved to, or are considering, Shopify Plus.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'Shopify POS', 'Shopify Markets', 'Klaviyo', 'Klarna', 'Clearpay', 'PayPal', 'Google Analytics 4', 'Figma'],
    process: [
      { title: 'Free audit and meeting', body: 'We review your store or plans, apps and analytics, then talk it through on a call or at our East London office.' },
      { title: 'Scope and GBP quote', body: 'A written scope listing pages, integrations, migration work and launch date, with a fixed quote in GBP before anything starts.' },
      { title: 'Design and build', body: 'Designs with your real products, then development on an unpublished theme you can review each day and comment on before lunch.' },
      { title: 'Launch and aftercare', body: 'Test orders, redirects and tracking checks before go-live, then a support period, team training and optional monthly developer time.' },
    ],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'Our London office is in E18, East London, a short trip from Stratford, Walthamstow and Ilford. You can meet the team there by appointment for workshops and reviews; most design and development is done by our Chennai team.',
    },
    figures: [
      { type: 'venn', caption: 'Why London brands with a physical shop need the store and the website to work together.', after: 0, left: { title: 'Your London shop', body: 'Walk-in customers, events, click and collect, POS stock' }, right: { title: 'Your Shopify store', body: 'Orders from across the UK, delivery, email and ads' }, overlap: 'One stock pool, one customer list' },
      { type: 'matrix', caption: 'Shopify or Shopify Plus: a quick way to decide.', after: 4, cols: ['Simple checkout needs', 'Custom checkout or B2B'], rows: ['Growing steadily', 'High volume or wholesale'], cells: [
        { title: 'Stay on Shopify', body: 'Spend on design, content and ads instead' },
        { title: 'Try apps first', body: 'Checkout apps and B2B tools before upgrading' },
        { title: 'Review costs', body: 'Compare Plus fees with what you pay in apps' },
        { title: 'Move to Plus', body: 'Functions, B2B and checkout control earn it' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Shopify agency in London should handle',
        paragraphs: [
          'A Shopify agency in London should do more than install a theme. A good one plans the store around how your customers buy: what they look for first, which questions stop them ordering and how delivery and returns are explained. For London brands that also run a shop, a stall or pop-ups, it should connect the website with Shopify POS so stock and customer records stay in one place.',
          'The other half is the detail that makes a UK store feel trustworthy: VAT-inclusive prices, British English, UK sizing, clear delivery costs and a returns policy shown before checkout. Get these right and paid ads and SEO both work harder.',
        ],
      },
      {
        heading: 'Shopify for London retail, fashion, beauty and food brands',
        paragraphs: [
          'Fashion brands need clean collection pages, good filters, size guides and imagery that shows fit. Beauty brands need ingredient lists, routines and careful product claims, because the ASA and CAP code limit what you can say about results. Food and drink brands need allergen information, delivery windows that protect fresh products and subscriptions for repeat orders.',
          'Gifting matters in London too. Gift notes, wrapping options and clear last-order dates before Christmas, Mother’s Day and Valentine’s Day are simple to add and often lift order value.',
          'Peak trading needs planning as well. Black Friday and Boxing Day put the most strain on apps, discount codes and stock levels, so speed checks, test orders on mobile and a clear delivery cut-off banner should be done weeks before, not on the morning of the sale. Shopify Markets can then open sales to Ireland and the EU with local prices once the UK store runs smoothly.',
        ],
      },
      {
        heading: 'VAT, Klarna, Clearpay and London delivery options',
        paragraphs: [
          'UK shoppers expect prices that include VAT. Shopify handles this well once tax settings are correct, including reduced or zero-rated products such as some food and children’s clothing. Check the rules with your accountant; we configure the store to match their advice.',
          'Buy now, pay later options such as Klarna and Clearpay suit fashion and beauty baskets, alongside Apple Pay, Google Pay and PayPal. For delivery, London brands can offer local delivery zones by postcode, click and collect from a shop, and same-day or next-day courier options through apps or a local delivery partner. Show the cut-off time on product pages, not just at checkout.',
        ],
        bullets: [
          'Local delivery zones by London postcode',
          'Click and collect from your shop or studio',
          'Courier rates with clear cut-off times',
          'Returns policy linked from every product page',
        ],
      },
      {
        heading: 'Hiring a Shopify developer in London',
        paragraphs: [
          'Not every job needs a full agency project. If your store works but needs custom sections, speed fixes, an app clean-up or an integration with your EPOS or warehouse, a Shopify developer in London on a short project or monthly retainer is usually better value.',
          'Ask any developer how they work: do they build on an unpublished theme, keep code in version control and document changes? Avoid anyone who edits the live theme directly or adds apps to solve every problem. Fewer apps usually means a faster, cheaper store.',
          'Speed is a good first project. Removing unused apps, compressing images, lazy-loading sections below the fold and replacing heavy sliders often make a noticeable difference on mobile, where most London shoppers browse on the bus or Tube.',
        ],
      },
      {
        heading: 'Shopify Plus agency in London: when to upgrade',
        paragraphs: [
          'Shopify Plus suits brands with high order volumes, wholesale customers or checkout needs that standard Shopify cannot meet. It adds checkout extensibility, Shopify Functions for custom discount and delivery logic, B2B price lists and company accounts, and more automation through Shopify Flow.',
          'It is not always the right step. If your main problems are design, content or traffic, Plus fees will not fix them. A Shopify Plus agency in London should show you which features you would use and compare the cost with the apps and workarounds you pay for today.',
        ],
      },
      {
        heading: 'How to choose a Shopify agency in London',
        paragraphs: [
          'Whether you need Shopify experts in London for a full build or a single developer, these questions help you compare honestly. A Shopify agency in London that answers them clearly is usually one you can work with for years.',
        ],
        bullets: [
          'Who designs and builds the store, and can you meet them?',
          'Will you own the theme, the code and every account?',
          'How are redirects and SEO protected during a migration?',
          'What does aftercare include once the store is live?',
          'Is the quote fixed, and what counts as extra work?',
        ],
      },
      {
        heading: 'Working with our London Shopify team',
        paragraphs: [
          'Our London office is in E18, East London, and you can meet the team there by appointment for kick-off workshops, design reviews and launch planning. Most design and development is done by our Chennai team, so work moves on after UK hours and feedback sent before lunchtime is usually acted on the same day.',
          'We are an independent Shopify agency in London rather than a listed Shopify Partner, and we quote in GBP after a free audit, with a fixed scope before any work begins.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'Shopify agency for UK brands', href: '/uk/shopify-agency/' },
      { label: 'Shopify Plus agency in the UK', href: '/uk/shopify-plus-agency/' },
      { label: 'PPC agency in London', href: '/london/ppc-agency/' },
      { label: 'E-commerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
    ],
    faqs: [
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), and you can meet the team there by appointment for workshops, design reviews and launch planning. Most design and development is done by our Chennai team, and feedback sent before UK lunchtime is usually acted on the same day.' },
      { q: 'Can I hire a Shopify developer in London for a small job?', a: 'Yes. We take on smaller Shopify developer work such as custom sections, theme fixes, speed improvements, app clean-ups and integrations. These can be quoted as a fixed project in GBP or covered by a monthly retainer of developer hours, depending on how much ongoing work you expect.' },
      { q: 'Are you a Shopify Partner or Shopify Plus Partner?', a: 'We do not claim Shopify Partner or Shopify Plus Partner status. We are an independent team that builds and develops on Shopify and Shopify Plus every day. You own your store, theme and accounts, and we work inside them with the access you give us.' },
      { q: 'How much does a Shopify store cost in London?', a: 'We quote in GBP after a free audit, because cost depends on the theme, number of custom templates, integrations, product migration and content. Smaller redesigns cost far less than full custom builds. You get a written scope and fixed quote before any work begins.' },
      { q: 'Can you set up same-day or local delivery for London customers?', a: 'Yes. We set up Shopify local delivery zones by postcode, click and collect from your shop and courier rates through suitable apps or delivery partners. We also add clear cut-off messages on product pages so London shoppers know when their order will arrive.' },
      { q: 'Do you work with Shopify Plus brands in London?', a: 'Yes. We build checkout extensions, Shopify Functions, B2B price lists, Shopify Flow automations and Markets for Ireland and the EU. If you are deciding whether to upgrade, we review your current apps and workarounds and tell you honestly whether Plus is worth the extra cost.' },
      { q: 'Can you add Klarna and Clearpay to our Shopify store?', a: 'Yes. We set up Klarna, Clearpay and PayPal alongside Shopify Payments with Apple Pay and Google Pay, then test each option on real phones. We also add on-site messaging so shoppers see instalment options on product pages, not only at checkout.' },
    ],
  },

  // ───────────────────────── 3. Amazon Agency in London ─────────────────────────
  {
    slug: 'london/amazon-agency',
    kind: 'location',
    market: 'UK',
    title: 'Amazon Agency London for Amazon.co.uk Sellers | Magnus Path',
    description: 'Amazon agency in London for Amazon.co.uk sellers: PPC, listings, A+ content, FBA planning and account health support, with an East London office. GBP quotes.',
    primaryKeyword: 'Amazon agency in London',
    navLabel: 'Amazon Agency London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Amazon in London · PPC · Listings · FBA · Account health',
    h1: 'Amazon Agency in London for *Amazon.co.uk* Brands',
    intro: 'Magnus Path is an Amazon agency in London for brands that sell on Amazon.co.uk and want ads, listings and stock managed by one team. We run Amazon PPC, rewrite listings and A+ content, plan FBA stock and help with account health. Meet us at our East London office by appointment, and get a GBP quote after a free account audit.',
    icon: 'amazon',
    facts: ['East London office, meetings by appointment', 'Ads, listings and FBA in one team', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'Where London brands *get stuck* on Amazon',
      includes: 'What our Amazon marketing agency in London manages',
      process: 'Getting started with our Amazon team in *4 steps*',
      guide: 'Amazon in London: a guide for brands selling on Amazon.co.uk',
    },
    pains: [
      { title: 'Amazon treated as a side channel', body: 'Your website and shop get the attention, while Amazon runs on old listings and auto campaigns. Sales come in, but nobody knows whether they are profitable or what they cost in ad spend.' },
      { title: 'Resellers and hijacked listings', body: 'Other sellers appear on your listings, change images or undercut prices. Without Brand Registry set up properly, it is hard to control how your products look on Amazon.co.uk.' },
      { title: 'Ads that eat the margin', body: 'Fees, FBA costs and ad spend add up quickly. A campaign that looks fine on ACoS can still lose money once Amazon’s fees and VAT are taken out.' },
    ],
    includes: [
      { title: 'Amazon PPC management', body: 'Sponsored Products, Sponsored Brands and Sponsored Display on Amazon.co.uk, with search-term harvesting, negatives and bids set from each product’s real margin.' },
      { title: 'Listing optimisation', body: 'Titles, bullet points, backend search terms and images written in British English, with UK sizing and the details London and UK shoppers check before buying.' },
      { title: 'A+ content and Brand Store', body: 'A+ modules that tell your brand story and answer common questions, plus a Brand Store that gives your Sponsored Brands ads a proper landing page.' },
      { title: 'Brand Registry and protection', body: 'Help with Brand Registry, reporting listing abuse and keeping control of titles, images and content when resellers or hijackers appear.' },
      { title: 'FBA and stock planning', body: 'Stock cover by product, inbound shipment timing ahead of Prime Day and Christmas, and checks on stranded or unfulfillable inventory.' },
      { title: 'Account health and GBP reports', body: 'Monitoring of performance notifications with help preparing documented responses, plus monthly reports on spend, sales, TACoS and profit in GBP.' },
    ],
    platforms: ['Amazon Seller Central', 'Amazon Vendor Central', 'Amazon Ads console', 'Brand Registry', 'Fulfilment by Amazon', 'Helium 10', 'Shopify', 'Google Analytics 4'],
    process: [
      { title: 'Free account audit', body: 'We review campaigns, search terms, listings, stock and account health, then go through the findings on a call or at our East London office.' },
      { title: 'Plan and GBP quote', body: 'A written scope covering ads, listings and account management, with profit targets by product and a monthly fee in GBP.' },
      { title: 'Fix the foundations', body: 'Listings, Brand Registry and campaign structure are put right first, keeping proven keywords live so sales history is not lost.' },
      { title: 'Grow and review', body: 'Weekly ad work, monthly listing and stock reviews and a monthly report, with requests before UK lunchtime usually handled the same day.' },
    ],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'Our London office is in E18, East London, near Woodford, Walthamstow and Ilford. London sellers can meet the team there by appointment; most account work is done by our Chennai team, so campaigns and listings keep moving after UK hours.',
    },
    figures: [
      { type: 'steps', caption: 'How we take over an Amazon.co.uk account without losing sales history.', after: 0, steps: [
        { title: 'Get access', body: 'User permissions, not shared passwords' },
        { title: 'Audit', body: 'Ads, listings, stock and account health' },
        { title: 'Fix listings', body: 'Titles, images and A+ before more spend' },
        { title: 'Restructure ads', body: 'Keep winning keywords running' },
      ] },
      { type: 'mindmap', caption: 'What sits behind a profitable product on Amazon.co.uk.', after: 3, center: 'A profitable ASIN', branches: [
        { label: 'Listing', items: ['Clear title and bullets', 'Images and A+ content'] },
        { label: 'Ads', items: ['Exact-match winners', 'Negatives from search terms'] },
        { label: 'Stock', items: ['FBA cover before peaks', 'No stranded inventory'] },
        { label: 'Costs', items: ['Fees and VAT counted', 'TACoS, not just ACoS'] },
      ] },
    ],
    guide: [
      {
        heading: 'What an Amazon agency in London does',
        paragraphs: [
          'An Amazon agency in London manages your brand’s presence on Amazon.co.uk: Sponsored ads, listing copy and images, A+ content, the Brand Store, FBA stock and account health. The job is to make Amazon a profitable channel rather than a place where products sit with old listings and unchecked ad spend.',
          'Many London brands start on Amazon after building a website, a shop or wholesale accounts. They already have good products and photography, but Amazon has its own rules, search behaviour and fees, and it rewards sellers who manage it closely every week.',
          'Amazon also works differently from your own store. Shoppers arrive ready to buy, compare several listings on one screen and decide quickly on price, reviews, delivery speed and images. Your website can tell a long brand story; an Amazon listing has a few seconds. An Amazon agency in London should help you keep the brand consistent while adapting it to how the marketplace actually sells.',
        ],
      },
      {
        heading: 'Choosing an Amazon marketing agency in London',
        paragraphs: [
          'An Amazon marketing agency in London should understand both the marketplace and your wider brand. Ask how they set targets: by ACoS alone, or by profit after Amazon fees, FBA costs and VAT. Ask who will work on the account each week and whether you can meet them.',
          'Make sure you keep ownership. You should hold the Seller Central and Ads accounts and give the agency user permissions, never your password. Monthly reports should show spend, sales, TACoS and profit by product in GBP, not just a summary of impressions.',
        ],
        bullets: [
          'Targets set by profit, not one ACoS figure',
          'Named people on the account, available to meet',
          'User permissions instead of shared logins',
          'A notice period rather than a long lock-in',
        ],
      },
      {
        heading: 'Amazon PPC on Amazon.co.uk',
        paragraphs: [
          'Sponsored Products drive most Amazon ad sales. A sensible structure starts with auto and broad campaigns to find search terms, then moves proven terms into exact-match campaigns with their own bids. Negatives stop spend on irrelevant searches, and branded campaigns protect your name from competitors.',
          'Sponsored Brands and Sponsored Display add reach once the basics work. Sponsored Brands video suits fashion, beauty and homeware, while Display retargets shoppers who viewed your products. Every campaign should be judged on the margin of the products it promotes.',
          'Watch TACoS as well as ACoS. ACoS shows what ads cost against ad sales, while TACoS compares ad spend with total sales, including organic orders. If TACoS falls while sales grow, ads are helping your products rank and sell on their own, which is the outcome worth paying for.',
        ],
      },
      {
        heading: 'Listings, A+ content and Brand Registry',
        paragraphs: [
          'Ads cost less when listings convert. Titles should lead with what the product is, followed by key attributes such as size, colour and quantity. Bullet points should answer the questions shoppers ask, and images should show scale, detail and use. Write in British English with UK sizing and metric measurements.',
          'Brand Registry unlocks A+ content, the Brand Store, Sponsored Brands and better tools for reporting hijackers or wrong listing changes. If resellers or counterfeits are a problem, it is the first thing to sort out.',
        ],
      },
      {
        heading: 'FBA, stock and account health',
        paragraphs: [
          'Fulfilment by Amazon gives your products Prime delivery, which matters to London shoppers used to quick delivery. It also brings storage fees, capacity limits and inbound delays. Plan stock several weeks ahead of Prime Day, Black Friday and Christmas, and check regularly for stranded or unfulfillable inventory.',
          'Account health needs steady attention. Watch performance notifications, keep invoices and safety documents ready, and respond calmly with evidence when a listing is suppressed. We help you prepare clear responses, but no agency can promise how Amazon will decide.',
        ],
      },
      {
        heading: 'Peak season and selling beyond Amazon.co.uk',
        paragraphs: [
          'Prime Day, Black Friday, Boxing Day and the run-up to Christmas bring the biggest sales weeks on Amazon.co.uk, and the most competition for ad space. Deals and coupons need submitting early, budgets should rise in the days before an event rather than only on the day, and search terms are worth reviewing straight afterwards to find new keywords.',
          'Once the UK account is healthy, many London brands look at Amazon’s European marketplaces. That brings translated listings, EU VAT and separate stock decisions, so it is best treated as a planned step rather than a switch you flip. Check VAT and duties with your accountant first.',
        ],
        bullets: [
          'Book FBA inbound shipments well before peak cut-offs',
          'Submit deals and coupons by Amazon’s deadlines',
          'Raise bids in the run-up, then review search terms after',
        ],
      },
      {
        heading: 'Working with our London Amazon team',
        paragraphs: [
          'We have a London office in E18, East London, where sellers can meet the team by appointment for audits, planning and quarterly reviews. Most account work is done by our Chennai team, so search-term reviews and listing updates continue after UK hours, and requests sent before lunchtime are usually handled the same day.',
          'As an independent Amazon agency in London, we do not claim any partner status with Amazon. We quote a monthly fee in GBP after a free account audit, and the same team can also help with your Shopify store, Google Ads and SEO.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'Amazon agency for UK sellers', href: '/uk/amazon-agency/' },
      { label: 'PPC agency in London', href: '/london/ppc-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
      { label: 'E-commerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
    ],
    faqs: [
      { q: 'What does an Amazon marketing agency in London do?', a: 'It manages your brand on Amazon.co.uk: Sponsored ads, listing copy and images, A+ content, the Brand Store, Brand Registry, FBA stock planning and account health. A good Amazon marketing agency in London reports on profit by product in GBP, not just ad sales or impressions.' },
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), and sellers can meet the team there by appointment for audits, planning and reviews. Most account work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
      { q: 'Can you manage only our Amazon PPC?', a: 'Yes. Some London brands only want Amazon PPC managed on Amazon.co.uk. We run Sponsored Products, Sponsored Brands and Sponsored Display, harvest search terms weekly and set bids by margin. We will still flag listing or stock problems that hold the ads back.' },
      { q: 'Can you fix account health problems?', a: 'We monitor account health, explain what a warning or suppression means and help you prepare a clear, documented response. We cannot promise how Amazon will decide, because only Amazon makes that call, but organised evidence and calm replies give you the best chance of a quick resolution.' },
      { q: 'How much does an Amazon agency in London cost?', a: 'We quote a monthly fee in GBP after a free account audit, because scope depends on how many products you sell, how much you spend on ads and whether you need listings, A+ content and FBA planning as well. Ad spend is paid directly to Amazon.' },
      { q: 'Are you an Amazon partner?', a: 'We do not claim any partner status with Amazon. We are an independent agency whose team works in Seller Central and the Amazon Ads console every day. You keep ownership of your accounts and give us user permissions, so you can remove access at any time.' },
      { q: 'Should we use FBA or ship orders ourselves?', a: 'FBA gives products Prime delivery, which often lifts conversion on Amazon.co.uk, but it adds storage and fulfilment fees. Bulky, slow-selling or fragile items can work better shipped by you or a 3PL. We compare the costs product by product before recommending either route.' },
    ],
  },
];
