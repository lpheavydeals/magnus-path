import type { ServicePageData } from '../../data/types';

const ukBreadcrumb = [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }];

export const ukPpcPages: ServicePageData[] = [
  // ───────────────────────── Ecommerce PPC agency (UK) ─────────────────────────
  {
    slug: 'uk/ecommerce-ppc-agency',
    kind: 'global',
    market: 'UK',
    twin: 'ecommerce-ppc-agency',
    title: 'Ecommerce PPC Agency UK: Shopping & Performance Max | Magnus Path',
    description: 'Ecommerce PPC agency for UK online shops: Google Shopping, Performance Max, Search and Microsoft Ads, with feed work and bids set by margin. Quoted in GBP.',
    primaryKeyword: 'ecommerce PPC agency',
    navLabel: 'Ecommerce PPC Agency UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Google Shopping · Performance Max · Search · Microsoft Ads',
    h1: 'Ecommerce PPC Agency for UK Online Shops That Bids on *Margin, Not Clicks*',
    intro: 'Magnus Path is an ecommerce PPC agency for UK online shops. We run Google Shopping, Performance Max, Search and Microsoft Advertising, fix your Merchant Center feed and set targets from your real product margins. Your ad accounts stay in your name, ad spend goes straight to Google and Microsoft, and we quote our management fee in GBP after a free audit.',
    icon: 'social',
    facts: ['Accounts stay in your name', 'London office in E18, meetings by appointment', 'Quoted in GBP after a free audit'],
    headings: {
      pains: 'Why UK online shops overspend on Google Ads',
      includes: 'What our ecommerce PPC management for UK stores covers',
      process: 'How we take over and grow your ad accounts in *4 steps*',
      guide: 'Ecommerce PPC in the UK: a practical guide for online retailers',
    },
    pains: [
      { title: 'Performance Max takes credit for brand sales', body: 'Campaigns report a healthy ROAS, but much of it comes from people who were already searching for your shop by name. Real new-customer growth stays flat while spend climbs.' },
      { title: 'One ROAS target for every product', body: 'A single target treats a low-margin top seller and a high-margin accessory the same. Google pushes the items that sell easily, and profit quietly leaks away on every order.' },
      { title: 'A feed that holds the account back', body: 'Supplier titles, missing GTINs, wrong delivery costs and disapproved products limit where you can show. No bidding strategy fixes a product feed Google does not trust.' },
    ],
    includes: [
      { title: 'Google Shopping and Performance Max', body: 'Campaigns split by margin, stock and product role, with asset groups, listing groups and search themes kept tidy so you can see what each part of the catalogue earns.' },
      { title: 'Search with a brand / non-brand split', body: 'Brand terms in their own campaign with a lean budget, and non-brand Search built around category and product searches that bring in new UK customers.' },
      { title: 'Merchant Center feed optimisation', body: 'Titles rewritten in British English, GTINs and brands checked, custom labels by margin, VAT-inclusive GBP prices, and delivery and returns settings that match your site.' },
      { title: 'Profit-based bidding', body: 'Target ROAS worked out from your gross margins, with the option to report profit on ad spend (POAS) so decisions follow money kept, not revenue alone.' },
      { title: 'Microsoft Advertising and remarketing', body: 'Shopping and Search imported and adjusted for Bing, plus remarketing on Google and, where it helps, supporting Meta ads to bring back people who viewed products.' },
      { title: 'Tracking, Consent Mode v2 and GA4', body: 'Conversion tags, enhanced conversions, Consent Mode v2 with your cookie banner and GA4 checked against real orders, so the numbers you bid on are the numbers you bank.' },
    ],
    platforms: ['Google Ads', 'Google Merchant Center', 'Microsoft Advertising', 'GA4', 'Google Tag Manager', 'Shopify', 'WooCommerce', 'Looker Studio'],
    process: [
      { title: 'Free PPC audit', body: 'With read-only access we review campaigns, the feed, tracking and search terms, then walk you through what is wasting money on a UK morning video call or at our London office.' },
      { title: 'Plan and GBP quote', body: 'A written plan covering structure, feed fixes, tracking and targets by margin, with a monthly management fee quoted in GBP. Ad spend stays separate and is paid by you to the platforms.' },
      { title: 'Fix tracking and the feed, then rebuild', body: 'We repair conversion tracking and the Merchant Center feed first, then restructure Shopping, Performance Max and Search without switching off what already sells.' },
      { title: 'Weekly tuning, monthly review', body: 'Search terms, budgets, bids and products are reviewed every week. Each month we report spend, revenue, ROAS and contribution margin in GBP and agree the next tests.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four areas that decide whether an online shop’s PPC makes money.', after: 0, center: 'Ecommerce PPC', branches: [
        { label: 'Campaigns', items: ['Shopping and Performance Max', 'Brand and non-brand Search', 'Microsoft Advertising'] },
        { label: 'Product feed', items: ['Clear British titles', 'GTINs and custom labels', 'Delivery and returns'] },
        { label: 'Bidding', items: ['Targets set from margin', 'Profit, not only revenue'] },
        { label: 'Tracking', items: ['Consent Mode v2', 'GA4 checked against orders'] },
      ] },
      { type: 'matrix', caption: 'How to treat each group of products once custom labels show margin and sales volume.', after: 2, cols: ['High margin', 'Low margin'], rows: ['Sells often', 'Sells rarely'], cells: [
        { title: 'Push hard', body: 'Lower ROAS target and full budget; these fund growth' },
        { title: 'Hold the line', body: 'Higher ROAS target so each sale still pays its way' },
        { title: 'Test and learn', body: 'Own campaign with a small budget to find demand' },
        { title: 'Cut back', body: 'Exclude or leave to free listings and organic search' },
      ] },
      { type: 'steps', caption: 'A simple run-up to Black Friday and Christmas for UK shops.', after: 4, steps: [
        { title: 'Check stock', body: 'Confirm which products can cope with demand' },
        { title: 'Ready the feed', body: 'Sale prices, promotions, delivery cut-offs' },
        { title: 'Set budgets early', body: 'Agree peak caps and daily limits in advance' },
        { title: 'Watch daily', body: 'Move spend to what sells, pause what is out' },
        { title: 'Boxing Day', body: 'Switch messages to sales and gift returns' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce PPC agency should do for a UK shop',
        paragraphs: [
          'PPC for an online shop is a different job from PPC for a local service business. Most of the money goes through Google Shopping and Performance Max, the product feed matters as much as the ads, and success is measured in orders and margin rather than leads. A good ecommerce PPC agency spends its first weeks on the dull parts: tracking, the feed and account structure. Clever ad copy comes later.',
          'This page is about UK-wide campaigns for online retailers. If you are a London business looking for local Google Ads, including service firms that want calls from nearby postcodes, our PPC agency in London page covers that work. Here the focus is selling products to shoppers across England, Scotland, Wales and Northern Ireland.',
          'Before hiring anyone, check who owns the accounts. With Magnus Path your Google Ads, Merchant Center, Microsoft Advertising and GA4 accounts stay in your name, you pay ad spend directly to Google and Microsoft, and our management fee is a separate line quoted in GBP. If you ever leave, everything stays with you.',
        ],
      },
      {
        heading: 'Google Shopping, Performance Max and Search: how they fit together',
        paragraphs: [
          'Performance Max can show your products across Shopping, Search, YouTube, Display, Gmail and Maps from one campaign. That reach is useful, but it also makes it easy to hide brand searches and remarketing inside a strong-looking ROAS. We usually exclude brand terms from Performance Max where the account allows it and run brand Search on its own with a modest budget, so you can see how much new demand the rest of the account creates.',
          'Standard Shopping campaigns still earn a place. They give tighter control for testing new ranges, protecting a hero product or checking whether Performance Max is genuinely adding sales. Non-brand Search covers category and problem searches, such as "waterproof walking boots women" or "oak dining table extending", where a shopper has not yet chosen a shop.',
        ],
        bullets: [
          'Brand Search: protect your name cheaply and measure it separately',
          'Non-brand Search: category and product searches from new customers',
          'Performance Max: broad reach, split by margin and product role',
          'Standard Shopping: control for tests, launches and key products',
        ],
      },
      {
        heading: 'Merchant Center feed optimisation for UK products',
        paragraphs: [
          'Your feed decides which searches your products can appear for. Titles imported from suppliers often read like stock codes or use American terms. UK shoppers search for trainers, jumpers, trousers and duvet covers, so titles should lead with the words they type, then brand, colour, size and material. GTINs and brand fields should be complete, because missing identifiers limit where products show.',
          'Prices must be VAT-inclusive and in GBP, exactly as shown at checkout. Delivery costs, delivery times and returns policies set in Merchant Center should match your site and your carriers, whether that is Royal Mail, Evri or DPD. Custom labels are where a feed becomes a bidding tool: we label products by margin band, sales rank, season and stock depth, so campaigns can treat each group differently.',
        ],
      },
      {
        heading: 'Profit-based bidding: target ROAS from margins and POAS',
        paragraphs: [
          'A target ROAS should come from your numbers, not a rule of thumb. If a product keeps 40% of its sale price after cost of goods, delivery and payment fees, the break-even ROAS is 1 divided by 0.4, which is 2.5. Below that, every sale loses money before overheads. Products with thinner margins need a higher target to stay profitable, and high-margin products can afford a lower one to win more volume.',
          'Profit on ad spend, or POAS, takes the same idea further. Instead of sending revenue to Google as the conversion value, you send gross profit per order, so bidding chases the orders that leave money in the bank. It needs clean margin data and a little setup work, but for shops with a wide spread of margins it is often the clearest way to stop growth in revenue hiding a fall in profit. Our ROAS calculator helps you work out break-even targets before you change anything.',
        ],
      },
      {
        heading: 'Microsoft Advertising, remarketing and other channels',
        paragraphs: [
          'Microsoft Advertising shows ads on Bing, which is the default search engine on many Windows computers, so it reaches some shoppers Google misses. Shopping and Search campaigns can be imported from Google Ads, then adjusted for different bids and search terms. It is rarely the largest channel, but any ecommerce PPC agency running your account should test it once Google is in good order.',
          'Remarketing brings back people who viewed products or left a basket. Performance Max covers much of this on Google, and Meta ads can play a supporting role with catalogue ads for visitors who browse on Instagram and Facebook. If you also sell on Amazon.co.uk, Sponsored Products and Sponsored Brands are a separate discipline with their own data; our Amazon agency for UK sellers handles that side, and we keep both plans aligned so you are not bidding against yourself.',
        ],
      },
      {
        heading: 'Tracking, UK GDPR and Black Friday peaks',
        paragraphs: [
          'Bidding is only as good as the conversion data behind it. UK GDPR and PECR rules mean most shops need a cookie banner, and Google requires Consent Mode v2 for advertisers targeting UK and EEA users who want full measurement and remarketing. We connect your banner to Consent Mode, set up enhanced conversions and check GA4 and Google Ads against real orders in your store. We are not lawyers, so your privacy policy and consent wording should be checked by your own adviser.',
          'Black Friday, Cyber Monday, Christmas and Boxing Day can make or break a UK retailer’s year. Click prices rise, shoppers compare more and delivery cut-offs matter. We plan budgets, feed promotions, stock checks and seasonality adjustments weeks ahead, then watch performance daily through the peak. When you compare ecommerce PPC agencies, whether in the UK or overseas, ask how they handled the last peak and what they changed afterwards.',
        ],
      },
    ],
    related: [
      { label: 'Free ad budget planner', href: '/tools/ad-budget-planner/' },
      { label: 'Ecommerce Meta ads agency (UK)', href: '/uk/ecommerce-meta-ads-agency/' },
      { label: 'Google Ads agency in London', href: '/london/google-ads-agency/' },
      { label: 'PPC agency in London for local businesses', href: '/london/ppc-agency/' },
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Amazon agency for Amazon.co.uk sellers', href: '/uk/amazon-agency/' },
      { label: 'Ecommerce SEO agency for UK retailers', href: '/uk/ecommerce-seo-agency/' },
      { label: 'Shopify agency for UK online shops', href: '/uk/shopify-agency/' },
      { label: 'ROAS calculator for break-even targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce PPC agency do?', a: 'It runs paid search and shopping ads for an online shop. That covers Google Shopping, Performance Max and Search, Microsoft Advertising, Merchant Center feed work, conversion tracking and bids set from your product margins. A good agency reports orders, revenue and margin, not just clicks and impressions, and keeps the ad accounts in your name.' },
      { q: 'How much does an ecommerce PPC agency cost?', a: 'It depends on the number of channels, catalogue size, how much feed and tracking work is needed and how often campaigns change. We quote a monthly management fee in GBP after a free audit, with scope listed in writing. Your ad spend is separate and is paid directly to Google or Microsoft from your own account.' },
      { q: 'Should I use Performance Max or standard Shopping campaigns?', a: 'Often both. Performance Max gives broad reach across Google, while standard Shopping gives tighter control for tests, launches and key products. Many UK shops do well with Performance Max split by margin and product role, brand terms kept in their own Search campaign, and Shopping used to check Performance Max is adding real sales.' },
      { q: 'How do you set a target ROAS for my products?', a: 'We start from margin. Divide 1 by the share of the sale price you keep after cost of goods, delivery and payment fees to find break-even ROAS. Products with thin margins need a higher target, high-margin products can take a lower one. Custom labels in your feed let campaigns apply different targets to each group.' },
      { q: 'Do you set up Consent Mode v2 and GA4?', a: 'Yes. We connect your cookie banner to Consent Mode v2, set up enhanced conversions and check GA4 and Google Ads against real orders in your store. Clean tracking comes before any bidding changes. We are not lawyers, so your privacy policy and consent wording should be reviewed by your own adviser.' },
      { q: 'Will my ad accounts stay in my name?', a: 'Yes. Google Ads, Merchant Center, Microsoft Advertising and GA4 stay owned by your business, and we work through manager access. Ad spend is billed by the platforms to your card or invoice account. If you stop working with us, you keep every account, campaign and piece of data.' },
      { q: 'Do you have a UK office?', a: 'Yes. We have a London office (E18) where UK clients can meet the team by appointment; most delivery is done by our Chennai team. India is 4.5 to 5.5 hours ahead of the UK depending on the season, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },
];
