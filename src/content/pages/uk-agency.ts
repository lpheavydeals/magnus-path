import type { ServicePageData } from '../../data/types';

const UK_HUB: { label: string; href: string } = { label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' };

export const ukAgencyPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. UK white-label SEO
  {
    slug: 'uk/white-label-seo',
    kind: 'global',
    market: 'UK',
    twin: 'white-label-seo',
    title: 'White Label SEO UK for Digital Agencies | Magnus Path',
    description: 'White label SEO for UK digital agencies: unbranded reports, NDAs, British English content and same-day handling of morning briefs. From £275 a month per site.',
    primaryKeyword: 'white label SEO',
    navLabel: 'White Label SEO',
    breadcrumb: [UK_HUB],
    eyebrow: 'For UK digital agencies · Unbranded · NDA · Quoted in GBP',
    h1: 'White Label SEO for UK Agencies, *Done Under Your Name*',
    intro: 'Our white label SEO service is for UK digital agencies that sell SEO but do not have the hands to deliver it. A Chennai team handles audits, on-page work, British English content, link building and local SEO under your brand. We sign an NDA, never speak to your clients, and our day overlaps your morning, so briefs move the same day.',
    icon: 'seo',
    facts: ['NDA and unbranded reports', 'British English content', 'From £275 / month per site'],
    headings: {
      pains: 'What goes wrong when agencies deliver SEO alone',
      includes: 'What our white label SEO for agencies covers',
      process: 'Starting white-label delivery in *4 steps*',
      pricing: 'White label SEO pricing in GBP',
      guide: 'White label SEO for UK agencies: a practical guide to reselling SEO',
    },
    pains: [
      { title: 'Retainers sold, nobody to run them', body: 'Your team closes SEO retainers alongside web and paid social work, but there is no specialist to deliver them, and a senior UK hire is a big fixed cost before the first report.' },
      { title: 'Freelancers who go quiet', body: 'A single freelancer covers holidays, illness and busy months badly. When they disappear, your client still expects a report on the first of the month.' },
      { title: 'Work you would not put your name to', body: 'Cheap providers send copied audits, US spelling and links from sites you would never show a client. Your agency carries the blame, not them.' },
    ],
    includes: [
      { title: 'Technical SEO audits', body: 'Crawl, indexing, Core Web Vitals, structured data and redirects reviewed, with a prioritised fix list your client’s developer can follow.' },
      { title: 'On-page optimisation', body: 'Keyword maps, titles, meta descriptions, headings and internal links across priority pages, logged page by page so you can show the work.' },
      { title: 'British English content', body: 'Briefs, blog posts, service and category pages written for UK readers, edited by a second person and matched to each client’s tone.' },
      { title: 'UK local SEO', body: 'Google Business Profile optimisation, citations in UK directories, review request plans and town or service-area pages that are not copied templates.' },
      { title: 'Outreach link building', body: 'Editorial links from real, relevant websites. No private blog networks, link farms or bulk paid packages, and every link listed with its URL.' },
      { title: 'Unbranded reporting', body: 'Monthly reports under your logo or in your own Looker Studio or AgencyAnalytics template, with a short summary you can paste into a client email.' },
    ],
    pricing: {
      from: '£275',
      unit: '/ month per client site',
      note: 'White label SEO for UK agencies starts at £275 a month per client site. Larger sites, competitive markets and extra content or links are quoted per site in GBP. You set your own resale price.',
      items: ['Technical audit and prioritised fix list', 'Monthly on-page optimisation', 'British English content and ethical link building by scope', 'Local SEO for UK clients where relevant', 'Unbranded monthly report under your logo', 'NDA and no client contact'],
    },
    process: [
      { title: 'Intro call and NDA', body: 'A video call in your morning to learn how you sell and report SEO, then a mutual NDA and, where we handle personal data, a data processing agreement.' },
      { title: 'Pilot site', body: 'One client site for two or three months, so you can judge the audit, the work and our communication before moving more accounts.' },
      { title: 'Delivery set-up', body: 'A Slack or Teams channel, a shared project board, your report template and a monthly delivery calendar agreed for each site.' },
      { title: 'Deliver and scale', body: 'Monthly delivery and reports per site, with a review call. Add client sites as you sell them, on the same workflow and pricing basis.' },
    ],
    platforms: ['Google Search Console', 'GA4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Looker Studio', 'AgencyAnalytics', 'Google Business Profile', 'Slack', 'Microsoft Teams'],
    figures: [
      { type: 'matrix', caption: 'Which outsourced SEO model suits your agency’s client list.', after: 1, cols: ['SEO is a side offer', 'SEO is a core service'], rows: ['Similar local clients', 'Clients vary in size'], cells: [
        { title: 'Reseller package', body: 'Fixed packages passed on with a mark-up can be enough' },
        { title: 'White label', body: 'Repeatable local SEO delivered under your brand' },
        { title: 'Freelancer', body: 'One person can cover a few varied sites' },
        { title: 'White label agency', body: 'A team in your tools, scoped per client site' },
      ] },
      { type: 'mindmap', caption: 'What UK local SEO covers for agency clients such as trades and clinics.', after: 3, center: 'UK local SEO', branches: [
        { label: 'Google profile', items: ['Categories and services', 'Review request plan'] },
        { label: 'Citations', items: ['UK directories', 'Consistent business details'] },
        { label: 'Location pages', items: ['One page per town', 'Written, not name-swapped'] },
        { label: 'Reporting', items: ['Map visibility', 'Calls and direction requests'] },
      ] },
    ],
    guide: [
      {
        heading: 'How white label SEO works for a UK agency',
        paragraphs: [
          'White label SEO means your agency sells SEO under its own name while a delivery team does the work behind the scenes. Your client signs with you, speaks to you and receives reports with your logo. The delivery team stays invisible.',
          'For a UK web design, paid social or PR agency, it is a way to offer SEO without building a department. For an SEO agency, it is extra capacity for the months when new retainers arrive faster than recruitment can keep up. Our white label SEO service for UK agencies is built for both, and it is quoted in GBP per client site so you can set your resale price before you pitch.',
          'The model also changes the conversation with clients. SEO tends to be a long relationship, so an agency that offers it alongside web and paid media keeps accounts for longer and does not have to send clients to a competitor for search work. The catch is accountability: if a delivery team cuts corners, your agency answers for it.',
        ],
      },
      {
        heading: 'White label SEO, SEO reseller or freelancer: which model fits',
        paragraphs: [
          'The terms overlap, but the models differ. An SEO reseller programme usually sells fixed packages that you pass on with a mark-up, often through the provider’s own dashboards. White label SEO for agencies is more flexible: scope is set per client site, work follows your processes and reports use your template. A freelancer can be excellent, but is one person with one set of holidays.',
          'If your clients are mostly small local businesses with similar needs, a reseller package may be enough. If they vary in size, sector and goals, or you want SEO to feel like part of your own service, a white label SEO agency that works inside your tools is usually the better fit.',
        ],
      },
      {
        heading: 'Same-day turnaround on UK time',
        paragraphs: [
          'We have a London office where you can meet us by appointment, but most delivery is done by our Chennai team. India Standard Time is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter, so our working day overlaps your morning and early afternoon. A brief, a new client site or client feedback sent before lunch is usually handled the same day, and calls are booked inside that overlap.',
          'For UK agencies using our white label SEO service, this matters more than it sounds. When a client raises a question in a ten o’clock meeting, you can often send them an answer, written in your tone, before they finish for the day. We do not offer UK evening support, and we would rather say so up front. Urgent issues reach a named account manager on your chat channel.',
        ],
      },
      {
        heading: 'British English content and UK local SEO',
        paragraphs: [
          'A UK client will notice US spelling in the first paragraph. All content is written in British English, with UK terms, units and references, and edited by a second person before you see it. Writers follow each client’s tone guide, so a solicitor’s blog does not read like an online shop’s product page.',
          'Many agency clients are local: trades, clinics, solicitors, estate agents and multi-site retailers. UK local SEO covers Google Business Profile categories and services, consistent citations across UK directories, review request plans and location pages written for each town rather than copied with the name swapped. Reports cover map visibility, calls and direction requests. For e-commerce clients, we also handle collection and product page optimisation on Shopify and WooCommerce.',
        ],
      },
      {
        heading: 'Confidentiality, client data and UK GDPR',
        paragraphs: [
          'Your clients should never know we are involved unless you choose to tell them. We sign a mutual NDA before seeing any client data, deliver everything under your brand and never contact your clients. Our agreement also states that we will not approach or work directly with any of them.',
          'SEO work sometimes touches personal data, for example in analytics or contact form records. Where it does, we can sign a data processing agreement and limit access to what the work needs. We are not lawyers, so your own adviser should confirm the right contract terms for sharing data with a team outside the UK.',
        ],
      },
      {
        heading: 'How to vet a white label SEO agency, and what it costs',
        paragraphs: [
          'Test any provider, including us, before you hand over a client. A serious white label SEO agency will answer these questions in writing and will not mind a pilot:',
          'Be wary of anyone promising rankings or fixed timelines. Our white label SEO for UK agencies starts at £275 a month per client site; larger sites and competitive markets are quoted per site after a short audit, because a local trades site and a large e-commerce catalogue need very different effort. You set your own resale price, and the margin stays with your agency.',
        ],
        bullets: [
          'Can you audit one of our client sites before we sign?',
          'How exactly are links built, and will every link be listed?',
          'Can reports be fully unbranded in our own template?',
          'Are the NDA and no-client-contact terms in writing?',
          'Who is our account manager, and when do our hours overlap?',
        ],
      },
    ],
    related: [
      { label: 'White label SEO for London agencies', href: '/london/white-label-seo/' },
      { label: 'Ecommerce marketing agency for UK brands and agencies', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'White label SEO services for global agencies', href: '/white-label-seo/' },
      { label: 'SEO outsourcing for UK businesses', href: '/uk/seo-outsourcing/' },
      { label: 'Ecommerce SEO agency for UK online shops', href: '/uk/ecommerce-seo-agency/' },
      { label: 'AI search optimisation agency for UK brands', href: '/uk/ai-search-optimisation-agency/' },
    ],
    faqs: [
      { q: 'What is white label SEO?', a: 'White label SEO is SEO work done by a delivery team and sold by an agency under its own brand. The team handles audits, on-page changes, content, links and reports, while the agency owns the client relationship. Clients see only the agency’s name, logo and reports, and never deal with the team directly.' },
      { q: 'How much does white label SEO cost for a UK agency?', a: 'White label SEO starts at £275 a month per client site. Larger sites and competitive markets are quoted after a short audit, because a local service business and a large online shop need very different amounts of work. The scope for each site is agreed in writing before work begins, and you set your own resale price to your client.' },
      { q: 'What is the difference between an SEO reseller and white label SEO?', a: 'An SEO reseller programme usually sells fixed packages you mark up, often through the provider’s own dashboards. White label SEO is scoped per client site, follows your processes and reports in your template. Both let you sell SEO without hiring, but white label work feels more like part of your own service.' },
      { q: 'Will my clients know you are doing the work?', a: 'No. We sign a mutual NDA, deliver reports under your logo or in your template, and never contact your clients. If a client asks a technical question, we draft the answer in your tone, or join a call as part of your team when you ask us to.' },
      { q: 'How does the time difference work with UK agencies?', a: 'India is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter. Our working day overlaps your morning and early afternoon, so briefs and feedback sent before lunch are usually handled the same day. Calls are booked inside that overlap. We do not offer UK evening support.' },
      { q: 'Do you write content in British English?', a: 'Yes. Every article, page and meta description is written in British English, with UK spelling, terms and units, then edited by a second person. Writers follow each client’s tone guide, so content reads as if your agency wrote it, whether the client is a solicitor, a clinic or an online shop.' },
      { q: 'What link building does your white label SEO agency use?', a: 'Outreach to real, relevant websites only. We do not use private blog networks, link farms or bulk paid packages. Every link is listed in the monthly report with its URL, so you can check it before your client sees the results and explain each one with confidence.' },
    ],
  },

  // ───────────────────────────────────────────── 2. UK SEO outsourcing
  {
    slug: 'uk/seo-outsourcing',
    kind: 'global',
    market: 'UK',
    twin: 'seo-outsourcing-india',
    title: 'SEO Outsourcing for UK Businesses & Agencies | Magnus Path',
    description: 'SEO outsourcing for UK businesses and agencies: an offshore SEO team in Chennai with a written monthly scope, task-level reports and GBP quotes after an audit.',
    primaryKeyword: 'SEO outsourcing',
    navLabel: 'SEO Outsourcing',
    breadcrumb: [UK_HUB],
    eyebrow: 'For UK businesses and agencies · Offshore SEO team · GBP quotes',
    h1: 'SEO Outsourcing for UK Teams That *Want to See the Work*',
    intro: 'SEO outsourcing works when you can see exactly what you are paying for. Magnus Path gives UK businesses and agencies an offshore SEO team in Chennai, India, with a named manager, a written monthly scope and reports that list every task and link. Our day overlaps your morning, and we quote in GBP after a free audit.',
    icon: 'seo',
    facts: ['Written monthly scope', 'Every task and link reported', 'From £400 / month'],
    headings: {
      pains: 'Why UK teams hesitate to outsource SEO',
      includes: 'What our offshore SEO team takes on',
      process: 'From audit to monthly delivery in *4 steps*',
      pricing: 'SEO outsourcing pricing in GBP',
      guide: 'Outsourced SEO for UK businesses and agencies: a buyer’s guide',
    },
    pains: [
      { title: 'A senior hire you cannot justify', body: 'You need technical SEO, content and links, but a senior in-house specialist is a big salary for a site that needs a few days of work a month.' },
      { title: 'Retainers with nothing to show', body: 'Reports full of rankings for easy keywords, with no list of pages changed or links built, leave you unsure what the fee actually bought.' },
      { title: 'Outsourcing that went wrong before', body: 'Many UK businesses have tried a cheap overseas provider once: copied content, US spelling, spammy links and emails nobody answered.' },
    ],
    includes: [
      { title: 'Technical SEO', body: 'Crawling, indexing, Core Web Vitals, redirects and structured data, with fix tickets your developer or web agency can act on directly.' },
      { title: 'Keyword research for UK search', body: 'Research built on how UK customers actually search, mapped page by page, with a 90-day plan tied to enquiries or revenue.' },
      { title: 'On-page and British English content', body: 'Titles, headings and copy improved, plus new articles, service pages and category pages written in British English and edited before delivery.' },
      { title: 'Outreach link building', body: 'Editorial links from relevant, real websites, each listed with its URL. No private blog networks, link farms or paid packages.' },
      { title: 'Local and e-commerce SEO', body: 'Google Business Profile and location pages for local firms, plus product and collection work for Shopify and WooCommerce shops.' },
      { title: 'AI search visibility', body: 'Content and structured data shaped so Google AI Overviews, ChatGPT and Perplexity can understand and quote your pages.' },
    ],
    pricing: {
      from: '£400',
      unit: '/ month',
      note: 'Outsourced SEO for UK businesses starts at £400 a month. Larger shops, competitive markets and extra content or links are quoted in GBP after a free audit.',
      items: ['Technical SEO fixes and monitoring', 'On-page optimisation of priority pages', 'Content written in British English', 'Outreach links, every one reported', 'Task-level monthly report', 'Monthly review call in your morning'],
    },
    process: [
      { title: 'Free audit', body: 'We review your site, competitors and Search Console data, then walk you through the findings on a video call in your UK morning.' },
      { title: 'Written scope and GBP quote', body: 'Monthly tasks, realistic timelines and a price in GBP, all in writing. Nothing is padded with work your site does not need.' },
      { title: 'Onboarding', body: 'Access to Search Console, GA4 and your CMS under your own accounts, a shared project board and a named account manager.' },
      { title: 'Deliver, report, adjust', body: 'Work delivered against the plan, a monthly report listing every task, page and link, and a call to agree the next month’s priorities.' },
    ],
    platforms: ['Google Search Console', 'GA4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Looker Studio', 'WordPress', 'Shopify', 'WooCommerce'],
    figures: [
      { type: 'venn', caption: 'Keep strategy in-house and outsource the delivery.', after: 1, left: { title: 'Your in-house team', body: 'Strategy, approvals and deep knowledge of the business' }, right: { title: 'Outsourced SEO team', body: 'Technical fixes, content and links, done every week' }, overlap: 'Control without a senior salary' },
      { type: 'steps', caption: 'How to keep control of your accounts when you outsource search work.', after: 4, steps: [
        { title: 'Own the accounts', body: 'Search Console, GA4 and CMS in your name' },
        { title: 'Grant access', body: 'Add the provider as a user, not owner' },
        { title: 'Limit data', body: 'Sign a DPA; share only what is needed' },
        { title: 'Leave cleanly', body: 'Remove access; the content stays yours' },
      ] },
    ],
    guide: [
      {
        heading: 'What SEO outsourcing means for a UK business',
        paragraphs: [
          'SEO outsourcing means handing some or all of your search work to a team outside your company. For a UK business, that might be the whole programme: technical fixes, content, links and reporting. It might be one piece your in-house marketer cannot cover, such as technical audits or link outreach. For an agency, it usually means delivery capacity behind your own brand.',
          'Whatever the arrangement, SEO outsourcing works when the scope is written down, the work is visible and one person is clearly accountable. It fails when you hand over a login and hope for the best.',
        ],
      },
      {
        heading: 'In-house hire, UK freelancer or offshore SEO team',
        paragraphs: [
          'Each option has a place. An in-house specialist sits in your meetings every day and learns the business deeply, but a senior hire is a large fixed cost, and one person rarely covers technical SEO, writing and outreach equally well. A UK freelancer is flexible and local, but capacity is limited and holidays stop the work.',
          'An offshore SEO team gives you several specialists for the cost of a modest retainer, and the work continues when one person is away. The trade-off is that the people doing the daily work are not down the corridor, so process has to carry the relationship. We have a London office for meetings, but our delivery runs from Chennai. Many UK businesses keep strategy and approvals in-house and use outsourced SEO for delivery, which gives them control without the salary.',
        ],
      },
      {
        heading: 'What you can outsource to us',
        paragraphs: [
          'You can outsource SEO from the UK as a complete programme or in parts. Many clients start with a technical audit and on-page work, then add content and links once they trust the process. Others hand us one stubborn problem first, such as a migration that lost traffic. Common arrangements include:',
        ],
        bullets: [
          'Complete SEO for a company website or online shop',
          'Technical audits with fix tickets for your developers or web agency',
          'Monthly content: briefs, articles, service and category pages',
          'Local SEO for single-site and multi-site UK businesses',
          'Shopify and WooCommerce SEO for e-commerce brands',
          'Delivery behind your brand for agencies reselling SEO',
        ],
      },
      {
        heading: 'How our working day lines up with the UK',
        paragraphs: [
          'We have a London office where you can meet us by appointment, but most delivery is done by our Chennai team. India Standard Time is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter, so our working day overlaps your morning and early afternoon. Requests sent before UK lunchtime are usually handled the same day, and calls are booked in that window.',
          'Day-to-day work runs through Slack, Teams or email, plus a shared project board showing what is planned, in progress and done. You should never need to chase us for a status update. If you do, the process is not working and we want to hear about it.',
        ],
      },
      {
        heading: 'Keeping control: accounts, data and UK GDPR',
        paragraphs: [
          'Before you outsource SEO to anyone, check who owns what. Search Console, GA4, your CMS and any new tools should be set up in your company’s name, with access granted to the provider rather than held by them. Content we write is yours. If you stop working with us, nothing needs to be rebuilt or handed back.',
          'SEO work can touch personal data, for example in analytics or form submissions. We keep access to what the work needs and can sign a data processing agreement. We are not lawyers, so your own adviser should confirm the right terms for sharing data with a team outside the UK.',
        ],
      },
      {
        heading: 'Red flags when choosing an SEO outsourcing provider',
        paragraphs: [
          'Be wary of anyone promising page one in 30 days, top rankings by a set date or a fixed number of links for a very low fee. Google decides rankings, so no provider controls them. Very cheap SEO outsourcing usually cuts corners on content and links, the two areas that carry the most risk to your site.',
          'Watch the reports as well. A useful report shows organic traffic, enquiries or revenue, and the list of work done, not just rankings for easy terms. Ask these questions before you sign:',
        ],
        bullets: [
          'Can you audit my site before I commit?',
          'How are links built, and will you list every one?',
          'Who is my contact, and when do our hours overlap?',
          'What is delivered each month, in writing?',
          'What is the notice period, and is there any lock-in?',
        ],
      },
      {
        heading: 'What SEO outsourcing costs for UK clients',
        paragraphs: [
          'SEO outsourcing starts at £400 a month, with the exact scope set after a free audit, because a 20-page service site and a 5,000-product shop need very different effort. The quote is a defined monthly scope, not a vague package: technical fixes, on-page work, content and outreach links, with a task-level report and a monthly call. Agencies reselling SEO under their own brand should look at our white label service instead.',
          'Compare quotes by what is delivered, not only the monthly figure: how many pages are optimised, how much content is written and edited, how links are built and who reviews the work before it goes live. A cheap retainer with nothing written down tends to cost more later, when someone has to undo the damage.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce marketing agency for UK brands and agencies', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Outsource SEO to India: the global guide', href: '/seo-outsourcing-india/' },
      { label: 'White label SEO for UK agencies', href: '/uk/white-label-seo/' },
      { label: 'Ecommerce SEO agency for UK online shops', href: '/uk/ecommerce-seo-agency/' },
      { label: 'AI search optimisation agency for UK brands', href: '/uk/ai-search-optimisation-agency/' },
    ],
    faqs: [
      { q: 'Is SEO outsourcing a good idea for a UK business?', a: 'It is when you need specialist skills without a senior salary, and you choose a provider that shows its work. Ask for a written monthly scope, a sample audit of your own site and a full list of links built. The risks come from vague reports and hidden link schemes, not from location.' },
      { q: 'How much does it cost to outsource SEO from the UK?', a: 'Outsourced SEO starts at £400 a month. After a free audit of your site and competitors we confirm a defined monthly scope of technical, on-page, content and link work in GBP, so you know what each month includes. Larger shops and competitive markets cost more.' },
      { q: 'Should I hire an in-house SEO or use outsourced SEO?', a: 'Hire in-house if you need someone in meetings daily and can carry a senior salary. Choose outsourced SEO if you need technical, content and link skills without that fixed cost. Many UK businesses keep strategy and approvals in-house and outsource delivery to a team whose work they can check every month.' },
      { q: 'What does an offshore SEO team do each month?', a: 'It depends on the scope we agree, but a typical month includes technical fixes, on-page changes to priority pages, new content, outreach for links and a report listing every task, page and link. The shared project board shows what is planned, in progress and done at any time.' },
      { q: 'How do your hours work with UK time?', a: 'India is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter. Our working day overlaps your morning and early afternoon, so requests sent before lunch are usually handled the same day. Calls are booked inside that overlap, and day-to-day work runs through Slack, Teams or email.' },
      { q: 'Who owns the accounts and content if we stop?', a: 'You do. Search Console, GA4, your CMS and any new tools are set up in your company’s name, with access granted to us. All content we write belongs to you. If you end the arrangement, you remove our access and keep everything, with nothing to rebuild.' },
      { q: 'Do you work with UK agencies too?', a: 'Yes. Agencies can outsource SEO delivery to us under their own brand. We sign an NDA, report in your template and never contact your clients. That arrangement is covered on our white label SEO page, scoped per client site and quoted in GBP after a short audit.' },
      { q: 'How long before outsourced SEO shows results?', a: 'Technical fixes can show an effect within weeks, but most sites see steady organic growth over several months. Timing depends on competition, site history and how much content and link work is in scope. We share realistic expectations before you sign, and we do not promise rankings.' },
    ],
  },
];
