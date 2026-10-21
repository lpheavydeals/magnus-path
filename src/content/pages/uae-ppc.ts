import type { ServicePageData } from '../../data/types';

const UAE_HUB: { label: string; href: string } = { label: 'United Arab Emirates', href: '/uae/ecommerce-marketing-agency/' };

export const uaePpcPages: ServicePageData[] = [
  // ───────────────────────────────────────────── Ecommerce PPC agency in Dubai
  {
    slug: 'uae/ecommerce-ppc-agency-dubai',
    kind: 'global',
    market: 'UAE',
    title: 'Ecommerce PPC Agency in Dubai | Google Ads for UAE Stores',
    description: 'Ecommerce PPC agency in Dubai for UAE online stores: Google Shopping, Performance Max and Search in English and Arabic, with bids set by product margin.',
    primaryKeyword: 'ecommerce PPC agency in Dubai',
    navLabel: 'Ecommerce PPC Agency Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'For UAE online stores · Google Shopping · Performance Max · Search · Merchant Center',
    h1: 'Ecommerce PPC Agency for Dubai and UAE Stores, *Built on Your Margins*',
    intro: 'Looking for an ecommerce PPC agency in Dubai that runs Google Ads around profit, not clicks? Magnus Path is a Chennai team serving Dubai and the wider UAE remotely. We fix your Merchant Center feed, run Shopping, Performance Max and Search in English and Arabic, and set target ROAS from each product’s margin.',
    icon: 'seo',
    facts: ['Accounts stay in your name', 'English and Arabic campaigns', 'Free audit, quote in AED'],
    headings: {
      pains: 'Why Google Ads underdeliver for many UAE stores',
      includes: 'What our ecommerce PPC management in the UAE covers',
      process: 'Getting your Google Ads in order in *4 steps*',
      guide: 'Ecommerce PPC in Dubai and the UAE: a practical guide for online stores',
    },
    pains: [
      { title: 'Performance Max spending on the wrong products', body: 'One campaign covers the whole catalogue, so budget drifts to cheap, low-margin items and your brand name, while the products that make money barely show.' },
      { title: 'A feed Google keeps flagging', body: 'Missing AED prices, VAT mismatches, wrong delivery times and English-only titles lead to disapprovals and weak matching for Arabic searches.' },
      { title: 'Conversions counted, payments not', body: 'Cash-on-delivery orders are counted when placed, enhanced conversions are not set up, and GA4 disagrees with the store, so bidding learns from the wrong signal.' },
    ],
    includes: [
      { title: 'Google Shopping and Performance Max', body: 'Campaigns split by margin, category and stock, with asset groups for your main ranges and search themes that match how UAE shoppers search.' },
      { title: 'Search campaigns, brand and non-brand', body: 'Brand campaigns kept separate and cheap, non-brand product and category searches built out with tight negatives and landing pages that match.' },
      { title: 'English and Arabic keywords and ads', body: 'Keyword research and ad copy in both languages, with Arabic written or checked by a fluent writer rather than machine-translated.' },
      { title: 'Merchant Center feed management', body: 'AED prices that match your store with VAT included, delivery times by emirate, product titles and attributes, and disapproval fixes.' },
      { title: 'Margin-based custom labels and target ROAS', body: 'Products labelled by margin band, price and stock status, so each group gets its own target ROAS and budget instead of one average.' },
      { title: 'Remarketing and tracking', body: 'Dynamic remarketing and customer lists, GA4 and Google Ads conversion tracking, enhanced conversions and Consent Mode, checked against store orders.' },
      { title: 'Seasonal planning', body: 'Ramadan, Eid, White Friday and Dubai Shopping Festival plans agreed weeks ahead, with stock, promotions and budgets lined up.' },
    ],
    process: [
      { title: 'Free PPC audit', body: 'We review your Google Ads account, Merchant Center feed, GA4 and conversion tracking, then go through what we found on a video call in your working day.' },
      { title: 'Margin targets and AED quote', body: 'Break-even and target ROAS by product group, a campaign structure and a written monthly management quote in AED.' },
      { title: 'Feed and tracking fixes', body: 'Merchant Center clean-up, custom labels, enhanced conversions, Consent Mode and offline order uploads where cash on delivery matters.' },
      { title: 'Rebuild, optimise and report', body: 'Restructured campaigns, weekly search term and budget work, a weekly report on revenue and margin, and a monthly review call.' },
    ],
    platforms: ['Google Ads', 'Google Merchant Center', 'Performance Max', 'GA4', 'Google Tag Manager', 'Looker Studio', 'Shopify', 'WooCommerce'],
    figures: [
      { type: 'mindmap', caption: 'The four parts of ecommerce PPC that decide whether Google Ads pays back for a UAE store.', center: 'Google Ads for UAE shops', after: 0, branches: [
        { label: 'Product feed', items: ['AED prices with VAT', 'Delivery times by emirate', 'English and Arabic titles'] },
        { label: 'Campaigns', items: ['Shopping and PMax', 'Brand and non-brand Search', 'Remarketing'] },
        { label: 'Targets', items: ['Margin custom labels', 'Target ROAS per group'] },
        { label: 'Tracking', items: ['GA4 and enhanced conversions', 'Paid COD orders only'] },
      ] },
      { type: 'matrix', caption: 'How to group products by margin and sales so each group gets the right target ROAS.', after: 2, cols: ['Sells well', 'Sells slowly'], rows: ['High margin', 'Low margin'], cells: [
        { title: 'Push hardest', body: 'Own campaign, lower target ROAS, budget first in line' },
        { title: 'Test and learn', body: 'Small budget, check price, images and title before scaling' },
        { title: 'Guard the margin', body: 'Higher target ROAS, use in bundles or remarketing' },
        { title: 'Leave out', body: 'Exclude from paid ads or keep on a very tight target' },
      ] },
      { type: 'steps', caption: 'A simple run-up to Ramadan, White Friday or DSF so Google Ads campaigns are ready before costs rise.', after: 4, steps: [
        { title: 'Pick the products', body: 'Stock and margin agreed for the offer' },
        { title: 'Update the feed', body: 'Sale prices, promotions, delivery dates' },
        { title: 'Refresh the ads', body: 'Arabic and English copy and images' },
        { title: 'Raise budgets', body: 'Step up gradually before the peak' },
        { title: 'Review afterwards', body: 'Paid revenue and margin, not clicks' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce PPC agency in Dubai actually does',
        paragraphs: [
          'Pay-per-click advertising for an online store is mostly Google Ads: Shopping and Performance Max for product discovery, Search for people typing your brand or a product type, and remarketing for shoppers who visited but did not buy. An ecommerce PPC agency in Dubai should manage all of that around one question: which products make money when advertised, and how much can you afford to pay for each sale?',
          'That is a narrower job than general paid media. If you also want Meta, Snapchat and TikTok handled together with Google, our performance marketing service for Dubai brands covers every paid channel. This page is about Google-led PPC for stores selling across the UAE and, where shipping allows, the wider GCC.',
          'Accounts stay in your name. Your Google Ads account, Merchant Center and GA4 property belong to you, ad spend is billed by Google directly to your card or invoice, and we work through user access. If you ever stop working with us, the history and data stay with you.',
        ],
      },
      {
        heading: 'Merchant Center: the feed behind Shopping and Performance Max',
        paragraphs: [
          'Shopping and Performance Max campaigns can only be as good as your product feed. Google matches searches to your titles, descriptions and attributes, so a feed with vague titles and missing details loses auctions it should win. For UAE stores a few details cause most of the trouble.',
        ],
        bullets: [
          'Prices in AED that match the landing page exactly, with 5% VAT included as shoppers see it',
          'Sale prices and promotions that start and end on the same dates as the store',
          'Shipping settings with realistic delivery times, which may differ between Dubai, Abu Dhabi and the northern emirates',
          'Titles that lead with the product type, brand, size and colour rather than a collection name',
          'Arabic titles and descriptions for Arabic-language targeting, kept in a separate feed or language setting',
          'Payment options such as card, Apple Pay, Tabby, Tamara and cash on delivery shown clearly on the product page',
        ],
      },
      {
        heading: 'Margin-based custom labels and target ROAS',
        paragraphs: [
          'Most underperforming accounts run one target ROAS across the whole catalogue. That treats a high-margin item and a low-margin one as equal, so Google spends wherever conversions are easiest, often on cheap products and your own brand name. Custom labels in the feed fix this by tagging each product with a margin band, a price band and a stock status.',
          'Break-even ROAS is simple: divide one by your margin after product cost, delivery, payment fees and expected returns. A product with a 40% margin breaks even at a ROAS of 2.5. With products grouped by label, each campaign or asset group gets its own target, and budget goes first to the groups that can afford it. Our free ROAS calculator works this out per product.',
          'Any ecommerce PPC agency in Dubai that sets one blended ROAS target for everything will usually report a good average while losing money on part of the range. Ask to see results by margin group.',
        ],
      },
      {
        heading: 'Search in English and Arabic, brand and non-brand',
        paragraphs: [
          'UAE shoppers search in English, in Arabic and in Arabic written in Latin letters, and the words they use differ by product and by audience. We build keyword lists in both languages, write separate ads for each, and send each language to a landing page in the same language. Arabic copy is written or checked by a fluent writer, because machine translation often reads stiffly and loses trust.',
          'Keep brand and non-brand Search apart. Brand searches are cheap and convert well, but most of those buyers would have found you anyway. Non-brand searches such as a product type plus "Dubai" or "UAE" are where new customers come from. Reporting them separately shows what your ads really add.',
        ],
      },
      {
        heading: 'Tracking, cash on delivery and the UAE PDPL',
        paragraphs: [
          'Bidding is only as good as the conversions Google sees. We set up GA4 and Google Ads conversion tracking, add enhanced conversions so purchases are matched more reliably, and check the numbers against your store orders every week. Remarketing lists and customer match then build on the same clean data.',
          'Cash on delivery is still common in the UAE, and Google counts a COD purchase when the order is placed, even if the parcel is later refused. Where COD is a large share of orders, we upload confirmed or delivered orders as offline conversions, so Smart Bidding learns from buyers who pay.',
          'The UAE Personal Data Protection Law (PDPL) sets rules for collecting and using personal data, which affects cookies, customer lists and enhanced conversions. In plain terms: ask for consent, explain what you collect, and only send what your privacy policy allows. We set up Consent Mode accordingly, but we are not lawyers, so have your policy reviewed by a local adviser.',
        ],
      },
      {
        heading: 'Ramadan, Eid, White Friday and DSF, plus marketplaces',
        paragraphs: [
          'The UAE retail calendar has its own peaks. During Ramadan, browsing moves later into the evening and gifting builds towards Eid. White Friday and Noon’s Yellow Friday bring heavy discounting and busier auctions in November, and the Dubai Shopping Festival lifts demand around the turn of the year. Plan each one weeks ahead: agree stock and offers, load promotions into Merchant Center, refresh Arabic and English ads, and raise budgets gradually so campaigns learn before costs peak.',
          'Many UAE shoppers also search directly on Amazon.ae and Noon, and Google Ads often lifts those searches. If you sell on the marketplaces too, our Amazon.ae and Noon agency service handles listings and marketplace ads alongside your Google campaigns.',
          'We have no office in Dubai and do not offer in-person meetings. We are a Chennai team serving Dubai and the wider UAE remotely, and UAE time is only 1.5 hours behind India, so our working days almost fully overlap and calls fit your office hours. When you compare any ecommerce PPC agency in Dubai, ask who owns the accounts, how targets are set by margin, and how COD orders are handled in reporting.',
        ],
      },
    ],
    related: [
      { label: 'Performance marketing agency in Dubai for all paid channels', href: '/uae/performance-marketing-agency-dubai/' },
      { label: 'Ecommerce marketing agency for the UAE', href: '/uae/ecommerce-marketing-agency/' },
      { label: 'Amazon.ae and Noon marketplace agency', href: '/uae/amazon-noon-agency/' },
      { label: 'Ecommerce SEO services in Dubai', href: '/uae/seo-services-dubai/' },
      { label: 'Ecommerce website development in Dubai', href: '/uae/ecommerce-website-development-dubai/' },
      { label: 'ROAS calculator for break-even targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'Do you have an office in Dubai?', a: 'No. Magnus Path has no office, address or trade licence in Dubai, and we do not offer in-person meetings there. We are a Chennai team serving Dubai and the wider UAE remotely, through video calls, WhatsApp and shared reports. UAE time is 1.5 hours behind India, so our working days almost fully overlap.' },
      { q: 'How much does an ecommerce PPC agency in Dubai cost?', a: 'It depends on catalogue size, how many campaigns and languages you need, the state of your feed and tracking, and how competitive your category is. We do not publish fixed prices. After a free audit we send a written scope with a monthly management fee in AED. Ad spend is paid directly to Google from your own account.' },
      { q: 'Who owns the Google Ads and Merchant Center accounts?', a: 'You do. Your Google Ads account, Merchant Center and GA4 property stay in your company’s name, and Google bills ad spend to you directly. We work through user access that you can remove at any time, so the account history, data and audiences remain yours if we stop working together.' },
      { q: 'Should I use Performance Max or standard Shopping campaigns?', a: 'Often both. Performance Max reaches more placements and can work well once tracking and the feed are clean, but it hides detail and can drift to brand searches and cheap products. Standard Shopping gives tighter control. We usually split products by margin with custom labels and test the two side by side.' },
      { q: 'Do you run Google Ads in Arabic?', a: 'Yes. We research Arabic keywords, write Arabic ads, and set up Arabic titles and descriptions in Merchant Center where your store has an Arabic version. Arabic copy is written or checked by a fluent writer rather than machine-translated, and each language sends shoppers to a landing page in the same language.' },
      { q: 'How do you handle cash on delivery in Google Ads?', a: 'Google counts a COD purchase when the order is placed, so refused parcels still look like sales. Where COD is a large share of your orders, we upload confirmed or delivered orders as offline conversions and report paid revenue by campaign, so bidding learns from buyers who actually pay.' },
      { q: 'Do you also manage Meta, Snapchat and TikTok ads?', a: 'This service is Google-led ecommerce PPC. If you want Meta, Snapchat and TikTok run together with Google under one plan and one budget, our performance marketing service for Dubai brands covers all paid channels. Many stores start with Google and add social once tracking is reliable.' },
    ],
  },
];
