import type { ServicePageData } from '../../data/types';

// London round: WordPress agency, website development company and website maintenance (location pages).
const londonBreadcrumb = [
  { label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' },
  { label: 'London', href: '/london/ecommerce-agency/' },
];

const londonAreas = ['Stratford', 'Walthamstow', 'Woodford', 'Ilford', 'Leyton', 'Canary Wharf', 'Shoreditch', 'Islington', 'the City', 'Camden'];

export const londonWebsitesPages: ServicePageData[] = [
  {
    slug: 'london/wordpress-agency',
    kind: 'location',
    market: 'UK',
    title: 'WordPress Agency London for Custom Sites | Magnus Path',
    description: 'WordPress agency in London with an office in E18: custom themes and blocks, WooCommerce shops, speed, security and consent. GBP quotes after a free audit.',
    primaryKeyword: 'WordPress agency in London',
    navLabel: 'WordPress Agency London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'WordPress and WooCommerce · East London office (E18)',
    h1: 'A WordPress Agency in London for Sites Your Team *Can Actually Edit*',
    intro: 'Magnus Path is a WordPress agency in London with an office in E18, building custom themes, Gutenberg blocks and WooCommerce shops for London businesses and agencies. You can meet us in East London to plan the work, while our Chennai team handles most of the development, so builds keep moving after the UK working day ends.',
    icon: 'website',
    facts: ['London office in E18, meetings by appointment', 'Custom blocks and WooCommerce shops', 'Project, monthly or block of hours'],
    headings: {
      pains: 'Where London WordPress sites *go wrong*',
      includes: 'What our WordPress developers in London build',
      process: 'How a London WordPress project runs, in *4 steps*',
      guide: 'Hiring a WordPress agency in London: a practical guide',
    },
    pains: [
      { title: 'A site only the original developer understands', body: 'Layouts built from dozens of plugins and shortcodes mean every new page needs a developer, and the freelancer who built it has moved on.' },
      { title: 'Slow pages on a busy commute', body: 'Most people check you on a phone, often on patchy Underground Wi-Fi or mobile data. Heavy sliders and unoptimised images lose them before the page loads.' },
      { title: 'A WooCommerce shop bolted on later', body: 'The shop was added to a brochure theme, so product pages look different from the rest of the site and checkout breaks after updates.' },
    ],
    includes: [
      { title: 'Custom themes and Gutenberg blocks', body: 'A lean block theme built around your content, with reusable blocks and patterns your team can drop into any page without breaking the design.' },
      { title: 'WooCommerce shops', body: 'Online shops with VAT-inclusive prices, card, PayPal, Klarna and Clearpay payments, Royal Mail, DPD or Evri labels, and product pages that match the rest of the site.' },
      { title: 'Speed work', body: 'Image formats, caching, fewer plugins and leaner scripts, checked against Core Web Vitals on real phones rather than only on an office laptop.' },
      { title: 'Security and hosting', body: 'Login hardening, sensible user roles, off-site backups and advice on UK or European hosting, with every account registered in your name.' },
      { title: 'Consent and accessibility basics', body: 'A cookie banner that blocks non-essential tags until visitors agree, Google Consent Mode, and testing against common WCAG checks.' },
      { title: 'White-label work for London agencies', body: 'Builds from your designs, in your repositories and project tools, under your brand, with our developers reporting to your project manager.' },
    ],
    platforms: ['WordPress', 'Gutenberg', 'ACF', 'WooCommerce', 'Elementor', 'Stripe', 'Klarna', 'Google Analytics 4', 'Google Search Console'],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'Our London office is in E18, East London, close to Woodford, Walthamstow, Ilford and Stratford. London clients can meet the team there by appointment for kick-offs, design reviews and training; most development is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.',
    },
    process: [
      { title: 'Audit and meeting', body: 'We review your current site or brief, plugins, hosting and analytics, then talk it through at our East London office or on a video call.' },
      { title: 'Scope and GBP quote', body: 'A written scope covering templates, blocks, shop features and launch date, priced as a project, a monthly developer or a block of hours.' },
      { title: 'Build on staging', body: 'Development on a staging site and in Git. You see progress each morning and feedback sent before lunch is usually picked up the same day.' },
      { title: 'Launch and handover', body: 'Redirects, forms, consent and speed checked before go-live, then a training session in London or online and a support period for fixes.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four areas a London WordPress build has to get right from day one.', after: 0, center: 'A WordPress build', branches: [
        { label: 'Editing', items: ['Custom blocks', 'Reusable patterns', 'Training for staff'] },
        { label: 'Selling', items: ['WooCommerce shop', 'UK payments and VAT'] },
        { label: 'Speed', items: ['Light theme', 'Fewer plugins', 'Tested on phones'] },
        { label: 'Safety', items: ['Hardened logins', 'Off-site backups', 'Cookie consent'] },
      ] },
      { type: 'matrix', caption: 'Which engagement fits depends on how defined the work is and whose site it is.', after: 4, cols: ['One defined job', 'Ongoing work'], rows: ['Your own site', 'Your agency’s clients'], cells: [
        { title: 'Project', body: 'Fixed scope and quote for a new site or shop' },
        { title: 'Monthly developer', body: 'A set number of days each month for your roadmap' },
        { title: 'Block of hours', body: 'Prepaid hours for one-off client jobs' },
        { title: 'White-label team', body: 'Our developers inside your agency, under your brand' },
      ] },
    ],
    guide: [
      {
        heading: 'What a WordPress agency in London should give you',
        paragraphs: [
          'A London business website has to do a lot. It is checked by prospects on the train, compared with competitors two tabs away and edited by a marketing team that wants to publish without waiting for a developer. A good WordPress agency in London builds for all three: fast pages, clear content and an editing experience your staff can use.',
          'Being able to meet in person still matters for many London teams. A kick-off at a table, with the people who will edit the site in the room, usually produces a clearer brief than a long email thread. That is why we keep an office in East London (E18) for meetings by appointment, while our Chennai team does most of the build. As a WordPress agency in London with a delivery team abroad, we can keep the meetings local and the build moving around the clock.',
        ],
      },
      {
        heading: 'Custom themes and blocks versus page builders',
        paragraphs: [
          'Most new sites we build use a custom block theme. Each section you use often, such as a hero, a case study grid, a team list or a pricing table, becomes a Gutenberg block or pattern. Editors pick from those blocks, so new pages stay on brand and the site does not slow down as it grows. ACF fields hold structured content such as office locations, events or staff profiles.',
          'Page builders such as Elementor still have a place. If your team already knows one and mostly publishes landing pages, rebuilding everything may not be worth the cost. We will say so, and keep the templates tidy and the plugin list short instead.',
        ],
      },
      {
        heading: 'WooCommerce agency in London: building a shop on WordPress',
        paragraphs: [
          'If you sell online, WooCommerce lets the shop live inside the same site as your content. That suits London brands that publish guides, lookbooks or recipes alongside products, and businesses that need trade prices, subscriptions or a bespoke checkout.',
          'A WooCommerce agency in London should set up the UK details properly rather than leaving them to plugins’ defaults:',
        ],
        bullets: [
          'Prices shown including VAT for consumers, with the right tax classes behind them',
          'Card payments with Apple Pay and Google Pay, plus PayPal, Klarna and Clearpay',
          'Royal Mail, DPD or Evri label tools so staff stop copying addresses',
          'Test orders after every update, and hosting sized for Black Friday',
        ],
      },
      {
        heading: 'Speed, security, UK GDPR consent and accessibility',
        paragraphs: [
          'Speed comes mostly from restraint: a light theme, modern image formats, caching that leaves the basket alone and as few plugins as possible. We measure Core Web Vitals on real phones, because that is where most visitors see you.',
          'Security starts with hardened logins, sensible user roles, updates tested on staging and backups stored away from your host. For privacy, we set up a consent platform that blocks non-essential tags until visitors agree and connect Google Consent Mode. We are not lawyers, so your privacy policy should be checked by your own adviser. We also test against common WCAG checks: contrast, headings, form labels, alt text and keyboard use.',
        ],
      },
      {
        heading: 'Hiring a WordPress developer in London: engagement options',
        paragraphs: [
          'Not every job needs a full project. We work in three ways, all quoted in GBP after a free audit. A project suits a new site, a redesign or a WooCommerce build with a fixed scope and launch date. A monthly developer gives you an agreed number of days each month for a roadmap of improvements. A block of hours suits occasional fixes and small features, drawn down as you need them.',
          'If you are comparing a freelance WordPress developer in London with an agency, ask who covers holidays and sick days, who reviews the code, and where the site and its logins are kept. With us, the code sits in your Git repository and every account is in your name.',
        ],
      },
      {
        heading: 'White-label WordPress development for London agencies',
        paragraphs: [
          'Many London design and marketing agencies have more WordPress work than developers. We build from your Figma files inside your repositories and project tools, follow your coding standards and report to your project manager. Your clients see your brand, not ours. Agency teams can meet us at the E18 office to agree ways of working before the first job.',
          'Because our main team is in Chennai, work continues after the London day ends. A brief sent in the afternoon is often a staging link by the next morning.',
        ],
      },
      {
        heading: 'Questions to ask any WordPress agency in London',
        paragraphs: [
          'Whoever you choose, a short list of questions will tell you a lot about how the project will go. A WordPress agency in London that builds sites to last should answer each of these clearly and in writing:',
        ],
        bullets: [
          'Will the theme be custom, a child theme or a page builder, and why for our site?',
          'How many plugins will the site use, and who keeps them updated after launch?',
          'Where is the code stored, and will the repository and hosting be in our name?',
          'How will you test speed, consent and accessibility before go-live?',
          'Who do we contact when something breaks, and how quickly will they respond?',
        ],
      },
    ],
    related: [
      { label: 'E-commerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'WordPress agency for UK custom builds', href: '/uk/wordpress-agency/' },
      { label: 'Website development company in London', href: '/london/website-development-company/' },
      { label: 'Website maintenance in London', href: '/london/website-maintenance/' },
      { label: 'WooCommerce agency for UK online shops', href: '/uk/woocommerce-agency/' },
    ],
    faqs: [
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), near Woodford and Walthamstow. You can meet the team there by appointment for kick-offs, design reviews and training. Most development is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
      { q: 'Can I hire a WordPress developer in London through you?', a: 'You can hire our WordPress developers for your London site, either as a monthly developer with set days or as a block of hours. You can meet us at our E18 office, but most of the developers themselves work from our Chennai team, which means work continues after UK hours.' },
      { q: 'Are you a WooCommerce agency in London as well?', a: 'Yes. We build and improve WooCommerce shops for London businesses, with VAT-inclusive prices, UK payment methods including Klarna and Clearpay, carrier label tools for Royal Mail, DPD or Evri, and test orders after every update. We can also move shops to WooCommerce from other platforms.' },
      { q: 'How much does a WordPress agency in London charge?', a: 'Prices depend on the number of templates, custom blocks, shop features and content migration. We do not publish fixed prices for WordPress builds. Instead, we quote in GBP after a free audit, as a fixed project, a monthly developer or a prepaid block of hours.' },
      { q: 'Do you build with Gutenberg or Elementor?', a: 'For new sites we usually recommend a custom block theme with Gutenberg blocks and ACF, because it stays lighter and easier to edit safely. If your team already works well in Elementor and mostly publishes landing pages, we can keep it and tidy the templates instead.' },
      { q: 'Do you offer white-label WordPress development for London agencies?', a: 'Yes. We build from your designs, in your repositories and project tools, under your brand, and report to your project manager. We do not contact your clients directly. Agency teams can meet us at our East London office before the first project to agree standards and ways of working.' },
      { q: 'Will our WordPress site meet UK GDPR cookie rules?', a: 'We set up a consent platform that blocks non-essential tags until visitors agree, connect Google Consent Mode and test that it works. That covers the technical side. We are not lawyers, so your privacy policy and cookie wording should be checked by your own legal adviser.' },
    ],
  },
  {
    slug: 'london/website-development-company',
    kind: 'location',
    market: 'UK',
    title: 'Website Development Company London | Magnus Path',
    description: 'Website development company in London with an East London office: small business and corporate sites on WordPress, Shopify or headless. GBP quotes after audit.',
    primaryKeyword: 'website development company in London',
    navLabel: 'Website Development Company London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Web design and development · East London office (E18)',
    h1: 'A Website Development Company in London That *Brings In Enquiries*',
    intro: 'Magnus Path is a website development company in London that designs and builds small business websites, corporate sites and online shops. We plan the site around how your customers find and contact you, meet you at our East London office in E18, and hand over a site you own outright, quoted in GBP after a free audit.',
    icon: 'website',
    facts: ['East London office in E18', 'Small business and corporate sites', 'You own the domain and hosting'],
    headings: {
      pains: 'Why many London business websites *stay quiet*',
      includes: 'Web design company in London: what we build',
      process: 'From first meeting to launch in *4 steps*',
      guide: 'Choosing a website development company in London: a buyer’s guide',
    },
    pains: [
      { title: 'Lost in a crowded city', body: 'There are thousands of firms like yours across London. A generic site with no local pages never shows up when someone nearby searches for what you do.' },
      { title: 'Enquiries that go nowhere', body: 'The contact form sends to an old inbox, there is no tap-to-call button, and nobody can tell which pages or searches bring in leads.' },
      { title: 'Locked in by a previous agency', body: 'The domain, hosting or site files are registered to the agency, so every change costs a ticket and moving away feels impossible.' },
    ],
    includes: [
      { title: 'Small business websites', body: 'Clear, fast sites for trades, clinics, consultancies, restaurants and shops, covering services, prices where you publish them, reviews and contact details.' },
      { title: 'Corporate websites', body: 'Larger sites with careers, news, investor or office sections, several editors with different permissions and a design system that keeps pages consistent.' },
      { title: 'Lead forms and call tracking', body: 'Short forms that reach the right person, tap-to-call and booking links, and goals in Google Analytics 4 so you know which pages produce enquiries.' },
      { title: 'Google Business Profile tie-in', body: 'Your profile and website set up to match, with the same name, address and phone, the right categories and links to the right pages.' },
      { title: 'Local service-area pages', body: 'Useful pages for the boroughs and areas you actually serve, with real details for each, rather than copied text with the place name swapped.' },
      { title: 'Ownership and handover', body: 'Domain, hosting, code and every login registered in your business name, plus training so your team can edit pages confidently.' },
    ],
    platforms: ['WordPress', 'Shopify', 'WooCommerce', 'Astro', 'Google Business Profile', 'Google Analytics 4', 'Google Search Console'],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'Our London office is in E18, East London, a short trip from Walthamstow, Woodford, Ilford, Stratford and Canary Wharf. You can meet the team there by appointment for workshops and reviews; most design and build work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.',
    },
    process: [
      { title: 'Meet and audit', body: 'We meet at our East London office or on a call, review your current site, Google Business Profile and competitors, and agree what the site must achieve.' },
      { title: 'Sitemap and quote', body: 'A sitemap, platform recommendation and fixed quote in GBP, with a clear list of what is included and a realistic launch date.' },
      { title: 'Content, design and build', body: 'We draft the copy with you, design mobile first and build on a staging site you can check at any time.' },
      { title: 'Launch and train', body: 'Redirects, forms, tracking and your profile link checked at go-live, then training and handover of every login.' },
    ],
    figures: [
      { type: 'venn', caption: 'How working with us runs: meetings in East London, most of the build in Chennai.', after: 0, left: { title: 'Our London office (E18)', body: 'Kick-offs, design reviews and training by appointment' }, right: { title: 'Our Chennai team', body: 'Design, build and testing that carries on after UK hours' }, overlap: 'One team, one point of contact' },
      { type: 'matrix', caption: 'WordPress, Shopify or headless: match the platform to what the site does and who edits it.', after: 2, cols: ['Content and leads', 'Selling online'], rows: ['Small team editing', 'Several editors or systems'], cells: [
        { title: 'WordPress', body: 'Easy editing, huge developer pool, needs regular updates' },
        { title: 'Shopify', body: 'Hosting and security handled, monthly plan and app fees' },
        { title: 'Headless or WP', body: 'Headless for speed and many editors, at higher build cost' },
        { title: 'Talk it through', body: 'WooCommerce or Shopify, depending on custom needs' },
      ] },
    ],
    guide: [
      {
        heading: 'What to expect from a website development company in London',
        paragraphs: [
          'Most London buyers check a business online before they call. A homeowner in Walthamstow compares three builders, an office manager in the City shortlists two IT firms, a family in Ilford looks for a dentist open on Saturdays. Your site has a few seconds to answer three questions: what do you do, can I trust you, and how do I get in touch?',
          'A website development company in London should start with those questions, then choose the design, platform and features that answer them. Ask any agency you speak to how they will turn visitors into enquiries, not just how the site will look.',
          'Content is usually the slowest part of a project. Services need clear descriptions, the team needs real photos and case studies need permission from the client. We draft the copy with you rather than leaving you to fill empty boxes, because unclear text is the most common reason a well-designed site fails to bring in work.',
        ],
      },
      {
        heading: 'Web design company in London: small business or corporate site?',
        paragraphs: [
          'A small business site is usually five to fifteen pages: services, about, reviews, contact and a few local or industry pages. It needs to be quick, clear and easy for one or two people to edit.',
          'A corporate site has more stakeholders. Expect careers and news sections, several editors with different permissions, legal and accessibility reviews, and sometimes integrations with recruitment or document systems. Any web design company in London quoting for corporate work should ask about approvals and who signs off content, because that, not the code, usually sets the timeline.',
        ],
      },
      {
        heading: 'WordPress, Shopify or headless',
        paragraphs: [
          'WordPress suits most service businesses and corporate sites. It is easy to edit, widely understood and there is a large pool of developers if you change agencies, but it needs regular updates. Shopify suits businesses whose site is mainly a shop: hosting and security are handled for you in exchange for a monthly plan and app fees. A headless build, with a CMS behind a static front end, suits sites that need high speed and many editors, at a higher upfront cost.',
          'If an agency recommends one platform for every client, ask why. The right answer depends on what the site does and who will look after it. Running costs matter too: plugin licences, app subscriptions, hosting and maintenance all add up over the life of the site, so ask for a yearly estimate as well as the build price.',
        ],
      },
      {
        heading: 'Lead forms, Google Business Profile and local service-area pages',
        paragraphs: [
          'Searches like “accountant near me” show a map pack before ordinary results, and that pack is driven by Google Business Profile. Your website and profile should match: the same name, address and phone, categories that mirror your service pages, and a profile link to the most relevant page.',
          'If you serve several boroughs, give each a useful page: the jobs you have done there, travel times, parking or access notes and reviews from local customers. Copying one page and swapping the place name rarely helps. Keep lead forms short, send them to a shared inbox, and track them in Google Analytics 4. Ask only for what you need to reply, such as name, contact details and a short message, because every extra field means fewer people finish the form.',
        ],
      },
      {
        heading: 'Web design in East London: meeting at our E18 office',
        paragraphs: [
          'Our London office is in E18, near South Woodford, so it is a short trip for businesses in Walthamstow, Leyton, Ilford, Stratford and Canary Wharf. If you are looking for web design in East London, you can come in for the kick-off and design review, or we can meet you near your own premises when the project needs it.',
          'Most design and build work is done by our Chennai team. In practice that means feedback sent before UK lunchtime is usually picked up the same day, and changes often appear on staging by the next morning.',
        ],
      },
      {
        heading: 'Who should own the domain, hosting and site',
        paragraphs: [
          'You should. The domain, hosting account, code and every admin login should be registered in your business name from day one, with the agency added as a user. Ask to see this in writing before you sign.',
          'A good website development company in London will be relaxed about this, because it wants you to stay for the service, not because leaving is difficult. We hand over every login at launch and document how the site is set up.',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        paragraphs: [
          'Quotes from London agencies can look very different, mostly because they include different things. Before you compare prices, ask each website development company in London to confirm the following in writing:',
        ],
        bullets: [
          'Who writes the page copy, and how many rounds of changes are included?',
          'Are local service-area pages and Google Business Profile setup part of the price?',
          'Which platform do you recommend for us, and what will it cost to run each year?',
          'How are enquiries tracked, and who receives form submissions?',
          'What support is included after launch, and what does ongoing maintenance involve?',
          'Will the domain, hosting, code and logins be registered in our name?',
        ],
      },
    ],
    related: [
      { label: 'E-commerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'WordPress agency in London', href: '/london/wordpress-agency/' },
      { label: 'Website maintenance in London', href: '/london/website-maintenance/' },
      { label: 'WordPress agency for UK businesses', href: '/uk/wordpress-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
    ],
    faqs: [
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), near South Woodford. You can meet the team there by appointment for kick-offs, design reviews and training. Most design and build work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
      { q: 'How do I choose a web design company in London?', a: 'Look at sites they have built for businesses like yours, ask how they will turn visitors into enquiries and why they recommend a platform. Check what the quote includes, such as copywriting, local pages and training, and make sure the domain, hosting and logins will be in your name.' },
      { q: 'How much does a website cost in London?', a: 'It depends on the number of pages, custom features, content and integrations, so we do not publish fixed prices. We quote in GBP after a free audit, with a written list of what is included. Hosting, domain renewals and any paid plugin or app licences are shown separately.' },
      { q: 'Do you offer web design in East London?', a: 'Yes. Our office is in E18, so businesses in Walthamstow, Woodford, Leyton, Ilford, Stratford and Canary Wharf can easily meet us in person by appointment. We work with clients across the rest of London too, with meetings at our office or on video calls.' },
      { q: 'Should my business website use WordPress or Shopify?', a: 'WordPress suits service businesses and content-heavy sites that want easy editing and full control. Shopify suits businesses that mainly sell products online and prefer hosting and security handled for them. A headless build suits larger sites with many editors that need high speed. We recommend one after the audit.' },
      { q: 'Will you connect our website to Google Business Profile?', a: 'Yes. We make sure your profile and website use the same name, address and phone number, choose categories that match your service pages, link the profile to the right page and add location details to the site. For several service areas, we plan useful local pages too.' },
      { q: 'Who owns the website after launch?', a: 'You do. The domain, hosting, code and every admin login are registered in your business name, and we hand them over at launch with notes on how the site is set up. If you later move to another agency or bring the work in-house, you can do so freely.' },
    ],
  },
  {
    slug: 'london/website-maintenance',
    kind: 'location',
    market: 'UK',
    title: 'Website Maintenance London: Monthly Plans | Magnus Path',
    description: 'Website maintenance in London: tested updates on staging, off-site backups, monitoring, security and checkout tests. East London office, GBP quotes after audit.',
    primaryKeyword: 'website maintenance in London',
    navLabel: 'Website Maintenance London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'WordPress and WooCommerce care · East London office (E18)',
    h1: 'Website Maintenance in London, *Done Properly* Every Month',
    intro: 'Magnus Path offers website maintenance in London for WordPress sites and WooCommerce shops, with updates tested on staging, off-site backups, monitoring, security checks and small changes each month. You can meet us at our East London office in E18, while our Chennai team does the day-to-day work, often before your UK morning begins.',
    icon: 'website',
    facts: ['East London office in E18', 'Updates tested on staging first', 'Monthly plans quoted in GBP'],
    headings: {
      pains: 'Signs your website needs *proper care*',
      includes: 'What our website support in London covers',
      process: 'Starting a maintenance plan in *4 steps*',
      guide: 'Website maintenance in London: what to expect and what to ask',
    },
    pains: [
      { title: 'Nobody owns the updates', body: 'Plugins wait for months because nobody wants to break anything, until an old one is exploited and the site starts redirecting visitors elsewhere.' },
      { title: 'Problems found by customers', body: 'The contact form stopped sending, or checkout failed after an update, and you only found out when a customer phoned to complain.' },
      { title: 'Small changes stuck in a queue', body: 'A new price, a team photo or an event page takes weeks because the original developer is busy with bigger projects.' },
    ],
    includes: [
      { title: 'Updates on staging first', body: 'WordPress core, theme and plugin updates applied to a staging copy, checked, then pushed live with a fresh backup taken just before.' },
      { title: 'Off-site backups', body: 'Regular backups stored away from your host, with test restores so you know they work when you need them.' },
      { title: 'Uptime and security monitoring', body: 'Uptime checks, malware scans, login protection and alerts for unexpected file changes, followed up when something looks wrong.' },
      { title: 'Small changes each month', body: 'Text, image and price updates, new pages from existing blocks and minor layout fixes, within the time agreed in your plan.' },
      { title: 'Form and checkout tests', body: 'Contact forms tested after updates and, for WooCommerce maintenance, test orders through each payment method and order emails checked.' },
      { title: 'Emergency fixes', body: 'Help when the site is down, hacked or checkout fails: we contain the problem, restore from backup or clean the site, and close the hole.' },
    ],
    platforms: ['WordPress', 'WooCommerce', 'Shopify', 'Cloudflare', 'Google Search Console', 'Google Analytics 4'],
    local: {
      city: 'London',
      areas: londonAreas,
      note: 'Our London office is in E18, East London, near Woodford, Walthamstow, Ilford and Stratford. Clients can meet the team there by appointment; day-to-day maintenance is done by our Chennai team, whose working day starts before the UK morning, and requests sent before UK lunchtime are usually handled the same day.',
    },
    process: [
      { title: 'Free health check', body: 'We review hosting, plugins, theme, backups, forms and security, then go through the findings at our East London office or on a call.' },
      { title: 'Plan and GBP quote', body: 'We agree the plan, response times by severity, the monthly change allowance and who holds which logins, then confirm the price in GBP.' },
      { title: 'Onboarding', body: 'Staging set up, off-site backups and monitoring switched on, and anything urgent from the health check fixed first.' },
      { title: 'Monthly care and report', body: 'Updates, checks and your requests each month, with a plain-English report on what changed and anything that needs a decision.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'What a monthly website maintenance plan should cover.', after: 0, center: 'Monthly care plan', branches: [
        { label: 'Updates', items: ['Core, theme, plugins', 'Tested on staging'] },
        { label: 'Safety', items: ['Off-site backups', 'Malware scans', 'Login protection'] },
        { label: 'Watching', items: ['Uptime alerts', 'Form and checkout tests'] },
        { label: 'Changes', items: ['Text and images', 'New pages from blocks', 'Monthly report'] },
      ] },
      { type: 'steps', caption: 'How a single round of updates reaches your live site without surprises.', after: 1, steps: [
        { title: 'Back up', body: 'Fresh off-site copy of files and database' },
        { title: 'Update staging', body: 'Core, theme and plugins on a copy' },
        { title: 'Test', body: 'Key pages, forms and a test order' },
        { title: 'Push live', body: 'Same updates applied to the live site' },
        { title: 'Check again', body: 'Live forms and checkout re-tested' },
      ] },
    ],
    guide: [
      {
        heading: 'What website maintenance in London should include',
        paragraphs: [
          'A website is never finished. WordPress, its theme and its plugins release updates every few weeks, hosting changes, and your own content goes out of date. Website maintenance in London, or anywhere, is the routine work that keeps a site safe, quick and accurate without waiting for something to break.',
          'A sensible monthly plan covers five things: tested updates, backups stored away from your host, uptime and security monitoring, a set allowance of small changes, and a report that tells you in plain English what was done and what needs a decision.',
          'Good website maintenance in London also means someone who knows your site. When the same team looks after it every month, they spot slow pages, failing forms or odd traffic patterns long before they turn into lost enquiries or orders.',
        ],
      },
      {
        heading: 'WordPress maintenance in London: why staging comes first',
        paragraphs: [
          'Most WordPress problems after an update come from conflicts between plugins and the theme. Clicking “update all” on the live site is how a contact form quietly stops sending on a Friday afternoon. We apply updates to a staging copy first, check the key pages and forms, then push the same updates live with a backup taken just before.',
          'Some updates need a decision, such as a plugin that has been abandoned or a major version that changes how something works. Those go in your report with a recommendation, rather than being applied without asking. Backups are part of the same routine: a fresh copy before every update, regular scheduled copies stored off-site, and a test restore so you know a backup actually works.',
        ],
      },
      {
        heading: 'Response times and emergency fixes',
        paragraphs: [
          'Emergency fixes follow a set routine. If a site is hacked, speed and the order of steps both matter. We take a copy for evidence, put up a holding page if visitors are at risk, change every password and key, then remove malicious files and database entries or restore a clean backup. The last step is the most important: finding how the attacker got in, often an old plugin, and closing it.',
          'Afterwards we watch the site more closely for a few weeks and check Google Search Console for security warnings, requesting a review if Google has flagged the site.',
          'Response times should depend on severity, and your plan should say so in writing. We sort requests into three levels:',
        ],
        bullets: [
          'Critical: the site is down, hacked or checkout is failing. Worked on first, as soon as we see the alert or your message',
          'Important: a broken form, a page error or a plugin warning. Usually fixed the same or next working day',
          'Routine: text, image and page changes. Scheduled within the agreed turnaround, often the same day if sent before UK lunchtime',
        ],
      },
      {
        heading: 'WooCommerce maintenance: extra checks for shops',
        paragraphs: [
          'A shop has more to lose from a bad update. WooCommerce maintenance adds test orders through each payment method after every round of updates, checks on order emails, carrier label tools and stock syncing, and care with database updates on large order tables.',
          'We also plan around your busy weeks. Major updates are avoided in the run-up to Black Friday, Christmas and Boxing Day, and hosting is reviewed before traffic peaks rather than during them.',
        ],
      },
      {
        heading: 'Website support in London: in person when it helps',
        paragraphs: [
          'Most maintenance happens quietly in the background, but some conversations go better face to face: a yearly review of the site, a plan for a redesign or a walk-through of a security incident. London clients can meet us by appointment at our office in E18, East London.',
          'The day-to-day website support in London clients receive is done by our Chennai team. Their working day starts before the UK morning, so updates and overnight alerts are often dealt with before your office opens. Requests sent before UK lunchtime are usually handled the same day.',
        ],
      },
      {
        heading: 'Agencies reselling website maintenance',
        paragraphs: [
          'Many London agencies build sites but do not want to staff a support desk. We can maintain your clients’ sites under your brand, working inside your ticketing or project tools and reporting to your account manager. You set the price and keep the client relationship; we never contact your clients directly.',
          'Agency teams can meet us at the E18 office to agree response times, reporting formats and how handovers work before the first site moves across.',
        ],
      },
      {
        heading: 'Comparing website maintenance providers in London',
        paragraphs: [
          'Plans that look similar on paper can be very different in practice. Before you choose a provider for website maintenance in London, ask each one:',
        ],
        bullets: [
          'Are updates tested on staging, or applied straight to the live site?',
          'Where are backups stored, how often are they taken, and when were they last restored as a test?',
          'What counts as an emergency, and how do out-of-hours alerts reach the team?',
          'How many small changes are included each month, and what happens to unused time?',
          'Who holds the domain, hosting and admin logins while you look after the site?',
          'What does the monthly report include, and who explains it?',
        ],
      },
    ],
    related: [
      { label: 'E-commerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'WordPress support and maintenance plans in the UK', href: '/uk/wordpress-support/' },
      { label: 'WordPress agency in London', href: '/london/wordpress-agency/' },
      { label: 'Website development company in London', href: '/london/website-development-company/' },
      { label: 'Website maintenance services and care plans', href: '/website-maintenance-services/' },
    ],
    faqs: [
      { q: 'Do you have an office in London?', a: 'Yes. Our London office is in East London (E18), near Woodford and Walthamstow. You can meet the team there by appointment for reviews and planning. Day-to-day maintenance is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
      { q: 'What is included in website maintenance in London?', a: 'Our plans include WordPress core, theme and plugin updates tested on staging, off-site backups with test restores, uptime and security monitoring, a monthly allowance of small changes, form tests and, for shops, test orders. Each month you receive a plain-English report on what changed and what needs a decision.' },
      { q: 'How much does website maintenance cost in London?', a: 'It depends on the size of the site, whether it takes payments and how many changes you need each month. We do not publish fixed GBP prices; we quote after a free health check, so a small brochure site does not pay for the checks a busy shop needs.' },
      { q: 'Do you offer WordPress maintenance in London?', a: 'Yes. WordPress maintenance is most of our support work. We test updates on staging before they go live, keep backups away from your host, harden logins, scan for malware and fix plugin or theme conflicts. If a plugin has been abandoned, we recommend a replacement in your monthly report.' },
      { q: 'Do you offer WooCommerce maintenance?', a: 'Yes. WooCommerce maintenance adds test orders through each payment method after updates, checks on order emails, carrier label tools and stock syncing, and care with database updates. We avoid major changes in the run-up to Black Friday and Christmas and review hosting before your busiest weeks.' },
      { q: 'How quickly do you fix an emergency?', a: 'Critical problems, such as a site that is down, hacked or unable to take payments, go to the front of the queue as soon as we see the alert or your message. We contain the problem, restore from backup or clean the site, then find and close the cause.' },
      { q: 'Can our agency resell your website maintenance?', a: 'Yes. We maintain your clients’ sites under your brand, inside your ticketing or project tools, and report to your account manager. You set the price and keep the relationship. London agencies can meet us at our E18 office to agree response times and processes first.' },
    ],
  },
];
