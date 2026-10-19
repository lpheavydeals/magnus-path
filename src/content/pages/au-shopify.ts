import type { ServicePageData } from '../../data/types';

const auBreadcrumb = [{ label: 'Australia', href: '/australia/ecommerce-marketing-agency/' }];

export const auShopifyPages: ServicePageData[] = [
  {
    slug: 'australia/shopify-agency',
    kind: 'global',
    market: 'AU',
    twin: 'shopify-development',
    title: 'Shopify Experts Australia: Agency & Developers | Magnus Path',
    description: 'Shopify experts for Australian brands: store builds, migrations, speed and Shopify Plus work with GST pricing, Afterpay and local shipping. Quoted in AUD.',
    primaryKeyword: 'Shopify experts',
    navLabel: 'Shopify Agency (Australia)',
    breadcrumb: auBreadcrumb,
    eyebrow: 'For Australian brands · Builds · Migrations · Shopify Plus',
    h1: 'Shopify Experts for Australian Stores, Ready for *Click Frenzy*',
    intro: 'Magnus Path gives Australian brands Shopify experts for store builds, redesigns, migrations and Shopify Plus work, without the local agency overheads. We set up GST-inclusive pricing, Afterpay or Zip, Australian shipping and Markets for New Zealand. We are a Chennai team with no Australian office, our morning is your afternoon, and we quote in AUD.',
    icon: 'shopify',
    facts: ['GST, Afterpay and AU shipping set up', 'Markets for Australia and New Zealand', 'Quoted in AUD, no AU office'],
    headings: {
      pains: 'Why Australian Shopify stores *lose sales* they should win',
      includes: 'What our Shopify experts build for Australian stores',
      process: 'From audit to launch in *4 steps*',
      guide: 'Hiring Shopify experts in Australia or offshore: builds, Plus and the local details',
    },
    pains: [
      { title: 'A store set up for another country', body: 'Prices shown without GST, US spelling in the copy and shipping promises that ignore how long a parcel takes to reach Perth or regional Queensland.' },
      { title: 'Slow pages and app clutter', body: 'Years of installed and removed apps leave scripts behind. Product pages drag on mobile, and the store struggles when Click Frenzy or Black Friday traffic arrives.' },
      { title: 'Nobody to call after launch', body: 'The agency that built the store has moved on, small fixes pile up and the in-house team cannot touch Liquid without breaking something.' },
    ],
    includes: [
      { title: 'New Shopify store builds', body: 'Online Store 2.0 builds on a premium or custom theme, designed mobile first around your best sellers, with templates your team can edit without a developer.' },
      { title: 'Migrations and redesigns', body: 'Moves from WooCommerce, Magento, BigCommerce or Neto, with product and customer data migration, 301 redirects and checks that organic traffic holds.' },
      { title: 'GST, payments and checkout', body: 'GST-inclusive AUD pricing, Shopify Payments with Apple Pay and Google Pay, plus Afterpay, Zip, Klarna or PayPal where your customers use them.' },
      { title: 'Shipping and Markets for NZ', body: 'Australia Post, Sendle or courier rates through shipping apps, delivery estimates by region, and Shopify Markets for New Zealand pricing and duties.' },
      { title: 'Speed and peak readiness', body: 'App and script audits, image and font fixes, then discount, stock and checkout testing before Click Frenzy, EOFY, Black Friday and Boxing Day.' },
      { title: 'Shopify Plus development', body: 'Checkout extensibility, Shopify Functions for discounts and delivery rules, Shopify Flow automation, B2B catalogues and expansion stores on Shopify Plus.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'Shopify Payments', 'Shopify Markets', 'Afterpay', 'Zip', 'Klarna', 'Australia Post', 'Sendle', 'Klaviyo', 'GA4'],
    process: [
      { title: 'Free audit and video call', body: 'We review your current store or plans, apps, speed and analytics, then talk through what we found on a call booked in your afternoon.' },
      { title: 'Scope and AUD quote', body: 'A written scope listing pages, integrations, migration work and launch date, with a quote in AUD. Nothing starts until you approve it.' },
      { title: 'Design and build', body: 'Designs using your real products, then development in an unpublished theme and a Git repository you own, with progress shared each afternoon.' },
      { title: 'Launch and aftercare', body: 'Test orders, redirects and tracking checks before go-live, then a support period for fixes and training so your team can run the store.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'What an Australian Shopify checkout needs so the price shown is the price paid.', center: 'Australian checkout', after: 1, branches: [
        { label: 'Prices', items: ['GST included', 'GST checked by accountant'] },
        { label: 'Pay now', items: ['Shopify Payments cards', 'Apple Pay, Google Pay', 'PayPal'] },
        { label: 'Pay later', items: ['Afterpay', 'Zip or Klarna'] },
        { label: 'Delivery', items: ['Australia Post, Sendle', 'Estimates by region', 'NZD prices for NZ'] },
      ] },
      { type: 'steps', caption: 'Moving to Shopify from WooCommerce, Magento, BigCommerce or Neto without losing sales.', after: 2, steps: [
        { title: 'Map old URLs', body: 'A redirect for every product and page' },
        { title: 'Clean product data', body: 'Fix titles, variants and images first' },
        { title: 'Plan accounts', body: 'Customer accounts and order history' },
        { title: 'Test orders', body: 'Each payment and shipping option' },
        { title: 'Crawl old URLs', body: 'Check every redirect lands correctly' },
      ] },
    ],
    guide: [
      {
        heading: 'What Shopify experts should handle for an Australian store',
        paragraphs: [
          'Plenty of people can install a Shopify theme. Fewer think about the details that decide whether an Australian shopper trusts the store enough to pay. Good Shopify experts treat those details as part of the build, not a launch-week checklist: prices that include GST, delivery costs and times shown early, a returns page in plain English and payment options people already use.',
          'The design should be shaped around your best-selling products and the questions buyers ask about them, and the store should be easy for your own team to update once the build is finished. Ask to see how a new collection, landing page or banner is added in the theme editor before you sign off.',
          'Shopify experts should also leave documentation behind: which apps do what, where custom code lives and how the shipping and tax settings work. Without it, the next developer starts from scratch and you pay twice to learn the same store.',
        ],
      },
      {
        heading: 'GST, Afterpay and shipping across Australia and New Zealand',
        paragraphs: [
          'Australian shoppers expect the price on the product page to be the price they pay, apart from delivery. Shopify supports GST-inclusive pricing, but tax settings, product overrides and invoice details need setting up properly. Your accountant should confirm the GST position, and on Australian Consumer Law questions you should speak to a lawyer, because we are not lawyers.',
          'At checkout, Shopify Payments covers cards, Apple Pay and Google Pay. Many Australian brands add Afterpay, Zip or Klarna for buy now, pay later, and PayPal for shoppers who prefer it. Each option adds a little work to refunds and reconciliation, so choose the ones your customers ask for.',
          'Shipping is where many stores lose trust. Shipping apps connect Shopify to Australia Post, Sendle and other couriers for live rates, labels and tracking. Show realistic delivery estimates by region rather than one national promise. If you sell to New Zealand, Shopify Markets lets you show NZD prices and handle duties and taxes at checkout.',
        ],
      },
      {
        heading: 'Speed, migrations and peak trading',
        paragraphs: [
          'Most Shopify speed problems come from apps, oversized images and third-party scripts rather than Shopify itself. We measure with field data, remove what is not earning its place and fix images and fonts, so improvements show up for real shoppers on phones.',
          'Migrations from WooCommerce, Magento, BigCommerce or Neto need a redirect map, clean product data and a plan for customer accounts and order history. Insist on test orders and a crawl of old URLs before launch. Then plan for the Australian retail calendar: Click Frenzy, EOFY sales in June, Black Friday and Boxing Day all need discounts, stock messages and checkout tested on mobile weeks ahead.',
        ],
      },
      {
        heading: 'What a Shopify Plus agency in Australia should offer',
        paragraphs: [
          'Shopify Plus suits brands that need more control over checkout, automation or multiple stores. A capable Shopify Plus agency in Australia, local or remote, should be comfortable with checkout extensibility and checkout UI extensions, Shopify Functions for custom discounts and delivery rules, Shopify Flow for automating tagging and alerts, and B2B features for wholesale customers.',
          'Plus also makes expansion stores easier, for example a separate store for New Zealand or a wholesale catalogue. Ask any agency which of these features you actually need before upgrading, because many growing brands do well on standard Shopify for longer than they expect.',
          'On Plus, it also matters that customisations are built the supported way. Older checkout.liquid edits no longer work, so experienced Shopify experts move that logic into checkout extensions and Functions that survive platform updates.',
        ],
      },
      {
        heading: 'Hiring a Shopify developer: project, monthly or block of hours',
        paragraphs: [
          'Once a store is live, most work is a stream of smaller jobs: fixing a section, adding a feature for a product launch or connecting a new app. That suits a Shopify developer who knows the store and can turn requests round quickly. We offer three ways to work, all quoted in AUD:',
        ],
        bullets: [
          'Project: a defined build, redesign or migration with a fixed scope and launch date.',
          'Monthly developer: a named developer for an agreed number of days each month.',
          'Block of hours: a bank of hours you draw down as requests arrive.',
        ],
      },
      {
        heading: 'Working with Shopify experts in Chennai from Australia',
        paragraphs: [
          'We have no Australian office. Magnus Path is a Chennai team working with Australian brands over video calls, a shared project board and chat. Sydney and Melbourne are 4.5 hours ahead of India on standard time and 5.5 hours during daylight saving, and Perth is 2.5 hours ahead. Our morning is your east-coast afternoon, so calls fit after lunch and finished work usually reaches you by evening.',
          'If you are weighing up a local Shopify agency against a remote team, ask both the same questions:',
        ],
        bullets: [
          'Who will design and develop the store, and can I speak to them?',
          'Will you work in an unpublished theme and a Git repository I own?',
          'How will GST, payments, shipping and New Zealand be set up?',
          'What support is included after launch, and for how long?',
        ],
      },
    ],
    related: [
      { label: 'Web development company in Australia', href: '/australia/web-development-company/' },
      { label: 'Ecommerce agency for Australian brands', href: '/australia/ecommerce-marketing-agency/' },
      { label: 'Ecommerce SEO for Australian Shopify stores', href: '/australia/ecommerce-seo/' },
      { label: 'White label SEO for Australian agencies', href: '/australia/white-label-seo/' },
      { label: 'Shopify SEO services', href: '/shopify-seo/' },
      { label: 'Free Shopify and e-commerce audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Are you a Shopify Partner or Shopify Plus Partner?', a: 'No. We do not claim Shopify Partner or Shopify Plus Partner status. Magnus Path is an independent team in Chennai, India, that builds and maintains Shopify and Shopify Plus stores for Australian brands. Judge us on our work, our process and the free audit, not on a badge.' },
      { q: 'Do I need a Shopify agency in Australia, or can a remote team do the work?', a: 'A remote team can handle builds, migrations and ongoing development well if it understands GST, Afterpay, Australian shipping and the retail calendar. Our morning is your afternoon, so calls fit after lunch. Choose a local agency if regular in-person workshops matter more to you than cost.' },
      { q: 'How much does a Shopify store cost for an Australian brand?', a: 'We quote in AUD after a free audit, because cost depends on the theme, number of templates, integrations, migration work and whether you sell to New Zealand. You receive a written scope with a fixed price before work starts. Shopify fees and paid apps are separate.' },
      { q: 'Can I hire a Shopify developer for my Australian store by the month?', a: 'Yes. You can hire a Shopify developer from our team on a monthly basis for an agreed number of days, buy a block of hours to draw down, or book a fixed project. All work happens in a duplicate theme or Git branch, and you approve changes before they go live.' },
      { q: 'Do you work on Shopify Plus stores?', a: 'Yes. We build and maintain Shopify Plus stores, including checkout extensibility, Shopify Functions for discounts and delivery rules, Shopify Flow automation, B2B catalogues and expansion stores for New Zealand. We will also tell you honestly if standard Shopify still covers what you need.' },
      { q: 'Which payment and shipping options can you set up?', a: 'Shopify Payments with cards, Apple Pay and Google Pay, plus Afterpay, Zip, Klarna and PayPal. For delivery we connect shipping apps for Australia Post, Sendle and other couriers, set rates and regional delivery estimates, and add tracking and a clear returns page.' },
      { q: 'Can you migrate our store to Shopify without losing rankings?', a: 'We migrate from WooCommerce, Magento, BigCommerce and Neto with a full redirect map, product and customer data import, and checks on titles, descriptions and structured data. We crawl the old URLs before and after launch so lost pages are found and fixed quickly.' },
    ],
  },
];
