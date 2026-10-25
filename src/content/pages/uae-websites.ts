import type { ServicePageData } from '../../data/types';

const uaeBreadcrumb = [{ label: 'United Arab Emirates', href: '/uae/ecommerce-marketing-agency/' }];

export const uaeWebsitesPages: ServicePageData[] = [
  {
    slug: 'uae/web-development-company',
    kind: 'global',
    market: 'UAE',
    twin: 'corporate-website-development',
    title: 'Web Development Company UAE for Business Sites',
    description: 'A web development company for UAE business websites: English and Arabic with proper RTL, fast mobile pages and leads sent to WhatsApp or CRM. Quoted in AED.',
    primaryKeyword: 'web development company in the UAE',
    navLabel: 'Web Development Company (UAE)',
    breadcrumb: uaeBreadcrumb,
    eyebrow: 'For UAE companies · Corporate and business websites · English and Arabic',
    h1: 'A Web Development Company for UAE Businesses, *in English and Arabic*',
    intro: 'Looking for a web development company in the UAE that builds bilingual business websites without the agency overheads? Billion Ecommerce Agency is a Chennai team serving Dubai and the wider UAE remotely. We plan, design and build English and Arabic company sites with proper RTL layouts, fast mobile pages and enquiry forms that reach your WhatsApp or CRM. We quote in AED after a free audit.',
    icon: 'website',
    facts: ['English and Arabic with proper RTL', 'Working hours overlap with UAE time', 'Quoted in AED after a free audit'],
    headings: {
      pains: 'Why UAE company websites *miss enquiries*',
      includes: 'What a website development company in the UAE should deliver',
      process: 'From audit to launch in *4 steps*',
      guide: 'Choosing a web development company in the UAE: languages, CMS, leads and the details buyers miss',
    },
    pains: [
      { title: 'An Arabic version that feels bolted on', body: 'Half the pages are untranslated, menus and icons point the wrong way in right-to-left mode, and the Arabic site uses a different structure, so visitors and Google both get confused.' },
      { title: 'Leads that go nowhere', body: 'A contact form emails a shared inbox, nobody replies for two days and there is no WhatsApp button. Prospects in Dubai expect a quick answer and simply contact the next company.' },
      { title: 'A slow site on a phone', body: 'Large hero videos, sliders and a heavy theme mean the home page crawls on mobile data. Most visitors arrive from a phone, often from an ad or a Google Maps listing, and leave before it loads.' },
    ],
    includes: [
      { title: 'Site plan and service-area pages', body: 'A page plan built around your services and audiences, with separate pages for Dubai, Abu Dhabi, Sharjah or other emirates only where you genuinely serve them and have something specific to say.' },
      { title: 'Bilingual design with proper RTL', body: 'English and Arabic layouts designed together, with mirrored navigation, icons and forms, Arabic web fonts and both versions tested on real phones. Translation is coordinated with your team or a professional translator.' },
      { title: 'CMS that fits your team', body: 'WordPress, a headless CMS or a custom build, chosen on how often you publish, how many editors you have and what the site connects to. The reasons are written down before we start.' },
      { title: 'Lead forms to WhatsApp and CRM', body: 'Enquiry, booking and quote forms that route to the right person, WhatsApp click-to-chat, and form data sent to your CRM, with every lead tracked in GA4.' },
      { title: 'Speed, hosting and security', body: 'Lean templates, compressed images, caching and a CDN, hosted with SSL, backups and monitoring. Domain, hosting and every login are set up in your company’s name.' },
      { title: 'SEO-ready structure and accessibility', body: 'Clean URLs, hreflang for English and Arabic, schema, XML sitemaps, readable contrast, keyboard navigation and alt text, so the site can rank and works for every visitor.' },
    ],
    platforms: ['WordPress', 'Headless CMS', 'Next.js', 'Astro', 'WhatsApp Business', 'GA4', 'Google Search Console', 'Cloudflare'],
    process: [
      { title: 'Free audit and video call', body: 'We review your current site, competitors and goals, then walk you through what we found on a video call during your working day.' },
      { title: 'Scope and AED quote', body: 'A written scope covering pages, languages, CMS, integrations, hosting and launch date, with a fixed quote in AED. Work starts only after you approve it.' },
      { title: 'Design and build', body: 'Designs in English and Arabic with your real content, then development on a staging site you can check at any time. Our hours almost fully overlap yours.' },
      { title: 'Launch and handover', body: 'Forms, tracking and redirects tested, the site goes live, sitemaps are submitted, your team is trained to edit and every account is handed over.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'What a UAE company website needs to cover before design starts.', center: 'UAE company website', after: 0, branches: [
        { label: 'Clear message', items: ['What you do and where', 'Real photos of your team'] },
        { label: 'Content owners', items: ['Who writes the English', 'Who approves the Arabic'] },
        { label: 'Phone first', items: ['Loads fast on mobile', 'Easy to read and tap'] },
        { label: 'Contact', items: ['WhatsApp button', 'Forms that reach a person'] },
      ] },
      { type: 'steps', caption: 'What it takes to make an Arabic version work right to left, not just translated.', after: 1, steps: [
        { title: 'Separate URLs', body: '/en/ and /ar/, linked with hreflang' },
        { title: 'Mirror the layout', body: 'Menus, arrows, sliders, forms and tables' },
        { title: 'Keep some LTR', body: 'Phone numbers, prices and brand names' },
        { title: 'Arabic fonts', body: 'Readable web fonts and spacing' },
        { title: 'Test on phones', body: 'Every template, in both directions' },
      ] },
    ],
    guide: [
      {
        heading: 'What a UAE business website has to do',
        paragraphs: [
          'A company website in the UAE is often the second thing a prospect checks after a referral, a LinkedIn message or a Google Maps listing. A real estate broker, a clinic, a training institute, a hotel or a trading firm all need the same basics: say clearly what you do and where, look credible in English and Arabic, load quickly on a phone and make it easy to get in touch on the channel people actually use, which in the UAE is very often WhatsApp.',
          'A good web development company in the UAE plans for all of that before anyone opens a design tool. That means agreeing on audiences, pages, languages, who edits the site and where enquiries go. Skipping this stage is the main reason business sites get rebuilt every two or three years.',
          'Content is usually the slowest part of any project. Decide early who writes the English copy, who approves the Arabic, and who supplies photos of your team, premises or projects. Real photos and specific service descriptions do more for trust than stock images and general claims.',
        ],
      },
      {
        heading: 'English and Arabic websites with proper RTL',
        paragraphs: [
          'Arabic runs right to left, so a bilingual site needs mirrored layouts, not just translated text. Navigation, breadcrumbs, arrows, sliders, form fields and tables all have to flip, while phone numbers, prices and some brand names stay left to right. Arabic also needs suitable web fonts and slightly different spacing to stay readable.',
          'Each language should have its own URLs, such as /en/ and /ar/, with hreflang tags so Google shows the right version. We do not have in-house Arabic copywriters. We build the bilingual structure, work with your team or a professional translator for the words, and test every template in both directions on real devices.',
        ],
      },
      {
        heading: 'WordPress, headless CMS or custom: choosing the platform',
        paragraphs: [
          'WordPress suits most company websites. It is familiar, has mature multilingual plugins and lets a marketing team edit pages without a developer. A headless CMS such as Sanity, Strapi or Contentful, paired with a fast front end, suits companies with large content libraries, several sites or apps sharing content, or stricter performance needs. A fully custom build makes sense for portals, booking engines or deep system integrations.',
          'Ask any website development company in the UAE why they recommend a platform for you specifically. If every client gets the same answer, the recommendation is about their workflow, not yours.',
        ],
      },
      {
        heading: 'Leads, WhatsApp, speed and hosting',
        paragraphs: [
          'Every form should have an owner and a destination. We route enquiries by service or emirate, send them to WhatsApp Business, email or your CRM, and track form submissions, calls and WhatsApp clicks in GA4 so you know which pages and campaigns produce leads.',
          'Most visitors arrive on a phone, so we design mobile-first, avoid heavy sliders and autoplay video, compress images and use caching and a CDN. Hosting is chosen for your traffic and CMS, with servers near your audience where practical, SSL, daily backups and uptime monitoring.',
        ],
      },
      {
        heading: 'Data protection, accessibility and SEO structure',
        paragraphs: [
          'The UAE Personal Data Protection Law (PDPL) sets rules on collecting and using personal data, and some free zones have their own data rules. We are not lawyers, so your legal adviser should confirm what applies to you. On the website side we keep forms to the fields you need, add clear privacy notices and consent where required, and limit who can see submissions.',
          'Accessibility helps every visitor: readable contrast, keyboard navigation, labelled forms and alt text. For search, we build clean URLs, schema for your organisation and services, and service-area pages for each emirate only where you have genuine local content, rather than thin copies with the city name swapped.',
        ],
      },
      {
        heading: 'How to choose a web development company in the UAE',
        paragraphs: [
          'Whether you shortlist a local studio or a remote team, ask the same questions:',
        ],
        bullets: [
          'Who will design and build the site, and can I speak to them before signing?',
          'How will the Arabic version be translated, laid out and tested?',
          'Will my company own the domain, hosting, CMS and every account?',
          'Where do enquiries go, and how will I see which pages produce leads?',
          'What happens after launch: support period, updates and response times?',
        ],
      },
      {
        heading: 'Working with a remote team from Chennai',
        paragraphs: [
          'Billion Ecommerce Agency is a Chennai team serving Dubai and the wider UAE remotely. We have no office, address or trade licence in the UAE and we do not offer in-person meetings there. India is 1.5 hours ahead of UAE time, so our working days almost fully overlap and same-day replies are realistic. Calls happen on video, progress is shared on a staging site, and you can judge us on the free audit before committing. If you need a web development company in the UAE with a local office for walk-in meetings, we are not the right fit, and we will say so.',
        ],
      },
    ],
    related: [
      { label: 'Digital marketing agency in Dubai', href: '/uae/digital-marketing-agency-dubai/' },
      { label: 'E-commerce and digital agency for UAE businesses', href: '/uae/ecommerce-marketing-agency/' },
      { label: 'Corporate website development company', href: '/corporate-website-development/' },
      { label: 'WordPress development company in Dubai', href: '/uae/wordpress-development-dubai/' },
      { label: 'Ecommerce website development in Dubai', href: '/uae/ecommerce-website-development-dubai/' },
      { label: 'SEO services in Dubai for business websites', href: '/uae/seo-services-dubai/' },
    ],
    faqs: [
      { q: 'Do you have an office in Dubai?', a: 'No. Billion Ecommerce Agency is a Chennai, India team serving Dubai and the wider UAE remotely. We have no UAE office, address or trade licence. India is 1.5 hours ahead of UAE time, so our working days almost fully overlap, and we run calls on video and share progress on a staging site.' },
      { q: 'How do I choose a website development company in the UAE?', a: 'Ask who will actually build the site, how the Arabic version will be translated and tested, which CMS they recommend for you and why, where enquiries will go and what support follows launch. Check that your company will own the domain, hosting and every account from day one.' },
      { q: 'Can you build a bilingual English and Arabic website?', a: 'Yes. We design both languages together with mirrored right-to-left layouts, Arabic web fonts, separate URLs and hreflang tags. We do not write Arabic copy in-house, so translation comes from your team or a professional translator, and we test every template in both directions on real phones.' },
      { q: 'Should my company website use WordPress or a headless CMS?', a: 'WordPress suits most company websites because editors know it and multilingual plugins are mature. A headless CMS suits large content libraries, several sites or apps sharing content, or strict performance needs. We recommend one after looking at your editors, publishing frequency, languages and integrations, and explain the reasons in writing.' },
      { q: 'Can website enquiries go straight to WhatsApp or our CRM?', a: 'Yes. We add WhatsApp click-to-chat, route form submissions by service or emirate, and send them to WhatsApp Business, email or your CRM. Every form, call and WhatsApp click is tracked in GA4, so you can see which pages and campaigns bring in leads.' },
      { q: 'Does my website need to follow the UAE PDPL?', a: 'If your site collects personal data, the UAE Personal Data Protection Law and possibly free zone data rules may apply. We are not lawyers, so please confirm the details with your legal adviser. We help by keeping forms minimal, adding clear privacy notices and consent where needed, and restricting access to submissions.' },
      { q: 'How much does a business website cost in the UAE?', a: 'It depends on pages, languages, CMS, integrations and design work. We do not publish a fixed rate. After a free audit of your current site or plans, we send a written scope and a fixed quote in AED, so you know exactly what is included before any work begins.' },
    ],
  },
  {
    slug: 'uae/wordpress-development-dubai',
    kind: 'global',
    market: 'UAE',
    twin: 'wordpress-website-development',
    title: 'WordPress Development Company Dubai | Billion Ecommerce Agency',
    description: 'Need a WordPress development company in Dubai’s working hours? Our Chennai team builds custom themes, bilingual RTL sites and secure, fast WordPress builds.',
    primaryKeyword: 'WordPress development company in Dubai',
    navLabel: 'WordPress Development (Dubai)',
    breadcrumb: uaeBreadcrumb,
    eyebrow: 'For Dubai and UAE businesses · Custom themes · Arabic and English',
    h1: 'WordPress Development for Dubai Sites *Your Team Can Edit*',
    intro: 'If you need a WordPress development company in Dubai’s working hours, Billion Ecommerce Agency’s Chennai team is just 1.5 hours ahead and serves Dubai and the wider UAE remotely. We build custom themes with Gutenberg blocks and ACF, bilingual Arabic and English sites with proper RTL styling, and keep them fast and secure after launch. We quote in AED after a free audit.',
    icon: 'website',
    facts: ['Custom themes, Gutenberg and ACF', 'Arabic and English with RTL styling', 'Quoted in AED after a free audit'],
    headings: {
      pains: 'Why WordPress sites in Dubai *become hard to manage*',
      includes: 'What our WordPress developers build',
      process: 'How a WordPress project runs in *4 steps*',
      guide: 'Hiring a WordPress development company in Dubai: themes, languages, speed and support',
    },
    pains: [
      { title: 'A theme nobody can change safely', body: 'A multipurpose theme plus a page builder and dozens of plugins. Every edit risks breaking the mobile layout, so even small changes wait for a developer.' },
      { title: 'Arabic pages that break the layout', body: 'The Arabic version was added later, so columns overlap, icons point the wrong way and the menu collapses oddly in right-to-left mode on phones.' },
      { title: 'Updates skipped for months', body: 'The last plugin update broke something, so nobody runs updates any more. Known vulnerabilities stay open and the site slows down as old code piles up.' },
    ],
    includes: [
      { title: 'Custom WordPress themes', body: 'A lightweight theme built around your brand and content rather than a multipurpose theme with hundreds of unused options, with code you own outright.' },
      { title: 'Gutenberg blocks and ACF fields', body: 'Custom blocks, patterns and Advanced Custom Fields for services, team, projects, listings or courses, so editors update content without touching layout.' },
      { title: 'Bilingual sites with RTL styling', body: 'English and Arabic set up with a multilingual plugin such as WPML or Polylang, a dedicated RTL stylesheet, Arabic fonts and both languages tested on real phones.' },
      { title: 'WooCommerce when you sell online', body: 'Product catalogues and checkouts in AED with 5% VAT shown, cash on delivery and card payments, added to the same WordPress site when you need them.' },
      { title: 'Speed and security hardening', body: 'Caching, image optimisation, a CDN, a firewall, two-factor login, limited admin roles and daily off-site backups, configured before launch.' },
      { title: 'Maintenance plans', body: 'Monthly updates tested on staging, uptime and security monitoring, backups and small content changes, so the site stays fast and patched after go-live.' },
    ],
    platforms: ['WordPress', 'Gutenberg', 'ACF', 'WPML', 'Polylang', 'WooCommerce', 'Rank Math', 'Yoast SEO', 'Cloudflare', 'GA4'],
    process: [
      { title: 'Free audit', body: 'We review your current site or plans, check speed, plugins and security, and talk through the findings on a video call in your working day.' },
      { title: 'Scope and AED quote', body: 'A written scope covering templates, blocks, languages, integrations and hosting, with a fixed AED quote or a monthly or hours-based arrangement.' },
      { title: 'Design and development', body: 'Designs in both languages, then the theme, blocks and fields built on a staging site you can review throughout the project.' },
      { title: 'Launch and support', body: 'Go-live with redirects, tracking and backups in place, training for your editors, and an optional maintenance plan from the first month.' },
    ],
    figures: [
      { type: 'venn', caption: 'A custom theme gives your editors safe building blocks, so new pages stay quick and consistent.', after: 1, left: { title: 'Our custom theme', body: 'lightweight code, Gutenberg blocks and ACF fields' }, right: { title: 'Your editors', body: 'fill in fields and arrange approved blocks' }, overlap: 'New pages in minutes' },
      { type: 'mindmap', caption: 'What keeps a WordPress or WooCommerce site in the UAE fast and safe.', center: 'Fast, safe WordPress', after: 3, branches: [
        { label: 'Speed', items: ['Server and page caching', 'Compressed images, CDN'] },
        { label: 'Lock down', items: ['SSL and firewall', 'Two-factor login', 'Limited admin roles'] },
        { label: 'Recover', items: ['Daily off-site backups', 'Updates tested on staging'] },
        { label: 'Selling', items: ['AED prices with VAT', 'Cards and COD'] },
      ] },
    ],
    guide: [
      {
        heading: 'When WordPress is the right choice for a Dubai business',
        paragraphs: [
          'WordPress suits most company websites, content-led businesses and many small online shops. Your marketing team can publish without a developer, there is a large pool of people who know the platform, and you own the code and data. It is less suited to complex web apps or portals, where a custom build or headless CMS may be better.',
          'A good WordPress development company in Dubai should tell you when WordPress is not the answer. If a supplier recommends it for every brief, ask why it fits yours.',
          'Hosting matters as much as the build. Cheap shared hosting is a common reason WordPress sites in the UAE feel slow. We recommend managed WordPress hosting or a well-configured cloud server sized for your traffic, with server-level caching, staging, automatic backups and PHP kept on a supported version. The hosting account should be in your company’s name, not the developer’s.',
        ],
      },
      {
        heading: 'Custom themes, Gutenberg blocks and ACF',
        paragraphs: [
          'Most slow, fragile WordPress sites share one cause: a multipurpose theme and a page builder loading code for features nobody uses. We build lightweight custom themes instead, with Gutenberg blocks and patterns for your common sections and Advanced Custom Fields for structured content such as property listings, doctors, courses, projects or team members.',
          'Editors then fill in fields and arrange approved blocks. Layouts stay consistent on every screen size, and a new page takes minutes rather than a developer ticket. Where a team is already trained on a page builder and the site is small, we will say if keeping it is the more practical option.',
        ],
      },
      {
        heading: 'Arabic and English WordPress sites with RTL styling',
        paragraphs: [
          'WordPress supports right-to-left languages, but a theme has to be built for it. We write a dedicated RTL stylesheet, mirror navigation, icons and sliders, load suitable Arabic fonts and test forms, tables and numbers in both directions.',
          'For the language setup we use a multilingual plugin such as WPML or Polylang, chosen for your content and budget, with separate URLs and hreflang tags per language. We do not write Arabic copy in-house; translation comes from your team or a professional translator, and we check it renders correctly.',
        ],
      },
      {
        heading: 'WooCommerce, speed and security',
        paragraphs: [
          'If you sell online, WooCommerce adds a shop to the same WordPress site. For UAE customers that means AED prices with 5% VAT shown clearly, card payments through a supported gateway and cash on delivery where it makes sense. For a dedicated store, see our ecommerce website development in Dubai page.',
          'Speed and security come from discipline rather than plugins. We keep plugins to the essentials, use server and page caching, compress images and serve them through a CDN. Hardening covers SSL, a firewall, two-factor login, limited admin roles, hidden file editing and daily off-site backups, with updates always tested on staging first.',
        ],
      },
      {
        heading: 'Maintenance and engagement options',
        paragraphs: [
          'A WordPress site needs regular care after launch. Core, theme and plugin updates, backups, uptime and security checks, and small content changes are the basics of a maintenance plan. We agree response times and what counts as an urgent fix before you sign.',
          'There are three common ways to work with us, each quoted in AED after a free audit:',
        ],
        bullets: [
          'A fixed-scope project for a new site, redesign or migration.',
          'A monthly developer arrangement for ongoing changes and new features.',
          'A block of hours used for fixes, updates and small improvements as they come up.',
        ],
      },
      {
        heading: 'How to choose a WordPress development company in Dubai',
        paragraphs: [
          'Ask to see how editors will update a typical page, which plugins will be installed and why, how the Arabic version will be built and tested, and who runs updates after launch. Confirm that your company will own the domain, hosting, theme code and every licence. Avoid anyone who cannot explain how they keep a site fast after the first year.',
          'It also helps to ask for a short written plan of the site before design starts: the templates, custom blocks, custom fields and plugins, and what each one does. A clear plan makes quotes comparable between suppliers and shows whether they have understood your content. If you later move to another developer, the same document makes the handover much easier.',
        ],
      },
      {
        heading: 'Our remote model, explained honestly',
        paragraphs: [
          'Billion Ecommerce Agency is a Chennai team serving Dubai and the wider UAE remotely. We have no office, address or trade licence in the UAE and do not offer in-person meetings there. Because India is 1.5 hours ahead of UAE time and the UAE weekend is Saturday and Sunday, our working days almost fully overlap, so same-day replies are realistic. If you need a WordPress development company in Dubai for walk-in meetings, a local studio will suit you better. If you want a responsive team that works on video calls and a staging site, start with a free audit.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce and digital agency for UAE businesses', href: '/uae/ecommerce-marketing-agency/' },
      { label: 'WordPress website design company', href: '/wordpress-website-development/' },
      { label: 'Web development company in the UAE', href: '/uae/web-development-company/' },
      { label: 'Ecommerce website development in Dubai', href: '/uae/ecommerce-website-development-dubai/' },
      { label: 'Website maintenance services', href: '/website-maintenance-services/' },
    ],
    faqs: [
      { q: 'Do you have an office in Dubai?', a: 'No. Billion Ecommerce Agency is a Chennai, India team serving Dubai and the wider UAE remotely. We have no UAE office, address or trade licence and do not offer in-person meetings. India is 1.5 hours ahead of UAE time, so our working days almost fully overlap and same-day replies are realistic.' },
      { q: 'What should I look for in a WordPress development company in Dubai?', a: 'Look for custom themes rather than heavy page builders, a short plugin list with reasons for each, a clear plan for Arabic and RTL, and a tested update routine. Make sure your company owns the domain, hosting, theme code and licences, and that support after launch is agreed in writing.' },
      { q: 'Can you build an Arabic and English WordPress site?', a: 'Yes. We use a multilingual plugin such as WPML or Polylang, write a dedicated RTL stylesheet, load Arabic fonts and give each language its own URLs and hreflang tags. Translation comes from your team or a professional translator, and we test every template in both directions on real phones.' },
      { q: 'Do you use page builders or custom themes?', a: 'We usually build lightweight custom themes with Gutenberg blocks and Advanced Custom Fields, because they load faster and are harder to break. If your site is small and your team already knows a page builder well, we will tell you if keeping it is the more practical choice.' },
      { q: 'Can you add WooCommerce to our WordPress site?', a: 'Yes. WooCommerce runs on the same WordPress site, with prices in AED, 5% VAT shown clearly, card payments through a supported gateway and cash on delivery where it suits your customers. Your accountant should confirm the VAT treatment of your products before launch.' },
      { q: 'How can we work with you after the site is live?', a: 'You can choose a maintenance plan for updates, backups and monitoring, a monthly developer arrangement for ongoing changes, or a block of hours for fixes and improvements as they come up. Each option is quoted in AED after a free audit, with response times agreed in writing.' },
      { q: 'How do you keep a WordPress site secure?', a: 'We keep plugins to the essentials, add SSL, a firewall, two-factor login and limited admin roles, disable file editing in the dashboard and run daily off-site backups. Core, theme and plugin updates are tested on a staging copy before they reach the live site.' },
    ],
  },
];
