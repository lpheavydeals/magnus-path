import type { ServicePageData } from '../../data/types';

const londonBreadcrumb = [
  { label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' },
  { label: 'London', href: '/london/ecommerce-agency/' },
];

export const londonGoogleAdsPages: ServicePageData[] = [
  {
    slug: 'london/google-ads-agency',
    kind: 'location',
    market: 'UK',
    title: 'Google Ads Agency in London for Online Shops',
    description: 'Google Ads agency in London for online shops and local firms: Shopping, Performance Max, Search and local campaigns in your own account. Quoted in GBP.',
    primaryKeyword: 'Google Ads agency in London',
    navLabel: 'Google Ads Agency London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Google Ads in London · Shopping · Performance Max · Search · Local',
    h1: 'Google Ads Agency in London for *Online Shops*',
    intro: 'Billion Ecommerce Agency is a Google Ads agency in London that works only on Google: Shopping, Performance Max, Search and local campaigns for online shops and shops with a showroom. We tidy your product feed, set targets by margin and fix tracking before adding budget. Meet us at our London office by appointment, and get a GBP quote after a free audit.',
    icon: 'social',
    facts: ['London office in E18, meetings by appointment', 'Google Ads only, with an ecommerce focus', 'Your account, ad spend paid to Google'],
    headings: {
      pains: 'Where London Google Ads accounts *leak money*',
      includes: 'What we run inside your Google Ads account',
      process: 'Starting Google Ads with us in *4 steps*',
      guide: 'Google Ads in London: a working guide for online shops and local businesses',
    },
    pains: [
      { title: 'Performance Max spending on your own brand', body: 'Performance Max reports a strong ROAS, but much of it comes from people who already searched your shop name. New customers are harder to find than the dashboard suggests.' },
      { title: 'A feed Google keeps rejecting', body: 'Disapproved products, missing GTINs, prices that do not match the site and vague titles mean your strongest lines never show in Shopping, while weaker ones soak up spend.' },
      { title: 'Ads shown far beyond your delivery area', body: 'A showroom in Walthamstow or same-day delivery inside the M25 is worth little if ads reach people who cannot visit or who expect delivery you do not offer.' },
    ],
    includes: [
      { title: 'Google Ads account audit', body: 'A review of structure, search terms, feed health, bidding, conversion tracking and wasted spend, with fixes ranked by likely effect and explained without jargon.' },
      { title: 'Merchant Center feed work', body: 'Product titles, GTINs, VAT-inclusive prices, delivery and returns settings, and custom labels by margin, so Shopping and Performance Max can sort your catalogue properly.' },
      { title: 'Shopping and Performance Max', body: 'Campaigns split by margin and stock, with brand traffic kept apart, sensible asset groups and target ROAS set per product group rather than one figure for the whole shop.' },
      { title: 'Search campaigns', body: 'Brand and non-brand campaigns, controlled match types, shared negative lists and careful competitor terms, with ad copy that states delivery, returns and stock clearly.' },
      { title: 'Local campaigns across London', body: 'Location targeting by borough or radius, call tracking, store and showroom visit goals and a linked Google Business Profile for shops and businesses with a London address.' },
      { title: 'Tracking, consent and reporting', body: 'GA4, enhanced conversions and Consent Mode v2 tested against real orders, plus a plain monthly report in GBP on spend, revenue, new customers and margin.' },
    ],
    platforms: ['Google Ads', 'Google Merchant Center', 'Performance Max', 'YouTube', 'Demand Gen', 'Google Analytics 4', 'Google Tag Manager', 'Google Business Profile', 'Looker Studio', 'Shopify', 'WooCommerce'],
    process: [
      { title: 'Free account audit', body: 'We review your Google Ads account, Merchant Center and tracking, then talk through the findings on a call or at our London office.' },
      { title: 'Plan and GBP quote', body: 'A written plan covering structure, feed fixes, targets and tracking, with the monthly management fee quoted in GBP.' },
      { title: 'Restructure in stages', body: 'Tracking and feed come first, then campaigns are rebuilt gradually so proven keywords and bidding history are kept.' },
      { title: 'Manage and review', body: 'Weekly search-term, feed and bid work; requests sent before UK lunchtime are usually handled the same day.' },
    ],
    local: {
      city: 'London',
      areas: ['Stratford', 'Walthamstow', 'Woodford', 'Ilford', 'Canary Wharf', 'Shoreditch', 'Islington', 'the City', 'Camden', 'Hackney'],
      note: 'Our London office is in E18, near Woodford and South Woodford. You can meet the team there by appointment to go through your account; most day-to-day Google Ads work is done by our Chennai team, so changes keep moving after UK hours.',
    },
    figures: [
      { type: 'mindmap', caption: 'The four parts of a Google Ads account that decide whether a London shop makes a profit.', after: 0, center: 'Google Ads for a shop', branches: [
        { label: 'Feed', items: ['Clear titles and GTINs', 'VAT-inclusive prices', 'Margin custom labels'] },
        { label: 'Campaigns', items: ['Shopping and PMax', 'Brand and non-brand Search', 'Local for showrooms'] },
        { label: 'Tracking', items: ['GA4 and enhanced conversions', 'Consent Mode v2'] },
        { label: 'Targets', items: ['ROAS set by margin', 'New customer goals'] },
      ] },
      { type: 'matrix', caption: 'Which Google campaign type to lead with, by how people find you and where you sell.', after: 2, cols: ['Online only', 'Shop or showroom'], rows: ['People search for it', 'People need to discover it'], cells: [
        { title: 'Shopping first', body: 'Shopping and Search on a clean feed, then Performance Max' },
        { title: 'Search plus local', body: 'Borough targeting, calls and Business Profile' },
        { title: 'Demand Gen tests', body: 'YouTube and Demand Gen, then retarget in Search' },
        { title: 'Local awareness', body: 'Video near the shop, then search ads for visits' },
      ] },
      { type: 'steps', caption: 'A simple Google Ads calendar for the London peak season.', after: 4, steps: [
        { title: 'October', body: 'Feed checks, promotions and budgets agreed' },
        { title: 'Black Friday', body: 'Raise budgets on stocked, high-margin lines' },
        { title: 'Christmas', body: 'Show last order dates; trim slow delivery' },
        { title: 'Boxing Day', body: 'Sale prices in the feed before midnight' },
        { title: 'January sales', body: 'Clear stock, then reset targets' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Google Ads agency in London does for an online shop',
        paragraphs: [
          'A Google Ads agency in London manages one channel in depth: the ads you run on Google Search, Shopping, YouTube and the wider Google network. For an online shop, most of the money moves through Shopping and Performance Max, so the work starts with the product feed and the conversion data rather than with ad copy.',
          'London makes this harder and more rewarding. Shoppers compare quickly, delivery expectations are high and many searches are contested by national retailers and marketplaces. A good account here is built around which products make money, which postcodes you can serve well and which searches come from people ready to buy.',
          'Picking a Google Ads agency in London that only manages Google is a choice of depth over breadth. If you also need Microsoft Ads and Meta run alongside Google, our PPC service in London covers those platforms together.',
        ],
      },
      {
        heading: 'Google Shopping and Performance Max: start with the feed',
        paragraphs: [
          'Shopping and Performance Max read your Merchant Center feed to decide which products to show and to whom. Weak titles, missing GTINs or prices that do not match the site lead to disapprovals or poor placement. Titles should lead with what shoppers type: product type, brand, size, colour and material.',
          'UK rules matter here. Prices in the feed should include VAT, exactly as shown on the product page and at checkout. Delivery costs, delivery times and the returns window should be set in Merchant Center so shoppers see them in the ad.',
          'Custom labels are where margin enters the account. Labelling products by margin band, stock depth or season lets you give each group its own target ROAS, instead of one figure that underfunds your profitable lines and overspends on cheap ones. Keep brand searches out of Performance Max where possible, so you can see how many new customers it actually finds.',
        ],
      },
      {
        heading: 'Search campaigns: brand, non-brand and competitor terms',
        paragraphs: [
          'Search still carries the clearest intent. Keep brand and non-brand in separate campaigns: brand clicks are cheap and convert well, and mixing them hides how non-brand is really doing.',
          'Use broad match only where your conversion tracking is solid and your negative lists are kept up to date. Phrase and exact match give tighter control while the account learns. Review search terms every week and add negatives for jobs, free items, wholesale or places you do not deliver.',
          'Bidding on competitor names can work, but expect higher costs and lower conversion rates, and never use a rival trademark in your ad text. Test it with a small, separate budget.',
        ],
      },
      {
        heading: 'Local campaigns across London boroughs',
        paragraphs: [
          'If you have a shop, showroom or studio, Google Ads can drive calls and visits as well as online orders. Set location targeting to the boroughs or radius you can really serve, choose "presence" rather than "interest" so the ads reach people who are actually in the area, and adjust bids for nearby postcodes.',
          'Link your Google Business Profile so location assets show your address and opening hours, and track calls from ads as conversions. Store visit reporting is only available to some accounts, so treat calls, direction clicks and booked appointments as the main local signals.',
          'YouTube and Demand Gen play a supporting role. They build interest among people who are not yet searching, and they work well before a launch or a seasonal sale. Judge them on how much they lift branded searches and returning visitors, not on direct sales alone.',
        ],
      },
      {
        heading: 'Tracking, consent and London trading peaks',
        paragraphs: [
          'Google bids on the data you give it, so tracking comes before budget. Set up GA4 and Google Ads conversion tags through Google Tag Manager, add enhanced conversions to recover orders lost to browser limits, and check that reported purchases match your shop platform.',
          'Consent Mode v2 connects your cookie banner to Google tags, so measurement respects each visitor\'s choice. UK GDPR and PECR set the rules on cookies and personal data; in plain terms, you need valid consent before non-essential tracking runs. We set this up carefully, but we are not lawyers, so ask your adviser to check your privacy policy and banner wording.',
          'The London calendar is busy. Black Friday, Christmas, Boxing Day and the January sales each need budgets, promotions and feed prices updated in advance, along with clear last order dates for Christmas delivery.',
        ],
      },
      {
        heading: 'Audits, restructures and working with our London team',
        paragraphs: [
          'Most accounts we see do not need starting from scratch. A Google Ads account audit shows what to keep, what to pause and what to rebuild. Restructures happen in stages, so campaigns with proven keywords and bidding history keep running while new ones learn.',
          'Your Google Ads and Merchant Center accounts stay in your company\'s name, and ad spend is paid directly to Google from your card or invoice. Our management fee is quoted separately in GBP after the free audit, based on catalogue size, number of campaigns, local targeting and tracking work.',
          'As a Google Ads agency in London with an office in E18, we can meet you there by appointment to review the account. Most daily work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.',
        ],
        bullets: [
          'Admin access granted through your own Google account, never shared passwords',
          'Change log and monthly report in GBP',
          'If you stop working with us, the account and its history stay with you',
        ],
      },
    ],
    related: [
      { label: 'Facebook ads agency in London', href: '/london/facebook-ads-agency/' },
      { label: 'Multi-platform PPC in London: Google, Microsoft and Meta', href: '/london/ppc-agency/' },
      { label: 'Ecommerce PPC agency for UK online shops', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'E-commerce agency in London', href: '/london/ecommerce-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
      { label: 'E-commerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
      { label: 'Free ROAS calculator for Google Ads targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a Google Ads agency in London do?', a: 'It plans and manages your Google advertising: Search, Shopping, Performance Max, local campaigns, YouTube and Demand Gen. For online shops that includes Merchant Center feed work, conversion tracking and targets set by margin. The aim is profitable orders, calls and visits, not just more clicks or impressions.' },
      { q: 'How much does Google Ads management cost in London?', a: 'We quote a monthly management fee in GBP after a free audit. The fee depends on catalogue size, the number of campaigns, local targeting and how much tracking and feed work is needed. Ad spend is separate and paid directly to Google from your own account, so you always control the budget.' },
      { q: 'Is Performance Max right for my online shop?', a: 'Often, once the feed is clean and conversion tracking is reliable. Performance Max needs good product data and enough conversions to learn from. We usually separate brand traffic, group products by margin with custom labels and compare it with standard Shopping before moving more budget into it.' },
      { q: 'Can you target specific London boroughs or postcodes?', a: 'Yes. Google Ads can target boroughs, postcode districts or a radius around your shop or showroom. We use "presence" targeting so ads reach people who are actually in the area, adjust bids by location and track calls and direction clicks so you can see which areas bring customers.' },
      { q: 'Can I meet your team in London?', a: 'Yes. Our London office is in E18, East London, and you can meet the team there by appointment for audits, planning and account reviews. Most day-to-day work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
      { q: 'Do you set up Consent Mode v2 and enhanced conversions?', a: 'Yes. We connect Consent Mode v2 to your cookie banner, set up enhanced conversions and GA4, and test them against real orders. We follow UK GDPR and PECR good practice in plain terms, but we are not lawyers, so your privacy policy and banner wording should be checked by your adviser.' },
      { q: 'Who owns the Google Ads account?', a: 'You do. The Google Ads and Merchant Center accounts stay in your company\'s name and are paid for with your own billing details. We work through user access you grant, so if you ever stop working with us, the campaigns, data and bidding history remain yours.' },
    ],
  },
];
