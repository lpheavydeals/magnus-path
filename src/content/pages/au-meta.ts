import type { ServicePageData } from '../../data/types';

const auBreadcrumb = [{ label: 'Australia', href: '/australia/ecommerce-marketing-agency/' }];

const linkE = { label: 'Ecommerce Meta advertising for Australian online stores', href: '/australia/ecommerce-meta-ads-agency/' };
const linkM = { label: 'Meta advertising across Facebook, Instagram and WhatsApp in Australia', href: '/australia/meta-ads-agency/' };
const linkF = { label: 'Facebook lead ads and local campaigns in Australia', href: '/australia/facebook-ads-agency/' };
const linkA = { label: 'How to compare Facebook ad agencies in Australia', href: '/australia/facebook-advertising-agencies/' };

export const auMetaPages: ServicePageData[] = [
  // ───────────────────────── Type E: Ecommerce Meta ads (Australia) ─────────────────────────
  {
    slug: 'australia/ecommerce-meta-ads-agency',
    kind: 'global',
    market: 'AU',
    twin: 'ecommerce-meta-ads-agency',
    title: 'Ecommerce Meta Ads Agency Australia: Catalogue Ads',
    description: 'Ecommerce Meta ads agency for Australian online stores: Advantage+ sales campaigns, catalogue ads, feed health and UGC creative tests. AUD quote after a free audit.',
    primaryKeyword: 'ecommerce Meta ads agency',
    navLabel: 'Ecommerce Meta Ads Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Advantage+ sales · Catalogue ads · UGC creative · Shops',
    h1: 'Ecommerce Meta Ads That *Sell Your Catalogue* to Australians',
    intro: 'Billion Ecommerce Agency is an ecommerce Meta ads agency for Australian online stores that sell from a product catalogue. We run Advantage+ sales campaigns (previously Advantage+ shopping) and catalogue ads on Facebook and Instagram, keep your product feed healthy and test UGC-style creative in planned rounds. Results are judged on ROAS after returns, not the purchase value Meta reports. We quote in AUD after a free audit.',
    icon: 'social',
    facts: ['Catalogue ads from a clean feed', 'ROAS measured after returns', 'Free audit, quoted in AUD'],
    headings: {
      pains: 'Where Australian online stores waste money on Meta',
      includes: 'What our ecommerce Meta ads management covers',
      process: 'From catalogue check to first sales in *4 steps*',
      guide: 'Meta ads for Australian online stores: a practical guide',
    },
    pains: [
      { title: 'A catalogue full of errors', body: 'Sold-out sizes still advertised, sale prices that never switched off, products rejected for missing images. Shoppers click, find something different on the page and leave, and the ad still costs you.' },
      { title: 'ROAS that ignores returns', body: 'Ads Manager counts the order at checkout. Change-of-mind returns, refunds and discount codes never reach Meta, so a campaign can look profitable while your bank account says otherwise.' },
      { title: 'The same three ads for months', body: 'Creative wears out. As the same faces and hooks repeat, frequency climbs, costs rise and the campaign slowly stops finding new buyers, without any single day looking like a problem.' },
    ],
    includes: [
      { title: 'Catalogue and feed health', body: 'Your Meta catalogue synced from Shopify or WooCommerce, with GST-inclusive AUD prices, variants, stock and images checked weekly in Commerce Manager.' },
      { title: 'Advantage+ sales campaigns', body: 'Set up with your existing customers defined, so spend on new and returning buyers is reported separately and growth is not overstated.' },
      { title: 'Catalogue ads for retargeting', body: 'Product viewers and cart abandoners shown the items they looked at, with frames, delivery notes and product sets that leave out thin-margin stock.' },
      { title: 'UGC creative testing', body: 'Creator briefs, hooks and test rounds that change one thing at a time, with winners moved into your main campaigns and learnings written down.' },
      { title: 'Facebook and Instagram Shops', body: 'A shop built from the same catalogue, collections set up and products tagged in posts and Reels, with checkout on your own website.' },
      { title: 'Pixel and Conversions API', body: 'Purchase events sent from the browser and your store, duplicates removed and values checked against your own orders in AUD.' },
      { title: 'Peak season planning', body: 'Catalogue promotions, creative and budgets prepared ahead of Click Frenzy, EOFY, Black Friday, Christmas and Boxing Day.' },
    ],
    platforms: ['Meta Ads Manager', 'Commerce Manager', 'Events Manager', 'Conversions API', 'Shopify', 'WooCommerce', 'GA4', 'Looker Studio'],
    process: [
      { title: 'Free store audit', body: 'With read-only access we review your ad account, catalogue, Events Manager and recent creative, then talk you through the findings on a call in your afternoon.' },
      { title: 'Plan and AUD quote', body: 'A written plan for catalogue fixes, campaign structure, creative testing and tracking, with a monthly management fee quoted in AUD.' },
      { title: 'Fix, then launch', body: 'Feed and tracking problems are fixed first. Campaigns are then rebuilt in your own ad account without deleting past data.' },
      { title: 'Test and report', body: 'Weekly creative and budget changes, and a monthly report on revenue after returns, new customers and what the tests taught us.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four parts of Meta advertising for an online store, and what each one needs.', center: 'Meta ads for a store', after: 0, branches: [
        { label: 'Catalogue', items: ['GST-inclusive AUD prices', 'Stock and variants synced', 'Product sets'] },
        { label: 'Campaigns', items: ['Advantage+ sales', 'Catalogue retargeting'] },
        { label: 'Creative', items: ['UGC video', 'Catalogue frames', 'Test rounds'] },
        { label: 'Measurement', items: ['Pixel + Conversions API', 'ROAS after returns'] },
      ] },
      { type: 'venn', caption: 'Catalogue ads and UGC creative do different jobs, and work hardest when used together.', after: 3, left: { title: 'Catalogue ads', body: 'Show the exact product, price and stock each person cares about' }, right: { title: 'UGC creative', body: 'Shows a real person using it, so the ad feels like a post' }, overlap: 'Ads that look real and sell' },
      { type: 'steps', caption: 'How we turn the ROAS shown in Ads Manager into a number you can trust.', after: 4, steps: [
        { title: 'Start with Meta', body: 'Purchase value reported in Ads Manager' },
        { title: 'Match orders', body: 'Compare with your store’s own order report' },
        { title: 'Take off returns', body: 'Refunds, cancellations and exchanges' },
        { title: 'Take off discounts', body: 'Codes and sale markdowns applied' },
        { title: 'Set targets', body: 'Budget decisions made on net revenue' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce Meta ads agency does for an online store',
        paragraphs: [
          'An ecommerce Meta ads agency works from your product catalogue, not just from an image and a headline. Most of an online store’s spend goes through campaigns that choose which products to show each person, so the state of the catalogue, the tracking and the creative decides results more than clever targeting does.',
          'That makes the job different from running Facebook and Instagram ads for a clinic, a gym or a tradie. It is closer to merchandising: which products get budget, which are left out, how new arrivals and sale lines are pushed, and whether the orders Meta reports are real, kept and profitable once returns are counted.',
          'Your ad account, business portfolio, pixel and catalogue should all sit in your business’s name. Ad spend is paid straight to Meta from your own card, and the agency works as a user on your account.',
        ],
      },
      {
        heading: 'Catalogue and product feed health',
        paragraphs: [
          'Your Meta catalogue is usually synced from Shopify or WooCommerce through Commerce Manager or a feed file. When the sync breaks, ads keep running on stale data: sold-out sizes still advertised, old prices shown or products rejected for missing images. Shoppers click, find something different on the page and leave.',
          'For Australian shoppers, the catalogue price should be the GST-inclusive AUD price shown on the product page, and sale prices should carry start and end dates so they switch off on time. A “was” price that was never really charged can raise problems under the Australian Consumer Law, so keep promotions honest.',
        ],
        bullets: [
          'Every variant listed with its own size, colour, image and stock level',
          'Titles and descriptions written the way people actually describe the product',
          'Product sets for hero lines, new arrivals, sale items and low-margin stock',
          'A weekly check of rejected items and sync errors in Commerce Manager',
        ],
      },
      {
        heading: 'Advantage+ sales campaigns and catalogue ads',
        paragraphs: [
          'Advantage+ sales campaigns, previously called Advantage+ shopping campaigns (Meta renames these products from time to time), let Meta choose audiences, placements and products from your catalogue with little manual targeting. They suit many stores, but they will happily spend on people who were going to buy anyway. Define your existing customers and report new and returning buyers separately so growth is not overstated.',
          'Catalogue ads, once called dynamic product ads, show each person the products they viewed or similar ones. We use them to bring back product viewers and cart abandoners, and for broad prospecting with product sets that leave out thin-margin or low-stock lines. A plain catalogue carousel rarely stands out, so we add frames, delivery notes or a short brand video at the start.',
        ],
      },
      {
        heading: 'Creative testing with UGC',
        paragraphs: [
          'On Meta, creative does much of the targeting. A video of a real customer unboxing, wearing or using the product tells the system who it is for, and it looks at home in Reels and Stories. User-generated content (UGC) often feels more trustworthy than a polished studio shot, though both have a place.',
          'We test in rounds, not at random. Each round changes one thing, such as the opening hook, the offer, the person on screen or the format, so you learn what actually moved results. Winners move into your main campaign, losers are switched off, and each round ends with a short note for the next brief.',
          'We write creator briefs covering the hook, what to show and what not to say. Get written permission from creators to use their content in ads, and keep any claims about results believable.',
        ],
      },
      {
        heading: 'Measuring ROAS after returns',
        paragraphs: [
          'Meta reports purchase value when the order is placed. It does not know about refunds, change-of-mind returns, cancelled orders or the discount code used at checkout. For fashion and footwear in particular, the ROAS in Ads Manager can look much healthier than what lands in your bank account.',
          'We set up the pixel and the Conversions API together, remove duplicate events and check purchases in Events Manager against your store’s own orders. Each month we compare reported revenue with net revenue after returns and discounts, and a careful ecommerce Meta ads agency sets targets on that net number. Cash on delivery is rare in Australia, but buy now, pay later is common, so mentioning Afterpay or Zip is worth testing on higher-priced items.',
          'In plain terms, the Privacy Act sets rules for how many Australian businesses collect and share personal information, including hashed customer details sent to Meta through the Conversions API or customer lists. Your privacy policy should say so. We are not lawyers, so confirm your obligations with your own adviser.',
        ],
      },
      {
        heading: 'Shops, peak dates and how we work with Australian stores',
        paragraphs: [
          'Facebook and Instagram Shops give shoppers a browsable storefront and let you tag products in posts and Reels, with checkout on your own website. They are worth setting up because they run off the same catalogue as your ads.',
          'The big dates for Australian stores are Click Frenzy, EOFY sales in June, Black Friday and Cyber Monday, then Christmas and Boxing Day. Load sale prices into the catalogue early, refresh creative a week or two ahead, lift budgets before the event and update delivery cut-offs as Australia Post and couriers fill up.',
          'Billion Ecommerce Agency has no Australian office. We work remotely from India, with our head office in Chennai. Sydney and Melbourne are 4.5 hours ahead of India in standard time and 5.5 hours in daylight saving, and Perth is 2.5 hours ahead, so our morning is your east-coast afternoon. Calls fit your afternoon and replies reach you by evening. As an ecommerce Meta ads agency, we quote in AUD after a free audit.',
        ],
      },
    ],
    related: [
      linkM,
      linkF,
      linkA,
      { label: 'Shopify agency for Australian online stores', href: '/australia/shopify-agency/' },
      { label: 'Ecommerce PPC for Google Shopping in Australia', href: '/australia/ecommerce-ppc-agency/' },
      { label: 'ROAS calculator for ecommerce ads', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce Meta ads agency do?', a: 'It runs Facebook and Instagram advertising for online stores from the product catalogue. That covers catalogue and feed health, Advantage+ sales campaigns, catalogue ads for retargeting, UGC creative testing, pixel and Conversions API tracking, and reporting on revenue after returns rather than on the purchase value Meta shows.' },
      { q: 'How much does ecommerce Meta ads management cost in Australia?', a: 'We quote a monthly management fee in AUD after a free audit. It depends on catalogue size, how many campaigns you run, how much creative you need each month and how much feed and tracking work comes first. Ad spend is separate and paid directly to Meta from your own ad account.' },
      { q: 'Are Advantage+ sales campaigns enough on their own?', a: 'They are a strong base for many stores but rarely the whole answer. Left alone they lean towards existing customers and easy products. We pair them with catalogue retargeting, product sets that leave out thin-margin stock and steady creative testing, and we report new and returning customers separately.' },
      { q: 'Should prices in my Meta catalogue include GST?', a: 'Yes. Australian shoppers expect to see the full price, so your catalogue should carry the same GST-inclusive AUD price as your product page. Mismatched prices confuse buyers and can get products rejected. Your accountant should confirm your GST settings; we check that the catalogue and the store agree.' },
      { q: 'Why is the ROAS in Ads Manager higher than my real results?', a: 'Meta counts purchase value at checkout and credits sales within its attribution window, including some people who would have bought anyway. It never sees refunds, returns or discount codes. We compare Ads Manager with your store orders each month and set targets on revenue after returns.' },
      { q: 'Do you make the ad creative?', a: 'We plan and test it. We write briefs for UGC creators and your team, cut footage into Reels, Stories and feed formats, and build catalogue frames. Filming is usually done by creators or your own staff, because they have the product in hand. Every ad is checked for honest claims before it runs.' },
      { q: 'Do you have an office in Australia?', a: 'No. We are a remote team in India, with our head office in Chennai. The east coast is 4.5 hours ahead of India in standard time and 5.5 in daylight saving, and Perth is 2.5 hours ahead. Calls fit your afternoon and replies reach you by evening.' },
    ],
  },

  // ───────────────────────── Type M: Meta ads (Australia) ─────────────────────────
  {
    slug: 'australia/meta-ads-agency',
    kind: 'global',
    market: 'AU',
    twin: 'meta-ads-agency',
    title: 'Meta Ads Agency Australia: Instagram, Reels & CAPI',
    description: 'Meta ads agency for Australian brands: Facebook, Instagram Reels and Stories, Messenger and WhatsApp ads, Conversions API and a clean Business Suite. AUD quote.',
    primaryKeyword: 'Meta ads agency',
    navLabel: 'Meta Ads Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Facebook · Instagram · Messenger · WhatsApp · Conversions API',
    h1: 'Meta Ads Across *Every Meta App*, Set Up Properly in Australia',
    intro: 'Billion Ecommerce Agency is a Meta ads agency for Australian brands that want one plan across Facebook, Instagram, Messenger and WhatsApp. We set up Meta Business Suite so you own every asset, structure the ad account, connect the Conversions API and build creative for Reels, Stories, Explore and feeds. Ad spend goes straight to Meta from your account, and we quote in AUD after a free audit.',
    icon: 'social',
    facts: ['Facebook, Instagram, Messenger, WhatsApp', 'Business portfolio in your name', 'Free audit, quoted in AUD'],
    headings: {
      pains: 'Why Meta accounts underperform before a single ad runs',
      includes: 'What our Meta ad management covers across the platform',
      process: 'How we take over your Meta account in *4 steps*',
      guide: 'Advertising across Meta in Australia: a complete guide',
    },
    pains: [
      { title: 'Assets owned by the wrong person', body: 'An ad account opened on a past freelancer’s profile, a Page with no staff admin, Instagram tied to someone’s personal login. Changing suppliers turns into a fight over access and history.' },
      { title: 'Tracking that undercounts', body: 'Pixel only, events firing twice, or purchase values without GST. Meta optimises on poor data, and its reports never line up with your own sales numbers.' },
      { title: 'One ad stretched across every placement', body: 'A single square image runs in Reels, Stories, feeds and Messenger. It looks out of place in vertical placements, gets skipped and costs more to be noticed.' },
    ],
    includes: [
      { title: 'Meta Business Suite set-up', body: 'Business verification, domain verification and every Page, Instagram account, ad account, pixel and WhatsApp number held in your business portfolio.' },
      { title: 'Account structure', body: 'Fewer, clearer campaigns for prospecting, retargeting and existing customers, with a naming convention that still makes sense months later.' },
      { title: 'Advantage+ campaigns', body: 'Automation used where your data supports it, with creative enhancements and placements checked so nothing switches on that you did not agree to.' },
      { title: 'Conversions API and Events Manager', body: 'Server events alongside the pixel, duplicates removed, event match quality reviewed and values checked against your own records in AUD.' },
      { title: 'Placement-ready creative', body: 'Vertical, portrait and square versions of each ad for Instagram Reels, Stories, Explore and the Facebook and Instagram feeds, with safe zones respected.' },
      { title: 'Messenger and WhatsApp chat ads', body: 'Click-to-Messenger and click-to-WhatsApp campaigns with greetings, quick replies and agreed response times so conversations turn into sales.' },
      { title: 'Plain monthly reporting', body: 'Results by app and placement, compared with your own sales, plus a short list of what we will change next month and why.' },
    ],
    platforms: ['Meta Business Suite', 'Meta Ads Manager', 'Events Manager', 'Conversions API', 'Instagram', 'Messenger', 'WhatsApp Business', 'GA4', 'Google Tag Manager'],
    process: [
      { title: 'Free platform audit', body: 'Read-only access to your Business Suite, ad account and Events Manager. We list ownership gaps, tracking problems and wasted placements, then walk you through them on a call in your afternoon.' },
      { title: 'Plan and AUD quote', body: 'A written plan covering structure, tracking fixes, creative needs and which Meta apps to use first, with a monthly management fee quoted in AUD.' },
      { title: 'Fix ownership and tracking', body: 'Assets claimed into your portfolio, roles set, the Conversions API connected and events tested before any new campaign goes live.' },
      { title: 'Launch, test and review', body: 'Campaigns launched in your account, creative and placements tested weekly, and a monthly review of results against your own numbers.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'One Meta ad account reaches people across four apps, with one set of tracking underneath.', center: 'One Meta ad account', after: 0, branches: [
        { label: 'Facebook', items: ['Feed and video', 'Reels and Stories'] },
        { label: 'Instagram', items: ['Reels and Stories', 'Explore and feed'] },
        { label: 'Chats', items: ['Click-to-Messenger', 'Click-to-WhatsApp'] },
        { label: 'Data', items: ['Pixel + Conversions API', 'Events Manager'] },
      ] },
      { type: 'steps', caption: 'The order we tidy a Meta Business Suite set-up so ownership stays with your business.', after: 1, steps: [
        { title: 'Verify business', body: 'Legal name and website domain confirmed' },
        { title: 'Claim assets', body: 'Page, Instagram, ad account and pixel' },
        { title: 'Set roles', body: 'Staff and agency access, no shared logins' },
        { title: 'Add billing', body: 'Your own card, billed in AUD' },
        { title: 'Test events', body: 'Pixel and Conversions API both reporting' },
      ] },
      { type: 'matrix', caption: 'Which Meta placements suit which job, from first contact to the sale.', after: 3, cols: ['Vertical video', 'Image or carousel'], rows: ['Reaching new people', 'Bringing people back'], cells: [
        { title: 'Reels and Stories', body: 'Hook in the first seconds, sound on, real people' },
        { title: 'Feed and Explore', body: 'Clear product shot, short headline, one offer' },
        { title: 'Stories reminder', body: 'The item they viewed, with a delivery date' },
        { title: 'Feed carousel', body: 'Products they viewed, price and an Afterpay note' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Meta ads agency manages across Facebook, Instagram, Messenger and WhatsApp',
        paragraphs: [
          'A Meta ads agency runs your advertising across every app Meta owns, from one ad account. Facebook and Instagram carry most of the reach, but ads can also open a Messenger chat or a WhatsApp conversation, and the same campaign can appear in the Facebook feed, Instagram Reels, Stories and Explore. Planning across all of them stops you paying twice to reach the same person.',
          'Good management starts underneath the campaigns. Who owns the business portfolio, whether the pixel and Conversions API report correctly and how the account is structured matter more than any single ad. Plenty of accounts run ads that work in spite of their set-up rather than because of it.',
        ],
      },
      {
        heading: 'Setting up Meta Business Suite so you own everything',
        paragraphs: [
          'Meta Business Suite, with Business Manager behind it, holds your Facebook Page, Instagram account, ad accounts, pixel, catalogue and WhatsApp number. Each should belong to a business portfolio in your company’s name, with at least two people from your own team as admins. Agencies and freelancers should be added with only the access they need.',
          'Common problems include ad accounts created under a past freelancer’s personal profile, Pages with nobody on staff as admin and two pixels firing on the same site. Fixing ownership first means you never lose history, audiences or reviews when a supplier changes.',
        ],
        bullets: [
          'Verify your business and your website domain',
          'Claim the Page, Instagram account and ad account into your portfolio',
          'Give staff and agencies role-based access, never shared logins',
          'Add a payment method in your business’s name, billed in AUD',
        ],
      },
      {
        heading: 'Account structure and Advantage+ campaigns',
        paragraphs: [
          'Meta’s delivery system learns faster from fewer, larger campaigns than from dozens of small ones. A clear structure usually has a prospecting campaign, a retargeting or existing-customer campaign and, where it fits, a catalogue campaign, each with plain names so reports still make sense months later.',
          'Advantage+ campaigns hand audience, placement and sometimes creative choices to Meta. They suit many accounts, but they need good conversion data and enough creative variety to work with. A Meta ads agency should explain what it automates and why, and check that automation has not quietly switched on features you did not want, such as image edits or added music.',
        ],
      },
      {
        heading: 'Instagram Reels, Stories, Explore and the Facebook feed',
        paragraphs: [
          'Each placement is seen differently. Reels and Stories are full-screen and vertical, often watched with sound on, so the opening seconds decide whether anyone keeps watching. Explore reaches people browsing for something new. The Facebook and Instagram feeds suit portrait or square images, carousels and longer captions.',
          'Running one square image everywhere wastes money, because it looks out of place in vertical placements. We supply vertical, portrait and square versions of each ad, keep text clear of buttons and profile icons, and review placement reports to trim the ones that bring clicks but not results, which is often true of some Audience Network inventory.',
        ],
      },
      {
        heading: 'Messenger and WhatsApp click-to-chat ads',
        paragraphs: [
          'Not every buyer wants to fill in a form or check out straight away. Click-to-Messenger and click-to-WhatsApp ads open a conversation instead, which suits higher-priced products, made-to-order items, bookings and questions about sizing or delivery. WhatsApp is less dominant in Australia than in some countries, but many people use it, and younger buyers often expect to message a brand on Instagram.',
          'Chat ads only work if someone answers. We set up greeting messages, common questions and quick replies in Meta Business Suite, agree response times with your team, and measure how many chats turn into sales, not just how many start.',
        ],
      },
      {
        heading: 'Conversions API, the Privacy Act and how we work',
        paragraphs: [
          'The Meta pixel alone misses events because of browser blocking and app privacy settings. The Conversions API sends events from your server or store platform as well, and Events Manager matches and removes duplicates. We review event match quality, confirm purchase values are recorded in AUD the way your store records them, and compare results with your own sales.',
          'In plain terms, the Privacy Act sets rules for how many Australian businesses collect and use personal information and send it overseas. Sending hashed emails through the Conversions API or uploading customer lists should be covered in your privacy policy. We are not lawyers, so check your obligations with an adviser.',
          'Billion Ecommerce Agency is a remote team in India with its head office in Chennai, and has no office in Australia. Sydney and Melbourne are 4.5 hours ahead of India in standard time and 5.5 hours in daylight saving; Perth is 2.5 hours ahead. Our morning is your east-coast afternoon, so calls fit your afternoon and replies arrive by your evening. We plan around Click Frenzy, EOFY, Black Friday, Christmas and Boxing Day, show GST-inclusive prices in ads, test Afterpay and Zip messages where you offer them, and quote in AUD after a free audit.',
        ],
      },
    ],
    related: [
      linkE,
      linkF,
      linkA,
      { label: 'Ecommerce marketing agency for Australian brands', href: '/australia/ecommerce-marketing-agency/' },
      { label: 'Google Shopping and search ads for Australian stores', href: '/australia/ecommerce-ppc-agency/' },
    ],
    faqs: [
      { q: 'What does a Meta ads agency do?', a: 'It plans and runs advertising across Facebook, Instagram, Messenger and WhatsApp from one ad account. That includes Business Suite set-up and ownership, account structure, Advantage+ campaigns, the pixel and Conversions API, creative sized for each placement, chat ads and reporting that compares Meta’s numbers with your own sales.' },
      { q: 'How much does a Meta ads agency cost in Australia?', a: 'We quote a monthly management fee in AUD after a free audit. The fee depends on how many Meta apps and campaigns you use, how much creative is needed, the state of your tracking and Business Suite, and how often you want to review results. Ad spend is separate and paid directly to Meta.' },
      { q: 'Do I need the Conversions API if I already have the pixel?', a: 'Usually, yes. Browser blocking and app privacy settings stop the pixel from seeing some events. The Conversions API sends the same events from your server or store platform, and Meta removes duplicates. Together they give Meta more complete data to optimise on and make reports closer to your real sales.' },
      { q: 'Should we advertise on Instagram, Facebook or both?', a: 'Usually both, from the same campaigns. Meta decides where each dollar works hardest, and you control it through creative and placement settings. Younger, visual audiences lean towards Instagram Reels and Stories; Facebook feeds suit longer copy and older buyers. Placement reports then show where to trim.' },
      { q: 'Are WhatsApp ads worth it in Australia?', a: 'They can be for higher-priced or made-to-order products, bookings and businesses whose customers already message them. WhatsApp is less central in Australia than in some countries, so we often start with Messenger or Instagram messages and add WhatsApp where your customers use it. Someone must answer chats quickly.' },
      { q: 'Who should own our business portfolio and ad account?', a: 'Your business should. The business portfolio, ad account, Page, Instagram account, pixel and WhatsApp number all belong in your company’s name, with your own staff as admins and your card paying Meta. Agencies get role-based access, which you can remove at any time without losing history.' },
      { q: 'When can we talk, given your team is in India?', a: 'Our morning is your east-coast afternoon. Sydney and Melbourne are 4.5 hours ahead of India in standard time and 5.5 in daylight saving, and Perth is 2.5 hours ahead. Calls fit your afternoon, replies arrive by your evening, and we have no Australian office.' },
    ],
  },

  // ───────────────────────── Type F: Facebook ads (Australia) ─────────────────────────
  {
    slug: 'australia/facebook-ads-agency',
    kind: 'global',
    market: 'AU',
    twin: 'facebook-ads-agency',
    title: 'Facebook Ads Agency Australia: Leads & Local Reach',
    description: 'Facebook ads agency for Australian businesses: lead ads and instant forms, local audiences, Marketplace and Reels placements, and lead-quality tracking. AUD quote.',
    primaryKeyword: 'Facebook ads agency',
    navLabel: 'Facebook Ads Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Lead ads · Instant forms · Marketplace · Local audiences',
    h1: 'Facebook Ads That Bring *Real Enquiries* to Australian Businesses',
    intro: 'Billion Ecommerce Agency is a Facebook ads agency for Australian businesses that need enquiries, bookings and local customers, not just likes. We build lead ads with instant forms that filter out time-wasters, target the suburbs and regions you serve, moderate the comments and track which leads become customers, so every campaign is judged on real sales. We quote in AUD after a free audit.',
    icon: 'social',
    facts: ['Lead forms tuned for quality', 'Campaigns judged on real customers', 'Free audit, quoted in AUD'],
    headings: {
      pains: 'Why Facebook leads often go nowhere',
      includes: 'What our Facebook ad management for Australian businesses covers',
      process: 'From first form to qualified leads in *4 steps*',
      guide: 'Facebook ads for Australian local and service businesses: a guide',
    },
    pains: [
      { title: 'Cheap leads that never pick up', body: 'Forms with details already filled in are easy to submit by accident. The cost per lead looks great while your team chases wrong numbers and people who do not remember enquiring.' },
      { title: 'Boosting posts and hoping', body: 'Boosted posts mostly reach people who already like your Page, not people ready to buy. Without a lead or sales goal, Facebook optimises for cheap likes and comments.' },
      { title: 'Comment sections left alone', body: 'Ads attract spam, scam links and public complaints. Left unchecked over a weekend, a messy comment section can put off every new person who sees the ad.' },
    ],
    includes: [
      { title: 'Lead ads and instant forms', body: 'Higher-intent forms with a review step, two or three qualifying questions and a clear note on what happens next and how quickly you call back.' },
      { title: 'Feed, Marketplace and Reels', body: 'Creative made for each Facebook placement, from feed images to Marketplace listings and vertical Reels, with budget moved to whatever brings qualified leads.' },
      { title: 'Local and service-area audiences', body: 'Radius targeting around your base or a list of suburbs, postcodes and regions, with areas you do not service excluded and the location named in the ad.' },
      { title: 'Lead quality without a CRM', body: 'A shared spreadsheet of lead outcomes, uploaded to Events Manager and matched to your ads, so you can judge each campaign on real customers.' },
      { title: 'Page and comment moderation', body: 'Keyword filters for spam and abuse, weekday checks of ad comments, and questions or complaints passed to you with a suggested reply.' },
      { title: 'Retargeting warm audiences', body: 'Video viewers, Page engagers and people who opened a form but did not finish, shown photos of finished work, answers and offers.' },
      { title: 'Reporting by qualified lead', body: 'Cost per qualified lead and cost per sale next to cost per lead, so you can see which ads bring buyers.' },
    ],
    platforms: ['Meta Ads Manager', 'Instant forms', 'Events Manager', 'Meta Business Suite', 'Facebook Marketplace', 'Google Sheets', 'GA4'],
    process: [
      { title: 'Free account audit', body: 'Read-only access to your ad account, Page and recent leads. We look at form settings, targeting, comments and lead follow-up, then talk it through on a call in your afternoon.' },
      { title: 'Plan and AUD quote', body: 'A written plan covering forms, audiences, placements, moderation and how lead outcomes will be tracked, with a monthly fee quoted in AUD.' },
      { title: 'Build and launch', body: 'Forms, audiences and creative built in your own ad account, lead alerts set up for your team, and campaigns launched with a test budget.' },
      { title: 'Feed back and refine', body: 'Weekly updates of lead outcomes, changes to forms, audiences and budgets based on lead quality, and a monthly review of cost per sale.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four parts of a Facebook lead campaign that decide whether enquiries turn into customers.', center: 'A Facebook lead campaign', after: 0, branches: [
        { label: 'Audience', items: ['Suburbs you serve', 'Past engagers'] },
        { label: 'Placement', items: ['Feed and Marketplace', 'Reels'] },
        { label: 'Form', items: ['Higher-intent review step', 'Qualifying questions'] },
        { label: 'Follow-up', items: ['Call back fast', 'Record lead outcomes'] },
      ] },
      { type: 'matrix', caption: 'Instant form or landing page: the right choice depends on what each lead is worth to you.', after: 1, cols: ['Instant form', 'Landing page'], rows: ['Quick, lower-value jobs', 'Bigger, considered jobs'], cells: [
        { title: 'Short form', body: 'Name, phone, suburb and one question' },
        { title: 'Often too slow', body: 'Extra clicks lose people for a small job' },
        { title: 'Higher-intent form', body: 'Review step plus two or three qualifying questions' },
        { title: 'Strong choice', body: 'Room for photos, reviews and detail before they ask' },
      ] },
      { type: 'steps', caption: 'The weekly loop that shows which Facebook ads bring customers, without needing a CRM.', after: 4, steps: [
        { title: 'Download leads', body: 'Export the week’s form leads' },
        { title: 'Mark outcomes', body: 'Qualified, booked, sold or junk' },
        { title: 'Upload the sheet', body: 'Add outcomes to your Events Manager dataset' },
        { title: 'Shift budget', body: 'We move spend to ads that bring buyers' },
      ] },
    ],
    guide: [
      {
        heading: 'When a Facebook ads agency is the right hire',
        paragraphs: [
          'Facebook is still where many Australians scroll, chat in local groups and browse Marketplace. For businesses that win customers through an enquiry, a quote or a booking, such as trades, home services, education providers, showrooms, B2B suppliers and stores with a physical shop, that makes it a natural place to reach people nearby.',
          'A Facebook ads agency working for this kind of business should care less about clicks and more about what happens after the form: whether people answer the phone, book in and pay. If your goal is online sales from a large product catalogue, a catalogue-led approach suits you better, and we cover that on a separate page.',
        ],
      },
      {
        heading: 'Lead ads and instant forms that filter out time-wasters',
        paragraphs: [
          'Instant forms open inside Facebook with the person’s name, email and phone already filled in. That convenience is why lead ads are cheap, and also why some leads are poor: people tap submit without reading. The fix is a little friction in the right places.',
          'Speed matters as much as the form. A lead called within the hour is far more likely to answer than one called two days later, so we set up email or SMS alerts and agree who calls back.',
        ],
        bullets: [
          'Choose the higher-intent form type, which adds a review screen before submitting',
          'Ask two or three qualifying questions, such as suburb, timeframe or job size',
          'Use an intro card that says exactly what happens next and when you will call',
          'Link your privacy policy and say how you will use their details',
          'End with a thank-you screen that shows your phone number and website',
        ],
      },
      {
        heading: 'Facebook feed, Marketplace and Reels placements',
        paragraphs: [
          'Facebook feed ads suit a clear photo or short video with a direct headline and room for detail in the text. Marketplace ads sit among listings people are already browsing to buy, which suits products, local services and anything with a visible offer. Reels reward vertical video that looks like normal content: a quick before-and-after, a walkthrough or a customer explaining why they chose you.',
          'We check placement reports each month and move budget towards placements that bring qualified leads, not just cheap ones. If you offer Afterpay or Zip on bigger jobs, saying so in the ad is worth testing.',
        ],
      },
      {
        heading: 'Audiences for local and service businesses',
        paragraphs: [
          'Most service businesses only want customers they can reach. We target a radius around your base or a list of suburbs, postcodes and regions, exclude areas you do not service, and name the location in the ad so people outside it scroll past. For broader prospecting, Facebook’s own targeting often does better than narrow interest lists once it has good conversion data.',
          'If you advertise housing, jobs, credit or social issues, Meta treats these as special ad categories and limits some targeting options. The rules change from time to time, so we check them at launch rather than relying on old settings.',
          'People who watched your videos, engaged with your Page or opened a form without finishing are often the cheapest source of good leads. Show them photos of finished work and answers to common questions.',
        ],
      },
      {
        heading: 'Measuring lead quality without a CRM',
        paragraphs: [
          'A cheap form fill is not a customer. If you only count form submissions, the campaign that looks strongest may be the one bringing the most time-wasters. Judging campaigns on which leads became customers changes where the budget should go, and you do not need a CRM to start: a shared spreadsheet works.',
          'Each week your team marks every lead as qualified, booked, sold or junk. We match those outcomes to the original leads, upload them to Events Manager where that helps reporting, and show cost per qualified lead and cost per sale beside cost per lead. Over a few weeks you see which ads, audiences and placements bring buyers, and we move budget accordingly. A spreadsheet upload on its own does not make Meta optimise for quality leads. Once your lead volume justifies it, optimising delivery towards converted leads needs a supported connection, such as the Conversions API or an integration with your lead system.',
          'In plain terms, the Privacy Act covers how many Australian businesses collect, use and share personal details, including sending them to an overseas platform. Your form and privacy policy should say how details are used. We are not lawyers, so confirm your obligations with your own adviser.',
        ],
      },
      {
        heading: 'Comment moderation, peak dates and how we work',
        paragraphs: [
          'Every ad carries a public comment section. We set keyword filters to hide spam and abuse, check ad comments on an agreed schedule, and send you questions and complaints with a suggested reply. A prompt, polite answer in public often builds more trust than the ad itself.',
          'Plan around the dates your customers care about: EOFY in June for business buyers, Click Frenzy and Black Friday for offers, and Christmas and Boxing Day, when many services slow down and others get busy. Show GST-inclusive prices in ads aimed at consumers.',
          'Billion Ecommerce Agency is a Facebook ads agency with no Australian office: our team works remotely from India, with our head office in Chennai. Sydney and Melbourne are 4.5 hours ahead of India in standard time and 5.5 in daylight saving, and Perth is 2.5 hours ahead. Our morning is your east-coast afternoon, so calls fit your afternoon and replies arrive by your evening. We quote in AUD after a free audit.',
        ],
      },
    ],
    related: [
      linkE,
      linkM,
      linkA,
      { label: 'Ecommerce marketing agency for Australian brands', href: '/australia/ecommerce-marketing-agency/' },
      { label: 'Ecommerce SEO for Australian websites', href: '/australia/ecommerce-seo/' },
    ],
    faqs: [
      { q: 'What does a Facebook ads agency do for a local business?', a: 'It runs Facebook campaigns that bring enquiries, bookings and visits from the areas you serve. That covers lead ads and instant forms, local audiences, feed, Marketplace and Reels creative, comment moderation, retargeting and tracking which leads became customers, so budget follows sales rather than cheap form fills.' },
      { q: 'How much does Facebook ads management cost in Australia?', a: 'We quote a monthly management fee in AUD after a free audit. It depends on how many services and areas you advertise, how many forms and campaigns you need, how much creative and moderation is involved, and whether lead tracking needs setting up. Ad spend is separate and paid directly to Meta.' },
      { q: 'Why are my Facebook leads such poor quality?', a: 'Usually because the form is too easy. Details are prefilled, so people submit without reading. Switching to the higher-intent form type, adding two or three qualifying questions, calling back quickly and judging campaigns on which leads became customers all push quality up, even if cost per lead rises.' },
      { q: 'Should I use an instant form or send people to my website?', a: 'Instant forms suit quick, lower-value jobs where speed matters. For bigger, considered purchases, a landing page with photos, reviews and detail often brings fewer but better enquiries. Many businesses run both and compare cost per qualified lead, not just cost per lead.' },
      { q: 'Can you track lead quality if we do not have a CRM?', a: 'Yes. Your team marks each lead as qualified, booked, sold or junk in a shared spreadsheet. We match those outcomes to the original leads each week, so you can judge campaigns on real customers and see cost per sale. Optimising delivery towards converted leads needs a Conversions API connection later.' },
      { q: 'Do you moderate comments on our ads?', a: 'Yes. We set keyword filters to hide spam, scam links and abuse, check ad comments on an agreed schedule, and pass genuine questions and complaints to you with a suggested reply. We do not delete fair criticism; answering it politely in public usually does more good.' },
      { q: 'Can Facebook ads target only the suburbs we service?', a: 'Yes. Ads can target a radius around an address or a list of suburbs, postcodes and regions, and exclude areas you do not cover. Special ad categories such as housing, jobs and credit have tighter limits. Naming the area in the ad also helps people outside it scroll past.' },
    ],
  },

  // ───────────────────────── Type A: Facebook advertising agencies (Australia) ─────────────────────────
  {
    slug: 'australia/facebook-advertising-agencies',
    kind: 'global',
    market: 'AU',
    twin: 'facebook-advertising-agencies',
    title: 'Facebook Advertising Agencies: An Australian Guide',
    description: 'Comparing Facebook advertising agencies in Australia? Agency types, questions to ask, red flags, what a real audit covers and who should own your ad account.',
    primaryKeyword: 'Facebook advertising agencies',
    navLabel: 'Facebook Advertising Agencies Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Agency types · Questions to ask · Red flags · Account ownership',
    h1: 'Facebook Advertising Agencies: *How to Compare Them* in Australia',
    intro: 'Comparing Facebook advertising agencies in Australia is harder than it looks, because most proposals promise the same things. This page explains the types of agency, the questions to ask, the red flags, what a proper audit covers and why your ad account must stay in your name. Then it shows how Billion Ecommerce Agency works, if you want us on your shortlist.',
    icon: 'social',
    facts: ['Accounts stay in your name', 'Written audit before any quote', 'Quoted in AUD, no obligation'],
    headings: {
      pains: 'Why choosing a Facebook ad agency is hard',
      includes: 'What any Facebook ad agency should give you, and what we provide',
      process: 'How we work if you shortlist us, in *4 steps*',
      guide: 'How to choose between Facebook advertising agencies in Australia',
    },
    pains: [
      { title: 'Every proposal sounds the same', body: 'Better targeting, better creative, better ROAS. Without a common brief and the right questions, it is hard to tell real skill from a good sales pitch.' },
      { title: 'Not knowing who does the work', body: 'You meet a senior person in the pitch, then the account is run by someone you never speak to. It pays to ask who handles your campaigns week to week.' },
      { title: 'Losing your account when you leave', body: 'Some set-ups put the ad account, pixel or Page in the agency’s name. Leaving then means starting again without your history, audiences or reviews.' },
    ],
    includes: [
      { title: 'A written audit', body: 'Findings on ownership, tracking, structure, creative and wasted spend, useful to you whether or not you hire us.' },
      { title: 'Accounts in your name', body: 'Business portfolio, ad account, pixel and Page owned by your business, with ad spend paid directly to Meta from your card.' },
      { title: 'A clear written scope', body: 'What is included, what is not, how the fee is set, the notice period and what you keep if you leave.' },
      { title: 'Named people on your account', body: 'You know who plans, builds and reports on your campaigns, and how to reach them in your working hours.' },
      { title: 'A creative plan', body: 'How new ads will be briefed, made and tested each month, so results do not fade after the first few weeks.' },
      { title: 'Reporting tied to your sales', body: 'Meta’s numbers compared with your own orders or lead outcomes, not just reach, clicks and platform ROAS.' },
      { title: 'A clean exit', body: 'If you move on, access is removed, creative files and reports are handed over, and your history stays in your account.' },
    ],
    platforms: ['Meta Business Suite', 'Meta Ads Manager', 'Events Manager', 'Conversions API', 'GA4', 'Looker Studio'],
    process: [
      { title: 'Free written audit', body: 'Read-only access to your ad account and Events Manager, then a written list of findings and a call in your afternoon to go through it.' },
      { title: 'Plan and AUD quote', body: 'A written scope with goals, first ninety days, creative needs, exclusions and notice period, with the management fee quoted in AUD.' },
      { title: 'Onboarding in your accounts', body: 'You add us to your business portfolio with role-based access. Nothing is moved into our name, and past data stays where it is.' },
      { title: 'Monthly review', body: 'Weekly changes and a monthly review of results against your own sales or lead records, with what we will change next.' },
    ],
    figures: [
      { type: 'matrix', caption: 'Which kind of Facebook ad help tends to fit, by how much support you need and how involved you want to be.', after: 0, cols: ['You stay hands-on', 'You want it handled'], rows: ['Need Facebook ads only', 'Need ads, site and SEO'], cells: [
        { title: 'Freelancer', body: 'Personal and flexible, but everything rests on one person' },
        { title: 'Specialist agency', body: 'A team focused on Meta and similar social platforms' },
        { title: 'In-house hire', body: 'Full focus on your brand, hard to cover every skill' },
        { title: 'Full-service', body: 'One team for ads, website and SEO; check who runs ads' },
      ] },
      { type: 'steps', caption: 'What a proper Facebook ads audit should cover before anyone quotes you.', after: 4, steps: [
        { title: 'Ownership', body: 'Who owns the portfolio, ad account and pixel' },
        { title: 'Tracking', body: 'Pixel, Conversions API and duplicate events' },
        { title: 'Structure', body: 'Campaigns, audiences and existing customers' },
        { title: 'Creative', body: 'Which ads work and how tired they are' },
        { title: 'Real results', body: 'Meta numbers against your own sales' },
      ] },
      { type: 'venn', caption: 'Whichever agency you pick, some things should stay with you and some are the agency’s job.', after: 5, left: { title: 'Stays with you', body: 'Business portfolio, ad account, pixel, Page and payment method' }, right: { title: 'Agency’s job', body: 'Campaigns, creative tests, tracking fixes and honest reports' }, overlap: 'A monthly review together' },
    ],
    guide: [
      {
        heading: 'The four types of Facebook advertising agencies',
        paragraphs: [
          'Facebook advertising agencies come in different shapes, and the right one depends on your budget, how much help you need beyond ads and how involved you want to be. Most options fall into four groups.',
          'None of these is right for everyone. A small store testing Facebook for the first time has different needs from a business spending heavily across several channels.',
        ],
        bullets: [
          'Freelancers: one person runs your account. Flexible and personal, but holidays, illness and creative workload all rest on them.',
          'Specialist paid social agencies: a team that focuses on Meta and similar platforms. Deep platform knowledge, though you may still need help with your website and email.',
          'Full-service agencies: ads, website, SEO and email under one roof. Easier to coordinate, but check who actually works on your ads and how much time they have.',
          'In-house hire: a staff member runs your ads. Full focus on your brand, but one person rarely covers strategy, creative and tracking, and a poor hire is costly.',
        ],
      },
      {
        heading: 'How to compare agencies fairly',
        paragraphs: [
          'When comparing Facebook advertising agencies, give every one on your shortlist the same brief: what you sell, your margins, current results, budget range and what success looks like in six months. Ask each to explain in writing what they would do in the first ninety days and why. Proposals built on the same facts are much easier to compare.',
          'Judge how each agency thinks rather than how polished the slides are. Do they ask about returns, stock, delivery and how you follow up leads? Do they talk about profit or only about ROAS and cost per click? Do they explain trade-offs, or promise everything? A short proposal that understands your business usually beats a long one that could be about anyone.',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        paragraphs: [
          'Pay attention to how directly each question is answered. A vague answer on ownership or reporting is itself an answer.',
        ],
        bullets: [
          'Who will work on my account each week, and where are they based?',
          'Will the business portfolio, ad account, pixel and Page stay in our name?',
          'How do you measure results, and will you report against our own sales or lead data?',
          'Who makes the creative, how often is it refreshed and is that included?',
          'How do you plan for Click Frenzy, EOFY, Black Friday, Christmas and Boxing Day?',
          'Are your quotes GST-inclusive, and what is the notice period?',
        ],
      },
      {
        heading: 'Red flags to watch for',
        paragraphs: [
          'Paying ad spend through an agency is not always wrong, but you should be able to see every dollar in an account you own and keep that account when you leave. Watch for these signs early.',
        ],
        bullets: [
          'Ad accounts created in the agency’s name, with no admin access for you',
          'Promised results or fixed ROAS figures before anyone has looked at your account',
          'Reports that only show reach, clicks or Meta’s own ROAS, never your actual sales',
          'Long lock-in contracts with no clear exit or handover terms',
          'No plan for new creative after the first month',
          'Nobody asks about your margins, returns, Afterpay or Zip use, or how you follow up leads',
        ],
      },
      {
        heading: 'What a proper audit looks like',
        paragraphs: [
          'Before quoting, a good agency should review your account with read-only access and give you its findings in writing. The audit should cover ownership and access in your business portfolio, pixel and Conversions API set-up, campaign structure, which creative is working, how much spend goes to existing customers and whether reported sales match your store or lead records.',
          'A useful audit tells you what to fix even if you never hire that agency. Be wary of audits that only find problems the agency happens to sell, or that recommend rebuilding everything without explaining what history and learning would be lost.',
        ],
      },
      {
        heading: 'Contracts, account ownership and how we work',
        paragraphs: [
          'Whichever of the Facebook advertising agencies you choose, the contract should state the scope, what is excluded, how fees are set, the notice period and what happens to access, creative files and reports when you leave. Your business portfolio, ad account, pixel and Page should stay in your name, with ad spend paid directly to Meta from your own payment method.',
          'In plain terms, the Privacy Act governs how many Australian businesses handle personal information, including sharing it with an overseas agency or platform. Ask any agency how it stores and accesses customer data. We are not lawyers, so check your obligations with your adviser.',
          'Billion Ecommerce Agency is one option for your list. We are a remote team in India with our head office in Chennai, and no Australian office. Sydney and Melbourne are 4.5 hours ahead of India in standard time and 5.5 in daylight saving, and Perth is 2.5 hours ahead, so calls fit your afternoon and replies arrive by your evening. We start with a free written audit, work only in your accounts and quote in AUD.',
        ],
      },
    ],
    related: [
      linkE,
      linkM,
      linkF,
      { label: 'Ecommerce marketing agency for Australian brands', href: '/australia/ecommerce-marketing-agency/' },
      { label: 'Google Shopping and search ads for Australian stores', href: '/australia/ecommerce-ppc-agency/' },
      { label: 'ROAS calculator to check agency reports', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What types of Facebook advertising agencies are there?', a: 'Broadly four: freelancers who run accounts on their own, specialist paid social agencies focused on Meta and similar platforms, full-service agencies that also handle websites and SEO, and in-house hires. Each suits a different budget, level of involvement and need for help beyond ads.' },
      { q: 'How much do Facebook advertising agencies charge in Australia?', a: 'Fees are usually a flat monthly retainer, a share of ad spend or a mix, sometimes with creative charged separately. What drives the fee is scope, the number of campaigns, creative volume, tracking work and reporting. We quote in AUD after a free audit, and ad spend is paid directly to Meta.' },
      { q: 'Should I hire a freelancer or an agency for Facebook ads?', a: 'A freelancer can suit a small, simple account where you stay closely involved. An agency suits you better when you need creative, tracking and steady testing without relying on one person. Either way, insist on owning the ad account and ask who does the work each week.' },
      { q: 'What should I ask an agency before signing?', a: 'Ask who works on your account and where they are based, whether every Meta asset stays in your name, how results are measured against your own sales, who makes the creative, how peak dates are planned, whether quotes include GST and what the notice period is.' },
      { q: 'Who should own the Facebook ad account?', a: 'You should. The business portfolio, ad account, pixel and Page belong in your company’s name, with your own staff as admins and your payment method paying Meta. The agency gets role-based access that you can remove at any time, keeping all history and audiences.' },
      { q: 'What should a proper Facebook ads audit include?', a: 'Ownership and access, pixel and Conversions API set-up, campaign structure, creative performance, spend on existing customers, and a comparison of Meta’s reported sales with your own records. It should come in writing and be useful even if you never hire the agency that wrote it.' },
      { q: 'Can a team in India run Facebook ads for an Australian business?', a: 'Yes, if ownership, reporting and communication are clear. We work remotely from India and have no Australian office. Our morning is your east-coast afternoon, so calls fit your afternoon and replies arrive by your evening. Ads run in your own accounts and are quoted in AUD.' },
    ],
  },
];
