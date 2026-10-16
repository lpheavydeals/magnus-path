import type { ServicePageData } from '../../data/types';

// Websites pillar. Keyword targets: research/keyword-map.xlsx
export const websitePages: ServicePageData[] = [
  {
    slug: 'shopify-development',
    kind: 'service',
    title: 'Shopify Development Company in India | Magnus Path',
    description: 'Shopify development company in Chennai building fast, conversion-focused Shopify and Shopify Plus stores for Indian and global brands. UPI, COD, GST ready.',
    primaryKeyword: 'shopify development company',
    navLabel: 'Shopify Development',
    breadcrumb: [{ label: 'Websites', href: '/ecommerce-website-development/' }],
    eyebrow: 'Shopify development · Shopify Plus',
    h1: 'Shopify Development Company for Stores That *Actually Sell*',
    intro: 'Magnus Path is a Shopify development company that designs and builds Shopify and Shopify Plus stores for Indian and international brands. Every store is built for speed, mobile shoppers and conversion — with UPI, COD, GST invoices and shipping integrations set up from day one.',
    icon: 'shopify',
    facts: ['Live in 3–6 weeks', 'Mobile-first design', 'SEO-ready from launch'],
    headings: {
      pains: 'Most Shopify stores look fine and still don’t sell',
      includes: 'Everything your Shopify store needs, built by one team',
      process: 'From brief to launch in *4 steps*',
      pricing: 'Shopify development pricing',
      guide: 'Shopify development in India: what to know before you build',
    },
    pains: [
      { title: 'A template store that looks like everyone else’s', body: 'A theme installed in a weekend gets you online, but it rarely matches your brand or answers the questions your buyers have before they pay.' },
      { title: 'Slow pages on mobile data', body: 'Most Indian shoppers browse on mid-range phones. Heavy apps, unoptimised images and pop-ups push load times past five seconds and buyers leave.' },
      { title: 'Checkout that leaks orders', body: 'Missing UPI options, confusing COD rules, surprise shipping costs and no WhatsApp follow-up turn carts into abandoned carts.' },
    ],
    includes: [
      { title: 'Custom Shopify theme design', body: 'A design built around your brand and your best-selling products, not a recoloured template. Product, collection and landing page layouts designed for mobile first.' },
      { title: 'Conversion-focused product pages', body: 'Clear pricing, size and variant pickers, delivery estimates, reviews, FAQs and trust badges placed where buyers look before they decide.' },
      { title: 'Indian payments, COD and GST', body: 'Razorpay, PayU or Cashfree with UPI, cards and wallets; COD rules and verification to cut returns; GST-compliant invoices generated automatically.' },
      { title: 'Shipping and marketplace integrations', body: 'Shiprocket or Delhivery integration, order tracking pages, and inventory sync with Amazon or Flipkart when you sell on both.' },
      { title: 'Speed and technical SEO', body: 'Image compression, lean apps, clean URLs, structured data for products and reviews, and an XML sitemap so Google can index your catalogue properly.' },
      { title: 'Training and handover', body: 'Recorded walkthroughs for adding products, running discounts and reading reports, plus 30 days of support after launch.' },
    ],
    platforms: ['Shopify', 'Shopify Plus', 'Razorpay', 'Shiprocket', 'Judge.me', 'Klaviyo', 'WhatsApp'],
    process: [
      { title: 'Discovery and store plan', body: 'We study your products, competitors and customers, then map the pages, apps and integrations your store needs — with a fixed quote and timeline.' },
      { title: 'Design', body: 'Mobile-first designs for the home, collection, product and cart pages. You review real layouts with your own products, not wireframes full of placeholders.' },
      { title: 'Build and integrate', body: 'We develop the theme, set up payments, shipping, taxes and apps, migrate products and test checkout on real devices and networks.' },
      { title: 'Launch and grow', body: 'We launch, submit the sitemap to Google, set up analytics and hand over. If you want, our ads and SEO team takes over from there.' },
    ],
    pricing: {
      from: '₹60,000',
      unit: 'one-time',
      note: 'Template-based stores start at ₹60,000. Custom, conversion-focused Shopify builds usually cost ₹1.5–5 lakh depending on pages, integrations and catalogue size. You get a fixed quote after a free consultation.',
      items: ['Mobile-first design for key pages', 'Payments, COD, GST and shipping setup', 'Product upload (up to 50 SKUs)', 'Technical SEO and speed optimisation', '30 days of post-launch support'],
    },
    guide: [
      {
        heading: 'Why Shopify is the default choice for Indian D2C brands',
        paragraphs: [
          'Shopify powers tens of thousands of Indian online stores because it removes the hardest parts of running e-commerce: hosting, security, payments and updates are handled for you. A small team can launch quickly and focus on products and marketing instead of servers.',
          'For brands selling in India, Shopify now works well with local payment gateways, UPI, COD apps, Shiprocket and GST invoicing. For brands selling abroad, it supports multiple currencies and languages through Shopify Markets, which makes it a good fit for exporters building a direct-to-consumer channel.',
        ],
      },
      {
        heading: 'What a Shopify development company actually does',
        paragraphs: [
          'Setting up a Shopify account takes minutes. Building a store that converts takes planning. A Shopify development company handles the work between those two points: designing a theme around your brand, structuring collections, writing product page templates, connecting payments and shipping, and making sure the store loads fast on mobile.',
          'Good Shopify developers also think about what happens after launch. That means clean URLs and product schema for SEO, analytics events for ads, and a store your team can update without calling a developer for every banner change.',
        ],
        bullets: [
          'Theme design and development (custom or customised premium theme)',
          'Store architecture: collections, filters, navigation and search',
          'Payments, COD, taxes, shipping and marketplace integrations',
          'Speed optimisation, technical SEO and analytics setup',
          'Migration from WooCommerce, Magento or a custom platform',
        ],
      },
      {
        heading: 'Shopify vs Shopify Plus: which do you need?',
        paragraphs: [
          'Most growing Indian brands start on Shopify’s Basic, Shopify or Advanced plans. Shopify Plus becomes worth it when you need checkout customisation, automation through Shopify Flow, wholesale (B2B) pricing or several international storefronts — usually once monthly revenue is consistently high enough that the extra platform fee is a small share of sales.',
          'We help you choose the right plan based on your order volume and roadmap, and we build stores so that upgrading to Plus later does not require a rebuild.',
        ],
      },
      {
        heading: 'How much does Shopify development cost in India?',
        paragraphs: [
          'Shopify development costs in India depend on how much is custom. A store built on a premium theme with your branding, payments and up to 50 products typically starts around ₹60,000. A custom-designed store with conversion-focused page templates, integrations and migration usually costs between ₹1.5 lakh and ₹5 lakh.',
          'Beyond the build, budget for the Shopify subscription, a premium theme licence if used, and paid apps. We keep the app list short, because every app adds monthly cost and slows the store down.',
        ],
      },
      {
        heading: 'What makes a Shopify store convert',
        paragraphs: [
          'Conversion comes from removing doubt. Buyers want to know the price including shipping, when the order will arrive, whether the size will fit and what happens if they need to return it. The best Shopify stores answer those questions on the product page, before the buyer has to ask.',
          'Speed matters just as much. On mobile networks, every extra second of load time loses shoppers. We test stores on real mid-range Android phones over 4G, not just on office Wi-Fi, before we call a store finished.',
        ],
        bullets: [
          'Clear delivery dates and shipping costs on every product page',
          'Real customer photos and reviews close to the Add to Cart button',
          'UPI first in checkout, with COD available where it makes sense',
          'WhatsApp or SMS reminders for abandoned carts',
        ],
      },
      {
        heading: 'Common Shopify mistakes we fix',
        paragraphs: [
          'Many of the stores we audit have the same handful of problems. Fixing them is often the fastest way to more sales, before spending another rupee on ads.',
        ],
        bullets: [
          'Fifteen or more apps installed, each adding scripts that slow every page',
          'Hero banners and sliders that push products below the fold on mobile',
          'Duplicate collection and product URLs that split SEO value',
          'No shipping or delivery information until the final checkout step',
          'Product descriptions copied from suppliers, which Google treats as thin content',
          'Analytics and Meta pixel events that double-count or miss purchases',
        ],
      },
      {
        heading: 'Shopify for exporters and brands selling abroad',
        paragraphs: [
          'Shopify Markets lets one store sell in several countries with local currencies, prices and languages. For Tiruppur apparel makers, spice and coffee exporters or handicraft brands, this makes a direct-to-consumer store in the UK, UAE, USA or Australia realistic without running separate websites.',
          'We set up international shipping profiles, duties and taxes display, currency rounding and country-specific payment options, so overseas buyers see a checkout that feels local to them.',
        ],
      },
      {
        heading: 'Why work with a Chennai-based Shopify team',
        paragraphs: [
          'We work with brands across India and abroad, and Tamil Nadu brands can meet us in person. Because the same team also runs ads and SEO, your store is built with marketing in mind: landing pages ready for campaigns, tracking that matches your ad platforms, and pages structured to rank on Google.',
        ],
      },
    ],
    related: [
      { label: 'E-commerce website development', href: '/ecommerce-website-development/' },
      { label: 'Shopify SEO services', href: '/shopify-seo/' },
      { label: 'WooCommerce development', href: '/woocommerce-development/' },
      { label: 'Performance marketing for Shopify stores', href: '/performance-marketing/' },
      { label: 'E-commerce website development in Chennai', href: '/chennai/ecommerce-website-development/' },
    ],
    faqs: [
      { q: 'How long does it take to build a Shopify store?', a: 'A store on a customised premium theme typically takes 3–4 weeks. A fully custom Shopify store with integrations and migration usually takes 5–8 weeks, depending on how quickly product content and feedback come in.' },
      { q: 'How much does Shopify development cost in India?', a: 'Template-based Shopify stores start from about ₹60,000. Custom, conversion-focused builds usually cost ₹1.5–5 lakh. Shopify’s subscription, theme licence and paid apps are separate monthly costs.' },
      { q: 'Can you migrate my store from WooCommerce to Shopify?', a: 'Yes. We migrate products, collections, customers and order history where possible, set up 301 redirects from old URLs so you keep your Google rankings, and test everything before switching over.' },
      { q: 'Do your Shopify stores support UPI and Cash on Delivery?', a: 'Yes. We set up Indian payment gateways with UPI, cards and wallets, and configure COD with rules such as order limits and verification to reduce return-to-origin orders.' },
      { q: 'Will my Shopify store be SEO-friendly?', a: 'Yes. Every store launches with clean URLs, optimised titles and descriptions, product structured data, fast-loading images and a submitted sitemap. Our SEO team can continue with ongoing Shopify SEO if you want to grow organic sales.' },
      { q: 'Do you work with brands outside Chennai?', a: 'Yes. We are based in Chennai and build Shopify stores for brands across India and in the UK, UAE, Australia and the USA, working through video calls and shared project boards.' },
    ],
  },
];
