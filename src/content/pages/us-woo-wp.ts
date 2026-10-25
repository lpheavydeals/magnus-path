import type { ServicePageData } from '../../data/types';

const US_HUB: { label: string; href: string } = { label: 'United States', href: '/us/ecommerce-marketing-agency/' };

export const usWooWpPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. US WooCommerce agency
  {
    slug: 'us/woocommerce-agency',
    kind: 'global',
    market: 'US',
    twin: 'woocommerce-development',
    title: 'WooCommerce Agency for US Online Stores',
    description: 'WooCommerce agency for US stores: builds, custom plugins, subscriptions, B2B pricing, Stripe and USPS/UPS setup and speed work, quoted in USD after an audit.',
    primaryKeyword: 'WooCommerce agency',
    navLabel: 'WooCommerce Agency',
    breadcrumb: [US_HUB],
    eyebrow: 'For US online stores · WooCommerce builds · Plugins · Migrations',
    h1: 'WooCommerce Agency for US Stores That *Want Full Control*',
    intro: 'Billion Ecommerce Agency is a WooCommerce agency for US online stores that already run on WooCommerce or plan to move to it. Our Chennai developers build stores, write custom plugins, set up subscriptions and wholesale pricing, connect Stripe, PayPal and US carriers, and fix slow checkouts. Work happens during your night, and every project is quoted in USD after a free audit.',
    icon: 'website',
    facts: ['Builds, plugins and migrations', 'Stripe, PayPal and US carriers', 'Quoted in USD after an audit'],
    headings: {
      pains: 'Why US store owners look for WooCommerce developers',
      includes: 'What our WooCommerce development company delivers',
      process: 'How a WooCommerce project runs in *4 steps*',
      guide: 'WooCommerce for US stores: a practical buyer’s guide',
    },
    pains: [
      { title: 'A checkout that slows down as orders grow', body: 'Order lookups crawl, the admin times out during a sale and abandoned carts rise because the cart page takes seconds to update.' },
      { title: 'Plugins that fight each other', body: 'A subscription plugin, a wholesale plugin and a tax plugin each change the cart in their own way, and one update breaks the checkout.' },
      { title: 'No developer who owns the problem', body: 'The freelancer who built the store has moved on, nobody documented the custom code, and every fix starts with a week of guesswork.' },
    ],
    includes: [
      { title: 'Store builds and redesigns', body: 'Block or classic themes built around your catalog, with fast product pages, clean category filters and a checkout tested on real phones.' },
      { title: 'Custom plugins and extensions', body: 'Plugins written for your rules, such as custom product options, order routing or ERP and CRM sync, with code kept in your Git repository.' },
      { title: 'Subscriptions and B2B pricing', body: 'Recurring orders, prepaid plans, customer-role pricing, minimum order quantities, quote requests and net terms for wholesale buyers.' },
      { title: 'Payments, tax and shipping', body: 'Stripe, PayPal or WooPayments, an automated sales tax service, and USPS, UPS and FedEx label and live-rate integrations.' },
      { title: 'Speed, hosting and HPOS', body: 'Managed WooCommerce hosting, object caching, image and script cleanup, and a safe move to high-performance order storage.' },
      { title: 'Migrations in and out', body: 'Moves from Shopify or Magento to WooCommerce, or from WooCommerce to Shopify, with products, customers, orders and 301 redirects.' },
    ],
    platforms: ['WooCommerce', 'WordPress', 'Stripe', 'PayPal', 'WooPayments', 'USPS', 'UPS', 'FedEx', 'Cloudflare', 'GitHub'],
    process: [
      { title: 'Free store audit', body: 'We review your store’s speed, plugins, checkout and order data, then walk you through the findings on a video call in your morning.' },
      { title: 'Written scope and USD quote', body: 'A plan listing each feature, plugin decision and migration step, with a fixed USD quote and a clear timeline.' },
      { title: 'Build on staging', body: 'We work on a staging copy during your night and post progress, test orders and questions for you to review each morning.' },
      { title: 'Launch and handover', body: 'A planned go-live, live order checks, documentation and full code access. Ongoing care is available on a monthly maintenance plan.' },
    ],
    figures: [
      { type: 'matrix', caption: 'WooCommerce or Shopify: a quick way to see which fits your store.', after: 1, cols: ['Want platform handled', 'Want full control'], rows: ['Simple catalog, checkout', 'Custom pricing or checkout'], cells: [
        { title: 'Shopify', body: 'Hosting, security and updates included in the plan' },
        { title: 'Either works', body: 'WooCommerce gives ownership; budget for upkeep' },
        { title: 'Check limits first', body: 'Shopify limits checkout changes outside Shopify Plus' },
        { title: 'WooCommerce', body: 'Wholesale rules, subscriptions and custom checkout logic' },
      ] },
      { type: 'steps', caption: 'How we move a busy store to HPOS without risking orders.', after: 4, steps: [
        { title: 'Check plugins', body: 'Confirm each one supports HPOS on staging' },
        { title: 'Sync both modes', body: 'Old and new order storage run side by side' },
        { title: 'Switch over', body: 'HPOS becomes the main order storage' },
        { title: 'Speed up the rest', body: 'Object caching, a CDN and better hosting' },
      ] },
    ],
    guide: [
      {
        heading: 'What a WooCommerce agency should do for a US store',
        paragraphs: [
          'WooCommerce is free, open-source and runs inside WordPress, so you own the code, the data and the hosting. That freedom is also the catch. Nobody updates the store for you, and every plugin you add becomes something to maintain.',
          'A good WooCommerce agency handles both halves of the job: building features that fit how you sell, and keeping the store fast and stable as orders grow. That means fewer, better-chosen plugins, custom code where a plugin would be a workaround, and a staging site so nothing is tested on live customers.',
          'Hiring a WooCommerce agency also gives you continuity. One team knows why each plugin is there, where the custom code lives and how the last update was tested. When something breaks on a Saturday sale, you are not starting from zero with a stranger who has never seen your store.',
        ],
      },
      {
        heading: 'WooCommerce vs Shopify: an honest comparison',
        paragraphs: [
          'We build on both platforms, so we have no reason to push one. Shopify suits brands that want hosting, security and updates handled for a monthly fee. WooCommerce suits brands that need unusual pricing rules, deep content, custom checkout logic or full ownership of their data.',
        ],
        bullets: [
          'Running costs: WooCommerce needs good hosting and some paid extensions; Shopify needs a plan and paid apps',
          'Control: WooCommerce lets you change almost anything; Shopify limits checkout changes outside Shopify Plus',
          'Maintenance: WooCommerce needs regular updates and testing; Shopify handles the platform for you',
          'Content: WordPress is still one of the strongest systems for blogs, guides and landing pages',
        ],
      },
      {
        heading: 'Subscriptions, wholesale pricing and custom plugins',
        paragraphs: [
          'Subscriptions and B2B features are where WooCommerce earns its place, and where stores most often break. Recurring orders, prepaid plans and skip-a-month options need a subscription extension that works with your payment gateway and renews cleanly. Wholesale buyers need role-based prices, minimum quantities, tax-exempt accounts and sometimes net terms or quote requests.',
          'When several plugins try to change the same cart, conflicts follow. A WooCommerce agency should decide which jobs belong to a trusted extension and which need a small custom plugin built on WooCommerce hooks. Custom code lives in your repository, is documented, and is tested against each WooCommerce update on staging.',
        ],
      },
      {
        heading: 'Payments, sales tax and shipping for US orders',
        paragraphs: [
          'Most US stores run Stripe or WooPayments for cards, Apple Pay and Google Pay, with PayPal alongside for shoppers who prefer it. We set these up, test refunds and disputes, and make sure only one plugin controls each payment method.',
          'US sales tax varies by state and changes often, so we connect an automated tax service instead of maintaining rate tables by hand. We configure it; we are not tax advisers, so your accountant should confirm where you need to register and collect. For shipping, we integrate USPS, UPS and FedEx live rates and label printing, so your team ships from the WooCommerce admin instead of copying addresses.',
        ],
      },
      {
        heading: 'Hosting, speed and HPOS',
        paragraphs: [
          'Slow WooCommerce stores usually come from cheap shared hosting, too many plugins and order data stored the old way. High-performance order storage, or HPOS, moves orders into their own database tables, which makes order lookups and the admin much faster for busy stores.',
          'Switching to HPOS is safe only when every plugin supports it, so we check compatibility on staging, run both storage modes in sync, then switch over. We pair that with managed WooCommerce hosting, server-side object caching and a CDN, so the cart and checkout stay quick during holiday sales.',
        ],
      },
      {
        heading: 'Migrating to or from WooCommerce',
        paragraphs: [
          'We move stores from Shopify or Magento to WooCommerce, and from WooCommerce to Shopify when that is the better fit. Products, variations, customers and order history move across, and every old URL gets a 301 redirect so search traffic is protected.',
          'Customer passwords and saved cards usually cannot move between platforms, so we plan a reset email and a short notice for repeat buyers. We run the move on staging first and compare order counts and totals before going live.',
        ],
      },
      {
        heading: 'How to choose a WooCommerce development company',
        paragraphs: [
          'Whether you hire a local studio or offshore WooCommerce developers, ask for specifics. WooCommerce experts should talk about hooks, HPOS, staging and plugin conflicts, not just themes. Start with a small paid task, such as a speed fix or a custom feature, and judge the code before you commit to a bigger build. The right WooCommerce agency will welcome that test.',
          'We are a Chennai, India team with no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. We have a short overlap in your Eastern morning for calls, and most work is done while you sleep. We do not offer US-hours support.',
        ],
        bullets: [
          'Will all code live in my Git repository?',
          'Which plugins would you remove, and why?',
          'How do you test updates before they reach the live store?',
          'Who handles maintenance after launch, and how are bugs reported?',
        ],
      },
    ],
    related: [
      { label: 'WooCommerce development company (global page)', href: '/woocommerce-development/' },
      { label: 'Website maintenance services for US stores', href: '/us/website-maintenance-services/' },
      { label: 'Hire a WordPress developer', href: '/us/hire-wordpress-developer/' },
      { label: 'Shopify Plus agency for US brands', href: '/us/shopify-plus-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'What does a WooCommerce agency do?', a: 'A WooCommerce agency builds, extends and maintains online stores that run on WooCommerce and WordPress. That covers themes, custom plugins, payment and shipping integrations, subscriptions, wholesale pricing, speed work and migrations. The best ones also cut plugin bloat and test every update on staging before it reaches your store.' },
      { q: 'How do I choose a WooCommerce development company?', a: 'Ask to see code, not just screenshots, and check that it will live in your own repository. Good WooCommerce developers explain HPOS, hooks and plugin conflicts clearly. Start with a small paid task, agree a written scope, and make sure maintenance after launch is covered before you sign.' },
      { q: 'Should I use WooCommerce or Shopify?', a: 'Choose Shopify if you want the platform managed for you and your needs are standard. Choose WooCommerce if you need custom pricing, checkout logic, heavy content or full data ownership, and are willing to pay for good hosting and maintenance. We build on both and will tell you honestly which fits.' },
      { q: 'Can you set up US sales tax in WooCommerce?', a: 'Yes. We connect an automated sales tax service so rates are calculated at checkout by address, and we test totals for the states you collect in. We are not tax advisers, so your accountant should confirm where you have nexus and need to register before we switch collection on.' },
      { q: 'What is HPOS and should my store use it?', a: 'HPOS, or high-performance order storage, keeps WooCommerce orders in dedicated database tables instead of the general posts table. It makes busy stores faster and more reliable. Most stores should use it, but only after confirming every plugin is compatible, which we check on staging before switching.' },
      { q: 'Do you have a US office?', a: 'No. Billion Ecommerce Agency is a team based in Chennai, India, working with US stores remotely. India is 9.5 to 10.5 hours ahead of US Eastern, so we book calls in your morning and do most work while you sleep. We do not offer US-hours support, and we say so upfront.' },
      { q: 'How much does a WooCommerce project cost?', a: 'We quote every project in USD after a free audit, because a speed fix, a custom plugin and a full Magento migration need very different effort. The written quote lists features, plugins, migration steps and timelines. Hosting, premium extensions and payment fees are billed by their own providers.' },
    ],
  },

  // ───────────────────────────────────────────── 2. US white label WordPress development
  {
    slug: 'us/white-label-wordpress-development',
    kind: 'global',
    market: 'US',
    title: 'White Label WordPress Development for Agencies',
    description: 'White label WordPress development for US agencies: Figma to Gutenberg or ACF builds, QA, NDAs, no client contact and overnight turnaround. Quoted in USD.',
    primaryKeyword: 'white label WordPress development',
    navLabel: 'White Label WordPress Development',
    breadcrumb: [US_HUB],
    eyebrow: 'For US agencies · Figma to WordPress · Gutenberg · ACF',
    h1: 'White Label WordPress Development *Your Clients Never See*',
    intro: 'Billion Ecommerce Agency provides white label WordPress development for US agencies that need more build capacity without more payroll. Our Chennai team turns your Figma or Adobe XD files into Gutenberg or ACF sites, runs QA on staging and hands everything over under your brand. We sign an NDA, never contact your clients, and quote each project in USD.',
    icon: 'website',
    facts: ['Figma and XD to WordPress', 'NDA and no client contact', 'Feedback turned around overnight'],
    headings: {
      pains: 'Why agencies outsource WordPress development',
      includes: 'What our white label WordPress agency work covers',
      process: 'From brief to handover in *4 steps*',
      guide: 'White label WordPress development: how the workflow runs and how to vet a provider',
    },
    pains: [
      { title: 'Designs signed off, builds stuck in a queue', body: 'Your designers finish on time, then approved files wait two weeks for a developer, and the launch date your account manager promised slips.' },
      { title: 'Sites clients break in a week', body: 'Loose page-builder layouts let clients drag elements anywhere, so the homepage looks wrong by the first content update.' },
      { title: 'Handovers with no paper trail', body: 'No staging history, no plugin list and no login records, so your team cannot support the site once the contractor leaves.' },
    ],
    includes: [
      { title: 'Figma and Adobe XD to WordPress', body: 'Layouts built close to the design at every breakpoint, with spacing, type scales and colors moved into theme.json so they stay consistent.' },
      { title: 'Custom Gutenberg blocks', body: 'Blocks built for your design system, with locked layouts where needed, so clients edit text and images without breaking the page.' },
      { title: 'ACF field groups and options', body: 'Advanced Custom Fields for team pages, case studies, locations and global settings, with clear labels your clients understand.' },
      { title: 'Elementor when your agency uses it', body: 'If your team standardizes on Elementor, we build with your kit, global styles and templates instead of fighting your process.' },
      { title: 'QA and accessibility basics', body: 'A written checklist covering browsers, devices, forms, speed, redirects, alt text, contrast, headings and keyboard navigation.' },
      { title: 'Unbranded handover', body: 'Code in your Git repository, an editing guide in your template, and every login, license and plugin listed in your agency’s name.' },
    ],
    platforms: ['WordPress', 'Gutenberg', 'ACF', 'Elementor', 'Figma', 'Adobe XD', 'WooCommerce', 'GitHub', 'WP-CLI'],
    process: [
      { title: 'Brief and NDA', body: 'You share designs, sitemap and deadline. We sign a mutual NDA, confirm the build approach and send a USD quote.' },
      { title: 'Build on staging', body: 'We build on your staging server or ours, committing to your repository and posting progress each morning your time.' },
      { title: 'QA against the checklist', body: 'Every page is tested against a written QA list before you see it, and your feedback is fixed overnight.' },
      { title: 'Handover under your brand', body: 'We deploy to production with you, hand over credentials and docs in your template, and stay available for launch fixes.' },
    ],
    figures: [
      { type: 'venn', caption: 'How the work splits when you outsource WordPress builds.', after: 1, left: { title: 'Your agency', body: 'Strategy, design and the client relationship stay with you' }, right: { title: 'Our developers', body: 'Blocks and templates built on staging while you sleep' }, overlap: 'Sites launched under your name' },
      { type: 'mindmap', caption: 'What every white label build is checked for before you see it.', after: 3, center: 'QA before your review', branches: [
        { label: 'Browsers', items: ['Chrome, Safari, Firefox, Edge', 'iOS and Android phones'] },
        { label: 'Forms', items: ['Submit and notify', 'Reach the right inbox or CRM'] },
        { label: 'Accessibility', items: ['Alt text and heading order', 'Contrast and keyboard use'] },
        { label: 'Launch checks', items: ['Core Web Vitals', 'Redirects and sitemap', 'No trace of our name'] },
      ] },
    ],
    guide: [
      {
        heading: 'How the white label WordPress workflow runs',
        paragraphs: [
          'Most agencies want the same thing from white label WordPress development: send a brief in the afternoon and see progress the next morning. Our workflow is built around that. You share the approved design, sitemap, content and any must-use plugins. We confirm questions in one batch, agree the build approach, then start on staging.',
          'Every build moves through four checkpoints: brief, staging, QA and handover. You review on staging, not on screenshots, and leave comments in your project tool. When you sign off, we deploy to production with you and hand over everything under your agency’s name.',
          'Good white label WordPress development is predictable. You should know which day a template will be ready, who is building it and what still needs a decision from you. We post a short progress note each morning your time, with staging links, open questions and anything blocked, so your account manager can update the client without chasing anyone.',
        ],
      },
      {
        heading: 'When to outsource WordPress development',
        paragraphs: [
          'WordPress outsourcing makes sense when design capacity is ahead of build capacity, when one large project would stall everything else, or when clients keep asking for custom blocks your team does not have time to code. It is also a sensible way to test demand before hiring a full-time developer.',
          'It makes less sense if your briefs change daily or nobody on your side can review work each morning. An outside team works best with clear designs and one decision-maker.',
          'Many agencies start small: one landing page, a set of custom blocks or a site refresh. Once the workflow and quality are proven, they move whole builds across, while keeping strategy, design and client management in-house.',
        ],
      },
      {
        heading: 'From Figma or Adobe XD to Gutenberg, ACF or Elementor',
        paragraphs: [
          'We pick the build method with you, based on how your clients edit. For most new sites we build custom Gutenberg blocks with design tokens in theme.json, so colors, fonts and spacing match the Figma file and stay consistent. ACF handles structured content such as team members, locations and case studies.',
          'If your agency already runs Elementor, we use it, with your global kit and saved templates, and we keep add-on plugins to a minimum. What we avoid is mixing builders on one site, which leaves your support team with two systems to learn.',
        ],
      },
      {
        heading: 'The QA checklist every build passes',
        paragraphs: [
          'A white label build reflects on your agency, so QA happens before you see a staging link, not after. Our checklist is written down and shared with you, and you can add your own agency checks to it.',
        ],
        bullets: [
          'Latest Chrome, Safari, Firefox and Edge on desktop, plus iOS and Android phones',
          'Forms submit, send notifications and land in the right inbox or CRM',
          'Accessibility basics: alt text, heading order, color contrast, focus states and keyboard navigation',
          'Core Web Vitals checked on key templates, with images compressed and lazy-loaded',
          'Redirects, meta titles, XML sitemap and search indexing settings confirmed',
          'No references to Billion Ecommerce Agency in code, comments, footers or admin screens',
        ],
      },
      {
        heading: 'Confidentiality, client contact and code ownership',
        paragraphs: [
          'We sign a mutual NDA before opening project files, and our agreement says we will not contact or work directly for your clients. If a client needs a technical call, we join as part of your team. Code lives in your repository from the first commit, and premium plugin licenses are bought in your agency’s name or your client’s, so nothing is tied to us.',
          'Handover is part of the build, not an afterthought. You receive a plugin list with versions and license owners, a short editing guide in your template, notes on any custom blocks, and a record of what was tested. That paper trail is what lets your own team, or any future developer, support the site with confidence after launch.',
        ],
      },
      {
        heading: 'Overnight turnaround and the time difference',
        paragraphs: [
          'We are a Chennai, India team with no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, and 12.5 to 13.5 hours ahead of Pacific. The overlap is short: your Eastern morning is our evening, which is when we hold calls.',
          'For outsourced WordPress work, that gap is useful. Feedback you leave by the end of your day is usually fixed by your next morning, so review rounds move fast. We do not offer US-hours support, and launch days are planned ahead so someone is online when it matters.',
        ],
      },
      {
        heading: 'How to vet a white label WordPress provider',
        paragraphs: [
          'Before you hand over a client site, give any provider a small, paid test, such as one complex template from a real design. Check how close the build is to the file, how the blocks behave in the editor and how clearly questions are written. White label WordPress development is quoted per project in USD after a free scoping call, and ongoing support can move to a monthly maintenance plan.',
        ],
        bullets: [
          'Do you build custom blocks, or only page-builder layouts?',
          'Can I see your written QA checklist before we start?',
          'Will code and licenses be in my agency’s name from day one?',
          'Are the NDA and no-client-contact terms in the contract?',
        ],
      },
    ],
    related: [
      { label: 'White label web development for US agencies', href: '/us/white-label-web-development/' },
      { label: 'Hire a WordPress developer', href: '/us/hire-wordpress-developer/' },
      { label: 'White label SEO services for US agencies', href: '/us/white-label-seo/' },
      { label: 'Website maintenance services', href: '/us/website-maintenance-services/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'What is white label WordPress development?', a: 'White label WordPress development is WordPress design-to-code work done by an outside team and delivered by an agency under its own brand. The agency keeps the client, the design and the invoice. The development team builds on staging, passes QA and hands over unbranded code, with no contact with the end client.' },
      { q: 'Why outsource WordPress development instead of hiring?', a: 'Outsourcing WordPress development gives you build capacity when projects arrive, without a full salary between projects. It works well for overflow, custom block work and tight deadlines. Hiring makes more sense once you have steady, predictable demand and someone in-house to manage a developer day to day.' },
      { q: 'Do you build with Gutenberg, ACF or Elementor?', a: 'All three. For new sites we usually recommend custom Gutenberg blocks with ACF for structured content, because clients can edit safely and pages stay fast. If your agency already standardizes on Elementor, we build with your kit and templates so your support team does not have to learn a new system.' },
      { q: 'Will my clients know you built their site?', a: 'No. We sign a mutual NDA, never contact your clients, and remove any reference to us from code, comments, footers and admin screens. Documentation is delivered in your template. If a client wants a technical call, we join as part of your team under your agency’s name.' },
      { q: 'How fast is your turnaround on feedback?', a: 'Feedback you leave by the end of your US day is usually fixed by your next morning, because we work while you sleep. India is 9.5 to 10.5 hours ahead of US Eastern. Larger changes are scheduled in the project plan, and launch days are agreed in advance.' },
      { q: 'Do you have a US office?', a: 'No. We are a team based in Chennai, India, working with US agencies remotely. Calls happen in your Eastern morning, which is our evening, and daily communication runs through Slack, Teams or your project tool. We do not offer US-hours support, and we say that before any work starts.' },
      { q: 'Who owns the code, plugins and licenses?', a: 'Your agency or your client does. Code is committed to your Git repository from the first day, premium plugin licenses are bought in your name, and all logins are handed over at launch. If you stop working with us, you have everything you need to continue with another developer.' },
    ],
  },
];
