import type { ServicePageData } from '../../data/types';

const US_HUB: { label: string; href: string } = { label: 'United States', href: '/us/ecommerce-marketing-agency/' };

export const usAgencyPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. US country hub
  {
    slug: 'us/ecommerce-marketing-agency',
    kind: 'hub',
    market: 'US',
    title: 'Ecommerce Marketing Agency for US Brands | Magnus Path',
    description: 'Ecommerce marketing agency for US brands and agencies: Shopify, Amazon PPC, SEO, GEO and white-label work from a Chennai team, quoted in USD after an audit.',
    primaryKeyword: 'ecommerce marketing agency for US brands',
    navLabel: 'United States',
    breadcrumb: [],
    eyebrow: 'For US brands and agencies · Shopify · Amazon · SEO · White label',
    h1: 'Ecommerce Marketing Agency for US Brands, *Done While You Sleep*',
    intro: 'Magnus Path is an ecommerce marketing agency for US brands and the US agencies that serve them. We work on Shopify, Shopify Plus, Amazon Ads, SEO and AI search from Chennai, India, with no US office. A short overlap in your morning covers calls, and most work happens overnight, so you start the day with finished tasks.',
    icon: 'shopify',
    facts: ['IST is 9.5–10.5 hrs ahead of ET', 'Brands and agencies', 'Quoted in USD'],
    headings: {
      pains: 'Where US brands and agencies get stuck',
      includes: 'What one remote team covers for you',
      process: 'Starting from the US in *4 steps*',
      children: 'Services for US brands and agencies',
      guide: 'Hiring an offshore ecommerce marketing agency from the US: a practical guide',
    },
    pains: [
      { title: 'Agency retainers sized for bigger brands', body: 'US agency fees often assume a large ad budget. Growing brands pay for senior names in the pitch and get junior hands on the account.' },
      { title: 'Amazon and Shopify run by different people', body: 'One freelancer runs Sponsored Products, another fixes the theme and nobody connects the two. Price changes on one channel quietly hurt the other.' },
      { title: 'Agencies short on delivery capacity', body: 'US agencies win SEO and web projects faster than they can hire. Work slips, account managers end up doing the work and margins shrink.' },
    ],
    includes: [
      { title: 'Shopify and Shopify Plus work', body: 'Theme builds, speed fixes, apps, checkout extensibility and migrations, handled by developers who work on Shopify every day.' },
      { title: 'Amazon PPC and account management', body: 'Sponsored Products, Sponsored Brands and Sponsored Display on Amazon.com, plus listings, A+ content, inventory and account health.' },
      { title: 'Shopify and e-commerce SEO', body: 'Technical fixes, collection and product page optimization, structured data and content written in US English for Google.' },
      { title: 'Generative engine optimization', body: 'Content and structured data shaped so ChatGPT, Perplexity and Google AI Overviews can find, understand and cite your pages.' },
      { title: 'White-label delivery for agencies', body: 'SEO and web development done under your brand, with NDAs, unbranded reports and no contact with your clients.' },
      { title: 'One report in USD', body: 'Revenue, ad spend and results across channels in one monthly report, followed by a call booked in your morning.' },
    ],
    children: [
      { title: 'White Label SEO', href: '/us/white-label-seo/', body: 'SEO fulfillment for US agencies under your brand: audits, on-page, content, links and local SEO, quoted per client site.', icon: 'seo' },
      { title: 'SEO Outsourcing', href: '/us/seo-outsourcing/', body: 'A senior offshore SEO team for US businesses and agencies, with a written monthly scope and task-level reports.', icon: 'seo' },
      { title: 'White Label Web Development', href: '/us/white-label-web-development/', body: 'Shopify, WordPress and custom builds delivered under your agency’s name, with code and accounts you own.', icon: 'website' },
      { title: 'Shopify SEO Agency', href: '/us/shopify-seo-agency/', body: 'Technical SEO, collections, product pages and content for Shopify stores selling to US shoppers.', icon: 'shopify' },
      { title: 'Shopify Plus Agency', href: '/us/shopify-plus-agency/', body: 'Builds, migrations, checkout extensibility and automation for brands that run on Shopify Plus.', icon: 'shopify' },
      { title: 'Hire a Shopify Developer', href: '/us/hire-shopify-developer/', body: 'Dedicated Shopify developers for themes, apps and fixes, working through your US night.', icon: 'website' },
      { title: 'Ecommerce PPC Agency', href: '/us/ecommerce-ppc-agency/', body: 'Google Shopping, Performance Max and Search for US online stores, with feeds tuned for margin and bids set from your profit.', icon: 'social' },
      { title: 'Amazon PPC Agency', href: '/us/amazon-ppc-agency/', body: 'Sponsored Products, Brands and Display campaigns on Amazon.com, with budgets set by product margin.', icon: 'amazon' },
      { title: 'Amazon Account Management', href: '/us/amazon-account-management/', body: 'Listings, A+ content, inventory, FBA shipments and account health handled in Seller Central.', icon: 'marketplace' },
      { title: 'Website Maintenance', href: '/us/website-maintenance-services/', body: 'Updates, backups, security checks and small changes for WordPress, WooCommerce and Shopify sites, on a monthly plan.', icon: 'website' },
      { title: 'Hire a WordPress Developer', href: '/us/hire-wordpress-developer/', body: 'A dedicated or part-time WordPress developer for builds, custom themes, plugins and speed work.', icon: 'website' },
      { title: 'WooCommerce Agency', href: '/us/woocommerce-agency/', body: 'WooCommerce store builds, migrations, payment and shipping integrations, and conversion work.', icon: 'marketplace' },
      { title: 'White Label WordPress Development', href: '/us/white-label-wordpress-development/', body: 'WordPress builds delivered under your agency’s brand, with NDAs, Git workflow and overnight turnaround.', icon: 'website' },
      { title: 'ChatGPT Ads', href: '/us/chatgpt-ads-agency/', body: 'Campaigns in OpenAI’s Ads Manager that put your brand below relevant ChatGPT answers, judged on cost per order.', icon: 'ai' },
      { title: 'Generative Engine Optimization', href: '/us/generative-engine-optimization-agency/', body: 'Make your brand visible in ChatGPT, Perplexity and Google AI Overviews answers.', icon: 'ai' },
    ],
    process: [
      { title: 'Free audit', body: 'We review your store, Amazon account, ad accounts or agency workload, and share findings on a video call in your morning.' },
      { title: 'Written scope and USD quote', body: 'A plan listing channels, monthly tasks and who does what, with a quote in USD. Nothing padded with work you do not need.' },
      { title: 'Onboarding', body: 'Access to Shopify, Seller Central, ad accounts or your project tools, a tracking check and a shared Slack or Teams channel.' },
      { title: 'Overnight delivery', body: 'You send requests during your day, we work through your night, and you review finished tasks the next morning.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'Amazon Seller Central', 'Amazon Ads', 'Google Ads', 'Meta Ads', 'GA4', 'Klaviyo', 'WordPress'],
    figures: [
      { type: 'mindmap', caption: 'What one remote team covers for US brands and US agencies.', after: 1, center: 'US ecommerce growth', branches: [
        { label: 'Shopify', items: ['Builds and Shopify Plus work', 'Speed and fixes', 'Shop Pay and sales tax setup'] },
        { label: 'Amazon.com', items: ['PPC built by product margin', 'Listings and Seller Central', 'Stock checked before ads'] },
        { label: 'Search', items: ['Shopify and e-commerce SEO', 'Generative engine optimization'] },
        { label: 'For agencies', items: ['White-label SEO', 'White-label web development'] },
      ] },
      { type: 'venn', caption: 'How the time difference turns into overnight delivery.', after: 2, left: { title: 'Your US workday', body: 'send requests and feedback, review finished work' }, right: { title: 'Our Chennai workday', body: 'build, fix and report while you sleep' }, overlap: 'Short call in your Eastern morning' },
    ],
    guide: [
      {
        heading: 'Who this page is for',
        paragraphs: [
          'We work with two kinds of US clients. The first is the brand: a direct-to-consumer business selling on its own Shopify store, on Amazon.com, or on both. The second is the agency: a US digital or web agency that has more SEO and development work than its team can deliver, and wants a reliable team behind the scenes.',
          'The needs are different, but the problem is often the same. Good specialists cost a lot to hire in the US, and the work does not always justify a full-time salary. An ecommerce marketing agency for US brands that also delivers white-label work for agencies can serve both, because the skills underneath, Shopify, Amazon and SEO, are the same.',
        ],
      },
      {
        heading: 'What a remote ecommerce team should cover',
        paragraphs: [
          'Most US brands sell in more than one place. Shopify brings full-price orders and customer data. Amazon brings volume and search demand. Google and Meta drive traffic to both. These channels affect each other: a coupon on Amazon changes conversion on Shopify, and new product launches need listings, ads and SEO ready on the same day.',
          'That is why we prefer to run the store, marketplace and search work as one plan. When one team sees all of it, you get one report and one person accountable for the result, instead of four vendors each claiming the same sale.',
          'In practice, a good ecommerce marketing agency for US brands should be able to explain how each channel earns its budget. If Amazon ads bring orders at a loss, or Shopify traffic grows while margin falls, the report should show it, and the plan for next month should change because of it.',
        ],
        bullets: [
          'Shopify and Shopify Plus builds, fixes and speed work',
          'Amazon PPC, listings and Seller Central management',
          'Shopify SEO and e-commerce SEO for Google',
          'Generative engine optimization for AI answers',
          'White-label SEO and web development for agencies',
        ],
      },
      {
        heading: 'How the time difference really works',
        paragraphs: [
          'India Standard Time is 9.5 hours ahead of US Eastern in summer and 10.5 hours ahead in winter. For the Pacific coast the gap is 12.5 and 13.5 hours. That means our working days barely overlap. There is a short window in the US Eastern morning, which is our evening, and that is when we book calls.',
          'The rest of the time, the gap works in your favor. You send requests and feedback during your day, our team works on them while you sleep, and you wake up to finished tasks, reports and questions answered. We do not offer support during US business hours, and we would rather say that plainly than promise it and miss it. For urgent issues, you have a named contact on chat who checks messages at the start and end of our day.',
        ],
      },
      {
        heading: 'Amazon, Shopify and SEO details US shoppers expect',
        paragraphs: [
          'US shoppers expect fast shipping estimates, clear return windows, US sizing and units, and payment options such as Shop Pay, Apple Pay and buy now, pay later. Sales tax is added at checkout and varies by state, so Shopify tax settings need care. We set these up, but your accountant should confirm where you have sales tax obligations.',
          'On Amazon.com, competition is intense in most categories. Campaigns should be built by product margin, with clear keyword structure and negative keywords, and stock should be watched closely so ads never run on an empty shelf. For SEO, Google AI Overviews now answer many product questions directly, so pages need short, quotable answers on sizing, materials, shipping and care.',
        ],
      },
      {
        heading: 'How we quote in USD',
        paragraphs: [
          'Every service is quoted in USD after a free audit or a short scoping call, because scope and ad spend vary too much for a fixed price to be honest. The cost depends on catalog size, the number of channels, how competitive your category is, the integrations involved and how much content is needed. The written quote lists the scope, the timeline and what is excluded, so you know exactly what each month or project includes.',
          'Ad spend is always paid directly to Amazon, Google and Meta from your own accounts, and our management fee is quoted separately. You own every account, all data and all creative.',
          'For agencies, the same rule applies to client work. Code lives in your repository, reports carry your logo, and client accounts stay in your name or your client’s. If you stop working with us, nothing is held back and nothing needs to be rebuilt.',
        ],
      },
      {
        heading: 'How to choose an offshore ecommerce marketing agency for US brands',
        paragraphs: [
          'Whether you pick a local shop or an ecommerce marketing agency for US brands based abroad, ask the same questions before you sign. A good team will answer them in writing, and will be happy to start with a small, clearly scoped piece of work so you can judge quality before committing a bigger budget.',
        ],
        bullets: [
          'Who exactly will work on my account, and how experienced are they?',
          'Which hours overlap with mine, and how do urgent issues reach you?',
          'Will I own all accounts, code, data and creative?',
          'What does the monthly report show, and is it in USD?',
          'What is the notice period, and is there any lock-in?',
        ],
      },
    ],
    related: [
      { label: 'White label SEO services for US agencies', href: '/us/white-label-seo/' },
      { label: 'Amazon PPC agency for US sellers', href: '/us/amazon-ppc-agency/' },
      { label: 'Shopify SEO agency for US stores', href: '/us/shopify-seo-agency/' },
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Free e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Do you have an office in the United States?', a: 'No. Magnus Path is a team based in Chennai, India, and we work with US brands and agencies remotely. Calls happen over video in your morning, day-to-day work runs through a shared project board and Slack or Teams, and every client has a named contact.' },
      { q: 'What hours do you work in US time?', a: 'India Standard Time is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter. We overlap for a short window in the Eastern morning, which is our evening. Most work happens during your night, so you wake up to finished tasks. We do not offer US-hours support.' },
      { q: 'Do you work with US agencies as well as brands?', a: 'Yes. US agencies use us for white-label SEO, SEO outsourcing and white-label web development under their own brand. We sign an NDA, deliver unbranded work and reports, and never contact the agency’s clients. Brands use us directly for Shopify, Amazon, SEO and AI search.' },
      { q: 'How much do your services cost for US clients?', a: 'It depends on the services, your catalog size, the channels involved and how competitive your category is. We quote every service in USD after a free audit, with a written scope, timeline and exclusions. Ad spend is paid directly to the platform from your own account, and our management fee is quoted separately.' },
      { q: 'Do you have special status with Shopify or Amazon?', a: 'We do not claim any special status or badges. We work on Shopify, Shopify Plus and Amazon Ads every day, building stores and running campaigns in your own accounts. Ask us for sample work and a free audit of your store or ad account so you can judge the work directly.' },
      { q: 'Can you handle US sales tax on Shopify?', a: 'We can configure Shopify tax settings, collect sales tax in the states you choose and check that checkout totals are correct. Sales tax obligations depend on your business and where you sell, so your accountant should confirm which states you need to register and collect in.' },
      { q: 'Is it a good idea to hire an offshore ecommerce team?', a: 'It can be, if the team is experienced, writes clearly and is honest about hours. You get specialists across Shopify, Amazon and SEO for less than a comparable US hire. Check who does the work, ask for sample reports and insist on owning every account.' },
    ],
  },

  // ───────────────────────────────────────────── 2. US white-label SEO
  {
    slug: 'us/white-label-seo',
    kind: 'global',
    market: 'US',
    twin: 'white-label-seo',
    title: 'White Label SEO Services for US Agencies | Magnus Path',
    description: 'White label SEO services for US agencies: unbranded reports, NDAs, overnight delivery from a Chennai team, ethical link building and a quote per client site.',
    primaryKeyword: 'white label seo services',
    navLabel: 'White Label SEO',
    breadcrumb: [US_HUB],
    eyebrow: 'For US digital agencies · Unbranded · NDA · Overnight',
    h1: 'White Label SEO Services for US Agencies, *Delivered Overnight*',
    intro: 'Magnus Path provides white label SEO services for US digital agencies that sell SEO but need more hands to deliver it. Our Chennai team handles audits, on-page work, content, link building and local SEO under your brand. We sign an NDA, never speak to your clients, and work through your night so tasks are ready each morning.',
    icon: 'seo',
    facts: ['Pilot site to start', 'NDA and unbranded reports', 'Work done during your night'],
    headings: {
      pains: 'Why US agencies look for a white label SEO agency',
      includes: 'What our white label SEO for agencies includes',
      process: 'How fulfillment starts in *4 steps*',
      guide: 'White label SEO for US agencies: how fulfillment works and how to vet a provider',
    },
    pains: [
      { title: 'Sold faster than you can hire', body: 'Your sales team closes SEO retainers, but a good US SEO hire takes months to find and costs a full salary before the first report goes out.' },
      { title: 'Burned by a cheap provider', body: 'Many agencies have tried a low-cost vendor and received spammy links, copied audits and reports they were embarrassed to forward.' },
      { title: 'Account managers doing the work', body: 'When delivery falls behind, your account managers start writing title tags at night. Client service slips and margins shrink.' },
    ],
    includes: [
      { title: 'Technical SEO audits', body: 'Crawl, indexing, Core Web Vitals, structured data and site architecture reviewed, with a prioritized fix list your client’s developer can follow.' },
      { title: 'On-page optimization', body: 'Keyword mapping, titles, meta descriptions, headings and internal links across priority pages, logged page by page.' },
      { title: 'Content in US English', body: 'Briefs, blog posts and service pages written for US readers, edited by a second person and matched to each client’s voice.' },
      { title: 'Ethical link building', body: 'Outreach to real, relevant websites for editorial links. No private blog networks, link farms or bulk paid packages. Every link listed.' },
      { title: 'Local SEO for US clients', body: 'Google Business Profile optimization, citations in US directories, review strategy and city or service-area pages.' },
      { title: 'Unbranded reports', body: 'Monthly reports under your logo or in your own template, with rankings, traffic, work done and next steps written for clients.' },
    ],
    process: [
      { title: 'Intro call and NDA', body: 'A call in your morning to learn how you sell and report SEO, then a mutual NDA before we see any client data.' },
      { title: 'Pilot site', body: 'We start with one client site so you can judge the audit, the work and our communication before moving more accounts.' },
      { title: 'Fulfillment setup', body: 'Shared Slack or Teams channel, project board, your report template and a fixed monthly delivery calendar per site.' },
      { title: 'Deliver and scale', body: 'Monthly delivery and reports for each site. Add client sites as you sell them, on the same workflow.' },
    ],
    platforms: ['Google Search Console', 'GA4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Looker Studio', 'AgencyAnalytics', 'Google Business Profile', 'Slack'],
    figures: [
      { type: 'matrix', caption: 'Who does what when you resell SEO under your own brand.', after: 0, cols: ['Your agency', 'Our team'], rows: ['In front of the client', 'Behind the scenes'], cells: [
        { title: 'You own it', body: 'Sales, pricing, client calls and reports with your logo' },
        { title: 'Invisible', body: 'No client contact and no name on any report' },
        { title: 'You approve', body: 'Audit and keyword map reviewed before work starts' },
        { title: 'We deliver', body: 'Technical fixes, on-page work, content and outreach links' },
      ] },
      { type: 'mindmap', caption: 'What a monthly white label SEO program covers for each client site.', after: 4, center: 'Monthly SEO program', branches: [
        { label: 'Technical', items: ['Site audit and fixes', 'Keyword map per site'] },
        { label: 'On-page', items: ['Titles and page updates', 'New pages and articles'] },
        { label: 'Links', items: ['Outreach to real sites', 'Every link listed by URL'] },
        { label: 'Local SEO', items: ['Google Business Profile', 'US directory citations', 'Review request plans'] },
      ] },
    ],
    guide: [
      {
        heading: 'How white label SEO services work for a US agency',
        paragraphs: [
          'With white label SEO services, your agency sells SEO under its own name and a fulfillment team does the work behind the scenes. Your client signs with you, talks to you and receives reports with your logo. The fulfillment team never appears.',
          'For a web design, paid media or social agency, this is a way to add SEO without building a department. For an SEO agency, it is extra capacity for busy months or for work your team does not enjoy, such as citation clean-up or content production. Either way, you keep the client relationship and set your own margin.',
          'The catch is accountability. Your client blames you, not the vendor, if rankings drop after a batch of bad links. That is why choosing a provider for white label SEO services matters more than finding the lowest price.',
        ],
      },
      {
        heading: 'Confidentiality: NDAs, unbranded reports and no client contact',
        paragraphs: [
          'Your client should never know a fulfillment team is involved unless you decide to tell them. We sign a mutual NDA before we see any client data. Reports go out under your logo or in your own template, in tools such as Looker Studio or AgencyAnalytics, and nothing carries our name.',
          'We never contact your clients, and our agreement says so in writing. If a client asks a technical question, you can forward it and we will draft an answer in your tone, or join a call as a member of your team. White label SEO for agencies only works when you are confident the provider will not compete for your accounts.',
        ],
      },
      {
        heading: 'Overnight turnaround: the time difference as a feature',
        paragraphs: [
          'Our team in Chennai works on India Standard Time, which is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. Our working days barely overlap. There is a short window in your Eastern morning, which is our evening, for calls.',
          'For fulfillment, that gap is useful. You send a brief, a new client site or client feedback before you log off, and the work happens while you sleep. Audits, on-page changes and content drafts are usually waiting for you the next morning. We do not offer US-hours support, and we say so up front. Urgent messages reach a named account manager who checks the channel at the start and end of our day.',
        ],
      },
      {
        heading: 'Our fulfillment process, site by site',
        paragraphs: [
          'Every new client site follows the same steps, so quality does not depend on who happens to be working that week.',
        ],
        bullets: [
          'Onboarding form: goals, target locations, competitors, access and brand voice',
          'Technical audit and keyword map, reviewed with you before work starts',
          'A monthly delivery calendar agreed per site, visible on a shared board',
          'On-page changes, content and outreach delivered against that calendar',
          'Internal review by a second person before anything goes live',
          'Unbranded report and a short summary you can paste into a client email',
        ],
      },
      {
        heading: 'What is included, and how we build links',
        paragraphs: [
          'A typical monthly program covers technical fixes, on-page optimization, new content and link building, plus local SEO for clients who depend on Google Maps. For US local businesses such as dentists, contractors, law firms and multi-location retailers, that means Google Business Profile optimization, consistent citations in US directories, review request plans and city or service-area pages that are genuinely useful rather than copied.',
          'Link building is where cheap providers create the most risk. We build links only through outreach to real, relevant websites. We do not use private blog networks, link farms or bulk paid packages, and every link is listed with its URL so you can check it before your client sees the report.',
        ],
      },
      {
        heading: 'How to vet a white label SEO agency',
        paragraphs: [
          'Before you hand over a client, test any white label SEO agency, including us, against a few simple checks. A good provider will answer in writing and will not mind a pilot.',
        ],
        bullets: [
          'Ask for a sample audit of a real site, not a template',
          'Ask exactly how links are built, and whether every link will be listed',
          'Check that reports can be fully unbranded in your template',
          'Get the NDA and no-client-contact terms in writing',
          'Be wary of promised rankings or timelines; no one can promise them',
          'Start with one pilot site for two or three months',
        ],
      },
      {
        heading: 'How we quote, and your margins',
        paragraphs: [
          'Our white label SEO services are quoted in USD per client site after a short audit, with the scope agreed in writing for each site. The cost depends on the size of the site, how competitive the niche is, and how much content and link building you want each month. You set your own resale price, so the margin is yours. Because there are no salaries, tool licenses or training costs on your side, capacity grows and shrinks with your client list.',
          'We suggest starting with one pilot site for two or three months. That is long enough to judge the audit, the quality of on-page work and content, and how well we communicate, before you move more clients onto our white label SEO services.',
        ],
      },
    ],
    related: [
      { label: 'White label SEO services for agencies worldwide', href: '/white-label-seo/' },
      { label: 'Outsource SEO to an offshore team', href: '/us/seo-outsourcing/' },
      { label: 'White label web development for US agencies', href: '/us/white-label-web-development/' },
      { label: 'Generative engine optimization agency', href: '/us/generative-engine-optimization-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'What are white label SEO services?', a: 'White label SEO services are SEO work done by a fulfillment team and sold by an agency under its own brand. The team handles audits, on-page work, content, links and reports, while the agency keeps the client relationship. Clients see only the agency’s name, logo and reports.' },
      { q: 'How much does white label SEO cost?', a: 'We quote white label SEO per client site in USD after a short audit. The cost depends on site size, how competitive the market is and how much content and link building is in scope. You set your own resale price, and the scope for each site is agreed in writing before work begins.' },
      { q: 'Will my clients know you are doing the work?', a: 'No. We sign a mutual NDA, deliver reports under your logo or in your template, and never contact your clients. Our agreement states that we will not approach or work directly with any of your clients. If a client asks a question, we draft the answer for you.' },
      { q: 'How does the time difference affect turnaround?', a: 'India is 9.5 to 10.5 hours ahead of US Eastern. We have a short overlap in your morning for calls, and most work happens while you sleep. Briefs sent before you log off are usually done by the next morning. We do not offer US-hours support.' },
      { q: 'Do you offer local SEO for US clients?', a: 'Yes. We optimize Google Business Profiles, build and clean up citations in US directories, plan review requests and write city or service-area pages. Reports cover map rankings, calls and direction requests, all under your agency’s brand and in your report template.' },
      { q: 'What kind of link building does your white label SEO agency use?', a: 'Outreach-based link building from real, relevant websites only. We do not use private blog networks, link farms or bulk paid packages. Every link is listed in the monthly report with its URL, so you can review it before sharing results with your client.' },
      { q: 'Is white label SEO for agencies risky?', a: 'It is risky with the wrong provider, because your agency carries the blame for bad work. Reduce the risk with a pilot site, a written scope, a full list of links built, an NDA and no-client-contact terms. Avoid anyone promising rankings or fast timelines.' },
    ],
  },

  // ───────────────────────────────────────────── 3. US SEO outsourcing
  {
    slug: 'us/seo-outsourcing',
    kind: 'global',
    market: 'US',
    twin: 'seo-outsourcing-india',
    title: 'Outsource SEO to a Senior Offshore Team | Magnus Path',
    description: 'Outsource SEO to a senior offshore team in Chennai, India. Written monthly scope, task-level reports, ethical links and a USD quote after a free audit.',
    primaryKeyword: 'outsource seo',
    navLabel: 'SEO Outsourcing',
    breadcrumb: [US_HUB],
    eyebrow: 'For US businesses and agencies · Offshore SEO team',
    h1: 'Outsource SEO to a *Senior Offshore Team*',
    intro: 'If you want to outsource SEO without losing control of the work, Magnus Path gives US businesses and agencies a senior offshore team in Chennai, India. You get a named manager, a written monthly scope, task-level reports and link building you can check. We work while you sleep and meet in your morning.',
    icon: 'seo',
    facts: ['Free audit first', 'Written monthly scope', 'Every task and link reported'],
    headings: {
      pains: 'Why outsourcing SEO has a bad reputation',
      includes: 'What our SEO outsourcing company handles',
      process: 'How to outsource SEO to us in *4 steps*',
      guide: 'Choosing an offshore SEO company: a guide for US businesses and agencies',
    },
    pains: [
      { title: 'You cannot see what was done', body: 'Reports that say “optimization completed” with no list of pages, content or links leave you paying for work you cannot verify.' },
      { title: 'Links that cause damage later', body: 'Bulk directories, link farms and private blog networks can bring a short bump, then a ranking drop that takes months to repair.' },
      { title: 'Managing the vendor instead of the business', body: 'Vague emails, missed deadlines and no single owner mean you spend hours chasing a provider you hired to save time.' },
    ],
    includes: [
      { title: 'Technical SEO', body: 'Crawling, indexing, Core Web Vitals, redirects, structured data and site architecture, documented page by page with clear fix tickets.' },
      { title: 'Keyword research and strategy', body: 'Research built around your US market and customers, mapped to pages, with a 90-day plan tied to leads or revenue.' },
      { title: 'On-page and content', body: 'Titles, headings and copy optimized, plus new articles and landing pages written in natural US English and edited before delivery.' },
      { title: 'Outreach link building', body: 'Editorial links from relevant, real websites. Every link listed with its URL so you can check it yourself.' },
      { title: 'Local and e-commerce SEO', body: 'Google Business Profile and location pages for local businesses, product and collection work for Shopify and WooCommerce stores.' },
      { title: 'AI search visibility', body: 'Content and structured data shaped so Google AI Overviews, ChatGPT and Perplexity can understand and cite your pages.' },
    ],
    process: [
      { title: 'Audit and proposal', body: 'We audit your site and competitors, then send a written scope with monthly tasks, realistic timelines and a USD price.' },
      { title: 'Onboarding', body: 'Access to Search Console, GA4 and your CMS, a shared project board and a call schedule set in your morning.' },
      { title: 'Overnight delivery', body: 'Work happens during your night against the plan. The board shows what is planned, in progress and done.' },
      { title: 'Report and adjust', body: 'A monthly report listing every task, page and link, with traffic and conversions, then a call to set next month’s priorities.' },
    ],
    platforms: ['Google Search Console', 'GA4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Looker Studio', 'WordPress', 'Shopify'],
    figures: [
      { type: 'venn', caption: 'Partial outsourcing: keep the decisions in-house and hand over the hours.', after: 0, left: { title: 'Your in-house marketer', body: 'strategy, approvals and brand voice' }, right: { title: 'Our Chennai SEO team', body: 'technical fixes, content production and outreach' }, overlap: 'One monthly scope, in writing' },
      { type: 'matrix', caption: 'Red flags and good signs to look for in any SEO provider.', after: 5, cols: ['Red flag', 'Good sign'], rows: ['What they promise', 'What they report'], cells: [
        { title: 'Fixed rankings', body: 'Page one in 30 days, or lots of links for a tiny fee' },
        { title: 'Defined scope', body: 'Fixes, content and outreach agreed each month' },
        { title: 'Easy keywords', body: 'Rankings for low-value terms you never chose' },
        { title: 'Real results', body: 'Traffic, leads or revenue, plus a list of work done' },
      ] },
    ],
    guide: [
      {
        heading: 'When it makes sense to outsource SEO',
        paragraphs: [
          'Most US businesses outsource SEO for one of three reasons. They need specialist skills, such as technical SEO or link building, that a generalist marketer does not have. They cannot justify a full-time senior SEO salary. Or they are an agency that has sold more SEO than its team can deliver.',
          'In each case, the goal is the same: steady, visible progress without adding headcount. When you outsource SEO well, you trade a salary for a defined monthly scope and a report that proves the work happened. Outsourcing works when someone outside your company can own the work and show you what was done each month. It fails when you hand over a login and hope.',
          'If you already have an in-house marketer, outsourcing can also be partial. Many clients keep strategy and approvals in-house and hand us the technical fixes, content production and outreach.',
        ],
      },
      {
        heading: 'Why US companies choose an offshore SEO company',
        paragraphs: [
          'An offshore SEO company in India can give you senior people for the price of a junior US hire. India has a deep pool of technical SEO specialists, developers and strong English writers, and the time difference means work moves while your team is offline.',
          'Cost is not the only reason. A team that does SEO all day across many sites sees algorithm changes, indexing problems and content patterns faster than a single in-house marketer can, and brings fixes that have already worked elsewhere.',
          'The trade-off is that you cannot drop by the office, so process matters more. A good offshore SEO company writes everything down: scope, priorities, tasks completed and links built. If you have to ask what happened this month, the process is not working.',
        ],
      },
      {
        heading: 'How the time difference works',
        paragraphs: [
          'We are a Chennai team with no US office. India Standard Time is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your Eastern morning, which is our evening, and that is when we hold calls.',
          'Most of the work happens while you sleep. Send feedback or a new priority at the end of your day, and you will usually find it done, or a clear question waiting, the next morning. We do not offer support during US business hours, and we would rather tell you that now than disappoint you later.',
        ],
      },
      {
        heading: 'What you can outsource to an SEO outsourcing company',
        paragraphs: [
          'You can hand over a full SEO program or just the parts your team does not have time for. Common arrangements with our SEO outsourcing company include:',
        ],
        bullets: [
          'Full SEO management for one or more websites',
          'Technical audits plus fix tickets for your developers',
          'Content production: briefs, articles, service and category pages',
          'Local SEO for single and multi-location US businesses',
          'E-commerce SEO for Shopify, WooCommerce and custom stores',
          'White label delivery for agencies reselling SEO',
        ],
      },
      {
        heading: 'Questions to ask before you outsource SEO to India',
        paragraphs: [
          'Choosing to outsource SEO to India is mostly a decision about process, not geography. Whichever provider you consider, a few direct questions and a short trial will tell you most of what you need. A serious team will answer in writing. If the answers are vague, or the pitch leans on rankings for keywords you have never heard of, keep looking.',
        ],
        bullets: [
          'Can you audit my site before I sign?',
          'How exactly do you build links, and will you list every one?',
          'Who is my contact, and when do our hours overlap?',
          'What is delivered each month, in writing?',
          'What happens to content, accounts and data if we stop?',
        ],
      },
      {
        heading: 'Red flags when you outsource SEO',
        paragraphs: [
          'Be wary of anyone who promises page one in 30 days, top rankings by a set date or a fixed number of links for a tiny fee. No one can promise rankings, because Google decides them. Very cheap offers almost always cut corners on content and links, which are the two areas that carry the most risk to your site.',
          'Also watch for reports that only show rankings for easy, low-value keywords. A useful report shows organic traffic, leads or revenue, and the list of work done.',
          'Finally, check ownership. Before you outsource SEO to anyone, make sure Search Console, analytics, content and any new accounts are set up in your name. A provider that holds your data can make leaving painful, even when the work has stopped helping.',
        ],
      },
      {
        heading: 'What it costs to outsource SEO',
        paragraphs: [
          'We quote SEO outsourcing in USD after a free audit of your site and competitors. The cost depends on the size of the site, how competitive your market is, and how much technical, content and link work is needed each month. The quote is a defined monthly scope, not a vague package: technical fixes, on-page work, content and outreach links, with a task-level report and a monthly call. If you are an agency reselling SEO under your own brand, our white label SEO service is quoted per client site.',
        ],
      },
    ],
    related: [
      { label: 'SEO outsourcing to India for global clients', href: '/seo-outsourcing-india/' },
      { label: 'White label SEO services for US agencies', href: '/us/white-label-seo/' },
      { label: 'Shopify SEO agency for US stores', href: '/us/shopify-seo-agency/' },
      { label: 'Generative engine optimization agency', href: '/us/generative-engine-optimization-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'Should I outsource SEO or hire in-house?', a: 'Hire in-house if you need someone in meetings every day and can afford a senior salary. Outsource SEO if you need specialist skills across technical work, content and links without that fixed cost. Many US businesses keep strategy in-house and outsource delivery to a team they can check.' },
      { q: 'How much does it cost to outsource SEO?', a: 'It depends on site size, competition and how much technical, on-page, content and link work you need. We quote in USD after a free audit, as a defined monthly scope with the tasks, timeline and exclusions written down. Agencies reselling SEO can use our white label service, quoted per client site.' },
      { q: 'What should I look for in an offshore SEO company?', a: 'Look for a written monthly scope, a sample audit of your own site, clear answers on link building, a named contact with stated overlap hours and reports that list every task and link. Avoid any offshore SEO company that promises rankings or page one within weeks.' },
      { q: 'Is it safe to outsource SEO to India?', a: 'It is safe when the provider is transparent. Ask for a full list of links built, keep ownership of your accounts and content, and start with a defined scope you can measure. The risks come from hidden link schemes and vague reports, not from location.' },
      { q: 'How will we communicate across time zones?', a: 'India is 9.5 to 10.5 hours ahead of US Eastern. We book calls in your morning, which is our evening, and use Slack, Teams or email plus a shared project board. Most work happens overnight for you. We do not offer US-hours support.' },
      { q: 'How long before outsourced SEO shows results?', a: 'Technical fixes can show effects within weeks, but most sites see steady organic growth after four to six months. Timing depends on competition, site history and how much content and link work is in scope. We share realistic expectations before you sign, not after.' },
      { q: 'Do you work with US agencies as an SEO outsourcing company?', a: 'Yes. Agencies can outsource SEO delivery to us under their own brand. We sign an NDA, send unbranded reports and never contact your clients. That service is quoted per client site, separately from direct SEO outsourcing.' },
    ],
  },

  // ───────────────────────────────────────────── 4. US white-label web development
  {
    slug: 'us/white-label-web-development',
    kind: 'global',
    market: 'US',
    title: 'White Label Web Development for US Agencies | Magnus Path',
    description: 'White label web development for US agencies: Shopify, WordPress and custom builds under your brand, with NDAs, code you own and overnight progress. USD quotes.',
    primaryKeyword: 'white label web development',
    navLabel: 'White Label Web Development',
    breadcrumb: [US_HUB],
    eyebrow: 'For US agencies · Shopify · WordPress · Custom builds',
    h1: 'White Label Web Development for US Agencies, *Under Your Brand*',
    intro: 'Magnus Path offers white label web development for US agencies that sell websites faster than they can build them. Our Chennai developers handle Shopify, WordPress and custom builds under your name, sign an NDA and never contact your clients. Work moves forward during your night, and every project is quoted in USD after a free scoping call.',
    icon: 'website',
    facts: ['Shopify, WordPress and custom', 'NDA and no client contact', 'Quoted in USD after scoping'],
    headings: {
      pains: 'Why US agencies outsource web development',
      includes: 'What our white label website development covers',
      process: 'How a white label project runs in *4 steps*',
      guide: 'White label web development: a guide for US agencies',
    },
    pains: [
      { title: 'A pipeline bigger than your bench', body: 'You can sell three builds a month but only deliver two. Hiring a senior developer takes months, and freelancers disappear at launch week.' },
      { title: 'Designs that lose detail in the build', body: 'Approved Figma files come back with wrong spacing, broken mobile layouts and missing states, and your designers spend days on fixes.' },
      { title: 'Code nobody else can maintain', body: 'Page builders stacked on plugins, hard-coded content and no documentation turn every small client request into a rebuild.' },
    ],
    includes: [
      { title: 'White label Shopify development', body: 'Custom themes, Online Store 2.0 sections, theme customization, app setup and migrations from WooCommerce, BigCommerce or Magento.' },
      { title: 'White label WordPress development', body: 'Custom themes and blocks, WooCommerce stores and editor-friendly sites your clients can update without breaking layouts.' },
      { title: 'Custom and headless builds', body: 'Next.js, Astro and headless CMS sites for agencies whose clients need speed, flexibility or integrations off-the-shelf themes cannot handle.' },
      { title: 'Design to code', body: 'Figma designs built pixel-close, responsive at every breakpoint, with hover, empty and error states included.' },
      { title: 'QA, speed and accessibility', body: 'Cross-browser and device testing, Core Web Vitals checks and accessibility basics such as contrast, labels and keyboard navigation.' },
      { title: 'Ongoing support under your brand', body: 'Monthly maintenance, updates and small changes for launched sites, handled through your ticketing system or ours.' },
    ],
    process: [
      { title: 'Free scoping call', body: 'A call in your morning to review designs, features and deadlines, then a written scope and a USD quote.' },
      { title: 'NDA and setup', body: 'Mutual NDA, access to your Git, staging and project tools, and a shared Slack or Teams channel.' },
      { title: 'Build and daily updates', body: 'We build during your night and post progress and staging links each morning, with questions batched for one reply.' },
      { title: 'QA, launch and handover', body: 'Testing, fixes, launch support and documentation. Code, accounts and credentials stay with you.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'WordPress', 'WooCommerce', 'Figma', 'Next.js', 'Astro', 'GitHub', 'Jira'],
    figures: [
      { type: 'matrix', caption: 'When to keep a build in-house and when to hand it to a white label team.', after: 1, cols: ['Platform you know well', 'Unfamiliar platform'], rows: ['Team has spare capacity', 'Projects are queuing up'], cells: [
        { title: 'Keep in-house', body: 'Your team has the time and the skills' },
        { title: 'Outsource it', body: 'Avoid learning on a client’s budget' },
        { title: 'Overflow help', body: 'Hand extra projects to white label developers' },
        { title: 'Outsource fully', body: 'Keep strategy and design, hand over the code' },
      ] },
      { type: 'steps', caption: 'The Shopify details we check before a client store goes live.', after: 2, steps: [
        { title: 'Checkout', body: 'Test orders go through end to end' },
        { title: 'Taxes', body: 'Sales tax settings match the client’s setup' },
        { title: 'Shipping rates', body: 'Rates and zones match what actually ships' },
        { title: 'Emails', body: 'Order and shipping notifications read right' },
        { title: 'Analytics', body: 'Purchases recorded correctly' },
      ] },
    ],
    guide: [
      {
        heading: 'What white label web development is',
        paragraphs: [
          'White label web development means your agency sells and manages a website project while an outside development team builds it under your name. You own the client relationship, the design direction and the invoice. The developers stay invisible: no logos in the code, no credits in the footer and no direct contact with your client.',
          'Agencies use it in different ways. Some outsource web development completely and keep only strategy, design and account management in-house. Others keep a small team and use white label developers for overflow, specialist platforms or tight deadlines.',
          'Either way, white label web development only works if the build quality matches what your agency promised. Your client judges you on the finished site, so the team behind it has to follow your standards, your design files and your deadlines, not its own.',
        ],
      },
      {
        heading: 'When to outsource web development',
        paragraphs: [
          'The usual signal is that sales are ahead of delivery. If projects are queuing, launch dates are slipping or your designers are writing code, it may be time to outsource web development rather than stretch the team further.',
          'It also makes sense for platforms you do not use often. An agency that builds mostly on WordPress may win a Shopify project, or the reverse. Hiring for one project is expensive, and learning on a client’s budget is risky.',
        ],
        bullets: [
          'Your pipeline is larger than your development capacity',
          'A client needs a platform your team does not know well',
          'Freelancers are unreliable at launch time',
          'You want to grow revenue without adding fixed salaries',
        ],
      },
      {
        heading: 'White label Shopify development',
        paragraphs: [
          'Shopify projects need more than a theme install. Good white label Shopify development covers Online Store 2.0 sections your client can edit, product and collection templates, app choices that do not slow the store, and clean migrations with redirects from WooCommerce, BigCommerce or Magento. For larger clients we also work on Shopify Plus, including checkout extensibility and automation.',
          'We build in a development store or a duplicate theme, share preview links and only publish after your approval. Before launch we check checkout, taxes, shipping rates, email notifications and analytics, because those are the details US store owners notice first when something goes wrong.',
        ],
      },
      {
        heading: 'White label WordPress development',
        paragraphs: [
          'WordPress is still the default for many agency clients, but it is easy to build badly. White label WordPress development from us means custom themes or block themes, reusable blocks your clients can use safely, a short plugin list and sensible hosting choices. WooCommerce stores get the same care for product data, checkout and speed.',
          'We also set up staging, backups and update routines from the start, so the site is easy to maintain after launch and your team is not stuck with surprise plugin conflicts months later.',
          'We avoid stacking page builders on top of each other, because that is what makes sites slow and fragile. Every build ships with a short editing guide your client can follow, branded as yours.',
        ],
      },
      {
        heading: 'Working across the time difference',
        paragraphs: [
          'We are a Chennai, India team with no US office. India Standard Time is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your Eastern morning, our evening, for calls and reviews.',
          'Most of the build happens while you sleep. You leave feedback at the end of your day, and the next morning you find updates on staging, a short progress note and any questions grouped together. For launch days, we agree a plan in advance so someone is online at the critical moment. We do not offer general US-hours support.',
        ],
      },
      {
        heading: 'Confidentiality, code ownership and quality',
        paragraphs: [
          'We sign a mutual NDA before seeing any project files. Code goes into your Git repository, staging runs on your servers or accounts, and all credentials stay with you. If you ever stop working with us, nothing is held back.',
          'Every white label website development project goes through QA before you see it: cross-browser and device checks, form and checkout tests, Core Web Vitals and basic accessibility. We would rather catch a problem than have your client find it.',
        ],
      },
      {
        heading: 'How to choose a white label web development team',
        paragraphs: [
          'Before you hand over a client project, test any provider with a small, real task and ask a few questions in writing. Pricing for white label web development is quoted per project in USD after a free scoping call, because a five-page WordPress site and a Shopify Plus migration are very different jobs. Retainers for ongoing support and small changes are quoted the same way.',
        ],
        bullets: [
          'Can I see code from a past project, not just screenshots?',
          'Will code live in my repository from day one?',
          'Who is my contact, and when do our hours overlap?',
          'How do you handle launch days and post-launch bugs?',
          'Are the NDA and no-client-contact terms in writing?',
        ],
      },
    ],
    related: [
      { label: 'White label WordPress development for agencies', href: '/us/white-label-wordpress-development/' },
      { label: 'White label SEO services for US agencies', href: '/us/white-label-seo/' },
      { label: 'Hire a Shopify developer', href: '/us/hire-shopify-developer/' },
      { label: 'Shopify Plus agency for US brands', href: '/us/shopify-plus-agency/' },
      { label: 'WordPress website development', href: '/wordpress-website-development/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'What is white label web development?', a: 'White label web development is website design and build work done by an outside team and sold by an agency under its own brand. The agency manages the client and the project, while the development team builds the site invisibly, with no credits, branding or client contact.' },
      { q: 'How much does white label web development cost?', a: 'We quote every project in USD after a free scoping call, because builds vary widely. A small WordPress site, a custom Shopify theme and a Shopify Plus migration need very different effort. The written quote lists pages, features, revisions and timelines so you can price your resale.' },
      { q: 'Do you offer white label Shopify development?', a: 'Yes. We build custom Shopify themes and Online Store 2.0 sections, customize existing themes, set up apps and migrate stores from WooCommerce, BigCommerce or Magento with redirects. We also work on Shopify Plus, including checkout extensibility, for larger agency clients.' },
      { q: 'Do you offer white label WordPress development?', a: 'Yes. We build custom and block-based WordPress themes, reusable blocks, WooCommerce stores and editor-friendly sites. We keep plugin lists short and avoid stacking page builders, so sites stay fast and your clients can update content without breaking layouts.' },
      { q: 'Will my clients know you built their website?', a: 'No. We sign a mutual NDA, remove any references to us from code and footers, and never contact your clients. Communication runs through you. If you want us on a technical call, we join as part of your team, under your agency’s name.' },
      { q: 'How do you handle the time difference with US agencies?', a: 'India is 9.5 to 10.5 hours ahead of US Eastern. We overlap briefly in your morning for calls, and most building happens overnight, so you wake up to staging updates. Launch days are planned in advance. We do not offer general US-hours support.' },
      { q: 'Who owns the code and accounts?', a: 'You do. Code goes into your Git repository, staging and production run on your accounts or your client’s, and all credentials stay with you. If you stop working with us, you have everything you need to continue with another team.' },
    ],
  },
];
