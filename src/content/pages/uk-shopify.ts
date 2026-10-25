import type { ServicePageData } from '../../data/types';

const ukBreadcrumb = [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }];

export const ukShopifyPages: ServicePageData[] = [
  {
    slug: 'uk/shopify-agency',
    kind: 'global',
    market: 'UK',
    twin: 'shopify-development',
    title: 'Shopify Agency UK: Store Builds and Redesigns',
    description: 'Shopify agency for UK brands: store builds, redesigns and theme work with VAT-inclusive pricing, Markets for EU and Ireland, Klarna and Royal Mail. GBP quotes.',
    primaryKeyword: 'Shopify agency',
    navLabel: 'Shopify Agency (UK)',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'For UK brands · Store builds · Redesigns · Theme work',
    h1: 'Shopify Agency for UK Brands, Built for *British Shoppers*',
    intro: 'Billion Ecommerce Agency is a Shopify agency for UK brands that brief us in their morning and review finished work on by mid-afternoon. We build and redesign Shopify stores with VAT-inclusive pricing, UK delivery options, Klarna or Clearpay and Shopify Markets for Ireland and the EU. We have a London office, most build work is done by our Chennai team, and we quote in GBP after a free audit.',
    icon: 'shopify',
    facts: ['VAT-inclusive pricing set up properly', 'Markets for UK, Ireland and the EU', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'Why UK Shopify stores *lose orders* they should win',
      includes: 'What our Shopify experts build for UK stores',
      process: 'From audit to launch in *4 steps*',
      guide: 'Choosing a Shopify agency in the UK: builds, redesigns and the local details that matter',
    },
    pains: [
      { title: 'A theme built for somewhere else', body: 'Many themes and freelancers default to US habits: prices without VAT, “sneakers” in the copy and shipping promises that do not match Royal Mail or Evri reality.' },
      { title: 'Delivery and returns hidden until checkout', body: 'UK shoppers want to know the delivery cost, cut-off time and returns policy before they reach the basket. When that information is missing, carts are abandoned at the last step.' },
      { title: 'Selling to Ireland and the EU as an afterthought', body: 'Since Brexit, EU orders bring duties, VAT and slower delivery. Stores that show UK prices to Irish or French shoppers create surprise charges and refunds.' },
    ],
    includes: [
      { title: 'New Shopify store builds', body: 'Online Store 2.0 builds on a premium or custom theme, designed mobile first around your best-selling products, with collection, product and landing page templates you can edit yourself.' },
      { title: 'Redesigns and replatforming', body: 'Redesigns of tired Shopify themes and moves from WooCommerce or other platforms, with 301 redirects, product data migration and checks that organic traffic is not lost.' },
      { title: 'VAT, GBP and UK copy', body: 'VAT-inclusive price display, tax settings, GBP formatting, British English throughout and UK sizing, so the store reads as if a UK team wrote it.' },
      { title: 'Payments and delivery', body: 'Shopify Payments with Apple Pay and Google Pay, Klarna, Clearpay and PayPal, plus Royal Mail, Evri or DPD rates, cut-off messages and a clear returns page.' },
      { title: 'Shopify Markets for Ireland and the EU', body: 'Euro pricing, duties and import taxes at checkout where suitable, localised domains or subfolders, and delivery promises that reflect real cross-border transit times.' },
      { title: 'Consent, tracking and peak readiness', body: 'A cookie banner that respects UK GDPR, Consent Mode and clean purchase events, then speed and checkout testing before Black Friday and Boxing Day.' },
    ],
    platforms: ['Shopify', 'Shopify Payments', 'Shopify Markets', 'Klarna', 'Clearpay', 'PayPal', 'Royal Mail Click & Drop', 'Klaviyo', 'GA4'],
    process: [
      { title: 'Free audit and video call', body: 'We review your current store or plans, apps and analytics, then talk through what we found on a call in your UK morning.' },
      { title: 'Scope and GBP quote', body: 'A written scope listing pages, integrations, migration work and launch date, with a fixed quote in GBP. Nothing starts until you approve it.' },
      { title: 'Design and build', body: 'Designs using your real products, then development in an unpublished theme. You review progress each morning and send feedback before lunch.' },
      { title: 'Launch and aftercare', body: 'Test orders, redirects and tracking checks before go-live, followed by a support period for fixes and training for your team.' },
    ],
    figures: [
      { type: 'matrix', caption: 'New build or redesign: a quick way to decide.', after: 1, cols: ['Theme is sound', 'Old or patched theme'], rows: ['Conversion is weak', 'Store converts well'], cells: [
        { title: 'Focused redesign', body: 'Rework home, collection, product and basket pages' },
        { title: 'Rebuild', body: 'Move to a modern Online Store 2.0 theme' },
        { title: 'Refine', body: 'Small improvements; no big project needed' },
        { title: 'Plan a rebuild', body: 'Old code costs more to patch over time' },
      ] },
      { type: 'mindmap', caption: 'What a UK checkout needs before shoppers trust it.', after: 2, center: 'A UK checkout', branches: [
        { label: 'VAT', items: ['VAT-inclusive prices', 'Zero-rated items set up'] },
        { label: 'Cards, wallets', items: ['Shopify Payments', 'Apple Pay, Google Pay'] },
        { label: 'Other options', items: ['Klarna or Clearpay', 'PayPal'] },
        { label: 'Back office', items: ['Refund steps per method', 'Only methods people use'] },
      ] },
    ],
    guide: [
      {
        heading: 'What a Shopify agency should handle for a UK store',
        paragraphs: [
          'Search for “Shopify agency UK” and you will find hundreds of options, from London studios to solo freelancers. Most can install a theme. Fewer think about the details that decide whether a British shopper trusts the store enough to pay: prices that include VAT, delivery costs shown early, a returns policy written in plain English, and payment methods people already use.',
          'A good agency treats those details as part of the build, not as a launch-week checklist. The design should be shaped around your top products and the questions buyers ask about them, and the store should be easy for your own team to update after the agency has gone.',
        ],
      },
      {
        heading: 'New build or redesign: how to decide',
        paragraphs: [
          'If your store is on an older vintage theme, carries code from apps you removed years ago or cannot use Online Store 2.0 sections, a rebuild on a modern theme is usually cheaper over time than patching. If the theme is sound but conversion is weak, a focused redesign of the home, collection, product and basket pages often achieves more for less.',
          'Ask any agency to explain which of the two they recommend and why. A redesign proposal should name the pages changing, the apps being removed and how organic rankings will be protected. If you are moving from WooCommerce or another platform, insist on a redirect map before launch.',
          'Whichever route you take, a good UK Shopify agency will also leave you with documentation: which apps do what, where custom code lives, how to add a new collection or landing page, and who to call if something breaks. Without that, the next developer starts from scratch, and you pay twice to learn the same store.',
        ],
      },
      {
        heading: 'VAT, payments and the UK checkout',
        paragraphs: [
          'UK consumers expect the price on the product page to be the price they pay, apart from delivery. Shopify supports VAT-inclusive pricing, but the tax settings, product tax overrides and invoice details need setting up correctly, especially for zero-rated items such as some children’s clothing or food.',
          'At checkout, Shopify Payments covers cards, Apple Pay and Google Pay. Many UK brands add Klarna or Clearpay for buy now, pay later, and PayPal for shoppers who prefer it. Each option adds a little complexity to refunds and reconciliation, so choose the ones your customers actually ask for.',
        ],
      },
      {
        heading: 'Delivery, returns and Shopify Markets for Ireland and the EU',
        paragraphs: [
          'Delivery promises are a conversion lever in the UK. Shoppers compare Royal Mail Tracked 48, Evri and DPD next-day options and notice cut-off times. Showing “order by 2pm for next working day dispatch” on the product page, with costs and a free-delivery threshold, removes doubt before the basket.',
          'Selling to Ireland and the EU is different after Brexit. Shopify Markets lets you show euro prices, collect duties and import taxes at checkout where appropriate, and use a localised domain or subfolder. We set this up and explain the options, but your accountant should confirm the VAT position, including whether IOSS applies.',
        ],
        bullets: [
          'Show delivery cost and cut-off time on product pages, not only at checkout.',
          'Write a returns page that states the window, who pays postage and how refunds work.',
          'Test EU checkout with real addresses to confirm duties and currency display.',
        ],
      },
      {
        heading: 'UK GDPR, cookie consent and Black Friday readiness',
        paragraphs: [
          'Marketing pixels and analytics need to respect what shoppers agree to under UK GDPR and the cookie rules. In practice that means a proper consent banner, Google Consent Mode and tags that fire only after consent. We configure and test this, but we are not lawyers, so your privacy policy should be checked by a UK adviser.',
          'Peak season deserves its own plan. Before Black Friday and Boxing Day we remove slow apps, test discount logic, check stock and delivery messages, and run test orders on mobile, because a broken discount code at 7am on Black Friday is expensive to fix in a hurry.',
        ],
      },
      {
        heading: 'Working with Shopify experts in Chennai from the UK',
        paragraphs: [
          'We have a London office where you can meet us by appointment, but most build work is done by our Chennai team, working with UK brands over video calls, a shared project board and a chat channel. India is 4.5 hours ahead of British Summer Time and 5.5 hours ahead in winter, so our working day overlaps your morning and early afternoon. Feedback sent before lunch is usually acted on the same day.',
          'Compared with a Shopify development agency in the UK, you get the same platform skills at a lower day rate. You can meet us in London, but most day-to-day contact happens online. If you are weighing up a UK-based Shopify agency against a remote team, ask both the same questions:',
        ],
        bullets: [
          'Who will design and develop the store, and can I speak to them?',
          'Will you work in an unpublished theme and a Git repository I own?',
          'How will VAT, delivery and EU selling be set up?',
          'What support is included after launch, and for how long?',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce Meta ads agency (UK)', href: '/uk/ecommerce-meta-ads-agency/' },
      { label: 'Ecommerce PPC agency (UK)', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Shopify developer for UK brands and agencies', href: '/uk/shopify-developer/' },
      { label: 'Shopify Plus agency for UK retailers', href: '/uk/shopify-plus-agency/' },
      { label: 'Ecommerce SEO agency for UK stores', href: '/uk/ecommerce-seo-agency/' },
      { label: 'Free Shopify and e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Are you a Shopify agency based in the UK?', a: 'Yes. We have a London office where you can meet the team by appointment, and most build work is done by our Chennai, India team. We meet over video calls or in London, in your morning or early afternoon, share progress on a project board, and you have a named contact throughout the project.' },
      { q: 'How much does a Shopify store build cost for a UK brand?', a: 'We quote in GBP after a free audit, because cost depends on the theme, number of templates, integrations, product migration and whether you sell to Ireland or the EU. You receive a written scope with a fixed price before any work starts. Shopify fees and paid apps are separate.' },
      { q: 'Can you set up VAT-inclusive pricing on Shopify?', a: 'Yes. We configure Shopify to show prices including VAT, set tax overrides for zero-rated or reduced-rate products where needed, and check that order confirmations and invoices show the right details. Your accountant should confirm the VAT treatment of your products.' },
      { q: 'Do you set up Shopify Markets for Ireland and the EU?', a: 'Yes. We set up euro pricing, duties and import taxes at checkout where suitable, and a localised domain or subfolder for each market. We also adjust delivery messages for cross-border transit times, so Irish and EU shoppers are not promised UK delivery speeds.' },
      { q: 'Which payment and delivery options can you add?', a: 'Shopify Payments with cards, Apple Pay and Google Pay, plus Klarna, Clearpay and PayPal. For delivery, we set up Royal Mail, Evri or DPD rates and services, cut-off time messages, free-delivery thresholds and tracking pages that match how you actually dispatch orders.' },
      { q: 'How long does a Shopify build or redesign take?', a: 'A redesign of an existing store on a premium theme usually takes a few weeks. A larger build with custom templates, migration and Markets takes longer. Most delays come from content and feedback, so we agree review dates at the start and share progress daily.' },
      { q: 'Can you get our store ready for Black Friday?', a: 'Yes. We review apps and speed, test discount codes and bundles, check stock and delivery messaging, and run test orders on mobile ahead of the peak. Ideally start at least six weeks before Black Friday, so fixes are live well before traffic rises.' },
    ],
  },
  {
    slug: 'uk/shopify-developer',
    kind: 'global',
    market: 'UK',
    title: 'Shopify Developer UK: Fixes, Features, Speed',
    description: 'Shopify developer for UK brands and agencies: theme fixes, new features, app integrations and speed work, by fixed task, monthly or block of hours. GBP quotes.',
    primaryKeyword: 'Shopify developer',
    navLabel: 'Shopify Developer (UK)',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'For UK brands and agencies · Fixes · Features · Speed',
    h1: 'A Shopify Developer for *Your Backlog*, Not Just Your Launch',
    intro: 'Billion Ecommerce Agency gives you a Shopify developer for UK brands and agencies to brief before lunch and see progress from the same afternoon. We fix broken themes, customise sections, integrate apps and speed up slow stores, working by fixed task, monthly developer or block of hours. We have a London office and a Chennai delivery team, and we quote in GBP.',
    icon: 'shopify',
    facts: ['Fixed task, monthly or block of hours', 'Same-day work on requests before lunch', 'London office, quoted in GBP'],
    headings: {
      pains: 'Why UK teams struggle to get *Shopify work* done',
      includes: 'What our Shopify developer handles',
      process: 'Getting your first task done in *4 steps*',
      guide: 'Hiring a Shopify developer in the UK or remotely: a practical guide',
    },
    pains: [
      { title: 'A backlog nobody owns', body: 'Small fixes pile up: a broken size guide, a misaligned banner, an app that stopped syncing. The agency that built the store has moved on and the in-house team cannot touch Liquid.' },
      { title: 'Freelancers who vanish mid-task', body: 'A one-off freelancer fixes one thing, breaks another and is unavailable when you need a follow-up. You end up re-explaining the store to someone new every month.' },
      { title: 'Agencies short on development capacity', body: 'UK design and marketing agencies win Shopify work but lack a developer, so projects slip or get passed to whoever is free that week.' },
    ],
    includes: [
      { title: 'Theme fixes and customisation', body: 'Liquid, CSS and JavaScript fixes, new sections and blocks for Online Store 2.0 themes, custom product and collection templates, and layout changes your team can then edit.' },
      { title: 'New store features', body: 'Size guides, bundles, product options, gift messages, pre-order flows, delivery date pickers and metafield-driven content built into the theme rather than bolted on.' },
      { title: 'App setup and integration', body: 'Klaviyo, reviews, subscriptions, Royal Mail Click & Drop and stock tools installed and wired into the theme, plus leftover code cleaned up from removed apps.' },
      { title: 'Speed and Core Web Vitals', body: 'Script audits, image and font fixes, lazy loading and app trimming, measured against field data so improvements show up for real shoppers on phones.' },
      { title: 'Private and custom apps', body: 'Small custom apps and Admin API scripts for jobs Shopify does not do out of the box, such as bulk metafield updates or syncing data with a warehouse.' },
      { title: 'White-label help for agencies', body: 'Development under your agency’s name, working in your project tools, following your code standards and reporting to your project manager.' },
    ],
    platforms: ['Shopify', 'Liquid', 'Online Store 2.0', 'Shopify CLI', 'GitHub', 'Theme app extensions', 'Admin API', 'Klaviyo'],
    process: [
      { title: 'Send the task list', body: 'Share your backlog, store access request and any designs. We reply with questions and a list of what we can start straight away.' },
      { title: 'Choose an engagement', body: 'A fixed task with a set quote, a monthly developer, or a block of hours to draw down. All quoted in GBP, with no long tie-in.' },
      { title: 'Develop and preview', body: 'Work happens in a duplicate theme or Git branch. You get a preview link and notes on what changed, usually by your afternoon.' },
      { title: 'Publish and keep going', body: 'After you approve, we publish, check the live store and move on to the next item. Monthly clients get a short summary of completed work.' },
    ],
    figures: [
      { type: 'venn', caption: 'Good tasks need a clear brief from you and clean work from the developer.', after: 4, left: { title: 'Your brief', body: 'URL, screenshot, what should happen and the deadline' }, right: { title: 'Your developer', body: 'Editable sections, built locally and previewed first' }, overlap: 'Tasks that land first time' },
      { type: 'steps', caption: 'How we make a Shopify store quicker for real shoppers.', after: 5, steps: [
        { title: 'Read field data', body: 'Start from Search Console, not a lab score' },
        { title: 'List every script', body: 'Apps, widgets, pop-ups and tracking' },
        { title: 'Agree what stays', body: 'Keep features that earn their weight' },
        { title: 'Fix', body: 'Defer scripts, size images, clear old code' },
        { title: 'Recheck', body: 'After big changes and before Black Friday' },
      ] },
    ],
    guide: [
      {
        heading: 'When you need a developer rather than an agency',
        paragraphs: [
          'Not every Shopify problem needs a full agency project. Once a store is live, most work is a stream of smaller jobs: fixing a broken section, adding a feature for a product launch, connecting a new app, or tidying up after an old one. That work suits a developer who knows the store well and can turn requests round quickly.',
          'An agency makes more sense when you need design, strategy and a fixed launch date, as with a full redesign or replatforming. If you mostly need someone reliable to clear the backlog, a dedicated developer is usually faster and cheaper.',
        ],
      },
      {
        heading: 'Three ways to work with a Shopify developer',
        paragraphs: [
          'People searching for a Shopify developer in the UK, local or remote, usually need one of three arrangements, and the right one depends on how steady the work is.',
        ],
        bullets: [
          'Fixed task: a defined job, such as a new product template or a speed fix, with a set quote. Best for one-off work with a clear brief.',
          'Monthly developer: a named developer for an agreed number of days each month. Best for brands and agencies with a steady flow of changes.',
          'Block of hours: a bank of hours you draw down as requests arrive. Best when work is irregular but you want someone who already knows the store.',
        ],
      },
      {
        heading: 'What a good Shopify developer should know in 2026',
        paragraphs: [
          'Modern Shopify development centres on Online Store 2.0: JSON templates, sections and blocks that merchants can rearrange in the theme editor. A good developer builds features as editable sections, not hard-coded pages, so your team is not stuck asking for every text change.',
          'They should also know metafields and metaobjects for structured content such as size charts or ingredient lists, theme app extensions for keeping app code out of theme files, and the Admin API for scripts and small custom apps. Ask candidates how they would build a feature you need, and listen for whether they reach for an app first or the theme first.',
        ],
      },
      {
        heading: 'A safe workflow: never edit the live theme',
        paragraphs: [
          'The most common cause of a broken Shopify store is someone editing the live theme directly. Any developer you hire should work locally with Shopify CLI, keep the theme in a Git repository you own and share preview links before anything is published.',
          'This matters even more when several people touch the store. If your agency, a freelancer and your own team all edit the same theme, Git is the only reliable record of who changed what. It also makes rolling back a bad change a two-minute job instead of an emergency.',
        ],
      },
      {
        heading: 'How to brief a developer so tasks land first time',
        paragraphs: [
          'Most wasted development time comes from unclear briefs, not slow coding. A short, specific request gets done faster and with fewer rounds of changes, whoever you hire. When you send work to a Shopify developer, local or remote, include the basics up front.',
        ],
        bullets: [
          'The page URL and a screenshot or screen recording of the problem or the area to change.',
          'What should happen instead, with an example from another site if it helps.',
          'Which devices and browsers matter most, and whether the change affects all products or only some.',
          'Any deadline, such as a product launch, email send or sale start date.',
          'Who approves the change before it goes live.',
        ],
      },
      {
        heading: 'Speed work that shoppers notice',
        paragraphs: [
          'Slow Shopify stores are usually slow because of apps and images, not the platform. Each review widget, pop-up and tracking script adds weight to every page. Our Shopify experts start with field data from Search Console, list every script and agree with you which features justify their cost.',
          'Then the fixes are practical: deferring scripts that can wait, sizing images properly, removing code left by uninstalled apps and moving app features into theme blocks. The goal is a store that feels quick on a mid-range phone on a train, not a perfect lab score.',
          'Speed work is rarely finished in one go. New apps, campaign banners and seasonal sections add weight over time, so monthly clients get a quick check after each larger change and before peaks such as Black Friday, when slow pages cost the most.',
        ],
      },
      {
        heading: 'Working with a Chennai developer from the UK',
        paragraphs: [
          'We have a London office for meetings, but your developer works in our Chennai team, and India is 4.5 hours ahead of the UK in summer and 5.5 hours in winter. Our working day overlaps your morning and early afternoon, so tasks sent before UK lunchtime are usually picked up and often previewed the same day. Larger tasks are split into steps, so you see progress daily rather than waiting a week.',
          'For agencies, that overlap makes white-label development practical: your project manager briefs us in the morning and has work to show clients by mid-afternoon. Whether you hire a Shopify developer in the UK or overseas, check how they handle access, Git and handover. You should own the code, the repository and every account at all times.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Shopify agency for UK store builds and redesigns', href: '/uk/shopify-agency/' },
      { label: 'Shopify Plus development for UK retailers', href: '/uk/shopify-plus-agency/' },
      { label: 'White-label SEO for UK agencies', href: '/uk/white-label-seo/' },
      { label: 'Shopify SEO checklist', href: '/blog/shopify-seo-checklist/' },
    ],
    faqs: [
      { q: 'How do I hire a Shopify developer from Billion Ecommerce Agency?', a: 'Send us your store URL and a short list of tasks. We reply with questions, then suggest a fixed task, monthly developer or block of hours, quoted in GBP. Once you approve, you add us as a collaborator and we start in a duplicate theme or Git branch.' },
      { q: 'What are your engagement options?', a: 'Three. A fixed task with a set quote for a defined job. A monthly developer for an agreed number of days, suited to a steady backlog. Or a block of hours you draw down as requests come in. All are quoted in GBP after we review the store.' },
      { q: 'What hours do you work in UK time?', a: 'India is 4.5 hours ahead of British Summer Time and 5.5 hours ahead of GMT. Our working day covers your morning and early afternoon, so requests sent before UK lunchtime are usually handled the same day. We do not offer UK evening or weekend cover.' },
      { q: 'Can you work white-label for our UK agency?', a: 'Yes. We can develop under your agency’s name, work in your project management tools, follow your coding standards and report to your project manager. Your clients deal with you, and we stay in the background unless you want us on calls.' },
      { q: 'Will I work with the same developer each time?', a: 'Yes, on monthly and block-of-hours arrangements you get a named developer who learns your store, apps and quirks. If they are on leave, a colleague who has read your store notes covers, so work does not stop and you do not need to re-explain everything.' },
      { q: 'Do you work on our live theme?', a: 'No. We develop locally with Shopify CLI in a duplicate theme or Git branch, share a preview link and publish only after you approve. That way a mistake never reaches shoppers, and any change can be rolled back quickly if something unexpected happens.' },
      { q: 'Can you speed up a slow Shopify store?', a: 'Usually, yes. Most slow stores carry too many app scripts, oversized images or code left behind by removed apps. We measure with real-user data, agree which apps earn their place, then defer scripts, fix images and clean the theme, and report the before and after.' },
    ],
  },
  {
    slug: 'uk/shopify-plus-agency',
    kind: 'global',
    market: 'UK',
    title: 'Shopify Plus Agency UK for Checkout & B2B',
    description: 'Shopify Plus agency for UK retailers: checkout extensibility, Functions, B2B, EU expansion and migrations from Magento or WooCommerce. GBP quotes after audit.',
    primaryKeyword: 'Shopify Plus agency',
    navLabel: 'Shopify Plus Agency (UK)',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'For UK retailers on Shopify Plus · Checkout · B2B · EU expansion',
    h1: 'Shopify Plus Development for UK Retailers *Growing Into Europe*',
    intro: 'Billion Ecommerce Agency is an independent Shopify Plus agency that UK retailers bring in for checkout extensibility, Shopify Functions, B2B and expansion into Ireland and the EU. We also migrate stores from Magento, WooCommerce and BigCommerce. We are a Chennai team building on Shopify Plus, not a Shopify Plus Partner, and we quote in GBP after a free audit.',
    icon: 'shopify',
    facts: ['Checkout extensibility and Functions', 'B2B and EU expansion on one platform', 'Independent team, quoted in GBP'],
    headings: {
      pains: 'Where UK retailers *get stuck* on Shopify Plus',
      includes: 'Shopify Plus work we take on',
      process: 'How a Shopify Plus project runs in *4 steps*',
      guide: 'Shopify Plus for UK retailers: checkout, B2B, Europe and migration',
    },
    pains: [
      { title: 'Old checkout code on borrowed time', body: 'Customisations built with checkout.liquid and Shopify Scripts are being retired. UK retailers with gift messaging, delivery rules or tiered discounts need them rebuilt properly.' },
      { title: 'Wholesale run from a separate store', body: 'Many UK brands run trade customers through a second store, spreadsheets or email orders. Stock, pricing and customer records drift apart and reporting becomes guesswork.' },
      { title: 'A replatform that keeps getting delayed', body: 'Magento 1 and older Magento 2 builds are expensive to maintain, but the migration feels risky. Every quarter it is postponed, hosting and patching costs keep rising.' },
    ],
    includes: [
      { title: 'Checkout extensibility', body: 'Checkout UI extensions, branding settings and post-purchase blocks for gift notes, delivery instructions, upsells and trust messages, built the way Shopify now supports.' },
      { title: 'Shopify Functions', body: 'Discount, delivery and payment customisation logic, such as hiding next-day options for oversized items or tiered trade discounts, written as Functions to replace Scripts.' },
      { title: 'B2B on Shopify', body: 'Company profiles, catalogues, price lists, quantity rules, VAT numbers and payment terms, so trade buyers order from the same store and stock pool as retail.' },
      { title: 'Markets and EU expansion', body: 'Shopify Markets for Ireland, the EU and beyond, with local currencies, duties at checkout, translated content and separate domains or subfolders where they help.' },
      { title: 'Flow and integrations', body: 'Shopify Flow workflows for fraud tagging, stock alerts and B2B approvals, plus connections to your ERP, 3PL, accounting software and Klaviyo.' },
      { title: 'Migrations to Shopify Plus', body: 'Moves from Magento, WooCommerce and BigCommerce covering products, customers, order history, redirects, integrations and SEO checks before and after cutover.' },
    ],
    platforms: ['Shopify Plus', 'Checkout UI extensions', 'Shopify Functions', 'Shopify Flow', 'Shopify Markets', 'B2B on Shopify', 'Shopify CLI', 'Klaviyo'],
    process: [
      { title: 'Free technical audit', body: 'We review your current store or platform, custom code, apps and integrations, then walk you through the findings on a call in your UK morning.' },
      { title: 'Plan and GBP quote', body: 'A written plan that separates what to rebuild, what native Plus features can replace and what to drop, with a fixed or phased quote in GBP.' },
      { title: 'Build, migrate and test', body: 'Work happens in development stores and Git branches. We test checkout, B2B pricing, Markets and integrations end to end with your team.' },
      { title: 'Cutover and support', body: 'A planned launch outside your trading peaks, with redirects, monitoring and a support period to fix anything that shows up once real orders flow.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'What Shopify Plus adds beyond the standard plans.', after: 0, center: 'What Plus adds', branches: [
        { label: 'Checkout', items: ['Checkout UI extensions', 'Shopify Functions'] },
        { label: 'B2B', items: ['Trade price lists', 'Payment terms'] },
        { label: 'Expansion', items: ['Shopify Markets', 'Expansion stores'] },
        { label: 'Automation', items: ['Shopify Flow', 'Higher API limits'] },
      ] },
      { type: 'venn', caption: 'Trade buyers and consumers can share one Shopify Plus store.', after: 2, left: { title: 'Consumer shop', body: 'VAT-inclusive prices, cards and pay-later options' }, right: { title: 'Trade buyers', body: 'Own catalogue, prices excluding VAT, net terms' }, overlap: 'One catalogue, one stock pool' },
    ],
    guide: [
      {
        heading: 'What a Shopify Plus agency should add beyond a standard build',
        paragraphs: [
          'Shopify Plus is Shopify’s plan for larger and more complex merchants. The storefront tools are much the same as on other plans. The difference is what Plus lets you change and connect: checkout customisation, B2B selling, expansion stores, higher API limits and automation through Flow.',
          'That is where a Shopify Plus agency earns its fee. If a proposal is mostly theme design, you may be paying Plus rates for work a good Shopify developer could do. Ask what will be built with checkout extensibility, Functions and B2B, and what will be deliberately left to native features.',
        ],
      },
      {
        heading: 'Checkout extensibility and Shopify Functions',
        paragraphs: [
          'Shopify has replaced checkout.liquid with checkout extensibility, and Shopify Scripts are being phased out in favour of Shopify Functions. For UK retailers, common customisations include gift messages, delivery instructions for flats and rural addresses, hiding next-day services for bulky items and promoting a free-delivery threshold.',
          'Each of these now belongs in a checkout UI extension or a Function. The work starts with a list of every existing script and customisation, then a decision for each: rebuild it, replace it with a native setting or drop it. Many brands find several scripts were only there to work around limits that no longer exist.',
        ],
      },
      {
        heading: 'B2B and wholesale on the same store',
        paragraphs: [
          'Plenty of UK brands sell to independent shops, salons or garden centres as well as consumers. B2B on Shopify lets those trade buyers log in to the same store and see their own catalogue, prices, minimum quantities and payment terms, while you manage one product catalogue and one stock pool.',
          'UK B2B has its own details: VAT numbers on company profiles, prices shown excluding VAT for trade, net payment terms and pro forma invoices for new accounts. We set these up and connect orders to your accounting software, so the finance team is not re-keying trade orders.',
        ],
      },
      {
        heading: 'Expanding from the UK into Ireland and the EU',
        paragraphs: [
          'Since Brexit, selling to EU shoppers from the UK means import VAT, duties and customs paperwork. Shopify Markets lets you show local currencies, collect duties and taxes at checkout so customers are not hit with charges on delivery, and serve localised content through subfolders or separate domains.',
          'The platform side is the easier part. Decisions about IOSS registration, an EU warehouse or an EU entity sit with your accountant and logistics partner. A sensible Shopify Plus agency should set up Markets to match those decisions rather than make them for you. Expansion stores are another option on Plus, useful when a market needs its own catalogue, pricing strategy or team, though each one adds admin work, so we only suggest them when Markets alone cannot do the job.',
        ],
      },
      {
        heading: 'Migrating from Magento, WooCommerce or BigCommerce',
        paragraphs: [
          'Many UK retailers on Shopify Plus came from Magento, and more are still planning the move. A migration is less about copying products and more about everything around them: customer accounts, order history, URL redirects, integrations with ERP and warehouse systems, and the custom features the old platform carried.',
        ],
        bullets: [
          'Map every URL and set up 301 redirects before cutover to protect organic rankings.',
          'Decide which custom features to rebuild, replace with apps or retire.',
          'Plan customer account activation, because passwords do not transfer.',
          'Schedule the launch away from Black Friday, Christmas and Boxing Day trading.',
        ],
      },
      {
        heading: 'Getting value from Plus after launch',
        paragraphs: [
          'Plus costs more than other Shopify plans, so it should pay its way. Too often a brand upgrades for one feature, such as B2B, and leaves the rest unused. Shopify Flow alone can take hours of manual work off a small team each week: tagging high-risk orders for review, alerting buyers when best-sellers run low, routing trade orders for approval and sending order data to Klaviyo or a 3PL.',
          'We review Plus stores every quarter against a simple question: which Plus features are you paying for but not using, and which would save time or protect margin? If the honest answer is that a standard plan would do, we say so. A Shopify Plus agency on retainer should be measured on fewer manual tasks, cleaner data and faster launches, not on hours logged.',
        ],
      },
      {
        heading: 'Choosing a Shopify Plus agency: partner status, location and hours',
        paragraphs: [
          'Shopify lists Plus Partners on its own directory. We are not one of them. Billion Ecommerce Agency is an independent agency that builds on Shopify Plus, with a London office and a Chennai delivery team. Judge us, and any Shopify Plus agency in the UK or overseas, on the work: ask to see checkout extensions, Functions and migration plans they have built.',
          'India is 4.5 hours ahead of British Summer Time and 5.5 hours ahead in winter. Our day overlaps your morning and early afternoon, so issues raised before lunch are usually handled the same day. We quote in GBP after a free audit, typically as a fixed price for builds and migrations and a monthly retainer for ongoing work.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Shopify agency for UK store builds', href: '/uk/shopify-agency/' },
      { label: 'Shopify developer for UK brands and agencies', href: '/uk/shopify-developer/' },
      { label: 'Ecommerce SEO agency for UK retailers', href: '/uk/ecommerce-seo-agency/' },
      { label: 'Free e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Are you a Shopify Plus Partner?', a: 'No. Billion Ecommerce Agency is an independent team in Chennai that builds on Shopify Plus. We are not listed in Shopify’s Plus Partner directory and do not claim to be. We would rather be judged on the checkout extensions, Functions, B2B setups and migrations we can show you.' },
      { q: 'What does a Shopify Plus agency do?', a: 'It builds the features Plus makes possible: checkout customisation with UI extensions, discount and delivery logic with Shopify Functions, B2B catalogues and price lists, Markets and expansion stores, Flow automation and integrations with ERP and warehouse systems. It also handles migrations from other platforms onto Plus.' },
      { q: 'Do we need Shopify Plus, or is a standard plan enough?', a: 'Many UK brands do not need Plus. It becomes worth considering when you need checkout customisation, B2B on the same store, expansion stores for separate markets, or higher API limits for integrations. We will tell you honestly in the audit if a standard plan covers what you need.' },
      { q: 'Can you replace our Shopify Scripts with Functions?', a: 'Yes. We list every script you run, check which can be replaced by native discounts or settings, and rebuild the rest as Shopify Functions. We test each one against real basket scenarios, including trade customers and EU orders, before switching the old scripts off.' },
      { q: 'How long does a Magento to Shopify Plus migration take?', a: 'It depends on catalogue size, order history, custom features and integrations. A straightforward migration takes a few months from audit to launch; complex builds with ERP links take longer. We plan the cutover away from Black Friday and Christmas so launch risk does not land on your busiest weeks.' },
      { q: 'Can Shopify Plus handle our wholesale customers?', a: 'Yes. B2B on Shopify supports company accounts, VAT numbers, custom catalogues, price lists, quantity rules and payment terms, all from the same store and stock pool as retail. Trade buyers log in to see their own prices, and orders can flow to your accounting software.' },
      { q: 'How do we work with you from the UK?', a: 'You can meet us at our London office by appointment, but most delivery is done by our Chennai team. India is 4.5 to 5.5 hours ahead of the UK, so our day overlaps your morning and early afternoon. Calls happen in that window, work runs through a shared board and Git, and requests before lunch are usually handled same day.' },
    ],
  },
];
