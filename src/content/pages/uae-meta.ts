import type { ServicePageData } from '../../data/types';

const UAE_HUB: { label: string; href: string } = { label: 'United Arab Emirates', href: '/uae/ecommerce-marketing-agency/' };

export const uaeMetaPages: ServicePageData[] = [
  // ───────────────────────────────────────────── E: Ecommerce Meta ads agency in Dubai
  {
    slug: 'uae/ecommerce-meta-ads-agency-dubai',
    kind: 'global',
    market: 'UAE',
    twin: 'ecommerce-meta-ads-agency',
    title: 'Ecommerce Meta Ads Agency in Dubai | Catalogue Ads for UAE Stores',
    description: 'Ecommerce Meta ads agency in Dubai for UAE online stores: catalogue and Advantage+ sales campaigns, feed health, UGC creative tests and ROAS after COD.',
    primaryKeyword: 'ecommerce Meta ads agency in Dubai',
    navLabel: 'Ecommerce Meta Ads Agency Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'For UAE online stores · Catalogue ads · Advantage+ · UGC creative · COD-aware ROAS',
    h1: 'Ecommerce Meta Ads Agency for UAE Stores, *Run From Your Catalogue*',
    intro: 'Need an ecommerce Meta ads agency in Dubai that measures the sales you actually get paid for? Magnus Path is a Chennai team serving Dubai and the wider UAE remotely. We keep your product catalogue healthy, run catalogue and Advantage+ sales campaigns on Facebook and Instagram, test UGC-style creative in English and Arabic, and report ROAS after cash-on-delivery refusals and returns.',
    icon: 'social',
    facts: ['Ad spend paid to Meta by you', 'Catalogue and feed fixed first', 'Free audit, quote in AED'],
    headings: {
      pains: 'Where Meta ads leak money for UAE online stores',
      includes: 'What our ecommerce Meta ads management covers',
      process: 'From catalogue audit to scaling in *4 steps*',
      guide: 'Meta ads for UAE online stores: catalogue, creative and real ROAS',
    },
    pains: [
      { title: 'A catalogue Meta cannot use properly', body: 'Products rejected in Commerce Manager, AED prices that do not match the site, missing sizes or colours, and Arabic titles that never reached the feed, so catalogue ads show the wrong items or none at all.' },
      { title: 'ROAS that ignores refused COD parcels', body: 'Meta counts a purchase when the order is placed. If cash-on-delivery parcels are refused or returned, Ads Manager looks healthy while the bank account does not.' },
      { title: 'The same few ads running for months', body: 'Creative fatigue sets in, frequency climbs and costs rise, but nobody has a plan for the next hooks, UGC videos or Arabic versions to test.' },
    ],
    includes: [
      { title: 'Catalogue and product feed health', body: 'Commerce Manager set-up, feed sync from Shopify or WooCommerce, AED prices with VAT, variants, rejection fixes and product sets by category, margin and stock.' },
      { title: 'Advantage+ sales campaigns', body: 'Meta’s automated shopping campaigns (previously called Advantage+ shopping) set up with clear rules on existing-customer spend, sensible exclusions and a mix of catalogue and video ads.' },
      { title: 'Catalogue retargeting', body: 'Advantage+ catalogue ads (previously called dynamic product ads) that show shoppers the items they viewed or left in the basket, plus cross-sell sets for past buyers.' },
      { title: 'UGC and creative testing', body: 'A rolling test plan for hooks, formats and offers: creator-style videos, product demos, carousels and collection ads, with briefs written for you or your creators.' },
      { title: 'Arabic and English ads', body: 'Arabic headlines, primary text and video scripts written or checked by a fluent Arabic writer, sent to Arabic product pages where your store has them.' },
      { title: 'Pixel, Conversions API and COD-aware ROAS', body: 'Purchase events deduplicated between pixel and Conversions API, checked against store orders, and ROAS reported on delivered, paid orders rather than placed ones.' },
      { title: 'Shops and seasonal sales', body: 'Facebook and Instagram Shops kept in sync with the catalogue, plus Ramadan, Eid, White Friday, Yellow Friday and Dubai Shopping Festival plans.' },
    ],
    process: [
      { title: 'Free catalogue and account audit', body: 'We review your Meta ad account, catalogue, pixel, Conversions API and recent creative, then walk you through what we found on a video call in your working day.' },
      { title: 'Break-even ROAS and AED quote', body: 'We work out break-even ROAS after COD refusals, returns and delivery costs, agree targets, and send a written monthly management quote in AED.' },
      { title: 'Fix the feed and tracking', body: 'Catalogue clean-up, product sets, event deduplication and a simple weekly match between Meta purchases and your delivered orders.' },
      { title: 'Launch, test and scale', body: 'Advantage+ and catalogue campaigns go live, new creative is tested every week and spend moves to the products that make margin, with a weekly report.' },
    ],
    platforms: ['Meta Ads Manager', 'Commerce Manager', 'Events Manager', 'Conversions API', 'Shopify', 'WooCommerce', 'GA4', 'Looker Studio'],
    figures: [
      { type: 'mindmap', caption: 'The four things that decide whether Meta ads pay back for a UAE online store.', center: 'Meta ads for UAE stores', after: 0, branches: [
        { label: 'Catalogue', items: ['AED prices with VAT', 'Sizes, colours and stock', 'Arabic titles where needed'] },
        { label: 'Campaigns', items: ['Advantage+ sales', 'Catalogue retargeting', 'Prospecting tests'] },
        { label: 'Creative', items: ['UGC-style videos', 'English and Arabic hooks', 'New ads every week'] },
        { label: 'Real ROAS', items: ['Paid COD orders only', 'Returns taken off'] },
      ] },
      { type: 'matrix', caption: 'How to read a creative test: what to do with an ad depending on attention and sales.', after: 3, cols: ['Stops the scroll', 'Gets scrolled past'], rows: ['Clicks turn into sales', 'Clicks do not buy'], cells: [
        { title: 'Scale it', body: 'Raise budget and make new versions of the same idea' },
        { title: 'New opening', body: 'Keep the message, test a different first few seconds' },
        { title: 'Check the offer', body: 'Attention is there: look at price, offer and product page' },
        { title: 'Retire it', body: 'Turn it off and brief a different angle' },
      ] },
      { type: 'steps', caption: 'Turning placed orders into a ROAS figure you can trust when many UAE orders are cash on delivery.', after: 4, steps: [
        { title: 'Export orders', body: 'Weekly, with payment method and status' },
        { title: 'Remove refusals', body: 'Drop refused and returned COD parcels' },
        { title: 'Match campaigns', body: 'Use UTM tags and order IDs' },
        { title: 'Recalculate ROAS', body: 'Paid revenue divided by ad spend' },
        { title: 'Adjust budgets', body: 'Move spend to what customers paid for' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce Meta ads agency in Dubai should handle',
        paragraphs: [
          'An ecommerce Meta ads agency in Dubai has a narrower job than a general social media agency. It works only for online stores, so everything starts with the product catalogue and ends with orders that are paid for. The goal is profitable sales from Facebook and Instagram, at a cost per order your margins can carry.',
          'In practice that means four things done well: a clean catalogue that Meta can read, campaigns built for shopping (Advantage+ sales campaigns and catalogue retargeting), a steady supply of new creative, and a ROAS figure that reflects what reaches your bank account. If you need lead generation, Messenger or WhatsApp click-to-chat campaigns across the full platform, our Meta advertising service for Dubai brands covers that wider scope.',
          'Your accounts stay yours. The business portfolio (formerly Business Manager), ad account, pixel and catalogue remain in your company’s name, and ad spend is paid directly to Meta from your own card or payment method. We work through partner access that you can remove at any time.',
        ],
      },
      {
        heading: 'Catalogue health: the feed behind every shopping ad',
        paragraphs: [
          'Catalogue ads, Advantage+ sales campaigns and Shops all draw from the same product catalogue in Commerce Manager. If the catalogue is wrong, every one of those formats is wrong too. Most UAE stores sync it from Shopify or WooCommerce, which works well once a few details are checked.',
          'We check catalogue diagnostics weekly and fix rejections and price mismatches at the source, in your store, so the next sync does not undo them.',
        ],
        bullets: [
          'AED prices that match the product page, with 5% VAT included as shoppers see it',
          'Sale prices that start and end on the same dates as the store promotion',
          'Every variant listed with its own size, colour and stock status, so sold-out items stop showing',
          'Clear product images, plus lifestyle images where the catalogue allows them',
          'Arabic titles and descriptions added through a language feed if you run Arabic ads',
          'Product sets by category, margin and stock, so campaigns can push the items that make money',
        ],
      },
      {
        heading: 'Advantage+ sales campaigns and catalogue retargeting',
        paragraphs: [
          'Meta’s Advantage+ sales campaigns (previously Advantage+ shopping campaigns) let the system choose audiences, placements and products from your catalogue. They suit stores with clean tracking and a steady flow of purchases, but they need guard rails. We set how much budget may go to existing customers, exclude recent buyers where it makes sense, and give the campaign a mix of catalogue and creative-led ads.',
          'Catalogue retargeting, previously called dynamic product ads, shows each shopper the products they viewed or left in the basket. It often looks like the cheapest revenue in the account, but many of those buyers would have come back anyway. We keep the retargeting window short, watch frequency, and report it apart from prospecting so you can see what a new customer really costs.',
          'An ecommerce Meta ads agency in Dubai should also explain why it chose a structure. Fewer, larger campaigns usually learn faster than many small ones, and splitting by margin or category is worth it only when those groups behave differently.',
        ],
      },
      {
        heading: 'Creative testing with UGC, in English and Arabic',
        paragraphs: [
          'On Meta, creative does much of the targeting. The system finds people who respond to the ad, so the ad itself shapes who sees it. That makes a steady testing routine more valuable than clever audience tricks.',
          'We test one variable at a time: the hook in the opening seconds, the format (short video, carousel, collection or static image), the offer, or the angle. User-generated content, meaning short phone-filmed videos by real customers or creators, often feels more trustworthy than polished studio ads, especially for fashion, beauty and home products.',
          'UAE audiences are mixed, so we plan English and Arabic versions where they suit the product. Arabic copy is written or checked by a fluent Arabic writer, never just machine-translated, and an Arabic ad should lead to an Arabic product page where one exists.',
        ],
      },
      {
        heading: 'ROAS after cash on delivery and returns',
        paragraphs: [
          'Cash on delivery is still common in the UAE, and Meta records a purchase when the order is placed. If some COD parcels are refused or returned, the ROAS in Ads Manager is higher than the real one. The fix is simple but needs discipline: compare Meta’s purchases with your delivered, paid orders every week and set targets from the paid figure.',
          'Work out break-even ROAS first. Take your margin after product cost, delivery, payment fees, refusals and returns, and divide one by it. Campaigns that clear that line on paid orders can be scaled; campaigns that clear it only on placed orders are losing money. Our ROAS calculator does the arithmetic per product.',
          'Tracking needs both the Meta pixel and the Conversions API, deduplicated so each order counts once. The UAE Personal Data Protection Law (PDPL) sets rules on collecting and sharing personal data, so ask for cookie consent, say in your privacy policy what you send to Meta, and only send what the policy allows. We are not lawyers, so have a local adviser review your policy. Businesses in DIFC or ADGM also have those free zones’ own data rules to check.',
        ],
      },
      {
        heading: 'Ramadan, White Friday, DSF and working with a remote team',
        paragraphs: [
          'Plan the big moments early. Ramadan shifts browsing later into the evening and builds towards Eid gifting. White Friday on Amazon.ae and Yellow Friday on Noon put shoppers in discount mode in November, and the Dubai Shopping Festival lifts demand around the turn of the year. Have new creative, product sets and offers ready weeks ahead, and raise budgets gradually so campaigns learn before auction costs peak.',
          'Facebook and Instagram Shops can show your catalogue as a storefront inside the apps. In the UAE the purchase usually finishes on your own website, so the same catalogue and tracking rules apply.',
          'We are a Chennai team serving Dubai and the wider UAE remotely. We have no Dubai office and do not hold in-person meetings there, but UAE time is only 1.5 hours behind India, so our working days almost fully overlap and calls, WhatsApp messages and creative reviews happen in your office hours. Whichever ecommerce Meta ads agency in Dubai you choose, ask to see results on paid orders, not placed ones.',
        ],
      },
    ],
    related: [
      { label: 'Meta advertising in Dubai across Instagram, Messenger and WhatsApp', href: '/uae/meta-ads-agency-dubai/' },
      { label: 'Facebook lead ads and local campaigns in Dubai', href: '/uae/facebook-ads-agency-dubai/' },
      { label: 'How to compare Facebook ad agencies in Dubai', href: '/uae/facebook-advertising-agencies-dubai/' },
      { label: 'Google Shopping and PPC for UAE online stores', href: '/uae/ecommerce-ppc-agency-dubai/' },
      { label: 'Amazon.ae and Noon marketplace agency', href: '/uae/amazon-noon-agency/' },
      { label: 'Break-even ROAS calculator for Meta campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'How much does an ecommerce Meta ads agency in Dubai cost?', a: 'The monthly fee depends on catalogue size, how many campaigns and languages you run, how much creative we brief, and the state of your feed and tracking. We do not publish prices. After a free audit we send a written quote in AED listing scope, timeline and exclusions. Ad spend is paid directly to Meta from your own account.' },
      { q: 'Do Advantage+ sales campaigns replace normal campaigns?', a: 'Not fully. Advantage+ sales campaigns often become the main prospecting campaign for stores with clean tracking and steady purchases, but they need guard rails on existing-customer spend and exclusions. We usually keep catalogue retargeting and a small testing campaign beside them, and judge all three on paid orders rather than placed ones.' },
      { q: 'How do you account for cash-on-delivery orders?', a: 'Meta counts a purchase when the order is placed, so refused parcels still look like sales. Each week we compare Meta purchases with your delivered and paid orders, report ROAS on paid revenue and set targets from that figure. We also flag campaigns or products with unusually high refusal rates so you can act on them.' },
      { q: 'Who creates the UGC videos?', a: 'We plan the tests and write the briefs: the hook, the shots, the script and the call to action, in English and Arabic. You, your team or creators you hire film them on a phone. If you already have customer videos or reviews, we start with those and turn them into several ad variations.' },
      { q: 'Can you fix our product catalogue in Commerce Manager?', a: 'Yes. We check the feed sync from Shopify or WooCommerce, AED prices, VAT, variants, images and rejected items, then fix problems at the source in your store. We also build product sets by category, margin and stock so campaigns can promote the items that earn the most.' },
      { q: 'Do you run Meta ads in Arabic?', a: 'Yes, where it suits your audience. Arabic headlines, primary text and video scripts are written or checked by a fluent Arabic writer, not machine-translated, and Arabic ads point to Arabic product pages where your store has them. Many UAE stores run both languages side by side and compare results.' },
      { q: 'Do you have an office in Dubai?', a: 'No. We are a Chennai team serving Dubai and the wider UAE remotely, with no Dubai office and no in-person meetings there. UAE time is 1.5 hours behind India, so our working days almost fully overlap, and video calls, WhatsApp replies and reviews happen during your working hours.' },
    ],
  },

  // ───────────────────────────────────────────── M: Meta ads agency in Dubai
  {
    slug: 'uae/meta-ads-agency-dubai',
    kind: 'global',
    market: 'UAE',
    twin: 'meta-ads-agency',
    title: 'Meta Ads Agency in Dubai | Facebook, Instagram & WhatsApp Ads',
    description: 'Meta ads agency in Dubai running Facebook, Instagram, Messenger and WhatsApp click-to-chat campaigns, with Conversions API and a clean Business Suite set-up.',
    primaryKeyword: 'Meta ads agency in Dubai',
    navLabel: 'Meta Ads Agency Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'Facebook · Instagram Reels and Stories · Messenger · WhatsApp · Conversions API',
    h1: 'Meta Ads Agency in Dubai for *Every Meta App* Your Customers Use',
    intro: 'Hiring a Meta ads agency in Dubai should mean one team planning Facebook, Instagram, Messenger and WhatsApp together, not four separate efforts. Magnus Path is a Chennai team serving Dubai and the wider UAE remotely. We set up Meta Business Suite properly, connect the Conversions API, and run Advantage+ and click-to-WhatsApp campaigns in English and Arabic.',
    icon: 'social',
    facts: ['Business portfolio in your name', 'Click-to-WhatsApp campaigns', 'Free audit, quote in AED'],
    headings: {
      pains: 'Why Meta advertising gets messy for UAE businesses',
      includes: 'What our Meta ads management in the UAE covers',
      process: 'Setting up Meta advertising properly in *4 steps*',
      guide: 'Meta ads in Dubai: the whole platform, explained for UAE businesses',
    },
    pains: [
      { title: 'Accounts scattered across people', body: 'The page sits with a former employee, the ad account with a freelancer and the pixel with a developer, so nobody sees the full picture or can fix access quickly.' },
      { title: 'Events Manager full of warnings', body: 'The pixel fires twice, the Conversions API was never connected or is not deduplicated, and Meta optimises towards events that do not match real sales or enquiries.' },
      { title: 'WhatsApp chats nobody tracks', body: 'Click-to-WhatsApp ads bring conversations, but no one records which chats became orders, so budget decisions rest on message counts alone.' },
    ],
    includes: [
      { title: 'Meta Business Suite and account structure', body: 'Business portfolio, ad accounts, Facebook page, Instagram profile, WhatsApp Business number and user roles set up in your company’s name, with clear access rules.' },
      { title: 'Conversions API and Events Manager', body: 'Pixel and Conversions API connected and deduplicated, standard events mapped, domain verified and event quality checked against your own records.' },
      { title: 'Instagram Reels, Stories and Explore', body: 'Vertical video and Story formats built for each placement, with safe zones, captions and sound-off versions, so ads do not look like resized posts.' },
      { title: 'Click-to-WhatsApp and Messenger ads', body: 'Ads that open a chat on WhatsApp or Messenger, with greeting messages, quick replies and a simple way to tag the chats that turn into sales.' },
      { title: 'Advantage+ campaigns with guard rails', body: 'Meta’s automated campaigns used where they fit, with exclusions, budget rules and creative variety, and manual campaigns kept where control matters.' },
      { title: 'English and Arabic creative', body: 'Ad copy and video scripts in both languages, with Arabic written or checked by a fluent Arabic writer and matched to Arabic landing pages or chat greetings.' },
      { title: 'Reporting across every app', body: 'One weekly report showing results by app, placement and campaign objective, tied back to the orders, leads or chats your team confirms.' },
    ],
    process: [
      { title: 'Free account audit', body: 'We review your business portfolio, ad accounts, Events Manager, page and Instagram access, WhatsApp set-up and recent campaigns, then go through the findings on a call.' },
      { title: 'Structure plan and AED quote', body: 'A map of who owns what, the campaign structure across apps and objectives, and a written monthly management quote in AED.' },
      { title: 'Clean-up and tracking', body: 'Access fixed, assets moved into your business portfolio, Conversions API connected, events deduplicated and WhatsApp chat tagging agreed with your team.' },
      { title: 'Run, test and report', body: 'Campaigns across Facebook, Instagram, Messenger and WhatsApp, weekly creative tests and budget shifts, a weekly report and a monthly review call.' },
    ],
    platforms: ['Meta Business Suite', 'Meta Ads Manager', 'Events Manager', 'Conversions API', 'WhatsApp Business', 'Instagram', 'Messenger', 'GA4'],
    figures: [
      { type: 'mindmap', caption: 'The Meta apps and tools that one well-run ad account connects for a UAE business.', center: 'One Meta ad account', after: 0, branches: [
        { label: 'Facebook', items: ['Feed and Reels', 'Page and comments'] },
        { label: 'Instagram', items: ['Reels and Stories', 'Explore and feed'] },
        { label: 'Messaging', items: ['WhatsApp click-to-chat', 'Messenger replies'] },
        { label: 'Set-up', items: ['Business Suite roles', 'Pixel and Conversions API'] },
      ] },
      { type: 'venn', caption: 'Why the pixel and the Conversions API are stronger together, as long as each event is counted once.', after: 2,
        left: { title: 'Meta pixel', body: 'Runs in the browser; sees page views, baskets and purchases' },
        right: { title: 'Conversions API', body: 'Sent from your server; still counts when browsers block cookies' },
        overlap: 'Deduplicated: each event once' },
      { type: 'steps', caption: 'What happens after someone taps a click-to-WhatsApp ad, and where each step should be tracked.', after: 3, steps: [
        { title: 'Ad tapped', body: 'Chat opens with a pre-filled message' },
        { title: 'Greeting reply', body: 'Quick answers on price, size or delivery' },
        { title: 'Human follow-up', body: 'Your team replies in working hours' },
        { title: 'Tag the outcome', body: 'Order, lead or no sale' },
        { title: 'Feed it back', body: 'Sales reported by campaign each week' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Meta ads agency in Dubai covers',
        paragraphs: [
          'Meta owns Facebook, Instagram, Messenger and WhatsApp, and one ad account can buy space across all of them. A Meta ads agency in Dubai should plan them as one system: which app suits which job, which objective each campaign optimises for, and how results are measured once a customer moves from an ad to a chat or a website.',
          'That is broader than shopping campaigns alone. Online stores that mainly want catalogue ads and Advantage+ sales campaigns should look at our ecommerce Meta advertising service for UAE stores. This page is for businesses that need the full platform: retail, food, beauty, education, clinics or any brand that sells through a website, a chat or both.',
          'Whichever apps you use, ad spend is paid directly to Meta from your own account, and every asset stays in your company’s name.',
        ],
      },
      {
        heading: 'Meta Business Suite set-up and account ownership',
        paragraphs: [
          'Many UAE businesses find out their Meta set-up is fragile only when something breaks: an ad account is restricted, an employee leaves with admin rights, or a former supplier will not hand back a page. A clean structure prevents that.',
          'Before we run a single ad, we map who owns what and move anything sitting in the wrong place. It is dull work, but it protects years of data and audiences. Any Meta ads agency in Dubai you hire should do this mapping first.',
        ],
        bullets: [
          'One business portfolio (formerly Business Manager) owned by your company, with at least two trusted admins from your side',
          'Facebook page, Instagram profile and WhatsApp Business number all connected to that portfolio',
          'Ad accounts created inside your portfolio and billed to your company’s payment method',
          'Agencies and freelancers given partner access rather than personal admin rights, so access can be removed in one step',
          'Two-factor authentication on every admin profile',
          'Domain verified and the pixel owned by your portfolio, not by a developer or a previous agency',
        ],
      },
      {
        heading: 'Conversions API and Events Manager: getting the signal right',
        paragraphs: [
          'Meta’s delivery system learns from the events you send it. If those events are wrong, every campaign optimises towards the wrong thing. Events Manager shows what Meta receives, and the job is to make that match reality.',
          'The Meta pixel runs in the browser and can miss events when cookies are blocked or pages load slowly. The Conversions API sends the same events from your server or platform, which fills the gaps. Running both is now standard, but only if each event carries a matching event ID so Meta counts it once. We check event match quality, fix duplicate or missing events, and compare purchases or leads with your own records every week.',
          'Shopify and WooCommerce have ready-made connections for the Conversions API. Custom sites usually need a developer or a server-side tagging set-up, which we scope during the audit.',
        ],
      },
      {
        heading: 'WhatsApp click-to-chat and Messenger campaigns',
        paragraphs: [
          'WhatsApp is how many UAE customers prefer to ask a question before they buy, and click-to-WhatsApp ads open a chat with your business straight from Facebook or Instagram. They suit products that need a quick answer on size, delivery or availability, and services where people want to talk before booking. Messenger ads work the same way inside Facebook.',
          'The weak point is measurement. Meta can count conversations started, but only your team knows which chats became orders. We set up greeting messages and quick replies in WhatsApp Business, agree a simple label for each outcome, and use those labels to report sales by campaign. Without that step, budget follows the number of chats rather than their value.',
          'Reply speed matters as much as the ad. If chats arrive in the evening and nobody answers until morning, many go cold, so plan staffing before raising spend.',
        ],
      },
      {
        heading: 'Instagram placements, Advantage+ and creative in two languages',
        paragraphs: [
          'Instagram Reels, Stories and Explore each need creative made for them: vertical video, text kept inside the safe zones, and captions for people watching without sound. Resized feed posts usually underperform. We plan formats per placement and let Advantage+ placements spread delivery once each format has a proper version.',
          'Advantage+ campaigns automate audiences, placements and budgets. They save time and often lower costs, but they need good tracking and varied creative, and they can blur results between new and existing customers. We use them where they fit and keep manual campaigns where you need control, such as a launch aimed at one emirate or one audience.',
          'For a mixed UAE audience, plan English and Arabic versions together. Arabic copy is written or checked by a fluent Arabic writer, and Arabic ads should lead to Arabic pages or an Arabic greeting in WhatsApp.',
        ],
      },
      {
        heading: 'Privacy, peak seasons and working hours',
        paragraphs: [
          'The UAE Personal Data Protection Law (PDPL) sets rules for collecting, using and sharing personal data. In plain terms: ask for consent before tracking, explain in your privacy policy what you send to Meta, and only upload customer lists that people agreed to. We set up tracking with that in mind, but we are not lawyers, so have a local adviser check your policy.',
          'Plan peak seasons early. Ramadan moves activity later into the evening and builds towards Eid, White Friday and Yellow Friday bring November discount traffic, and the Dubai Shopping Festival lifts demand around the new year. Creative, offers and WhatsApp staffing should be ready before budgets rise.',
          'We are a Chennai team serving Dubai and the wider UAE remotely, with no Dubai office and no in-person meetings. UAE time is 1.5 hours behind India, so our days almost fully overlap. When choosing a Meta ads agency in Dubai, check who will own your business portfolio, pixel and WhatsApp number if you part ways.',
        ],
      },
    ],
    related: [
      { label: 'Catalogue and Advantage+ ads for UAE online stores', href: '/uae/ecommerce-meta-ads-agency-dubai/' },
      { label: 'Facebook lead ads and instant forms in Dubai', href: '/uae/facebook-ads-agency-dubai/' },
      { label: 'Comparing Facebook ad agencies in Dubai: questions to ask', href: '/uae/facebook-advertising-agencies-dubai/' },
      { label: 'Performance marketing in Dubai across Meta, Google, Snapchat and TikTok', href: '/uae/performance-marketing-agency-dubai/' },
      { label: 'Ecommerce marketing agency for the UAE', href: '/uae/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'How much does a Meta ads agency in Dubai cost?', a: 'It depends on how many apps and objectives you run, the number of campaigns and languages, how much creative is needed, and how much clean-up your account and tracking need. We do not publish prices. After a free audit we send a written monthly management quote in AED. Ad spend goes directly to Meta from your own account.' },
      { q: 'What is the difference between Meta ads and Facebook ads?', a: 'Facebook is one app. Meta is the company that also runs Instagram, Messenger and WhatsApp, and all of them are bought through the same Ads Manager. Managing Meta ads means planning placements, objectives and tracking across every app, rather than treating Facebook alone as the channel.' },
      { q: 'Do click-to-WhatsApp ads work in the UAE?', a: 'They often suit UAE buyers, who are used to asking questions on WhatsApp before buying. They work when someone replies quickly and outcomes are tracked. We set up greeting messages and quick replies, agree how your team labels chats that turn into sales, and report results by campaign rather than by message count.' },
      { q: 'Why do I need the Conversions API if I have the pixel?', a: 'The pixel runs in the browser and misses events when cookies are blocked, ad blockers are used or pages fail to load fully. The Conversions API sends the same events from your server, so Meta sees more of what happens. Both should run together, with event IDs so each action is counted only once.' },
      { q: 'Who owns the business portfolio and ad account?', a: 'You do. The business portfolio, ad accounts, page, Instagram profile, pixel and WhatsApp number stay in your company’s name, and Meta bills ad spend to your payment method. We work through partner access, which you can remove at any time without losing data, audiences or campaign history.' },
      { q: 'Can you run Instagram ads only?', a: 'Yes, if your audience is mainly there. We would still set up the account, tracking and Conversions API across the whole business portfolio, because Instagram ads are bought through the same Ads Manager. Many brands later add Facebook Reels or WhatsApp campaigns once their Instagram creative is working.' },
      { q: 'Do you meet clients in Dubai?', a: 'No. We have no Dubai office and do not offer in-person meetings there. We are a Chennai team serving Dubai and the wider UAE remotely, through video calls, WhatsApp and shared reports. UAE time is 1.5 hours behind India, so calls and replies fit your normal working day.' },
    ],
  },

  // ───────────────────────────────────────────── F: Facebook ads agency in Dubai
  {
    slug: 'uae/facebook-ads-agency-dubai',
    kind: 'global',
    market: 'UAE',
    twin: 'facebook-ads-agency',
    title: 'Facebook Ads Agency in Dubai | Lead Ads and Local Campaigns',
    description: 'Facebook ads agency in Dubai for lead ads, instant forms and local campaigns, with lead quality tracked, outcomes sent back to Meta and comments kept in check.',
    primaryKeyword: 'Facebook ads agency in Dubai',
    navLabel: 'Facebook Ads Agency Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'Lead ads · Instant forms · Feed, Marketplace and Reels · Local audiences · Comment moderation',
    h1: 'Facebook Ads Agency in Dubai for *Leads You Can Use*',
    intro: 'A Facebook ads agency in Dubai should judge campaigns by the leads your team can actually close, not the number of forms filled. Magnus Path is a Chennai team serving Dubai and the wider UAE remotely. We build lead ads and instant forms, target local audiences across the emirates, send lead outcomes back to Meta and keep your page comments under control.',
    icon: 'social',
    facts: ['Lead quality tracked weekly', 'Arabic and English forms', 'Free audit, quote in AED'],
    headings: {
      pains: 'Why Facebook lead campaigns disappoint in the UAE',
      includes: 'What our Facebook ads management covers',
      process: 'Better Facebook leads in *4 steps*',
      guide: 'Facebook ads in Dubai: lead ads, local targeting and lead quality',
    },
    pains: [
      { title: 'Cheap leads that never answer', body: 'Instant forms that take two taps bring in names and numbers, but many people never pick up or did not mean to enquire, so sales time goes on chasing.' },
      { title: 'Judged on form counts, not customers', body: 'Campaigns are compared on cost per lead alone. Nobody checks which leads became customers, so budget keeps flowing to whatever fills in the most forms.' },
      { title: 'Comments left unanswered', body: 'Questions, complaints and spam pile up under ads, putting off the next person who reads them and wasting attention you paid for.' },
    ],
    includes: [
      { title: 'Lead ads and instant forms', body: 'Forms that balance ease and intent: the higher-intent form type, custom questions, conditional answers and a thank-you screen with clear next steps.' },
      { title: 'Placement planning', body: 'Facebook feed, Marketplace, Reels and Stories designed for separately, with Marketplace used where people browse for local products and services.' },
      { title: 'Local and service audiences', body: 'Location targeting by emirate, city or radius, language targeting, and exclusions for existing customers, so ads reach people you can actually serve.' },
      { title: 'Lead quality tracking', body: 'A simple shared sheet where your team marks each lead as contacted, qualified, booked or sold, so campaigns are judged by outcomes, not form counts.' },
      { title: 'Lead outcomes matched to campaigns', body: 'Outcomes from that sheet matched to the campaign, ad and form each lead came from, so you see cost per real customer. Once volume justifies it, we connect the Conversions API so Meta can optimise for converted leads.' },
      { title: 'Page and comment moderation', body: 'Ad and page comments checked on working days, simple questions answered, complaints passed to your team, spam hidden and keyword filters set.' },
      { title: 'Arabic and English lead forms', body: 'Form questions, ad copy and follow-up message templates in both languages, with Arabic written or checked by a fluent Arabic writer.' },
    ],
    process: [
      { title: 'Free lead audit', body: 'We review your Facebook campaigns, forms, audiences, page comments and what happens to leads after they arrive, then share the findings on a video call.' },
      { title: 'Lead definition and AED quote', body: 'We agree with your sales team what counts as a qualified lead, set a target cost per qualified lead, and send a written monthly management quote in AED.' },
      { title: 'Forms, audiences and feedback loop', body: 'New instant forms or landing pages, local audiences, the shared lead outcome sheet and a weekly routine that matches outcomes back to campaigns.' },
      { title: 'Run, moderate and refine', body: 'Budget moved towards the campaigns that bring qualified leads, comments moderated, creative refreshed and a weekly report on cost per qualified lead and sales.' },
    ],
    platforms: ['Meta Ads Manager', 'Instant forms', 'Events Manager', 'Meta Business Suite', 'Facebook Marketplace', 'Google Sheets', 'WhatsApp Business'],
    figures: [
      { type: 'mindmap', caption: 'What a Facebook lead campaign for a UAE business is made of, from placement to follow-up.', center: 'Facebook ads for leads', after: 0, branches: [
        { label: 'Placements', items: ['Feed and Marketplace', 'Reels and Stories'] },
        { label: 'Forms', items: ['Instant forms', 'Qualifying questions', 'Arabic and English'] },
        { label: 'Audiences', items: ['Emirate, city or radius', 'Language and exclusions'] },
        { label: 'Follow-up', items: ['Fast call or WhatsApp', 'Outcome logged per lead'] },
      ] },
      { type: 'matrix', caption: 'Choosing how much friction to put in a lead form, depending on what the lead is worth.', after: 1, cols: ['Quick form', 'Longer form'], rows: ['High-value service', 'Low-value offer'], cells: [
        { title: 'Add a filter', body: 'Many leads, few serious: add a qualifying question' },
        { title: 'Worth the effort', body: 'Fewer but more serious leads for costly services' },
        { title: 'Keep it simple', body: 'Volume matters more than depth for small offers' },
        { title: 'Too much effort', body: 'People drop off: shorten the form or improve the offer' },
      ] },
      { type: 'venn', caption: 'Lead quality improves when Meta’s form data and your sales outcomes are joined up.', after: 3,
        left: { title: 'Meta’s form data', body: 'Who saw the ad, filled in the form and when' },
        right: { title: 'Your sales notes', body: 'Who answered, qualified, booked and paid' },
        overlap: 'Campaigns that find buyers' },
    ],
    guide: [
      {
        heading: 'What a Facebook ads agency in Dubai is for',
        paragraphs: [
          'Facebook is still where many UAE residents spend time, compare local services and ask for recommendations. A Facebook ads agency in Dubai earns its fee when it turns that attention into enquiries your team can follow up: bookings for a clinic or salon, trial classes, quotes for a home service, viewings, or orders for a local shop.',
          'This page is about Facebook itself: lead ads, instant forms, the Facebook feed, Marketplace and Reels, and what happens to a lead after it arrives. If you want the whole Meta platform planned together, including Instagram placements, Messenger and WhatsApp click-to-chat, our Meta advertising service for Dubai covers that. Online stores selling from a product catalogue are better served by our ecommerce page.',
          'Ad spend is paid directly to Meta from your own ad account, and your page, ad account and lead data stay in your company’s name.',
        ],
      },
      {
        heading: 'Lead ads and instant forms: speed versus quality',
        paragraphs: [
          'Instant forms open inside Facebook with the person’s name, email and phone number already filled in. That makes them fast to complete, which is both their strength and their weakness: volume is easy, intent is not. A good lead form adds just enough friction to filter out casual taps.',
          'For high-value services, a short landing page sometimes beats an instant form, because the extra step filters out people who are not ready. We usually test both before settling on one.',
        ],
        bullets: [
          'Use the higher-intent form type, which adds a review step before the form is sent',
          'Ask one or two qualifying questions, such as area, preferred date or what the person needs',
          'Use conditional answers so people only see the questions that apply to them',
          'Write the intro so people know exactly what happens next and who will contact them',
          'End with a thank-you screen offering a call button, a WhatsApp link or a booking page',
        ],
      },
      {
        heading: 'Placements: feed, Marketplace and Reels',
        paragraphs: [
          'Facebook offers several placements, and each behaves differently. The feed is where people read and compare, so longer copy and before-and-after images can work. Marketplace is where people browse to buy locally, which suits furniture, cars, home services and local shops. Reels and Stories reward short vertical video that catches attention in the opening seconds.',
          'Automatic placements are a sensible starting point, but we check results by placement every week. If Marketplace brings cheap leads that never answer, or Reels brings enquiries from outside your service area, we adjust or remove that placement rather than letting the average hide it.',
        ],
      },
      {
        heading: 'Measuring lead quality without special software',
        paragraphs: [
          'The single biggest improvement for most Facebook lead campaigns is knowing which leads became customers. You do not need special software to start. A shared spreadsheet with one row per lead, and a column your team updates to contacted, qualified, booked or sold, is enough.',
          'Each week we match those outcomes to the campaign, ad and form each lead came from. That lets you judge campaigns on real customers and move budget to the ones that bring them. Getting Meta itself to optimise towards converted leads is a further step: it needs a supported connection, such as the Conversions API or an integration with your sales system, and enough converted leads each week to learn from. We set that up once your volume justifies it.',
          'Reporting changes too. Instead of cost per lead, we report cost per qualified lead and cost per sale. A Facebook ads agency in Dubai that only reports cost per lead is measuring the easy number.',
        ],
      },
      {
        heading: 'Local audiences, Arabic forms and special ad categories',
        paragraphs: [
          'Location targeting can be set by emirate, city or a radius around your branch, and language targeting helps when you run English and Arabic ads side by side. For service businesses, narrow interest targeting usually matters less than clear creative and a form that filters: Meta finds the right people once it knows what a good lead looks like.',
          'Arabic forms, ads and follow-up templates are written or checked by a fluent Arabic writer. A form in Arabic followed by an English-only phone call loses trust, so plan who answers in which language. During Ramadan, evening activity rises and many businesses change their hours, so adjust ad schedules and response times to match, and plan Eid offers early.',
          'Some sectors fall under Meta’s special ad categories, such as housing, employment, credit and social or political issues. These restrict some targeting options, so property, recruitment and finance campaigns need to be planned within those rules from the start.',
        ],
      },
      {
        heading: 'Comments, privacy and working with a remote team',
        paragraphs: [
          'Comments under ads are public, and the next person reads them before deciding whether to fill in your form. We check comments on working days, answer simple questions with wording you approve, pass complaints or detailed enquiries to your team, hide spam and set keyword filters on your Facebook page.',
          'Lead forms collect personal data, so the UAE Personal Data Protection Law (PDPL) applies. In plain terms: link a clear privacy policy in every form, say how you will contact people, and use the data only for what you said. We are not lawyers, so ask a local adviser to check your wording.',
          'We are a Chennai team serving Dubai and the wider UAE remotely, with no Dubai office and no in-person meetings. UAE time is 1.5 hours behind India, so comment checks, reports and calls fit inside your working day. When you compare any Facebook ads agency in Dubai, ask how it handles comments and lead outcomes, not only how it makes ads.',
        ],
      },
    ],
    related: [
      { label: 'Meta ads across Instagram, Messenger and WhatsApp in Dubai', href: '/uae/meta-ads-agency-dubai/' },
      { label: 'Catalogue and Advantage+ ads for UAE online stores', href: '/uae/ecommerce-meta-ads-agency-dubai/' },
      { label: 'Choosing between Facebook ad agencies in Dubai', href: '/uae/facebook-advertising-agencies-dubai/' },
      { label: 'Performance marketing agency in Dubai for all paid channels', href: '/uae/performance-marketing-agency-dubai/' },
      { label: 'Ecommerce marketing agency for the UAE', href: '/uae/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'How much does a Facebook ads agency in Dubai cost?', a: 'It depends on how many campaigns, services and languages you run, how many forms and landing pages are needed, whether comment moderation is included, and how much your tracking needs fixing. We do not publish prices. After a free audit we send a written quote in AED. Ad spend is paid directly to Meta from your account.' },
      { q: 'Are instant forms better than a landing page?', a: 'Instant forms are faster and usually cheaper per lead, but intent is lower. A landing page adds a step that filters out casual interest. For low-value offers instant forms often win; for high-value services, a higher-intent form or a landing page tends to bring fewer but more serious leads. We test both before deciding.' },
      { q: 'How do you improve lead quality?', a: 'We add qualifying questions, use the higher-intent form type and agree with your team what a qualified lead is. Your team then marks each lead’s outcome in a shared sheet, and every week we match those outcomes to campaigns, so budget goes to the ads that bring real customers rather than just form fills.' },
      { q: 'Do we need a CRM to track lead quality?', a: 'Not to start. A shared spreadsheet with lead outcomes is enough to judge campaigns on real customers. If you want Meta to optimise towards converted leads, that needs a supported connection, such as the Conversions API or a sales system with a Meta integration, and enough volume to learn from. We advise when that step is worth it.' },
      { q: 'Do you moderate comments on our Facebook page?', a: 'Yes, if you want it in the scope. We check ad and page comments on working days, answer simple questions using wording you approve, pass complaints and detailed enquiries to your team, hide spam and set keyword filters. Anything sensitive goes to you before we reply.' },
      { q: 'Can you run Facebook ads for property or recruitment?', a: 'Yes, but ads about housing, employment and credit can fall under Meta’s special ad categories, which restrict some targeting options. We plan these campaigns within the rules from the start and rely more on clear creative and form questions to reach the right people.' },
      { q: 'Will you call or message the leads for us?', a: 'No. Your team is better placed to call or message leads, because they know the service and can close the sale. We set up the forms, notifications and thank-you screens so leads reach your team quickly, and we report on how fast they were contacted and what happened next.' },
    ],
  },

  // ───────────────────────────────────────────── A: Facebook advertising agencies in Dubai
  {
    slug: 'uae/facebook-advertising-agencies-dubai',
    kind: 'global',
    market: 'UAE',
    twin: 'facebook-advertising-agencies',
    title: 'Facebook Advertising Agencies in Dubai | How to Compare Them',
    description: 'Comparing Facebook advertising agencies in Dubai? Agency types, questions to ask, red flags, what a real audit covers and how to keep your ad account in your name.',
    primaryKeyword: 'Facebook advertising agencies in Dubai',
    navLabel: 'Facebook Advertising Agencies Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'Agency types · Questions to ask · Red flags · Audits · Contracts and account ownership',
    h1: 'Comparing Facebook Advertising Agencies in Dubai? *Start Here*',
    intro: 'Comparing Facebook advertising agencies in Dubai is hard when every proposal promises growth. This guide explains the types of agency, the questions that separate them, the red flags, what a proper audit includes and how to keep your accounts in your name. Magnus Path is a Chennai team serving Dubai and the wider UAE remotely, and we explain how we work at the end.',
    icon: 'social',
    facts: ['Accounts always in your name', 'Free written audit first', 'Scope and AED quote in writing'],
    headings: {
      pains: 'What goes wrong when businesses choose an ad agency',
      includes: 'What you get when you work with us',
      process: 'How we start with a new UAE client in *4 steps*',
      guide: 'How to compare Facebook advertising agencies in Dubai',
    },
    pains: [
      { title: 'Proposals that all sound the same', body: 'Every agency promises more sales and lower costs, so it is hard to tell who will actually do the work, how they will do it, and how you will know it is working.' },
      { title: 'Accounts you do not control', body: 'Some businesses find out too late that the ad account, page or pixel sits in the agency’s business portfolio, and leaving means starting again from nothing.' },
      { title: 'Reports that hide the real picture', body: 'Monthly reports full of reach and clicks, with ROAS or cost per lead measured the agency’s way and never checked against your own sales.' },
    ],
    includes: [
      { title: 'A written audit before any quote', body: 'A review of your ad account, tracking, creative and results, shared on a call, with problems and fixes listed whether or not you hire us.' },
      { title: 'Scope, timeline and exclusions in writing', body: 'A quote in AED that says what is included, how often creative is refreshed, which reports you get and what is not covered.' },
      { title: 'Your accounts, your data', body: 'Business portfolio, ad accounts, page, pixel and audiences stay in your company’s name, and we work through partner access you can remove.' },
      { title: 'Named people doing the work', body: 'You know who manages your account and who to message, and a fluent Arabic writer writes or checks every Arabic ad.' },
      { title: 'Reports checked against your sales', body: 'Weekly results compared with your own orders or leads, including refused cash-on-delivery parcels, not just what Ads Manager says.' },
      { title: 'A clean exit if you leave', body: 'If you stop working with us, our access is removed and everything we built stays in your accounts: campaigns, audiences, creative and reports.' },
      { title: 'The right scope for your business', body: 'Catalogue ads for online stores, the full Meta platform including WhatsApp, or Facebook lead campaigns for local services, chosen to fit what you sell.' },
    ],
    process: [
      { title: 'Short intro call', body: 'A video call in your working day to understand your business, goals, current set-up and what has or has not worked so far.' },
      { title: 'Free written audit', body: 'With read access to your ad account, we review structure, tracking, creative and results, and send a written list of findings and fixes.' },
      { title: 'Scope and AED quote', body: 'A proposal with scope, timeline, reporting and exclusions and a monthly management fee in AED. Ad spend stays paid directly to Meta by you.' },
      { title: 'First month plan', body: 'Tracking fixes, account clean-up and first tests agreed with clear success measures, followed by a review call at the end of the month.' },
    ],
    platforms: ['Meta Ads Manager', 'Meta Business Suite', 'Events Manager', 'Conversions API', 'Looker Studio', 'GA4'],
    figures: [
      { type: 'mindmap', caption: 'The main kinds of help available for Facebook and Instagram ads, and what each usually suits.', center: 'Who runs your ads', after: 0, branches: [
        { label: 'Freelancer', items: ['One person, flexible', 'Little cover for leave'] },
        { label: 'Specialist', items: ['Meta ads focus', 'Deeper testing'] },
        { label: 'Full-service', items: ['Ads, SEO, content, web', 'More hand-offs inside'] },
        { label: 'In-house', items: ['Your own hire', 'Needs training and tools'] },
      ] },
      { type: 'matrix', caption: 'A rough way to match the type of help to your budget and how complex your advertising is.', after: 1, cols: ['Smaller budget', 'Larger budget'], rows: ['One simple account', 'Many channels or markets'], cells: [
        { title: 'Freelancer', body: 'A capable freelancer can cover one simple account' },
        { title: 'Specialist agency', body: 'More testing and creative output on Meta' },
        { title: 'Small agency', body: 'One team handling Meta plus a couple of other channels' },
        { title: 'In-house plus help', body: 'Your own team, with outside help for specialist work' },
      ] },
      { type: 'steps', caption: 'What a proper Facebook ads audit should check, in the order that matters most.', after: 3, steps: [
        { title: 'Ownership', body: 'Who owns the portfolio, pixel and page' },
        { title: 'Tracking', body: 'Pixel, Conversions API, duplicate events' },
        { title: 'Structure', body: 'Campaigns, budgets, overlap, exclusions' },
        { title: 'Creative', body: 'Variety, fatigue, Arabic and English' },
        { title: 'Results vs sales', body: 'Ads Manager checked against real orders' },
      ] },
    ],
    guide: [
      {
        heading: 'Types of Facebook advertising agencies in Dubai',
        paragraphs: [
          'Search for Facebook advertising agencies in Dubai and you will find everything from one-person freelancers to large full-service groups, plus teams abroad serving the UAE remotely. None of these is right for everyone. The useful question is which type fits your budget, your stage and how much of the work you want to keep in-house.',
          'Many UAE businesses combine them: an in-house marketer who owns the brand and an outside specialist who runs the ad accounts.',
        ],
        bullets: [
          'Freelancers: flexible and hands-on, but one person covers strategy, set-up, creative and reporting, and holidays or illness can stall the account',
          'Specialist agencies: focus on Meta and perhaps one or two other ad platforms, so testing and platform knowledge tend to be deeper',
          'Full-service agencies: handle ads alongside SEO, content, social posting and websites, which is convenient, though paid social may be one small team among many',
          'In-house teams: your own hire knows the product well, but needs training, tools and someone senior to check the work',
        ],
      },
      {
        heading: 'How to compare agencies fairly',
        paragraphs: [
          'Agencies are hard to compare on proposals alone, because most use the same words. Compare them on things you can check instead.',
          'First, who does the work. Ask to meet the person who will manage your account day to day, not only the person selling. Second, how they measure success: cost per purchase or per qualified lead, checked against your own sales, is more useful than reach or clicks. Third, how they handle creative, since on Meta the ad itself does much of the targeting. Who writes the scripts, who produces the videos, and how often are new ads tested?',
          'For the UAE specifically, ask how they handle Arabic. Arabic ads should be written or checked by a fluent Arabic writer, not run through machine translation. Ask how they plan for Ramadan, Eid, White Friday, Yellow Friday and the Dubai Shopping Festival, and how they treat cash-on-delivery orders that are later refused. If you rely on WhatsApp enquiries, ask how click-to-chat results are tracked.',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        paragraphs: [
          'A short list of questions brings out most of the differences between Facebook advertising agencies in Dubai. Clear, specific answers are a good sign. Vague answers about secret methods or special relationships with Meta are not.',
        ],
        bullets: [
          'Whose business portfolio will the ad account, pixel and page sit in?',
          'Will Meta bill ad spend to our card directly, or will you invoice it to us?',
          'Who exactly works on our account, and how many other accounts do they manage?',
          'How do you set up the Conversions API and check that events are not counted twice?',
          'What will you report each week, and how will you check it against our orders or leads?',
          'How often will you test new creative, and who produces it?',
          'What is the notice period, and what do we keep if we leave?',
        ],
      },
      {
        heading: 'What a proper audit looks like',
        paragraphs: [
          'An audit is the cheapest way to judge an agency, because it shows how they think before you pay anything. It should start with ownership and access, then tracking, because every other conclusion depends on whether the data is right.',
          'After that comes structure (how campaigns, budgets and audiences are organised, and whether they compete with each other), creative (how many different ads are live, how old they are and how they perform), and finally reported results compared with your actual sales. A good audit names specific problems with evidence and suggests fixes in order of impact. You should be able to act on it even if you never hire that agency.',
          'Be wary of audits that are mostly generic charts, or that conclude only that you need a bigger budget.',
        ],
      },
      {
        heading: 'Red flags, contracts and account ownership',
        paragraphs: [
          'Some warning signs are worth walking away over. Read the contract for three things as well: who owns the accounts and creative, how much notice either side must give, and what is handed over at the end. Your company should own the business portfolio, ad accounts, page, pixel and audiences from day one.',
          'If your ads collect personal data, through lead forms or customer lists, also check how the agency handles it under the UAE Personal Data Protection Law (PDPL). In plain terms, data should be collected with consent and used only for what people were told. We are not lawyers, so ask a local adviser to review both the contract and your privacy policy.',
        ],
        bullets: [
          'The agency wants to run your ads from its own ad account or business portfolio',
          'Ad spend is bundled into the fee, so you cannot see what Meta was actually paid',
          'Fixed results are promised before anyone has looked at your account',
          'Long contracts with no clear exit and no handover of campaigns, audiences or creative',
          'Reports that show only reach, impressions and clicks',
          'No clear answer on who writes the Arabic copy',
        ],
      },
      {
        heading: 'How Magnus Path works with UAE businesses',
        paragraphs: [
          'We are one of the options you might weigh, so here is how we work. Magnus Path is a Chennai team serving Dubai and the wider UAE remotely. We have no Dubai office and do not offer in-person meetings; UAE time is 1.5 hours behind India, so our working days almost fully overlap and calls fit your office hours.',
          'Every engagement starts with a free audit. You then get a written quote in AED listing scope, timeline and exclusions. Ad spend is paid directly to Meta from your own account, and everything stays in your company’s name. Depending on your business, we focus on catalogue ads for online stores, the full Meta platform including WhatsApp click-to-chat, or Facebook lead campaigns for services. Whichever of the Facebook advertising agencies in Dubai you choose, insist on the same basics.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce Meta advertising for UAE online stores', href: '/uae/ecommerce-meta-ads-agency-dubai/' },
      { label: 'Meta platform management in Dubai, including WhatsApp', href: '/uae/meta-ads-agency-dubai/' },
      { label: 'Facebook lead ads for Dubai service businesses', href: '/uae/facebook-ads-agency-dubai/' },
      { label: 'Performance marketing agency in Dubai', href: '/uae/performance-marketing-agency-dubai/' },
      { label: 'ROAS calculator to check an agency’s results', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'How much do Facebook advertising agencies in Dubai charge?', a: 'Fees vary with scope: how many campaigns and languages, how much creative is produced, whether tracking needs work, how often you get reports and calls, and whether other channels are included. Ask for a written quote that separates the management fee from ad spend. We quote in AED after a free audit, and ad spend is paid directly to Meta.' },
      { q: 'Should I hire a freelancer or an agency?', a: 'A capable freelancer can suit a single, simple account. An agency makes more sense when you need regular creative testing, Arabic and English campaigns, several channels or cover when someone is away. Either way, keep the accounts in your company’s name and judge results against your own sales rather than the dashboard alone.' },
      { q: 'What should a free Facebook ads audit include?', a: 'Ownership and access, tracking (pixel, Conversions API and duplicate events), campaign and budget structure, creative variety and fatigue, and a comparison of reported results with your real orders or leads. It should list specific problems and fixes in priority order, so it is useful even if you do not hire that agency.' },
      { q: 'Is it a problem if the agency uses its own ad account?', a: 'Usually, yes. If the ad account, pixel or page sits in the agency’s business portfolio, you can lose the history, audiences and data when you leave. Ask for everything to be created in your company’s portfolio, with the agency given partner access that you can remove at any time.' },
      { q: 'Does an agency need to be in Dubai to run UAE campaigns well?', a: 'Not necessarily. Meta campaigns are managed online, so what matters is knowledge of UAE buyers, Arabic copy written or checked by a fluent writer, and working hours that overlap with yours. We are a Chennai team serving the UAE remotely; India is only 1.5 hours ahead, so our days almost fully overlap.' },
      { q: 'How long before we know if an agency is working?', a: 'The first weeks usually go on tracking fixes and early tests, so judge that period by the quality of the work and communication. Clear results on sales or qualified leads normally need a couple of months of steady testing, depending on your budget and how many conversions the account gets.' },
      { q: 'What should the contract say about leaving?', a: 'It should state the notice period, confirm that the business portfolio, ad accounts, page, pixel, audiences and creative belong to you, and say what the agency hands over at the end, such as reports and creative files. Avoid contracts that tie ownership of ads or data to the agency.' },
    ],
  },
];
