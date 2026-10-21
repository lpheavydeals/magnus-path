import type { ServicePageData } from '../../data/types';

export const bangalorePpcPages: ServicePageData[] = [
  // ───────────────────────── PPC Company in Bangalore ─────────────────────────
  {
    slug: 'bangalore/ppc-company',
    kind: 'location',
    title: 'PPC Company in Bangalore | Google Ads for D2C | Magnus Path',
    description: 'PPC company in Bangalore for D2C brands and startups: Google Shopping, Performance Max, Search and Microsoft Ads, measured on orders and leads. Free audit first.',
    primaryKeyword: 'PPC company in Bangalore',
    navLabel: 'PPC Company Bangalore',
    breadcrumb: [{ label: 'E-commerce Ads', href: '/performance-marketing/' }],
    eyebrow: 'Google Ads and PPC in Bangalore',
    h1: 'PPC Company in Bangalore for *Shopping and Search* Ads',
    intro: 'Magnus Path is a PPC company in Bangalore that manages Google Ads and Microsoft Ads for D2C brands, online stores and B2B startups. We run Shopping, Performance Max and Search from a clean Merchant Center feed, set ROAS targets after COD and RTO costs, and review results with you at our Bengaluru office or on a call.',
    icon: 'social',
    facts: ['Free Google Ads audit first', 'Accounts and billing in your name', 'Bengaluru office, by appointment'],
    headings: {
      pains: 'Where Google Ads budgets go wrong for Bengaluru brands',
      includes: 'What our Google Ads and Microsoft Ads management covers',
      process: 'How we take on your PPC account in *4 steps*',
      guide: 'Paid search in Bengaluru: a buyer’s guide to Google-led PPC',
    },
    pains: [
      { title: 'Performance Max eating brand searches', body: 'Automated campaigns take credit for people who already typed your brand name, so reported ROAS looks strong while real new-customer growth stays flat.' },
      { title: 'A feed Google keeps rejecting', body: 'Price mismatches, missing GTINs and delivery promises the courier cannot keep lead to disapproved products, and Shopping ads quietly stop serving your hero items.' },
      { title: 'Demo requests that sales cannot use', body: 'Startup and SaaS campaigns fill the form with students, job seekers and competitors, because Google only knows a form was submitted, not which leads turned into pipeline.' },
    ],
    includes: [
      { title: 'Shopping and Performance Max', body: 'Product campaigns grouped by margin, price band and stock depth, with brand exclusions, search themes and audience signals chosen deliberately, not left to defaults.' },
      { title: 'Brand and non-brand Search', body: 'A low-cost brand campaign to defend your name from resellers and competitors, and non-brand campaigns built on buying-intent keywords with regular search-term pruning.' },
      { title: 'Merchant Center feed management', body: 'Titles, GST-inclusive prices, GTINs, shipping and return settings, COD and prepaid terms, and pin-code serviceability kept in line with your store and couriers.' },
      { title: 'Microsoft Ads', body: 'Search and Shopping campaigns on Bing and the Edge browser, imported from Google and then tuned separately, useful for desktop-heavy B2B and office audiences.' },
      { title: 'Lead-gen Search for startups and B2B', body: 'Campaigns for SaaS, services and B2B firms with qualifying form fields and offline conversion import, so bids follow qualified demos rather than raw form fills.' },
      { title: 'Local campaigns for showrooms', body: 'Radius targeting around your Bengaluru stores, Google Business Profile linked to the account, and calls, directions and WhatsApp chats tracked as conversions.' },
      { title: 'GA4 and enhanced conversions', body: 'GA4, Google Tag Manager and enhanced conversions set up with consent in mind, checked against real orders so each sale is counted once.' },
    ],
    process: [
      { title: 'Free account audit', body: 'We go through your Google Ads and Microsoft Ads accounts, feed, tracking and landing pages, and show you where spend leaks and which products are missing out.' },
      { title: 'Targets and tracking', body: 'We agree a target ROAS or cost per qualified lead from your real margins, then fix conversions and offline imports before touching bids.' },
      { title: 'Restructure and launch', body: 'Campaigns are rebuilt around margin and intent, the feed is cleaned, and English and Kannada ads go live while proven campaigns keep running.' },
      { title: 'Weekly tuning, monthly review', body: 'Bids, budgets and search terms are tuned every week. Each month we review profit and pipeline with you, at our Bengaluru office or on video.' },
    ],
    platforms: ['Google Ads', 'Microsoft Advertising', 'Google Merchant Center', 'Performance Max', 'GA4', 'Google Tag Manager', 'Google Business Profile', 'Looker Studio'],
    local: {
      city: 'Bangalore',
      areas: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Electronic City', 'Jayanagar', 'MG Road', 'Marathahalli', 'Bellandur', 'Yeshwanthpur'],
      note: 'Our Bengaluru office hosts audit walk-throughs, planning workshops and monthly reviews by appointment, and these workshops are part of the project scope. Much of the campaign build and daily management is done by our Chennai head-office team, who work the same hours, so you get local meetings and steady day-to-day account work.',
    },
    figures: [
      { type: 'mindmap', caption: 'What a Google-led PPC account for a Bengaluru brand needs to cover.', after: 0, center: 'Google-led PPC', branches: [
        { label: 'Campaigns', items: ['Shopping and PMax', 'Brand vs non-brand Search', 'Microsoft Ads'] },
        { label: 'Feed', items: ['GST-inclusive prices', 'Pin-code serviceability', 'COD and prepaid terms'] },
        { label: 'Measurement', items: ['GA4 and enhanced conversions', 'Offline lead imports', 'Calls and WhatsApp'] },
        { label: 'Planning', items: ['ROAS after COD and RTO', 'Kannada and English ads', 'Ugadi to Diwali peaks'] },
      ] },
      { type: 'matrix', caption: 'Where to put the next rupee of search budget, by buying intent and product margin.', after: 2, cols: ['High margin', 'Thin margin'], rows: ['Shopper knows what to buy', 'Shopper still browsing'], cells: [
        { title: 'Push hard', body: 'Exact-match Search and Shopping, budget follows the target' },
        { title: 'Tight target ROAS', body: 'Shopping only for top sellers, strict bid limits' },
        { title: 'Test with PMax', body: 'Performance Max with brand excluded and clear signals' },
        { title: 'Hold or bundle', body: 'Sell inside bundles or leave to organic and SEO' },
      ] },
      { type: 'steps', caption: 'Working out a real target ROAS once COD and RTO costs are counted.', after: 3, steps: [
        { title: 'Start with margin', body: 'Selling price minus GST, product and packing' },
        { title: 'Take off delivery', body: 'Shipping, COD fee and payment charges' },
        { title: 'Count RTO losses', body: 'Return shipping and write-offs per order' },
        { title: 'Find break-even', body: 'Order value divided by what is left' },
        { title: 'Add profit room', body: 'Set the target above break-even' },
      ] },
    ],
    guide: [
      {
        heading: 'Google-led PPC versus full performance marketing',
        paragraphs: [
          'A PPC company in Bangalore usually means pay-per-click search advertising: Google Ads first, Microsoft Ads second. That is the focus of this page. If you need one team to run Meta, Amazon, Flipkart and quick commerce ads alongside Google, our performance marketing agency in Bangalore page covers that wider brief.',
          'Search is different from social because the shopper has already told you what they want. Someone typing "cotton kurta set for women" or "inventory software for distributors" is closer to buying than someone scrolling a feed. The job is to show up for those searches at a cost the order or lead can carry, and to stay out of searches that never convert.',
          'For most Bengaluru D2C brands, that means Shopping and Performance Max for the catalogue, Search for brand and high-intent category terms, and Microsoft Ads as a smaller extra channel once Google is running well.',
        ],
      },
      {
        heading: 'Shopping, Performance Max and a feed Google trusts',
        paragraphs: [
          'Shopping and Performance Max run on your Merchant Center feed, so the feed is the campaign. Google checks that the price in the feed matches the GST-inclusive price on the product page, that stock status is current and that shipping and return details are clear. Mismatches lead to warnings, then disapprovals.',
          'Indian stores have a few extra details to get right. Show COD and prepaid terms the same way on the product page, at checkout and in any ad text. Set delivery times by region honestly. If you offer same-day or next-day delivery in parts of Bengaluru, promise it only for the pin codes your courier or dark store can actually serve, and exclude areas you cannot reach.',
        ],
        bullets: [
          'Split products into campaigns or asset groups by margin, not just by category.',
          'Exclude your brand terms from Performance Max so it has to find new customers.',
          'Rewrite feed titles with the words shoppers use: fabric, size, shade, pack size.',
          'Check the Merchant Center diagnostics page every week, not only at launch.',
        ],
      },
      {
        heading: 'Brand and non-brand Search, in English and Kannada',
        paragraphs: [
          'Keep brand and non-brand Search in separate campaigns. Brand clicks are cheap and convert well, which flatters any blended ROAS. Non-brand terms are where new customers come from, and they need their own budget and target so they are judged fairly.',
          'Bengaluru has people from across India, so most product searches are in English. Kannada keywords and ads still earn a place for local services, showrooms, food and traditional products, and in campaigns that reach the rest of Karnataka. Test Kannada ads alongside English ones and keep whichever brings more orders or calls.',
          'If you sell from a showroom in Jayanagar, Indiranagar or Whitefield, add a local campaign. Link your Google Business Profile, target a sensible radius and track calls, direction requests and WhatsApp clicks as conversions, so in-store demand is not invisible in the account.',
        ],
      },
      {
        heading: 'Setting target ROAS after COD and RTO costs',
        paragraphs: [
          'The ROAS Google reports is revenue divided by ad spend. It does not know about cancelled COD orders, parcels that come back or the courier fees on both legs. A target set from that number alone can look healthy while the business loses money on each order.',
          'Start from contribution margin per order: selling price minus GST, product cost, packing, shipping, payment or COD fees and the average cost of returns. Your break-even ROAS is the order value divided by that margin. Set the target in Google Ads above break-even, and review it whenever your COD share or RTO rate changes. Our free ROAS calculator does this arithmetic for you. A PPC company in Bangalore that sets targets without asking for these numbers is guessing.',
        ],
      },
      {
        heading: 'Lead-gen Search for Bengaluru startups and B2B firms',
        paragraphs: [
          'Not every Bengaluru account sells products. SaaS companies, B2B service firms and startups use Search to get demo requests and enquiries. The common problem is that Google optimises for form fills, and a form fill from a student looks the same as one from a buyer with budget.',
          'The fix is offline conversion import. Capture the Google click ID with each lead, then send back which leads became qualified demos or deals from your sales system. Google then bids towards the searches that produce pipeline. Add one or two qualifying fields to the form, write ads that say who the product is for, and use Microsoft Ads to reach desktop users at work.',
          'This is where a Google Ads agency in Bangalore earns its fee: connecting ad clicks to revenue, not just reporting cost per lead.',
        ],
      },
      {
        heading: 'Tracking, consent and festive planning',
        paragraphs: [
          'Set up GA4 and Google Ads conversions through Google Tag Manager, add enhanced conversions and check the totals against real orders each week. Track phone calls and WhatsApp clicks as separate conversions so you can see which campaigns create conversations.',
          'India’s Digital Personal Data Protection Act asks businesses to tell people what personal data they collect, why, and to get clear consent. In plain terms: show a clear notice on forms and checkout, record consent, and only upload hashed customer details to Google where your notice covers it. We are not lawyers, so confirm the details with your legal adviser.',
          'Plan budgets around the calendar. Ugadi, Dasara and Diwali bring demand for clothing, gifting, home and food, and the big marketplace sale weeks push up competition for clicks. Raise budgets and targets before the peak, not on the day, and check stock and delivery cut-offs first. A good PPC company in Bangalore will have that plan ready weeks ahead.',
        ],
      },
    ],
    related: [
      { label: 'Performance marketing agency in Bangalore', href: '/bangalore/performance-marketing-agency/' },
      { label: 'E-commerce PPC agency for Google Shopping', href: '/ecommerce-ppc-agency/' },
      { label: 'Digital marketing agency in Bangalore', href: '/bangalore/digital-marketing-agency/' },
      { label: 'SEO company in Bangalore', href: '/bangalore/seo-company/' },
      { label: 'Ecommerce website development in Bangalore', href: '/bangalore/ecommerce-website-development/' },
      { label: 'Free ROAS calculator for Indian stores', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a PPC company in Bangalore do?', a: 'It plans, builds and manages pay-per-click campaigns, mainly on Google Ads and Microsoft Ads. For online stores that covers Shopping, Performance Max, Search and the Merchant Center feed. For startups and B2B firms it covers lead-gen Search and offline conversion tracking. The work should be judged on orders, qualified leads and profit.' },
      { q: 'How much does PPC management in Bangalore cost?', a: 'It depends on the number of campaigns and channels, catalogue size, feed condition, tracking work and how competitive your searches are. Ad spend is paid directly to Google or Microsoft from your own account. Our management fee is quoted separately in writing after a free audit, with scope, reporting and exclusions listed.' },
      { q: 'How is this different from your performance marketing service in Bangalore?', a: 'This service is Google-led paid search: Google Ads and Microsoft Ads, with Shopping, Performance Max, Search, local and lead-gen campaigns. Our performance marketing service in Bangalore covers every paid channel together, including Meta, Amazon, Flipkart and quick commerce apps, for brands that want one team on all of them.' },
      { q: 'Do I keep ownership of my Google Ads account?', a: 'Yes. The Google Ads, Microsoft Ads and Merchant Center accounts stay in your business name, billed to your own card or invoice. We work through manager access that you can remove at any time. Campaigns, conversion data and audiences remain yours if you change agencies or bring the work in-house.' },
      { q: 'Can you run Google Ads for B2B and SaaS startups in Bengaluru?', a: 'Yes. We run Search campaigns for demo requests and enquiries, with qualifying form fields and landing pages that say who the product is for. We set up offline conversion import so Google learns from leads your sales team marks as qualified, and use Microsoft Ads to reach desktop users at work.' },
      { q: 'Should we advertise in Kannada as well as English?', a: 'Often both. Most product searches in Bengaluru are in English, but Kannada ads can help local services, showrooms, food and traditional products, and campaigns aimed at the rest of Karnataka. We test Kannada and English versions side by side and keep the ones that bring more orders, calls or leads.' },
      { q: 'Can we meet you in Bengaluru?', a: 'Yes. Our Bengaluru office hosts audit walk-throughs, planning workshops and monthly reviews by appointment, and workshops are included in scope. Much of the campaign build and daily management is handled by our Chennai head-office team on the same working hours, with regular updates by video and WhatsApp.' },
    ],
  },
];
