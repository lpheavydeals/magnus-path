import type { ServicePageData } from '../../data/types';

// US round 2: business websites (maintenance + WordPress developers).
export const usWebsitesPages: ServicePageData[] = [
  {
    slug: 'us/website-maintenance-services',
    kind: 'global',
    market: 'US',
    twin: 'website-maintenance-services',
    title: 'Website Maintenance Services for US Businesses',
    description: 'Website maintenance services for US businesses, stores and agencies: tested updates, off-site backups, monitoring and overnight fixes. Quoted in USD.',
    primaryKeyword: 'website maintenance services',
    navLabel: 'Website Maintenance (US)',
    breadcrumb: [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }],
    eyebrow: 'For US businesses, online stores and agencies · WordPress · WooCommerce · Shopify',
    h1: 'Website Maintenance Services That Get Done *While You Sleep*',
    intro: 'Billion Ecommerce Agency provides website maintenance services for US small and mid-sized businesses, online stores and agencies. Each month we test updates on staging, keep off-site backups, monitor uptime and security, check speed and make your small content changes. We are a Chennai, India team working remotely, so most requests are finished by your next morning. Plans are quoted in USD after a free audit.',
    icon: 'website',
    facts: ['Updates tested on staging first', 'Overnight turnaround, US time', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Why US websites *break quietly* between redesigns',
      includes: 'What our monthly website care plans include',
      process: 'How website support starts in *4 steps*',
      guide: 'Website maintenance services: what a US business should expect and how to compare plans',
    },
    pains: [
      { title: 'Updates nobody wants to click', body: 'WordPress, plugins and themes all ask for updates, but the last one broke the header or the checkout. So updates pile up, and known vulnerabilities stay open on a live site.' },
      { title: 'Customers find the problems first', body: 'A contact form that stopped sending leads, a checkout error or an expired SSL warning usually reaches you through an annoyed customer email, days or weeks after it started.' },
      { title: 'Small changes stuck in a queue', body: 'Swapping a banner, editing a policy page or adding a product feature turns into a quote request and a two-week wait, so the site slowly drifts away from the business.' },
    ],
    includes: [
      { title: 'Updates tested on staging', body: 'WordPress core, plugin and theme updates applied to a staging copy first, checked on key pages, forms and checkout, then pushed live with a fresh backup in place.' },
      { title: 'Off-site backups', body: 'Scheduled backups of files and database stored away from your web host, with periodic test restores so you know a backup actually brings the site back.' },
      { title: 'Uptime and security monitoring', body: 'Around-the-clock uptime checks, malware and vulnerability scans, login hardening and alerts. If a site is infected, we help clean it up and close the hole that let it in.' },
      { title: 'Speed checks', body: 'Monthly mobile speed and Core Web Vitals checks, with image, caching and script fixes when a new plugin or app starts slowing pages down.' },
      { title: 'Small content changes', body: 'Text, image, banner, product and page edits within the hours included in your plan, sent by email or a shared ticket board and usually done overnight.' },
      { title: 'Form and checkout testing', body: 'Regular test submissions on contact and quote forms, plus test orders on WooCommerce or Shopify checkouts, so a silent failure is caught by us rather than a customer.' },
    ],
    platforms: ['WordPress', 'WooCommerce', 'Shopify', 'Cloudflare', 'WP-CLI', 'Git', 'UptimeRobot', 'Google Search Console', 'GA4'],
    process: [
      { title: 'Free site audit', body: 'We review your hosting, plugins or apps, backups, forms, speed and security, then walk you through the findings on a short call in your morning.' },
      { title: 'Plan and USD price', body: 'You pick a Basic, Business or Store plan, or get a custom scope with included hours and response times, priced in USD. Logins and ownership are documented so you stay in control.' },
      { title: 'Stabilize first', body: 'We set up staging, off-site backups and monitoring, then clear urgent issues such as outdated plugins, broken forms or SSL errors before routine work starts.' },
      { title: 'Monthly care and report', body: 'Updates, checks and content changes run on a schedule, mostly while the US sleeps, with a plain-English report each month on what we did and found.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'What a monthly website care plan should cover.', after: 0, center: 'Monthly website care', branches: [
        { label: 'Safe', items: ['Tested updates', 'Off-site backups', 'Security scans'] },
        { label: 'Online', items: ['Uptime alerts', 'SSL and domain checks'] },
        { label: 'Working', items: ['Form test submissions', 'Test orders at checkout', 'Mobile speed checks'] },
        { label: 'Up to date', items: ['Small content edits', 'Plain-English report'] },
      ] },
      { type: 'steps', caption: 'The safe routine for every WordPress update round.', after: 1, steps: [
        { title: 'Back up', body: 'Fresh copy of files and database' },
        { title: 'Copy to staging', body: 'A private clone of the live site' },
        { title: 'Update there', body: 'Core, plugins and theme' },
        { title: 'Check key pages', body: 'Layouts, forms and the admin screen' },
        { title: 'Repeat on live', body: 'Same updates, with the backup ready' },
      ] },
    ],
    guide: [
      {
        heading: 'What website maintenance services should include each month',
        paragraphs: [
          'A website is software that sits on the open internet, so it needs regular care after launch. Good website maintenance services keep a site secure, working and accurate without the owner having to think about it. When the work is done well, nothing dramatic happens: forms keep sending leads, orders keep coming through and pages load quickly on phones.',
          'Whether a provider calls it website support, a website care plan or a maintenance retainer, a solid monthly plan should cover at least these items:',
        ],
        bullets: [
          'Core, plugin and theme updates, tested on a staging copy before they go live',
          'Off-site backups of files and database, with occasional test restores',
          'Uptime and security monitoring, plus help cleaning up malware if it gets in',
          'Speed and Core Web Vitals checks on mobile',
          'Small content changes within a set number of hours',
          'Form and checkout testing so silent failures are caught early',
          'A short monthly report in plain English',
        ],
      },
      {
        heading: 'WordPress maintenance services: why updates need staging',
        paragraphs: [
          'Most sites that need hands-on care run on WordPress, and that is where the risk sits. A typical business site has a theme, a page builder or block library, and a dozen or more plugins from different developers. Each one ships updates on its own schedule. Most updates are harmless, but one bad combination can break a layout, a form or the admin screen.',
          'Proper WordPress maintenance services handle this with a routine. Take a backup, copy the site to staging, run the updates there, check the important pages and forms, then repeat the updates on the live site. Clicking "update all" on production and hoping for the best is the habit that gives WordPress its fragile reputation. Security patches should not wait for the monthly cycle either; urgent fixes go out as soon as they are tested.',
        ],
      },
      {
        heading: 'WooCommerce maintenance and Shopify maintenance are different jobs',
        paragraphs: [
          'WooCommerce maintenance adds a layer of risk because the site takes payments. WooCommerce itself, payment gateways, shipping and tax plugins and the theme all have to agree. Updates must be tested with real checkout flows on staging, and the live database needs care because orders keep arriving while you work. We avoid overwriting live orders when moving changes from staging, and we place test orders after every update round.',
          'Shopify maintenance looks different. Shopify handles hosting, core updates and server security, so there is no plugin patching in the WordPress sense. The work moves to apps and themes: removing leftover app code that slows pages, updating the theme without losing customizations, checking checkout and discount behavior, and keeping product and collection content tidy. A plan built for WordPress does not map neatly onto a Shopify store, so ask any provider how their scope changes by platform.',
        ],
      },
      {
        heading: 'How to compare website care plans',
        paragraphs: [
          'Plans are hard to compare because providers bundle different things under the same name. These questions make the differences clear:',
        ],
        bullets: [
          'How many hours of changes are included each month, and what happens to unused hours?',
          'What are the response times for urgent issues, such as a site that is down, compared with routine requests?',
          'Are updates tested on staging, or applied straight to the live site?',
          'Where are backups stored, how long are they kept and when was a restore last tested?',
          'Who owns the hosting, domain, theme licences and admin logins? It should be you.',
          'What does the monthly report actually show?',
        ],
      },
      {
        heading: 'Red flags in website support providers',
        paragraphs: [
          'Be careful with any provider that keeps the hosting or domain in their own account and will not hand over access. The same goes for backups that are only stored on the same server as the site, because a hacked or failed server takes both down together. Vague promises of unlimited changes usually mean slow responses once real work arrives.',
          'Other warning signs include no staging process, no written list of what is covered, a report that is just an automated plugin list, and contracts that make it hard to leave with your files and logins. A good website maintenance services provider makes it easy for you to take the site elsewhere, because they expect to keep you by doing the work well.',
        ],
      },
      {
        heading: 'Overnight turnaround and maintenance for agencies',
        paragraphs: [
          'Our team is in Chennai, India. India is 9.5 hours ahead of US Eastern time in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in the US Eastern morning, which is our evening, for calls. Most work happens while the US sleeps, so a change request sent in your afternoon is usually done when you open your laptop. We do not offer US-hours phone support, and we say so up front.',
          'That rhythm suits US digital agencies too. Many agencies build sites well but find monthly maintenance hard to staff profitably. We can run website maintenance services under your brand, using your ticketing tool and report template, while you keep the client relationship. Each site is quoted in USD after a free audit, based on its platform, how often it changes and the hours of work included.',
        ],
      },
    ],
    related: [
      { label: 'US e-commerce marketing agency', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Website maintenance services (global)', href: '/website-maintenance-services/' },
      { label: 'White-label WordPress development for US agencies', href: '/us/white-label-wordpress-development/' },
      { label: 'WooCommerce agency for US stores', href: '/us/woocommerce-agency/' },
      { label: 'Hire a WordPress developer', href: '/us/hire-wordpress-developer/' },
    ],
    faqs: [
      { q: 'What do website maintenance services include?', a: 'A typical monthly plan covers core, plugin and theme updates tested on staging, off-site backups, uptime and security monitoring, malware clean-up help, speed checks, small content changes within set hours, form and checkout testing, and a monthly report. The exact mix depends on your platform and how often your site changes.' },
      { q: 'What is included in WordPress maintenance services?', a: 'WordPress maintenance services focus on safe updates. We back up the site, run core, plugin and theme updates on a staging copy, check key pages and forms, then apply them live. Plans also include security scans, login hardening, off-site backups, uptime alerts, speed checks and help if malware gets in.' },
      { q: 'How is WooCommerce maintenance different from regular WordPress maintenance?', a: 'WooCommerce maintenance adds payments, shipping, tax and order data to the picture. Updates are tested with real checkout flows on staging, care is taken not to overwrite live orders when deploying, and test orders are placed after each update round. Payment gateway and extension compatibility gets checked before anything changes on the live store.' },
      { q: 'Do Shopify stores need website maintenance?', a: 'Yes, but a different kind. Shopify handles hosting and core security, so the work shifts to apps and themes: removing leftover app code, updating the theme without losing customizations, testing checkout and discounts, and keeping speed in check as apps are added. There is less patching and more housekeeping than on WordPress.' },
      { q: 'How fast do you respond to website support requests?', a: 'Because our team is in India, most requests sent during your US workday are handled overnight and ready by your next morning. Urgent issues such as a site outage get picked up first. We agree response times in writing before you start, and we do not promise live support during US business hours.' },
      { q: 'Do you have a US office?', a: 'No. Billion Ecommerce Agency is a Chennai, India team that works with US clients remotely. We do not have a US address or phone line. Calls happen in the US Eastern morning, which is our evening, and most maintenance work is done while you sleep. Contracts and quotes are in USD.' },
      { q: 'Can agencies resell your website maintenance under their own brand?', a: 'Yes. We can work under your agency brand, inside your ticketing tool, with reports on your template, and we do not contact your clients directly unless you ask. You keep the client relationship and billing. Each site is reviewed in a free audit before we confirm the USD plan.' },
      { q: 'Who owns the logins and hosting while you maintain my site?', a: 'You do. Your hosting, domain, theme licences and admin accounts should stay in your name. We work through our own named user accounts, which you can remove at any time. If you ever leave, you keep everything, including recent backups, so another team can take over without delay.' },
    ],
  },
  {
    slug: 'us/hire-wordpress-developer',
    kind: 'global',
    market: 'US',
    twin: 'wordpress-website-development',
    title: 'Hire WordPress Developer Help for US Teams',
    description: 'Hire a WordPress developer for custom themes, Gutenberg blocks, ACF, plugins and speed fixes. Project, dedicated or hourly work from a remote team, in USD.',
    primaryKeyword: 'hire WordPress developer',
    navLabel: 'Hire a WordPress Developer (US)',
    breadcrumb: [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }],
    eyebrow: 'For US businesses and agencies · Custom themes · Blocks · Plugins',
    h1: 'Hire a WordPress Developer Who *Ships Clean Code*',
    intro: 'Need to hire WordPress developer help without adding a full-time salary? Billion Ecommerce Agency gives US businesses and agencies experienced WordPress developers for custom themes, Gutenberg blocks, plugins, ACF builds and speed fixes. Work by project, with a dedicated monthly developer or from a block of hours. We are a Chennai, India team working remotely, quoted in USD after a free review.',
    icon: 'website',
    facts: ['Project, dedicated or hourly', 'Git and staging on every job', 'Quoted in USD after a free review'],
    headings: {
      pains: 'Why hiring WordPress help often *goes wrong*',
      includes: 'What our WordPress developers build and fix',
      process: 'From brief to deployed code in *4 steps*',
      guide: 'How to hire a WordPress developer: models, skills and what to check first',
    },
    pains: [
      { title: 'Freelancers who disappear', body: 'A solo freelancer builds half the site, then takes a bigger job. Nobody else knows the code, the logins live in their inbox and your launch date slides.' },
      { title: 'Page builders standing in for development', body: 'Some "developers" stack a heavy builder and dozens of plugins instead of writing code. The site looks fine in a demo, then loads slowly and breaks on updates.' },
      { title: 'Edits made straight on the live site', body: 'Without version control or staging, every change is a risk. One bad edit to functions.php takes the site down, with no clean way to roll back.' },
    ],
    includes: [
      { title: 'Custom themes and block themes', body: 'Lean themes built from your design, using theme.json and block patterns, with no multipurpose theme carrying hundreds of options you will never use.' },
      { title: 'Custom Gutenberg blocks', body: 'Blocks for your repeat sections, built with React or ACF Blocks, so editors can build pages safely without touching code or breaking layouts.' },
      { title: 'Plugin development and fixes', body: 'Custom plugins for business logic, integrations with CRMs and APIs, and fixes or replacements for plugins that are abandoned, slow or conflicting.' },
      { title: 'ACF and custom post types', body: 'Advanced Custom Fields, custom post types and taxonomies for listings, case studies, team pages or resources, structured so content stays easy to manage.' },
      { title: 'Speed and Core Web Vitals', body: 'Script audits, image and font handling, caching and database cleanup, measured against field data so pages get faster for real visitors on phones.' },
      { title: 'Security and WooCommerce work', body: 'Hardening, update routines and malware cleanup help, plus WooCommerce customizations when your site also sells online.' },
    ],
    platforms: ['WordPress', 'Gutenberg', 'Advanced Custom Fields', 'WooCommerce', 'PHP', 'React', 'Git', 'GitHub', 'WP-CLI', 'Local'],
    process: [
      { title: 'Free review and call', body: 'Share your brief or existing site. We review the code, plugins and hosting, then talk it through on a call in your morning, our evening.' },
      { title: 'Pick a model and USD quote', body: 'We recommend a fixed project, a dedicated monthly developer or a block of hours, with scope and timeline written down and quoted in USD.' },
      { title: 'Build on Git and staging', body: 'Code lives in your repository. Work happens on branches and a staging site, with progress shared overnight your time for review.' },
      { title: 'Deploy and hand over', body: 'Approved changes are deployed with a backup in place. You get documentation, access to all code and a short walkthrough for your editors.' },
    ],
    figures: [
      { type: 'matrix', caption: 'Which way to hire a WordPress developer, based on your workload.', after: 1, cols: ['Light workload', 'Heavy workload'], rows: ['One defined job', 'Ongoing requests'], cells: [
        { title: 'Small fixed quote', body: 'A single fix or feature, scoped and priced up front' },
        { title: 'Fixed project', body: 'New theme, migration or custom plugin on a set timeline' },
        { title: 'Block of hours', body: 'Draw down hours for fixes and small features' },
        { title: 'Monthly developer', body: 'One developer each month who learns your codebase' },
      ] },
      { type: 'venn', caption: 'Custom blocks and ACF fields together give editors freedom without breaking layouts.', after: 2, left: { title: 'Custom Gutenberg blocks', body: 'Your repeat sections, styled through theme.json' }, right: { title: 'ACF and post types', body: 'Structured fields for locations, team or case studies' }, overlap: 'Pages editors build safely' },
    ],
    guide: [
      {
        heading: 'When to hire a WordPress developer instead of using a theme',
        paragraphs: [
          'Plenty of small sites run happily on a good theme and a handful of plugins. You need to hire a WordPress developer when the site has to do something specific: a custom content structure, an integration with your CRM or ERP, editing tools your marketing team can use without breaking layouts, or speed that a bloated theme cannot deliver.',
          'A developer is also the right call when an existing site has grown messy. Years of plugins, builder add-ons and quick fixes leave code nobody wants to touch. A capable developer can audit it, keep what works and rebuild the fragile parts properly, without starting from zero.',
          'Speed is another common trigger. If Core Web Vitals in Search Console show slow pages on mobile, the cause is usually theme and plugin weight rather than hosting alone, and fixing it takes code changes.',
        ],
      },
      {
        heading: 'Three ways to engage a WordPress developer for hire',
        paragraphs: [
          'How you engage a WordPress developer for hire matters as much as who you pick. There are three common models, and each suits a different situation:',
        ],
        bullets: [
          'Fixed project: a defined scope such as a new theme, a migration or a custom plugin, with a set price and timeline. Best when you know exactly what you need.',
          'Dedicated WordPress developer: one developer assigned to you each month who learns your codebase and works through your backlog. Best for agencies and businesses with steady work.',
          'Block of hours: a bank of hours used as needed for fixes and small features. Best for ongoing support without a full monthly commitment.',
        ],
      },
      {
        heading: 'Custom themes, Gutenberg blocks and ACF',
        paragraphs: [
          'Modern WordPress development centers on the block editor. A good developer builds a lean theme around theme.json, so colors, type and spacing are controlled in one place, then adds custom Gutenberg blocks and patterns for the sections your team uses most. Editors get flexibility inside guardrails, and the front end ships only the code each page needs.',
          'Advanced Custom Fields still plays a big part. ACF Blocks let developers build custom blocks quickly in PHP, and ACF field groups with custom post types give structure to content like locations, products, events or case studies. Ask any candidate how they decide between native React blocks and ACF Blocks; a thoughtful answer says a lot about their experience.',
        ],
      },
      {
        heading: 'Choosing a WordPress development company or a freelancer',
        paragraphs: [
          'A freelancer can be a great fit for a small, well-defined job. The risk is continuity: holidays, illness or a bigger client can stall your project, and the knowledge sits with one person. A WordPress development company brings a team, code review and cover when someone is away, usually with more process around testing and deployment.',
          'Whichever you choose, the working setup should be professional. Code goes into a Git repository you own. Changes are made on branches and tested on a staging site before deployment. Plugins are chosen deliberately, kept to what the site needs and updated on a routine. Speed is measured with Core Web Vitals field data, not just a lab score taken once at launch.',
          'Security belongs in the same routine. Developers should give every user the lowest role they need, turn on two-factor login for admins, sanitize and escape all input and output in custom code, and keep a written list of plugins with the reason each one exists. When a WordPress site sells through WooCommerce, the developer must also test checkout, payment and shipping changes on staging with real test orders, because a small template edit can quietly stop sales. These habits cost little during the build and save expensive emergency fixes later.',
        ],
      },
      {
        heading: 'What to check before you hire WordPress developer help',
        paragraphs: [
          'Before you commit, ask for real evidence rather than a polished portfolio page. These checks separate developers who write code from those who assemble plugins:',
        ],
        bullets: [
          'Ask to see code, such as a custom block or plugin, and how it is structured',
          'Confirm they use Git, staging and backups on every job',
          'Ask how they handle security: user roles, updates, input sanitizing and escaping',
          'Check that you will own the repository, hosting, domain and all licences',
          'Ask how they test WooCommerce changes if your site sells online',
          'Agree how work is reported and how quickly they respond',
        ],
      },
      {
        heading: 'Working with a remote team across time zones',
        paragraphs: [
          'Our developers work from Chennai, India. India is 9.5 hours ahead of US Eastern time in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. That gives a short overlap in the US Eastern morning, our evening, for calls and reviews. Most development happens while the US sleeps, so you send feedback in the afternoon and wake up to updated work on staging.',
          'This handoff works best with clear tickets and a shared staging site, which is how good teams work anyway. If you are an agency, we can work under your brand as part of your delivery team. Every engagement is quoted in USD after a free review of your brief or site.',
        ],
      },
    ],
    related: [
      { label: 'US e-commerce marketing agency', href: '/us/ecommerce-marketing-agency/' },
      { label: 'WordPress website development (global)', href: '/wordpress-website-development/' },
      { label: 'White-label WordPress development for US agencies', href: '/us/white-label-wordpress-development/' },
      { label: 'WooCommerce agency for US stores', href: '/us/woocommerce-agency/' },
      { label: 'Website maintenance services for US businesses', href: '/us/website-maintenance-services/' },
    ],
    faqs: [
      { q: 'How do I hire a WordPress developer for my business?', a: 'Start with a short brief: what the site needs to do, any designs, your hosting and deadline. Then review code samples, confirm the developer uses Git and staging, and agree who owns the code and logins. Choose a fixed project, a dedicated monthly developer or a block of hours based on how steady your work is.' },
      { q: 'What does a WordPress development company do that a freelancer does not?', a: 'A WordPress development company provides a team rather than one person, so there is code review, cover during holidays and continuity if someone leaves. It usually brings set processes for testing, deployment and security. A freelancer can be a good fit for small, defined jobs, but larger or ongoing work benefits from a team.' },
      { q: 'What is a dedicated WordPress developer?', a: 'A dedicated WordPress developer is assigned to your account each month and works through your backlog. They learn your codebase, plugins and brand, so requests move faster over time. It suits agencies and businesses with steady development work. The scope, hours and reporting are agreed up front and quoted in USD.' },
      { q: 'Can you build custom Gutenberg blocks and work with ACF?', a: 'Yes. We build custom blocks with React or ACF Blocks depending on the job, create block patterns for repeat sections and set up theme.json for consistent styling. We also build ACF field groups, custom post types and taxonomies for structured content such as locations, resources or team pages.' },
      { q: 'Do you work on WooCommerce sites too?', a: 'Yes, when a WordPress site also sells online. We customize WooCommerce templates, checkout fields, shipping and payment integrations, and test every change with real orders on staging. For larger store builds or ongoing store growth, our WooCommerce agency page covers that work in more detail.' },
      { q: 'How does the time difference work when I hire a WordPress developer in India?', a: 'India is 9.5 to 10.5 hours ahead of US Eastern time. We overlap briefly in your morning for calls. Most coding happens while you sleep, so feedback sent in your afternoon is usually addressed by the next morning. We do not offer live support during US business hours.' },
      { q: 'Do you have a US office?', a: 'No. Billion Ecommerce Agency is a Chennai, India team working remotely with US clients. We do not have a US address or phone number. We hold calls in the US Eastern morning, share work through Git and staging sites, and quote every engagement in USD after a free review.' },
      { q: 'Who owns the code you write?', a: 'You do. Code is committed to a Git repository in your account, and your hosting, domain and licences stay in your name. We work through named user accounts you can remove at any time. At handover you get documentation, so any other developer can pick the site up later.' },
    ],
  },
];
