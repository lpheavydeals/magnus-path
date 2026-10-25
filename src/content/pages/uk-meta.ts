import type { ServicePageData } from '../../data/types';

const ukBreadcrumb = [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }];

const linkEcom = { label: 'Meta catalogue and Advantage+ ads for UK online shops', href: '/uk/ecommerce-meta-ads-agency/' };
const linkMeta = { label: 'Meta advertising across Facebook, Instagram and WhatsApp', href: '/uk/meta-ads-agency/' };
const linkFb = { label: 'Facebook lead ads for UK service and local businesses', href: '/uk/facebook-ads-agency/' };
const linkCompare = { label: 'How to compare Facebook ad agencies in the UK', href: '/uk/facebook-advertising-agencies/' };

export const ukMetaPages: ServicePageData[] = [
  // ───────────────────────── E: Ecommerce Meta ads agency (UK) ─────────────────────────
  {
    slug: 'uk/ecommerce-meta-ads-agency',
    kind: 'global',
    market: 'UK',
    twin: 'ecommerce-meta-ads-agency',
    title: 'Ecommerce Meta Ads Agency UK: Catalogue Ads',
    description: 'Ecommerce Meta ads agency for UK online shops: catalogue and Advantage+ campaigns, feed health, UGC creative tests and ROAS after returns. Quoted in GBP.',
    primaryKeyword: 'ecommerce Meta ads agency',
    navLabel: 'Ecommerce Meta Ads UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Catalogue ads · Advantage+ · Dynamic product ads · UGC',
    h1: 'Ecommerce Meta Ads Agency for UK Online Shops, Built Around *Your Catalogue*',
    intro: 'Billion Ecommerce Agency is an ecommerce Meta ads agency for UK online shops. We run catalogue and Advantage+ campaigns on Facebook and Instagram, keep your product feed healthy, test UGC-style creative every month and judge results on ROAS after returns, not on checkout revenue alone. Ad spend goes straight to Meta from your own account, and our fee is quoted in GBP after a free audit.',
    icon: 'social',
    facts: ['ROAS measured after returns', 'Your catalogue, your business portfolio', 'London office, Chennai delivery'],
    headings: {
      pains: 'Why Meta ads stall for UK online shops',
      includes: 'What our Meta ads management for UK stores covers',
      process: 'From catalogue audit to scaling in *4 steps*',
      guide: 'Meta ads for UK online shops: catalogues, creative and real ROAS',
    },
    pains: [
      { title: 'A messy catalogue quietly limits delivery', body: 'Rejected items, sold-out products still in ads and sale prices that differ from the product page. Meta shows fewer products to fewer people, and nobody notices until sales dip.' },
      { title: 'Revenue looks fine until the returns land', body: 'Ads Manager counts an order the moment it is placed. Returned dresses, cancelled Klarna orders and failed payments never come off the figure, so ROAS looks healthier than your bank balance.' },
      { title: 'The same three ads have run since spring', body: 'Creative wears out. Frequency climbs, click costs rise and the account blames the audience, when what it really needs is a steady flow of new hooks, formats and UGC.' },
    ],
    includes: [
      { title: 'Advantage+ sales campaigns', body: 'Set up with your catalogue and strongest creative, with limits on spend aimed at existing customers and a simpler comparison campaign so you can see what Advantage+ really adds.' },
      { title: 'Catalogue and product feed health', body: 'Weekly checks in Commerce Manager, VAT-inclusive GBP prices, stock and sale prices synced from Shopify or WooCommerce, and product sets grouped by margin, category and stock depth.' },
      { title: 'Dynamic product ads', body: 'Ads that show each visitor the items they viewed or left in the basket, with recent buyers excluded and sensible frequency limits so nobody is chased for weeks.' },
      { title: 'UGC and creative testing', body: 'Creator briefs, hook tests in the first seconds, and UGC compared with product video, static and carousel ads. One written test plan a month, with results you can learn from.' },
      { title: 'ROAS after returns reporting', body: 'Each month we reconcile Meta-reported sales with store orders net of refunds and cancellations, in GBP, and set targets on the figure that actually reaches your account.' },
      { title: 'Shops and product tagging', body: 'Facebook and Instagram Shops linked to the catalogue, with products tagged in posts and Reels so shoppers can tap through to your own checkout.' },
      { title: 'Peak-season planning', body: 'Catalogue, creative and budgets prepared for Black Friday through Boxing Day and the January sales, then watched daily while costs are high.' },
    ],
    platforms: ['Meta Ads Manager', 'Commerce Manager', 'Events Manager', 'Conversions API', 'Shopify', 'WooCommerce', 'GA4'],
    process: [
      { title: 'Free catalogue and account audit', body: 'With read-only access we check catalogue diagnostics, campaign set-up, creative age and tracking, and compare Meta sales with your store orders. We walk you through it on a video call or at our London office.' },
      { title: 'Plan and GBP quote', body: 'A written plan covering feed fixes, campaign structure, creative tests and ROAS targets after returns, with a monthly management fee in GBP. Ad spend stays separate and is paid by you to Meta.' },
      { title: 'Fix the feed, then relaunch', body: 'We correct the source data in your store, rebuild product sets and restructure campaigns without switching off ads that already sell.' },
      { title: 'Test weekly, reconcile monthly', body: 'New creative and budget moves every week. Each month we reconcile Meta sales with net orders, report in GBP and agree the next tests.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four parts of Meta advertising that decide whether an online shop makes money.', after: 0, center: 'Meta ads for a shop', branches: [
        { label: 'Catalogue', items: ['Clean, synced feed', 'Product sets by margin'] },
        { label: 'Campaigns', items: ['Advantage+ sales', 'Dynamic product ads'] },
        { label: 'Creative', items: ['UGC and creator videos', 'Monthly hook tests'] },
        { label: 'Measurement', items: ['ROAS after returns', 'Pixel plus Conversions API'] },
      ] },
      { type: 'matrix', caption: 'What to do with each ad once you know whether it stops the scroll and whether it sells.', after: 3, cols: ['Strong hook', 'Weak hook'], rows: ['Sells on the site', 'Few purchases'], cells: [
        { title: 'Scale it', body: 'Raise the budget and brief new versions of the same idea' },
        { title: 'New opening', body: 'Keep the message, change the first three seconds' },
        { title: 'Check the page', body: 'People are interested; the product page or offer lets them down' },
        { title: 'Retire it', body: 'Stop spend and note what to avoid in the next brief' },
      ] },
      { type: 'steps', caption: 'How we turn Ads Manager revenue into a ROAS figure you can trust.', after: 4, steps: [
        { title: 'Export orders', body: 'Store orders by week, in GBP' },
        { title: 'Take off returns', body: 'Refunds, cancellations, failed payments' },
        { title: 'Match to Meta', body: 'Compare with purchases in Ads Manager' },
        { title: 'Reset targets', body: 'Set ROAS goals on net revenue' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce Meta ads agency does differently',
        paragraphs: [
          'Running Meta ads for an online shop is mostly about products, not posts. The catalogue decides which items can appear, the campaign type decides how Meta matches products to people, and the result that matters is money kept after returns. An ecommerce Meta ads agency should spend as much time in Commerce Manager and your order data as it does in Ads Manager.',
          'This page is about selling physical products on Facebook and Instagram to UK shoppers. If you need enquiries for a service business, or help using Messenger and WhatsApp across the whole platform, the related pages below cover those jobs. Here the focus is catalogues, product ads, creative that sells items and reporting that matches your bank account.',
          'Ownership is simple: your business portfolio, ad account, pixel and catalogue stay in your name, ad spend is paid directly to Meta from your own card, and our management fee is a separate line quoted in GBP after a free audit.',
        ],
      },
      {
        heading: 'Catalogue and product feed health comes first',
        paragraphs: [
          'A Meta catalogue is a list of your products, usually synced from Shopify or WooCommerce. When it drifts out of step with your shop, ads suffer quietly. Common problems include items rejected for policy reasons, products still advertised after they sell out, sale prices that differ from the product page and images that crop badly in square or vertical placements.',
          'Prices should be VAT-inclusive and in GBP, exactly as shoppers see them at checkout. We check catalogue diagnostics every week, fix the source data in your store rather than patching Meta alone, and build product sets by margin, category and stock depth. Product sets are what let an ecommerce Meta ads agency push the lines that make money and keep thin-margin items out of prospecting.',
        ],
        bullets: [
          'Sync: stock, price and sale price kept in step with the store',
          'Images: clean product shots that survive square and vertical crops',
          'Titles: plain British English that UK shoppers recognise',
          'Product sets: grouped by margin, category and stock depth',
        ],
      },
      {
        heading: 'Advantage+ sales campaigns and dynamic product ads',
        paragraphs: [
          'Advantage+ sales campaigns (previously called Advantage+ shopping campaigns; Meta renames these products often) let Meta choose audiences and placements for your catalogue and creative. They work well for shops with steady sales data, but they will happily spend on existing customers and people already on your site. We limit existing-customer spend where the account allows it and run a simpler comparison campaign, so you know what Advantage+ is genuinely adding.',
          'Dynamic product ads show each person the items they viewed or left in their basket, pulled straight from the catalogue. They are usually cheap to run and often profitable, but they need exclusions for recent buyers, sensible look-back windows and frequency limits, so you are not chasing someone for weeks over a pair of trainers they already bought elsewhere.',
        ],
      },
      {
        heading: 'Creative testing with UGC',
        paragraphs: [
          'Meta’s delivery system now does much of the targeting, so creative has become the main lever you control. For most shops that means a steady supply of user-generated content: short videos of real customers or creators unboxing, wearing or using the product, filmed on a phone and cut for Reels and Stories.',
          'We write briefs for creators, test hooks in the first few seconds, and compare UGC against product-only video, static images and carousel ads. Each month there is a written test plan with one question per test, so every result teaches you something. Winners are scaled, losers are retired and the lessons feed the next set of briefs. Claims in creator videos still need to follow the ASA and CAP codes, especially for beauty, health and supplement products.',
        ],
      },
      {
        heading: 'Measuring ROAS after returns, not at checkout',
        paragraphs: [
          'Ads Manager counts a purchase when the order is placed. It does not know that a dress came back, a Klarna or Clearpay order was cancelled or a payment failed. For fashion and footwear in particular, returns can turn a healthy-looking ROAS into a loss. We reconcile Meta’s reported sales with store orders net of refunds and cancellations every month, and set targets on that net figure.',
          'Clean data matters too. We pair the Meta pixel with Conversions API so purchases still reach Meta when browsers block tracking, and we check event match quality in Events Manager. Under UK GDPR and PECR, the pixel should only fire after a shopper accepts marketing cookies, and Meta’s own terms expect you to have that consent where the law requires it. We are not lawyers, so your cookie banner and privacy notice should be checked by your own adviser.',
        ],
      },
      {
        heading: 'UK peaks: Black Friday to Boxing Day and the January sales',
        paragraphs: [
          'Many UK shops take a large share of the year’s orders between Black Friday and Christmas, then again in the January sales. Auction costs climb in November as every retailer raises budgets, so the work starts in September and October: catalogue checks, sale price fields ready, creative for gifting and delivery cut-offs, and audiences built from autumn visitors.',
          'Through the peak we watch spend daily, move budget to products that are in stock and selling, and switch messages to Boxing Day and January offers as soon as Christmas delivery closes. When you choose an ecommerce Meta ads agency for the season, ask how it handled last year’s peak and what it changed afterwards.',
        ],
      },
    ],
    related: [
      linkMeta,
      linkFb,
      linkCompare,
      { label: 'Shopify agency for UK online shops', href: '/uk/shopify-agency/' },
      { label: 'Ecommerce PPC agency for Google Shopping in the UK', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'ROAS calculator for break-even targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce Meta ads agency do?', a: 'It runs Facebook and Instagram ads for an online shop. That means catalogue and product feed health, Advantage+ and dynamic product ad campaigns, creative testing with UGC, Conversions API tracking and reporting on sales after returns. The work is judged on money kept, not likes or reach, and the ad account stays in your name.' },
      { q: 'How much does an ecommerce Meta ads agency cost?', a: 'It depends on catalogue size, how much feed and tracking work is needed, how many creative tests run each month and whether we brief creators. We quote a monthly management fee in GBP after a free audit, with the scope set out in writing. Ad spend is separate and paid directly to Meta from your own account.' },
      { q: 'Are Advantage+ sales campaigns worth using?', a: 'Often, once the account has steady purchase data and a healthy catalogue. They can find buyers efficiently, but they also spend on existing customers and recent visitors. We limit existing-customer spend where possible and compare results with a simpler campaign, so you can see what Advantage+ adds rather than trusting its own report.' },
      { q: 'Why does my ROAS in Ads Manager not match my bank balance?', a: 'Ads Manager counts purchases at checkout and uses its own attribution windows. It does not subtract returns, cancelled Klarna or Clearpay orders or failed payments, and it may claim sales that other channels also claim. We reconcile Meta’s numbers with store orders net of refunds each month and set targets on that figure.' },
      { q: 'Do I need UGC to run Meta ads for my shop?', a: 'Not always, but it helps most products. Short phone-shot videos of real people using the item tend to look at home in Reels and Stories. We brief creators, test hooks and compare UGC with product video and static ads, so the account learns which style sells your range.' },
      { q: 'Will my catalogue and pixel stay in my name?', a: 'Yes. Your business portfolio, ad account, catalogue, pixel and Page belong to your business, and we work through agency access. Ad spend is billed by Meta to your own card. If you stop working with us, every asset, audience and piece of data stays with you.' },
      { q: 'Do you have a UK office?', a: 'Yes. Our London office in E18 is open for meetings by appointment, and most delivery is done by our Chennai head-office team. India is 4.5 to 5.5 hours ahead of the UK depending on the season, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────── M: Meta ads agency (UK) ─────────────────────────
  {
    slug: 'uk/meta-ads-agency',
    kind: 'global',
    market: 'UK',
    twin: 'meta-ads-agency',
    title: 'Meta Ads Agency UK: Facebook, Instagram & WhatsApp',
    description: 'Meta ads agency for UK brands: Facebook, Instagram Reels and Stories, Messenger and WhatsApp ads, Conversions API and a clean Business Suite set-up. In GBP.',
    primaryKeyword: 'Meta ads agency',
    navLabel: 'Meta Ads Agency UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Facebook · Instagram · Messenger · WhatsApp · Conversions API',
    h1: 'Meta Ads Agency for UK Brands Using *the Whole Platform*',
    intro: 'Billion Ecommerce Agency is a Meta ads agency for UK brands that want more than a boosted post. We plan campaigns across Facebook, Instagram Reels, Stories and Explore, Messenger and WhatsApp click-to-chat, set up Conversions API and Events Manager properly, and tidy your Meta Business Suite so your company owns every asset. Our management fee is quoted in GBP after a free audit.',
    icon: 'social',
    facts: ['Business assets stay in your name', 'Conversions API set up and checked', 'London meetings by appointment'],
    headings: {
      pains: 'Where UK brands lose out on Meta',
      includes: 'What our Meta advertising service covers',
      process: 'How we sort out and run your Meta accounts in *4 steps*',
      guide: 'Advertising across Meta’s apps: a practical guide for UK brands',
    },
    pains: [
      { title: 'Assets scattered across personal logins', body: 'The Page was made by a former employee, Instagram is tied to someone’s personal profile and the ad account sits in a freelancer’s business portfolio. One departure can lock you out of years of data.' },
      { title: 'Instagram treated as an afterthought', body: 'Square feed images get cropped into Reels and Stories, text hides behind the app’s buttons and nobody checks Instagram comments. Budget drifts to placements where the ads look wrong.' },
      { title: 'Events Manager full of warnings', body: 'Duplicate purchase events, no Conversions API, low match quality and tags that ignore cookie choices. Meta optimises on whatever data it gets, so poor data means poor delivery.' },
    ],
    includes: [
      { title: 'Meta Business Suite set-up', body: 'A business portfolio in your company’s name, with the Page, Instagram account, ad account, pixel and catalogue connected to it, two-factor sign-in for admins and agency access for us.' },
      { title: 'Account structure', body: 'Campaigns grouped by goal and audience stage rather than by placement, clear naming and budgets large enough for Meta to learn, instead of dozens of tiny ad sets.' },
      { title: 'Conversions API and Events Manager', body: 'Server-side events alongside the pixel, deduplicated by event ID, match quality checked, and tags connected to your cookie banner so each visitor’s choice is respected.' },
      { title: 'Instagram Reels, Stories and Explore', body: 'Each idea produced in vertical, square and feed versions, with placement asset customisation so the right file shows in the right spot.' },
      { title: 'Messenger and WhatsApp click-to-chat ads', body: 'Chat campaigns for products and services where buyers ask before they buy, with greeting messages, quick replies and an agreed response plan for your team.' },
      { title: 'Advantage+ campaigns, used with care', body: 'Advantage+ audience, placements and creative switched on in stages, with a manual comparison running so you can see what automation adds.' },
      { title: 'Reporting by app and placement', body: 'Monthly reports in GBP that show results for Facebook, Instagram and chat separately, measured against your own sales or lead records.' },
    ],
    platforms: ['Meta Business Suite', 'Ads Manager', 'Events Manager', 'Conversions API', 'Instagram', 'Messenger', 'WhatsApp Business'],
    process: [
      { title: 'Access and asset audit', body: 'We map who owns each Page, profile, ad account, pixel and catalogue, review Events Manager and campaign set-up, and talk it through on a video call or at our London office.' },
      { title: 'Structure plan and GBP quote', body: 'A written plan for ownership fixes, tracking, campaign structure and placements, with a monthly management fee in GBP. Ad spend is paid by you directly to Meta.' },
      { title: 'Rebuild tracking, then campaigns', body: 'Business portfolio and Conversions API first, then campaigns and creative for each placement, keeping anything that already performs running.' },
      { title: 'Monthly review across apps', body: 'Weekly changes to budgets and creative, and a monthly review of results by app and placement, with the next tests agreed together.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'Everything a single Meta ad account can reach, and the foundations it needs.', after: 0, center: 'The Meta platform', branches: [
        { label: 'Facebook', items: ['Feed and Marketplace', 'Reels and Stories'] },
        { label: 'Instagram', items: ['Reels and Stories', 'Explore and feed'] },
        { label: 'Messaging', items: ['Click-to-Messenger ads', 'WhatsApp click-to-chat'] },
        { label: 'Foundations', items: ['Business Suite set-up', 'Conversions API'] },
      ] },
      { type: 'venn', caption: 'Why the pixel and Conversions API work better together than either does alone.', after: 2, left: { title: 'Meta pixel', body: 'Browser events; missed when tracking is blocked or declined' }, right: { title: 'Conversions API', body: 'Server events sent from your store or tag server' }, overlap: 'Deduplicated by event ID' },
      { type: 'steps', caption: 'The order we use to put a UK company’s Meta assets under its own control.', after: 1, steps: [
        { title: 'Claim portfolio', body: 'Created in the company’s name' },
        { title: 'Add Page and Insta', body: 'Linked to the portfolio, not a person' },
        { title: 'Connect ad account', body: 'Billed to a company card' },
        { title: 'Add pixel and data', body: 'Pixel, catalogue and Conversions API' },
        { title: 'Grant our access', body: 'Agency access, never ownership' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Meta ads agency covers beyond Facebook',
        paragraphs: [
          'Meta is no longer one app. A single ad account can reach people in the Facebook feed, Instagram Reels, Stories and Explore, Messenger, and WhatsApp through click-to-chat ads, plus apps in the Audience Network. A Meta ads agency should plan across all of these, decide which placements suit your offer, and build the plumbing underneath: business assets, tracking and account structure.',
          'This page covers the whole platform for UK brands, including shops, service firms and B2B companies. If you mainly need catalogue campaigns for an online shop or lead forms for a local service, the related pages go deeper on those. Whatever the focus, your assets stay in your name, ad spend goes to Meta from your own account and our fee is quoted in GBP after a free audit.',
        ],
      },
      {
        heading: 'Meta Business Suite set-up and account structure',
        paragraphs: [
          'Many UK businesses discover that their Facebook Page was created by a former employee, the Instagram account is linked to someone’s personal profile, and the ad account sits inside a freelancer’s business portfolio. Untangling this comes first. We help you create or claim a business portfolio (previously Business Manager) in the company’s name, then connect the Page, Instagram account, ad account, pixel and catalogue to it.',
          'Account structure follows. Fewer campaigns with larger budgets usually learn faster than dozens of tiny ad sets, so we group by goal and audience stage rather than by placement. Clear naming, billing on a company card and two-factor sign-in for every admin are small things that save real trouble later.',
        ],
        bullets: [
          'Business portfolio in the company name, with at least two admins',
          'Page and Instagram account connected to the portfolio, not a person',
          'Pixel and catalogue owned by the portfolio',
          'Agency access granted to us, never ownership',
        ],
      },
      {
        heading: 'Conversions API, Events Manager and UK consent',
        paragraphs: [
          'The Meta pixel runs in the browser, so ad blockers, privacy settings and declined cookies all reduce what it sees. Conversions API sends the same events from your server or store platform, and Events Manager deduplicates the two using an event ID. Set up properly, Meta receives more complete data on purchases, leads and sign-ups, and the event match quality score improves.',
          'Consent still applies. Under PECR, non-essential tracking such as the pixel needs a visitor’s agreement first, and UK GDPR governs any personal data you share, including hashed emails sent through Conversions API or uploaded as custom audiences. Meta’s terms also expect you to have whatever consent the law requires. We wire your cookie banner so tags respect each choice. We are not lawyers, so have your privacy notice checked by your own adviser.',
        ],
      },
      {
        heading: 'Instagram Reels, Stories and Explore: creative for each placement',
        paragraphs: [
          'Instagram is where many UK audiences spend their Meta time, yet plenty of accounts still run square feed images cropped into a vertical frame. Reels and Stories need full-screen vertical video with the message in the first seconds and text kept clear of the app’s buttons. Explore suits strong visuals that make sense without sound.',
          'We prepare each concept in vertical, square and feed versions, use placement asset customisation so the right file shows in the right spot, and watch comments on Instagram as closely as on Facebook. Reporting breaks results down by placement, so you can see whether Reels is bringing new customers or just cheap views.',
        ],
      },
      {
        heading: 'Messenger and WhatsApp click-to-chat ads',
        paragraphs: [
          'Some buyers want to ask a question before they commit. Click-to-Messenger and click-to-WhatsApp ads open a chat instead of a landing page, which suits made-to-order products, appointments, B2B enquiries and higher-priced items. WhatsApp is part of daily life for many people in the UK, and a chat feels more personal than a form.',
          'Chat ads only work if someone answers. We set up greeting messages and quick replies, agree who on your team responds and how fast, and track the conversations that turn into sales or bookings. A Meta ads agency that runs chat campaigns without a response plan is buying conversations nobody picks up.',
        ],
      },
      {
        heading: 'Advantage+ campaigns: when to hand Meta the controls',
        paragraphs: [
          'Advantage+ options let Meta choose audiences, placements and creative combinations automatically. With enough conversion data they often beat manual set-ups; with thin data or poor tracking they spend confidently in the wrong places. We switch them on in stages, keep a manual comparison running and use audience controls to stop budget drifting to existing customers.',
          'Seasons and rules matter for UK brands. Costs rise from Black Friday to Boxing Day as retailers compete for attention, then shift again in the January sales. Ads should show VAT-inclusive prices in pounds, and any health or beauty claims must follow the ASA and CAP codes. Meta also limits targeting for special ad categories such as housing, employment, credit and politics, so those campaigns need a different plan. A good Meta ads agency plans for these limits before launch, not after a rejected ad.',
        ],
      },
    ],
    related: [
      linkEcom,
      linkFb,
      linkCompare,
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'PPC agency in London for Google search ads', href: '/london/ppc-agency/' },
    ],
    faqs: [
      { q: 'What does a Meta ads agency do?', a: 'It plans and runs advertising across Meta’s apps: Facebook, Instagram, Messenger and WhatsApp. That includes setting up Meta Business Suite and a business portfolio, installing the pixel and Conversions API, structuring campaigns, producing creative for each placement and reporting results against your sales or leads. Your assets should stay in your name throughout.' },
      { q: 'How much does a Meta ads agency charge?', a: 'Fees depend on how many apps and placements you use, the amount of tracking and set-up work, creative volume and how often campaigns change. We quote a monthly management fee in GBP after a free audit, with the scope in writing. Your ad spend is separate and goes directly to Meta from your own account.' },
      { q: 'Do I need Conversions API if I already have the pixel?', a: 'In most cases, yes. The pixel misses events when browsers block it or visitors decline cookies, while Conversions API sends events from your server or store platform. Used together with deduplication in Events Manager, they give Meta more complete data. Consent rules still apply to both, so your cookie banner must be connected properly.' },
      { q: 'Should we advertise on Instagram, Facebook or both?', a: 'Usually both, from the same campaigns, with creative made for each placement. Meta shifts budget towards placements that perform, but only if the ads look right there. We prepare vertical video for Reels and Stories, square and feed versions for Facebook, and report results by placement so you can see where customers come from.' },
      { q: 'Are WhatsApp click-to-chat ads worth it in the UK?', a: 'They suit products and services where buyers want to ask questions first, such as made-to-order goods, appointments and B2B enquiries. They only pay off if someone replies quickly. We set up greeting messages and quick replies, agree response times with your team and track which chats turn into sales.' },
      { q: 'Who owns the business portfolio and ad account?', a: 'You do. We help you create or claim a business portfolio in your company’s name and connect your Page, Instagram account, ad account, pixel and catalogue to it. We work through agency access. Ad spend is billed by Meta to your own card, and everything stays with you if you leave.' },
      { q: 'How do you work with UK clients from Chennai?', a: 'Our London office in E18 hosts meetings by appointment, and most delivery happens at our Chennai head office. India runs 4.5 hours ahead of UK summer time and 5.5 hours ahead in winter, so our day covers the UK morning and early afternoon. Requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────── F: Facebook ads agency (UK) ─────────────────────────
  {
    slug: 'uk/facebook-ads-agency',
    kind: 'global',
    market: 'UK',
    twin: 'facebook-ads-agency',
    title: 'Facebook Ads Agency UK for Leads & Local Services',
    description: 'Facebook ads agency for UK service and local businesses: lead ads and instant forms, Marketplace and Reels placements, lead quality checks. Quoted in GBP.',
    primaryKeyword: 'Facebook ads agency',
    navLabel: 'Facebook Ads Agency UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Lead ads · Instant forms · Marketplace · Local audiences',
    h1: 'Facebook Ads Agency for UK Businesses That Need *Real Leads*',
    intro: 'Billion Ecommerce Agency is a Facebook ads agency for UK businesses that sell a service or serve a local area: clinics, trades, studios, tutors and showrooms. We build lead ads and instant forms, choose placements across Feed, Marketplace and Reels, and track which leads become customers so campaigns are judged on real bookings, not form fills. Our fee is quoted in GBP after a free audit.',
    icon: 'social',
    facts: ['Leads judged on real customers', 'Ad comments and Page kept tidy', 'Same-day replies before UK lunch'],
    headings: {
      pains: 'Why Facebook leads disappoint UK service businesses',
      includes: 'What our Facebook lead generation service covers',
      process: 'From first form to qualified leads in *4 steps*',
      guide: 'Facebook ads for leads: a guide for UK service and local businesses',
    },
    pains: [
      { title: 'Cheap leads that never answer the phone', body: 'The form is so easy that people submit it by accident or out of idle curiosity. Cost per lead looks great in Ads Manager, while your team wastes hours calling numbers that never pick up.' },
      { title: 'Ads shown far beyond the area you cover', body: 'Broad location settings reach people passing through or living miles away. You pay for enquiries from towns you cannot serve and have to turn them away.' },
      { title: 'Comment sections nobody watches', body: 'Spam, unanswered questions and the odd complaint sit under your ads for days. The next person who scrolls past reads them before they read your offer.' },
    ],
    includes: [
      { title: 'Lead ads and instant forms', body: 'Higher intent forms with a review screen, two or three multiple-choice qualifying questions and a thank-you screen with a call button or booking link.' },
      { title: 'Placements that suit your offer', body: 'Facebook Feed, Marketplace, Reels and Stories tested with creative made for each, then budget moved towards the placements that produce booked jobs.' },
      { title: 'Local audiences', body: 'Radius targeting around your postcode or a list of towns, areas you do not cover excluded, and people living there targeted rather than visitors passing through.' },
      { title: 'Lead quality without a CRM', body: 'A shared spreadsheet of lead outcomes, uploaded to Events Manager each week, so you can judge campaigns on real customers rather than form fills.' },
      { title: 'Fast lead alerts', body: 'Instant email notifications for new leads and a simple follow-up routine, because an enquiry called back quickly is far more likely to book.' },
      { title: 'Page and comment moderation', body: 'Comments on active ads checked, spam and abuse hidden, simple questions answered with wording you approve and complaints passed to you the same day.' },
    ],
    platforms: ['Facebook Ads Manager', 'Instant forms', 'Events Manager', 'Facebook Page', 'Meta Business Suite', 'Google Sheets'],
    process: [
      { title: 'Free account and lead audit', body: 'We review your forms, audiences, placements and recent leads, and ask how many became customers. You get the findings on a video call or at our London office.' },
      { title: 'Plan and GBP quote', body: 'A written plan for forms, areas, placements, creative and lead tracking, with a monthly management fee in GBP. Ad spend is paid by you directly to Meta.' },
      { title: 'Launch forms and placements', body: 'New instant forms, local audiences and creative go live, with lead alerts and the outcome spreadsheet set up on day one.' },
      { title: 'Weekly lead review', body: 'Each week we upload outcomes, check cost per qualified lead by placement and adjust budgets, forms and creative. A monthly report in GBP follows.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four things that decide whether Facebook brings enquiries you can turn into jobs.', after: 0, center: 'Facebook ads for leads', branches: [
        { label: 'Forms', items: ['Higher intent instant forms', 'Qualifying questions'] },
        { label: 'Placements', items: ['Feed and Marketplace', 'Reels and Stories'] },
        { label: 'Audiences', items: ['Radius around postcodes', 'Areas you skip excluded'] },
        { label: 'Lead quality', items: ['Outcomes tracked weekly', 'Fast follow-up'] },
      ] },
      { type: 'matrix', caption: 'Which instant form type to choose for the kind of job you sell.', after: 1, cols: ['More volume form', 'Higher intent form'], rows: ['Simple, low-cost service', 'Big-ticket or booked job'], cells: [
        { title: 'Good fit', body: 'Quick forms suit taster offers and simple bookings' },
        { title: 'Often overkill', body: 'The extra review step can cut leads you could handle' },
        { title: 'Expect junk', body: 'Easy forms bring casual sign-ups; call back fast' },
        { title: 'Good fit', body: 'A review screen and questions filter out casual clicks' },
      ] },
      { type: 'steps', caption: 'How lead outcomes move from your spreadsheet into campaign decisions each week.', after: 4, steps: [
        { title: 'Mark outcomes', body: 'Booked, sold, not interested, no answer' },
        { title: 'Export weekly', body: 'Lead ID, date and outcome' },
        { title: 'Upload', body: 'Offline events in Events Manager' },
        { title: 'Judge campaigns', body: 'On leads that became jobs' },
      ] },
    ],
    guide: [
      {
        heading: 'When a Facebook ads agency makes sense for a UK business',
        paragraphs: [
          'Facebook still reaches a broad UK audience, including older customers and local community groups that are less active on Instagram. For businesses that sell a service or serve a defined area, such as dental and aesthetics clinics, tradespeople, driving schools, gyms, tutors and furniture showrooms, it is often the most practical place to find enquiries.',
          'A Facebook ads agency doing this kind of work should be judged on lead quality, not on clicks or cost per form. A cheap lead that never answers the phone is not a bargain. This page focuses on lead ads, placements, local audiences and the follow-up that turns forms into booked jobs. For online shops selling products, our catalogue ads page covers that work instead.',
        ],
      },
      {
        heading: 'Lead ads and instant forms that filter as well as collect',
        paragraphs: [
          'Lead ads let people enquire without leaving Facebook, using an instant form pre-filled with their name, email and phone number. That convenience is also the problem: it is easy to submit by accident or out of idle curiosity. Instant forms come in a "more volume" type and a "higher intent" type, which adds a review screen before submitting. For most service businesses, higher intent is the better default.',
          'Good forms ask two or three qualifying questions, such as postcode, timeframe or budget band, using multiple choice rather than open text. The intro screen should say plainly what happens next and who will call. A short, honest form gets fewer leads, but far more of them pick up the phone.',
        ],
        bullets: [
          'Higher intent form type with a review screen',
          'Two or three multiple-choice qualifying questions',
          'A thank-you screen with a call button or booking link',
        ],
      },
      {
        heading: 'Placements: Feed, Marketplace, Reels and Stories',
        paragraphs: [
          'Facebook Feed remains the main placement for lead ads, because people scroll slowly enough to read an offer. Marketplace placements suit products and local services people already browse for there, such as furniture, cars, home improvements and removals. Reels and Stories reach people who watch rather than read, so they need short vertical video showing the person or team who will do the job.',
          'We start with automatic placements, then compare lead quality by placement after a few weeks, not cost per lead alone. If Reels brings cheap forms that never convert, we trim it. If Marketplace brings fewer but better enquiries, it gets more budget.',
        ],
      },
      {
        heading: 'Local audiences for service businesses',
        paragraphs: [
          'Most service businesses only want customers within reach. We target a radius around your postcode or a list of towns, exclude areas you do not cover and choose people living in the location rather than people who happen to pass through. Broad targeting inside that area often works well, because the form and creative do the filtering.',
          'Some sectors fall under Meta’s special ad categories, including housing, employment, credit and political or social issues. These limit options such as age, gender and small-radius location targeting, so estate agents, recruiters and finance brokers need a different plan. A Facebook ads agency should spot this before launch, not after an ad is rejected.',
        ],
      },
      {
        heading: 'Lead quality: feeding outcomes back without a CRM',
        paragraphs: [
          'Facebook optimises towards whatever you tell it is a success. If that is any submitted form, it will find more people who submit forms, including the ones who never answer. The first fix is to know which leads became customers. You do not need a CRM for this: a shared spreadsheet with the lead ID, date and outcome is enough to start.',
          'Each week the outcomes are uploaded to Events Manager, so you can judge each campaign, form and placement on real customers rather than raw volume. An upload alone does not make Meta optimise for quality leads. That needs a supported connection, such as Conversions API or an integration with your systems, which is worth setting up once lead volume justifies it. This is where a good Facebook ads agency earns its fee. We also set up instant email alerts for new leads, because speed matters: an enquiry called back within minutes is far more likely to book than one called the next day.',
        ],
        bullets: [
          'Mark each lead: booked, sold, not interested or no answer',
          'Upload outcomes weekly from the spreadsheet',
          'Review cost per qualified lead, not cost per form',
        ],
      },
      {
        heading: 'Page moderation, consent and UK rules',
        paragraphs: [
          'Ads attract comments, and an unanswered complaint or a string of spam under your ad puts off the next reader. We monitor comments on active ads, hide spam and abuse, answer simple questions and pass anything sensitive to you. Your Facebook Page also needs to look alive, with recent posts, reviews and correct opening hours, because people check it before they enquire.',
          'Leads are personal data. Under UK GDPR your form needs a link to your privacy notice and a clear statement of how you will contact people, and PECR covers the marketing emails and texts you send afterwards. If the Meta pixel runs on your website, it should load only after cookie consent. Claims by clinics and health services must also follow the ASA and CAP codes. We are not lawyers, so check your wording with your own adviser.',
        ],
      },
    ],
    related: [
      linkEcom,
      linkMeta,
      linkCompare,
      { label: 'PPC agency in London for local search ads', href: '/london/ppc-agency/' },
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'What does a Facebook ads agency do for a service business?', a: 'It plans and runs Facebook campaigns that bring in enquiries: lead ads and instant forms, placements across Feed, Marketplace, Reels and Stories, local audiences and creative. A good agency also tracks which leads turn into customers, judges campaigns on those customers, and keeps your Page and ad comments in order.' },
      { q: 'How much does a Facebook ads agency cost in the UK?', a: 'It depends on how many services and areas you advertise, how much form and tracking set-up is needed, creative volume and whether we handle comment moderation. We quote a monthly fee in GBP after a free audit, with the scope in writing. Ad spend is separate and paid straight to Meta from your own ad account.' },
      { q: 'Why are my Facebook leads such poor quality?', a: 'Usually because the form is too easy and Facebook is optimising for any submission. Switching to a higher intent form, adding two or three qualifying questions and judging campaigns on which leads became customers all help. Fast follow-up matters too: leads called back quickly are much more likely to book.' },
      { q: 'Do I need a CRM to track lead quality?', a: 'No. A shared spreadsheet with each lead’s ID, date and outcome is enough to start. Each week we upload the outcomes to Events Manager so campaigns are judged on real customers. Optimising towards converted leads needs Conversions API or an integration, which we set up once volume justifies it.' },
      { q: 'Should my ads run on Facebook Marketplace?', a: 'It depends on what you sell. Marketplace suits furniture, vehicles, home improvement and other things people already browse for there. For other offers it can bring cheap but casual enquiries. We start broad, then compare lead quality by placement and move budget towards the placements that produce booked jobs.' },
      { q: 'Can you manage comments on our ads and Page?', a: 'Yes. We monitor comments on active ads, hide spam and abusive posts, answer straightforward questions using wording you approve and pass complaints or anything sensitive to you the same day. We also suggest simple Page updates, such as opening hours and recent posts, because people check your Page before they enquire.' },
      { q: 'How quickly do you respond to UK clients?', a: 'Our Chennai team works 4.5 to 5.5 hours ahead of the UK, so our day overlaps the UK morning and early afternoon. Requests sent before UK lunchtime are usually handled the same day. If you would rather meet in person, our London office in E18 is available by appointment.' },
    ],
  },

  // ───────────────────────── A: Facebook advertising agencies (UK) ─────────────────────────
  {
    slug: 'uk/facebook-advertising-agencies',
    kind: 'global',
    market: 'UK',
    twin: 'facebook-advertising-agencies',
    title: 'Facebook Advertising Agencies UK: How to Compare',
    description: 'Comparing Facebook advertising agencies in the UK? Agency types, questions to ask, red flags, what a proper audit shows and why accounts must stay in your name.',
    primaryKeyword: 'Facebook advertising agencies',
    navLabel: 'Facebook Advertising Agencies UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Agency types · Questions to ask · Red flags · Audits · Ownership',
    h1: 'Facebook Advertising Agencies in the UK: *How to Choose* Well',
    intro: 'Comparing Facebook advertising agencies in the UK is hard when every proposal promises growth. This page explains the types of agency you will meet, the questions worth asking, the red flags, what a proper audit should show and how contracts should handle account ownership. Then it sets out how Billion Ecommerce Agency works, with a London office, a Chennai delivery team and a GBP quote after a free audit.',
    icon: 'social',
    facts: ['Free audit, no obligation', 'Accounts stay in your name', 'Written quote in GBP'],
    headings: {
      pains: 'Why choosing a Facebook ad agency is so hard',
      includes: 'What you get if you choose Billion Ecommerce Agency',
      process: 'How working with us starts, in *4 steps*',
      guide: 'How to compare Facebook advertising agencies in the UK',
    },
    pains: [
      { title: 'Proposals that all sound the same', body: 'Every deck mentions creative, targeting and scaling. Without a common yardstick it is hard to tell a careful operator from a confident salesperson.' },
      { title: 'Locked out after leaving', body: 'Some businesses find the ad account, pixel or Page was set up in the agency’s name. When the relationship ends, years of audiences and data go with it.' },
      { title: 'Reports that hide what you paid for', body: 'Screenshots of reach, likes and Ads Manager ROAS look busy, but they rarely match the orders or bookings in your own records.' },
    ],
    includes: [
      { title: 'A written audit you keep', body: 'Ownership, tracking, structure, creative and a comparison of Meta’s figures with your own records, with fixes in priority order. It is yours whether or not you hire us.' },
      { title: 'Ownership from day one', body: 'Business portfolio, ad account, pixel, catalogue and Page in your company’s name. We work through agency access, and ad spend is billed by Meta to your own card.' },
      { title: 'A quote with clear scope', body: 'A written quote in GBP listing what is included, what is not, the reporting rhythm and notice terms, so you can compare it line by line with other proposals.' },
      { title: 'Named people and response times', body: 'You know who runs your account each week. Requests sent before UK lunchtime are usually handled the same day by our Chennai team.' },
      { title: 'Reporting against your numbers', body: 'Monthly reports in GBP that compare Meta’s figures with your orders or leads, with VAT separated out so margins are clear.' },
      { title: 'A clean exit if you leave', body: 'Handover notes, creative files and campaign history stay with you. You remove our access and keep everything, including audiences and pixel history.' },
    ],
    platforms: ['Meta Business Suite', 'Ads Manager', 'Events Manager', 'Conversions API'],
    process: [
      { title: 'Short call', body: 'A video call or a meeting at our London office to understand your business, goals and what has and has not worked on Meta so far.' },
      { title: 'Free audit', body: 'With read-only access we review ownership, tracking, structure and creative, and compare reported results with your records. You keep the written findings.' },
      { title: 'Written GBP quote', body: 'Scope, exclusions, reporting and notice terms in writing, with the management fee in GBP. Ad spend stays separate and goes to Meta from your account.' },
      { title: 'Onboarding and first tests', body: 'Ownership and tracking fixes first, then a test plan for audiences, offers and creative, reviewed with you at the end of the first month.' },
    ],
    figures: [
      { type: 'matrix', caption: 'The four broad kinds of Facebook ad provider, by team size and scope of work.', after: 0, cols: ['Ads only', 'Ads plus site and SEO'], rows: ['One person', 'A team'], cells: [
        { title: 'Freelancer', body: 'Direct contact; limited cover for holidays and peaks' },
        { title: 'All-round solo', body: 'Does a bit of everything; depth on Meta varies' },
        { title: 'Specialist agency', body: 'Paid social focus; ask who runs your account day to day' },
        { title: 'Full-service firm', body: 'Ads, site and SEO together; check their Meta depth' },
      ] },
      { type: 'steps', caption: 'What a proper Facebook ads audit checks, in the order it should check it.', after: 3, steps: [
        { title: 'Ownership', body: 'Who owns the portfolio, pixel and Page' },
        { title: 'Tracking', body: 'Pixel, Conversions API, consent' },
        { title: 'Structure', body: 'Overlap, budgets, learning phase' },
        { title: 'Creative', body: 'Age, fatigue and formats' },
        { title: 'Money', body: 'Meta figures against your records' },
      ] },
      { type: 'venn', caption: 'How ownership should be split between your business and any agency you hire.', after: 4, left: { title: 'Yours', body: 'Business portfolio, ad account, pixel, Page and data' }, right: { title: 'The agency’s', body: 'Its working time, methods and templates' }, overlap: 'Shared access that ends cleanly' },
    ],
    guide: [
      {
        heading: 'Types of Facebook advertising agencies',
        paragraphs: [
          'When people search for Facebook advertising agencies in the UK, they find very different businesses under the same label. Knowing which type you are talking to makes proposals far easier to compare.',
          'None of these is right for everyone. A shop with a modest budget may get more from a capable freelancer than from a large agency where the account is handed to a junior. A brand with a heavy creative workload may need a team. The question is fit, not size.',
        ],
        bullets: [
          'Freelancers: one person running your account directly. Close contact and often flexible, but limited cover for holidays, illness and busy peaks.',
          'Specialist paid social agencies: teams focused on Meta and sometimes TikTok. Depth on the platform, but check who handles your account day to day.',
          'Full-service agencies: ads alongside websites, SEO and email. Joined-up planning, though Meta expertise varies from team to team.',
          'In-house: hiring your own media buyer. Full control and product knowledge, but one person carries all the learning and needs support on creative and tracking.',
        ],
      },
      {
        heading: 'How to compare Facebook advertising agencies fairly',
        paragraphs: [
          'Proposals from Facebook advertising agencies are hard to compare because each one describes the work differently. Put them side by side on the same points: who will actually run the account, how often they make changes, what they report and against which numbers, what creative they produce or expect from you, and how tracking will be set up. A proposal that cannot answer these clearly is a warning in itself.',
          'Judge results against your own figures. An agency should talk about sales, qualified leads, cost per acquisition and profit after returns, not reach, likes or a ROAS figure lifted from Ads Manager without question. For UK businesses, also ask how they plan for the stretch from Black Friday to Boxing Day and for the January sales, when costs and competition change sharply.',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        paragraphs: [
          'A short call with each agency on your shortlist should cover the points below. Good agencies answer without hesitation; vague answers tell you a lot.',
        ],
        bullets: [
          'Who owns the business portfolio, ad account, pixel and Page, and in whose name will anything new be created?',
          'Who will run our account each week, and who covers when they are away?',
          'What does your audit check first, and what will you change in the first month?',
          'How do you set up Conversions API and respect cookie consent under UK GDPR and PECR?',
          'How do you report, in which currency and against which of our numbers?',
          'What is the notice period, and what do we receive when we leave?',
        ],
      },
      {
        heading: 'What a proper Facebook ads audit looks like',
        paragraphs: [
          'A free audit is a useful test of an agency, because it shows how they think before you pay anything. A proper audit starts with access and ownership, then tracking: whether the pixel and Conversions API both fire, whether events are deduplicated and whether cookie choices are respected. Only after that does it look at campaign structure, audience overlap, budgets, creative age and fatigue.',
          'Most importantly, a real audit compares what Meta reports with what your shop or sales team actually recorded. If the audit is a few screenshots and a list of generic tips, or if it promises results before anyone has studied your data, treat the agency with caution.',
        ],
      },
      {
        heading: 'Red flags, contracts and account ownership',
        paragraphs: [
          'Some warning signs are easy to spot. Be wary of agencies that ask you to pay ad spend through them without showing Meta invoices, run your ads from an ad account they own, refuse to share access, promise fixed results or a set ROAS, or lock you into a long contract before any work has been done. Claims about special status with Meta are worth checking rather than taking on trust.',
          'Contracts should state the scope, reporting rhythm, notice period, who owns creative produced for you and what happens to accounts and data at the end. The simplest rule is that every Meta asset sits in your business portfolio and the agency is added with agency access. If you leave, you remove their access and keep everything, including audiences, pixel history and past campaigns. We are not lawyers, so have any contract you are unsure about reviewed by your own adviser.',
        ],
      },
      {
        heading: 'How Billion Ecommerce Agency works with UK businesses',
        paragraphs: [
          'We are one of many Facebook advertising agencies you could choose, so here is plainly how we work. Your business portfolio, ad account, pixel and Page stay in your name, and ad spend is paid directly to Meta from your own card. We start with a free audit, then send a written quote in GBP that lists scope, exclusions, reporting and notice terms.',
          'Our London office in E18 hosts meetings by appointment, and most delivery is done by our Chennai head-office team. India is 4.5 to 5.5 hours ahead of the UK, so our day overlaps the UK morning and early afternoon, and requests sent before UK lunchtime are usually handled the same day. Reports are in GBP, with VAT separated out so your margins are clear.',
        ],
      },
    ],
    related: [
      linkEcom,
      linkMeta,
      linkFb,
      { label: 'Ecommerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Ecommerce PPC agency for UK retailers', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'ROAS calculator to sense-check agency targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What types of Facebook advertising agencies are there?', a: 'Broadly four: freelancers who run accounts themselves, specialist paid social agencies, full-service agencies that also handle websites and SEO, and in-house hires. Each suits different budgets and workloads. Compare them on who actually runs your account, how they track results, what creative they provide and whether every asset stays in your name.' },
      { q: 'How much do Facebook advertising agencies charge?', a: 'Fees vary with scope: how many campaigns and placements, creative volume, tracking work, reporting depth and how often accounts change. Ask every agency for a written quote listing scope and exclusions, and keep ad spend separate. We quote a monthly fee in GBP after a free audit, and you pay Meta directly for ad spend.' },
      { q: 'What questions should I ask an agency before signing?', a: 'Ask who owns the ad account, pixel and business portfolio, who runs your account each week, what the audit checks first, how they handle Conversions API and cookie consent, how they report and against which of your numbers, and what the notice period is. Clear, specific answers are a good sign.' },
      { q: 'What are the red flags when choosing an agency?', a: 'Running your ads from an ad account they own, taking ad spend through them without Meta invoices, refusing to share access, promising fixed results or a set ROAS, long lock-in contracts before any work, and audits that are only screenshots and generic tips. Any of these deserves a direct question before you sign.' },
      { q: 'What should a free Facebook ads audit include?', a: 'Ownership and access first, then tracking: pixel, Conversions API, deduplication and consent. After that, campaign structure, audience overlap, budgets and creative fatigue. A proper audit also compares Meta’s reported sales or leads with your own records, then lists specific fixes in priority order. It should not promise results before anyone has studied your data.' },
      { q: 'Will I keep my ad account if I change agency?', a: 'You should, as long as every asset was created in your business portfolio and the agency only had agency access. Then you simply remove their access. If the agency owns the ad account or pixel, you may lose history and audiences, so check ownership before signing with anyone, including us.' },
      { q: 'Is it a problem that your delivery team is in India?', a: 'It is a fair question. Our London office in E18 is available for meetings by appointment, and the Chennai team works hours that overlap the UK morning and early afternoon. Requests sent before UK lunchtime are usually handled the same day, and work carries on after the UK day ends.' },
    ],
  },
];
