import type { ServicePageData } from '../../data/types';

const usBreadcrumb = [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }];

export const usAmazonGeoPages: ServicePageData[] = [
  // ───────────────────────── 1. Amazon PPC agency (US) ─────────────────────────
  {
    slug: 'us/amazon-ppc-agency',
    kind: 'global',
    market: 'US',
    title: 'Amazon PPC Agency for Amazon.com Sellers | Magnus Path',
    description: 'Amazon PPC agency for Amazon.com sellers: Sponsored Products, Brands and Display managed by margin and TACoS, run remotely from India and quoted in USD.',
    primaryKeyword: 'amazon ppc agency',
    navLabel: 'Amazon PPC Agency',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Amazon.com · Sponsored ads · TACoS reporting',
    h1: 'Amazon PPC Agency That Bids by *Margin*, Not by Habit',
    intro: 'Magnus Path is an Amazon PPC agency for brands selling on Amazon.com, from US startups to Indian and global brands growing in the US. We run Sponsored Products, Sponsored Brands and Sponsored Display against each product’s real margin, harvest search terms every week and report TACoS, so you can see whether ads are building total sales.',
    icon: 'amazon',
    facts: ['Bids set from product margin', 'Weekly search-term harvesting', 'Quoted in USD after an audit'],
    headings: {
      pains: 'Why Amazon.com ad accounts drift into unprofitable spend',
      includes: 'What our Amazon PPC management covers',
      process: 'How we take over your Amazon ads in *4 steps*',
      guide: 'Amazon PPC management on Amazon.com: a practical guide for brand owners',
    },
    pains: [
      { title: 'Spend that grows faster than sales', body: 'Broad and auto campaigns keep finding new, loosely related searches. Each month the bill rises, and nobody can say which keywords actually pay for themselves.' },
      { title: 'One ACoS target for every product', body: 'A $19 accessory and a $79 hero product cannot share the same target. Blanket goals overfund low-margin items and starve the products that could scale.' },
      { title: 'Prime Day and Q4 planned too late', body: 'Bids and budgets that only change on the day of an event miss the run-up, then run out of budget by early afternoon when traffic peaks.' },
    ],
    includes: [
      { title: 'Campaign structure built to be read', body: 'Separate research, performance and brand-defense campaigns, named consistently, so anyone can open the console and see where each dollar goes.' },
      { title: 'Search term harvesting and negatives', body: 'Converting search terms move into exact-match campaigns with their own bids. Terms that spend without orders become negatives, reviewed every week.' },
      { title: 'Placement and dayparting adjustments', body: 'Bid adjustments for top of search and product pages based on your data, plus schedule changes where certain hours clearly waste budget.' },
      { title: 'Sponsored Brands and video', body: 'Headline and video ads for brand-registered sellers, pointing to a Brand Store or a curated product set, tested against each other on cost per order.' },
      { title: 'Event and seasonal planning', body: 'Budget and bid plans for Prime Day, Prime Big Deal Days, Black Friday, Cyber Monday and the holiday season, set weeks ahead with deals and coupons.' },
      { title: 'TACoS and profit reporting', body: 'A weekly snapshot and a monthly report showing ad spend, ad sales, ACoS, TACoS and break-even ACoS for each key product, in USD.' },
    ],
    platforms: ['Amazon Ads console', 'Seller Central', 'Vendor Central', 'Amazon Brand Analytics', 'Amazon Marketing Stream', 'Amazon DSP', 'Helium 10'],
    process: [
      { title: 'Free account audit', body: 'We review 60 to 90 days of campaign and search-term data, your listings and your unit economics, then share findings on a call in your morning.' },
      { title: 'Margin model and USD quote', body: 'We calculate break-even ACoS for each main product, propose target ACoS and TACoS, and quote a monthly fee in USD for the work involved.' },
      { title: 'Restructure', body: 'Campaigns are rebuilt or cleaned up in stages, keeping proven keywords running so sales history is not lost during the change.' },
      { title: 'Weekly optimization', body: 'Bids, negatives, placements and budgets are adjusted each week, mostly overnight in US time, with a short written note of what changed.' },
    ],
    figures: [
      { type: 'matrix', caption: 'Reading ACoS and TACoS together to decide what to do next.', after: 2, cols: ['ACoS below break-even', 'ACoS above break-even'], rows: ['TACoS falling', 'TACoS rising'], cells: [
        { title: 'Scale', body: 'Profitable now, and ads are lifting organic sales' },
        { title: 'Hold for rank', body: 'Acceptable for a launch while organic sales grow' },
        { title: 'Watch organic', body: 'Ads pay, but organic sales are not keeping up' },
        { title: 'Fix first', body: 'Losing money: check the listing, bids and negatives' },
      ] },
      { type: 'steps', caption: 'A weekly pass through the search-term report.', after: 3, steps: [
        { title: 'Pull the report', body: 'Search terms from the last week' },
        { title: 'Harvest winners', body: 'Terms with 2+ orders into exact match' },
        { title: 'Add negatives', body: 'Cut clicks that never convert' },
        { title: 'Set placements', body: 'Top of search only where it converts' },
        { title: 'Check the hours', body: 'Daypart when hourly data shows waste' },
      ] },
    ],
    guide: [
      {
        heading: 'What an Amazon PPC agency actually does each week',
        paragraphs: [
          'Most of the value in Amazon advertising comes from routine work done consistently. An Amazon PPC agency should download search-term reports every week, move winning terms into exact match, add negatives, adjust bids by placement and check that budgets are not running out before the evening. None of it is glamorous, but skipped weeks show up quickly in ACoS.',
          'The other half of the job is judgment: deciding which products deserve more spend, when to defend your brand terms, and when a weak listing, not the bids, is the real problem. Ask any agency to show you a recent week of changes from a live account before you hire them, and ask how they decide when to pause a keyword rather than lower its bid.',
        ],
      },
      {
        heading: 'Sponsored Products, Sponsored Brands and Sponsored Display',
        paragraphs: [
          'Sponsored Products carries most of the sales for nearly every seller. It shows single products in search results and on product detail pages. Sponsored Brands needs Brand Registry and puts your logo, a headline or a video above or within results, which helps shoppers remember the brand. Sponsored Display reaches shoppers who viewed your products or similar ones, on and off Amazon.',
          'A sensible order is to get Sponsored Products profitable first, add Sponsored Brands for your main categories, then test Sponsored Display for retargeting. Amazon DSP, the programmatic platform, usually makes sense only for larger brands with clear reach goals and a budget that can absorb testing.',
        ],
      },
      {
        heading: 'Amazon PPC management by margin: ACoS, TACoS and break-even',
        paragraphs: [
          'ACoS is ad spend divided by ad-attributed sales. Your break-even ACoS is what remains of the selling price after product cost, Amazon referral and FBA fees, inbound freight and returns. If a $40 product leaves $12 after those costs, break-even ACoS is 30%. Anything below that is profitable on the first order.',
          'TACoS divides ad spend by total sales, including organic orders. It is the better long-term signal. If TACoS falls while total sales grow, ads are helping products rank on their own. Good Amazon PPC management sets a different target for launch products, steady sellers and clearance items instead of one number for the whole account.',
        ],
      },
      {
        heading: 'Search terms, negatives, placements and dayparting',
        paragraphs: [
          'Your search-term report is the most useful file in the account. These habits keep it working for you:',
        ],
        bullets: [
          'Harvest terms with two or more orders into exact-match campaigns',
          'Add negative exact or phrase terms for clicks that never convert',
          'Use product targeting to appear on competitor pages where your price or rating is stronger',
          'Set top-of-search bid adjustments only where that placement converts better',
          'Try dayparting when hourly data shows clear waste, often late at night',
        ],
      },
      {
        heading: 'Why listings and reviews limit what bidding can do',
        paragraphs: [
          'Ads send shoppers to your product detail page, and the page decides whether they buy. A listing with weak main images, thin bullets or a 3.6-star rating converts poorly, so every click costs more and every sale needs a higher bid. No amount of bid tuning fully fixes that.',
          'A useful Amazon PPC agency looks at conversion rate by ASIN before raising budgets. If one product converts at half the rate of its siblings, the fix is often a better image stack, a clearer title, answers to common questions in the bullets or a price check against competitors. We flag these issues in the weekly note and, if you also use our account management, fix them directly.',
        ],
      },
      {
        heading: 'Budgeting for Prime Day, Q4 and the rest of the year',
        paragraphs: [
          'US Amazon demand is uneven. Prime Day in July, Prime Big Deal Days in October, and Black Friday through Christmas raise both traffic and cost per click. Plan inventory and deals at least six weeks out, raise budgets in the days before an event so ads gather data, and watch budgets hourly on the day itself.',
          'January is often cheaper. Clicks cost less while many shoppers still have gift cards, which can make it a good month for launches. Outside the big events, set a monthly budget from your target number of extra orders, your conversion rate and typical cost per click in your category, then test it for four to six weeks before scaling. An Amazon PPC agency that plans the calendar with you, rather than reacting to it, protects both margin and rank.',
        ],
      },
      {
        heading: 'Choosing an Amazon advertising agency from India',
        paragraphs: [
          'We are a Chennai, India team with no US office, and we say so upfront. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, or 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your morning, which is our evening, for calls. Most optimization happens while the US sleeps, so you wake up to a note of what changed. We do not offer US-hours support.',
          'Many Indian and global brands selling on Amazon.com work with us because we understand both their supply side and US shoppers. Whoever you hire, keep the ad account in your own name, ask for weekly change logs and judge the Amazon advertising agency on TACoS and profit, not clicks.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Amazon account management services for US sellers', href: '/us/amazon-account-management/' },
      { label: 'Generative engine optimization agency for US brands', href: '/us/generative-engine-optimization-agency/' },
      { label: 'Amazon SEO and listing optimization', href: '/amazon-seo/' },
      { label: 'How to sell on Amazon USA from India', href: '/blog/how-to-sell-on-amazon-usa-from-india/' },
    ],
    faqs: [
      { q: 'What does an Amazon PPC agency do?', a: 'It plans and manages your Amazon ads. That includes campaign structure, keyword and product targeting, weekly search-term harvesting, negative keywords, bid and placement adjustments, budgets for events like Prime Day, and reporting on ACoS and TACoS. The goal is profitable ad sales that also lift organic rank.' },
      { q: 'What is included in Amazon PPC management services?', a: 'Our Amazon PPC management services cover Sponsored Products, Sponsored Brands and Sponsored Display, weekly search-term and negative keyword work, placement and dayparting adjustments, seasonal planning, break-even ACoS for key products, and a monthly USD report followed by a review call booked in your morning.' },
      { q: 'How much does Amazon PPC management cost?', a: 'We quote Amazon PPC management in USD after a free audit, because the work depends on catalog size, number of campaigns and monthly ad spend. Your ad spend is billed by Amazon directly to your own account, and our management fee is separate.' },
      { q: 'What is a good ACoS on Amazon.com?', a: 'A good ACoS is one below your break-even ACoS, which depends on your margin after product cost, Amazon fees, freight and returns. Launch products may run above break-even on purpose to build sales history. Mature products should run comfortably below it while TACoS stays steady or falls.' },
      { q: 'Do you manage Amazon DSP?', a: 'We can plan and manage Amazon DSP campaigns when they suit your goals, but we usually recommend getting Sponsored Products and Sponsored Brands profitable first. DSP needs a larger budget and works best for brands that want reach or retargeting at scale.' },
      { q: 'Can you work with Indian brands selling on Amazon.com?', a: 'Yes. Many brands we work with make products in India and sell in the US through Amazon Global Selling or a US entity. We build US keyword research, US English listings and campaigns for Amazon.com shoppers, separate from any Amazon.in campaigns.' },
      { q: 'What hours do you work in US time?', a: 'India is 9.5 hours ahead of US Eastern in summer and 10.5 in winter. We overlap briefly with your morning for calls, and do most optimization while the US sleeps, so changes are done when your day starts. We do not offer support during US business hours.' },
    ],
  },

  // ───────────────────────── 2. Amazon account management (US) ─────────────────────────
  {
    slug: 'us/amazon-account-management',
    kind: 'global',
    market: 'US',
    twin: 'amazon-account-management',
    title: 'Amazon Account Management Services for US | Magnus Path',
    description: 'Amazon account management services for Amazon.com sellers: Seller Central health, listings, A+ content, FBA inventory and Brand Registry, run from India.',
    primaryKeyword: 'amazon account management services',
    navLabel: 'Amazon Account Management (US)',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Amazon.com · Seller Central · FBA · Brand Registry',
    h1: 'Amazon Account Management Services for *Amazon.com* Sellers',
    intro: 'Magnus Path provides Amazon account management services for brands selling on Amazon.com that need Seller Central run carefully every day. We handle listings, A+ content, your Brand Store, FBA inventory and inbound shipments, and account health, working remotely from Chennai, India while your team focuses on product, sourcing and cash flow.',
    icon: 'marketplace',
    facts: ['Daily account health checks', 'FBA inventory and inbound planning', 'Remote team in Chennai, India'],
    headings: {
      pains: 'Where Amazon.com seller accounts quietly lose sales',
      includes: 'What our Amazon seller account management includes',
      process: 'How we take over your Seller Central in *4 steps*',
      guide: 'Amazon store management for US sellers: what to check and how often',
    },
    pains: [
      { title: 'Listings that vanish overnight', body: 'A new required attribute, a flagged image or a category change can suppress a top seller. Without daily checks, you notice only when the sales report drops.' },
      { title: 'FBA capacity and inbound headaches', body: 'Capacity limits, placement fees and shipments split across distant fulfillment centers make inbound planning harder, and stockouts follow when it slips.' },
      { title: 'Account health notices nobody owns', body: 'Policy warnings, IP complaints and performance alerts arrive by email and get buried. Left unanswered, they can put listings or the whole account at risk.' },
    ],
    includes: [
      { title: 'Account health monitoring', body: 'Daily checks of the Account Health dashboard, order defect rate, late shipment rate, policy notices and listing compliance issues, with a log of each action.' },
      { title: 'Listings and catalog care', body: 'New ASINs, variation families, titles, bullets, backend search terms and image briefs written for US shoppers, plus fixes for suppressed or stranded listings.' },
      { title: 'A+ content and Brand Store', body: 'A+ modules that answer buyer questions, Premium A+ where eligible, and a Brand Store organized by how shoppers browse your category.' },
      { title: 'FBA inventory and inbound shipments', body: 'Weekly restock planning, inbound shipment creation, placement option choices and reconciliation of lost or damaged units through reimbursement cases.' },
      { title: 'Brand Registry and Buy Box protection', body: 'Brand Registry setup support, monitoring for hijackers and listing changes, and pricing checks so you keep the Featured Offer on your own products.' },
      { title: 'Reviews the right way', body: 'Amazon Vine enrollment for eligible products and the Request a Review button, plus a monthly read of reviews to find listing and product fixes.' },
    ],
    platforms: ['Amazon Seller Central', 'Fulfillment by Amazon (FBA)', 'Brand Registry', 'A+ Content', 'Amazon Vine', 'Amazon Brand Analytics', 'Helium 10'],
    process: [
      { title: 'Free account audit', body: 'We review account health, suppressed and stranded listings, inventory, Buy Box share and open cases, then walk you through priorities on a call in your morning.' },
      { title: 'Scope and USD quote', body: 'A written scope covering catalog size, tasks and reporting, with a monthly fee in USD. You add us as users with only the permissions we need.' },
      { title: 'Stabilize', body: 'The first weeks focus on clearing listing errors, open cases and inventory issues, and fixing the top product detail pages.' },
      { title: 'Run and grow', body: 'Daily checks, weekly restock and pricing reviews, and a monthly report. Most tasks are done overnight in US time, ready when your day starts.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The daily work inside Seller Central that account management covers.', after: 0, center: 'Your Amazon account', branches: [
        { label: 'Listings', items: ['Titles, bullets and images', 'A+ content and Brand Store'] },
        { label: 'Inventory', items: ['FBA restock planning', 'Reimbursement claims'] },
        { label: 'Account health', items: ['Daily dashboard check', 'Clear plans of action'] },
        { label: 'Brand', items: ['Brand Registry reports', 'Featured Offer (Buy Box)', 'Vine and Request a Review'] },
      ] },
      { type: 'matrix', caption: 'How weekly FBA planning treats each product.', after: 3, cols: ['Selling fast', 'Selling slowly'], rows: ['Low stock in FBA', 'Plenty of stock in FBA'], cells: [
        { title: 'Restock now', body: 'Plan inbound early; stockouts cost sales and rank' },
        { title: 'Hold restock', body: 'Check your forecast before sending more' },
        { title: 'Healthy', body: 'Keep watching sell-through every week' },
        { title: 'Clear it', body: 'Remove or liquidate before long-term storage fees' },
      ] },
    ],
    guide: [
      {
        heading: 'What Amazon account management services cover for US sellers',
        paragraphs: [
          'Selling on Amazon.com involves far more than ads. Amazon account management services take on the daily operating work inside Seller Central: keeping listings live and accurate, keeping stock flowing into FBA, protecting the brand and keeping the account in good standing.',
          'For many brands, this work starts as a side task for a founder or operations lead. It works until the catalog grows past a few dozen ASINs, a second warehouse appears or a policy notice lands during a busy week. That is usually the point when outside help pays for itself. Brands based outside the US, including Indian manufacturers selling on Amazon.com, face extra steps too: US-compliant labeling, freight to FBA and returns handled from a distance.',
        ],
      },
      {
        heading: 'Account health: what to watch and how to respond',
        paragraphs: [
          'The Account Health dashboard brings together performance metrics, such as order defect rate and late shipment rate, with policy compliance issues like IP complaints, restricted products and listing policy violations. Checking it daily matters, because many issues come with a response deadline.',
          'When a problem appears, the right response is specific: what happened, the root cause, what was fixed and what will stop it happening again. We help you gather documents such as invoices and prepare clear responses and plans of action. Amazon makes the final decision, so no honest agency can promise that a listing or account will be reinstated.',
        ],
      },
      {
        heading: 'Listings, A+ content and the Brand Store',
        paragraphs: [
          'Good Amazon store management starts with the product detail page. Titles should follow category style guides and lead with what shoppers search. Bullets should answer sizing, materials, compatibility and care. Images should show scale, use and what is in the box.',
          'With Brand Registry, A+ content adds comparison charts and richer storytelling below the fold, and a Brand Store gives you a branded space to send ad and social traffic. Both work best when they answer the questions that show up in your reviews and customer messages.',
        ],
      },
      {
        heading: 'FBA inventory and inbound planning',
        paragraphs: [
          'Running out of stock in FBA costs sales and organic rank. Overstocking costs storage fees and ties up cash. Weekly planning balances the two using sell-through, lead times from your factory and FBA capacity limits.',
        ],
        bullets: [
          'Review restock recommendations against your own sales forecast',
          'Compare inbound placement options on fees and transit time',
          'Plan Q4 inbound early, as receiving slows before the holidays',
          'Reconcile received units and file reimbursement cases for losses',
          'Remove or liquidate slow stock before long-term storage fees apply',
        ],
      },
      {
        heading: 'A realistic first 90 days',
        paragraphs: [
          'The first month is usually spent stabilizing: fixing suppressed and stranded listings, clearing old Seller Support cases, correcting catalog errors and filing reimbursement claims for lost FBA units. It is unglamorous work, but it often recovers sales that were quietly leaking.',
          'The second month moves to content and inventory: rewriting the main product detail pages, refreshing A+ content and building a restock calendar. By the third month, daily routines are in place and the focus shifts to growth through new ASINs, deals, ads and, where it fits, new marketplaces. Good Amazon account management services should report against a plan like this every month, so you can see progress rather than a list of tasks.',
        ],
      },
      {
        heading: 'Brand Registry, the Buy Box and reviews',
        paragraphs: [
          'Brand Registry gives you more control over your detail pages and access to tools for reporting infringement. We monitor your listings for unexpected changes and new sellers, and help you report genuine violations through the proper channels.',
          'The Buy Box, now called the Featured Offer, goes to the offer Amazon judges best on price, availability and seller performance. Keeping stock in FBA, pricing consistently and maintaining healthy metrics all help. For reviews, we use only Amazon’s own tools: Amazon Vine for eligible new products and the Request a Review button. We never buy, swap or incentivize reviews, because that risks the whole account.',
        ],
      },
      {
        heading: 'Choosing an Amazon account management agency',
        paragraphs: [
          'Ask any Amazon account management agency who will log in each day, what they check, and how you will see it. Insist that Seller Central stays in your company’s name, with the agency added as users you can remove at any time. Compare proposals on scope, not price alone: some Amazon account management services stop at listings, while others include inventory, cases and brand protection. A written task list with daily, weekly and monthly checks makes the difference clear.',
          'We are a Chennai, India team with no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, so there is a short overlap in your morning, our evening, for calls. Most work happens while the US sleeps, and you wake up to finished tasks and a short update. We do not provide US-hours support, so urgent issues are handled from the start of our next working day.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Amazon PPC agency for Amazon.com sellers', href: '/us/amazon-ppc-agency/' },
      { label: 'Amazon SEO and listing optimization', href: '/amazon-seo/' },
      { label: 'How to sell on Amazon USA from India', href: '/blog/how-to-sell-on-amazon-usa-from-india/' },
      { label: 'Marketplace profit calculator', href: '/tools/marketplace-profit-calculator/' },
    ],
    faqs: [
      { q: 'What are Amazon account management services?', a: 'They are ongoing services where an outside team runs the daily work in your Seller Central account. That usually covers listings, A+ content, the Brand Store, FBA inventory and inbound shipments, account health monitoring, Brand Registry and coordination with advertising, so the account keeps growing without consuming your week.' },
      { q: 'What does Amazon seller account management include day to day?', a: 'Each day we check account health, suppressed and stranded listings, policy notices and customer messages that need a reply. Each week we review inventory, pricing, Buy Box share and listing performance. Each month you get a report in USD and a review call in your morning.' },
      { q: 'Can you get my suspended account or listing reinstated?', a: 'We can help you understand the notice, gather evidence such as invoices, and prepare a clear response or plan of action covering root cause and fixes. Amazon makes the final decision, so we cannot promise reinstatement. Anyone who promises it is overselling.' },
      { q: 'How do you get more reviews without breaking Amazon rules?', a: 'We use only Amazon’s own tools: Amazon Vine for eligible products and the Request a Review button in Seller Central. We never buy, trade or incentivize reviews. Reading reviews regularly also shows which listing details or product issues to fix, which often improves ratings over time.' },
      { q: 'Will I keep ownership of my Seller Central account?', a: 'Yes. The account stays registered to your business. We work as added users with only the permissions we need, and you can remove our access at any time. Listings, sales history, reviews and brand assets all remain yours.' },
      { q: 'How much does Amazon store management cost?', a: 'We quote Amazon store management in USD after a free audit. The fee depends on the number of ASINs, how much listing and A+ work is needed, inventory complexity and whether you also want us to manage advertising alongside the account.' },
      { q: 'Do you work in US business hours?', a: 'No. We are based in Chennai, India, 9.5 to 10.5 hours ahead of US Eastern. We overlap briefly with your morning for calls and do most work while the US sleeps, so tasks are finished when your day starts. Urgent issues are picked up at the start of our next working day.' },
    ],
  },

  // ───────────────────────── 3. Generative engine optimization agency (US) ─────────────────────────
  {
    slug: 'us/generative-engine-optimization-agency',
    kind: 'global',
    market: 'US',
    twin: 'ai-search-optimization',
    title: 'Generative Engine Optimization Agency (GEO) | Magnus Path',
    description: 'Generative engine optimization agency for US e-commerce and B2B brands: clearer entities, quotable pages and AI referral tracking for ChatGPT and AI Overviews.',
    primaryKeyword: 'generative engine optimization agency',
    navLabel: 'Generative Engine Optimization',
    breadcrumb: usBreadcrumb,
    eyebrow: 'GEO services · ChatGPT · Perplexity · AI Overviews · Gemini',
    h1: 'Generative Engine Optimization Agency for *Honest* AI Visibility',
    intro: 'Magnus Path is a generative engine optimization agency for US e-commerce and B2B brands that want to show up accurately in ChatGPT, Perplexity, Gemini and Google AI Overviews. Nobody controls what AI models say, so we focus on what you can influence: clear brand facts, pages worth quoting, trusted mentions and tracking that shows real visits.',
    icon: 'ai',
    facts: ['ChatGPT, Perplexity, Gemini, AI Overviews', 'Honest about what can be measured', 'Quoted in USD after an audit'],
    headings: {
      pains: 'Why US brands are asking about *AI search* now',
      includes: 'What our GEO services include',
      process: 'How a GEO agency engagement runs in *4 steps*',
      guide: 'Generative engine optimization for US brands: what works, what is hype',
    },
    pains: [
      { title: 'Rankings hold, clicks slip', body: 'Google AI Overviews answer many questions on the results page, so steady rankings can still bring fewer visits. The brands named in the answer get the attention.' },
      { title: 'AI tools describe you wrongly, or not at all', body: 'Outdated prices, old product names or a competitor listed instead of you. Buyers trust these answers, and you rarely see them happen.' },
      { title: 'Plenty of claims, little evidence', body: 'Every vendor now sells AI visibility. Few can explain what they change, how they measure it, or what they cannot control.' },
    ],
    includes: [
      { title: 'AI answer baseline', body: 'A fixed set of buyer questions run across ChatGPT, Perplexity, Gemini and Google, recording which brands and sources appear and how you are described.' },
      { title: 'Entity clarity', body: 'One consistent set of facts about your company, products and people across your site, Google Business Profile, marketplaces, LinkedIn and directories.' },
      { title: 'Quotable answer pages', body: 'Product, category, comparison and FAQ content rewritten so the first sentence answers the question and each fact can stand on its own.' },
      { title: 'Structured data and product feeds', body: 'Organization, Product, Review and FAQ schema checked for accuracy, plus clean Google Merchant Center feeds with current prices and availability.' },
      { title: 'Mentions and reviews plan', body: 'A list of trade publications, review sites, directories and communities that AI tools cite in your category, with a plan to earn genuine mentions.' },
      { title: 'AI referral tracking in GA4', body: 'A custom channel for ChatGPT, Perplexity, Gemini, Copilot and similar referrers, with conversions and revenue, reported monthly in USD.' },
    ],
    platforms: ['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Google Gemini', 'Microsoft Copilot', 'Google Analytics 4', 'Google Search Console', 'Google Merchant Center'],
    process: [
      { title: 'Free audit and baseline', body: 'We run your buyer questions through the main AI tools, check technical SEO and schema, and show you the findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'A prioritized plan covering pages, entity fixes, feeds and mentions, with a monthly fee in USD and clear notes on what we cannot influence.' },
      { title: 'Fix and publish', body: 'Schema, brand facts and feeds are corrected first, then key pages are rewritten for clear answers and outreach for mentions begins.' },
      { title: 'Re-test and report', body: 'Each month we re-run the same questions, review AI referrals in GA4 and adjust priorities based on what actually changed.' },
    ],
    figures: [
      { type: 'venn', caption: 'AI tools build one picture of your brand from your site and everyone else’s.', after: 2, left: { title: 'Your own pages', body: 'fact sheet, Organization and Product schema, product feeds' }, right: { title: 'Other sites about you', body: 'LinkedIn, Amazon, Crunchbase, press and reviews' }, overlap: 'The same facts everywhere' },
      { type: 'matrix', caption: 'Good signs and warning signs when you compare GEO agencies.', after: 3, cols: ['Good sign', 'Warning sign'], rows: ['What they promise', 'How they work'], cells: [
        { title: 'Months, not days', body: 'Results build over months and differ by AI tool' },
        { title: 'Fixed placement', body: 'A promised spot in ChatGPT answers' },
        { title: 'Clear tracking', body: 'AI referrals split from other traffic in GA4' },
        { title: 'Shortcuts', body: 'Bulk AI articles or paid mentions posing as editorial' },
      ] },
    ],
    guide: [
      {
        heading: 'What a generative engine optimization agency does',
        paragraphs: [
          'Generative engine optimization, or GEO, is the work of making your brand easy for AI tools to find, understand and cite correctly. Some people call it AI search optimization or LLM SEO. A generative engine optimization agency improves the inputs those tools draw on: your own pages, your structured data and product feeds, and what trusted third-party sites say about you.',
          'It is a new field, and we would rather be clear about that than oversell it. AI models change often, they do not publish how they pick sources, and no agency controls what they say. Anyone promising a fixed spot in ChatGPT answers is guessing.',
        ],
      },
      {
        heading: 'Why GEO matters for US e-commerce and B2B brands',
        paragraphs: [
          'Two trends make this worth attention. Google AI Overviews reduce clicks to organic results, so ranking alone brings less traffic than before. And 2026 data from Similarweb and Adobe shows that shoppers referred by AI tools convert at higher rates than organic search visitors. Fewer visits overall, but stronger ones for the brands that get named, which is why it is worth tracking AI referrals separately from other traffic.',
          'For an e-commerce brand, the questions are product questions: which running shoe suits flat feet, which protein powder has no added sugar. For a B2B company, they are shortlist questions: which vendors handle a certain integration, or which suppliers make a part to a given spec. GEO services aim to make sure your accurate answer is available when those questions are asked.',
        ],
      },
      {
        heading: 'Entity clarity: one story about your brand everywhere',
        paragraphs: [
          'AI tools build a picture of your company from many sources. If your website, LinkedIn page, Amazon store, Crunchbase profile and press mentions describe you differently, that picture blurs and answers become vague or wrong.',
          'Start with a short fact sheet: legal and brand name, what you sell, who it is for, where you ship, founding team and key product names. Use it everywhere, keep it current, and mark it up with Organization and Product schema on your site. For B2B companies, add the details buyers check before shortlisting: industries served, product standards and compliance, minimum order quantities, lead times and integrations. Clear, consistent facts are easier for any AI tool to repeat accurately.',
        ],
      },
      {
        heading: 'Choosing GEO services: questions to ask any agency',
        paragraphs: [
          'Because the field is young, sales pitches vary wildly. Before you hire a generative engine optimization agency, ask what it will change on your site in the first month, which AI tools and which questions it will track, and how it separates AI referrals from other traffic in GA4.',
          'Also ask what it will not claim. A careful GEO agency will say that results build over months, differ by tool and can shift when a model updates. Be wary of anyone promising fixed placements, bulk AI-written articles or paid placements disguised as editorial mentions. Those shortcuts tend to damage trust with both people and search engines.',
        ],
      },
      {
        heading: 'Quotable answers, structured data and product feeds',
        paragraphs: [
          'AI tools lift short passages, so write pages that work in short passages. A GEO agency should help you turn vague marketing copy into specific, checkable statements.',
        ],
        bullets: [
          'Answer the question in the first sentence, then add detail',
          'State concrete facts: dimensions, materials, compatibility, shipping times, return windows',
          'Use comparison tables for questions buyers actually ask',
          'Keep Product schema and Merchant Center feeds matched to live prices and stock',
          'Write FAQs that still make sense when quoted alone',
        ],
      },
      {
        heading: 'Mentions, reviews and what llms.txt can and cannot do',
        paragraphs: [
          'Third-party signals carry weight. Reviews on Google, Amazon and category review sites, coverage in trade publications, listings on credible directories and genuine discussion on forums such as Reddit all shape how AI tools describe a category. You cannot buy your way into these honestly, but you can earn them with good products, useful data and steady outreach.',
          'You may hear about llms.txt, a proposed file that points AI tools to your key pages. It is optional and unproven, with little public evidence that major AI tools rely on it. We can add one because it is cheap, but it is not a strategy on its own.',
        ],
      },
      {
        heading: 'Measuring generative engine optimization honestly',
        paragraphs: [
          'Measurement is imperfect, so we use several signals together. In GA4, we group referrals from chatgpt.com, perplexity.ai, gemini.google.com and copilot.microsoft.com into an AI channel with its own conversions. Some AI-driven visits still arrive as direct traffic, so the true number is likely higher. We also re-run a fixed set of buyer questions each month and track branded search in Search Console.',
          'We are a Chennai, India team with no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 in winter, so calls happen in your morning, our evening, and most work is done while the US sleeps. Whichever generative engine optimization agency you choose, ask how it measures results and what it will not claim.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Shopify SEO agency for US stores', href: '/us/shopify-seo-agency/' },
      { label: 'Amazon PPC agency for Amazon.com sellers', href: '/us/amazon-ppc-agency/' },
      { label: 'AI search optimization services', href: '/ai-search-optimization/' },
      { label: 'Free e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'What is generative engine optimization?', a: 'Generative engine optimization, or GEO, is the practice of making your brand easy for AI tools such as ChatGPT, Perplexity, Gemini and Google AI Overviews to find, understand and cite accurately. It combines solid SEO with clear brand facts, quotable content, structured data, product feeds and genuine third-party mentions.' },
      { q: 'What does a GEO agency do?', a: 'A GEO agency audits how AI tools currently describe your brand and category, fixes inconsistent brand information and schema, rewrites key pages so they answer questions directly, builds a plan for reviews and mentions on trusted sites, and tracks AI referral visits and conversions in GA4.' },
      { q: 'Can you get my brand mentioned in ChatGPT?', a: 'No one can promise that. AI models decide what to say, and their sources change. We improve what they draw on: your pages, structured data, feeds and reputation on trusted sites. That raises the chance of accurate mentions, and we track progress honestly each month.' },
      { q: 'How is GEO different from SEO?', a: 'GEO builds on SEO rather than replacing it. AI tools often read pages that already rank, so technical SEO still matters. GEO adds stronger focus on direct answers, consistent entity information and third-party reputation, because AI tools summarize sources instead of showing a list of links.' },
      { q: 'How do you measure AI search optimization results?', a: 'We create a GA4 channel for referrals from ChatGPT, Perplexity, Gemini, Copilot and similar tools, with conversions and revenue. We also re-run a fixed set of buyer questions monthly and watch branded search. Some AI-influenced visits show up as direct traffic, so measurement is imperfect.' },
      { q: 'Do I need an llms.txt file?', a: 'It is optional. llms.txt is a proposed file that lists your key pages for AI tools, but it is not an agreed standard and there is little public evidence that major AI tools rely on it. It is cheap to add, but it should not be the center of your plan.' },
      { q: 'How much do GEO services cost?', a: 'We quote GEO services in USD after a free audit. The fee depends on how many pages need rewriting, the state of your technical SEO and schema, product feed work and how much outreach for mentions is needed. Sites with major SEO problems may need those fixed first.' },
    ],
  },
];
