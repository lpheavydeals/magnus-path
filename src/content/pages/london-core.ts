import type { ServicePageData } from '../../data/types';

const UK = { label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' };
const LONDON = { label: 'London', href: '/london/ecommerce-agency/' };
const londonAreas = ['Stratford', 'Walthamstow', 'Woodford', 'Ilford', 'Canary Wharf', 'Shoreditch', 'Islington', 'the City', 'Camden', 'Hackney'];

export const londonCorePages: ServicePageData[] = [
  // ───────────────────────── 1. London hub ─────────────────────────
  {
    slug: 'london/ecommerce-agency',
    kind: 'hub',
    market: 'UK',
    title: 'Ecommerce Agency London for Online Brands | Magnus Path',
    description: 'Ecommerce agency in London with an East London office (E18): Shopify, WordPress, PPC, SEO, Amazon and white-label work. Meet us in person, quoted in GBP.',
    primaryKeyword: 'ecommerce agency in London',
    navLabel: 'London',
    breadcrumb: [UK],
    eyebrow: 'London office in E18 · Shopify · PPC · SEO · Amazon · White label',
    h1: 'Ecommerce Agency in London You Can *Meet Across the Table*',
    intro: 'Magnus Path is an ecommerce agency in London with an office in East London (E18), where you can meet the team by appointment. We build Shopify and WordPress sites, run PPC and Amazon accounts, and handle SEO and white-label work for agencies. Most delivery is done by our Chennai team, so requests sent before lunch are usually handled the same day.',
    icon: 'shopify',
    facts: ['London office in E18 · meet by appointment', 'Chennai team works into your evening', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'What London ecommerce brands tell us is *not working*',
      includes: 'What our ecommerce marketing agency in London covers',
      process: 'Working with us from London in *4 steps*',
      children: 'Our London ecommerce services',
      guide: 'Hiring an ecommerce agency in London: a buyer’s guide',
    },
    pains: [
      { title: 'Central London rates for routine work', body: 'Many London agencies charge senior day rates for theme fixes, feed updates and monthly reports. Smaller brands pay a lot for work that does not need a West End office.' },
      { title: 'Offshore teams you never meet', body: 'Cheaper remote suppliers can be good, but there is nobody to sit down with when a launch goes wrong or a plan needs a proper conversation.' },
      { title: 'Store, ads and SEO pulling apart', body: 'One supplier rebuilds the site, another runs Google Ads and a third does SEO. Redirects break, tracking drops and nobody owns the revenue number.' },
    ],
    includes: [
      { title: 'Shopify and WordPress builds', body: 'New stores, redesigns and fixes with VAT-inclusive prices, Klarna or Clearpay, clear delivery promises and pages written in British English.' },
      { title: 'Google and Meta PPC', body: 'Search, Shopping, Performance Max and Meta campaigns set by product margin, with cookie consent and purchase tracking checked before any spend.' },
      { title: 'Ecommerce SEO', body: 'Technical fixes, collection and product pages and local SEO for shops with a London showroom, reported against organic orders in GBP.' },
      { title: 'Amazon.co.uk management', body: 'Sponsored ads, listings, A+ content and Seller Central housekeeping, with Amazon sales shown next to your own store’s numbers.' },
      { title: 'Website care and maintenance', body: 'Updates tested on staging, backups, uptime checks and small changes each month, so the site stays fast and safe between projects.' },
      { title: 'White-label work for agencies', body: 'SEO and web development delivered under your agency’s name for London digital agencies that have sold more than they can staff.' },
    ],
    children: [
      { title: 'PPC Agency', href: '/london/ppc-agency/', body: 'Google Ads, Shopping and Meta campaigns for London online shops, built around margin and checked tracking.', icon: 'social' },
      { title: 'Ecommerce SEO Agency', href: '/london/ecommerce-seo-agency/', body: 'Category and product page SEO, plus local search for London shops with a showroom or shop front.', icon: 'seo' },
      { title: 'Shopify Agency', href: '/london/shopify-agency/', body: 'Shopify store builds, redesigns and conversion fixes, planned with you at our London office.', icon: 'shopify' },
      { title: 'WordPress Agency', href: '/london/wordpress-agency/', body: 'WordPress and WooCommerce sites, custom themes and blocks for London businesses and agencies.', icon: 'website' },
      { title: 'Website Development Company', href: '/london/website-development-company/', body: 'Business websites and custom builds for London firms, scoped and quoted in GBP.', icon: 'website' },
      { title: 'Website Maintenance', href: '/london/website-maintenance/', body: 'Monthly care plans: tested updates, backups, security checks and small content changes.', icon: 'website' },
      { title: 'Amazon Agency', href: '/london/amazon-agency/', body: 'Amazon.co.uk ads, listings and account management for London brands selling on Amazon.', icon: 'amazon' },
      { title: 'White Label SEO', href: '/london/white-label-seo/', body: 'SEO delivered under your brand for London digital agencies, from £275 a month per client site.', icon: 'seo' },
    ],
    process: [
      { title: 'Free audit', body: 'We review your store, ad accounts, Amazon account or search performance and write up what is costing you sales, in plain English.' },
      { title: 'Meet in London or on video', body: 'We walk you through the findings at our East London office by appointment, or on a video call if that suits you better.' },
      { title: 'Plan and GBP quote', body: 'A written scope with monthly tasks, owners and a quote in GBP. Ad spend stays in your own accounts and you keep every login.' },
      { title: 'Deliver and review', body: 'Our Chennai team does most of the day-to-day work, with monthly reports and review meetings in London or online.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'WordPress', 'WooCommerce', 'Amazon.co.uk', 'Google Ads', 'Meta Ads', 'Google Merchant Center', 'GA4', 'Google Search Console'],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'Our London office is in E18, East London. Clients can meet the team there by appointment, and it is an easy trip from Stratford, Walthamstow, Ilford and the Central line. Most delivery is done by our Chennai team.',
    },
    figures: [
      { type: 'mindmap', caption: 'The four parts of a London online shop we look after as one plan.', after: 0, center: 'London online shop', branches: [
        { label: 'Website', items: ['Shopify or WordPress build', 'Monthly care and updates'] },
        { label: 'Paid traffic', items: ['Google and Meta PPC', 'Amazon.co.uk ads'] },
        { label: 'Search', items: ['Category and product SEO', 'Local SEO for a showroom'] },
        { label: 'Agencies', items: ['White-label SEO', 'Overflow web builds'] },
      ] },
      { type: 'venn', caption: 'How our London office and Chennai team split the work for London clients.', after: 4, left: { title: 'East London office', body: 'planning, workshops and reviews by appointment' }, right: { title: 'Chennai delivery team', body: 'builds, campaigns and SEO, 4.5 to 5.5 hours ahead' }, overlap: 'Morning requests usually same day' },
    ],
    guide: [
      {
        heading: 'What an ecommerce agency in London should do for you',
        paragraphs: [
          'London has hundreds of agencies that will build a store or run ads. The useful question is not who has the smartest office, but who will actually do the work, how quickly they respond and whether they treat your store, ads and search as one business. An ecommerce agency in London should be able to explain, in plain words, where your next pound of revenue is most likely to come from.',
          'For most online brands that means a short list: a store that loads quickly and converts on mobile, paid campaigns built around product margin, search pages that match how shoppers describe your products, and reports that show orders and revenue rather than clicks. If a proposal is mostly about awareness and brand lift, ask how it ties to sales.',
        ],
      },
      {
        heading: 'Choosing an ecommerce marketing agency in London',
        paragraphs: [
          'Start with who does the work. Many larger agencies pitch with directors and then hand accounts to juniors. Smaller brands are better served by a team that is open about this from day one. Ours is simple: you meet us in London, and most delivery is done by our Chennai team, whose day overlaps your morning and early afternoon.',
          'Then look at fit. An ecommerce marketing agency in London that mostly serves restaurants, law firms or property developers may not know product feeds, collection pages or returns policies. Ask for the platforms they work on, how they report and what they would change first on your store.',
        ],
        bullets: [
          'Who will run my account each week, and can I meet them?',
          'Which platforms do you work on every day?',
          'Will I own every account, login, ad account and line of code?',
          'What does the monthly report show, and is revenue in GBP?',
        ],
      },
      {
        heading: 'London shoppers, delivery and peak season',
        paragraphs: [
          'London shoppers compare quickly. Many expect next-day delivery, clear returns and payment options such as Klarna and Clearpay, and they will notice if your product page says one thing and your confirmation email another. Prices should include VAT, delivery costs should show early, and copy should read as British, not imported.',
          'Peaks need planning. Black Friday, Christmas and Boxing Day all need landing pages, stock checks, ad budgets and email ready weeks ahead. We build that calendar with you in the autumn, not in the last week of November.',
          'A good ecommerce agency in London will also check the unglamorous details: whether delivery cut-off times are shown on product pages, whether returns are easy to find, and whether the checkout works properly with Apple Pay and Google Pay on a phone. These small fixes often lift conversion more than a new campaign.',
        ],
      },
      {
        heading: 'Paid ads, SEO and Amazon working together',
        paragraphs: [
          'Channels affect each other. Meta ads raise branded searches on Google, an Amazon.co.uk discount can lower conversion on your own store, and a site redesign can wipe out years of SEO if redirects are missed. Running these together, with one plan and one report, avoids the arguments between suppliers that waste most budgets.',
          'Google AI Overviews now answer many product questions directly and reduce clicks to organic results, so product and category pages also need short, quotable answers on sizing, materials, delivery and care.',
          'Tracking holds it all together. UK GDPR and the cookie rules mean tags should respect what shoppers agree to, so we set up a consent banner, Google Consent Mode and clean purchase events before scaling spend. We are not lawyers, so your privacy policy should be checked by a UK adviser.',
        ],
      },
      {
        heading: 'Working with our East London office',
        paragraphs: [
          'Our London office is in E18, close to Woodford and South Woodford, and an easy trip from Stratford, Walthamstow and Ilford. If you were searching for a digital marketing agency East London businesses can visit without crossing the city, it is a practical option. We meet clients there by appointment for planning sessions, workshops and quarterly reviews.',
          'Day-to-day delivery runs from Chennai. India Standard Time is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter, so work continues after you finish for the day. Requests sent before UK lunchtime are usually handled the same day.',
        ],
      },
      {
        heading: 'Costs, contracts and getting started',
        paragraphs: [
          'We do not publish fixed London prices for most services, because catalogue size, ad spend and the state of your site vary too much. After a free audit we quote in GBP, as a monthly retainer or a project price, with every task written down. The one exception is white-label SEO for agencies, which starts at £275 a month per client site.',
          'Whichever ecommerce agency in London you choose, keep accounts and data in your own name, ask for a written scope and agree how results will be measured before work begins. A good agency will welcome those questions.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
      { label: 'PPC agency in London for online shops', href: '/london/ppc-agency/' },
      { label: 'Ecommerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
      { label: 'Free ecommerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), and clients can meet the team there by appointment. Most delivery is done by our Chennai team, whose day overlaps your morning and early afternoon, so requests sent before UK lunchtime are usually handled the same day. Video calls are available whenever a visit is not needed.' },
      { q: 'What does an ecommerce marketing agency in London do?', a: 'It helps online brands sell more through their own store and marketplaces. That usually covers store builds and fixes, Google and Meta ads, ecommerce SEO, Amazon.co.uk management and email or conversion work, with one plan and reporting tied to orders and revenue rather than clicks or impressions.' },
      { q: 'Which ecommerce platforms do you work on?', a: 'Mainly Shopify, Shopify Plus, WordPress and WooCommerce, plus custom builds where a project needs one. For marketplaces we work on Amazon.co.uk Seller Central. For paid traffic we use Google Ads, Merchant Center and Meta Ads, with GA4 and Search Console for measurement.' },
      { q: 'How much does an ecommerce agency in London cost?', a: 'It depends on the services and the size of your store. We quote in GBP after a free audit, as a monthly retainer or a fixed project price, with every task written down. Ad spend is paid from your own accounts. White-label SEO for agencies starts at £275 a month per client site.' },
      { q: 'Can I meet the team in person?', a: 'Yes. You can book a meeting at our East London office for planning sessions, workshops or reviews. It is close to Woodford and an easy trip from Stratford, Walthamstow and Ilford. Many clients mix occasional visits with video calls and a shared chat channel for everyday questions.' },
      { q: 'Do you work with London agencies as well as brands?', a: 'Yes. London digital agencies use us for white-label SEO and overflow web development on Shopify and WordPress. We sign an NDA, work under your brand, send unbranded reports and never contact your clients. Brands work with us directly on their store, ads, SEO and Amazon account.' },
      { q: 'What hours does your team work in UK time?', a: 'India Standard Time is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter. Our working day overlaps your morning and early afternoon, and requests sent before UK lunchtime are usually handled the same day. We do not offer UK evening support, and we say so up front.' },
    ],
  },

  // ───────────────────────── 2. Ecommerce SEO agency London ─────────────────────────
  {
    slug: 'london/ecommerce-seo-agency',
    kind: 'location',
    market: 'UK',
    title: 'Ecommerce SEO Agency London for Online Shops | Magnus Path',
    description: 'Ecommerce SEO agency in London for online shops and showrooms: category pages, product schema, local map results and UK links. East London office, GBP quotes.',
    primaryKeyword: 'ecommerce SEO agency in London',
    navLabel: 'Ecommerce SEO Agency',
    breadcrumb: [UK, LONDON],
    eyebrow: 'London online shops · Showrooms · Category pages · Map results',
    h1: 'Ecommerce SEO Agency in London for Shops That *Sell Online and In Person*',
    intro: 'Magnus Path is an ecommerce SEO agency in London for online shops, including brands with a showroom or shop front. We fix technical problems, write collection and product pages that match how Londoners search, set up local map results and earn relevant UK links. Meet us at our East London office; most delivery is done by our Chennai team.',
    icon: 'seo',
    facts: ['London office in E18 · meet by appointment', 'Store SEO plus local SEO for showrooms', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'Why London online shops struggle in *Google*',
      includes: 'What our SEO services in London cover for ecommerce',
      process: 'How we work as your SEO company in London, in *4 steps*',
      guide: 'Ecommerce SEO in London: a guide for shops with and without a showroom',
    },
    pains: [
      { title: 'Two businesses, one website', body: 'Shops with a London showroom need to rank for products nationally and appear in map results locally. Most sites are set up for one and quietly lose the other.' },
      { title: 'Generic SEO retainers', body: 'Many London SEO retainers were designed for service firms. They deliver blog posts and local citations but never touch the collection pages that take orders.' },
      { title: 'London-sized competition', body: 'Big retailers, department stores and well-funded D2C brands all target London searches. Chasing the same broad terms rarely pays for a smaller shop.' },
    ],
    includes: [
      { title: 'Technical crawl and index clean-up', body: 'Duplicate filter URLs, canonical tags, redirects, speed and structured data checked across the catalogue and fixed in order of revenue impact.' },
      { title: 'Collection and product pages', body: 'British English titles, introductions, FAQs and product copy that answer sizing, materials, delivery and returns questions before shoppers ask.' },
      { title: 'Local SEO for showrooms', body: 'Google Business Profile, a proper store page with opening hours and directions, local reviews and product listings that can show alongside your map listing.' },
      { title: 'Merchant Center free listings', body: 'A clean product feed with accurate prices, GTINs and delivery costs, so products appear in Shopping and Images without ad spend.' },
      { title: 'UK links and digital PR', body: 'Gift guides, London and trade press, and relevant UK blogs. No link farms, private networks or bulk paid packages.' },
      { title: 'Revenue reporting', body: 'A monthly report showing organic orders and revenue in GBP by page type, plus showroom calls and direction requests from your map listing.' },
    ],
    process: [
      { title: 'Free SEO audit', body: 'We crawl your store, review Search Console and your map listing, and compare you with the shops ranking where you want to be.' },
      { title: 'Meet and agree the plan', body: 'A session at our East London office or on video to agree priorities, a written roadmap and a monthly quote in GBP.' },
      { title: 'Fix, write and promote', body: 'Technical fixes, collection and product copy, schema, feed clean-up and outreach, working in your store or with your developers.' },
      { title: 'Report and review', body: 'Monthly reports on organic revenue and local actions, with a review meeting in London or online to set the next priorities.' },
    ],
    platforms: ['Shopify', 'WooCommerce', 'Google Search Console', 'Google Merchant Center', 'Google Business Profile', 'GA4', 'Screaming Frog', 'Ahrefs', 'Semrush'],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'We meet London clients at our East London office (E18) by appointment and can visit showrooms across the city to plan local SEO. Most SEO delivery is done by our Chennai team, whose day overlaps your UK morning.',
    },
    figures: [
      { type: 'matrix', caption: 'Where a London shop should aim its SEO, depending on how it sells.', after: 0, cols: ['Sells online only', 'Has a London showroom'], rows: ['Broad product searches', 'Specific or local searches'], cells: [
        { title: 'Pick your battles', body: 'Big retailers dominate; target narrower collections' },
        { title: 'Brand and range', body: 'Collection pages that also mention the showroom' },
        { title: 'Niche collections', body: 'Style, material and size pages with real demand' },
        { title: 'Map results', body: 'Profile, store page and reviews near the showroom' },
      ] },
      { type: 'steps', caption: 'Setting up local search for a London showroom, in order.', after: 3, steps: [
        { title: 'Claim the profile', body: 'Right category, hours and photos' },
        { title: 'Build a store page', body: 'Address area, directions, stock highlights' },
        { title: 'Match the details', body: 'Same name and hours everywhere online' },
        { title: 'Ask for reviews', body: 'After visits and collections' },
        { title: 'Track results', body: 'Calls, directions and store visits' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce SEO agency in London should focus on',
        paragraphs: [
          'Most SEO advice is written for service businesses. Online shops are different. Revenue comes from collection and product pages, and the biggest problems are usually technical: filters that create thousands of duplicate URLs, thin category pages and supplier copy repeated across the web. An ecommerce SEO agency in London should spend the early months fixing those before writing a single blog post.',
          'The second difference is measurement. Rankings matter, but the number that pays the bills is organic revenue by page type. If a proposal never mentions orders or average order value, it is selling activity, not results.',
        ],
      },
      {
        heading: 'SEO agency London, SEO company London or ecommerce specialist?',
        paragraphs: [
          'Search for an SEO agency London firms recommend and you will find generalists, local SEO shops, large digital agencies and specialists. A general SEO company London businesses use for law firms or clinics can be excellent at map results and service pages, yet unfamiliar with product feeds, faceted navigation and Shopify’s duplicate collection URLs.',
          'If most of your revenue comes from online orders, look for SEO services London shops have actually used on a catalogue of your size. Ask to see how they would structure your collections, not only how they would build links. A good ecommerce SEO agency in London should be able to show you, on your own site, which templates are wasting crawl time and which collections are close to page one.',
        ],
        bullets: [
          'Have you worked on my platform, and on a catalogue my size?',
          'How do you decide which filter pages to index?',
          'Will you report organic revenue, not just rankings?',
          'Who does the work each month, and can I meet them?',
          'How will you handle redirects if we change platform or redesign?',
        ],
      },
      {
        heading: 'Category pages that match how Londoners search',
        paragraphs: [
          'Shoppers describe products in their own words: trainers, jumpers, wide-fit boots, vegan leather bags. Keyword research should start from Google.co.uk data and real search phrases, then map each group of searches to one collection or product page so pages stop competing with each other.',
          'A good collection page has a clear title, a short helpful introduction, sensible internal links and a few answered questions on fit, care and delivery. Product schema should match the page exactly, including VAT-inclusive prices in GBP, or rich results and free listings tend to disappear.',
          'Product pages need the same care. Rewrite supplier descriptions in your own words, add the details shoppers ask about in store, such as fit, weight, fabric and care, and keep out-of-stock pages live with a clear note and links to similar items rather than deleting them and losing their rankings.',
        ],
      },
      {
        heading: 'Local SEO for London shops with a showroom',
        paragraphs: [
          'If you have a showroom in Shoreditch, a studio in Walthamstow or a shop in Islington, you have a second search opportunity. Searches with local intent usually show a map with a handful of businesses above the normal results. Appearing there depends on relevance, distance and prominence.',
          'You cannot change your distance from the searcher, but you can improve the rest: the right category, accurate hours, real photos, steady reviews and a proper store page on your website. Product listings from your Merchant Center feed can also appear on your map listing, which helps shoppers check stock before they travel.',
        ],
      },
      {
        heading: 'Competing with big retailers on Google UK',
        paragraphs: [
          'You will not outrank Amazon.co.uk or a department store for broad terms, and you do not need to. Smaller shops win on specific searches where the big sites only have filtered pages: a style, a material, a size range or a niche brand. These searches have less volume but stronger buying intent.',
          'Google AI Overviews now answer many product questions directly and reduce clicks to organic results. Pages that state facts clearly, such as materials, dimensions and delivery times, are easier for those summaries to quote. Links from relevant UK sites still help, and the safest way to earn them is digital PR: gift guides, seasonal stories and genuine product round-ups.',
        ],
      },
      {
        heading: 'Working with us from London',
        paragraphs: [
          'As an ecommerce SEO agency in London with an office in E18, we meet clients by appointment for audits, planning sessions and reviews, and we can visit your showroom to photograph it and check how customers find you. Most delivery is done by our Chennai team. India is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter, so requests sent before UK lunchtime are usually handled the same day.',
          'We quote ecommerce SEO in GBP after a free audit, because catalogue size and competition vary widely. Large migrations or technical projects are quoted separately, so the monthly scope stays clear. If you also run Google Shopping or Performance Max, we can share search data with your PPC team so paid and organic stop bidding against each other for the same queries.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'Ecommerce SEO agency for UK online shops', href: '/uk/ecommerce-seo-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
      { label: 'PPC agency in London for online shops', href: '/london/ppc-agency/' },
      { label: 'White label SEO for London agencies', href: '/london/white-label-seo/' },
    ],
    faqs: [
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), and clients can meet the team there by appointment for audits, planning and reviews. Most SEO delivery is done by our Chennai team, whose working day overlaps your UK morning, so requests sent before lunchtime are usually handled the same day.' },
      { q: 'What does an ecommerce SEO agency in London do?', a: 'It helps online shops win more orders from Google. The work covers technical fixes, faceted navigation, collection and product page copy, product schema, Merchant Center free listings, UK links and, for shops with a showroom, local map results. Reporting should focus on organic orders and revenue, not rankings alone.' },
      { q: 'How is an ecommerce SEO agency different from a general SEO agency in London?', a: 'A general SEO agency in London often focuses on service pages, local citations and blog content. Ecommerce SEO puts most effort into collection and product pages, product feeds, structured data and duplicate URLs from filters, because those pages drive online revenue. Many shops need both skills.' },
      { q: 'How much do SEO services in London cost for an online shop?', a: 'Prices vary with catalogue size, platform and competition. We quote ecommerce SEO in GBP after a free audit, with every monthly task written down. Large technical projects or site migrations are quoted separately. Be cautious of very cheap packages that only add blog posts or bulk directory links.' },
      { q: 'Can you help a shop that also has a London showroom?', a: 'Yes. We set up the Google Business Profile, a store page with hours and directions, consistent business details and a review routine, alongside the online store SEO. Product listings from your Merchant Center feed can also show on your map listing, helping shoppers check stock before visiting.' },
      { q: 'How long does ecommerce SEO take to work?', a: 'Technical fixes and better collection pages often show movement within two to four months. Competitive categories and link building usually take six to twelve months. Local map results can improve faster once the profile and store page are in order. We report progress monthly so you can judge it on evidence.' },
      { q: 'How should a London Shopify shop choose an SEO company?', a: 'Choose one that has worked on Shopify catalogues before. It should know how to handle duplicate product URLs inside collections, app bloat, theme speed and Shopify Markets if you sell to Ireland or the EU. Ask for a sample audit before you sign and check who will do the work.' },
    ],
  },

  // ───────────────────────── 3. White label SEO London ─────────────────────────
  {
    slug: 'london/white-label-seo',
    kind: 'location',
    market: 'UK',
    title: 'White Label SEO London for Digital Agencies | Magnus Path',
    description: 'White label SEO in London for digital agencies: unbranded reports, NDAs, British English content and a team you can meet in E18. From £275 a month per site.',
    primaryKeyword: 'white label SEO in London',
    navLabel: 'White Label SEO',
    breadcrumb: [UK, LONDON],
    eyebrow: 'For London digital agencies · NDA · Unbranded reports · GBP',
    h1: 'White Label SEO in London, With a Team *You Can Meet*',
    intro: 'Magnus Path offers white label SEO in London for digital agencies that sell SEO but cannot staff it. You can meet us at our East London office, sign an NDA and agree a pilot, while our Chennai team delivers audits, on-page work, content, links and unbranded reports. Briefs sent before lunch are usually handled the same day.',
    icon: 'seo',
    facts: ['London office in E18 · meet by appointment', 'NDA, unbranded reports, no client contact', 'From £275 / month per client site'],
    headings: {
      pains: 'Why London agencies look for *SEO delivery help*',
      includes: 'What our white label SEO for London agencies includes',
      process: 'Starting white-label delivery in *4 steps*',
      guide: 'White label SEO in London: how agencies choose a delivery team',
    },
    pains: [
      { title: 'London salaries, uneven demand', body: 'Hiring a senior SEO in London is a large fixed cost, and retainers rarely arrive at a steady pace. One lost client can leave the hire underused.' },
      { title: 'Suppliers you cannot sit down with', body: 'Many white-label providers are an email address and a dashboard. When a key client wobbles, there is nobody to meet and talk the account through.' },
      { title: 'Work that shows the seams', body: 'US spelling, template audits and links from odd sites make clients ask questions. Your agency’s reputation carries the risk, not the supplier’s.' },
    ],
    includes: [
      { title: 'Technical SEO audits', body: 'Crawl, indexing, speed, structured data and redirects reviewed, with a prioritised fix list your client’s developers can follow.' },
      { title: 'On-page optimisation', body: 'Keyword maps, titles, headings and internal links across priority pages, logged page by page so you can show clients what changed.' },
      { title: 'British English content', body: 'Briefs, articles, service and category pages written for UK readers in each client’s tone, then edited by a second person.' },
      { title: 'Local SEO for London clients', body: 'Google Business Profile work, consistent citations and borough or area pages written properly, for trades, clinics, shops and studios.' },
      { title: 'Ecommerce SEO under your brand', body: 'Collection, product and feed work on Shopify and WooCommerce for agency clients who sell online.' },
      { title: 'Unbranded reports', body: 'Monthly reports in your template or under your logo, with a short summary you can paste straight into a client email.' },
    ],
    process: [
      { title: 'Meet in East London', body: 'A meeting at our E18 office or on video to learn how you sell, scope and report SEO, followed by a mutual NDA.' },
      { title: 'Pilot one client site', body: 'Two or three months on one site, so you can judge the audit, the work and our communication before moving more accounts.' },
      { title: 'Set up delivery', body: 'A Slack or Teams channel, a shared board, your report template and a delivery calendar for each client site.' },
      { title: 'Deliver and add sites', body: 'Monthly delivery and reports per site, with review meetings in London or online. Add sites as you sell them.' },
    ],
    platforms: ['Google Search Console', 'GA4', 'Google Business Profile', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Looker Studio', 'AgencyAnalytics', 'Shopify', 'WordPress'],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'We meet London agencies at our East London office (E18) by appointment, a short trip from Stratford and the Central line. Most SEO delivery is done by our Chennai team, whose day overlaps your UK morning.',
    },
    figures: [
      { type: 'venn', caption: 'Who does what when a London agency resells our SEO under its own brand.', after: 0, left: { title: 'Your agency', body: 'owns the client, the pitch, the price and the relationship' }, right: { title: 'Our delivery team', body: 'audits, on-page work, content, links and draft reports' }, overlap: 'One report under your logo' },
      { type: 'matrix', caption: 'Which client sites to hand over first, and which to keep in-house.', after: 3, cols: ['Repeatable work', 'Unusual or sensitive'], rows: ['Low-touch client', 'High-touch client'], cells: [
        { title: 'Hand over first', body: 'Local and small-shop SEO on a clear monthly scope' },
        { title: 'Scope carefully', body: 'Agree the brief in a meeting before work starts' },
        { title: 'Shared delivery', body: 'We do the work; you lead the client calls' },
        { title: 'Keep in-house', body: 'Or bring us in later, once the pilot has worked' },
      ] },
    ],
    guide: [
      {
        heading: 'How white label SEO in London works',
        paragraphs: [
          'White label SEO means your agency sells SEO under its own name while a delivery team does the work in the background. Your client signs with you, talks to you and receives reports with your logo. The delivery team stays out of sight.',
          'For a London web design, social or PR agency, it is a way to add SEO without building a department in one of the most expensive hiring markets in the country. For an SEO agency, it is extra capacity when retainers arrive faster than recruitment. White label SEO in London has one advantage over a purely remote supplier: you can meet the people behind it.',
        ],
      },
      {
        heading: 'Why meeting your supplier in person matters',
        paragraphs: [
          'Most white-label relationships fail on communication, not skill. A brief gets misread, a client’s tone is missed or a report says something your account manager would never say. Sitting down together at the start, with your processes, templates and client notes on the table, avoids most of that.',
          'Our London office is in E18, East London, and agencies can meet us there by appointment for onboarding, quarterly reviews or a working session on a difficult account. The rest of the time we work in your Slack or Teams channel and your project board.',
          'If you are comparing providers of white label SEO in London, ask each one where you would meet them and who would be in the room. A named account manager who knows your clients by name is worth more than a long feature list in a sales deck.',
        ],
      },
      {
        heading: 'Delivery from Chennai on UK time',
        paragraphs: [
          'Most delivery is done by our Chennai team. India Standard Time is 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter, so our working day overlaps your morning and early afternoon. Briefs and client feedback sent before UK lunchtime are usually handled the same day.',
          'That timing suits agency life. A question raised in a ten o’clock client meeting can often be answered, in your tone, before the client finishes for the day. We do not offer UK evening support, and we would rather say so up front than promise it.',
        ],
      },
      {
        heading: 'What London agency clients usually need',
        paragraphs: [
          'London agency client lists are mixed: restaurants in Shoreditch, clinics in Islington, estate agents in Walthamstow, professional firms in the City and online shops across the country. White label SEO for these clients usually splits into three kinds of work.',
          'Local clients need Google Business Profile work, consistent citations and area pages written for each part of London rather than copied with the name swapped. Service firms need technical fixes and pages that answer real buyer questions. Ecommerce clients need collection, product and feed work, which many white-label providers do not offer.',
          'We agree a written scope for each client site, so you know exactly what will be delivered each month and can explain it to the client. When a client needs more, such as a migration audit or an extra batch of content, we quote it separately in GBP so your retainer margins stay predictable.',
        ],
        bullets: [
          'Local SEO for trades, clinics, restaurants and studios',
          'Content and on-page work for professional firms',
          'Collection, product and feed SEO for online shops',
          'Technical audits before redesigns and migrations',
          'Redirect plans and checks for agency site launches',
        ],
      },
      {
        heading: 'Confidentiality, data and UK GDPR',
        paragraphs: [
          'Your clients should not know we are involved unless you choose to tell them. We sign a mutual NDA before seeing any client data, deliver everything under your brand and never contact your clients. Our agreement also says we will not approach or work directly with any of them.',
          'Where the work touches personal data, for example in analytics or form records, we can sign a data processing agreement and limit access to what the work needs. We are not lawyers, so your own adviser should confirm the right terms for sharing data with a team outside the UK.',
        ],
      },
      {
        heading: 'What white label SEO costs and how to vet a provider',
        paragraphs: [
          'Our white label SEO in London starts at £275 a month per client site. Larger sites, competitive markets and extra content or links are quoted per site in GBP after a short audit, because a local trades site and a large online catalogue need very different effort. You set your resale price, and the margin stays with your agency.',
          'Test any provider before you hand over a client. Ask for a pilot on one site, a sample report, a written list of how links are earned and a named account manager. Be wary of anyone promising rankings or fixed timelines. Good white-label work should survive a client asking hard questions, so check that every task in a report can be traced to a real change on the site.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'White label SEO for UK agencies', href: '/uk/white-label-seo/' },
      { label: 'Ecommerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
      { label: 'WordPress agency in London', href: '/london/wordpress-agency/' },
      { label: 'SEO outsourcing for UK businesses', href: '/uk/seo-outsourcing/' },
    ],
    faqs: [
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), and agencies can meet the team there by appointment for onboarding, reviews or working sessions. Most delivery is done by our Chennai team, whose day overlaps your UK morning, so briefs sent before lunchtime are usually handled the same day.' },
      { q: 'What is white label SEO?', a: 'White label SEO is SEO work done by a delivery team and sold by an agency under its own brand. The team handles audits, on-page changes, content, links and reports, while the agency owns the client relationship. Clients see only the agency’s name and reports, and never deal with the delivery team.' },
      { q: 'How much does white label SEO in London cost?', a: 'Our white label SEO starts at £275 a month per client site. Larger sites, competitive markets and extra content or links are quoted per site in GBP after a short audit. The scope is agreed in writing before work begins, and you set your own resale price to your client.' },
      { q: 'Will my clients know you are doing the work?', a: 'No. We sign a mutual NDA, deliver reports under your logo or in your template, and never contact your clients. If a client asks a technical question, we draft the answer in your tone, or join a call as part of your team only when you ask us to.' },
      { q: 'Can you handle SEO for ecommerce clients as well as local ones?', a: 'Yes. Alongside local SEO for trades, clinics and studios, we handle collection, product and feed work for agency clients on Shopify and WooCommerce. That includes technical fixes for duplicate filter URLs, product schema and Merchant Center free listings, all reported under your brand.' },
      { q: 'Can we start with a single client site?', a: 'Yes, and we recommend it. A pilot on one client site for two or three months lets you judge the audit, the monthly work and our communication before you move more accounts. If it works, new sites are added on the same workflow and pricing basis.' },
      { q: 'What link building do you use?', a: 'Outreach to real, relevant websites only. We do not use private blog networks, link farms or bulk paid packages. Every link is listed in the monthly report with its URL, so you can check it before your client sees the results and explain each one with confidence.' },
    ],
  },
];
