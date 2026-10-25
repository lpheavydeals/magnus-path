import type { ServicePageData } from '../../data/types';

export const usShopifyPages: ServicePageData[] = [
  {
    slug: 'us/shopify-seo-agency',
    kind: 'global',
    market: 'US',
    twin: 'shopify-seo',
    title: 'Shopify SEO Agency for US Brands | Billion Ecommerce Agency',
    description: 'Shopify SEO agency for US brands: duplicate URLs, faceted filters, app bloat, schema and AI Overviews fixed in your theme by a remote team. Quoted in USD.',
    primaryKeyword: 'shopify seo agency',
    navLabel: 'Shopify SEO Agency (US)',
    breadcrumb: [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }],
    eyebrow: 'For US Shopify brands · Technical SEO · Content · AI search',
    h1: 'Shopify SEO Agency for US Brands That Want *More Organic Orders*',
    intro: 'Billion Ecommerce Agency is a Shopify SEO agency for US brands that want more orders from Google, not just nicer ranking reports. We fix the problems Shopify creates by default, then grow the collection and product pages that sell. We are a Chennai, India team working remotely, so most fixes land while you sleep. Work is quoted in USD after a free audit.',
    icon: 'seo',
    facts: ['Fixes made in your theme code', 'Search, AI Overviews and assistants', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Why US Shopify stores *stall* in Google',
      includes: 'What our Shopify SEO services cover for US stores',
      process: 'From audit to organic orders in *4 steps*',
      guide: 'Shopify SEO for US brands: what to fix, what to build and how to choose a team',
    },
    pains: [
      { title: 'Competing with Amazon and big-box retailers', body: 'US shoppers search for a product and see Amazon, Walmart and Target first. A smaller Shopify brand needs sharper collection pages and content to win the searches those giants answer poorly.' },
      { title: 'An app stack that drags Core Web Vitals', body: 'Reviews, bundles, subscriptions, loyalty and pop-up apps each inject scripts. Largest Contentful Paint and Interaction to Next Paint suffer on phones, and the theme gets the blame.' },
      { title: 'Filters and variants that flood the index', body: 'Search & Discovery filters, sort parameters and variant URLs create thousands of near-identical pages. Google spends its time crawling copies instead of the pages you want ranked.' },
    ],
    includes: [
      { title: 'Crawl and index audit', body: 'A full crawl plus a Search Console review covering collection-based product links, canonical tags, filter parameters, redirects, robots.txt.liquid rules and orphaned products.' },
      { title: 'Theme-level canonical fixes', body: 'Liquid edits so product grids link to /products/ URLs, filtered and sorted views stay out of the index, and paginated collections behave properly.' },
      { title: 'Core Web Vitals and app review', body: 'We test every app against field data, remove leftover snippets, defer non-critical scripts and fix image sizing so pages load faster on real phones.' },
      { title: 'Collection and product page SEO', body: 'Titles, meta descriptions, collection copy and product descriptions written in US English for how American shoppers search, including size, material and use-case terms.' },
      { title: 'Structured data that validates', body: 'Product, Offer, AggregateRating, BreadcrumbList and Organization markup cleaned up, with variant prices and availability correct and no duplicate schema from apps.' },
      { title: 'Content for search and AI answers', body: 'Buying guides, comparison pages and FAQ blocks on your Shopify blog, written so Google and AI assistants can quote clear answers and link back to your collections.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'Search & Discovery', 'Google Search Console', 'GA4', 'Screaming Frog', 'Ahrefs', 'Semrush', 'PageSpeed Insights'],
    process: [
      { title: 'Free audit and call', body: 'We crawl your store, read the theme and app list, and review Search Console. Then we walk you through the findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'A prioritized fix list and a monthly scope, quoted in USD. Theme fixes come first because they make every later content effort count.' },
      { title: 'Fix in a duplicate theme', body: 'We work in an unpublished copy of your theme or a GitHub branch, test changes overnight your time, and publish only after you approve.' },
      { title: 'Grow and report monthly', body: 'New collection copy, content and internal links each month, with a report on organic sessions, orders and revenue from Shopify and GA4.' },
    ],
    figures: [
      { type: 'matrix', caption: 'What to do with filter, sort and tag URLs on a Shopify store.', after: 2, cols: ['Little search demand', 'Real search demand'], rows: ['Filter or sort URL', 'Old tag page'], cells: [
        { title: 'Keep out of index', body: 'Noindex or robots rules, and not a main crawl path' },
        { title: 'New collection', body: 'Its own title, intro copy and FAQs for that search' },
        { title: 'Canonicalize it', body: 'Point to the parent collection, drop internal links' },
        { title: 'Keep and improve', body: 'Worth keeping as a real page with better content' },
      ] },
      { type: 'steps', caption: 'How we find and fix the apps that slow a store down.', after: 3, steps: [
        { title: 'Field data', body: 'Search Console and PageSpeed, not lab only' },
        { title: 'Map scripts', body: 'Every script matched to the app behind it' },
        { title: 'Decide together', body: 'Keep, replace or remove each app' },
        { title: 'Defer and move', body: 'Delay what can wait, use theme app blocks' },
        { title: 'Fix images', body: 'Right-sized images for faster mobile pages' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Shopify SEO agency should do for a US brand',
        paragraphs: [
          'Shopify gives every store a decent SEO base: hosted sitemaps, automatic canonical tags, editable titles and a fast CDN. That base is the same for every competitor in your category, so it does not win rankings on its own. In the US you are also competing with Amazon, Walmart, Target and well-funded DTC brands for the same product searches.',
          'A good Shopify SEO agency works on three layers, in order. First, the technical habits of Shopify that waste crawl time and split ranking signals. Second, the collection and product pages that should rank for buying searches. Third, content that answers questions before a shopper is ready to buy. Skipping the first layer makes the other two far less effective.',
        ],
      },
      {
        heading: 'Duplicate URLs, canonical tags and variant pages',
        paragraphs: [
          'Every product has a canonical address at /products/handle. Many themes link to /collections/handle/products/handle from collection grids instead. Shopify points the canonical tag back to the /products/ version, but your own internal links still send authority and crawl attention to a duplicate. Changing the product card snippet from product.url | within: collection to plain product.url fixes it at the source.',
          'Variants need a decision too. A ?variant= URL is canonicalized to the parent product, which is right for sizes. For colors that people search for separately, such as an olive linen shirt, some brands split variants into separate products so each color can rank on its own. That is a merchandising choice as much as an SEO one, so we model the trade-off with you before changing anything.',
        ],
      },
      {
        heading: 'Faceted filters and collection pages',
        paragraphs: [
          'Shopify Search & Discovery filters add parameters such as filter.v.option.color and sort_by to collection URLs. Combined, they produce thousands of thin pages. We keep these out of the index with robots.txt.liquid rules and noindex logic in the theme, and make sure filter links are not the main path Google follows through your catalog.',
          'Where a filtered view has real search demand, such as women’s waterproof hiking boots, the better move is a dedicated collection with its own title, intro copy and FAQs. That gives you a clean, indexable page built for the search, instead of a parameter URL Google may ignore.',
          'Older stores often have the same problem with tag pages such as /collections/shirts/linen. A few are worth keeping and improving. The rest should be canonicalized to the parent collection or removed from internal links, so Google stops treating them as separate pages.',
        ],
      },
      {
        heading: 'Apps, speed and Core Web Vitals',
        paragraphs: [
          'Most slow Shopify stores are not slow because of Shopify. They are slow because of apps: review widgets, upsell carousels, loyalty pop-ups, chat, heatmaps and tracking pixels, each loading its own JavaScript on every page. Uninstalled apps often leave snippets behind in theme files that keep loading for months.',
          'Our Shopify SEO services start with field data in Search Console and PageSpeed Insights, not lab scores alone. We list every script, map it to an app and decide with you what stays. Then we defer what can wait, move app features to theme app blocks where possible, and fix image sizing so Largest Contentful Paint and Interaction to Next Paint improve for shoppers on mobile.',
        ],
      },
      {
        heading: 'Structured data, content and AI Overviews',
        paragraphs: [
          'Product structured data tells Google your price, availability, ratings and shipping details, and makes listings eligible for richer results. On Shopify, the theme and several apps often output schema at the same time, sometimes with conflicting prices or ratings. We consolidate it into one clean set and validate it.',
          'Content matters more now that Google AI Overviews answer many questions directly and reduce clicks to organic results. Pages that get cited tend to give short, specific answers: what size to choose, how a material wears, how two products compare. We write buying guides and FAQ sections in that style, then link them to the collections they support, so a shopper who does click lands one step from checkout.',
        ],
      },
      {
        heading: 'Choosing a Shopify SEO company in the US or offshore',
        paragraphs: [
          'Whether you pick a local Shopify SEO company or a remote Shopify SEO agency, ask to see the theme changes they made for another store, not just a rankings chart. A Shopify SEO expert should be comfortable in Liquid, explain canonical handling without notes and report on organic orders and revenue, not only traffic.',
          'We are a Chennai, India team with no US office. India is 9.5 hours ahead of US Eastern time in summer and 10.5 hours in winter, which is 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your morning, our evening, for calls. Most work happens while you sleep, so you start the day with fixes and drafts ready to review. Before signing with any provider, check:',
        ],
        bullets: [
          'Who edits the theme, and do they work in a duplicate theme or a Git branch?',
          'How will filter, tag and variant URLs be handled?',
          'Which apps do they expect to remove or replace, and why?',
          'Does the monthly report show organic revenue, not only rankings and sessions?',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce PPC agency (US)', href: '/us/ecommerce-ppc-agency/' },
      { label: 'ChatGPT ads agency (US)', href: '/us/chatgpt-ads-agency/' },
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Shopify Plus agency for US brands', href: '/us/shopify-plus-agency/' },
      { label: 'Hire a dedicated Shopify developer', href: '/us/hire-shopify-developer/' },
      { label: 'Generative engine optimization agency', href: '/us/generative-engine-optimization-agency/' },
      { label: 'Shopify SEO checklist', href: '/blog/shopify-seo-checklist/' },
    ],
    faqs: [
      { q: 'What does a Shopify SEO agency do?', a: 'A Shopify SEO agency fixes the technical habits Shopify creates, such as duplicate collection-based product URLs, filter parameters and app-heavy themes. It then improves collection and product pages and publishes content that ranks. The work should be measured in organic orders and revenue from Shopify and GA4, not only in keyword positions.' },
      { q: 'How much do your Shopify SEO services cost for US brands?', a: 'We quote Shopify SEO in USD after a free audit, because the work depends on catalog size, theme condition, app stack and how many Shopify Markets you run. You get a written scope listing the monthly tasks before you commit to anything, so you know exactly what the fee covers.' },
      { q: 'Do you have an office in the US?', a: 'No. Billion Ecommerce Agency is a Chennai, India team that works with US brands remotely. We meet over video calls in the short overlap between your morning and our evening, and run day-to-day work through a shared board and chat channel. Most fixes are done while you sleep.' },
      { q: 'Will you edit my Shopify theme code?', a: 'Yes. Most Shopify SEO problems are fixed in Liquid, not in the admin. We work in a duplicate theme or a GitHub branch connected through Shopify’s GitHub integration, test changes, and publish only after you approve. If you already have a developer or agency, we can hand the changes to them instead.' },
      { q: 'Should I index my filtered collection pages?', a: 'Usually not. Filter and sort parameters create many thin, near-duplicate pages. Keep them out of the index and build dedicated collections for filtered views that have real search demand, such as a specific color or use case. Those pages get their own title, copy and FAQs, and can rank properly.' },
      { q: 'How do you optimize a Shopify store for AI Overviews?', a: 'We make sure product data and structured data are accurate, then write clear, specific answers on collection pages, product pages and buying guides. AI Overviews and assistants such as ChatGPT tend to cite pages that answer a question directly. Our generative engine optimization work goes further for brands that want it.' },
      { q: 'How long before Shopify SEO shows results?', a: 'Technical fixes such as canonical links and filter handling are often picked up within weeks, once Google recrawls the store. Rankings for competitive collection terms usually take several months of steady content and link work. We report progress monthly so you can see which changes are moving organic orders.' },
      { q: 'Can a Shopify SEO expert help if we are on Shopify Plus?', a: 'Yes. Plus stores share the same URL structure, with extra considerations such as expansion stores, Shopify Markets on subfolders or separate domains, and hreflang. We check that each market sends the right language and currency signals, and that international versions do not compete with each other in US results.' },
    ],
  },
  {
    slug: 'us/shopify-plus-agency',
    kind: 'global',
    market: 'US',
    title: 'Shopify Plus Agency for US Brands | Billion Ecommerce Agency',
    description: 'Shopify Plus agency for US brands: checkout extensibility, Shopify Functions, B2B, Markets, Flow and migrations, built remotely by a Chennai team. USD quotes.',
    primaryKeyword: 'shopify plus agency',
    navLabel: 'Shopify Plus Agency (US)',
    breadcrumb: [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }],
    eyebrow: 'For US brands on Shopify Plus · Checkout · B2B · Migrations',
    h1: 'Shopify Plus Agency for the *Hard Parts*: Checkout, B2B and Migrations',
    intro: 'Billion Ecommerce Agency is a Shopify Plus agency for US brands that need more than a theme: checkout extensibility, Shopify Functions, B2B, Markets and migrations from older platforms. We are an independent team in Chennai, India that builds on Shopify Plus, working remotely while you sleep. Projects are quoted in USD after a free audit.',
    icon: 'shopify',
    facts: ['Checkout extensibility and Functions', 'Migrations from Magento, BigCommerce, Woo', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Where US brands get stuck on *Shopify Plus*',
      includes: 'Shopify Plus development we handle',
      process: 'How a Shopify Plus project runs in *4 steps*',
      guide: 'Shopify Plus for US brands: what is worth building, and what to skip',
    },
    pains: [
      { title: 'Checkout customizations left behind', body: 'Shopify has moved checkout customization away from checkout.liquid and Shopify Scripts. Brands that relied on them need equivalents built with checkout UI extensions and Shopify Functions.' },
      { title: 'Paying for Plus, using basic features', body: 'Many brands upgrade for checkout or B2B, then run Plus like a standard plan. Flow sits idle, Functions go unused and the extra cost gets harder to justify.' },
      { title: 'A migration nobody wants to own', body: 'Moving off Magento, BigCommerce or WooCommerce means products, customers, orders, redirects and integrations. Done badly, it costs rankings and repeat customers for months.' },
    ],
    includes: [
      { title: 'Checkout extensibility', body: 'Checkout UI extensions, branding settings, thank-you and order status page blocks, and web pixels, built to replace older checkout.liquid customizations.' },
      { title: 'Shopify Functions', body: 'Custom discount logic, shipping and payment method rules, and cart validation written as Functions, replacing Shopify Scripts with code Shopify supports going forward.' },
      { title: 'B2B on Shopify', body: 'Company accounts, locations, catalogs, price lists, quantity rules and payment terms, so wholesale buyers order from the same store as retail customers.' },
      { title: 'Markets and international selling', body: 'Shopify Markets set up for Canada, the UK or Europe with local currency, duties, domains or subfolders, and translated content where it makes sense.' },
      { title: 'Flow automation', body: 'Flow workflows for tagging high-risk orders, low-stock alerts, B2B approvals, loyalty triggers and handoffs to your ERP, 3PL or Klaviyo.' },
      { title: 'Shopify Plus migration', body: 'Moves from Magento, BigCommerce, WooCommerce or a standard Shopify plan, with data mapping, URL redirects, SEO checks and integration rebuilds.' },
    ],
    platforms: ['Shopify Plus', 'Checkout UI extensions', 'Shopify Functions', 'Shopify Flow', 'Shopify Markets', 'B2B on Shopify', 'Hydrogen', 'Shopify CLI', 'Klaviyo'],
    process: [
      { title: 'Free audit and scoping call', body: 'We review your store or current platform, apps, integrations and customizations, then talk through the findings on a call in your morning.' },
      { title: 'Technical plan and USD quote', body: 'A written scope covering what to build, what to replace with native features and what to leave alone, with a fixed or phased quote in USD.' },
      { title: 'Build, migrate and test', body: 'Work happens in development stores and Git branches. You review progress each morning, and we test checkout, B2B and integrations end to end.' },
      { title: 'Launch and support', body: 'A planned cutover with redirects and monitoring, followed by a support period to fix anything that surfaces once real orders flow.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The layer Shopify Plus adds on top of a normal Shopify store.', after: 0, center: 'What Plus adds', branches: [
        { label: 'Checkout', items: ['UI extensions', 'Branding settings', 'Web pixels for tracking'] },
        { label: 'Functions', items: ['Tiered and bundle discounts', 'Hide payment methods', 'Block carts that break rules'] },
        { label: 'B2B & Markets', items: ['Company accounts, price lists', 'Net payment terms', 'Local currencies and duties'] },
        { label: 'Flow', items: ['Tag wholesale orders', 'Fraud and low-stock alerts', 'Send data to your ERP or 3PL'] },
      ] },
      { type: 'matrix', caption: 'When a headless Hydrogen build is worth it, and when a theme is enough.', after: 4, cols: ['No in-house developers', 'Developers on staff'], rows: ['Standard catalog store', 'Content-heavy, multi-brand'], cells: [
        { title: 'Online Store 2.0', body: 'A well-built theme on Plus is fast enough' },
        { title: 'Still a theme', body: 'Headless adds cost without a clear need' },
        { title: 'Not yet', body: 'Every change would need a developer you do not have' },
        { title: 'Consider Hydrogen', body: 'A custom storefront can pay off here' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Shopify Plus agency should do that a theme shop does not',
        paragraphs: [
          'Shopify Plus is Shopify’s plan for high-volume and more complex merchants. The storefront tools look much like the other plans. The difference is what Plus lets you change: checkout customization, full B2B selling, expansion stores, higher API limits and deeper automation through Flow.',
          'A Shopify Plus agency earns its fee in that layer. If a proposal is mostly theme design, you may be paying Plus prices for work any good Shopify developer could do. Ask what they will build with checkout extensibility, Functions and B2B, and just as importantly, what they will deliberately leave out.',
        ],
      },
      {
        heading: 'Checkout extensibility and Shopify Functions',
        paragraphs: [
          'Shopify has moved checkout customization away from editing checkout.liquid and toward checkout extensibility: UI extensions that add blocks to checkout and the thank-you page, branding settings for fonts and colors, and web pixels for tracking. Extensions are upgrade-safe, which means Shopify can improve checkout without breaking your changes.',
          'Shopify Functions replace Shopify Scripts for custom logic. A Function can create tiered or bundle discounts, hide a payment method for certain orders, rename or reorder shipping options, or block checkout when a cart breaks a rule, such as a quantity limit. Good Shopify Plus development starts by checking whether a native setting or an existing app already does the job, and writes a Function only when it does not.',
        ],
      },
      {
        heading: 'B2B, Markets and Flow',
        paragraphs: [
          'B2B on Shopify lets you sell wholesale from the same store: company accounts with multiple locations, catalogs with their own price lists, volume pricing, quantity rules and net payment terms. For many US brands, it replaces a separate wholesale store or an ordering process built on spreadsheets and email.',
          'Shopify Markets handles selling to Canada, the UK, Europe and beyond, with local currencies, duties and domains or subfolders. Flow ties these together with automation: tagging wholesale orders, alerting staff to fraud risk or low stock, and sending data to your ERP or 3PL. Flow is often the most underused part of a Plus plan.',
          'Expansion stores are the other Plus feature worth planning early. Some brands run a separate store for wholesale, a second brand or a region with very different products. Others are better served by one store with Markets and B2B. We map your catalog, pricing and fulfillment before recommending either, because splitting stores later is far harder than starting right.',
        ],
      },
      {
        heading: 'Shopify Plus migration from Magento, BigCommerce or WooCommerce',
        paragraphs: [
          'A Shopify Plus migration is mostly a data and URL project. Products, variants, customers, order history, gift cards and reviews have to be mapped into Shopify’s structure, which has rules older platforms did not, such as fixed URL prefixes and a limit of three options per product.',
          'Redirects matter most for SEO. Every old product, category and content URL needs a 301 redirect to its closest new page, tested before launch. Customer passwords cannot be moved, so plan an account activation email. Integrations with ERP, warehouse and accounting systems often take longer than the store itself, so we scope them first.',
          'We run the migration in a development store, import data in test batches, and compare product counts, prices and customer records against the old platform before cutover. The old site stays live until the new one passes checks, and launch is timed outside your busy sales periods.',
        ],
      },
      {
        heading: 'Headless and Hydrogen: when it is worth it, and when it is not',
        paragraphs: [
          'Hydrogen, Shopify’s React-based framework, hosted on Oxygen, lets you build a fully custom storefront. It makes sense when you need content-heavy experiences, complex personalization, or one front end across several brands or stores, and when you have developers to maintain it long term.',
          'For most brands it is not worth it. A headless build costs more, every app that injects into the theme needs a replacement, and simple changes need a developer. A well-built Online Store 2.0 theme on Shopify Plus is fast enough for most stores. If we think headless is the wrong call for you, we will say so.',
        ],
      },
      {
        heading: 'Choosing Shopify Plus experts: partner status, location and hours',
        paragraphs: [
          'Shopify lists some agencies in its partner directory as Plus partners. We are not one of them. We are an independent team that builds on Shopify Plus with the same tools, APIs and documentation. When you compare Shopify Plus experts, look at the work: ask for examples of Functions, checkout extensions or migrations they built, and who will write the code.',
          'We are based in Chennai, India, with no US office. India is 9.5 hours ahead of US Eastern time in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. We hold calls in the short overlap in your morning, our evening, and do most of the build while you sleep. Questions worth asking any Shopify Plus agency:',
        ],
        bullets: [
          'Which customizations will you build as Functions or extensions, and which will use apps?',
          'How will redirects, customer accounts and order history be handled in the migration?',
          'Who owns the code, the Git repository and any custom app you create?',
          'What happens after launch if something breaks during a sale?',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce Meta ads agency (US)', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Ecommerce PPC agency (US)', href: '/us/ecommerce-ppc-agency/' },
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Shopify SEO agency for US stores', href: '/us/shopify-seo-agency/' },
      { label: 'Hire a dedicated Shopify developer', href: '/us/hire-shopify-developer/' },
      { label: 'White-label web development for agencies', href: '/us/white-label-web-development/' },
      { label: 'Free Shopify and e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Are you a Shopify Plus Partner?', a: 'No. We are an independent team that builds on Shopify Plus, not a listed Shopify Plus partner, so you will not find us in Shopify’s partner directory. It does not limit what we can build: you give us collaborator access, and we use the same APIs, extensions and Functions. Your store keeps its Plus support directly from Shopify.' },
      { q: 'What does a Shopify Plus agency do?', a: 'A Shopify Plus agency builds the features that only Plus allows, or that matter most at scale: checkout extensibility, Shopify Functions, B2B, Markets, Flow automation and expansion stores. It also handles migrations to Plus and integrations with ERP, warehouse and marketing systems. Theme design is usually part of the work, but not the main reason to hire one.' },
      { q: 'Do we need Shopify Plus, or is a standard plan enough?', a: 'Many brands do not need Plus. It is worth considering when you need custom checkout logic, full B2B with company accounts and price lists, expansion stores, higher API limits or heavy automation. If your needs are a better theme and a few apps, a standard Shopify plan is usually enough, and we will tell you so.' },
      { q: 'How long does a Shopify Plus migration take?', a: 'It depends on catalog size, data history, custom features and integrations. A straightforward move from WooCommerce or BigCommerce is often a matter of weeks. A Magento store with B2B pricing, ERP sync and years of orders takes longer. You get a phased timeline in the written scope after the free audit.' },
      { q: 'Can you replace our Shopify Scripts with Functions?', a: 'Yes. We list every script you run, check which ones native discounts or apps now cover, and rebuild the rest as Shopify Functions for discounts, shipping, payments or cart validation. We test them against real cart scenarios in a development store before they go live on your checkout.' },
      { q: 'Should we go headless with Hydrogen?', a: 'Only with a clear reason, such as complex content and personalization, several brands on one front end, or an in-house team to maintain it. Headless adds build and maintenance cost and turns simple app installs into development work. For most brands, a fast Online Store 2.0 theme on Plus is the better choice.' },
      { q: 'How do we work with you from the US?', a: 'We are a Chennai, India team with no US office. India is 9.5 to 10.5 hours ahead of US Eastern time, so we meet in a short overlap in your morning, our evening. Most build work happens while you sleep, and you review progress each morning on a shared board.' },
      { q: 'How is a Shopify Plus project priced?', a: 'We quote in USD after a free audit. Migrations and builds are usually fixed-price and split into phases, while ongoing Shopify Plus development can run as a monthly retainer. Your Shopify Plus subscription and app fees are paid directly to Shopify and the app vendors, not through us.' },
    ],
  },
  {
    slug: 'us/hire-shopify-developer',
    kind: 'global',
    market: 'US',
    title: 'Hire Shopify Developer Support for US Brands',
    description: 'Hire Shopify developer support from a Chennai team: a fixed project, a dedicated monthly developer or an hourly bank. Liquid, OS 2.0, CLI and GitHub. In USD.',
    primaryKeyword: 'hire shopify developer',
    navLabel: 'Hire a Shopify Developer (US)',
    breadcrumb: [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }],
    eyebrow: 'For US brands and agencies · Dedicated · Part-time · Project',
    h1: 'Hire a Shopify Developer Who Works *While You Sleep*',
    intro: 'Looking to hire Shopify developer support without adding a full-time salary? Billion Ecommerce Agency gives US brands and agencies a dedicated or part-time Shopify developer from our Chennai, India team, working in Liquid, Online Store 2.0, Shopify CLI and GitHub. You send tasks at the end of your day and wake up to finished work, quoted in USD.',
    icon: 'shopify',
    facts: ['Fixed project, monthly or hourly', 'Liquid, OS 2.0, Shopify CLI, GitHub', 'Tasks done while the US sleeps'],
    headings: {
      pains: 'Why hiring Shopify help is *harder than it looks*',
      includes: 'What a dedicated Shopify developer handles',
      process: 'From first message to first pull request in *4 steps*',
      guide: 'How to hire Shopify developers: engagement models, skills to check and time zones',
    },
    pains: [
      { title: 'Freelancers who vanish mid-task', body: 'A marketplace freelancer fixes one bug, then goes quiet when the next sale needs a landing page. You restart the search and explain your store all over again.' },
      { title: 'Edits made straight on the live theme', body: 'Changes pushed into the published theme with no version history mean one bad edit can break the cart during peak traffic, with no easy way back.' },
      { title: 'A full-time hire you cannot keep busy', body: 'Most brands have steady Shopify work, but not forty hours of it every week. A US salary for a developer who is idle half the month rarely makes sense.' },
    ],
    includes: [
      { title: 'Theme development in Liquid', body: 'New sections, templates and snippets built in Liquid, HTML, CSS and JavaScript, following Online Store 2.0 patterns so your team can edit content in the theme editor.' },
      { title: 'Online Store 2.0 upgrades', body: 'Moving older vintage themes to JSON templates and sections everywhere, so merchandisers can rearrange pages without asking a developer.' },
      { title: 'Theme app extensions and app blocks', body: 'Replacing hard-coded app snippets with app blocks, and building theme app extensions for agencies or brands that run a custom app.' },
      { title: 'Shopify CLI and GitHub workflow', body: 'Local development with Shopify CLI, every change in a Git branch, pull requests you can review and a preview theme before anything reaches the live store.' },
      { title: 'Integrations and custom apps', body: 'Admin and Storefront API work, webhooks, metafields and metaobjects, and small custom apps that connect Shopify to your ERP, 3PL or reporting tools.' },
      { title: 'Speed, bugs and ongoing support', body: 'Core Web Vitals fixes, app clean-up, cart and checkout bugs, and the steady list of small changes every growing store collects.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'Liquid', 'Online Store 2.0', 'Shopify CLI', 'GitHub', 'Theme app extensions', 'Admin GraphQL API', 'Hydrogen'],
    process: [
      { title: 'Scoping call', body: 'A short call in your morning to understand your store, your backlog and how you want to work: one project, a dedicated developer or a bank of hours.' },
      { title: 'Proposal and USD quote', body: 'A written plan with the engagement model, named developer, communication channel and a quote in USD. No work starts until you agree.' },
      { title: 'Access and setup', body: 'Collaborator access to your store, a GitHub repository connected to a development theme, and a shared board or Slack channel for tasks.' },
      { title: 'Daily handoff', body: 'You post tasks before you log off. We build, test in a preview theme and open a pull request, so you wake up to work ready for review.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The skills to check before you hire a Shopify developer.', after: 2, center: 'Shopify developer skills', branches: [
        { label: 'Liquid', items: ['Clean, simple templates', 'No slow nested loops'] },
        { label: 'Sections', items: ['JSON templates', 'Pages your team can edit'] },
        { label: 'App blocks', items: ['Theme app extensions', 'Clean installs and removals'] },
        { label: 'Workflow', items: ['Shopify CLI and GitHub', 'A pull request per task'] },
      ] },
      { type: 'venn', caption: 'How a daily handoff works with a developer on the other side of the world.', after: 4, left: { title: 'Your US day', body: 'post tasks with clear acceptance criteria, review the work' }, right: { title: 'Our Chennai day', body: 'build and test, then leave a pull request and a note' }, overlap: 'Short call in your morning' },
    ],
    guide: [
      {
        heading: 'Three ways to hire Shopify developers',
        paragraphs: [
          'Most brands and agencies need Shopify development in one of three shapes. Choosing the right one matters more than the hourly rate, because the wrong model either leaves work unfinished or leaves you paying for idle time.',
          'Whichever model you choose, when you bring in an outside Shopify developer, write down what done looks like for each task, who approves work and how fast you need answers. That short document prevents most of the friction brands blame on distance.',
        ],
        bullets: [
          'Fixed project: a defined scope, such as a new product page template, an Online Store 2.0 upgrade or an integration, with a fixed quote and timeline. Best when you know exactly what you need.',
          'Dedicated developer, monthly: one named Shopify developer for you, full time or part time, working through your backlog. Best for brands with a steady flow of changes, or agencies that need extra capacity.',
          'Hourly bank: a block of hours you draw down for bugs, small changes and urgent fixes. Best for stores with occasional needs that still want someone who already knows the code.',
        ],
      },
      {
        heading: 'What to check before you hire a Shopify developer',
        paragraphs: [
          'A portfolio of good-looking stores tells you little about the code behind them. Before you hire, ask the developer to walk you through a section they built, and see whether they explain schema settings, blocks and how a merchandiser would edit it. Ask how they would change the cart drawer without touching the live theme. Starting with a small fixed project is a sensible way to test any developer before committing to a monthly arrangement.',
        ],
        bullets: [
          'Do they work in a development or duplicate theme, never directly on the live one?',
          'Do they use Shopify CLI and Git, so every change has a history?',
          'Can they explain when to use an app, a metafield or custom code?',
          'Who owns the code, and will you keep the repository if you part ways?',
          'What is their plan when a fix is needed in the middle of a sale?',
        ],
      },
      {
        heading: 'The skills that matter: Liquid, Online Store 2.0 and theme app extensions',
        paragraphs: [
          'Liquid is still the core of Shopify themes. A good developer writes it cleanly, keeps heavy logic out of templates and avoids nested loops that slow collection pages. Online Store 2.0 matters just as much: JSON templates and sections everywhere let your team build and rearrange pages in the theme editor, so a dedicated Shopify developer spends time on real features instead of moving banners.',
          'Theme app extensions and app blocks are the modern way apps add features to a theme. They install and uninstall cleanly and do not leave code behind. For agencies building a custom app for a client, a developer who can ship a theme app extension saves a lot of support time later.',
        ],
      },
      {
        heading: 'A workflow you can trust: Shopify CLI and GitHub',
        paragraphs: [
          'Shopify’s GitHub integration connects a theme to a branch in your repository. Combined with Shopify CLI for local development, every change becomes a commit you can see, review and roll back. We work this way by default: a branch for each task, a preview link, a pull request with notes, and a merge only after you approve.',
          'This also protects you if you ever change developers. The code lives in your repository, with its full history, not on a freelancer’s laptop.',
        ],
      },
      {
        heading: 'Working with an offshore Shopify developer across time zones',
        paragraphs: [
          'We are a Chennai, India team with no US office. India is 9.5 hours ahead of US Eastern time in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your morning, which is our evening, for calls. We do not offer support during US business hours.',
          'The time difference suits a handoff model. You post tasks and feedback at the end of your day. We pick them up in our morning, build and test while you sleep, and leave a pull request and a short note by the time you start work. For an offshore Shopify developer to work well, tasks need clear acceptance criteria, so we help you write them in the first weeks.',
        ],
      },
      {
        heading: 'When a Shopify developer for hire is the wrong answer',
        paragraphs: [
          'Not every problem needs a developer. If you want a different look, a well-chosen theme may beat custom code. If a reputable app solves the problem without slowing the store, use it. And if your store needs a plan for conversion, SEO or a platform migration, a developer alone will build what you ask for and nothing more. Before you hire Shopify developers, be clear whether you need hands for a backlog or someone to decide what goes into it.',
          'If you need both, pair the developer with a plan. Our Shopify SEO and Shopify Plus services can set the priorities while the developer works through the build, all in the same repository and board.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Shopify Plus agency for checkout, B2B and migrations', href: '/us/shopify-plus-agency/' },
      { label: 'Shopify SEO agency for US brands', href: '/us/shopify-seo-agency/' },
      { label: 'White-label web development for US agencies', href: '/us/white-label-web-development/' },
      { label: 'Website maintenance services', href: '/website-maintenance-services/' },
    ],
    faqs: [
      { q: 'How do I hire a Shopify developer from Billion Ecommerce Agency?', a: 'Send a short note about your store and backlog. We hold a scoping call in your morning, then send a written proposal with the engagement model, the named developer, the communication setup and a quote in USD. Once you agree, you give us collaborator access and we start with an agreed first task.' },
      { q: 'What engagement models do you offer?', a: 'Three: a fixed project with a defined scope and quote, a dedicated Shopify developer on a monthly basis, full time or part time, and an hourly bank you draw down for bugs and small changes. All three are quoted in USD, and you can move between them as your needs change.' },
      { q: 'Will I work with the same developer each time?', a: 'Yes. On monthly and hourly arrangements you get a named developer who learns your theme, apps and preferences. If they are away, another member of our Chennai team covers using the same repository and task notes, so nothing depends on one person’s memory.' },
      { q: 'What hours does your Shopify developer work in US time?', a: 'We work Indian business hours. India is 9.5 hours ahead of US Eastern time in summer and 10.5 in winter, so our day runs through your night. Calls happen in a short overlap in your morning. We do not offer US-hours support, but tasks sent in your evening are usually ready by your next morning.' },
      { q: 'Can agencies hire a Shopify developer to work under their brand?', a: 'Yes. Agencies can add a dedicated Shopify developer from us as extra delivery capacity. We work in your project tools and repositories, follow your code standards, and do not contact your clients unless you ask us to. Our white-label web development page covers that arrangement in more detail.' },
      { q: 'Do you work directly on our live theme?', a: 'No. We develop locally with Shopify CLI in a Git branch, preview changes on an unpublished theme and open a pull request for you to review. Only approved changes reach the live theme, through Shopify’s GitHub integration or a scheduled publish, so untested edits do not go straight to shoppers.' },
      { q: 'Who owns the code you write?', a: 'You do. Theme code, custom app code and documentation live in a GitHub repository owned by you or your agency. If you end the engagement, you keep everything with its full commit history, and any new developer can pick up where we left off without starting again.' },
      { q: 'Is an offshore Shopify developer a good idea?', a: 'It can be, if the developer works in a proper Git workflow, writes clear notes and has a predictable handoff time. You get experienced Shopify skills at lower cost than a comparable US hire. Start with a small fixed project, review the code, then decide on a longer arrangement.' },
    ],
  },
];
