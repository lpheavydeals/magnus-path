import type { ServicePageData } from '../../data/types';

// Business websites pillar (part 2): maintenance + Chennai location page.
export const businessWebsitePages2: ServicePageData[] = [
  {
    slug: 'website-maintenance-services',
    kind: 'service',
    title: 'Website Maintenance Services in India | Billion Ecommerce Agency',
    description: 'Website maintenance services with monthly plans: updates, backups, uptime checks, security scans and content changes for WordPress, Shopify and business sites.',
    primaryKeyword: 'website maintenance services',
    navLabel: 'Website Maintenance Services',
    breadcrumb: [{ label: 'Websites', href: '/ecommerce-website-development/' }],
    eyebrow: 'Website maintenance · Monthly support plans',
    h1: 'Website Maintenance Services That *Keep Your Site Working*',
    intro: 'Billion Ecommerce Agency offers website maintenance services for business websites, WordPress sites and Shopify stores. Each month we update software, take backups, watch uptime, scan for malware, check speed, renew SSL and domains on time and make your content changes, then send a short report on what we did and what needs attention.',
    icon: 'seo',
    facts: ['Free site health check first', 'Monthly report in plain English', 'Reply within one working day'],
    headings: {
      pains: 'Websites rarely fail all at once. They wear down quietly.',
      includes: 'What our website maintenance plans cover',
      process: 'How monthly website support works in *4 steps*',
      guide: 'Website maintenance services: a practical guide for business owners',
    },
    pains: [
      { title: 'Nobody owns the website any more', body: 'The developer who built it has moved on, the login sits in an old email inbox and nobody on your team knows which plugins are safe to update.' },
      { title: 'Problems found by customers, not by you', body: 'A contact form that stopped sending enquiries, an expired SSL warning or a page that shows an error is usually reported by a frustrated visitor, weeks late.' },
      { title: 'Small changes take weeks', body: 'Updating a price, adding a new branch address or swapping a banner turns into a chase for quotes, so the site slowly falls out of date.' },
    ],
    includes: [
      { title: 'Core, theme and plugin updates', body: 'We apply WordPress, theme, plugin and app updates after checking them on a backup or staging copy, so an update does not take your site down.' },
      { title: 'Backups you can restore', body: 'Scheduled backups of files and database stored off the server, with a test restore at regular intervals so we know the backup actually works.' },
      { title: 'Uptime and security monitoring', body: 'Round-the-clock uptime checks, malware and vulnerability scans, login protection and alerts when something unusual happens on the site.' },
      { title: 'Speed and broken-link checks', body: 'Monthly page speed tests on mobile, image and cache tuning, and a crawl for broken links, missing pages and redirect errors.' },
      { title: 'Content changes each month', body: 'Text, image, price, team and banner updates handled by us within your plan hours, so the site always reflects the business as it is today.' },
      { title: 'Renewals, form tests and reporting', body: 'We track SSL, domain and hosting renewal dates, test contact and lead forms, and send a monthly report with work done and issues found.' },
    ],
    platforms: ['WordPress', 'WooCommerce', 'Shopify', 'Cloudflare', 'Google Search Console', 'Google Analytics 4', 'UptimeRobot'],
    process: [
      { title: 'Site health audit', body: 'We take stock of your hosting, domain, plugins, backups, forms and speed, collect logins safely and list anything that needs fixing first.' },
      { title: 'Fix and stabilise', body: 'We clear urgent issues such as outdated plugins, missing backups, broken forms or SSL errors before routine maintenance begins.' },
      { title: 'Monthly maintenance', body: 'Updates, backups, monitoring, scans and content changes run on a fixed schedule. You send requests by email or WhatsApp and we reply within one working day.' },
      { title: 'Report and review', body: 'Each month you get a short report on updates, uptime, speed, security and changes made, with recommendations for the next month.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'What a complete website maintenance plan covers each month.', center: 'Website maintenance', after: 0, branches: [
        { label: 'Updates', items: ['Core, theme and plugins', 'Tested before going live'] },
        { label: 'Safety', items: ['Off-site backups', 'Malware scans', 'SSL and domain renewals'] },
        { label: 'Health', items: ['Uptime monitoring', 'Mobile speed checks', 'Broken links and form tests'] },
        { label: 'Content', items: ['Text, images and prices', 'New pages', 'Monthly report'] },
      ] },
      { type: 'matrix', caption: 'When maintenance is enough, and when a site needs a rebuild instead.', after: 6, cols: ['Still fits business', 'No longer fits'], rows: ['Updates are safe', 'Abandoned theme or unsafe'], cells: [
        { title: 'Maintain', body: 'A monthly plan keeps it healthy' },
        { title: 'Plan a rebuild', body: 'It works, but no longer matches what you sell' },
        { title: 'Stabilise first', body: 'Fix what you have now, then plan ahead' },
        { title: 'Rebuild', body: 'Maintenance cannot fix this foundation' },
      ] },
    ],
    guide: [
      {
        heading: 'What website maintenance services include',
        paragraphs: [
          'A website is software, and software needs looking after. Website maintenance services cover the routine work that keeps a site secure, fast, accurate and online after the launch party is over. Done well, it is invisible: nothing breaks, enquiries keep arriving and the site reflects the business as it is today.',
          'A complete maintenance plan from a website maintenance company should cover at least the following:',
        ],
        bullets: [
          'Updates to the CMS core, theme, plugins or apps, tested before they go live',
          'Regular off-site backups, with occasional test restores',
          'Uptime monitoring with alerts when the site goes down',
          'Malware and vulnerability scans, plus login protection',
          'Monthly speed checks on mobile and fixes for slow pages',
          'Content changes such as text, images, prices and new pages',
          'SSL certificate, domain and hosting renewal tracking',
          'Broken link and error checks, and contact or lead form tests',
          'A monthly report explaining what was done and what is coming up',
        ],
      },
      {
        heading: 'Why websites break when nobody looks after them',
        paragraphs: [
          'Most sites do not fail because of a dramatic hack. They fail slowly. Plugins fall behind and stop working with a newer PHP version on the server. A payment or form plugin changes how it works after an update. A hosting plan quietly runs out of storage because of old backups. An SSL certificate or domain expires because the renewal reminder went to someone who has left.',
          'Third-party services change too. Google retires old analytics code, email providers tighten rules on how forms send mail, and Shopify apps update their scripts. Each change is small, but together they turn a working website into one that leaks enquiries without anyone noticing.',
        ],
      },
      {
        heading: 'The real cost of skipping maintenance',
        paragraphs: [
          'Skipping maintenance feels like saving money until something goes wrong. A hacked WordPress site can be blacklisted by browsers and flagged in Google results, and cleaning it up costs far more than a year of a basic plan. An expired domain can be bought by someone else. A broken enquiry form can lose weeks of leads before a customer phones to complain.',
          'There is also a slower cost. Outdated content, old offers and dead links make a business look inactive, and a site that gets slower every month loses visitors on mobile. Regular website support services catch these problems while they are still small and cheap to fix. Seen this way, website maintenance services are closer to insurance than to an optional extra.',
        ],
      },
      {
        heading: 'Website maintenance packages in India: our three plans',
        paragraphs: [
          'Website maintenance packages in India vary a lot, so compare them by what is actually included rather than the monthly fee alone. Our three plans are built around the type of site you run.',
          'All three plans include a monthly report and a reply to your requests within one working day. We recommend a plan after a free health check of your site, and the written quote lists what is covered, the hours included and what is billed separately. We do not promise 100% uptime, because no hosting provider can, but monitoring means we hear about downtime quickly and start working on it.',
        ],
        bullets: [
          'Basic: for small business and brochure websites. Monthly updates, weekly backups, uptime monitoring, monthly security scan, SSL and domain renewal tracking, form tests and up to 2 hours of content changes.',
          'Business: for lead-generating and frequently updated sites. Everything in Basic, plus updates checked weekly, daily backups, monthly speed tuning, broken-link fixes, Search Console monitoring and up to 6 hours of content changes or small improvements.',
          'Store: for Shopify and WooCommerce stores. Everything in Business, plus checkout and payment tests, app and plugin reviews, product and banner updates for sales, stock and order-email checks and up to 12 hours of changes.',
        ],
      },
      {
        heading: 'WordPress maintenance services vs Shopify store maintenance',
        paragraphs: [
          'WordPress maintenance services involve the most hands-on work. You are responsible for the server, the core software and every plugin, so updates, backups and security hardening matter a great deal. WooCommerce stores add order data and payment plugins to that list, which makes tested updates and daily backups important.',
          'Shopify store maintenance is different. Shopify handles hosting, security and core updates, so the work shifts to the store itself: keeping apps lean, checking that theme updates do not break customisations, testing checkout and COD rules, updating collections and banners for each sale, and watching page speed as new apps are added.',
        ],
      },
      {
        heading: 'How to choose a website maintenance company',
        paragraphs: [
          'Ask any website maintenance company the same handful of questions before you sign. The answers tell you whether they will protect your site or simply bill for it.',
        ],
        bullets: [
          'Where are backups stored, and when did you last test a restore?',
          'Do you test updates before applying them to the live site?',
          'Who owns the domain, hosting and admin logins? (It should be you.)',
          'How many hours of content changes are included, and what happens to unused hours?',
          'How do I raise a request, and how quickly will you reply?',
          'What does the monthly report contain?',
        ],
      },
      {
        heading: 'When maintenance is not enough',
        paragraphs: [
          'Maintenance keeps a working site healthy. It cannot fix a site that is built on an abandoned theme, cannot be updated safely or no longer matches what the business sells. If our first audit shows that, we will tell you plainly and give you the choice: stabilise what you have for now, or plan a rebuild. Either way, ongoing website maintenance services are most useful when paired with SEO, so the site that stays online also keeps getting found.',
        ],
      },
    ],
    related: [
      { label: 'Product page checklist', href: '/resources/product-page-checklist/' },
      { label: 'Free ecommerce website checker', href: '/tools/ecommerce-website-checker/' },
      { label: 'WordPress support for UK businesses', href: '/uk/wordpress-support/' },
      { label: 'Website maintenance services for US businesses', href: '/us/website-maintenance-services/' },
      { label: 'WordPress website development', href: '/wordpress-website-development/' },
      { label: 'Corporate website development', href: '/corporate-website-development/' },
      { label: 'Shopify development company', href: '/shopify-development/' },
      { label: 'Website development company in Chennai', href: '/chennai/website-development-company/' },
      { label: 'Free website and store audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'What do website maintenance services include?', a: 'Website maintenance services usually include software and plugin updates, regular backups, uptime monitoring, security scans, speed checks, content changes, SSL and domain renewal tracking, broken-link checks and form testing. Our plans add a monthly report that explains what was done, what was found and what we recommend next.' },
      { q: 'How much do website maintenance packages cost in India?', a: 'Cost depends on the platform, how often the site changes, whether it takes payments, the number of plugins or apps and the content hours you need each month. We quote a monthly plan in writing after a free health check of your site. Hosting, domain and paid licence fees are billed separately at cost.' },
      { q: 'Do you offer WordPress maintenance services?', a: 'Yes. WordPress maintenance services are our most common request. We update the core, themes and plugins after testing them, keep off-site backups, harden logins, scan for malware and fix PHP or plugin conflicts. WooCommerce stores also get checkout tests and order-email checks on the Store plan.' },
      { q: 'Can you maintain a Shopify store?', a: 'Yes. Shopify store maintenance focuses on the store rather than the server: reviewing apps, protecting theme customisations during updates, testing checkout, payments and COD rules, updating banners and collections for sales and monitoring page speed. Our Store plan is built for this work.' },
      { q: 'How quickly do you respond to support requests?', a: 'We reply to every request within one working day and give you a clear timeline for the fix. Urgent problems such as a site that is down or showing a security warning are worked on first. Routine content changes are usually completed within a few working days.' },
      { q: 'Can you maintain a website that another agency built?', a: 'Yes. We start with a health audit of your hosting, domain, plugins, backups and forms, then fix anything urgent before monthly maintenance begins. If the site is built on abandoned or unsafe software, we explain the risks and the options, including a rebuild, before you commit.' },
      { q: 'Do you promise 100% uptime?', a: 'No. No honest provider can promise 100% uptime, because hosting servers, networks and third-party services all have occasional outages. What we do is monitor your site around the clock, receive alerts when it goes down, investigate the cause and work with your hosting provider to restore it quickly.' },
      { q: 'Is there a long-term contract for website support services?', a: 'Our website support services run month to month after an initial three-month period, which covers the audit and stabilisation work. You keep ownership of your domain, hosting and logins at all times, so you can move the site or stop the plan with a month’s notice.' },
    ],
  },
  {
    slug: 'chennai/website-development-company',
    kind: 'location',
    title: 'Website & Web Development Company in Chennai',
    description: 'Website and web development company in Chennai building business, corporate and WordPress sites. Fixed written quotes, Tamil and English content, in-person meetings.',
    primaryKeyword: 'website development company in chennai',
    navLabel: 'Website Development Company in Chennai',
    breadcrumb: [{ label: 'Websites', href: '/ecommerce-website-development/' }],
    eyebrow: 'Web design and development · Chennai',
    h1: 'Website Development Company in Chennai for *Growing Businesses*',
    intro: 'Billion Ecommerce Agency is a website development company in Chennai that designs and builds business websites, corporate sites, WordPress sites and landing pages for local firms. As a web development company in Chennai, we give manufacturers, clinics, schools, builders, consultants and retailers a site that explains what they do, brings in enquiries and is easy to keep up to date.',
    icon: 'website',
    facts: ['Fixed written quote', 'Tamil and English content', 'Meetings at your office'],
    headings: {
      pains: 'Why many Chennai business websites stop bringing in enquiries',
      includes: 'Web design and development services for Chennai businesses',
      process: 'How a website project with us runs, in *4 steps*',
      guide: 'Choosing a web design company in Chennai: a guide for business owners',
    },
    pains: [
      { title: 'A website built years ago and never touched', body: 'Old services, a former phone number and photos of a previous office tell visitors the business may not be active, so they call someone else.' },
      { title: 'Looks fine on a laptop, struggles on a phone', body: 'Most people check a business on their phone first. Tiny text, slow pages and no tap-to-call button send them straight back to Google.' },
      { title: 'Visitors arrive, enquiries do not', body: 'There is no clear next step, the form goes to an unchecked inbox and nobody can tell which pages or searches bring in leads.' },
    ],
    includes: [
      { title: 'Business and corporate websites', body: 'Five to ten page websites that cover your services, team, projects and contact details, plus larger corporate sites with investor, careers or dealer sections.' },
      { title: 'WordPress and CMS builds', body: 'Sites on WordPress or a headless CMS so your staff can edit pages, add news and upload brochures without calling a developer.' },
      { title: 'Landing pages for campaigns', body: 'Focused pages for admissions, property launches, clinic services or trade fairs, built to turn ad traffic into calls and form enquiries.' },
      { title: 'Tamil and English content', body: 'Page copy written for your buyers in English, Tamil or both, with a language switch where it helps local customers.' },
      { title: 'Google Business Profile and local SEO setup', body: 'Your Google Business Profile, map location, reviews link and local schema connected to the website so you show up in nearby searches.' },
      { title: 'Hosting, launch and maintenance', body: 'Domain, hosting, SSL and email setup, analytics and lead tracking at launch, then optional monthly maintenance so the site stays current.' },
    ],
    platforms: ['WordPress', 'Astro', 'Google Business Profile', 'Google Analytics 4', 'Google Search Console', 'WhatsApp Business'],
    local: {
      city: 'Chennai',
      areas: ['T. Nagar', 'Anna Nagar', 'Guindy', 'OMR', 'Velachery', 'Ambattur', 'Nungambakkam', 'Adyar', 'Porur', 'Tambaram'],
      note: 'We work from our Chennai office and meet clients at their premises across the city, from clinics in Anna Nagar and firms in Nungambakkam to factories in Ambattur, Guindy and the Sriperumbudur belt. Businesses elsewhere in Tamil Nadu and India work with us remotely, with visits when needed.',
    },
    process: [
      { title: 'Brief at your premises', body: 'We meet at your office, clinic, school or factory, understand who your buyers are and what they ask, and agree a sitemap with a fixed quote.' },
      { title: 'Content and design', body: 'We draft the page copy in English or Tamil, then design the home and key inner pages for mobile first. You review them with us in person or on a call.' },
      { title: 'Build and connect', body: 'We build the site, connect forms, WhatsApp, maps and your Google Business Profile, set up analytics and test on real phones.' },
      { title: 'Launch and look after', body: 'We go live, train your team to edit pages and hand over all logins. Monthly maintenance plans are available if you want us to keep it running.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'Chennai businesses need different pages depending on how their buyers decide.', center: 'Pages by industry', after: 1, branches: [
        { label: 'Manufacturers', items: ['Capability pages', 'Downloadable catalogues', 'RFQ form'] },
        { label: 'Clinics', items: ['Doctor profiles', 'Timings and map', 'Appointment requests'] },
        { label: 'Schools', items: ['Admissions pages', 'Fee enquiry form', 'Events staff can post'] },
        { label: 'Real estate', items: ['Floor plans', 'RERA details', 'Site visit booking'] },
      ] },
      { type: 'steps', caption: 'How we link your website and Google Business Profile so you show up in local results.', after: 4, steps: [
        { title: 'Set up profile', body: 'Create or clean up Google Business Profile' },
        { title: 'Match details', body: 'Same name, address and phone everywhere' },
        { title: 'Add schema', body: 'Location schema and an embedded map' },
        { title: 'Ask for reviews', body: 'Make reviewing easy for happy customers' },
        { title: 'One page a branch', body: 'Each branch gets its own location page' },
      ] },
    ],
    guide: [
      {
        heading: 'What a business website needs to do for a Chennai company',
        paragraphs: [
          'For most Chennai businesses, the website is where a prospect goes after hearing your name. A purchase manager checks a supplier in Ambattur before sending an RFQ. A parent compares schools in Velachery before booking a visit. A patient looks up a clinic in Adyar before calling. In each case the site has a few seconds to answer three questions: what do you do, can I trust you, and how do I contact you?',
          'A website development company in Chennai should start with those questions, not with colours and animations. Everything else on the site, from the menu to the footer, should make those three answers easier to find. Clear services, real photos of your premises and people, and an obvious way to call, message or enquire matter more than visual effects.',
        ],
      },
      {
        heading: 'Website needs by industry',
        paragraphs: [
          'Different businesses need different pages. A good web design company in Chennai will plan the site around how your buyers decide, rather than reusing one template for everyone.',
        ],
        bullets: [
          'Manufacturers in Ambattur, Guindy and the Sriperumbudur belt: product and capability pages, machinery and certifications held, downloadable catalogues and an RFQ form',
          'Clinics and hospitals: doctor profiles, specialities, timings, location maps and appointment requests',
          'Schools and colleges: admissions pages, fee enquiry forms, gallery and event updates staff can post themselves',
          'Real estate developers: project pages with floor plans, RERA details, site visit booking and campaign landing pages',
          'Professional firms such as CAs, lawyers and architects: service explanations, team profiles and articles that build credibility',
          'Retailers and showrooms: store locations, brand lists, offers and a WhatsApp enquiry button',
        ],
      },
      {
        heading: 'WordPress, CMS or custom: choosing the right build',
        paragraphs: [
          'WordPress suits most business websites. It is widely understood, easy for staff to edit and has a large pool of developers if you ever change agencies. It does need regular updates and backups to stay secure.',
          'If you only need a WordPress developer in Chennai to fix, speed up or extend an existing site, that is usually a smaller job than a rebuild, and we quote it separately.',
          'A headless CMS with a static front end suits corporate sites that need high speed, strong security and several editors, at a higher upfront cost. Fully custom web development makes sense only when you need portals, calculators, dealer logins or links to an ERP. If you are speaking to several website designers in Chennai, ask each one why they recommend a particular platform for your needs. A website development company in Chennai that explains the trade-offs openly is easier to work with later.',
        ],
      },
      {
        heading: 'Tamil and English content that speaks to local buyers',
        paragraphs: [
          'Chennai buyers switch easily between Tamil and English, and your website can too. A manufacturer exporting abroad will want polished English, while a clinic, school or retailer serving local families often benefits from Tamil pages or a Tamil summary on key pages.',
          'We write the copy with you rather than leaving you to fill empty boxes. Professional website development in Chennai should include content planning, because unclear text is the most common reason a well-designed site fails to bring in enquiries. Before you hire any website design company in Chennai, ask who will write the words and in which languages.',
        ],
      },
      {
        heading: 'Connecting your website to Google Business Profile',
        paragraphs: [
          'When someone searches "web design near me" or "dentist near me", Google shows a map pack of local businesses before ordinary results. That map pack is driven by Google Business Profile. Your website and profile should support each other: the same name, address and phone number, a link from the profile to the right page, and service pages that match the categories on your profile.',
          'We set up or clean up your profile, add location schema to the website, embed the map and make it easy for happy customers to leave reviews. For businesses with several branches, each branch gets its own location page.',
        ],
      },
      {
        heading: 'What website development costs in Chennai',
        paragraphs: [
          'Quotes from web development companies in Chennai vary widely, from simple template sites to large corporate builds. What drives the cost is the number of pages, a template or custom design, copywriting and photography, languages, integrations with CRMs or ERPs, and any migration from an old site. We meet you first, then send a fixed written quote that lists scope, timeline and exclusions.',
          'Affordable website design in Chennai is possible, but check what the price leaves out. Ask whether copywriting, stock or original photos, hosting, SSL, Google Business Profile setup, training and post-launch support are included, and who will own the domain and logins. After launch, we offer monthly maintenance plans, quoted separately.',
        ],
      },
      {
        heading: 'Why meeting your web development company in Chennai in person helps',
        paragraphs: [
          'Much of a website project can happen online, but the first meeting is worth having face to face. Walking through your factory floor, clinic or showroom shows us what makes your business different, and it gives us better photographs and better copy. As a website development company in Chennai, we can be at your office for the kick-off, the design review and the training session, then handle the rest over calls and WhatsApp.',
        ],
      },
    ],
    related: [
      { label: 'Google Ads agency in Chennai', href: '/chennai/google-ads-agency/' },
      { label: 'PPC agency in Chennai', href: '/chennai/ppc-agency/' },
      { label: 'Corporate website development', href: '/corporate-website-development/' },
      { label: 'WordPress website development services', href: '/wordpress-website-development/' },
      { label: 'Website maintenance services', href: '/website-maintenance-services/' },
      { label: 'SEO company in Chennai', href: '/chennai/seo-company/' },
      { label: 'How much a website costs in India', href: '/blog/ecommerce-website-cost-in-india/' },
    ],
    faqs: [
      { q: 'How much does website design cost in Chennai?', a: 'Website design cost depends on the number of pages, custom design, copywriting, photography, languages and integrations. Custom corporate websites cost more than a simple business site. Hosting and domain renewals are separate, and you receive a fixed written quote after a free meeting, listing scope, timeline and exclusions.' },
      { q: 'How long does it take to build a website?', a: 'A business website of 5–10 pages usually takes three to four weeks from the first meeting to launch. Larger corporate sites with custom features take six to ten weeks. The biggest factor is how quickly content, photos and feedback come in, so we plan these early.' },
      { q: 'Can you meet us at our office in Chennai?', a: 'Yes. Our head office is in Chennai, and we meet clients at their premises for the kick-off meeting, design reviews and staff training. We regularly visit businesses in areas such as T. Nagar, Anna Nagar, Guindy, OMR, Ambattur and Porur, and plan visits further out around key project milestones.' },
      { q: 'Can my website have both Tamil and English content?', a: 'Yes. We can build a fully bilingual site with a language switch, or add Tamil versions of the pages your local customers use most. We write or edit the copy with you, so both versions say the same thing clearly and match how your customers actually speak.' },
      { q: 'Do you build websites for manufacturers and industrial companies?', a: 'Yes. For manufacturers in Ambattur, Guindy, Sriperumbudur and across Tamil Nadu, we build sites with product and capability pages, plant and machinery details, downloadable catalogues and RFQ forms that route enquiries to the right person. English content is written with export and OEM buyers in mind.' },
      { q: 'Will you set up our Google Business Profile?', a: 'Yes. Every business website includes Google Business Profile setup or clean-up, with consistent business details, the right categories, a link to the website and location schema on your contact page. This helps you appear in map results when nearby customers search for your services.' },
      { q: 'What should I ask a web development company in Chennai before hiring?', a: 'Ask what the quote includes, which platform they recommend and why, what support follows launch and who owns the domain, hosting and logins. With us, all of these are registered in your business name and handed over at launch, so you can move the site later without needing our permission.' },
      { q: 'Do you maintain websites after launch?', a: 'Yes. Every new website includes 30 days of support. After that, monthly maintenance plans for business websites cover updates, backups, uptime monitoring, security scans, content changes and a monthly report. You can also manage the site yourself after our training.' },
    ],
  },
];
