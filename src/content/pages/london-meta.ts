import type { ServicePageData } from '../../data/types';

const londonBreadcrumb = [
  { label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' },
  { label: 'London', href: '/london/ecommerce-agency/' },
];

const linkEcom = { label: 'Catalogue and Advantage+ ads for London online shops', href: '/london/ecommerce-meta-ads-agency/' };
const linkMeta = { label: 'Instagram, Messenger and WhatsApp advertising for London businesses', href: '/london/meta-ads-agency/' };
const linkFacebook = { label: 'Facebook lead ads for London service and local businesses', href: '/london/facebook-ads-agency/' };
const linkCompare = { label: 'How to compare Facebook advertising firms in London: questions and red flags', href: '/london/facebook-advertising-agencies/' };

export const londonMetaPages: ServicePageData[] = [
  // ---------------------------------------------------------------- Type E: online stores only
  {
    slug: 'london/ecommerce-meta-ads-agency',
    kind: 'location',
    market: 'UK',
    title: 'Ecommerce Meta Ads Agency in London: Catalogue Ads',
    description: "Ecommerce Meta ads agency in London: catalogue ads, Advantage+ sales campaigns, feed fixes and UGC creative tests for online shops, judged on profit after returns.",
    primaryKeyword: 'ecommerce Meta ads agency in London',
    navLabel: 'Ecommerce Meta Ads London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Meta ads for London online shops · Catalogue · Advantage+ · UGC',
    h1: 'Ecommerce Meta Ads Agency in London for *Online Shops*',
    intro: "Billion Ecommerce Agency is an ecommerce Meta ads agency in London that works with online shops only. We run catalogue and Advantage+ campaigns on Facebook and Instagram, keep your product feed healthy, test UGC creative every week and judge results on profit after returns rather than the ROAS Meta reports. Meet us at our London office by appointment and get a GBP quote after a free audit.",
    icon: 'social',
    facts: ['Online shops only', 'Catalogue and feed health checked first', 'Ad account and pixel in your name'],
    headings: {
      pains: 'Why London shops lose money on *catalogue ads*',
      includes: 'What we run for your online shop on Meta',
      process: 'From catalogue audit to scaling in *4 steps*',
      guide: 'Meta ads for London online shops: catalogue, creative and real ROAS',
    },
    pains: [
      { title: 'Catalogue ads showing the wrong products', body: 'Sold-out sizes, badly cropped images and sale prices that no longer match the site keep appearing in your ads, while the lines that actually make money barely get shown.' },
      { title: 'A ROAS figure that ignores returns', body: 'Meta counts the order the moment it is placed. It never hears about the dress sent back or the refund issued, so the dashboard looks healthy while the bank account does not.' },
      { title: 'Creative that tires within weeks', body: 'One polished photo shoot runs until frequency climbs and costs rise. There is no steady supply of new hooks, videos or customer clips to replace it.' },
    ],
    includes: [
      { title: 'Catalogue and feed health', body: 'Commerce Manager set-up, product titles, VAT-inclusive prices, image checks, variant grouping and pixel events that match the catalogue, so Meta knows which product each person viewed.' },
      { title: 'Advantage+ sales campaigns', body: 'Campaigns built on your catalogue with customer lists uploaded, so new and returning buyers are reported separately and spend is not wasted on people who would buy anyway.' },
      { title: 'Dynamic product ads', body: 'Advantage+ catalogue ads for browsers and basket abandoners, with retargeting windows set by how long your customers take to decide and recent buyers excluded.' },
      { title: 'UGC and short video testing', body: 'Briefs for customer and creator clips, hook variations and vertical edits for Reels and Stories, tested one idea at a time with clear rules for when to retire an ad.' },
      { title: 'Product sets and Shops', body: 'Product sets by margin, season and stock depth, plus product tagging on Instagram and a Shop where your account is eligible, so ads and organic posts show the same range.' },
      { title: 'Profit-based reporting', body: 'A monthly GBP report that takes VAT, discounts and returns out of revenue, compares it with ad spend and shows which products and creatives earned their budget.' },
      { title: 'Peak season plans', body: 'Black Friday, Christmas, Boxing Day and January sales planned in October: creative ready early, sale prices synced to the catalogue and last order dates stated in the ads.' },
    ],
    platforms: ['Meta Ads Manager', 'Commerce Manager', 'Events Manager', 'Conversions API', 'Advantage+ sales campaigns', 'Instagram', 'Facebook', 'Shopify', 'WooCommerce', 'Google Analytics 4'],
    process: [
      { title: 'Free catalogue and account audit', body: 'We review your ad account, catalogue, pixel and Conversions API set-up, then talk through the findings on a call or at our London office.' },
      { title: 'Plan and GBP quote', body: 'A written plan covering feed fixes, campaign structure, creative testing and targets based on your margins, with the management fee quoted in GBP.' },
      { title: 'Fix the feed, then launch', body: 'Catalogue and tracking problems are fixed before budget rises. Campaigns that already sell keep running while the new structure learns.' },
      { title: 'Weekly creative and catalogue work', body: 'New ads tested every week, product sets updated for stock and season; requests sent before UK lunchtime are usually handled the same day.' },
    ],
    local: {
      city: 'London',
      areas: ['Stratford', 'Walthamstow', 'Woodford', 'Canary Wharf', 'Shoreditch', 'Hackney Wick', 'Islington', 'Clerkenwell', 'Brixton', 'Peckham'],
      note: 'Our London office is in E18, close to Woodford and Walthamstow. Online shop owners can meet the team there by appointment to review the catalogue and creative; most daily campaign work is done by our Chennai team, so changes keep moving after UK hours.',
    },
    figures: [
      { type: 'mindmap', caption: 'The four parts of a Meta account that decide whether an online shop makes a profit from its ads.', after: 0, center: 'Meta ads for a shop', branches: [
        { label: 'Catalogue', items: ['Clean titles and images', 'VAT-inclusive prices', 'Product sets by margin'] },
        { label: 'Campaigns', items: ['Advantage+ sales', 'Catalogue retargeting'] },
        { label: 'Creative', items: ['UGC and demo videos', 'New hooks every week'] },
        { label: 'Measurement', items: ['Pixel plus Conversions API', 'ROAS after returns'] },
      ] },
      { type: 'steps', caption: 'A quick catalogue health check to run before raising any Meta budget.', after: 1, steps: [
        { title: 'Check the sync', body: 'Feed updates at least daily from the shop' },
        { title: 'Match the IDs', body: 'Pixel content IDs equal catalogue IDs' },
        { title: 'Fix the images', body: 'Crops work in square and vertical slots' },
        { title: 'Check prices', body: 'Sale and VAT-inclusive prices match site' },
        { title: 'Build sets', body: 'Group products by margin and stock' },
      ] },
      { type: 'matrix', caption: 'Where to put Meta budget, by product margin and how often the product comes back.', after: 4, cols: ['Few returns', 'Many returns'], rows: ['High margin', 'Low margin'], cells: [
        { title: 'Scale first', body: 'Lead products in Advantage+ and prospecting' },
        { title: 'Fix fit first', body: 'Better size guides and video before more spend' },
        { title: 'Bundle or upsell', body: 'Use in retargeting and sets with higher-value items' },
        { title: 'Keep out of ads', body: 'Exclude from product sets unless clearing stock' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce Meta ads agency in London actually manages',
        paragraphs: [
          'An ecommerce Meta ads agency in London works on one problem: turning attention on Facebook and Instagram into profitable orders for an online shop. That makes the product catalogue the centre of the account. Catalogue ads, Advantage+ sales campaigns and retargeting all read the same product data, so a weak feed weakens everything built on top of it.',
          'London shoppers are used to quick delivery, easy returns and plenty of shops selling something similar. Ads that win here show the right product at the right VAT-inclusive price, with delivery and returns stated plainly. The work is less about clever targeting and more about feed quality, a steady flow of creative and honest measurement.',
          'That is why this service is for online shops only. If you run a clinic, salon or trades business and want enquiries rather than orders, our Facebook lead ads service for London is the better fit.',
        ],
      },
      {
        heading: 'Catalogue and product feed health',
        paragraphs: [
          'Meta builds catalogue ads from the product feed in Commerce Manager. Most Shopify and WooCommerce stores connect it through a sales channel or plugin, and the sync looks fine until you check the detail. Common faults include sold-out products still being advertised, images cropped badly in vertical placements, sale prices that no longer match the site and variants grouped the wrong way.',
          'Feed health also depends on the pixel. Every product view, add to basket and purchase should send the same content ID the catalogue uses, otherwise Meta cannot link a shopper to a product and dynamic ads fall back to generic items. Commerce Manager shows how well events match catalogue items, and we check it before any budget goes up.',
          'Product sets turn a flat catalogue into something you can steer: highest-margin lines, new arrivals, items with deep stock and items to clear before the season ends. Custom labels in the feed, such as margin band or season, keep those sets up to date without manual work.',
        ],
        bullets: [
          'Titles that say what the product is, with colour, size and material',
          'Prices that include VAT and match the product page exactly',
          'Plain-background and lifestyle images, checked in every placement',
          'Sold-out products removed automatically when stock reaches zero',
        ],
      },
      {
        heading: 'Advantage+ sales campaigns and dynamic product ads',
        paragraphs: [
          'Advantage+ sales campaigns, previously called Advantage+ shopping campaigns, let Meta choose audiences, placements and often products from your catalogue. They suit shops with a healthy feed and a steady flow of orders, because the system has enough purchases to learn from. They can also hide what is really happening, so we watch how much of the budget reaches people who already know you.',
          'Uploading a customer list tells Meta who your existing buyers are. That lets you report new and returning customers separately and keep spend focused on people who would not have bought anyway. For a growing London brand, new customers are what the ads are paid to find.',
          'Dynamic product ads, now called Advantage+ catalogue ads, show people the products they viewed or similar items. Set retargeting windows by how long your customers take to decide: short for low-price accessories, longer for furniture or occasion wear. Exclude recent buyers, or show them products that go with what they bought.',
        ],
      },
      {
        heading: 'Creative testing with UGC and short video',
        paragraphs: [
          'Creative is now the main lever in a Meta account, because targeting is increasingly automated. For most online shops that means a steady supply of short vertical videos: customers unboxing, staff showing fit or texture, quick before-and-after clips and plain product demos. User-generated content often feels more trustworthy than a polished shoot, and it is easier to produce in volume.',
          'Test one idea at a time. Change the hook, the opening seconds or the offer, keep everything else the same and give each test enough spend to reach a fair verdict. Retire ads when frequency rises and click-through falls, not on a fixed calendar.',
          'If you work with creators, agree usage rights in writing and use partnership ads so the post runs from their handle with your brand attached. Product claims must follow the ASA and CAP code, which is strict on health, beauty and environmental claims.',
        ],
      },
      {
        heading: 'Measuring ROAS after returns, discounts and VAT',
        paragraphs: [
          'Meta reports a purchase when the order is placed. It does not see returns, refunds, exchanges or discount codes applied after the fact. Cash on delivery is rare in the UK, but returns are not, especially in fashion and footwear.',
          'So reported ROAS needs adjusting before you trust it. Take revenue without VAT, subtract returns and discounts, then compare what is left with ad spend. Work out your break-even ROAS from product margin and delivery costs, and judge campaigns against that figure rather than the dashboard. Our free ROAS calculator does the arithmetic.',
          'Send purchase events through both the pixel and the Conversions API, with matching event IDs so Meta removes duplicates. That recovers orders lost to browser limits and gives Advantage+ campaigns cleaner data to learn from.',
        ],
      },
      {
        heading: 'Peak season, privacy and working with our London team',
        paragraphs: [
          'The London trading year peaks from Black Friday to the January sales. Plan in October: new creative ready, sale prices tested in the catalogue, Christmas last order dates written into ads and product sets prepared for Boxing Day and January clearance.',
          'Under UK GDPR and PECR, in plain terms, the Meta pixel is non-essential tracking, so it should only fire after a visitor agrees in your cookie banner, and customer lists need a lawful basis. We set this up carefully, but we are not lawyers, so ask your adviser to check your banner and privacy policy.',
          'As an ecommerce Meta ads agency in London, we keep the ad account, business portfolio, pixel and catalogue in your company\'s name. Ad spend is paid directly to Meta from your own account, and our management fee is quoted in GBP after a free audit. Meet us at our London office in E18 by appointment; most daily work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.',
        ],
      },
    ],
    related: [
      linkMeta,
      linkFacebook,
      linkCompare,
      { label: 'Shopify agency in London for store builds and fixes', href: '/london/shopify-agency/' },
      { label: 'Free ROAS calculator: find your break-even ROAS', href: '/tools/roas-calculator/' },
      { label: 'E-commerce growth agency in London', href: '/london/ecommerce-agency/' },
    ],
    faqs: [
      { q: 'What does an ecommerce Meta ads agency in London do?', a: 'It runs Facebook and Instagram advertising for online shops: catalogue set-up and feed health, Advantage+ sales campaigns, dynamic product ads, creative testing and tracking through the pixel and Conversions API. The goal is profitable orders after returns and VAT, not a higher number in Ads Manager.' },
      { q: 'How much does Meta ads management cost for a London online shop?', a: 'We quote a monthly management fee in GBP after a free audit. It depends on catalogue size, the number of campaigns, how much feed and tracking work is needed and how much creative you want produced. Ad spend is separate and paid directly to Meta from your own account.' },
      { q: 'Should my shop use Advantage+ sales campaigns?', a: 'Often yes, once your catalogue is clean and you have a steady flow of purchases for the system to learn from. We upload customer lists so new and returning buyers are reported separately, and we compare results with a manual catalogue campaign before moving most of the budget across.' },
      { q: 'Why does Meta show a higher ROAS than my real profit?', a: 'Meta counts an order when it is placed and never learns about returns, refunds or later discounts. It also includes VAT in revenue. Subtract VAT, returns and discounts, then compare with ad spend and your break-even ROAS based on margin to see the true result.' },
      { q: 'Do you make the UGC videos for our ads?', a: 'We write the briefs, hooks and scripts, edit raw clips into ad versions for Reels, Stories and the feed, and can work with creators you choose. Many shops supply footage from staff or customers; we turn it into tests and agree usage rights with any creator in writing.' },
      { q: 'Can I meet your team in London?', a: 'Yes. Our London office is in E18, East London, and you can meet the team there by appointment to review your catalogue, creative and results. Most day-to-day work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
      { q: 'Who owns the ad account, pixel and catalogue?', a: 'You do. The business portfolio, ad account, pixel and catalogue stay in your company\'s name, and ad spend is billed to your own payment method. We work through access you grant, so if you stop working with us, the data, audiences and campaign history remain yours.' },
    ],
  },

  // ---------------------------------------------------------------- Type M: the whole Meta platform
  {
    slug: 'london/meta-ads-agency',
    kind: 'location',
    market: 'UK',
    title: 'Meta Ads Agency in London: Instagram to WhatsApp',
    description: 'Meta ads agency in London running Instagram, Facebook, Messenger and WhatsApp ads, with Conversions API tracking and a tidy Business Suite set-up. Quoted in GBP.',
    primaryKeyword: 'Meta ads agency in London',
    navLabel: 'Meta Ads Agency London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Meta in London · Instagram · Facebook · Messenger · WhatsApp',
    h1: 'Meta Ads Agency in London for *Instagram, Facebook and WhatsApp*',
    intro: 'Billion Ecommerce Agency is a Meta ads agency in London that runs your advertising across the whole Meta platform: Instagram Reels, Stories and Explore, the Facebook feed, Messenger and WhatsApp click-to-chat. We start with a tidy Meta Business Suite set-up and tracking through the Conversions API, then build campaigns. Meet us at our London office by appointment; quotes are in GBP after a free audit.',
    icon: 'social',
    facts: ['Instagram, Facebook, Messenger and WhatsApp', 'Conversions API set up and tested', 'Business portfolio stays in your name'],
    headings: {
      pains: 'Where Meta accounts in London *go wrong*',
      includes: 'What we manage across the Meta platform',
      process: 'Getting your Meta set-up right in *4 steps*',
      guide: 'Meta advertising in London: platform, placements, messaging and tracking',
    },
    pains: [
      { title: 'Assets scattered across old logins', body: 'The Facebook Page belongs to a former employee, the ad account sits in a freelancer\'s business portfolio and nobody is sure who owns the pixel. Every change becomes a support ticket.' },
      { title: 'Instagram treated as an afterthought', body: 'Square feed images get squeezed into Reels and Stories with no sound, no captions and key text hidden behind buttons. The placements younger Londoners use most get the weakest creative.' },
      { title: 'Conversions that never reach Meta', body: 'With browser limits and cookie choices, a pixel on its own misses orders, bookings and enquiries. Campaigns then learn from a thin, skewed sample and spend drifts.' },
    ],
    includes: [
      { title: 'Business Suite and portfolio clean-up', body: 'Pages, Instagram accounts, ad accounts, pixels and WhatsApp numbers moved into one business portfolio in your company\'s name, with the right roles and two-factor sign-in.' },
      { title: 'Account structure that Meta can learn from', body: 'Fewer, larger campaigns with clear naming, so each one gathers enough results to optimise and the reporting makes sense to anyone who opens it.' },
      { title: 'Instagram placement creative', body: 'Vertical video and stills built for Reels, Stories and Explore, with safe zones, captions and an opening that works with the sound off.' },
      { title: 'Messenger and WhatsApp ads', body: 'Click-to-Messenger and click-to-WhatsApp campaigns with welcome messages, quick replies and a plan for who answers and how fast.' },
      { title: 'Conversions API and Events Manager', body: 'Server-side events alongside the pixel, deduplicated with event IDs, checked for match quality and tied to your cookie consent banner.' },
      { title: 'Advantage+ campaigns', body: 'Advantage+ audience, placements and creative options tested against manual set-ups, so automation is used where it helps and switched off where it does not.' },
      { title: 'Cross-placement reporting', body: 'A monthly GBP report broken down by Facebook, Instagram, Messenger and WhatsApp, showing what each placement and conversation type actually produced.' },
    ],
    platforms: ['Meta Business Suite', 'Meta Ads Manager', 'Events Manager', 'Conversions API', 'Instagram', 'Facebook', 'Messenger', 'WhatsApp Business', 'Advantage+', 'Google Tag Manager'],
    process: [
      { title: 'Free platform audit', body: 'We review your business portfolio, ad account, Events Manager and recent campaigns, then go through the findings on a call or at our London office.' },
      { title: 'Plan and GBP quote', body: 'A written plan for ownership fixes, tracking, placements and messaging channels, with the management fee quoted in GBP.' },
      { title: 'Ownership and tracking first', body: 'Assets moved into your business portfolio and the Conversions API set up before campaigns are rebuilt in stages.' },
      { title: 'Manage and review', body: 'Weekly creative, audience and placement work; requests sent before UK lunchtime are usually handled the same day.' },
    ],
    local: {
      city: 'London',
      areas: ['Woodford', 'South Woodford', 'Ilford', 'Stratford', 'Canary Wharf', 'the City', 'Soho', 'Camden', "King's Cross", 'Notting Hill'],
      note: 'Our London office is in E18, by South Woodford. London businesses can meet the team there by appointment to sort out ownership, tracking and campaign plans; most daily Meta work is done by our Chennai team, so changes keep moving after UK hours.',
    },
    figures: [
      { type: 'mindmap', caption: 'Everything a London business can run on Meta, and the data that ties it together.', after: 0, center: 'Your Meta advertising', branches: [
        { label: 'Instagram', items: ['Reels and Stories', 'Explore and feed'] },
        { label: 'Facebook', items: ['Feed and video', 'Right column and search'] },
        { label: 'Messaging', items: ['Messenger chats', 'WhatsApp click-to-chat'] },
        { label: 'Data', items: ['Pixel and Conversions API', 'Business portfolio access'] },
      ] },
      { type: 'matrix', caption: 'Where to send people from a Meta ad, by how they like to buy and how big the decision is.', after: 3, cols: ['Buys without asking', 'Wants to ask first'], rows: ['Quick, low-cost purchase', 'Bigger or booked purchase'], cells: [
        { title: 'Website checkout', body: 'Product page or booking page with a short path to pay' },
        { title: 'Messenger reply', body: 'Quick replies for sizes, stock or opening times' },
        { title: 'Landing page', body: 'Detail, reviews and FAQs before a booking form' },
        { title: 'WhatsApp chat', body: 'A real person answers, sends photos and books it' },
      ] },
      { type: 'venn', caption: 'Why the pixel and the Conversions API work better together than either one alone.', after: 4, left: { title: 'Meta pixel', body: 'Browser events with page detail; blocked by some browsers' }, right: { title: 'Conversions API', body: 'Server events from your site; not lost to browser limits' }, overlap: 'One deduplicated set of events' },
    ],
    guide: [
      {
        heading: 'What a Meta ads agency in London looks after',
        paragraphs: [
          'A Meta ads agency in London manages advertising across every app Meta owns, not just the Facebook feed. One campaign can reach people in Instagram Reels, Stories and Explore, the Facebook feed, Messenger and WhatsApp, and each of those places asks for different creative and a different next step.',
          'That breadth suits the mix of businesses in London: restaurants filling tables midweek, salons and studios booking appointments, shops selling online and in person, and service firms that win work through a conversation. The right combination of placements and destinations differs for each, so we start from what a good customer does after seeing the ad.',
          'The foundation sits underneath the ads. A clean business portfolio, clear ownership and reliable tracking decide whether Meta can learn from your results. Without them, even strong creative struggles.',
        ],
      },
      {
        heading: 'Setting up Meta Business Suite and your business portfolio',
        paragraphs: [
          'Meta Business Suite is where Pages, Instagram accounts, ad accounts, pixels, catalogues and WhatsApp numbers are owned and shared. The owning account is a business portfolio, which used to be called Business Manager. Many London businesses find their assets split across personal profiles, an old agency and a freelancer who has since moved on.',
          'We move everything into one business portfolio in your company\'s name, then give agencies and staff partner or employee access with only the permissions they need. Two-factor sign-in on every admin, at least two admins from your own team and a verified domain prevent most of the lock-out problems we are asked to fix.',
        ],
        bullets: [
          'Business portfolio owned by your company, with two of your own admins',
          'Agencies added as partners, never as owners',
          'Domain verified and payment method in your company\'s name',
          'A simple naming system for campaigns, ad sets and ads',
        ],
      },
      {
        heading: 'Instagram Reels, Stories and Explore: creative for each placement',
        paragraphs: [
          'Instagram placements are full-screen and vertical. A square image built for the Facebook feed looks small and dated in Stories, and text near the top or bottom of a Reel gets hidden behind the profile name and buttons. Build in 9:16, keep key words inside the safe zone and add captions, because many people watch with the sound off.',
          'The opening seconds decide whether someone stops scrolling. Show the product, the result or the person straight away, then explain. Explore placements reach people browsing for new things, so they suit discovery creative rather than discount messages.',
          'Advantage+ placements let Meta move budget between Facebook and Instagram automatically. That works well when you supply versions for each format. If you only have one asset, Meta will crop it, so check every preview before publishing.',
        ],
      },
      {
        heading: 'Messenger and WhatsApp click-to-chat ads',
        paragraphs: [
          'Click-to-Messenger and click-to-WhatsApp ads open a conversation instead of a web page. They work well for decisions where people want to ask first: a treatment at a clinic, a made-to-measure order, a private dining booking or a quote for a service. Many Londoners already message local businesses on WhatsApp, so the step feels familiar.',
          'The ad is the easy part. Someone has to reply quickly, in a friendly tone, with clear next steps. Set a welcome message and quick replies for common questions, agree who answers during busy periods and decide what happens out of hours. A chat that waits until the next morning often goes cold.',
          'Measure what conversations produce, not how many start. Label chats that became bookings or sales, and compare them with the cost of the ads that started them.',
        ],
      },
      {
        heading: 'Conversions API, Events Manager and consent',
        paragraphs: [
          'Events Manager is where Meta receives data about what people do after an ad: page views, leads, bookings and purchases. The pixel sends these from the browser, but browser limits and cookie choices mean some events never arrive. The Conversions API sends the same events from your website\'s server, and matching event IDs let Meta remove duplicates.',
          'We check event match quality, make sure the main conversion fires once per order or lead and test the set-up against real transactions. Better data helps Advantage+ campaigns find the right people sooner.',
          'In plain terms, UK GDPR and PECR mean the pixel needs consent from your cookie banner before it runs, and server events should respect the same choice. We set this up carefully, but we are not lawyers, so ask your adviser to check your banner and privacy policy.',
        ],
      },
      {
        heading: 'Advantage+ campaigns, account structure and working with us',
        paragraphs: [
          'Meta\'s automation works well with fewer, larger campaigns that each gather enough results to learn. We use Advantage+ audience and placements where your data is strong, and keep manual controls for small budgets, tight local audiences and special ad categories such as housing, employment and credit, which limit targeting options.',
          'As a Meta ads agency in London, we keep your business portfolio and ad account in your company\'s name. Ad spend is paid directly to Meta from your account, and our management fee is quoted in GBP after a free audit, based on the placements, messaging channels and tracking work involved.',
          'Meet us at our London office in E18 by appointment. Most daily work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.',
        ],
      },
    ],
    related: [
      linkEcom,
      linkFacebook,
      linkCompare,
      { label: 'PPC agency in London for Google, Microsoft and Meta together', href: '/london/ppc-agency/' },
      { label: 'Google Ads agency in London for Search and Shopping', href: '/london/google-ads-agency/' },
    ],
    faqs: [
      { q: 'What does a Meta ads agency in London manage?', a: 'It manages advertising across Facebook, Instagram, Messenger and WhatsApp: business portfolio set-up, account structure, creative for each placement, click-to-chat campaigns, Advantage+ campaigns and tracking through the pixel and Conversions API. The aim is sales, bookings or enquiries you can trace back to the ads.' },
      { q: 'How much does it cost to have an agency run Meta ads in London?', a: 'We quote a monthly management fee in GBP after a free audit. It depends on how many placements and messaging channels you use, how much creative is needed, the tracking work involved and the number of campaigns. Ad spend is separate and paid directly to Meta from your own account.' },
      { q: 'Should we advertise on Instagram, Facebook or both?', a: 'Usually both, with creative built for each placement. Meta can move budget between them automatically when you supply vertical and square versions. We look at where your customers respond, then shift creative effort towards the placements that bring real sales or bookings rather than cheap clicks.' },
      { q: 'Do WhatsApp click-to-chat ads work for London businesses?', a: 'They suit businesses where customers want to ask before buying or booking, such as clinics, salons, restaurants and made-to-order shops. They only work if someone replies quickly, so we set up welcome messages and quick replies and agree who answers before the campaign starts.' },
      { q: 'What is the Conversions API and do we need it?', a: 'The Conversions API sends events such as purchases and leads from your server to Meta, alongside the browser pixel. It recovers events lost to browser limits and gives campaigns better data. Most businesses spending regularly on Meta benefit from it, provided it respects cookie consent.' },
      { q: 'Can you recover assets a former freelancer or agency controls?', a: 'Often, yes. We map who owns each Page, Instagram account, ad account and pixel, then request transfers or access into a business portfolio in your company\'s name. Some cases need Meta support and take time, but the end result is that your business owns everything.' },
      { q: 'Can we meet you at your London office?', a: 'Yes. Our London office is in E18, East London, and you can meet the team there by appointment for audits, planning and reviews. Most day-to-day work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ---------------------------------------------------------------- Type F: Facebook, leads and local businesses
  {
    slug: 'london/facebook-ads-agency',
    kind: 'location',
    market: 'UK',
    title: 'Facebook Ads Agency in London for Local Leads',
    description: 'Facebook ads agency in London for local and service businesses: lead ads, instant forms, Marketplace and Reels placements, radius targeting and lead quality checks.',
    primaryKeyword: 'Facebook ads agency in London',
    navLabel: 'Facebook Ads Agency London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Facebook ads in London · Lead ads · Local targeting · Moderation',
    h1: 'Facebook Ads Agency in London for *Local Leads*',
    intro: 'Billion Ecommerce Agency is a Facebook ads agency in London for clinics, salons, trades, tutors, studios and local shops that need enquiries and bookings. We build lead ads and instant forms, target the postcodes you actually serve, moderate comments and feed lead quality back to Facebook so it finds more people who book. Meet us at our London office by appointment.',
    icon: 'social',
    facts: ['Lead ads and instant forms', 'Radius targeting around your postcodes', 'Lead quality fed back to Facebook'],
    headings: {
      pains: 'Why Facebook leads in London *go nowhere*',
      includes: 'What we run on Facebook for local businesses',
      process: 'From first form to booked jobs in *4 steps*',
      guide: 'Facebook advertising for London service businesses: forms, placements, areas and lead quality',
    },
    pains: [
      { title: 'Cheap leads nobody can reach', body: 'Wrong numbers, unanswered calls and people who tapped submit without reading. The cost per lead looks low, but the cost per booked job is a mystery.' },
      { title: 'Ads shown outside your patch', body: 'A Hackney salon or a Walthamstow plumber pays for people in Kent or across the river who will never travel that far or fall inside the service area.' },
      { title: 'Comments left unanswered', body: 'Questions about prices, complaints and spam pile up under ads. Potential customers read them, and silence looks worse than any single bad comment.' },
    ],
    includes: [
      { title: 'Lead ads and instant forms', body: 'Forms built for your service with the right form type, a few qualifying questions, a clear privacy link and a thank-you screen that offers a call or booking link.' },
      { title: 'Placement plan', body: 'Facebook feed, Marketplace, Reels and video placements tested separately, so budget moves to the ones that bring booked jobs rather than the cheapest form fills.' },
      { title: 'Local audiences and radius targeting', body: 'Targeting by postcode, pin and radius around your premises or service area, with excluded areas and audiences built from past customers where you have consent.' },
      { title: 'Lead quality loop', body: 'A simple spreadsheet where your team marks each lead, uploaded to Events Manager so you can see which leads turn into customers. We connect a direct integration later if volume justifies it.' },
      { title: 'Speed-to-lead set-up', body: 'Instant lead alerts by email or the Meta Business Suite app, plus short call and message scripts, so new enquiries are contacted while they are still interested.' },
      { title: 'Page and comment moderation', body: 'Daily checks of comments on ads and your Page, polite public replies, hidden spam and abuse, and difficult questions passed to you the same day.' },
      { title: 'Reporting on booked jobs', body: 'A monthly GBP report showing cost per lead, cost per qualified lead and cost per booked job by campaign, form and placement.' },
    ],
    platforms: ['Meta Ads Manager', 'Facebook lead ads', 'Instant forms', 'Events Manager', 'Meta Business Suite', 'Facebook Marketplace', 'Facebook Reels', 'Google Sheets', 'Microsoft Excel'],
    process: [
      { title: 'Free account and lead audit', body: 'We review your ads, forms, targeting and a sample of recent leads, then talk through the findings on a call or at our London office.' },
      { title: 'Plan and GBP quote', body: 'A written plan for forms, areas, placements and lead follow-up, with the monthly management fee quoted in GBP.' },
      { title: 'Build forms and campaigns', body: 'New forms and local campaigns go live alongside anything that already works, and your team is shown how to mark lead outcomes.' },
      { title: 'Manage, moderate and review', body: 'Weekly form and placement tweaks, daily moderation and monthly lead uploads; requests sent before UK lunchtime are usually handled the same day.' },
    ],
    local: {
      city: 'London',
      areas: ['Walthamstow', 'Ilford', 'Woodford', 'Leytonstone', 'Wanstead', 'Chingford', 'Stratford', 'Hackney', 'Islington', 'Westminster'],
      note: 'Our London office is in E18, between Woodford and Wanstead. Local business owners can meet the team there by appointment to plan forms and target areas; most day-to-day campaign work is done by our Chennai team, so changes keep moving after UK hours.',
    },
    figures: [
      { type: 'mindmap', caption: 'The four things that decide whether Facebook ads bring a local business real customers.', after: 0, center: 'Facebook leads that book', branches: [
        { label: 'Form', items: ['Higher-intent form type', 'Two or three key questions'] },
        { label: 'Placement', items: ['Feed and Marketplace', 'Reels for local video'] },
        { label: 'Area', items: ['Radius round your postcode', 'Exclude areas you skip'] },
        { label: 'Follow-up', items: ['Call within the hour', 'Mark every lead outcome'] },
      ] },
      { type: 'venn', caption: 'Lead ads only pay off when the form and your follow-up work together.', after: 1, left: { title: 'A well-built instant form', body: 'Qualifying questions, a review step and a clear next step' }, right: { title: 'Fast, friendly follow-up', body: 'A call or message while the person still remembers you' }, overlap: 'Booked appointments and jobs' },
      { type: 'steps', caption: 'How a simple spreadsheet teaches Facebook which leads become customers.', after: 4, steps: [
        { title: 'Export leads', body: 'Download new leads every week' },
        { title: 'Mark outcomes', body: 'Qualified, booked or not a fit' },
        { title: 'Upload the file', body: 'Send outcomes to Events Manager' },
        { title: 'Optimise', body: 'Aim campaigns at qualified leads' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Facebook ads agency in London does for local businesses',
        paragraphs: [
          'A Facebook ads agency in London that works with local and service businesses has a simple job description: bring enquiries from people nearby who turn into paying customers. For a clinic, salon, gym, tutor, cleaner or builder, a sale rarely happens on the website. It happens after a form, a call and a booking.',
          'Facebook is well suited to this. People of almost every age use it, it has formats built for collecting enquiries without leaving the app, and it can target a tight area around your premises. The difficulty is quality. Easy forms bring plenty of names, and many of them never answer the phone.',
          'So the work covers the whole path: the form, the placement, the area, the follow-up and the feedback that tells Facebook which leads were worth having.',
        ],
      },
      {
        heading: 'Lead ads and instant forms: volume versus quality',
        paragraphs: [
          'Lead ads open an instant form inside Facebook, pre-filled with the person\'s name, email and phone number. That convenience is the strength and the weakness: it is easy to submit without thinking. Choosing the higher-intent form type adds a review screen where people confirm their details, which usually means fewer leads but better ones.',
          'Add two or three questions that matter to you, such as postcode, the service needed or a preferred time. Multiple-choice answers are quicker than open text and easier to sort. The thank-you screen should give a clear next step: a button to call, a booking link or a note on when you will be in touch.',
          'Keep marketing consent separate. Under PECR, sending marketing emails or texts to individuals generally needs their consent, so add an optional, unticked checkbox and link your privacy policy. We are not lawyers, so have your adviser check the wording.',
        ],
      },
      {
        heading: 'Facebook placements: feed, Marketplace and Reels',
        paragraphs: [
          'The Facebook feed is still the main placement for local services. Simple images of real work, a clear headline about the area you cover and a short line about what happens next tend to beat stock photos.',
          'Marketplace ads appear while people browse local listings. They suit businesses linked to the home, such as removals, furniture repair, cleaning or garden work, because buyers there are already thinking about local services and nearby sellers.',
          'Reels and in-stream video suit businesses that can show a result: a haircut, a kitchen fit, a fitness class. Short vertical clips filmed on a phone often outperform polished adverts. Check placement results separately, because a cheap lead from one placement can be far less likely to book than a dearer one from another.',
        ],
      },
      {
        heading: 'Local audiences and radius targeting across London',
        paragraphs: [
          'Set the area by how far customers will really travel or how far you will go to them. In London that can be smaller than expected: people in Chingford may not cross to Clapham for a facial, and a builder in Ilford may not want jobs in Ealing. Use a radius around your postcode or several dropped pins, and exclude areas you do not cover.',
          'Within that area, broad targeting often works better than narrow interests, because Facebook finds responsive people from the data your leads give it. Custom audiences from past customers help when you have consent to use their details. Housing, employment and credit adverts fall into special ad categories with limited targeting, so check before planning those campaigns.',
        ],
      },
      {
        heading: 'Lead quality without special software: offline outcome uploads',
        paragraphs: [
          'Facebook only knows that someone filled in a form. It does not know whether they answered your call, booked or paid. Telling it closes that gap, and you do not need expensive software to do it.',
          'Export your leads every week into a spreadsheet and add a column for the outcome: qualified, booked, not a fit or no answer. Upload that file to Events Manager, matched on email or phone number and the lead ID. Once enough leads are marked and a supported connection is in place, campaigns can be set to optimise for leads that become customers rather than raw form fills.',
          'As a Facebook ads agency in London, we set up the sheet, train your team to fill it in during a short call and handle the uploads.',
        ],
        bullets: [
          'One row per lead, with the lead ID kept from the export',
          'Outcome marked within a few days of the enquiry',
          'Uploaded weekly so Facebook learns while the campaign runs',
        ],
      },
      {
        heading: 'Moderation, follow-up and working with our London team',
        paragraphs: [
          'Comments under ads are public, and prospective customers read them. We check ads and your Page daily, reply politely to questions, hide spam and abuse and pass complaints or tricky questions to you the same day. Speed matters with leads too: call or message new enquiries quickly, ideally within the hour.',
          'Your ad account, Page and lead forms stay in your company\'s name, and ad spend is paid directly to Meta from your account. Our management fee is quoted in GBP after a free audit. Meet us at our London office in E18 by appointment; most daily work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.',
        ],
      },
    ],
    related: [
      linkEcom,
      linkMeta,
      linkCompare,
      { label: 'PPC agency in London for search and social ads together', href: '/london/ppc-agency/' },
      { label: 'E-commerce and digital growth agency in London', href: '/london/ecommerce-agency/' },
    ],
    faqs: [
      { q: 'What does a Facebook ads agency in London do for a local business?', a: 'It plans and runs Facebook campaigns that bring enquiries from people near you: lead ads and instant forms, local radius targeting, placement tests across the feed, Marketplace and Reels, comment moderation and lead quality tracking. The goal is booked jobs and appointments, not just a low cost per lead.' },
      { q: 'How much does Facebook advertising cost for a local London business?', a: 'We quote a monthly management fee in GBP after a free audit. It depends on the number of services and areas, how many forms and campaigns are needed, moderation volume and lead tracking work. Ad spend is separate and paid directly to Meta from your own account.' },
      { q: 'Are lead ads better than sending people to my website?', a: 'Lead ads usually bring more enquiries because the form opens inside Facebook with details pre-filled. Website forms often bring fewer but more committed leads. We often test both, using the higher-intent form type and qualifying questions to keep lead ads from filling up with people who never answer.' },
      { q: 'How do I stop getting poor-quality leads from Facebook?', a: 'Use the higher-intent form type, ask two or three qualifying questions and call new leads quickly. Then mark each lead\'s outcome in a spreadsheet and upload it to Events Manager, so you can judge campaigns on customers, not raw form fills. With a supported connection, Facebook can then optimise towards those leads.' },
      { q: 'Can you target just my part of London?', a: 'Yes. We can target a radius around your postcode, several dropped pins or specific areas, and exclude places you do not serve. We set the area by how far customers actually travel or how far you will go to them, then check which areas bring booked work.' },
      { q: 'Do you moderate comments on our ads and Page?', a: 'Yes. We check comments daily, reply politely to straightforward questions, hide spam and abuse and pass complaints or anything sensitive to you the same day. You agree the tone and the standard answers with us at the start, so replies sound like your business.' },
      { q: 'Can I meet your team in London?', a: 'Yes. Our London office is in E18, East London, and you can meet the team there by appointment to plan forms, areas and follow-up. Most day-to-day work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ---------------------------------------------------------------- Type A: comparison intent
  {
    slug: 'london/facebook-advertising-agencies',
    kind: 'location',
    market: 'UK',
    title: 'Facebook Advertising Agencies in London: How to Choose',
    description: 'Comparing Facebook advertising agencies in London? The agency types, questions to ask, red flags, what a proper audit covers and who should own your ad account.',
    primaryKeyword: 'Facebook advertising agencies in London',
    navLabel: 'Facebook Advertising Agencies London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Choosing a Facebook advertising partner in London · Questions · Red flags',
    h1: 'Facebook Advertising Agencies in London: *How to Choose*',
    intro: 'Comparing Facebook advertising agencies in London is hard when every pitch sounds the same. This page explains the main types of agency, how to compare them fairly, the questions worth asking, the red flags to watch for and what a proper audit should cover. Then it shows how Billion Ecommerce Agency works, if you want a second opinion from our London office.',
    icon: 'social',
    facts: ['Free audit with written findings', 'Ad account stays in your name', 'London office, meetings by appointment'],
    headings: {
      pains: 'Why choosing a Facebook advertising partner is *so hard*',
      includes: 'What you get if you ask Billion Ecommerce Agency for a second opinion',
      process: 'How working with us starts, in *4 steps*',
      guide: 'How to compare Facebook advertising agencies in London',
    },
    pains: [
      { title: 'Every proposal promises the same thing', body: 'Scale, ROAS, creative and data-driven strategy appear in every deck. It is hard to tell which agency has done work like yours and which is reading from a template.' },
      { title: 'You cannot see who does the work', body: 'A senior person pitches, then the account goes to someone you never meet. Many agencies use freelancers or overseas teams without saying so.' },
      { title: 'Contracts and access that lock you in', body: 'Long minimum terms, ad accounts set up in the agency\'s name and creative you cannot reuse make leaving painful, even when results are poor.' },
    ],
    includes: [
      { title: 'A free written audit', body: 'A review of your ad account, tracking, structure, audiences and creative, with findings ranked by likely effect. It is yours to keep whether or not you hire us.' },
      { title: 'An honest view of fit', body: 'If a freelancer, an in-house hire or a different kind of agency suits your stage better, we say so, and explain why.' },
      { title: 'An ownership check', body: 'We confirm who owns your business portfolio, Page, Instagram account, ad account and pixel, and help move anything that sits in someone else\'s name.' },
      { title: 'Clear team and working hours', body: 'Meetings at our London office by appointment, with most delivery by our Chennai team. You know who does the work and when.' },
      { title: 'A written quote in GBP', body: 'Scope, timeline, reporting and exclusions in writing, with the management fee kept separate from ad spend, which you pay to Meta directly.' },
      { title: 'A change log and monthly report', body: 'Every significant change recorded, plus a plain monthly report on spend, results and what we plan next, in language you can share with your team.' },
      { title: 'A clean exit plan', body: 'If you stop working with us, access is removed, the account and history stay with you and we hand over creative files and notes.' },
    ],
    platforms: ['Meta Ads Manager', 'Meta Business Suite', 'Events Manager', 'Conversions API', 'Facebook', 'Instagram', 'Google Analytics 4'],
    process: [
      { title: 'Free audit and call', body: 'You grant read-only access; we review the account and talk through the findings on a call or at our London office.' },
      { title: 'Written quote in GBP', body: 'Scope, reporting, notice period and exclusions in writing, so you can compare us like for like with other proposals.' },
      { title: 'Onboarding through your portfolio', body: 'You add us as a partner in your business portfolio; nothing moves into our name and no passwords are shared.' },
      { title: 'Monthly review', body: 'A report and review each month; requests sent before UK lunchtime are usually handled the same day.' },
    ],
    local: {
      city: 'London',
      areas: ['Canary Wharf', 'Stratford', 'Ilford', 'Walthamstow', 'Bethnal Green', 'Shoreditch', 'the City', 'Holborn', 'Marylebone'],
      note: 'Our London office is in E18, near Woodford. If you are comparing options, you can meet us there by appointment to go through an audit in person; most day-to-day work is done by our Chennai team, which keeps campaigns moving after UK hours.',
    },
    figures: [
      { type: 'mindmap', caption: 'The four main kinds of Facebook advertising help, and where each tends to fit.', after: 0, center: 'Who could run your ads', branches: [
        { label: 'Freelancer', items: ['Direct contact, lower overhead', 'Limited cover and capacity'] },
        { label: 'Specialist', items: ['Deep Meta focus', 'May ignore other channels'] },
        { label: 'Full-service', items: ['Ads, SEO, creative together', 'Meta may get less attention'] },
        { label: 'In-house', items: ['Knows the business well', 'Needs training and support'] },
      ] },
      { type: 'matrix', caption: 'A rough guide to which type of help fits, by account size and how many channels you run.', after: 1, cols: ['Meta only', 'Several channels'], rows: ['Small, simple account', 'Larger, complex account'], cells: [
        { title: 'Freelancer', body: 'One skilled person with a clear brief and access rules' },
        { title: 'Small agency', body: 'One team covering Meta and search, with shared reporting' },
        { title: 'Meta specialist', body: 'Deep testing, creative volume and tracking work' },
        { title: 'Full-service team', body: 'Joined-up plan, or an in-house lead plus an agency' },
      ] },
      { type: 'steps', caption: 'What a proper Facebook ads audit should cover before anyone asks you to sign.', after: 4, steps: [
        { title: 'Access', body: 'Read-only, through your own portfolio' },
        { title: 'Ownership', body: 'Who owns the account, Page and pixel' },
        { title: 'Tracking', body: 'Pixel, Conversions API and consent' },
        { title: 'Structure', body: 'Campaigns, audiences and creative' },
        { title: 'Written findings', body: 'Ranked fixes you can keep' },
      ] },
    ],
    guide: [
      {
        heading: 'The main types of Facebook advertising agencies in London',
        paragraphs: [
          'Facebook advertising agencies in London range from one-person consultancies to large groups with creative studios. Most fall into four types, and the right one depends on your budget, how many channels you run and how much you want to do yourself.',
          'Freelancers offer direct contact and lower overheads, and a good one can run a small account very well. The limits are capacity and cover: holidays, illness and a full client list all affect your account. Specialist Meta agencies focus on Facebook and Instagram only, which usually means deeper testing and more creative volume, but they may not see how Meta fits with search or email.',
          'Full-service agencies run ads, SEO, content and sometimes websites together, so the plan is joined up, though Meta may be one task among many. Building an in-house team gives the deepest knowledge of your business, but one hire rarely covers strategy, creative and tracking alone. Many firms combine options, such as an in-house marketer working with an agency.',
        ],
      },
      {
        heading: 'How to compare agencies fairly',
        paragraphs: [
          'Start with relevance, not size. Ask for examples of work with businesses like yours: online shops if you sell products, lead generation if you need bookings. Client names may be confidential, but an agency should explain what it did, what changed and how results were measured.',
          'Then compare how each agency works day to day, using the same points for every one:',
        ],
        bullets: [
          'Who does the work, where they are based and how often you hear from them',
          'How creative is produced and tested, and who pays for it',
          'How tracking is set up and checked, including the Conversions API',
          'What the monthly report contains and whether it shows profit or just clicks',
          'Notice period, minimum term and what happens to your account if you leave',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        paragraphs: [
          'Good Facebook advertising agencies in London are happy to answer direct questions, and the answers tell you as much as the proposal. Ask the same questions of everyone and write the answers down so you can compare them.',
          'Ask what they would change first in your account and why. Ask how they decide when an ad has had a fair test. Ask how they judge results if your business has returns, cancellations or long sales cycles. Ask who owns the creative they make. Ask how they handle cookie consent under UK GDPR and PECR; in plain terms, the pixel should only run after a visitor agrees. Ask how quickly they respond to an urgent request, such as a broken offer during a sale.',
          'If an answer is vague, ask for an example. If they cannot give one, note it.',
        ],
      },
      {
        heading: 'Red flags to watch for',
        paragraphs: [
          'Some warning signs come up often enough to list. None of them proves an agency is bad, but each deserves a clear explanation before you sign.',
        ],
        bullets: [
          'Promising a specific ROAS or number of leads before seeing your account',
          'Setting up the ad account or business portfolio in the agency\'s name',
          'Ad spend paid through the agency with no clear breakdown of fees',
          'Long minimum terms with no performance review point',
          'Reports built on reach, likes or clicks rather than sales or bookings',
          'Asking for your personal Facebook password instead of partner access',
          'Reluctance to say who will actually manage the account',
        ],
      },
      {
        heading: 'What a proper Facebook ads audit looks like',
        paragraphs: [
          'A useful audit is specific to your account. It should start with read-only partner access through your business portfolio, never shared logins. It should check ownership of every asset, then tracking: whether the pixel and Conversions API both send the main conversion, whether duplicates are removed and whether consent is respected.',
          'After that it should look at campaign structure, audiences, placements, creative fatigue and the landing pages people reach. The findings should come in writing, ranked by likely effect, with enough detail that you or another team could act on them. If an audit is a generic checklist or a sales pitch with your logo on it, it is not much help.',
        ],
      },
      {
        heading: 'Contracts, account ownership and how Billion Ecommerce Agency works',
        paragraphs: [
          'Whoever you choose, keep the business portfolio, ad account, Page, pixel and catalogue in your company\'s name, and pay ad spend directly to Meta. Agree a reasonable notice period, who owns the creative and what the agency hands over if you part ways. If the agency handles customer data, ask for a data processing agreement. We are not lawyers, so have your adviser read the contract.',
          'If you are comparing Facebook advertising agencies in London and want a second opinion, we offer a free written audit. Our management fee is quoted in GBP after that audit, based on scope, channels and creative volume. Meet us at our London office in E18 by appointment; most delivery is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.',
        ],
      },
    ],
    related: [
      linkEcom,
      linkMeta,
      linkFacebook,
      { label: 'PPC agency in London for Google, Microsoft and Meta ads', href: '/london/ppc-agency/' },
      { label: 'Google Ads agency in London for Search and Shopping', href: '/london/google-ads-agency/' },
      { label: 'Free ROAS calculator to check an agency\'s targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'How do I choose between Facebook advertising agencies in London?', a: 'Compare them on the same points: relevant experience with businesses like yours, who does the work, how creative is tested, how tracking is set up, what reports show and what happens if you leave. Ask each one for a written audit of your account and judge how specific and honest it is.' },
      { q: 'How much do London agencies charge to run Facebook ads?', a: 'Fees vary with scope: the number of campaigns and channels, creative volume, tracking work and how often you want reporting. Most agencies quote a management fee separately from ad spend. We quote ours in GBP after a free audit, and ad spend is paid directly to Meta from your account.' },
      { q: 'Is a freelancer or an agency better for Facebook ads?', a: 'A skilled freelancer can suit a small, simple account with a clear brief. An agency suits businesses that need more creative, cover during holidays, tracking work or several channels joined up. Either way, keep the ad account in your own name so you can change later.' },
      { q: 'What should a Facebook ads audit include?', a: 'Ownership of every asset, tracking through the pixel and Conversions API, consent set-up, campaign structure, audiences, placements, creative fatigue and landing pages. Findings should be written, ranked by likely effect and specific enough to act on, whether or not you hire the agency that wrote them.' },
      { q: 'Who should own the Facebook ad account?', a: 'Your business should. The business portfolio, ad account, Page, Instagram account, pixel and catalogue should sit in your company\'s name, with the agency added as a partner. That way, if you change agency, your data, audiences and campaign history stay with you.' },
      { q: 'What contract terms are reasonable with a Facebook advertising agency?', a: 'Look for a clear scope, a reasonable notice period, a review point early on, ownership of creative agreed in writing and a handover plan if you leave. Avoid contracts that move your ad account into the agency\'s name. We are not lawyers, so have an adviser read the terms.' },
      { q: 'Can I meet Billion Ecommerce Agency in London before deciding?', a: 'Yes. Our London office is in E18, East London, and you can meet the team there by appointment to go through a free audit. Most day-to-day work is done by our Chennai team, and requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },
];
