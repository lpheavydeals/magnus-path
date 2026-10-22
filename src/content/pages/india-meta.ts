import type { ServicePageData } from '../../data/types';

export const indiaMetaPages: ServicePageData[] = [
  // ───────────────────────── Type E: online stores only ─────────────────────────
  {
    slug: 'ecommerce-meta-ads-agency',
    kind: 'service',
    title: 'Ecommerce Meta Ads Agency in India | Catalogue Ads | Magnus Path',
    description: 'Ecommerce Meta ads agency in India for online stores: Advantage+ sales and catalogue ads, UGC creative tests and ROAS judged after COD refusals and RTO.',
    primaryKeyword: 'ecommerce Meta ads agency in India',
    navLabel: 'Ecommerce Meta Ads',
    breadcrumb: [{ label: 'Ads', href: '/performance-marketing/' }],
    eyebrow: 'Catalogue ads · Advantage+ · UGC creative',
    h1: 'Ecommerce Meta Ads Agency in India for *Online Stores*',
    intro: 'Magnus Path is an ecommerce Meta ads agency in India that works only with online stores. We run catalogue and Advantage+ sales campaigns on Facebook and Instagram, keep your product catalogue healthy, test UGC-style creatives every week and judge ROAS after COD refusals and returns, so the numbers match what actually reaches your bank account.',
    icon: 'social',
    facts: ['Free audit first', 'Catalogue and pixel in your name', 'ROAS judged after RTO'],
    headings: {
      pains: 'Meta reports a healthy ROAS. Your RTO pile says otherwise.',
      includes: 'What our Meta ads management for online stores covers',
      process: 'How we take over your store’s Meta ads in *4 steps*',
      guide: 'Meta ads for Indian online stores: a practical guide',
    },
    pains: [
      { title: 'A catalogue Meta cannot read properly', body: 'Out-of-stock items still advertised, prices that differ from the product page and images cropped badly in square slots mean dynamic ads show the wrong products to the wrong shoppers.' },
      { title: 'Purchases counted before the parcel is accepted', body: 'Meta records a purchase the moment a COD order is placed. Refused parcels and size returns never reach the ads report, so campaigns that lose money can look like winners.' },
      { title: 'The same three creatives, running for months', body: 'Ad fatigue sets in quietly. Without a steady flow of new UGC videos, offers and formats, costs creep up and the whole account depends on one ageing winner.' },
    ],
    includes: [
      { title: 'Advantage+ sales campaigns', body: 'Meta’s automated shopping campaigns (Advantage+ sales campaigns, previously Advantage+ shopping), set up with sensible budget limits for existing customers and clean purchase data, so automation works for your margins.' },
      { title: 'Catalogue and product feed health', body: 'Your Shopify or WooCommerce catalogue synced to Commerce Manager, with product sets by category, margin and stock, and mismatched prices, missing images and errors fixed.' },
      { title: 'Dynamic product ads', body: 'Retargeting that shows each visitor the products they viewed or left in the cart, plus broad catalogue ads that find new shoppers for products similar to what they browse.' },
      { title: 'UGC and creative testing', body: 'A weekly testing plan for UGC-style videos, unboxings, try-ons and offer angles, with Hindi and regional-language versions written or checked by a fluent writer.' },
      { title: 'Pixel and Conversions API for stores', body: 'Purchase, add-to-cart and checkout events sent from both browser and server, deduplicated, and checked against your store’s orders, including the payment method used.' },
      { title: 'ROAS after COD and returns', body: 'A margin-based break-even ROAS for each product group, with COD refusals, RTO and returns pulled from your store and courier data every week.' },
      { title: 'Shops and festive sale planning', body: 'Facebook and Instagram Shops set up where they help browsing, and catalogue sale prices, offers and budgets prepared well ahead of Navratri, Diwali and big marketplace sale weeks.' },
    ],
    process: [
      { title: 'Free store and catalogue audit', body: 'We review your ad account, Commerce Manager diagnostics, pixel and Conversions API set-up, and recent orders, including COD share and RTO by product.' },
      { title: 'Targets and a written quote', body: 'We agree break-even ROAS by product group from your margins, then send a written quote listing scope, timeline and exclusions. Ad spend is paid straight to Meta.' },
      { title: 'Fix data, then rebuild', body: 'Catalogue fixes, product sets and tracking repairs come first. New campaigns then launch in stages, so Meta’s learning is not reset all at once.' },
      { title: 'Test, cut and scale', body: 'Fresh creatives go live every week, weak ads are paused early, and budget moves to the products and audiences that bring prepaid, kept orders.' },
    ],
    platforms: ['Meta Ads Manager', 'Commerce Manager', 'Events Manager', 'Conversions API', 'Shopify', 'WooCommerce', 'GA4'],
    figures: [
      { type: 'mindmap', caption: 'The four parts of Meta advertising for an online store that decide whether ads turn into kept orders.', after: 0, center: 'Meta ads for a store', branches: [
        { label: 'Catalogue', items: ['Correct prices and stock', 'Product sets by margin', 'Clean product images'] },
        { label: 'Campaigns', items: ['Advantage+ sales', 'Dynamic retargeting', 'Prospecting tests'] },
        { label: 'Creative', items: ['UGC and try-on videos', 'Hindi and regional copy', 'New angles every week'] },
        { label: 'Measurement', items: ['Pixel plus Conversions API', 'ROAS after RTO', 'Orders matched to store'] },
      ] },
      { type: 'matrix', caption: 'Margin and COD refusals decide how hard Meta should push each product group.', after: 2, cols: ['Low margin', 'High margin'], rows: ['Mostly prepaid orders', 'Many COD refusals'], cells: [
        { title: 'Steady spend', body: 'Scale only while ROAS stays above break-even' },
        { title: 'Push hardest', body: 'Own product set, most of the budget, most new creative' },
        { title: 'Rethink first', body: 'Fix with a prepaid offer or a bundle before more spend' },
        { title: 'Nudge to prepaid', body: 'Keep advertising, but reward UPI payment at checkout' },
      ] },
      { type: 'steps', caption: 'A weekly creative testing loop for UGC ads, from the brief to the decision to scale or cut.', after: 3, steps: [
        { title: 'Write the brief', body: 'One hook, one product, one offer' },
        { title: 'Film the UGC', body: 'Phone video of real use, no studio polish' },
        { title: 'Launch a test', body: 'Small budget, compared with a control ad' },
        { title: 'Read the results', body: 'Hook rate, cost per purchase, RTO' },
        { title: 'Scale or cut', body: 'Winners move into the main campaign' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce Meta ads agency in India should do',
        paragraphs: [
          'Meta ads for an online store are different from Meta ads for a clinic or a coaching institute. A store has hundreds or thousands of products, prices and stock levels that change every day, and a sale that only becomes real once the parcel is accepted. The work is less about clever targeting and more about clean product data, steady creative and honest measurement.',
          'An ecommerce Meta ads agency in India should connect three things: your product catalogue, your Facebook and Instagram campaigns, and your real orders after COD refusals and returns. If any one of them is weak, Meta’s automation optimises towards the wrong goal. This page covers online stores only; lead generation and the wider Meta set-up are covered on the related pages below.',
        ],
      },
      {
        heading: 'Catalogue health: the base of dynamic product ads',
        paragraphs: [
          'Dynamic product ads and Advantage+ catalogue ads build each ad from your product feed. Meta reads the title, price, image, availability and link for every item, then chooses which products to show each person. If the feed says a kurta is in stock at one price and the product page shows another, the shopper leaves and Meta learns little.',
          'Most Shopify and WooCommerce stores sync their catalogue through the official sales-channel app or plugin, which handles the basics. Problems hide in the details: variants listed as separate products, sale prices that do not update, lifestyle images that crop badly in square placements, or items marked available when only one size is left.',
        ],
        bullets: [
          'Titles that say what the product is, not only the brand name',
          'Prices and sale prices that match the product page, GST included',
          'Product sets by category, margin band and stock level',
          'Out-of-stock and discontinued items dropped automatically',
          'At least one clean image that works in square and vertical crops',
        ],
      },
      {
        heading: 'ROAS after COD, RTO and returns',
        paragraphs: [
          'Meta counts a purchase when the order is placed. For Indian D2C brands, where cash on delivery is still common and return-to-origin is a real cost, that number is often flattering. A campaign that reports a strong ROAS can lose money once refused parcels, return shipping and size exchanges are taken out.',
          'Work out break-even ROAS for each product group from your margin after product cost, shipping, payment charges and expected RTO. Then compare Meta’s reported ROAS with your store’s kept orders every week. If COD orders from Meta come back far more often than UPI or card orders, test a small prepaid offer, a COD confirmation message on WhatsApp, or a lower purchase value for COD orders sent through the Conversions API, so Meta learns to find buyers who actually pay.',
        ],
      },
      {
        heading: 'Creative testing with UGC and regional languages',
        paragraphs: [
          'On Facebook and Instagram, creative now does much of the targeting. Advantage+ campaigns decide who sees an ad largely from how people respond to it, so a steady supply of new ads matters more than detailed audience settings. For most stores that means short, phone-shot UGC-style videos: a real person unboxing, wearing, applying or cooking with the product.',
          'Test one idea at a time: a new hook, a new offer, a new format or a new product. Keep a control ad running so the comparison is fair. Hindi, Tamil, Telugu, Kannada or Bengali versions often work well for ethnic wear, Ayurveda and packaged food, as long as the copy is written or checked by a fluent writer rather than machine-translated.',
        ],
      },
      {
        heading: 'Advantage+ sales campaigns, Shops and festive peaks',
        paragraphs: [
          'Advantage+ sales campaigns (previously Advantage+ shopping campaigns; Meta renames products often) combine prospecting and retargeting in one automated campaign. They work well once the pixel, Conversions API and catalogue are reliable, and once you limit how much budget goes to people who already buy from you. With weak data, they spend quickly on whoever is easiest to convert.',
          'Shops on Facebook and Instagram let shoppers browse your products inside the apps, but in India they mostly send people to your website to buy, so treat them as a shop window rather than a checkout. Plan festive seasons early: Navratri, Diwali and the big marketplace sale weeks raise ad costs for everyone, so new creatives, offers and catalogue sale prices should be ready weeks before demand peaks.',
        ],
      },
      {
        heading: 'Choosing an ecommerce Meta ads agency in India',
        paragraphs: [
          'Ask how the agency handles COD and RTO in its reporting, how often new creatives go live, and who owns the ad account, pixel and catalogue. Ask to see a sample weekly report. You should also know what customer data is sent to Meta and why. In plain terms, India’s Digital Personal Data Protection Act expects you to tell shoppers what you collect, get consent where it is needed and use customer lists only as explained. We are not lawyers, so take legal advice for your case.',
          'With Magnus Path, the business portfolio, ad account, pixel and catalogue stay in your name, and ad spend is paid directly to Meta from your own account. The management fee is quoted after a free audit. You can meet the team at our Chennai head office or our Bengaluru office by appointment, or work with us remotely from anywhere in India.',
        ],
        bullets: [
          'Ad account, pixel and catalogue owned by you, with agency access only',
          'ROAS reported after COD refusals and returns, not just Meta’s figure',
          'New creatives tested every week',
          'A written quote with scope and exclusions before work starts',
        ],
      },
    ],
    related: [
      { label: 'Free ad budget planner', href: '/tools/ad-budget-planner/' },
      { label: 'Free ecommerce website checker', href: '/tools/ecommerce-website-checker/' },
      { label: 'Meta advertising across Facebook, Instagram and WhatsApp', href: '/meta-ads-agency/' },
      { label: 'Facebook lead ads for local and service businesses', href: '/facebook-ads-agency/' },
      { label: 'How to compare Facebook ad agencies in India', href: '/facebook-advertising-agencies/' },
      { label: 'Shopify development for stores that convert ad traffic', href: '/shopify-development/' },
      { label: 'Ecommerce PPC for Google Shopping and Performance Max', href: '/ecommerce-ppc-agency/' },
      { label: 'Free ROAS calculator for online stores', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce Meta ads agency do?', a: 'It runs Facebook and Instagram ads for online stores only. That covers catalogue and product feed health, Advantage+ sales campaigns, dynamic product ads for retargeting, weekly creative tests with UGC-style videos, pixel and Conversions API tracking, and reporting that judges ROAS against kept orders after COD refusals and returns, not just Meta’s own figures.' },
      { q: 'How much does Meta ads management for an online store cost?', a: 'It depends on catalogue size, how many campaigns and languages you run, how much new creative you need each month, and the state of your pixel and catalogue. Ad spend is paid directly to Meta from your own account. Our management fee is quoted separately after a free audit, in a written quote listing scope, timeline and exclusions.' },
      { q: 'Do dynamic product ads still work for Indian stores?', a: 'Yes, when the catalogue is clean. Dynamic ads show each shopper the products they viewed, or similar ones, which suits fashion, beauty and home stores with many items. They fail when prices, stock or images in the feed do not match the website, so catalogue health comes before any campaign change.' },
      { q: 'Should we use Advantage+ sales campaigns?', a: 'Usually yes, once tracking and the catalogue are reliable. Advantage+ sales campaigns automate audiences and placements, which saves time and often lowers costs. Limit spend on existing customers, give them fresh creative every week and check results against your store orders. With poor data, the automation optimises towards the wrong buyers.' },
      { q: 'How do you handle COD and RTO in Meta reporting?', a: 'We pull kept orders from your store and courier data each week and compare them with what Meta reports. Where COD orders come back far more often than prepaid ones, we test prepaid offers, order confirmation messages, or a lower purchase value for COD sent through the Conversions API, so Meta learns which buyers actually pay.' },
      { q: 'Do you make the ad creatives?', a: 'We write briefs, scripts and copy, edit UGC-style videos and static ads, and plan the weekly tests. Many brands send product shots and phone videos from their own team or creators, and we turn them into ad versions. Hindi and regional-language copy is written or checked by a fluent writer before it goes live.' },
      { q: 'Can we meet the team in person?', a: 'Yes. Our head office and main delivery team are in Chennai, and we also have an office in Bengaluru. Store owners can meet the team at either office by appointment. Brands elsewhere in India work with us remotely through video calls, shared dashboards and a monthly review.' },
    ],
  },

  // ───────────────────────── Type M: the whole Meta platform ─────────────────────────
  {
    slug: 'meta-ads-agency',
    kind: 'service',
    title: 'Meta Ads Agency in India | Instagram & WhatsApp | Magnus Path',
    description: 'Meta ads agency in India running Facebook, Instagram Reels, Messenger and click-to-WhatsApp ads, with Conversions API, Advantage+ and accounts in your name.',
    primaryKeyword: 'Meta ads agency in India',
    navLabel: 'Meta Ads',
    breadcrumb: [{ label: 'Ads', href: '/performance-marketing/' }],
    eyebrow: 'Facebook · Instagram · Messenger · WhatsApp',
    h1: 'Meta Ads Agency in India for *Facebook, Instagram and WhatsApp*',
    intro: 'Magnus Path is a Meta ads agency in India that plans and runs your advertising across the whole Meta platform: Facebook, Instagram Reels, Stories and Explore, Messenger and click-to-WhatsApp ads. We set up Meta Business Suite properly, connect the Conversions API, structure Advantage+ campaigns and keep every asset in your company’s name.',
    icon: 'social',
    facts: ['Free audit first', 'Business portfolio in your name', 'Conversions API set up'],
    headings: {
      pains: 'Four apps, one ad account, and nobody sure what is working.',
      includes: 'What our Meta advertising management covers',
      process: 'How we set up and run your Meta ads in *4 steps*',
      guide: 'Advertising on Meta in India: a platform guide for brands',
    },
    pains: [
      { title: 'Assets scattered across personal profiles', body: 'The ad account sits under a former employee, the page under an old agency, and nobody can find the pixel. Without one business portfolio you own, every change is slow and risky.' },
      { title: 'A pixel that misses half the story', body: 'Browser-only tracking loses events to ad blockers, phone privacy settings and patchy mobile connections, so Meta optimises on partial data and reports disagree with your sales.' },
      { title: 'Instagram and WhatsApp treated as afterthoughts', body: 'Feed-sized ads are stretched into Reels and Stories, and WhatsApp chats started from ads wait hours for a reply, so spend reaches people but conversations stall.' },
    ],
    includes: [
      { title: 'Meta Business Suite and account structure', body: 'One business portfolio in your name holding the page, Instagram account, WhatsApp Business number, ad accounts and pixel, with people given only the roles they need.' },
      { title: 'Conversions API and Events Manager', body: 'Server-side events running alongside the pixel, deduplicated with event IDs, with match quality checked and key events prioritised so Meta learns from fuller data.' },
      { title: 'Advantage+ campaign structure', body: 'A simple structure that lets Meta’s automation work: fewer campaigns, consolidated budgets, clear objectives, and manual controls only where they add value.' },
      { title: 'Instagram Reels, Stories and Explore', body: 'Vertical, sound-on creative built for each placement rather than resized feed ads, with captions, safe zones and a hook in the first seconds.' },
      { title: 'Click-to-WhatsApp and Messenger ads', body: 'Ads that open a chat on WhatsApp or Messenger, with greeting messages, quick replies and a clear plan for who answers and how fast.' },
      { title: 'Audiences and exclusions', body: 'Customer lists, engagement and video-view audiences, and exclusions for recent buyers, used carefully alongside broad targeting rather than instead of it.' },
      { title: 'Reporting across apps and placements', body: 'A weekly note on spend, results and cost per result by app and placement, checked against your own sales or lead records, plus a monthly review call.' },
    ],
    process: [
      { title: 'Free Meta account audit', body: 'We review your business portfolio, ad accounts, pixel, Conversions API, campaign structure and recent results across Facebook, Instagram and WhatsApp.' },
      { title: 'Clean-up plan and written quote', body: 'We list fixes to ownership, tracking and structure, agree goals, then send a written quote with scope, timeline and exclusions. Ad spend stays separate.' },
      { title: 'Rebuild tracking and campaigns', body: 'Business Suite roles, the Conversions API and event set-up come first, then a simpler campaign structure launched in stages to protect learning.' },
      { title: 'Run, test and report', body: 'Weekly creative tests by placement, budget moved between apps based on results, and a monthly review of what to change next.' },
    ],
    platforms: ['Meta Business Suite', 'Ads Manager', 'Events Manager', 'Conversions API', 'Instagram', 'WhatsApp Business', 'Messenger', 'GA4'],
    figures: [
      { type: 'mindmap', caption: 'Where Meta ads can appear, and what has to be set up behind them before money is spent.', after: 0, center: 'The Meta ad platform', branches: [
        { label: 'Facebook', items: ['Feed and Reels', 'Stories and search results'] },
        { label: 'Instagram', items: ['Reels and Stories', 'Feed and Explore'] },
        { label: 'Messaging', items: ['Click-to-WhatsApp ads', 'Messenger ads'] },
        { label: 'Set-up', items: ['Business portfolio', 'Pixel plus Conversions API', 'Events Manager checks'] },
      ] },
      { type: 'steps', caption: 'A Conversions API set-up in five steps, from the event list to checking how well events match.', after: 2, steps: [
        { title: 'List key events', body: 'Purchase, lead, add-to-cart, contact' },
        { title: 'Pick the method', body: 'Platform app, gateway or server code' },
        { title: 'Add event IDs', body: 'So browser and server events deduplicate' },
        { title: 'Test the events', body: 'Use test events before going live' },
        { title: 'Check matching', body: 'Hashed email and phone, with consent' },
      ] },
      { type: 'venn', caption: 'Meta’s automation and your team’s inputs each do part of the job; good results need both.', after: 3, left: { title: 'Meta’s automation', body: 'Chooses audiences, placements and bids from live results' }, right: { title: 'Your inputs', body: 'Clean data, fresh creative, clear goals and fast replies' }, overlap: 'Ads that find real buyers' },
    ],
    guide: [
      {
        heading: 'What a Meta ads agency in India covers',
        paragraphs: [
          'Meta is not one channel. A single ad account can place ads on Facebook, Instagram, Messenger, WhatsApp and the Audience Network, in feeds, Stories, Reels, Explore, search results and in-stream video. Each placement has different viewers and different creative needs, even when the targeting is shared.',
          'A Meta ads agency in India should manage this as one platform: the business portfolio and permissions, the tracking that feeds Meta’s automation, the campaign structure, and creative made for each placement. For many Indian brands the mix leans towards Instagram Reels for discovery and WhatsApp for conversations, but the right mix depends on what you sell and to whom.',
        ],
      },
      {
        heading: 'Meta Business Suite and account ownership',
        paragraphs: [
          'Everything starts with a business portfolio (previously Business Manager) inside Meta Business Suite. It should hold your Facebook page, Instagram account, WhatsApp Business number, ad accounts, pixel and catalogue, all owned by your company, with staff and agencies given only the roles they need.',
          'A common problem in Indian businesses is a page or ad account created years ago by a former employee or freelancer on a personal profile. Fixing this first saves trouble later. The payment method, business verification and two-factor authentication should all sit with the business, not with one person.',
        ],
        bullets: [
          'Business verification completed in the company’s name',
          'At least two admins from your own team',
          'Agency access given as a role, never as ownership',
          'Ad spend billed to your own card or account',
        ],
      },
      {
        heading: 'Conversions API and Events Manager',
        paragraphs: [
          'The Meta pixel tracks actions in the browser. The Conversions API sends the same events from your server, website platform or a gateway, so Meta still receives them when browsers block cookies, phones limit tracking or mobile connections drop. With matching event IDs, Meta removes duplicates and keeps the fuller picture.',
          'Events Manager is where you check all this. Look at which events fire, whether browser and server events deduplicate, and the event match quality score, which shows how well Meta can link events to people. Sending hashed email or phone numbers improves matching, but only with clear consent. In plain terms, India’s Digital Personal Data Protection Act expects you to tell people what you collect and why, and to use it only that way. We are not lawyers, so take legal advice for your case.',
        ],
      },
      {
        heading: 'Advantage+ campaigns and a simpler structure',
        paragraphs: [
          'Meta now automates much of what media buyers once did by hand. Advantage+ settings choose audiences, placements and creative combinations from live results. Automation works better with fewer, larger campaigns, because each ad set needs enough conversions to learn, yet many older accounts have dozens of small ad sets competing with each other.',
          'The job shifts from narrow targeting to giving the system good inputs: a clear objective, clean conversion data, sensible exclusions and plenty of creative variety. Manual controls still matter in some cases, such as testing a new product, limiting spend on existing customers, or ads in Meta’s special ad categories for housing, employment, credit and political topics, where targeting options are restricted.',
        ],
      },
      {
        heading: 'Instagram placements, Messenger and WhatsApp',
        paragraphs: [
          'Instagram Reels and Stories are full-screen, vertical and fast. Ads that look like native content, with a hook in the first seconds, captions for silent viewing and text kept inside the safe zones, usually beat resized feed images. Explore suits discovery ads for visual products such as fashion, beauty, food and home goods. Facebook placements still matter too: Facebook reaches many buyers across age groups and smaller towns, so judge each app on cost per result and on the quality of sales or leads, not on reach.',
          'Click-to-WhatsApp ads open a chat instead of a website, which suits Indian buyers who like to ask questions before paying, and businesses that sell through conversation. They only work if someone replies quickly, with greeting messages, quick replies and clear hours. Messenger ads work the same way for audiences who use Facebook more than WhatsApp. Hindi and regional-language ads and replies should be written or checked by a fluent writer.',
        ],
      },
      {
        heading: 'Choosing a Meta ads agency in India',
        paragraphs: [
          'Ask who will own the business portfolio, pixel and ad account, how the agency sets up the Conversions API, how it splits budget between Facebook, Instagram and WhatsApp, and how often new creative goes live. Plan seasonal peaks such as Navratri, Diwali and the big marketplace sale weeks early, because ad costs rise for everyone then. New creative for each app, UPI-friendly offers and extra cover for WhatsApp replies should all be ready before demand peaks.',
          'With Magnus Path, every Meta asset stays in your name, ad spend is paid directly to Meta from your own account, and the management fee is quoted after a free audit. You can meet us at our Chennai head office or our Bengaluru office by appointment, or work with us remotely from anywhere in India.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce ads report template', href: '/resources/ads-report-template/' },
      { label: 'Free UTM link builder', href: '/tools/utm-builder/' },
      { label: 'Meta catalogue and Advantage+ ads for online stores', href: '/ecommerce-meta-ads-agency/' },
      { label: 'Facebook lead ads and instant forms for local businesses', href: '/facebook-ads-agency/' },
      { label: 'Comparing Facebook ad agencies: questions and red flags', href: '/facebook-advertising-agencies/' },
      { label: 'Performance marketing across Meta and Google ads', href: '/performance-marketing/' },
      { label: 'Social media marketing agency in Chennai', href: '/chennai/social-media-marketing-agency/' },
    ],
    faqs: [
      { q: 'What does a Meta ads agency do?', a: 'It plans, runs and measures advertising across Facebook, Instagram, Messenger and WhatsApp from your Meta ad account. That includes setting up Meta Business Suite and permissions, the pixel and Conversions API, campaign structure and Advantage+ settings, creative for each placement, and weekly reporting checked against your own sales or lead records.' },
      { q: 'How much does it cost to hire a Meta ads agency in India?', a: 'It depends on how many apps and placements you use, how many campaigns and languages you run, how much creative you need, and how much tracking and account clean-up is required. Ad spend is paid directly to Meta from your own account. Our management fee is quoted separately after a free audit, in a written quote.' },
      { q: 'Is the Conversions API really needed?', a: 'For most businesses that track sales or leads, yes. The pixel alone misses events blocked by browsers, phone settings and patchy connections. The Conversions API sends the same events from your server or platform, and with event IDs Meta removes duplicates. Fuller data usually helps the automation find better customers and makes reports more reliable.' },
      { q: 'Should we advertise on Instagram, Facebook or WhatsApp?', a: 'Usually a mix, run from one ad account. Instagram Reels and Stories suit discovery for visual products and younger audiences. Facebook still reaches many buyers across age groups and smaller towns. Click-to-WhatsApp ads suit products or services people want to ask about before paying. We test placements and move budget towards what brings results.' },
      { q: 'What is a business portfolio in Meta Business Suite?', a: 'It is the company-level account (previously Business Manager) that owns your page, Instagram account, WhatsApp number, ad accounts, pixel and catalogue. People and agencies are added with specific roles. Keeping it in your company’s name, with verification and two-factor authentication, means you never lose access when staff or agencies change.' },
      { q: 'Do you handle replies to WhatsApp and Messenger ads?', a: 'We set up greeting messages, quick replies, chat routing and reply templates, and we track how many chats turn into sales. The replies themselves usually work better from your own team, who know the product, stock and delivery times. We help write reply scripts in English, Hindi and regional languages, checked by a fluent writer.' },
      { q: 'Can we meet your team?', a: 'Yes. Our head office and main delivery team are in Chennai, and we also have a Bengaluru office. You can meet the team at either office by appointment. Brands elsewhere in India work with us remotely through video calls, shared reports and a monthly review.' },
    ],
  },

  // ───────────────────────── Type F: Facebook, leads and local ─────────────────────────
  {
    slug: 'facebook-ads-agency',
    kind: 'service',
    title: 'Facebook Ads Agency in India | Lead Ads | Magnus Path',
    description: 'Facebook ads agency in India for lead generation: instant forms, local audiences, Marketplace and Reels placements, and leads judged on real customers.',
    primaryKeyword: 'Facebook ads agency in India',
    navLabel: 'Facebook Ads',
    breadcrumb: [{ label: 'Ads', href: '/performance-marketing/' }],
    eyebrow: 'Lead ads · Local audiences · Lead quality',
    h1: 'Facebook Ads Agency in India for *Quality Leads*',
    intro: 'Magnus Path is a Facebook ads agency in India for businesses that need enquiries, not likes: clinics, coaching institutes, showrooms, service firms and B2B suppliers. We run lead ads with instant forms, feed, Marketplace and Reels placements, and local audiences, judge every campaign on which leads became customers, and keep your page and ad comments clean.',
    icon: 'social',
    facts: ['Free audit first', 'Page and leads in your name', 'Judged on real customers'],
    headings: {
      pains: 'Plenty of leads on paper. Very few real conversations.',
      includes: 'What our Facebook advertising management covers',
      process: 'How we run your Facebook lead campaigns in *4 steps*',
      guide: 'Facebook ads for leads and local businesses: a practical guide',
    },
    pains: [
      { title: 'Cheap leads that never answer', body: 'Short instant forms with pre-filled details bring plenty of names and numbers, but many are casual scrollers, wrong numbers or people who forgot they filled in a form.' },
      { title: 'Campaigns judged on form fills, not customers', body: 'Meta only sees the submitted form. Without knowing which leads became visits, quotes or sales, nobody can tell which ads bring customers and which bring people who simply like filling in forms.' },
      { title: 'Unanswered comments under your ads', body: 'Questions, complaints and spam pile up under ads with no reply. That puts off the next person who scrolls past and wastes the spend that bought their attention.' },
    ],
    includes: [
      { title: 'Lead ads and instant forms', body: 'Forms built for quality: the right questions, a higher-intent review step where it helps, conditional answers and a thank-you screen that says what happens next.' },
      { title: 'Placements across Facebook', body: 'Feed, Marketplace, Reels, Stories and search placements tested on cost per qualified lead, with creative sized and written for each one.' },
      { title: 'Local and service-area audiences', body: 'Radius and pin-code targeting around your branches or service area, with interest layers kept light so Facebook can still find enough people.' },
      { title: 'Lead quality and offline conversions', body: 'A simple sheet of reached, qualified and closed leads, uploaded to Events Manager so each campaign is judged on real customers. No CRM needed to start.' },
      { title: 'Fast lead follow-up', body: 'Instant lead alerts to your sales team by email or WhatsApp, a short call script and a follow-up routine, because leads go cold within hours.' },
      { title: 'Page and comment moderation', body: 'Hidden-word lists for spam and abuse, replies to genuine questions under your ads, and a clear route for passing complaints to your team.' },
      { title: 'Special ad category checks', body: 'Ads for housing, jobs, loans or credit set up within Meta’s special ad category rules, which limit some targeting options.' },
    ],
    process: [
      { title: 'Free account and lead audit', body: 'We review your page, ad account, forms and the last few months of leads, including how many were reached, qualified and closed.' },
      { title: 'Lead goals and a written quote', body: 'We agree what a qualified lead means for you and a target cost per qualified lead, then send a written quote. Ad spend stays separate.' },
      { title: 'Forms, audiences and follow-up', body: 'New instant forms, local audiences and creatives go live, with lead alerts and a follow-up routine agreed with your team.' },
      { title: 'Feed back and improve', body: 'Each week your team marks lead outcomes; we upload them, compare campaigns on real customers, cut weak ads and forms, and move budget to what brings real customers.' },
    ],
    platforms: ['Meta Ads Manager', 'Instant Forms', 'Leads Center', 'Events Manager', 'Meta Business Suite', 'WhatsApp Business', 'Google Sheets'],
    figures: [
      { type: 'matrix', caption: 'How you sell and where your buyers live decide which Facebook ad set-up fits your business.', after: 0, cols: ['Sale needs a call', 'Sale happens online'], rows: ['Buyers in your local area', 'Buyers across India'], cells: [
        { title: 'Local lead ads', body: 'Instant forms or call ads, radius targeting near branches' },
        { title: 'Local visit ads', body: 'Feed and Marketplace ads to a booking or order page' },
        { title: 'Screening forms', body: 'Higher-intent forms with qualifying questions' },
        { title: 'Website sales', body: 'Send traffic to your site and track purchases' },
      ] },
      { type: 'steps', caption: 'How lead outcomes are recorded each week with a shared sheet, so campaigns are judged on real customers.', after: 3, steps: [
        { title: 'Export new leads', body: 'Download from Leads Center or the form' },
        { title: 'Mark the outcome', body: 'Reached, qualified, visited or sold' },
        { title: 'Upload the file', body: 'As offline events in Events Manager' },
        { title: 'Judge on sales', body: 'Cut campaigns whose leads never convert' },
      ] },
      { type: 'venn', caption: 'A Facebook lead only becomes a customer when the ad and the follow-up both do their job.', after: 4, left: { title: 'The ad and the form', body: 'Reach the right people and ask the right questions' }, right: { title: 'Your follow-up', body: 'Call back quickly, answer comments, book the visit' }, overlap: 'Leads that become customers' },
    ],
    guide: [
      {
        heading: 'What a Facebook ads agency in India does for lead generation',
        paragraphs: [
          'Many businesses do not sell through a checkout. A clinic needs appointments, a coaching institute needs enquiries, a showroom needs walk-ins and a manufacturer needs quote requests. For them, Facebook advertising is about finding people nearby or in the right trade, getting a contact, and turning that contact into a conversation.',
          'A Facebook ads agency in India working on leads should look beyond cost per lead. The useful number is cost per qualified lead, or cost per customer, and that needs feedback from your sales team. This page focuses on Facebook itself: lead ads, placements, local audiences and lead quality. Online stores selling through a website have different needs, covered on our store-focused page.',
        ],
      },
      {
        heading: 'Lead ads and instant forms that filter, not just collect',
        paragraphs: [
          'Instant forms open inside Facebook with the person’s name, phone number and email already filled in, so they take seconds to submit. That speed is the benefit and the problem: some people tap through without reading. The form settings decide the balance between volume and quality.',
          'For some businesses, a landing page with a short form works better than an instant form, because the extra step filters out casual clicks. Test both against cost per qualified lead, not cost per lead.',
        ],
        bullets: [
          'Choose the higher-intent form type, which adds a review screen before submitting',
          'Ask one or two qualifying questions, such as location, timeline or budget range',
          'Use conditional answers so later options match earlier replies',
          'Say clearly what happens next and when you will call',
          'Offer a call or WhatsApp button for people who would rather talk',
        ],
      },
      {
        heading: 'Placements and audiences for local and service businesses',
        paragraphs: [
          'Facebook offers several placements: the main feed, Marketplace, Reels, Stories, search results and video feeds. Feed and Marketplace often bring practical local enquiries because people browse them with buying in mind. Reels suit short demonstrations, before-and-after stories and walk-throughs. Let results decide, but make creative for each placement rather than one image stretched everywhere.',
          'For local businesses, start with a radius or a list of pin codes around your branches or service area, and keep the rest broad. Piling interest layers onto a small local audience usually raises costs. Language matters too: an ad in Tamil, Kannada, Hindi or Marathi can feel far more local, as long as the copy is written or checked by a fluent writer. Ads for housing, jobs, loans and credit fall under Meta’s special ad categories, which restrict some targeting, so plan those campaigns within the rules.',
        ],
      },
      {
        heading: 'Lead quality and offline conversions without a CRM',
        paragraphs: [
          'Meta optimises for the signal it receives. If the only signal is a submitted form, it finds more people who submit forms, and its reports show cost per lead, not cost per customer. To know which campaigns actually bring business, you need to record what happened to each lead.',
          'You do not need a CRM for this. A shared spreadsheet where your team marks each lead’s outcome is enough. Every week the outcomes are uploaded to Events Manager as offline events, matched on the phone number or email from the form, so you can compare campaigns, ads and forms on qualified leads and real customers, then move budget accordingly. A manual upload does not by itself make Meta optimise for quality. Optimising towards converted leads needs a supported connection, such as the Conversions API or an integration from your lead system, which becomes worth setting up once lead volume justifies it. In plain terms, India’s Digital Personal Data Protection Act expects people to know how their details will be used, so say it on the form. We are not lawyers; take legal advice for your case.',
        ],
      },
      {
        heading: 'Follow-up speed, comments and page moderation',
        paragraphs: [
          'Even a strong ad cannot fix slow follow-up. Leads go cold within hours, so set up instant alerts to the people who call back, a short call script, and a rule for how many attempts to make. A WhatsApp message straight after the form, saying who will call and when, makes it more likely the call is answered.',
          'Comments under ads are public. Unanswered questions, complaints and spam make the next viewer less likely to enquire. Use hidden-word lists for abuse and spam, reply to genuine questions within the working day, move complaints to private messages, and keep your page details, reviews and hours up to date, because many people check the page before they take your call.',
        ],
      },
      {
        heading: 'Choosing a Facebook ads agency in India',
        paragraphs: [
          'Ask how the agency defines a qualified lead, whether it judges campaigns on lead outcomes, who answers comments, and who owns the page, ad account and lead forms. Plan busy periods such as admissions season, Navratri, Diwali or the financial year-end ahead of time, because ad costs rise and attention drops in crowded weeks.',
          'With Magnus Path, the page, ad account and every lead stay in your name, ad spend is paid directly to Meta from your own account, and the management fee is quoted after a free audit. You can meet the team at our Chennai head office or our Bengaluru office by appointment, or work with us remotely from anywhere in India.',
        ],
      },
    ],
    related: [
      { label: 'Meta advertising across Instagram, Messenger and WhatsApp', href: '/meta-ads-agency/' },
      { label: 'Meta catalogue ads for ecommerce stores', href: '/ecommerce-meta-ads-agency/' },
      { label: 'How to compare Facebook ad agencies before you sign', href: '/facebook-advertising-agencies/' },
      { label: 'Social media marketing agency in Chennai', href: '/chennai/social-media-marketing-agency/' },
      { label: 'Performance marketing across Meta and Google ads', href: '/performance-marketing/' },
    ],
    faqs: [
      { q: 'What does a Facebook ads agency do for lead generation?', a: 'It plans and runs Facebook campaigns that bring enquiries: lead ads with instant forms, call and WhatsApp ads, local audiences around your branches, and creative for feed, Marketplace and Reels. A good one also tracks which leads become customers, judges campaigns on that, and helps your team follow up quickly.' },
      { q: 'How much does Facebook ads management cost in India?', a: 'It depends on how many locations, campaigns and forms you run, how much creative you need, whether comment moderation is included, and how much tracking set-up is required. Ad spend is paid directly to Meta from your own account. Our management fee is quoted separately after a free audit, in a written quote listing scope and exclusions.' },
      { q: 'Why are our Facebook leads poor quality?', a: 'Usually because the form is too easy and Meta is optimising for form submissions alone. Pre-filled instant forms invite casual taps. Adding a review step, one or two qualifying questions and clear next steps, then judging campaigns on which leads became customers, normally improves quality, even if the number of leads drops.' },
      { q: 'Do we need a CRM to upload offline conversions?', a: 'No. A shared spreadsheet where your team marks each lead as reached, qualified, visited or sold is enough. Each week the outcomes are uploaded to Events Manager, so campaigns are judged on real customers. To have Meta optimise towards converted leads, you later need a supported connection such as the Conversions API or an integration.' },
      { q: 'Are Facebook ads still worth it for local businesses?', a: 'For many, yes. Facebook still reaches a wide range of ages and towns across India, and radius or pin-code targeting puts ads in front of people near your branches. Feed and Marketplace placements often bring practical enquiries. Results depend on the offer, the form and how fast your team calls back.' },
      { q: 'Do you moderate comments on our ads?', a: 'Yes, when it is part of the agreed scope. We set up hidden-word filters for spam and abuse, reply to genuine questions under your ads in an agreed tone, and pass complaints to your team through a clear route. Replies in Hindi or regional languages are written or checked by a fluent writer.' },
      { q: 'Can we meet the team in person?', a: 'Yes. Our head office is in Chennai and we also have an office in Bengaluru, where you can meet the team by appointment. Businesses in other cities work with us remotely through video calls, a shared lead sheet and a monthly review of lead quality.' },
    ],
  },

  // ───────────────────────── Type A: comparing agencies ─────────────────────────
  {
    slug: 'facebook-advertising-agencies',
    kind: 'service',
    title: 'Facebook Advertising Agencies in India Compared | Magnus Path',
    description: 'Comparing Facebook advertising agencies in India? Agency types, questions to ask, red flags, what a real audit covers and how account ownership should work.',
    primaryKeyword: 'Facebook advertising agencies in India',
    navLabel: 'Facebook Advertising Agencies',
    breadcrumb: [{ label: 'Ads', href: '/performance-marketing/' }],
    eyebrow: 'Compare · Ask · Audit · Own your accounts',
    h1: 'Facebook Advertising Agencies in India: *How to Choose* One',
    intro: 'Comparing Facebook advertising agencies in India is hard when every proposal promises growth. This guide explains the types of agency, how to compare them fairly, the questions to ask, the red flags to watch for and what a proper audit looks like. Then it shows how Magnus Path works, so you can decide with clear eyes.',
    icon: 'social',
    facts: ['Free audit first', 'Your accounts stay yours', 'Written quote before work'],
    headings: {
      pains: 'Every proposal looks the same until something goes wrong.',
      includes: 'What you get when you work with Magnus Path',
      process: 'How we start with a new client in *4 steps*',
      guide: 'Choosing who runs your Facebook ads: a buyer’s guide',
    },
    pains: [
      { title: 'Proposals that cannot be compared', body: 'One quotes a monthly fee, another a share of ad spend, a third a bundle of posts. Scope, creative, reporting and ownership are left vague, so the cheapest-looking option often is not.' },
      { title: 'Accounts held by the agency', body: 'Some agencies run ads from their own ad account or keep your page and pixel under their business portfolio. When you leave, the history, audiences and data stay with them.' },
      { title: 'Reports that measure the wrong thing', body: 'Reach, likes and cost per click look good on a slide but say little about sales or qualified leads. Without a shared definition of success, nobody can tell whether it is working.' },
    ],
    includes: [
      { title: 'A written audit before any proposal', body: 'A review of your accounts, tracking, creative and results, with findings you can use even if you hire someone else.' },
      { title: 'Accounts in your name from day one', body: 'Business portfolio, ad account, page, pixel and catalogue owned by your company; we work through a role you can remove at any time.' },
      { title: 'A plain contract', body: 'Scope, deliverables, reporting, notice period and exit steps in writing, with ad spend paid directly to Meta and our fee quoted separately.' },
      { title: 'One agreed success measure', body: 'Cost per qualified lead, cost per kept order or ROAS after returns, agreed at the start and reported every week.' },
      { title: 'Named people on your account', body: 'You know who plans, who builds and who reports, and you can speak to them directly. The work is done by our own team in India.' },
      { title: 'A creative and testing plan', body: 'A monthly plan for new ads and tests, with Hindi and regional-language versions written or checked by a fluent writer.' },
      { title: 'An honest exit', body: 'If you leave, you keep everything: campaigns, audiences, reports and creative files, with a short handover note.' },
    ],
    process: [
      { title: 'Short discovery call', body: 'We learn what you sell, your margins or lead values, and what has and has not worked on Facebook and Instagram so far.' },
      { title: 'Free written audit', body: 'We review your accounts with limited access and send findings, priorities and quick fixes in writing, whether or not you hire us.' },
      { title: 'Proposal and contract', body: 'A written quote with scope, timeline, exclusions, reporting and exit terms. Ad spend stays in your own account, paid to Meta.' },
      { title: 'First three months', body: 'Tracking fixes first, then campaign changes in stages, with a weekly report and a review at the end of each month.' },
    ],
    platforms: ['Meta Ads Manager', 'Meta Business Suite', 'Events Manager', 'Instagram', 'WhatsApp Business'],
    figures: [
      { type: 'mindmap', caption: 'The four things to check when choosing who runs your Facebook and Instagram advertising.', after: 0, center: 'Choosing an ad agency', branches: [
        { label: 'Type', items: ['Freelancer', 'Specialist agency', 'Full-service or in-house'] },
        { label: 'Questions', items: ['Who owns the accounts?', 'How is success measured?', 'Who does the work?'] },
        { label: 'Red flags', items: ['Promised results', 'Ads run from their account', 'Vague scope'] },
        { label: 'Proof', items: ['A written audit', 'A sample weekly report'] },
      ] },
      { type: 'matrix', caption: 'Budget size and the number of channels you need point to the kind of help that usually fits.', after: 1, cols: ['Meta ads only', 'Several channels'], rows: ['Smaller ad budget', 'Larger ad budget'], cells: [
        { title: 'Freelancer', body: 'One skilled person; check cover for leave and backups' },
        { title: 'Full-service firm', body: 'Meta, Google and SEO under one plan and one report' },
        { title: 'Specialist agency', body: 'A team focused on Meta, with creative and testing depth' },
        { title: 'In-house plus help', body: 'Your own marketer, with outside help for set-up and audits' },
      ] },
      { type: 'steps', caption: 'What a proper Facebook ads audit checks, in the order that matters.', after: 3, steps: [
        { title: 'Ownership', body: 'Who owns portfolio, page, pixel, account' },
        { title: 'Tracking', body: 'Pixel and Conversions API, deduplicated' },
        { title: 'Structure', body: 'Overlapping campaigns, budgets, learning' },
        { title: 'Creative', body: 'Age, fatigue, formats and languages' },
        { title: 'Results', body: 'Against real sales or qualified leads' },
      ] },
    ],
    guide: [
      {
        heading: 'Types of Facebook advertising agencies in India',
        paragraphs: [
          'When businesses look for Facebook advertising agencies in India, they usually find four kinds of help, and each suits a different situation. None is right for everyone. What matters is matching the type to your budget, your channels and how much you want to manage yourself.',
          'Ecommerce brands, lead-generation businesses and B2B firms also need different skills. A team that runs catalogue ads for online stores may not know how to qualify leads for a clinic or a builder, and the other way round. Ask for relevant experience, not general claims.',
        ],
        bullets: [
          'Freelancers: one skilled person, flexible and often affordable, but with limited cover for leave and limited creative capacity',
          'Specialist agencies: a team focused on Meta advertising, usually with stronger testing and creative routines',
          'Full-service agencies: Meta alongside Google, SEO, websites and content, useful when you want one plan and one report',
          'In-house: your own marketer or team, with full control, often supported by an outside team for set-up, audits or creative',
        ],
      },
      {
        heading: 'How to compare proposals fairly',
        paragraphs: [
          'Proposals from Facebook advertising agencies in India are hard to compare because they describe different things. Put them side by side on the same points: what is included, who does the work, how success is measured, how often you get a report, and what happens when you leave.',
          'Look closely at how each one charges. Some charge a fixed monthly fee, some a share of ad spend, some a mix. A share of spend can reward spending more rather than spending well, so ask how they decide when to cut a budget. Make sure creative, landing pages and tracking set-up are either included or quoted separately in writing, so there are no surprises later.',
        ],
      },
      {
        heading: 'Questions to ask and red flags to watch for',
        paragraphs: [
          'Good questions reveal how an agency actually works. Ask them on the first call and listen for specific answers about your business, not slogans.',
          'Red flags include promised results or fixed ROAS figures before anyone has seen your account, ads run from the agency’s own ad account, reports built only on reach and likes, long lock-in periods without clear exit terms, and vague claims of special access or status with Meta. Meta does not give agencies hidden levers; results come from data, creative and steady testing.',
        ],
        bullets: [
          'Who will own the business portfolio, ad account, page and pixel?',
          'How will you measure success for a business like ours?',
          'How do you treat COD refusals, returns or junk leads in reports?',
          'Who will work on our account each week, and can we speak to them?',
          'How often do new creatives go live, and who makes them?',
          'What happens to our data and campaigns if we leave?',
        ],
      },
      {
        heading: 'What a proper audit looks like',
        paragraphs: [
          'A real audit is written, specific to your account and useful even if you never hire the agency. It should start with ownership, because nothing else matters if you can lose access. Then tracking: whether the pixel and Conversions API both fire, deduplicate and match your real sales or leads.',
          'After that come structure, creative and results. Are campaigns competing with each other for the same people? Are ads months old and fatigued? Is there Hindi or regional-language creative where your buyers need it? Are results judged against real orders or qualified leads? A single screenshot of headline numbers is not an audit.',
        ],
      },
      {
        heading: 'Contracts, account ownership and data',
        paragraphs: [
          'Your company should own every Meta asset: the business portfolio, ad account, page, Instagram account, pixel, catalogue and lead forms. The agency should work through a role you grant and can remove. Ad spend should be billed by Meta to your own payment method, so you can see exactly what was spent.',
          'The contract should list scope, deliverables, reporting, notice period and exit steps, including a handover of creative files and reports. Ask how customer data such as lead details or customer lists will be handled. In plain terms, India’s Digital Personal Data Protection Act expects businesses to collect personal data for a clear purpose, with consent where it is needed, and to keep it safe. We are not lawyers, so take legal advice on your contract and data terms.',
        ],
      },
      {
        heading: 'How Magnus Path works',
        paragraphs: [
          'We are an e-commerce growth team headquartered in Chennai, with a second office in Bengaluru. We run Facebook and Instagram advertising for online stores, D2C brands and businesses that need leads, alongside Google ads, store builds and SEO when a client needs them. We plan festive peaks such as Navratri and Diwali well ahead, and we report on kept orders or qualified leads, not reach.',
          'Every engagement starts with a free written audit. Your accounts stay in your name, ad spend is paid directly to Meta from your own account, and the management fee is quoted after the audit in a written quote listing scope, timeline and exclusions. You can meet us at our Chennai head office or our Bengaluru office by appointment, or work with us remotely from anywhere in India.',
        ],
      },
    ],
    related: [
      { label: 'Meta advertising for ecommerce stores and catalogues', href: '/ecommerce-meta-ads-agency/' },
      { label: 'Meta advertising across Facebook, Instagram and WhatsApp', href: '/meta-ads-agency/' },
      { label: 'Facebook lead ads and instant forms for local businesses', href: '/facebook-ads-agency/' },
      { label: 'Performance marketing for Meta and Google ads', href: '/performance-marketing/' },
      { label: 'Ecommerce PPC agency for Google Shopping', href: '/ecommerce-ppc-agency/' },
    ],
    faqs: [
      { q: 'What types of Facebook advertising agencies are there?', a: 'Broadly four: freelancers, specialist agencies that focus on Meta ads, full-service agencies that also handle Google, SEO and websites, and in-house teams supported by outside help. Each suits a different budget and level of involvement. The right choice depends on your channels, how much creative you need and how closely you want to manage the work.' },
      { q: 'How much do Facebook advertising agencies charge in India?', a: 'Fees vary with scope: the number of campaigns and channels, creative volume, languages, tracking work and reporting depth. Some charge a fixed monthly fee, others a share of ad spend. Ad spend itself should be paid directly to Meta from your own account. We quote our management fee after a free audit, in a written quote with scope and exclusions.' },
      { q: 'What should I ask before hiring someone to run Facebook ads?', a: 'Ask who will own the business portfolio, ad account, page and pixel; how success is measured for your business; who works on the account each week; how often new creatives go live; how COD refusals, returns or junk leads are treated in reports; and what you keep if you leave.' },
      { q: 'What are the red flags when choosing an agency?', a: 'Promised results before anyone has seen your account, ads run from the agency’s own ad account, reports built on reach and likes alone, long lock-ins without exit terms, and claims of special access to Meta. Be careful too if nobody can explain how tracking is set up or who will actually do the work.' },
      { q: 'Should our ad account be in our name or the agency’s?', a: 'Always in your company’s name. The business portfolio, ad account, page, pixel and catalogue should belong to you, with the agency added through a role you can remove. That way campaign history, audiences and data stay with your business if you change agencies, and Meta bills ad spend to your own payment method.' },
      { q: 'Is a freelancer or an agency right for our Facebook ads?', a: 'It depends on your needs. A skilled freelancer can work well for a single channel and a modest budget, but cover for leave and creative capacity are limited. An agency brings a team, routines and backups. If you also need Google ads, SEO or a store build, a team that covers those can make planning simpler.' },
      { q: 'Can we meet Magnus Path before deciding?', a: 'Yes. Our head office is in Chennai and we have an office in Bengaluru, and you can meet the team at either by appointment. For businesses elsewhere in India we hold the discovery call and audit review over video, so you can judge how we work before signing anything.' },
    ],
  },
];
