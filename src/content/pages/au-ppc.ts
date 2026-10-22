import type { ServicePageData } from '../../data/types';

const auBreadcrumb = [{ label: 'Australia', href: '/australia/ecommerce-marketing-agency/' }];

export const auPpcPages: ServicePageData[] = [
  // ───────────────────────── Ecommerce PPC (Australia) ─────────────────────────
  {
    slug: 'australia/ecommerce-ppc-agency',
    kind: 'global',
    market: 'AU',
    twin: 'ecommerce-ppc-agency',
    title: 'Ecommerce PPC Agency Australia: Shopping & Search | Magnus Path',
    description: 'Ecommerce PPC agency for Australian online stores: Google Shopping, Performance Max, Search and Microsoft Ads run on margin. Quoted in AUD after a free audit.',
    primaryKeyword: 'ecommerce PPC agency',
    navLabel: 'Ecommerce PPC Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Google Shopping · Performance Max · Search · Microsoft Advertising',
    h1: 'Ecommerce PPC for Australian Stores, *Run on Margin*',
    intro: 'Magnus Path is an ecommerce PPC agency for Australian online stores that want ad spend judged on profit, not clicks. We run Google Shopping, Performance Max, Search and Microsoft Advertising from a clean Merchant Center feed, with targets set by product margin. Accounts stay in your name, spend is paid straight to Google and Microsoft, and we quote our fee in AUD after a free audit.',
    icon: 'social',
    facts: ['Accounts stay in your name', 'Targets set by product margin', 'Free audit, quoted in AUD'],
    headings: {
      pains: 'Why Australian stores lose money on Google Ads',
      includes: 'What our ecommerce PPC management for Australian stores covers',
      process: 'How we take over your ad account in *4 steps*',
      guide: 'Ecommerce PPC in Australia: a practical guide for online stores',
    },
    pains: [
      { title: 'One ROAS target for every product', body: 'A single target treats a low-margin clearance line the same as a high-margin hero product. Campaigns look healthy in Google Ads while the products that actually pay the bills get starved of budget.' },
      { title: 'Feed errors quietly cap sales', body: 'Prices that do not match the page, missing shipping by state, vague delivery times or no returns policy. Products get disapproved or shown less, and nobody notices until a peak week goes flat.' },
      { title: 'Brand searches counted as growth', body: 'Performance Max and broad campaigns soak up people already searching your store name. Reported ROAS looks strong, but few of those orders are new customers you would not have won anyway.' },
    ],
    includes: [
      { title: 'Merchant Center feed management', body: 'Titles, GTINs, GST-inclusive AUD prices, shipping rules across states, delivery times and returns set up so products are approved and matched to the right searches.' },
      { title: 'Google Shopping and Performance Max', body: 'Campaigns split by margin and stock using custom labels, with target ROAS set per group and search terms, placements and asset groups reviewed every week.' },
      { title: 'Search: brand and non-brand', body: 'Brand campaigns kept small and cheap, non-brand campaigns built around categories and buying-intent searches on Google.com.au, with negative keyword lists kept tidy.' },
      { title: 'Microsoft Advertising', body: 'Shopping and Search campaigns imported and then tuned for Bing’s own audience and costs, so you reach desktop and older shoppers your Google campaigns miss.' },
      { title: 'Remarketing to past visitors', body: 'Product viewers, cart abandoners and past buyers reached through Google display, YouTube and Microsoft audiences, with frequency limits so ads stay helpful rather than annoying.' },
      { title: 'GA4 and enhanced conversions', body: 'Purchase tracking checked against your store orders, enhanced conversions set up with consent, and one agreed source of truth for revenue in AUD.' },
      { title: 'Peak season plans', body: 'Budgets, promotions and feed changes planned ahead of Click Frenzy, EOFY, Black Friday, Christmas and Boxing Day, then wound back once the rush ends.' },
    ],
    platforms: ['Google Ads', 'Google Merchant Center', 'Performance Max', 'Microsoft Advertising', 'GA4', 'Google Tag Manager', 'Shopify', 'WooCommerce', 'Looker Studio'],
    process: [
      { title: 'Free account audit', body: 'With read-only access, we review your Google Ads, Merchant Center and GA4 setup, wasted spend and feed health, then walk you through it on a call in your afternoon.' },
      { title: 'Plan and AUD quote', body: 'A written plan covering campaign structure, margin groups, tracking fixes and the first ninety days, with a monthly management fee quoted in AUD.' },
      { title: 'Rebuild and launch', body: 'We fix tracking and the feed first, then restructure campaigns in your own accounts. Nothing is deleted, so past data and learning stay available.' },
      { title: 'Optimise and report', body: 'Weekly changes to bids, search terms and products, and a monthly report on revenue, profit after ad spend and new customers, followed by a review call.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four parts of an ecommerce PPC account for an Australian store, and what each one covers.', center: 'Your PPC account', after: 0, branches: [
        { label: 'Feed', items: ['GST-inclusive AUD prices', 'Shipping by state', 'Returns policy'] },
        { label: 'Campaigns', items: ['Shopping and Performance Max', 'Brand and non-brand Search'] },
        { label: 'Reach', items: ['Microsoft Advertising', 'Remarketing'] },
        { label: 'Tracking', items: ['GA4 purchases', 'Enhanced conversions', 'Consent in place'] },
      ] },
      { type: 'matrix', caption: 'How custom labels group products so the target ROAS follows margin and sales history.', after: 2, cols: ['Healthy margin', 'Thin margin'], rows: ['Sells often', 'Rarely sells'], cells: [
        { title: 'Push hardest', body: 'Lower ROAS target and most of the budget' },
        { title: 'Hold the line', body: 'Higher ROAS target so each sale still pays' },
        { title: 'Test carefully', body: 'Small budget to find out why it is not selling' },
        { title: 'Pause or bundle', body: 'Exclude from ads or sell as part of a bundle' },
      ] },
      { type: 'steps', caption: 'Getting ads ready for a big Australian sales event such as Click Frenzy or Black Friday.', after: 5, steps: [
        { title: 'Confirm stock', body: 'Check which lines can cope with extra orders' },
        { title: 'Load promotions', body: 'Sale prices approved in the feed early' },
        { title: 'Lift budgets', body: 'Raise spend before the event, not on the day' },
        { title: 'Watch delivery', body: 'Update cut-off dates as couriers fill up' },
        { title: 'Wind back', body: 'Reset targets and move spend to remarketing' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce PPC agency should do for an Australian store',
        paragraphs: [
          'Ecommerce PPC is not the same job as running search ads for a service business. An online store advertises hundreds or thousands of products, each with its own price, margin and stock level, and most of the spend goes through Google Shopping and Performance Max rather than text ads. The work starts with the product feed and the tracking, then moves to campaign structure and bids.',
          'The test of a good ecommerce PPC agency is whether it reports profit after ad spend and new customers, not just clicks and ROAS. Your Google Ads and Microsoft Advertising accounts should be in your name, with ad spend billed straight to your card by the platforms. The agency should be a user on your account, so you keep the history if you ever change providers.',
        ],
      },
      {
        heading: 'Merchant Center feeds for Australian shoppers',
        paragraphs: [
          'Shopping and Performance Max are only as good as the feed behind them. In Australia, the price in your feed should be the GST-inclusive AUD price shown on the product page, and the two must match exactly. Mismatched prices are one of the most common reasons for disapproved products.',
          'Shipping needs the same care. A store sending from Melbourne may charge differently for Perth, Darwin or regional Queensland, and delivery through Australia Post, Sendle or a courier takes longer to some states than others. Merchant Center lets you set shipping costs and delivery times by region, and accurate numbers help your ads show a realistic delivery estimate.',
        ],
        bullets: [
          'Product titles written the way Australians search, with brand, type, size and colour',
          'GTINs and brand set for every product that has them',
          'Shipping costs and handling times set by state or postcode',
          'A clear returns policy added in Merchant Center',
        ],
      },
      {
        heading: 'Shopping, Performance Max and margin-based targets',
        paragraphs: [
          'Most stores start with one Performance Max campaign and one target ROAS for the whole catalogue. That is simple, but it lets Google spend where sales are easiest, not where profit is highest. A product with a slim margin may need a much higher return on ad spend to break even than a product with a healthy margin.',
          'Custom labels in the feed fix this. We tag each product by margin band, sales history, season or stock level, then split Shopping and Performance Max campaigns by those labels and set a different target ROAS for each group. Hero products get room to grow, thin-margin lines must earn their place, and dead stock can be tested on a small budget or left out. Our ROAS calculator helps you work out the break-even point for each margin band.',
        ],
      },
      {
        heading: 'Search, Microsoft Advertising and remarketing',
        paragraphs: [
          'Search campaigns still matter alongside Shopping. Brand campaigns protect your store name cheaply when competitors bid on it. Non-brand campaigns capture category and buying-intent searches on Google.com.au, such as a product type plus a size, material or use. Keep the two apart so brand sales do not hide weak non-brand results.',
          'Microsoft Advertising is often ignored, yet it reaches people searching on Bing, through Windows and on work computers, often at lower click costs. Most Google campaigns can be imported and then adjusted. Remarketing brings back product viewers and cart abandoners, and it works better when your ads mention delivery times and payment options such as Afterpay or Zip.',
          'If you also sell on Amazon.com.au, plan your Google ads and Amazon listings together so you are not bidding against your own marketplace offer for the same shopper.',
        ],
      },
      {
        heading: 'GA4, enhanced conversions and the Privacy Act',
        paragraphs: [
          'Every bidding decision depends on accurate purchase data. We check that GA4 and Google Ads record each order once, with the correct value in AUD, and compare those numbers with your store’s own order report. Enhanced conversions send a hashed version of the customer’s email with each purchase, which helps Google match sales to ad clicks more reliably.',
          'In plain terms, the Australian Privacy Act sets rules for how many businesses collect, use and share personal information, including sending it to overseas services. Your privacy policy should explain your use of advertising and analytics tools, and customers should be told how their data is used. We are not lawyers, so check your obligations with your own adviser before turning on features that use customer data.',
        ],
      },
      {
        heading: 'Peak sales dates and working with an offshore team',
        paragraphs: [
          'The Australian retail calendar has several big moments: Click Frenzy, EOFY sales in June, Black Friday and Cyber Monday, then Christmas and Boxing Day. Each needs budgets lifted before the event, promotions approved in the feed in advance and delivery cut-off dates updated as couriers get busy. After the rush, targets should come back to normal before the extra spend turns into waste.',
          'Magnus Path has no Australian office. Our team works remotely from India, with our head office in Chennai. Sydney and Melbourne are 4.5 hours ahead of India in standard time and 5.5 hours in daylight saving, and Perth is 2.5 hours ahead. Our morning is your afternoon on the east coast, so calls fit your afternoon and replies arrive by your evening. We quote ecommerce PPC management in AUD after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce Meta ads agency in Australia', href: '/australia/ecommerce-meta-ads-agency/' },
      { label: 'Ecommerce marketing agency for Australian brands', href: '/australia/ecommerce-marketing-agency/' },
      { label: 'Ecommerce SEO for Australian online stores', href: '/australia/ecommerce-seo/' },
      { label: 'Shopify agency for Australian stores', href: '/australia/shopify-agency/' },
      { label: 'Web development company for Australian businesses', href: '/australia/web-development-company/' },
      { label: 'ROAS calculator for ecommerce ads', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce PPC agency do?', a: 'An ecommerce PPC agency runs paid search and shopping ads for an online store. That covers the Merchant Center feed, Google Shopping and Performance Max, brand and non-brand Search, Microsoft Advertising, remarketing and purchase tracking, with budgets and targets set by product margin and reported against revenue and profit.' },
      { q: 'How much does ecommerce PPC management cost in Australia?', a: 'We quote a monthly management fee in AUD after a free audit. The fee depends on catalogue size, the number of channels, how much rebuilding the feed and tracking need, and how competitive your categories are. Ad spend is separate and paid directly to Google and Microsoft from your own accounts.' },
      { q: 'Should my Merchant Center prices include GST?', a: 'Yes. Australian shoppers expect the total price, so product pages normally show GST-inclusive AUD prices, and your feed should match the page price exactly. Mismatches can get products disapproved. Your accountant should confirm your GST settings; we make sure the feed and the page agree.' },
      { q: 'Is Performance Max enough on its own?', a: 'Rarely. Performance Max can work well for Australian stores, but on its own it tends to chase brand searches and easy sales. Splitting it by margin with custom labels, running separate brand and non-brand Search and checking search term insights gives you more control over where the money goes.' },
      { q: 'Is Microsoft Advertising worth it for Australian online stores?', a: 'Often, as an addition to Google. Microsoft Advertising reaches Bing and Windows users, many on desktop and work computers, usually with fewer competitors bidding. We import your strongest Google campaigns, then adjust bids, budgets and audiences for Microsoft rather than leaving it as a straight copy.' },
      { q: 'Who owns the ad accounts and data?', a: 'You do. Your Google Ads, Microsoft Advertising, Merchant Center and GA4 accounts stay in your business’s name, with ad spend billed to your own payment method. We work as users on those accounts, and if you ever move on, you remove our access and keep all history.' },
      { q: 'Do you have an office in Australia?', a: 'No. Magnus Path works remotely from India, with our head office in Chennai. Sydney and Melbourne are 4.5 hours ahead of India in standard time and 5.5 in daylight saving. Our morning is your east-coast afternoon, so calls fit your afternoon and replies arrive by your evening.' },
    ],
  },
];
