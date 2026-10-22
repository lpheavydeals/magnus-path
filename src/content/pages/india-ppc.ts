import type { ServicePageData } from '../../data/types';

export const indiaPpcPages: ServicePageData[] = [
  {
    slug: 'ecommerce-ppc-agency',
    kind: 'service',
    title: 'Ecommerce PPC Agency in India | Google Shopping | Magnus Path',
    description: 'Ecommerce PPC agency in India for Shopify and WooCommerce brands: Google Shopping, Performance Max and Search, run to target ROAS after COD and RTO costs.',
    primaryKeyword: 'ecommerce PPC agency in India',
    navLabel: 'Ecommerce PPC',
    breadcrumb: [{ label: 'Ads', href: '/performance-marketing/' }],
    eyebrow: 'Google Shopping · Performance Max · Search',
    h1: 'Ecommerce PPC Agency in India for *Profitable* Google Ads',
    intro: 'Magnus Path is an ecommerce PPC agency in India that runs Google Shopping, Performance Max and Search campaigns for D2C brands on Shopify and WooCommerce. We fix your Merchant Center feed, set target ROAS after COD and RTO costs, and keep every account in your name, so you can see what each rupee of ad spend really returns.',
    icon: 'shopify',
    facts: ['Free audit first', 'Accounts stay in your name', 'ROAS judged after RTO'],
    headings: {
      pains: 'Google says the campaigns work. Your bank balance disagrees.',
      includes: 'What our Google Shopping and PPC management covers',
      process: 'How we take over your Google Ads in *4 steps*',
      guide: 'Ecommerce PPC in India: a practical guide for D2C brands',
    },
    pains: [
      { title: 'One Performance Max campaign doing everything', body: 'The whole catalogue sits in a single campaign, so Google spends on cheap, low-margin products and your hero products get whatever budget is left over.' },
      { title: 'Conversion value that ignores COD and returns', body: 'Google counts every order the moment it is placed. Cash-on-delivery orders that are refused at the door still look like sales, so ROAS is flattered every month.' },
      { title: 'A Merchant Center feed full of warnings', body: 'Price mismatches, missing GST-inclusive prices, unclear delivery and returns details and disapproved items quietly shrink how often your products appear.' },
    ],
    includes: [
      { title: 'Google Shopping and Performance Max', body: 'Campaigns split by margin, product type and stock, with asset groups and listing groups planned so hero products get steady budget and new products still get tested.' },
      { title: 'Search campaigns, brand and non-brand', body: 'A small branded campaign to protect your name from competitors, plus non-brand campaigns on high-intent product searches, including Hindi and regional-language terms where shoppers use them.' },
      { title: 'Merchant Center feed management', body: 'Titles, product types, GTINs, GST-inclusive prices, delivery and pin-code settings, COD and returns policy details fixed in the feed, with disapprovals cleared quickly.' },
      { title: 'Margin labels and target ROAS', body: 'Custom labels for margin band, price band and stock, with target ROAS worked out from your real margins after COD charges, RTO losses and returns.' },
      { title: 'Remarketing and audience lists', body: 'Dynamic remarketing for product viewers and cart abandoners, customer lists for repeat buyers, and exclusions so you stop paying to reach people who just ordered.' },
      { title: 'GA4 and enhanced conversions', body: 'Google Ads conversion tracking, enhanced conversions and GA4 purchase events checked against your Shopify or WooCommerce orders, with consent handled in plain terms.' },
      { title: 'Festive season planning', body: 'Budget, feed and promotion plans for Navratri, Diwali, marketplace sale weeks and end-of-season sales, set up weeks before demand peaks, not during it.' },
      { title: 'Profit-first reporting', body: 'A weekly note on spend, orders, cost per order and ROAS after cancellations and RTO, plus what we changed and why. A monthly review call to plan the next month.' },
    ],
    process: [
      { title: 'Free account and feed audit', body: 'We review your Google Ads account, Merchant Center diagnostics, tracking and the last few months of orders, including COD share and RTO, to find wasted spend.' },
      { title: 'Targets and a written quote', body: 'We agree a target ROAS or cost per order from your margins, then send a written quote listing scope, timeline and exclusions. Ad spend stays separate.' },
      { title: 'Rebuild feed and campaigns', body: 'Feed fixes, custom labels, tracking repairs and a new campaign structure go live in planned stages, so learning is not reset all at once.' },
      { title: 'Optimise and scale', body: 'Weekly search-term reviews, bid target changes and budget shifts towards the products and searches that bring prepaid, profitable orders.' },
    ],
    platforms: ['Google Ads', 'Google Merchant Center', 'Performance Max', 'GA4', 'Google Tag Manager', 'Shopify', 'WooCommerce', 'Looker Studio'],
    figures: [
      { type: 'mindmap', caption: 'The four parts of Google-led ecommerce PPC that decide whether ad spend turns into profit.', after: 0, center: 'Google ads for a store', branches: [
        { label: 'Product feed', items: ['Clear titles and GTINs', 'GST-inclusive prices', 'Delivery and returns info'] },
        { label: 'Campaigns', items: ['Shopping and PMax', 'Brand and non-brand search', 'Remarketing'] },
        { label: 'Targets', items: ['Margin custom labels', 'ROAS after COD and RTO'] },
        { label: 'Tracking', items: ['GA4 purchase events', 'Enhanced conversions', 'Orders matched to backend'] },
      ] },
      { type: 'matrix', caption: 'Margin and sales volume decide how hard each product group should be pushed in Shopping.', after: 2, cols: ['Low margin', 'High margin'], rows: ['Sells well already', 'Slow or untested'], cells: [
        { title: 'Hold steady', body: 'Higher ROAS target so volume does not eat profit' },
        { title: 'Push hardest', body: 'Own campaign, lower ROAS target, most of the budget' },
        { title: 'Pause or bundle', body: 'Exclude, or sell inside a bundle with better margin' },
        { title: 'Test carefully', body: 'Small budget and a fixed review date before scaling' },
      ] },
      { type: 'steps', caption: 'A festive-season timeline for Google Shopping, from feed checks to the post-sale review.', after: 4, steps: [
        { title: 'Check the feed', body: 'Stock, prices and sale prices correct' },
        { title: 'Load promotions', body: 'Add offers in Merchant Center early' },
        { title: 'Raise budgets', body: 'Increase spend as searches start rising' },
        { title: 'Watch COD and RTO', body: 'Track refused orders daily in peak weeks' },
        { title: 'Review after', body: 'Compare real profit, then reset targets' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce PPC agency in India actually does',
        paragraphs: [
          'PPC, or pay-per-click, means you pay Google each time someone clicks your ad. For an online store, almost all of that spend goes into three places: Google Shopping and Performance Max, which show your product image and price; Search ads, which show text ads for brand and product searches; and remarketing, which brings back people who visited without buying.',
          'An ecommerce PPC agency in India should run these as one system tied to your product feed, your margins and your real orders. That is the difference from broader performance marketing, which also covers Meta ads on Facebook and Instagram. This page is about the Google side: catching shoppers who are already searching for what you sell.',
        ],
      },
      {
        heading: 'Merchant Center feeds built for Indian stores',
        paragraphs: [
          'Shopping and Performance Max campaigns are only as good as the product feed. Google reads your titles, product types, images and prices to decide which searches your products can appear for, and it checks your feed against your website.',
          'Indian stores have a few details that often cause warnings or disapprovals. Prices must match the website and include GST, because Indian shoppers see tax-inclusive prices. Delivery settings should reflect where you actually ship, including pin codes you cannot serve. COD availability and your returns policy should be clear on the site and set in Merchant Center, because both affect how your listing is shown.',
        ],
        bullets: [
          'Titles that lead with product type, then brand, colour, size or material',
          'GST-inclusive prices and sale prices that match the product page exactly',
          'Shipping and delivery times set by region, with unserviceable pin codes handled',
          'A clear returns policy and COD information on the site and in Merchant Center',
        ],
      },
      {
        heading: 'Target ROAS after COD, RTO and returns',
        paragraphs: [
          'Google sees an order the moment it is placed. It does not know that a COD parcel was refused at the door, or that a size was returned a week later. In India, where return-to-origin on cash-on-delivery orders is a common cost, this gap can make an unprofitable campaign look healthy.',
          'Start by working out break-even ROAS for each product group from your margin after product cost, shipping, payment charges and expected RTO. Then use custom labels in the feed to group products by margin band, and set a different target ROAS for each group. If COD orders return far more often than prepaid ones, consider sending a lower conversion value for COD orders, or valuing prepaid orders more, so Google learns to find the buyers who actually pay.',
        ],
      },
      {
        heading: 'Search campaigns, remarketing and regional-language keywords',
        paragraphs: [
          'A small branded Search campaign protects your name when competitors or resellers bid on it, and it is usually the cheapest traffic in the account. Non-brand Search works for specific, high-intent terms such as a product type with a fabric, size or use, where a text ad and a focused landing page can beat a Shopping listing.',
          'Many Indian shoppers search in Hindi, Tamil or other languages, or type regional words in English letters. For categories like ethnic wear, Ayurveda and packaged food, these terms can be worth their own ad groups. Remarketing then brings back product viewers and cart abandoners, with recent buyers excluded so you do not pay to reach people who just ordered.',
        ],
      },
      {
        heading: 'Tracking, GA4 and the DPDP Act in plain terms',
        paragraphs: [
          'Good bidding needs good data. Google Ads conversion tracking, enhanced conversions and GA4 purchase events should all report the same orders your Shopify or WooCommerce backend shows, with order value sent net of discounts. Enhanced conversions send hashed customer details such as email to improve matching, which matters more as browsers limit cookies.',
          'India’s Digital Personal Data Protection Act sets rules for how businesses collect and use personal data, including for advertising. In plain terms: tell shoppers what you collect and why, get consent where it is needed, and use customer lists only in ways you have explained. We set up tracking with this in mind, but we are not lawyers, so take legal advice for your specific case.',
        ],
      },
      {
        heading: 'Festive peaks, marketplaces and choosing an agency',
        paragraphs: [
          'Searches rise sharply around Navratri and Diwali, and the big marketplace sale weeks such as Flipkart Big Billion Days and the Amazon Great Indian Festival pull shoppers and raise click costs across Google too. End-of-season sales bring a second wave. Feed checks, promotions and budget increases should be ready before demand peaks.',
          'If you also sell on Amazon or Flipkart, plan marketplace ads alongside Google so you do not pay twice for the same buyer; we cover those on separate pages. When you compare options for an ecommerce PPC agency in India, ask who owns the accounts, how ROAS is adjusted for RTO, and how often search terms are reviewed. With us, accounts stay in your name, ad spend is paid directly to Google, and the management fee is quoted after a free audit. Founders can also meet the team at our Chennai head office or our Bengaluru office by appointment.',
        ],
        bullets: [
          'Google Ads and Merchant Center owned by you, with agency access only',
          'ROAS reported after cancellations, RTO and returns, not just platform figures',
          'Weekly search-term and feed reviews, not a monthly glance',
          'A written quote with scope and exclusions before any work starts',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce Meta ads agency in India', href: '/ecommerce-meta-ads-agency/' },
      { label: 'PPC company in Bangalore', href: '/bangalore/ppc-company/' },
      { label: 'PPC agency in Chennai', href: '/chennai/ppc-agency/' },
      { label: 'Performance marketing agency for Meta and Google ads', href: '/performance-marketing/' },
      { label: 'Amazon advertising agency for Sponsored ads', href: '/amazon-marketing-agency/' },
      { label: 'Flipkart account management and Flipkart Ads', href: '/flipkart-account-management/' },
      { label: 'Shopify development for stores that convert ad traffic', href: '/shopify-development/' },
      { label: 'E-commerce SEO services', href: '/ecommerce-seo/' },
      { label: 'Free ROAS calculator for online stores', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce PPC agency do?', a: 'It plans and manages paid search ads for an online store, mostly on Google. That covers Merchant Center feed fixes, Google Shopping and Performance Max campaigns, brand and non-brand Search, remarketing, conversion tracking and weekly reporting on cost per order and ROAS, judged against real orders rather than platform figures alone.' },
      { q: 'How much does an ecommerce PPC agency cost in India?', a: 'It depends on catalogue size, how many campaigns and languages you run, the state of your feed and tracking, and how competitive your categories are. Ad spend is paid directly to Google from your own account. Our management fee is quoted separately after a free audit, in a written quote listing scope, timeline and exclusions.' },
      { q: 'How is this different from your performance marketing service?', a: 'Our performance marketing service plans Meta and Google ads together for brands that need both. This ecommerce PPC service is Google-led: Shopping, Performance Max, Search, remarketing and the Merchant Center feed. Many stores start here because shoppers searching on Google already know what they want, then add Meta later.' },
      { q: 'What is a good ROAS for Google Shopping in India?', a: 'There is no single good number. A good ROAS is above your break-even ROAS, worked out from margin after product cost, shipping, payment charges, returns and RTO on COD orders. High-margin products can run on a lower target than low-margin ones, which is why we group products by margin.' },
      { q: 'Should COD orders count the same as prepaid orders?', a: 'Not always. If a meaningful share of COD orders is refused or returned, counting them at full value tells Google to find more buyers like them. Many brands send a lower conversion value for COD, or adjust values later, so bidding favours shoppers who actually pay. The right setting depends on your RTO data.' },
      { q: 'Who owns the Google Ads and Merchant Center accounts?', a: 'You do. We work inside your own Google Ads, Merchant Center and GA4 accounts with access you grant. Ad spend is billed by Google to your payment method, and if you stop working with us, every campaign, audience list and report stays with you.' },
      { q: 'Can we meet the team in person?', a: 'Yes. Our head office and main delivery team are in Chennai, and we also have a Bengaluru office. Clients can meet the team at either office by appointment. Brands elsewhere in India work with us remotely through video calls, shared reports and a regular monthly review.' },
    ],
  },
];
