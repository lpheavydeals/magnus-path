import type { ServicePageData } from '../../data/types';

const auBreadcrumb = [{ label: 'Australia', href: '/australia/ecommerce-marketing-agency/' }];

export const auWebsitesPages: ServicePageData[] = [
  {
    slug: 'australia/web-development-company',
    kind: 'global',
    market: 'AU',
    twin: 'corporate-website-development',
    title: 'Website Development Company Australia | Magnus Path',
    description: 'Website development company for Australian small businesses, trades and corporates: fast sites, suburb pages and quote forms linked to your CRM. Quoted in AUD.',
    primaryKeyword: 'website development company',
    navLabel: 'Web Development (Australia)',
    breadcrumb: auBreadcrumb,
    eyebrow: 'For Australian businesses · Small business · Corporate · Trades',
    h1: 'A Website Development Company for Australian Businesses *That Want Enquiries*',
    intro: 'Magnus Path is a website development company for Australian small businesses, trades, professional services firms and mid-size companies. We build fast sites with suburb pages, quote forms that reach your CRM and editing your team can manage. We are a Chennai team with no Australian office, our morning is your afternoon, and every project is quoted in AUD after a free audit.',
    icon: 'website',
    facts: ['Suburb and service-area pages', 'Quote forms connected to your CRM', 'Quoted in AUD, no AU office'],
    headings: {
      pains: 'Why Australian business websites *stop bringing in work*',
      includes: 'What we build for Australian small businesses and companies',
      process: 'From free audit to launch in *4 steps*',
      guide: 'Choosing a website development company in Australia: scope, CMS, local search and ownership',
    },
    pains: [
      { title: 'Found in Google Maps, lost on the website', body: 'Your Google Business Profile gets calls, but the website behind it is slow on a phone, never mentions the suburbs you service and gives people no easy way to ask for a quote.' },
      { title: 'Quote requests that go nowhere', body: 'Form submissions land in a shared inbox, miss key details such as job type or postcode, and nobody can say which enquiries came from Google, ads or word of mouth.' },
      { title: 'A site you do not really own', body: 'The domain sits in a former developer’s account, hosting logins are unknown and every small text change means waiting on someone who no longer answers quickly.' },
    ],
    includes: [
      { title: 'Small business website design', body: 'Lean sites for trades, clinics, consultants and local services: clear service pages, reviews, a quote form and click-to-call, built to load quickly on mobile data.' },
      { title: 'Corporate and business websites', body: 'Larger sites for mid-size companies with service and industry pages, case studies, careers, team profiles and approval workflows for marketing and leadership.' },
      { title: 'Local service-area pages', body: 'Genuinely useful pages for the suburbs and regions you cover, linked to your Google Business Profile, with local details rather than copies with the suburb name swapped.' },
      { title: 'Lead forms and CRM connection', body: 'Quote and booking forms that capture job type, postcode and timing, then send each enquiry to your CRM or inbox with source tracking in GA4.' },
      { title: 'Speed, accessibility and privacy basics', body: 'Mobile-first builds tested on real phones, common WCAG checks such as contrast, labels and keyboard use, plus a privacy policy page and forms that only ask for what you need.' },
      { title: 'Hosting, ownership and handover', body: 'Hosting in an Australian data centre where it suits, SSL, backups, and the domain, hosting, analytics and code all registered to your business before launch.' },
    ],
    platforms: ['WordPress', 'Headless CMS', 'Astro', 'Next.js', 'Google Business Profile', 'GA4', 'Google Search Console'],
    process: [
      { title: 'Free audit and call', body: 'We review your current site, Google Business Profile, speed and enquiry flow, then talk through what we found on a video call in your afternoon.' },
      { title: 'Scope and AUD quote', body: 'A written scope listing pages, suburbs, forms, CMS and integrations, with a fixed AUD quote and launch date. Nothing starts until you approve.' },
      { title: 'Design and build', body: 'Mobile and desktop designs with your real content, then development on a staging site you can review, with updates waiting for you each afternoon.' },
      { title: 'Launch and handover', body: 'Redirects, forms, tracking and speed checked before go-live, then training, a support period and every login handed over in your company’s name.' },
    ],
    figures: [
      { type: 'matrix', caption: 'How a small business site and a mid-size corporate site differ.', after: 1, cols: ['Small business', 'Mid-size company'], rows: ['Who visits', 'Who edits'], cells: [
        { title: 'Local customers', body: 'People ready to call or request a quote' },
        { title: 'Many audiences', body: 'Buyers, partners, job seekers and investors' },
        { title: 'One or two people', body: 'Simple editing across five to fifteen good pages' },
        { title: 'Several editors', body: 'Different permissions and an approval step' },
      ] },
      { type: 'venn', caption: 'Your Google Business Profile and website work best when they tell the same story.', after: 3, left: { title: 'Google Business Profile', body: 'map listing, reviews and the service areas you cover' }, right: { title: 'Your website', body: 'genuine suburb pages and a quote form tracked in GA4' }, overlap: 'Same name, address and phone' },
    ],
    guide: [
      {
        heading: 'Small business website design in Australia: what you actually need',
        paragraphs: [
          'Most small business websites in Australia have one job: turn people who found you on Google into phone calls and quote requests. For a plumber, electrician, physio, accountant or landscaper, that usually means a home page that says what you do and where, one page per main service, a reviews section, an about page with real photos and a short quote form that works well on a phone.',
          'Small business website design should stay lean. Five to fifteen good pages beat forty thin ones. Put your phone number and a call button where thumbs can reach them, show your licence or registration details if your trade requires them, and answer the questions customers ask before they ring, such as call-out areas, typical timeframes and how quotes work.',
        ],
      },
      {
        heading: 'Corporate website design for mid-size Australian companies',
        paragraphs: [
          'Corporate website design for a mid-size company has a wider audience: buyers, partners, job seekers and sometimes investors. Expect service or industry pages, case studies, leadership profiles, a careers section, news and policies, plus several people who need to edit content with different permissions and an approval step before pages go live.',
          'Business website design sits between the two. Whatever the size, agree the scope in writing first: the page list, who writes the content, which integrations are included and what happens after launch. A good website development company will push back on pages that do not serve a buyer.',
        ],
      },
      {
        heading: 'WordPress, headless CMS or a custom build',
        paragraphs: [
          'WordPress suits most small and mid-size business sites. It is familiar, easy for staff to edit and has a large pool of developers in Australia and overseas, which matters if you ever change provider. A headless CMS with a framework such as Astro or Next.js suits companies that publish a lot of structured content, need very fast pages or want the same content feeding a website and an app. A fully custom build only makes sense when your site includes real software, such as a booking engine or customer portal.',
          'Ask any website development company to explain its CMS recommendation in plain English, including who can edit what and what ongoing updates involve. Also ask how long the platform will suit you: a site that is hard to extend in two years costs more than a slightly larger build today.',
          'Whichever CMS you choose, plan the content model early. Services, suburbs, team members and case studies should each be a simple, repeatable content type, so adding a new location or project takes minutes rather than a developer ticket.',
        ],
      },
      {
        heading: 'Google Business Profile, suburb pages and quote forms',
        paragraphs: [
          'For service businesses, the website and Google Business Profile work together. Link your profile to the most relevant page, keep your business name, address and phone number identical everywhere and make sure the service areas listed match what the website says.',
          'Service-area pages help when they are genuinely local: the suburbs you cover, typical jobs in that area, photos of local work and reviews from customers nearby. Pages that only swap the suburb name rarely rank for long. Then connect your quote form to your CRM, capture postcode and job type, and track each enquiry’s source in GA4 so you know which pages earn work.',
        ],
      },
      {
        heading: 'Speed, accessibility, privacy and hosting in Australia',
        paragraphs: [
          'Most visitors arrive on a phone, often on mobile data at a job site or between meetings. Compress images, limit third-party scripts and test on mid-range phones, not just office desktops. For accessibility, cover the WCAG basics: readable contrast, proper headings, alt text, labelled form fields and menus that work with a keyboard.',
          'Many businesses handling personal information have obligations under the Australian Privacy Act. At minimum, publish a clear privacy policy, collect only the details you need and secure your forms. We are not lawyers, so have your adviser confirm what applies to you. Hosting in an Australian data centre keeps pages quick for local visitors and can make privacy conversations simpler.',
        ],
      },
      {
        heading: 'How to choose a website development company in Australia',
        paragraphs: [
          'Start with ownership. Insist that the domain, hosting, Google accounts and code are registered to your business, not the developer, and that you can export the site at any time. Look at recent work that resembles your project, and talk to the person who will build it, not only the salesperson. Then ask every shortlisted provider the same questions:',
        ],
        bullets: [
          'Who will design and build the site, and can I speak with them before signing?',
          'Which CMS do you recommend for us, and why?',
          'How will quote requests reach our CRM, and how will we track them?',
          'Will every login and account be in our company’s name at launch?',
          'What support is included after launch, and how quickly do you reply?',
        ],
      },
      {
        heading: 'Working with a remote team from Chennai',
        paragraphs: [
          'Magnus Path has no Australian office. We are a Chennai, India team working with Australian clients over video calls, a shared project board and email. Sydney and Melbourne are 4.5 hours ahead of India on standard time and 5.5 hours during daylight saving, and Perth is 2.5 hours ahead. Our morning is your east-coast afternoon, so calls fit after lunch and finished work usually reaches you by evening. If regular in-person workshops matter most, a local website development company may suit you better.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce PPC agency in Australia', href: '/australia/ecommerce-ppc-agency/' },
      { label: 'Ecommerce and digital agency for Australian businesses', href: '/australia/ecommerce-marketing-agency/' },
      { label: 'WordPress developer for Australian websites', href: '/australia/wordpress-developer/' },
      { label: 'Corporate website development services', href: '/corporate-website-development/' },
      { label: 'Shopify agency for Australian online stores', href: '/australia/shopify-agency/' },
      { label: 'Free website and e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Do you have an office in Australia?', a: 'No. Magnus Path is a team based in Chennai, India, and we work with Australian businesses remotely through video calls, a shared project board and email. Our morning is your east-coast afternoon, so calls fit after lunch. We do not claim an Australian address or offer in-person meetings.' },
      { q: 'How much does small business website design cost in Australia?', a: 'We quote in AUD after a free audit, because cost depends on the number of pages, suburb pages, forms, integrations and who writes the content. You get a written scope and fixed price before any work starts. Domain, hosting and paid plugins or software are listed separately.' },
      { q: 'What is the difference between small business and corporate website design?', a: 'A small business site is usually five to fifteen pages focused on calls and quote requests. Corporate website design adds case studies, careers, leadership and news sections, several editors with different permissions and approval steps. Both should be fast, accessible and easy for your own team to update.' },
      { q: 'Should my business website use WordPress?', a: 'For most Australian small and mid-size businesses, yes. WordPress is easy to edit and many developers know it. A headless CMS suits companies with lots of structured content or strict speed needs, and a custom build suits sites with real software features. We explain the trade-offs before quoting.' },
      { q: 'Can you build suburb pages for my service area?', a: 'Yes. We build service-area pages for the suburbs and regions you genuinely cover, with local details, photos of work and nearby reviews, and link them to your Google Business Profile. We avoid copied pages that only swap the suburb name, because they help neither customers nor rankings.' },
      { q: 'Can you host our website in Australia?', a: 'Yes. We can set up hosting with a provider that runs Australian data centres, which keeps pages quick for local visitors. The hosting account is registered to your business, and we configure SSL, daily backups and uptime monitoring before launch so nothing depends on our login.' },
      { q: 'Will we own the domain, hosting and website?', a: 'Yes. The domain, hosting, Google Analytics, Search Console and the site’s code are all set up in your company’s name. We work with delegated access, and at handover you receive every login. If you ever change provider, you can take the whole site with you.' },
    ],
  },
  {
    slug: 'australia/wordpress-developer',
    kind: 'global',
    market: 'AU',
    twin: 'wordpress-website-development',
    title: 'WordPress Developer Australia | Magnus Path',
    description: 'WordPress developer for Australian sites and agencies: custom themes, Gutenberg and ACF, speed fixes, security and monthly maintenance, quoted in AUD.',
    primaryKeyword: 'WordPress developer',
    navLabel: 'WordPress Developer (Australia)',
    breadcrumb: auBreadcrumb,
    eyebrow: 'For Australian businesses and agencies · Builds · Support · Maintenance',
    h1: 'A WordPress Developer for Australian Sites *That Need to Run Well*',
    intro: 'Need a WordPress developer for your Australian site who can build, fix and look after it properly? Magnus Path handles custom themes, Gutenberg blocks, page builder clean-ups, speed, security and monthly maintenance for Australian businesses and agencies. We are a Chennai team with no Australian office, so our morning is your afternoon, and we quote in AUD after a free audit.',
    icon: 'website',
    facts: ['Custom themes, Gutenberg and ACF', 'Maintenance and white-label support', 'Quoted in AUD, no AU office'],
    headings: {
      pains: 'Why Australian WordPress sites *become hard to manage*',
      includes: 'What our WordPress developers do for Australian clients',
      process: 'How we start working on your site in *4 steps*',
      guide: 'Hiring a WordPress developer in Australia: builds, speed, security and maintenance',
    },
    pains: [
      { title: 'Page builder layers on everything', body: 'Years of Elementor or Divi sections, shortcodes and abandoned plugins make every page heavy. Editors are scared to move anything, and mobile scores keep dropping.' },
      { title: 'Updates nobody wants to press', body: 'WordPress core, themes and plugins sit months behind because the last update broke a form. Meanwhile known vulnerabilities stay open on a live business site.' },
      { title: 'No developer when you need one', body: 'Your freelancer moved on or your agency is flat out. Small fixes wait weeks, and there is nobody who knows how the site was put together.' },
    ],
    includes: [
      { title: 'Custom WordPress themes', body: 'Lightweight block themes built around your brand and content, with theme.json controlling colours, type and spacing so new pages stay consistent.' },
      { title: 'Gutenberg blocks and ACF', body: 'Custom blocks and patterns for sections you reuse, plus ACF fields for structured content such as services, locations, team members and projects.' },
      { title: 'Page builder clean-ups', body: 'Tidying or replacing heavy builder layouts, removing unused plugins and shortcodes, and rebuilding key templates so pages load faster and edit safely.' },
      { title: 'Speed and Core Web Vitals', body: 'Hosting review, caching, image and font fixes and script audits, measured with field data so improvements show up for real visitors on phones.' },
      { title: 'Security and maintenance plans', body: 'Tested core, theme and plugin updates, off-site backups, firewall and login hardening, uptime monitoring and a monthly report in plain English.' },
      { title: 'White-label work for agencies', body: 'Builds, fixes and maintenance for Australian agencies under your brand, working in your tools and staying out of client conversations unless you ask.' },
    ],
    platforms: ['WordPress', 'Gutenberg', 'ACF', 'WooCommerce', 'Elementor', 'Divi', 'Rank Math', 'Yoast SEO', 'Git', 'GA4', 'Afterpay'],
    process: [
      { title: 'Free audit and call', body: 'We review your theme, plugins, hosting, speed and security, then walk you through the findings on a video call booked in your afternoon.' },
      { title: 'Pick an engagement', body: 'A written scope for a project, a monthly developer or a block of hours, quoted in AUD. Nothing starts until you approve it.' },
      { title: 'Staging, Git and review', body: 'We work on a staging copy and in Git, never straight on the live site, and you review changes before they are deployed.' },
      { title: 'Handover or ongoing care', body: 'Launch checks, notes on what changed and training if needed, then maintenance and support for as long as you want it.' },
    ],
    figures: [
      { type: 'steps', caption: 'The order to fix a slow WordPress site, starting with the biggest cause.', after: 2, steps: [
        { title: 'Better hosting', body: 'Move off cheap shared hosting' },
        { title: 'Resize images', body: 'Start with the hero image' },
        { title: 'Trim plugins', body: 'Remove anything unused' },
        { title: 'Defer scripts', body: 'Stop third-party code on every page' },
        { title: 'Check field data', body: 'Real visitors, not only a lab score' },
      ] },
      { type: 'mindmap', caption: 'What a WordPress maintenance plan should cover each month.', center: 'Maintenance plan', after: 3, branches: [
        { label: 'Updates', items: ['Core, theme, plugins', 'Tested on staging first'] },
        { label: 'Backups', items: ['Daily, off-site', 'Restore tested'] },
        { label: 'Monitoring', items: ['Uptime', 'Security alerts'] },
        { label: 'Support', items: ['Plain-English report', 'Time for small changes'] },
      ] },
    ],
    guide: [
      {
        heading: 'What a good WordPress developer does for an Australian business',
        paragraphs: [
          'A WordPress developer should leave your site easier to run than they found it. That means a theme built for your content rather than a multipurpose theme with hundreds of unused options, a short list of well-supported plugins, and editing your team can do without calling anyone. It also means writing down how things work, so the next person does not start from scratch.',
          'Before you hire a WordPress developer, check how they work, not just what they have built. Do they use a staging site and version control? Do they test updates before applying them? Will they tell you when a plugin should go rather than adding another one on top? Those habits matter more than a polished portfolio.',
          'For most Australian businesses, WordPress development Australia-wide covers the same ground: service pages, a blog, quote or booking forms, Google Business Profile links and solid local SEO basics. What separates a good WordPress agency in Australia, local or remote, is how carefully that work is done and how well it is supported afterwards.',
        ],
      },
      {
        heading: 'Custom themes, Gutenberg blocks and page builder clean-ups',
        paragraphs: [
          'Modern WordPress is built around the block editor. Custom Gutenberg blocks and patterns give editors safe building pieces, such as service cards, testimonials and calls to action, while ACF handles structured fields for things like locations, staff or projects. The result is faster pages and fewer layout accidents.',
          'Page builders such as Elementor and Divi are not always the problem. If your team knows one well, a clean-up can be enough: remove unused widgets and add-ons, standardise templates and fix the slowest pages. When the builder has become the bottleneck, we rebuild key templates as blocks and migrate content in stages.',
          'Staged migration keeps the site live and ranking throughout. We start with the templates that carry the most traffic or enquiries, such as the home page and main service pages, keep URLs the same where possible and add redirects where they change.',
        ],
      },
      {
        heading: 'Speed, Core Web Vitals and security',
        paragraphs: [
          'Most slow WordPress sites suffer from the same causes: cheap shared hosting, oversized images, too many plugins and third-party scripts loading on every page. Fixing them in that order usually helps more than any single caching plugin. Measure with field data from real visitors, not only a lab score.',
          'Security is mostly routine. Keep core, themes and plugins updated, remove anything unused, enforce strong passwords and two-factor login for admins, limit who has administrator rights and keep off-site backups you have actually tested restoring.',
          'Core Web Vitals reward the same discipline. Largest Contentful Paint usually improves once the hero image is sized properly and render-blocking scripts are deferred, while layout shifts often come from fonts, embeds and late-loading banners. A WordPress developer who fixes the cause, rather than stacking optimisation plugins, gives you gains that last.',
        ],
      },
      {
        heading: 'WordPress maintenance in Australia: what a plan should include',
        paragraphs: [
          'WordPress maintenance is where many sites quietly fail. Updates get skipped, backups are never tested and small problems grow until something breaks on a busy day. Searching for WordPress maintenance in Australia brings up plans that look similar on paper, so compare what is actually done each month. Whoever looks after your site, a good plan should cover:',
        ],
        bullets: [
          'Core, theme and plugin updates tested on staging before going live.',
          'Daily off-site backups with a restore tested every few months.',
          'Uptime and security monitoring, with alerts acted on quickly.',
          'A monthly report in plain English: what changed, what was fixed, what needs a decision.',
          'A set amount of WordPress support time for small content and design changes.',
        ],
      },
      {
        heading: 'WooCommerce for Australian stores',
        paragraphs: [
          'If your site sells online, WooCommerce keeps the shop inside WordPress. Australian stores need GST-inclusive prices, tax settings your accountant has checked, shipping rates for Australia Post or couriers and payment options such as Stripe, PayPal and Afterpay. Because WooCommerce adds plugins and database load, it makes careful updates and good hosting even more important. Test checkout, refunds and order emails on staging after every major update, and plan changes well before EOFY sales, Black Friday and the Christmas rush.',
        ],
      },
      {
        heading: 'Engagement options, time zones and white-label work',
        paragraphs: [
          'You can hire a WordPress developer from our team in three ways, all quoted in AUD: a fixed project with a defined scope and launch date, a monthly developer for an agreed number of days, or a block of hours you draw down as requests arrive. Maintenance plans can sit alongside any of them.',
          'We have no Australian office. Sydney and Melbourne are 4.5 hours ahead of India on standard time and 5.5 hours in daylight saving, and Perth is 2.5 hours ahead. Our morning is your east-coast afternoon, so send requests before you finish for the day and they are usually done by your next morning. Australian agencies use the same model for white-label WordPress development, with our team working in their project tools and staying unbranded.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce and digital agency for Australian businesses', href: '/australia/ecommerce-marketing-agency/' },
      { label: 'Website development company in Australia', href: '/australia/web-development-company/' },
      { label: 'WordPress website development services', href: '/wordpress-website-development/' },
      { label: 'White label SEO for Australian agencies', href: '/australia/white-label-seo/' },
      { label: 'Website maintenance services', href: '/website-maintenance-services/' },
    ],
    faqs: [
      { q: 'Do you have an office in Australia?', a: 'No. Magnus Path is a team based in Chennai, India, and we work with Australian businesses and agencies remotely through video calls, shared project boards and chat. Our morning is your east-coast afternoon, so calls fit after lunch. We do not claim an Australian address or offer in-person meetings.' },
      { q: 'How much does it cost to hire a WordPress developer in Australia?', a: 'We quote in AUD after a free audit of your site. Cost depends on whether you need a fixed project, a monthly developer for set days or a block of hours, and on the state of your theme and plugins. You approve a written scope before any work starts.' },
      { q: 'What is included in WordPress maintenance in Australia?', a: 'Our WordPress maintenance plans include tested core, theme and plugin updates on staging, daily off-site backups, uptime and security monitoring, login hardening and a monthly plain-English report. Each plan also includes some WordPress support time for small content or design changes, quoted in AUD.' },
      { q: 'Can you fix a slow Elementor or Divi site without a full rebuild?', a: 'Often, yes. We start by removing unused add-ons and plugins, fixing images, fonts and scripts, and reviewing hosting and caching. If key templates are still slow, we rebuild those as Gutenberg blocks and leave the rest, so you avoid paying for a rebuild you do not need.' },
      { q: 'Do you offer white-label WordPress development for Australian agencies?', a: 'Yes. We build, fix and maintain WordPress sites for Australian agencies under their brand. We work in your project tools, follow your coding standards and stay out of client conversations unless you invite us. Requests sent in your afternoon are usually done by your next morning.' },
      { q: 'Do you work on WooCommerce stores in Australia?', a: 'Yes. We set up and maintain WooCommerce stores with GST-inclusive pricing, Australia Post or courier shipping rates and payments through Stripe, PayPal and Afterpay. Your accountant should confirm the GST settings, and we test checkout, refunds and plugin updates on staging before anything goes live.' },
      { q: 'Will you work directly on our live website?', a: 'No. We work on a staging copy and keep code in Git, so changes are reviewed before they reach the live site. Backups are taken before every deployment, and if anything goes wrong we can roll back quickly. You keep ownership of hosting, the domain and all logins.' },
    ],
  },
];
