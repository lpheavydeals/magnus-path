import type { ServicePageData } from '../../data/types';

const ukBreadcrumb = [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }];

export const ukSeoAmazonPages: ServicePageData[] = [
  // ───────────────────────── 1. Ecommerce SEO agency (UK) ─────────────────────────
  {
    slug: 'uk/ecommerce-seo-agency',
    kind: 'global',
    market: 'UK',
    twin: 'ecommerce-seo',
    title: 'Ecommerce SEO Agency UK for Online Retailers | Magnus Path',
    description: 'Ecommerce SEO agency for UK online retailers: category pages, product schema, faceted navigation, free listings and UK links. London office, Chennai team.',
    primaryKeyword: 'ecommerce SEO agency',
    navLabel: 'Ecommerce SEO Agency UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Google UK · Collections · Product schema · Free listings',
    h1: 'Ecommerce SEO Agency for UK Retailers Who Want *Category Pages That Rank*',
    intro: 'Magnus Path is an ecommerce SEO agency that helps UK online retailers grow organic sales from Google.co.uk. We fix crawling and faceted navigation, rewrite collection pages in British English, add product schema and earn links from UK publications. We have a London office and a Chennai delivery team working in your morning, and we quote in GBP after a free audit.',
    icon: 'seo',
    facts: ['British English keyword research', 'Shopify, WooCommerce and custom stores', 'Quoted in GBP after an audit'],
    headings: {
      pains: 'Why UK online shops lose search traffic to the big retailers',
      includes: 'What our ecommerce SEO services for UK stores cover',
      process: 'How we grow your organic sales in *4 steps*',
      guide: 'Ecommerce SEO in the UK: a practical guide for online retailers',
    },
    pains: [
      { title: 'Amazon, Argos and John Lewis fill page one', body: 'For broad product searches, the big retailers take most of the first page. Smaller shops that target the same generic terms rarely break through and give up on SEO.' },
      { title: 'Filters that flood Google with duplicates', body: 'Colour, size and price filters create thousands of near-identical URLs. Google spends its time crawling those instead of the collection and product pages that sell.' },
      { title: 'Copy written for the wrong country', body: 'Product data imported from US suppliers talks about sneakers, pants and color. UK shoppers search for trainers, trousers and colour, so pages miss the searches that matter.' },
    ],
    includes: [
      { title: 'Technical audit and crawl clean-up', body: 'Indexing, canonical tags, redirects, pagination and site speed checked across the whole catalogue, with fixes prioritised by the revenue each template drives.' },
      { title: 'UK keyword and category mapping', body: 'British English search terms mapped to collections, products and guides, so each page targets one clear group of searches and pages stop competing with each other.' },
      { title: 'Collection and product page copy', body: 'Unique category introductions, FAQs, title tags and product descriptions that cover sizing, materials, delivery and returns in the way UK shoppers ask about them.' },
      { title: 'Product schema and Merchant Center', body: 'Product, offer and review structured data checked against your live prices, plus a clean Google Merchant Center feed for free listings in Shopping and Images.' },
      { title: 'Faceted navigation rules', body: 'A clear decision on which filter combinations deserve their own indexable page and which should stay out of the index, set up on Shopify, WooCommerce or a custom build.' },
      { title: 'Digital PR for UK links', body: 'Story-led outreach to UK publications, gift guides, trade sites and niche blogs. No private blog networks and no paid link packages.' },
    ],
    platforms: ['Shopify', 'WooCommerce', 'Google Search Console', 'Google Merchant Center', 'GA4', 'Screaming Frog', 'Semrush', 'Ahrefs'],
    process: [
      { title: 'Free SEO audit', body: 'We crawl your store, review Search Console data and compare you with the UK retailers ranking where you want to be, then walk you through it on a morning video call.' },
      { title: 'Roadmap and GBP quote', body: 'A prioritised plan of technical fixes, category work, content and links, with a monthly quote in GBP and a clear note of what your developers need to do.' },
      { title: 'Fix, write and build links', body: 'We fix technical issues, rewrite key collections, add schema, clean the product feed and start digital PR, working in your store or alongside your developers.' },
      { title: 'Report on revenue', body: 'A monthly report ties rankings to organic sessions, orders and revenue in GBP, followed by a call to agree what to push next.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'Where the work goes on an online shop, and how it is judged.', after: 0, center: 'Online shop SEO', branches: [
        { label: 'Technical', items: ['Duplicate filter URLs', 'Product schema', 'Platform crawl issues'] },
        { label: 'Collections', items: ['British search terms', 'Helpful intro and FAQs'] },
        { label: 'Products', items: ['Own copy, not supplier text', 'Sizes, care and delivery'] },
        { label: 'Reporting', items: ['Organic revenue by page', 'Orders and order value'] },
      ] },
      { type: 'matrix', caption: 'What to do with each filter page on a large catalogue.', after: 2, cols: ['Real search demand', 'Little search demand'], rows: ['Many products match', 'Few products match'], cells: [
        { title: 'Landing page', body: 'Give it a title, intro and a place in the index' },
        { title: 'Filter only', body: 'Useful to shoppers; canonical or noindex' },
        { title: 'Index with care', body: 'Only if the page will not look thin' },
        { title: 'Block crawling', body: 'Stops empty combinations wasting crawl time' },
      ] },
    ],
    guide: [
      {
        heading: 'What a UK ecommerce SEO agency should actually do',
        paragraphs: [
          'Ecommerce SEO is different from SEO for a services business. Most of the revenue comes from collection and product pages, not blog posts, and the biggest problems are usually technical: duplicate URLs from filters, thin category pages and product data copied from suppliers. A UK ecommerce SEO agency worth hiring should spend the first months fixing those, then grow the pages that take orders.',
          'Ask any agency how it reports. Rankings and traffic are useful signals, but the measure that matters is organic revenue by page type. If a proposal never mentions orders, average order value or category revenue, it is selling activity rather than results.',
          'Platform matters too. Shopify SEO in the UK has its own quirks, such as duplicate product URLs inside collections and apps that slow the theme, while WooCommerce and custom builds bring different crawl problems. When you compare quotes from an ecommerce SEO agency in the UK and an offshore team, check that both have worked on your platform before.',
        ],
      },
      {
        heading: 'British English search terms and category pages',
        paragraphs: [
          'UK shoppers search in their own words. They look for trainers, jumpers, trousers, nappies, mobile phone cases and kitchen roll. If your store imports product data from US or Asian suppliers, your titles and categories may use terms that hardly anyone in Britain types. Keyword research has to start from Google.co.uk data, not a global tool setting.',
          'Collections usually deserve most of the attention. A collection page for "women’s waterproof walking boots" can rank for hundreds of related searches if it has a clear title, a short helpful introduction, sensible internal links and a few answered questions about fit, care and delivery. One line of text above a product grid rarely does.',
        ],
      },
      {
        heading: 'Faceted navigation and product schema',
        paragraphs: [
          'Filters help shoppers but can confuse search engines. Every combination of colour, size, brand and price can create its own URL, and a store with a few thousand products can end up with millions of crawlable pages. We decide which combinations have real search demand, such as "black leather ankle boots", and make those proper landing pages. The rest are kept out of the index with canonical tags, noindex rules or crawl controls, depending on your platform.',
          'Product structured data tells Google the price, availability, brand and reviews for each item. It must match what the page shows, including VAT-inclusive prices in GBP. Mismatches are a common reason rich results and free listings disappear.',
        ],
      },
      {
        heading: 'Google Merchant Center free listings and AI Overviews',
        paragraphs: [
          'Google shows products from Merchant Center feeds in the Shopping tab, Images and parts of the main results without any ad spend. Many UK stores only use their feed for paid Shopping and never check free listings. A clean feed with accurate titles, GTINs, delivery costs and return policies is one of the quickest organic wins available to an online shop.',
          'Google AI Overviews now answer many product questions on the results page and reduce clicks to organic results. Pages that state facts clearly, such as materials, dimensions, washing instructions and delivery times by Royal Mail, Evri or DPD, are easier for those summaries to draw on. Our AI search optimisation work builds on the same foundations.',
        ],
      },
      {
        heading: 'Competing with Amazon.co.uk, Argos and John Lewis',
        paragraphs: [
          'You will not outrank Amazon.co.uk for "headphones". You do not need to. Smaller retailers win on specific searches where the big sites have thin pages: a particular style, material, size range, use case or niche brand. These searches have less volume but much stronger buying intent.',
        ],
        bullets: [
          'Target long, specific collection terms the big retailers cover only with filters',
          'Write buying guides and comparisons that answer real pre-purchase questions',
          'Show expertise the large sites lack: fitting advice, sourcing, care instructions',
          'Use reviews and clear delivery and returns details to win the click',
        ],
      },
      {
        heading: 'Digital PR for UK links',
        paragraphs: [
          'Links from relevant UK sites still matter, especially for collection pages in competitive categories. The safest way to earn them is digital PR: useful data from your own sales, seasonal stories for Black Friday or Christmas gift guides, expert comment for journalists and product placements in genuine round-ups. We avoid link farms and paid guest posts, because the short-term lift is not worth the risk to your domain.',
        ],
      },
      {
        heading: 'How to choose an ecommerce SEO agency',
        paragraphs: [
          'Whether you hire a UK firm or an offshore team, the same questions apply. A cheap retainer that only produces blog posts will not move category revenue, and an expensive one is no better if nobody touches the technical problems. Magnus Path has a London office where you can meet us, while most delivery is done by our Chennai team. India is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter, so our day overlaps your morning and early afternoon. We quote ecommerce SEO services for UK stores in GBP after a free audit. Before you sign with any ecommerce SEO agency UK or overseas, ask:',
        ],
        bullets: [
          'Who will do the work each month, and can I speak to them?',
          'How do you handle faceted navigation on my platform?',
          'Will you report organic revenue, not just rankings?',
          'How do you earn links, and can I see examples?',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Ecommerce SEO services (global)', href: '/ecommerce-seo/' },
      { label: 'Amazon agency for Amazon.co.uk sellers', href: '/uk/amazon-agency/' },
      { label: 'AI search optimisation agency for UK brands', href: '/uk/ai-search-optimisation-agency/' },
      { label: 'Shopify SEO checklist', href: '/blog/shopify-seo-checklist/' },
    ],
    faqs: [
      { q: 'What does an ecommerce SEO agency in the UK do?', a: 'It improves how your online shop ranks on Google.co.uk for searches that lead to sales. That covers technical fixes, faceted navigation, collection and product page copy, product schema, Merchant Center free listings and links from relevant UK sites, with reporting tied to organic revenue rather than rankings alone.' },
      { q: 'Do you offer Shopify SEO for UK stores?', a: 'Yes. Shopify SEO in the UK usually means fixing duplicate product URLs created by collections, trimming app bloat, writing collection copy in British English, checking product schema shows VAT-inclusive GBP prices and setting up Shopify Markets correctly if you also sell to Ireland or the EU.' },
      { q: 'Can a small shop compete with Amazon.co.uk and Argos in Google?', a: 'Yes, on the right searches. You will rarely beat them for broad terms, but specific searches by style, material, size or use case often have weak results from big retailers. Strong collection pages, buying guides and clear delivery details help smaller shops win those buyers.' },
      { q: 'How long does ecommerce SEO take to show results?', a: 'Technical fixes and better collection pages can show movement within two to four months. Competitive categories and link building take longer, often six to twelve months. We report progress monthly and show which pages and searches are moving, so you can judge it on evidence.' },
      { q: 'What are Google Merchant Center free listings?', a: 'They are unpaid product listings that Google shows in the Shopping tab, Images and some search results, based on your Merchant Center feed. Accurate titles, GTINs, prices, delivery costs and returns information improve how often your products appear, without spending anything on ads.' },
      { q: 'How much do your ecommerce SEO services for UK stores cost?', a: 'We do not publish a fixed UK price, because catalogue size and competition vary widely. After a free audit we quote a monthly fee in GBP, listing exactly what each month includes. Large technical projects or migrations are quoted separately so the retainer stays clear.' },
      { q: 'Do you have a UK office?', a: 'Yes. We have a London office (E18) where you can meet the team by appointment; most delivery is done by our Chennai team. India is 4.5 to 5.5 hours ahead of the UK depending on the season, so our working day overlaps your morning and early afternoon. Requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────── 2. Amazon agency (UK) ─────────────────────────
  {
    slug: 'uk/amazon-agency',
    kind: 'global',
    market: 'UK',
    twin: 'amazon-marketing-agency',
    title: 'Amazon Agency UK for Amazon.co.uk Sellers | Magnus Path',
    description: 'Amazon agency for UK sellers: Sponsored ads, listings, A+ content, Brand Store, FBA and account health support on Amazon.co.uk, quoted in GBP after an audit.',
    primaryKeyword: 'Amazon agency',
    navLabel: 'Amazon Agency UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Amazon.co.uk · Sponsored ads · Listings · FBA',
    h1: 'Amazon Agency UK Sellers Use for *Ads and Listings*',
    intro: 'Magnus Path is an Amazon agency for UK sellers who want one team to run their Amazon.co.uk account: Sponsored ads, listings, A+ content, Brand Store, FBA stock planning and account health support. You can meet us at our London office, and our Chennai team runs the account in your morning and early afternoon. We quote a monthly fee in GBP after a free account audit.',
    icon: 'amazon',
    facts: ['Amazon.co.uk ads and listings', 'Prime Day and Black Friday planning', 'Quoted in GBP after an audit'],
    headings: {
      pains: 'Where Amazon.co.uk accounts quietly lose money',
      includes: 'What our Amazon advertising agency UK service covers',
      process: 'How we take on your Amazon account in *4 steps*',
      guide: 'Selling on Amazon.co.uk: a guide to ads, listings and account management',
    },
    pains: [
      { title: 'Listings copied from another marketplace', body: 'US titles, inches and pounds weight, sizes that do not match UK charts and images built for another market. Shoppers on Amazon.co.uk hesitate, and conversion falls.' },
      { title: 'Stock running out in peak weeks', body: 'FBA inbound shipments booked too late for Prime Day or Black Friday mean ads pause, ranking slips and the busiest weeks of the year pass without stock.' },
      { title: 'Account health warnings handled in a panic', body: 'A listing suppressed or a policy warning arrives, and nobody knows which document Amazon wants. Rushed replies often make the problem harder to resolve.' },
    ],
    includes: [
      { title: 'Amazon PPC management', body: 'Sponsored Products, Sponsored Brands and Sponsored Display on Amazon.co.uk, with weekly search-term harvesting, negatives and bids set from each product’s margin.' },
      { title: 'Listing optimisation', body: 'Titles, bullet points, backend search terms and images written in British English, with UK sizing, metric measurements and the details UK shoppers check.' },
      { title: 'A+ content and Brand Store', body: 'A+ modules that answer common questions and compare your range, plus a Brand Store that gives Sponsored Brands ads a better landing page.' },
      { title: 'FBA and inbound planning', body: 'Stock cover by product, inbound shipment timing ahead of peaks and checks on stranded or unfulfillable stock, so ads are not paused by stock-outs.' },
      { title: 'Account health support', body: 'We watch performance notifications and help you prepare clear, documented responses to Amazon when listings are suppressed or policies flagged.' },
      { title: 'Monthly GBP reporting', body: 'Ad spend, ad sales, ACoS, TACoS and total sales by product in GBP, with notes on what changed and what we plan next month.' },
    ],
    platforms: ['Amazon.co.uk', 'Seller Central', 'Amazon Ads console', 'Amazon Brand Analytics', 'Brand Registry', 'Fulfilment by Amazon', 'Helium 10'],
    process: [
      { title: 'Free account audit', body: 'We review campaigns, search-term reports, listings, stock and account health, then share the findings on a video call in your UK morning.' },
      { title: 'Plan and GBP quote', body: 'A written scope covering ads, listings and account management, with target ACoS by product and a monthly fee in GBP.' },
      { title: 'Fix the foundations', body: 'Listings and campaign structure are cleaned up first, keeping proven keywords running so sales history is not lost.' },
      { title: 'Run and review', body: 'Weekly ad optimisation, monthly listing and stock reviews and a monthly report, with changes requested in your morning usually done the same day.' },
    ],
    figures: [
      { type: 'venn', caption: 'Ads and listings only pay off on Amazon.co.uk when they work together.', after: 0, left: { title: 'Sponsored ads', body: 'Bring traffic; cost more when listings are weak' }, right: { title: 'Listings and stock', body: 'Turn visits into orders and keep products live' }, overlap: 'Profitable ranking that lasts' },
      { type: 'steps', caption: 'How we prepare an Amazon account for Prime Day, Black Friday or Boxing Day.', after: 4, steps: [
        { title: 'Stock first', body: 'Check cover and book FBA inbound early' },
        { title: 'Submit deals', body: 'Deals, coupons and Prime discounts on time' },
        { title: 'Raise budgets', body: 'Lift bids in the run-up, not just on the day' },
        { title: 'Review after', body: 'Search terms and new-customer sales' },
      ] },
    ],
    guide: [
      {
        heading: 'What a UK Amazon agency should cover',
        paragraphs: [
          'Amazon.co.uk rewards products that sell, and almost everything feeds into that: ads bring traffic, listings convert it, stock keeps the product live and account health keeps the listing visible. An Amazon agency trusted with a UK account should look after all four, not just bids. Weak listings make ads expensive, and stock-outs undo months of ranking work.',
          'Many sellers start with an Amazon advertising agency UK specialists recommend for PPC alone, then find that the real problems sit in the listing or the supply chain. We work across both, so ad decisions take stock, margin and conversion into account.',
        ],
      },
      {
        heading: 'Amazon PPC agency UK: how we run Sponsored ads',
        paragraphs: [
          'Sponsored Products carries most sales for most sellers. We build separate research, performance and brand-defence campaigns, move converting search terms into exact match every week and add negatives for terms that spend without orders. Each main product gets its own break-even ACoS, worked out from your selling price, VAT, Amazon fees and landed cost.',
          'That last point matters more in the UK than many sellers expect. Prices on Amazon.co.uk include VAT, so a product that looks profitable at a healthy-looking ACoS may lose money once VAT and FBA fees are taken off. Any Amazon PPC agency UK sellers hire should show you the margin maths behind each target, not just a single number for the whole account.',
          'Sponsored Brands needs Brand Registry and works best when it points to a Brand Store or a curated set of products. Sponsored Display is useful for retargeting shoppers who viewed your products. We add those once Sponsored Products is profitable, not before.',
        ],
      },
      {
        heading: 'Listings, A+ content and the Brand Store',
        paragraphs: [
          'UK shoppers want sizes in UK and EU formats, measurements in centimetres and kilograms, and copy that reads naturally to them. A listing translated from the American store often uses the wrong words and confuses buyers about fit. We rewrite titles and bullets in British English, research backend search terms from Amazon.co.uk data and brief images that answer the questions shoppers ask.',
          'A+ content gives brand-registered sellers more space for comparison charts, care instructions and lifestyle images. A Brand Store groups your range and gives Sponsored Brands ads a better place to land than a single product page.',
        ],
      },
      {
        heading: 'Amazon account management UK: FBA, stock and account health',
        paragraphs: [
          'Amazon account management in the UK is mostly routine work done consistently. We track stock cover for each product, plan FBA inbound shipments ahead of known peaks and check for stranded or unfulfillable inventory. Running out of stock pauses ads and costs ranking that can take weeks to rebuild.',
          'Account health needs the same attention. When a listing is suppressed or a policy warning appears, we help you understand what Amazon is asking for and prepare a clear, documented response. We cannot promise any particular outcome, because Amazon makes the final decision, but a calm, well-evidenced reply gives you the best chance.',
          'Sellers based outside the UK, including Indian brands, should know that VAT registration usually applies from the first UK sale and that Amazon collects VAT on some orders itself. We are not tax advisers, so we always recommend working with a UK accountant on VAT before you scale.',
        ],
      },
      {
        heading: 'Planning for Prime Day, Black Friday and Boxing Day',
        paragraphs: [
          'Peak events reward preparation. FBA stock needs to arrive well before the event, deals and coupons must be submitted in advance and budgets need room to run through the whole day. We plan each peak several weeks ahead:',
        ],
        bullets: [
          'Stock cover checked and inbound shipments booked early',
          'Deals, coupons and Prime-exclusive discounts submitted on time',
          'Budgets and bids raised in the run-up, not only on the day',
          'Post-event review of search terms and new-customer sales',
        ],
      },
      {
        heading: 'Expanding beyond Amazon.co.uk',
        paragraphs: [
          'Once the UK account is profitable, some sellers look at Europe. Amazon’s Pan-European FBA programme can store stock across EU fulfilment centres, but it brings its own VAT and compliance questions and is separate from the UK since Brexit. We mention it only once the UK basics are working well.',
        ],
      },
      {
        heading: 'Choosing an Amazon agency, UK-based or remote',
        paragraphs: [
          'A UK-based team gives you face-to-face meetings. A remote team can give you more senior attention for the same budget. Neither is automatically better; what matters is who does the daily work and how clearly they explain it.',
          'Magnus Path has a London office where you can meet us, while our Chennai team does the daily work, and we do not claim any special status with Amazon. India is 4.5 hours ahead of UK summer time and 5.5 hours in winter, so our day overlaps your morning and early afternoon. Whichever Amazon agency you choose, in the UK or abroad, ask who manages the account daily, how it sets ACoS targets, whether you keep full ownership of Seller Central and how it reports total sales, not just ad sales. We quote a monthly fee in GBP after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Amazon agency in London', href: '/london/amazon-agency/' },
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Amazon marketing agency services (global)', href: '/amazon-marketing-agency/' },
      { label: 'Ecommerce SEO agency for UK retailers', href: '/uk/ecommerce-seo-agency/' },
      { label: 'Amazon SEO and listing optimisation', href: '/amazon-seo/' },
      { label: 'Marketplace profit calculator', href: '/tools/marketplace-profit-calculator/' },
    ],
    faqs: [
      { q: 'What does an Amazon agency in the UK do?', a: 'It manages your Amazon.co.uk account on your behalf: Sponsored ads, listing copy and images, A+ content, Brand Store, FBA stock planning and account health monitoring. A good agency judges all of this against total sales and profit by product, not just advertising numbers like ACoS.' },
      { q: 'Are you an Amazon PPC agency UK sellers can hire for ads only?', a: 'Yes. Some sellers only want Amazon PPC management on Amazon.co.uk. We run Sponsored Products, Sponsored Brands and Sponsored Display, harvest search terms weekly and set bids from each product’s margin. We will still flag listing or stock problems that make ads expensive.' },
      { q: 'Can you help with Amazon account health problems?', a: 'Yes. We monitor account health, explain what a warning or suppression means and help you prepare a clear, documented response. Amazon makes the final decision, so no agency can promise an outcome, but a well-prepared reply gives you the best chance of a quick resolution.' },
      { q: 'Do I need to register for VAT to sell on Amazon.co.uk?', a: 'Most sellers based outside the UK need UK VAT registration from their first sale, and UK-based sellers must register once they pass the VAT threshold. Amazon also collects VAT on some orders. We are not tax advisers, so please confirm your position with a UK accountant.' },
      { q: 'How do you prepare for Prime Day and Black Friday?', a: 'We plan several weeks ahead: checking stock cover, booking FBA inbound shipments early, submitting deals and coupons on time and raising budgets in the run-up as well as on the day. After each event we review search terms and new-customer sales to shape the next one.' },
      { q: 'How much does your Amazon agency service cost for UK sellers?', a: 'We quote a monthly fee in GBP after a free account audit, because the right scope depends on how many products you sell and whether you need ads only or full account management. Ad spend is billed by Amazon directly to your own account.' },
      { q: 'Are you an Amazon partner?', a: 'We do not claim any partner status with Amazon. We are an independent agency whose Chennai team works on Seller Central and the Amazon Ads console for UK sellers. You keep full ownership of your accounts, and we work through user permissions you can remove at any time.' },
    ],
  },

  // ───────────────────────── 3. AI search optimisation agency (UK) ─────────────────────────
  {
    slug: 'uk/ai-search-optimisation-agency',
    kind: 'global',
    market: 'UK',
    twin: 'ai-search-optimization',
    title: 'AI Search Optimisation Agency (GEO) UK | Magnus Path',
    description: 'AI search optimisation agency for UK brands: clear brand facts, quotable pages and honest tracking for ChatGPT, Perplexity, Gemini and Google AI Overviews.',
    primaryKeyword: 'AI search optimisation agency',
    navLabel: 'AI Search Optimisation UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'GEO · AI Overviews · ChatGPT · Perplexity · Gemini',
    h1: 'AI Search Optimisation Agency With *Honest* Reporting',
    intro: 'Magnus Path is an AI search optimisation agency helping UK brands appear accurately in ChatGPT, Perplexity, Gemini and Google AI Overviews. Nobody controls what AI tools say, so we work on what you can influence: consistent brand facts, pages worth quoting and trusted UK mentions. We have a London office and a Chennai delivery team, and we quote in GBP after a free audit.',
    icon: 'ai',
    facts: ['ChatGPT, Perplexity, Gemini, AI Overviews', 'Clear about what can be measured', 'Quoted in GBP after an audit'],
    headings: {
      pains: 'Why UK brands are asking about *AI answers* now',
      includes: 'What our generative engine optimisation work includes',
      process: 'How a GEO engagement runs in *4 steps*',
      guide: 'Generative engine optimisation for UK brands: an honest guide',
    },
    pains: [
      { title: 'Steady rankings, fewer visits', body: 'AI Overviews answer many questions on the results page, so a page can hold its position on Google.co.uk and still send fewer visitors each month.' },
      { title: 'Answers that get your brand wrong', body: 'Old prices, discontinued products, a US address or a competitor named instead of you. Buyers trust these answers, and you rarely see them happen.' },
      { title: 'Sales pitches without evidence', body: 'Every agency now offers AI visibility. Few explain what they change, how they measure it or what is outside anyone’s control.' },
    ],
    includes: [
      { title: 'AI answer baseline', body: 'A fixed set of UK buyer questions run through ChatGPT, Perplexity, Gemini and Google, recording which brands and sources are named and how you are described.' },
      { title: 'Brand fact consistency', body: 'One consistent description of your company, products, delivery and returns across your site, Google Business Profile, Amazon.co.uk, Companies House listings and social profiles.' },
      { title: 'Quotable pages', body: 'Category, product, comparison and FAQ content rewritten so each answer comes first, in British English, with facts that make sense when quoted on their own.' },
      { title: 'Schema and product feeds', body: 'Organisation, Product and FAQ structured data checked for accuracy, plus a Merchant Center feed with current GBP prices, stock and delivery costs.' },
      { title: 'UK mentions and reviews', body: 'A list of UK publications, comparison sites, review platforms and forums that AI tools cite in your category, and a plan to earn genuine mentions there.' },
      { title: 'AI referral tracking', body: 'A GA4 channel that separates visits from ChatGPT, Perplexity, Gemini and Copilot, with conversions and revenue reported monthly in GBP.' },
    ],
    platforms: ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Google Gemini', 'Microsoft Copilot', 'Google Search Console', 'Google Analytics 4', 'Google Merchant Center'],
    process: [
      { title: 'Free audit and baseline', body: 'We run your buyer questions through the main AI tools, check technical SEO and schema, and present the findings on a video call in your UK morning.' },
      { title: 'Plan and GBP quote', body: 'A prioritised plan for pages, brand facts, feeds and mentions, with a monthly fee in GBP and plain notes on what we cannot influence.' },
      { title: 'Fix and publish', body: 'Schema, brand facts and feeds are corrected first, then key pages are rewritten for clear answers and outreach for UK mentions begins.' },
      { title: 'Re-test and report', body: 'Each month we re-run the same questions, review AI referrals in GA4 and adjust the plan based on what actually changed.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'Every public profile should repeat the same brand facts.', after: 2, center: 'One set of brand facts', branches: [
        { label: 'Fact sheet', items: ['What you sell, for whom', 'Delivery and returns terms'] },
        { label: 'Your website', items: ['Organisation schema', 'VAT-inclusive prices'] },
        { label: 'Amazon.co.uk', items: ['Same product names', 'Same delivery promises'] },
        { label: 'Other profiles', items: ['Current UK details', 'Matching description'] },
      ] },
      { type: 'venn', caption: 'AI tools draw on your own pages and on what UK sources say about you.', after: 4, left: { title: 'Your own pages', body: 'Clear facts, schema and answers AI tools can quote' }, right: { title: 'UK sources AI trusts', body: 'Reviews, forums, press and comparison articles' }, overlap: 'Named accurately in AI answers' },
    ],
    guide: [
      {
        heading: 'What an AI search optimisation agency does',
        paragraphs: [
          'AI search optimisation is the work of making your brand easy for AI tools to find, understand and cite correctly. It is also called generative engine optimisation, GEO or LLM SEO. An AI search optimisation agency improves the material those tools draw on: your own pages, your structured data and product feeds, and what trusted third-party sites say about you.',
          'This is a new field, and it is better to say so plainly. The tools change often, they do not publish how they choose sources and no agency controls their answers. Anyone promising a fixed place in ChatGPT is guessing. What does work is careful SEO, clear facts and a good reputation on sites that matter in your market.',
        ],
      },
      {
        heading: 'Why AI answers matter for UK brands',
        paragraphs: [
          'Google AI Overviews now appear on many searches made on Google.co.uk, and they reduce clicks to organic results. At the same time, 2026 data from Similarweb and Adobe shows that shoppers referred by AI tools convert at higher rates than organic search visitors. The result is fewer visits overall, but stronger ones for the brands that get named.',
          'For a UK retailer, the questions are product questions: which waterproof jacket suits hillwalking in Scotland, or which baby carrier works for a newborn. For a B2B firm, they are shortlist questions about suppliers and services. GEO aims to make sure an accurate answer about your brand is available when those questions are asked.',
          'Ask ChatGPT, Perplexity or Gemini a few of those questions yourself. Note which brands are named, which sources are linked and whether anything said about you is out of date. That simple test is often the most useful starting point, and it is the same method a good AI search optimisation agency uses for its baseline.',
        ],
      },
      {
        heading: 'Brand facts and UK-specific details',
        paragraphs: [
          'AI tools build a picture of your company from many sources. If your website, Amazon.co.uk store, LinkedIn page and press coverage describe you differently, answers become vague or wrong. UK brands often have extra sources of confusion: an old US or EU address, prices shown without VAT on some pages, or delivery promises that differ between the site and marketplace listings.',
          'We start with a short fact sheet covering what you sell, who it is for, where you deliver, delivery and returns terms and key product names, then make every public profile match it. Organisation and Product schema on your site reinforce the same facts.',
        ],
      },
      {
        heading: 'Writing pages that AI tools can quote',
        paragraphs: [
          'AI answers lift short, self-contained statements. Pages that bury the answer under marketing copy are harder to quote. We rewrite key category, product and guide pages so each section opens with a direct answer and every fact stands on its own.',
        ],
        bullets: [
          'Open each section with a one or two sentence answer',
          'Use British English terms UK shoppers actually type',
          'Give specific facts: materials, sizes, delivery times, care instructions',
          'Keep health and performance claims within ASA and CAP code limits',
          'Add comparison tables where buyers weigh options',
        ],
      },
      {
        heading: 'Mentions, reviews and the UK sources AI tools trust',
        paragraphs: [
          'AI tools lean heavily on third-party sources: review sites, comparison articles, forums, trade press and national or niche publications. A brand that is discussed positively in those places is more likely to be named. We map the UK sources cited in your category, then plan genuine ways to appear there through digital PR, expert comment, review requests and product placements. We do not buy fake reviews or paid placements disguised as editorial.',
          'Reddit threads, Mumsnet discussions and independent UK review sites often appear among the sources AI tools cite for consumer products. You cannot control those conversations, but you can make sure customers have a good reason to mention you and that your replies to complaints are helpful and visible.',
        ],
      },
      {
        heading: 'Measurement, llms.txt and what is still unproven',
        paragraphs: [
          'Measurement is imperfect. AI tools do not provide reports like Search Console, answers vary between sessions and many AI visits arrive with no referrer. We use two imperfect signals together: a fixed set of questions re-run each month, and a GA4 channel for referrals from ChatGPT, Perplexity, Gemini and Copilot. Neither is complete, but together they show direction.',
          'You may hear about llms.txt, a proposed file that lists your key pages for AI tools. It is optional and there is no clear evidence yet that major AI tools rely on it. We can add one if you want it, but we will not sell it as a fix.',
        ],
      },
      {
        heading: 'Choosing a GEO agency in the UK or abroad',
        paragraphs: [
          'Magnus Path has a London office where you can meet us, while most delivery is done by our Chennai team. India is 4.5 hours ahead of UK summer time and 5.5 hours in winter, so our working day overlaps your morning and early afternoon. Whoever you choose as your AI search optimisation agency, ask what exactly they will change, how they will measure it and what they admit they cannot control. Vague answers to those three questions are a warning sign.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'AI search optimisation services (global)', href: '/ai-search-optimization/' },
      { label: 'Ecommerce SEO agency for UK retailers', href: '/uk/ecommerce-seo-agency/' },
      { label: 'Amazon agency for Amazon.co.uk sellers', href: '/uk/amazon-agency/' },
      { label: 'Free e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'What is generative engine optimisation?', a: 'Generative engine optimisation, or GEO, is the work of helping AI tools such as ChatGPT, Perplexity, Gemini and Google AI Overviews find, understand and cite your brand accurately. It builds on SEO, with extra focus on consistent brand facts, quotable pages and mentions on trusted third-party sites.' },
      { q: 'Can a GEO agency in the UK get my brand into ChatGPT answers?', a: 'No agency controls what ChatGPT or any other AI tool says. A good GEO agency improves the sources those tools draw on: your pages, structured data, product feeds and reputation on trusted UK sites. That makes accurate mentions more likely, but nobody can promise a specific answer.' },
      { q: 'How do AI Overviews affect UK ecommerce sites?', a: 'AI Overviews answer many questions directly on Google’s results page, which reduces clicks to organic results even when rankings hold. Pages with clear, factual answers on products, sizing, delivery and returns are easier for those summaries to draw on, and brands named in them still attract attention.' },
      { q: 'How do you measure AI search visibility?', a: 'We combine two imperfect signals: a fixed set of buyer questions re-run across AI tools each month, and a GA4 channel that tracks visits, conversions and revenue from ChatGPT, Perplexity, Gemini and Copilot referrals. Neither is complete, but together they show whether visibility is improving.' },
      { q: 'Do I need an llms.txt file?', a: 'It is optional. llms.txt is a proposed file that points AI tools to your key pages, but there is no clear evidence yet that the major tools rely on it. We can add one at little cost, but we treat it as a small extra, not a core part of the work.' },
      { q: 'Is AI search optimisation different from SEO?', a: 'It overlaps heavily. Crawlable pages, structured data and authority still matter. AI search optimisation adds more focus on answer-first writing, brand facts that match everywhere, and mentions on review and comparison sites. If your SEO foundations are weak, we fix those first, because AI tools rely on them too.' },
      { q: 'How much does your AI search optimisation agency service cost?', a: 'We quote UK brands a monthly fee in GBP after a free audit, because the work depends on your site’s condition, your category and how many sources need attention. The quote lists exactly what each month includes and what sits outside our control.' },
    ],
  },
];
