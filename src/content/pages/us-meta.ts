import type { ServicePageData } from '../../data/types';

const usBreadcrumb = [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }];

export const usMetaPages: ServicePageData[] = [
  // ───────────────────────── E: Ecommerce Meta ads agency (US) ─────────────────────────
  {
    slug: 'us/ecommerce-meta-ads-agency',
    kind: 'global',
    market: 'US',
    twin: 'ecommerce-meta-ads-agency',
    title: 'Ecommerce Meta Ads Agency for US Online Stores | Magnus Path',
    description: 'Ecommerce Meta ads agency for US online stores: catalog fixes, Advantage+ sales campaigns, dynamic product ads and UGC tests, judged on profit after returns.',
    primaryKeyword: 'ecommerce Meta ads agency',
    navLabel: 'Ecommerce Meta Ads Agency',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Catalog ads · Advantage+ · UGC testing',
    h1: 'Ecommerce Meta Ads Agency That Starts With Your *Product Catalog*',
    intro: 'Magnus Path is an ecommerce Meta ads agency for US online stores. We start with your product catalog and feed, then run Advantage+ sales campaigns (previously Advantage+ shopping), dynamic product ads and UGC-style creative tests on Facebook and Instagram, and we judge results on profit after returns and refunds, not on the ROAS Meta reports.',
    icon: 'social',
    facts: ['Catalog fixed before scaling', 'Ad account stays in your name', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Why Meta ads stall for US online stores',
      includes: 'What our ecommerce Meta ads management covers',
      process: 'From catalog audit to scaling in *4 steps*',
      guide: 'Running Meta ads for an online store: a practical guide for US founders',
    },
    pains: [
      { title: 'Dynamic ads showing the wrong products', body: 'Out-of-stock items, old prices and blurry images keep appearing in ads because the catalog sync broke months ago and nobody noticed.' },
      { title: 'ROAS that ignores returns', body: 'Meta counts the purchase the moment it happens. Returns, refunds and chargebacks come later, so a campaign can look profitable while it loses money.' },
      { title: 'Creative that wears out in weeks', body: 'The same three product shots run until frequency climbs and results fade, with no steady supply of new hooks, angles or customer videos.' },
    ],
    includes: [
      { title: 'Catalog and feed health', body: 'Your Commerce Manager catalog checked for rejected items, price and stock mismatches, variant grouping and image quality, with a sync that keeps it current.' },
      { title: 'Advantage+ sales campaigns', body: 'Set up with existing-customer caps or exclusions, so the algorithm looks for new buyers instead of re-buying your regulars.' },
      { title: 'Dynamic product ads', body: 'Catalog ads for browsers and cart abandoners plus broad catalog prospecting, with product sets split by margin, category or price band.' },
      { title: 'UGC and creative testing', body: 'A weekly testing plan for hooks, formats and angles: customer videos, creator content, unboxings, comparisons and static offers, with briefs we write.' },
      { title: 'Profit-based reporting', body: 'New-customer revenue, refunds and contribution margin shown next to Meta’s numbers, so budget follows what actually pays.' },
      { title: 'Pixel and Conversions API', body: 'Purchase, add-to-cart and checkout events deduplicated between browser and server, with match quality checked in Events Manager.' },
      { title: 'Shops and product tags', body: 'Facebook and Instagram Shops reviewed against Meta’s current checkout options, and product tags on organic posts kept in sync with the catalog.' },
      { title: 'BFCM and Prime Day plans', body: 'Offers, creative and budgets planned weeks before Black Friday and Cyber Monday, with a separate decision on how to handle Prime Day weeks.' },
    ],
    platforms: ['Meta Ads Manager', 'Commerce Manager', 'Events Manager', 'Conversions API', 'Facebook', 'Instagram', 'Shopify', 'WooCommerce'],
    process: [
      { title: 'Free catalog and account audit', body: 'We review your catalog, Events Manager, campaign history and margins, then walk you through what we found on a call in your morning.' },
      { title: 'Margin targets and USD quote', body: 'We agree break-even ROAS after returns by product group and quote a monthly management fee in USD. You pay ad spend directly to Meta.' },
      { title: 'Feed and tracking fixes', body: 'Catalog errors, product sets, the pixel and the Conversions API are fixed before any budget increase.' },
      { title: 'Launch, test and scale', body: 'Advantage+ and catalog campaigns go live in stages. New creative is tested every week, mostly overnight in US time, with a written change note.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The four things that decide whether Meta ads make money for an online store.', after: 0, center: 'Profitable store on Meta', branches: [
        { label: 'Catalog', items: ['Clean feed, no rejections', 'Product sets by margin', 'Stock and price in sync'] },
        { label: 'Campaigns', items: ['Advantage+ sales', 'Dynamic product ads', 'Existing-customer caps'] },
        { label: 'Creative', items: ['UGC and creator videos', 'New hooks every week', 'Static offer ads'] },
        { label: 'Measurement', items: ['Pixel plus Conversions API', 'Profit after returns', 'New vs repeat buyers'] },
      ] },
      { type: 'matrix', caption: 'Reading a creative test: whether people stop scrolling, and whether they then buy.', after: 3, cols: ['Strong hook rate', 'Weak hook rate'], rows: ['Good cost per purchase', 'Poor cost per purchase'], cells: [
        { title: 'Scale it', body: 'Raise budget and make close variations of the winning hook' },
        { title: 'Fix the opening', body: 'The offer works; test new first three seconds' },
        { title: 'Fix the landing', body: 'People watch but do not buy; check the page and price' },
        { title: 'Retire it', body: 'Pause it and brief a new angle rather than tweak it' },
      ] },
      { type: 'steps', caption: 'A holiday run-up for Meta store ads, planned around Prime Day and Black Friday.', after: 5, steps: [
        { title: 'Book creative', body: 'Creator and UGC briefs out by late summer' },
        { title: 'Clean the catalog', body: 'Sale prices and stock ready in the feed' },
        { title: 'Warm audiences', body: 'Grow engaged viewers before costs rise' },
        { title: 'Run the peak', body: 'Black Friday to Cyber Monday, checked daily' },
        { title: 'Shift messages', body: 'Shipping cut-offs, then gift cards' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ecommerce Meta ads agency does differently',
        paragraphs: [
          'Running Meta ads for an online store is mostly about products, not posts. You are asking Facebook and Instagram to match hundreds of SKUs to shoppers, and the system learns from your catalog, your purchase events and your creative. An ecommerce Meta ads agency spends real time on all three before it touches budgets.',
          'Brand and lead campaigns are judged on reach, clicks or form fills. A store is judged on orders that stick: purchases that are not returned, from customers who come back. That changes how campaigns are built, what gets tested and which numbers appear in the weekly report.',
          'Ownership should be simple. Your ad account, Business portfolio (formerly Business Manager), pixel and catalog stay in your company’s name, with the agency added as a partner. Ad spend is charged by Meta directly to your card, never resold with a markup.',
        ],
      },
      {
        heading: 'Catalog and product feed health come first',
        paragraphs: [
          'Dynamic product ads and Advantage+ campaigns pull images, titles and prices straight from your catalog in Commerce Manager. If the feed is broken, the ads are broken, however good the targeting looks. These issues show up in most store audits:',
        ],
        bullets: [
          'Items rejected for policy reasons or missing fields, quietly removed from delivery',
          'Prices or stock that differ from the product page, causing rejections and annoyed shoppers',
          'Variants such as size and color grouped wrongly, so ads show a color that is sold out',
          'Product images with heavy text or borders that look poor in Reels and Stories',
          'No product sets, so a clearance item and a hero product share one campaign',
          'A daily sync from Shopify or WooCommerce that stopped running after an app change',
        ],
      },
      {
        heading: 'Advantage+ sales campaigns and dynamic product ads',
        paragraphs: [
          'Meta now steers most stores towards Advantage+ sales campaigns, previously called Advantage+ shopping campaigns. They combine prospecting and retargeting and let the algorithm choose audiences and placements. They can work well, with one catch: left alone, they spend heavily on people who already know you.',
          'We set an existing-customer budget cap or exclusion from your customer list, so you can see how much spend goes to new buyers. Catalog campaigns run alongside: people who viewed a product or added it to the cart see those exact items, and broad catalog prospecting shows products to new shoppers who behave like your buyers.',
          'Product sets make both smarter. Split the catalog by margin, price band or category, give high-margin sets more room, and hold low-margin or clearance items to a tighter target. A good ecommerce Meta ads agency will show you the product-set structure, not just campaign names.',
        ],
      },
      {
        heading: 'Creative testing with UGC',
        paragraphs: [
          'On Meta, creative does much of the targeting. The ad itself decides who stops scrolling, so the faster route to new customers is a steady supply of new concepts, not more audience tweaks.',
          'User-generated content often feels more natural in feeds and Reels than polished studio work, because it looks like a recommendation. We brief creators and customers on specific angles: the problem the product solves, an honest comparison, an unboxing, a “why I switched” story. Each concept gets several hooks, since the first three seconds decide most of the result.',
          'Tests follow written rules: a few new concepts each week, enough spend to judge each one, and clear points at which an ad is scaled, reworked or retired. Winners get fresh versions before they wear out.',
        ],
      },
      {
        heading: 'ROAS after returns: measuring profit, not purchases',
        paragraphs: [
          'Meta records a purchase when checkout completes. It never learns that the order was returned, refunded or hit by a chargeback weeks later. In categories such as apparel and footwear, where returns are common, the reported ROAS can sit well above the real one.',
          'Start with break-even ROAS: one divided by your contribution margin after product cost, shipping, payment fees and an allowance for returns. A 40% margin breaks even at a ROAS of 2.5. Then compare Meta’s figures with your store data every week: net revenue after refunds, new versus repeat customers, and blended marketing cost across channels.',
          'None of this works without sound tracking, so an ecommerce Meta ads agency should check it before changing any target. The pixel and the Conversions API should both send purchase events with a shared event ID so Meta can remove duplicates, and match quality should be checked in Events Manager.',
        ],
      },
      {
        heading: 'Privacy, the US calendar and our team in India',
        paragraphs: [
          'US privacy rules are set state by state. California’s CCPA, as amended by the CPRA, lets residents opt out of the sale or sharing of their personal data, and several other states have similar laws. Meta offers a Limited Data Use setting for these states, and its terms forbid sending sensitive data, such as health details, through the pixel. In plain terms: honor opt-outs and keep revealing product names out of event data. We are not lawyers, so have your counsel confirm the details.',
          'Black Friday and Cyber Monday push ad costs up across Meta, and Prime Day, plus Amazon’s fall deal event, competes for the same shoppers’ attention. Plan offers and creative early, build engaged audiences before the peak, and decide in advance whether to compete during Prime Day or hold budget back.',
          'We are a Chennai, India team with no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, or 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your morning, our evening, for calls, and most work happens while the US sleeps, so you wake up to finished tasks. We do not offer support during US business hours.',
        ],
      },
    ],
    related: [
      { label: 'Meta advertising across Facebook, Instagram and WhatsApp (US)', href: '/us/meta-ads-agency/' },
      { label: 'Facebook lead ads and local campaigns for US businesses', href: '/us/facebook-ads-agency/' },
      { label: 'How to compare Facebook ad agencies in the US', href: '/us/facebook-advertising-agencies/' },
      { label: 'Ecommerce PPC agency for Google Shopping in the US', href: '/us/ecommerce-ppc-agency/' },
      { label: 'Shopify Plus agency for US brands', href: '/us/shopify-plus-agency/' },
      { label: 'Free ROAS calculator for ad campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce Meta ads agency do?', a: 'It runs Facebook and Instagram ads for an online store, starting from the product catalog. The work covers feed health, Advantage+ sales and catalog campaigns, dynamic product ads, UGC creative testing, pixel and Conversions API tracking, and reporting on profit after returns rather than only the ROAS Meta shows.' },
      { q: 'How much does ecommerce Meta ads management cost?', a: 'We quote a monthly management fee in USD after a free audit. It depends on catalog size, feed condition, how much creative you need each month, tracking work and your ad spend level. Ad spend is paid by you directly to Meta from your own ad account, separately from our fee.' },
      { q: 'Are Advantage+ sales campaigns good for online stores?', a: 'They often are, once the catalog and tracking are clean. Cap or exclude existing customers so the campaign does not spend mostly on people who would buy anyway, give it plenty of fresh creative, and judge it on new-customer revenue and profit rather than on blended ROAS.' },
      { q: 'Why are my dynamic product ads showing sold-out items?', a: 'Usually the catalog has stopped syncing with your store, or variants are grouped wrongly. Check Commerce Manager for errors, confirm the data feed or platform integration updates at least daily, and make sure stock and price match the product page. Fixing the feed fixes the ads.' },
      { q: 'How do returns affect ROAS on Meta?', a: 'Meta counts a purchase when checkout completes and never sees later returns or refunds. If returns are common in your category, reported ROAS overstates profit. Set targets from your margin after an allowance for returns, and compare Meta’s numbers each week with net revenue in your store.' },
      { q: 'Do you produce UGC and ad creative?', a: 'We write the creative briefs, hooks and scripts, edit footage into ad formats and run the tests. Videos can come from your customers, from creators you hire, or from creators we help you brief. Usage rights for creator content are agreed in writing between you and the creator.' },
      { q: 'Who owns the ad account, pixel and catalog?', a: 'You do. The ad account, Business portfolio, pixel, Conversions API setup and catalog stay in your company’s name, with our team added as a partner. Meta bills ad spend directly to you. If we stop working together, you remove our access and keep every campaign and all the history.' },
    ],
  },

  // ───────────────────────── M: Meta ads agency (US) ─────────────────────────
  {
    slug: 'us/meta-ads-agency',
    kind: 'global',
    market: 'US',
    twin: 'meta-ads-agency',
    title: 'Meta Ads Agency for US Brands: Facebook, Instagram | Magnus Path',
    description: 'Meta ads agency for US brands: Facebook, Instagram Reels and Stories, Messenger and WhatsApp ads, with the Conversions API and Business Suite set up right.',
    primaryKeyword: 'Meta ads agency',
    navLabel: 'Meta Ads Agency',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Facebook · Instagram · Messenger · WhatsApp',
    h1: 'Meta Ads Agency for the *Whole Platform*, Not Just the Feed',
    intro: 'Magnus Path is a Meta ads agency for US brands that want the whole platform run as one system: Facebook, Instagram Reels, Stories and Explore, Messenger and WhatsApp click-to-chat. We set up Meta Business Suite and Events Manager properly, connect the Conversions API, and build an account structure that Advantage+ campaigns can learn from.',
    icon: 'social',
    facts: ['Free account audit first', 'Business assets in your name', 'USD quote, spend paid to Meta'],
    headings: {
      pains: 'Where Meta accounts leak money across apps and placements',
      includes: 'What our Meta ads management covers',
      process: 'How we take over your Meta account in *4 steps*',
      guide: 'Meta advertising beyond the Facebook feed: a guide for US brands',
    },
    pains: [
      { title: 'Assets scattered across personal logins', body: 'The page sits under a former employee, the pixel under an old agency, and nobody can add a new ad account without a support ticket.' },
      { title: 'One creative cut for every placement', body: 'A square feed ad gets stretched into Reels and Stories, where it looks out of place and costs more to get the same result.' },
      { title: 'Events Manager full of duplicates', body: 'Browser and server events count the same action twice, or not at all, so Advantage+ campaigns learn from bad signals.' },
    ],
    includes: [
      { title: 'Meta Business Suite setup and cleanup', body: 'Business portfolio, pages, Instagram accounts, ad accounts, pixel and catalog organized under your company, with roles and two-factor access checked.' },
      { title: 'Account structure', body: 'Fewer, larger campaigns grouped by goal, so each gets enough conversions to learn, with naming that makes reports readable.' },
      { title: 'Placement-ready creative', body: 'Vertical 9:16 cuts for Reels and Stories, 4:5 for feeds, with captions and safe zones checked so nothing important is covered.' },
      { title: 'Advantage+ campaigns', body: 'Advantage+ audience, placements and creative options used where they help, with guardrails such as exclusions and budget caps where they do not.' },
      { title: 'Messenger and WhatsApp click-to-chat', body: 'Ads that open a conversation instead of a landing page, with greeting messages, quick replies and a plan for who answers and when.' },
      { title: 'Conversions API and Events Manager', body: 'Server events connected through your platform or a gateway, deduplicated with the pixel, and event match quality reviewed every month.' },
      { title: 'Reporting by app and placement', body: 'Results by surface, from Facebook feed to Reels to WhatsApp chats, compared with your own sales data rather than Meta alone.' },
    ],
    platforms: ['Meta Business Suite', 'Meta Ads Manager', 'Events Manager', 'Conversions API', 'Facebook', 'Instagram', 'Messenger', 'WhatsApp Business'],
    process: [
      { title: 'Free Meta account audit', body: 'We check Business Suite ownership, Events Manager, campaign structure and placement results, and go through the findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'You get a written plan for structure, placements and tracking, and a monthly management fee quoted in USD. Meta bills ad spend to you.' },
      { title: 'Clean up and connect', body: 'Asset ownership, the pixel and the Conversions API are fixed first, then campaigns are consolidated without resetting what already works.' },
      { title: 'Run and refine', body: 'Weekly creative, budget and placement changes, mostly made overnight in US time, with a short written note of what changed and why.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The parts of the Meta platform that one account plan should cover.', after: 0, center: 'One Meta ads system', branches: [
        { label: 'Facebook', items: ['Feed and Marketplace', 'Video and Reels'] },
        { label: 'Instagram', items: ['Reels and Stories', 'Explore and feed'] },
        { label: 'Messaging', items: ['Messenger ads', 'WhatsApp click-to-chat'] },
        { label: 'Foundations', items: ['Business Suite ownership', 'Pixel plus Conversions API', 'Clean account structure'] },
      ] },
      { type: 'steps', caption: 'Getting your Meta assets back under your own company before any campaign changes.', after: 1, steps: [
        { title: 'List every asset', body: 'Pages, Instagram, ad accounts, pixel' },
        { title: 'Claim them', body: 'Move them into your own Business portfolio' },
        { title: 'Fix people', body: 'Remove old users, switch on two-factor' },
        { title: 'Verify the domain', body: 'Confirm it and choose your key events' },
        { title: 'Add partners', body: 'Agencies get partner access, not ownership' },
      ] },
      { type: 'venn', caption: 'Why the pixel and the Conversions API belong together, as long as events are deduplicated.', after: 3,
        left: { title: 'Meta pixel', body: 'Runs in the browser; some settings and blockers stop it' },
        right: { title: 'Conversions API', body: 'Sent from your server; keeps data browsers would lose' },
        overlap: 'One shared event ID, no duplicates' },
    ],
    guide: [
      {
        heading: 'What a Meta ads agency should manage',
        paragraphs: [
          'Meta is no longer one feed. A single campaign can show on the Facebook feed, Instagram Reels, Stories, Explore, Messenger, WhatsApp and the Audience Network, and each surface rewards a different format and a different kind of message. A Meta ads agency should manage that whole system, not just the ads inside it.',
          'That means four layers: the business assets and who owns them, the data Meta learns from, the account structure, and creative that fits each placement. A weakness in any one of them holds back the rest, which is why we audit all four before suggesting budget changes.',
          'Advantage+ options now automate much of the audience and placement choice. That makes the inputs more important, not less. Clean conversion data, enough budget per campaign and varied creative are what the automation actually works with.',
        ],
      },
      {
        heading: 'Meta Business Suite setup and account ownership',
        paragraphs: [
          'Many US brands discover during an audit that they do not fully control their own Meta assets. The Facebook page belongs to a founder’s personal profile, the pixel sits in a former agency’s business account, or the Instagram account was never connected properly.',
          'The fix is a Business portfolio (formerly Business Manager) in Meta Business Suite, owned by your company and holding the pages, Instagram accounts, ad accounts, pixel, catalog and verified domain. People get roles based on what they do, two-factor authentication is switched on, and Meta charges ad spend to your own payment method. Any Meta ads agency you hire should be a partner on these assets, never their owner, so changing agencies never means rebuilding.',
        ],
      },
      {
        heading: 'Placements: Reels, Stories, Explore and the feed',
        paragraphs: [
          'Reels, Stories and Explore are full-screen, fast-moving placements. A square image made for the feed rarely does well there. Vertical 9:16 video, captions for people watching with the sound off, and text kept clear of the buttons and profile name make a real difference.',
          'We build each concept in at least two shapes: 9:16 for Reels and Stories, and 4:5 for Facebook and Instagram feeds. Where placement customization allows, we assign the right version to each placement rather than letting one file be cropped automatically.',
          'Then we read results by placement. Some products sell on the Instagram feed, others on Reels, and Messenger inbox ads behave differently again. Breakdown reports show where the money goes, and we restrict placements only when the data supports it, since Advantage+ placements often find cheaper results than a hand-picked list.',
        ],
      },
      {
        heading: 'Conversions API and Events Manager',
        paragraphs: [
          'Browsers block more tracking every year, so the Meta pixel alone misses some conversions. The Conversions API sends the same events from your server or store platform, which recovers much of what the browser loses. Shopify, WooCommerce and most large platforms offer a built-in connection; bigger setups use a server-side gateway.',
          'The two must be set up together. Each event needs the same event ID from both sources so Meta can remove duplicates; otherwise purchases count twice and campaigns optimize toward inflated numbers. We also check event match quality, which reflects how many customer details, such as a hashed email or phone number, arrive with each event.',
          'Events Manager is where problems show up first: missing events, warnings, a sudden drop in matched purchases. A Meta ads agency should look at it every week, not only when results fall.',
        ],
      },
      {
        heading: 'Messenger and WhatsApp click-to-chat ads',
        paragraphs: [
          'Not every buyer wants a checkout page. Click-to-Messenger and click-to-WhatsApp ads open a chat instead, which suits considered purchases, custom orders, high-value items and any brand whose customers like to ask a question before paying.',
          'These ads only work if someone answers. Before launch we agree greeting messages, quick replies, response times, who on your side owns the conversations, and how a chat that becomes a sale gets recorded. WhatsApp is worth testing for US audiences who already use it to message family and businesses, while Messenger suits shoppers who spend most of their time on Facebook.',
        ],
      },
      {
        heading: 'Privacy, peak seasons and our working hours',
        paragraphs: [
          'Privacy law in the US is set state by state. California’s CCPA, as amended by the CPRA, gives residents the right to opt out of the sale or sharing of their data, and other states have followed. Meta provides a Limited Data Use option for these laws, and its terms bar sending sensitive information, such as health details, through the pixel or the Conversions API. We set tracking to respect your consent choices, but we are not lawyers, so please confirm the specifics with your counsel.',
          'Seasonality affects every placement. Costs rise across Meta from Black Friday through the holidays, and Prime Day pulls shoppers toward Amazon for a few days each summer, with a second Amazon deal event in the fall. We plan creative and budgets around those dates instead of reacting to them.',
          'We are a Chennai, India team working remotely, with no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, or 12.5 to 13.5 hours ahead of Pacific. Calls fit a short overlap in your morning, our evening, and most work is done while the US sleeps, so you wake up to finished changes. We do not offer support during US business hours.',
        ],
      },
    ],
    related: [
      { label: 'Meta ads for online stores: catalog and Advantage+ (US)', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Facebook lead ads and local campaigns for US businesses', href: '/us/facebook-ads-agency/' },
      { label: 'How to compare Facebook ad agencies in the US', href: '/us/facebook-advertising-agencies/' },
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Ecommerce PPC agency for Google Shopping in the US', href: '/us/ecommerce-ppc-agency/' },
    ],
    faqs: [
      { q: 'What does a Meta ads agency manage?', a: 'It manages advertising across Meta’s apps: Facebook, Instagram, Messenger, WhatsApp and the Audience Network. That includes Business Suite setup and ownership, pixel and Conversions API tracking, account structure, Advantage+ campaigns, creative made for each placement, chat ads, and reporting checked against your own sales data.' },
      { q: 'How much does Meta ads management cost?', a: 'We quote a monthly management fee in USD after a free account audit. The fee depends on how many apps and placements you use, creative volume, tracking and Business Suite cleanup work, chat ad setup and your ad spend level. Ad spend is paid directly to Meta from your own ad account.' },
      { q: 'Do I need the Conversions API if I already have the pixel?', a: 'In most cases, yes. Browsers and privacy settings block some pixel events, and the Conversions API sends the same events from your server. Use both with a shared event ID so Meta removes duplicates, then check event match quality in Events Manager to confirm the setup works.' },
      { q: 'Should I advertise on Instagram Reels and Stories?', a: 'Usually, if you have vertical video. Reels and Stories are full-screen placements where square feed images look out of place. Make 9:16 versions with captions and clear safe zones, run them alongside feed ads, and use placement breakdowns to see where your sales actually come from.' },
      { q: 'What are click-to-WhatsApp ads?', a: 'They are Meta ads that open a WhatsApp chat with your business instead of a website. They suit products where buyers ask questions first, such as custom, high-value or made-to-order items. They need someone ready to reply quickly and a simple way to record which chats become sales.' },
      { q: 'Who should own our Meta Business portfolio?', a: 'Your company should. The Business portfolio, pages, Instagram accounts, ad accounts, pixel and catalog belong in your name, and agencies are added as partners with only the access they need. That way, changing agencies never means losing data, audiences or campaign history.' },
      { q: 'What hours do you work in US time?', a: 'India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter. We overlap briefly with your morning for calls and do most of the work while the US sleeps, so changes are ready when your day starts. We do not offer support during US business hours.' },
    ],
  },

  // ───────────────────────── F: Facebook ads agency (US) ─────────────────────────
  {
    slug: 'us/facebook-ads-agency',
    kind: 'global',
    market: 'US',
    twin: 'facebook-ads-agency',
    title: 'Facebook Ads Agency for US Businesses: Lead Ads | Magnus Path',
    description: 'Facebook ads agency for US businesses: lead ads and instant forms, Marketplace and Reels placements, local audiences and lead quality feedback. Free audit first.',
    primaryKeyword: 'Facebook ads agency',
    navLabel: 'Facebook Ads Agency',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Lead ads · Instant forms · Local audiences',
    h1: 'Facebook Ads Agency for Leads That *Actually Close*',
    intro: 'Magnus Path is a Facebook ads agency for US businesses that need qualified leads, not just form fills. We run lead ads with instant forms, Marketplace and Reels placements and local audiences, then track which leads became customers so every campaign is judged on real sales. We also keep your page and ad comments under control.',
    icon: 'social',
    facts: ['Lead quality reported weekly', 'Page and ad account in your name', 'Free audit, then a USD quote'],
    headings: {
      pains: 'Why Facebook leads so often go nowhere',
      includes: 'What our Facebook ads management includes',
      process: 'How we fix lead quality in *4 steps*',
      guide: 'Facebook lead ads for US businesses: a practical guide',
    },
    pains: [
      { title: 'Cheap leads nobody can reach', body: 'Wrong numbers, fake names and people who do not remember filling in the form. The cost per lead looks great until someone tries to call.' },
      { title: 'Facebook optimizes for the wrong thing', body: 'Without feedback on which leads became customers, the algorithm keeps finding people who like filling in forms, not people who buy.' },
      { title: 'Comments that scare off buyers', body: 'Spam, scam links and unanswered questions sit under your ads for days, in full view of everyone the ad reaches.' },
    ],
    includes: [
      { title: 'Lead ads and instant forms', body: 'Forms built for the quality you need: the higher-intent form type, qualifying questions, and an intro that sets expectations before anyone submits.' },
      { title: 'Placements that fit the offer', body: 'Facebook feed, Marketplace, Reels and in-stream video tested with formats made for each, rather than one image stretched everywhere.' },
      { title: 'Local and service-area audiences', body: 'Radius and ZIP code targeting around your locations or service area, with Advantage+ audience used where it brings better leads.' },
      { title: 'Lead outcome tracking without a CRM', body: 'A simple spreadsheet of qualified leads and sales uploaded in Events Manager, so you judge campaigns on real customers, with a Conversions API connection added once volume justifies it.' },
      { title: 'Fast lead delivery', body: 'Leads routed to email or a shared sheet within minutes, because a lead contacted quickly is far easier to reach than one called days later.' },
      { title: 'Page and comment moderation', body: 'Hidden-word filters, spam and scam removal, and replies to genuine questions under your ads and page posts, using wording you approve.' },
      { title: 'Special ad category setup', body: 'Campaigns for housing, employment, credit and similar topics declared and built under Meta’s special ad category rules from day one.' },
    ],
    platforms: ['Meta Ads Manager', 'Lead ads', 'Events Manager', 'Conversions API', 'Facebook', 'Facebook Marketplace', 'Google Sheets'],
    process: [
      { title: 'Free lead audit', body: 'We review your forms, campaigns, placements and what happened to your last batch of leads, then talk it through on a call in your morning.' },
      { title: 'Define a good lead and quote', body: 'We agree what a qualified lead means for you and quote a monthly management fee in USD. Meta bills ad spend to your own account.' },
      { title: 'Rebuild forms and feedback', body: 'New instant forms, lead routing and a weekly upload of lead outcomes are set up before any budget changes.' },
      { title: 'Optimize on quality', body: 'Each week we move budget towards the ads, placements and audiences that bring qualified leads, mostly overnight in US time, with a written note.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'What decides whether Facebook ads bring leads your team can actually close.', after: 0, center: 'Leads that close', branches: [
        { label: 'The form', items: ['Higher-intent form type', 'One or two qualifiers'] },
        { label: 'Placements', items: ['Feed and Marketplace', 'Reels and video'] },
        { label: 'Audiences', items: ['Radius or ZIP targeting', 'Lookalikes of customers'] },
        { label: 'Follow-up', items: ['Contact within minutes', 'Lead outcomes tracked', 'Comments moderated'] },
      ] },
      { type: 'matrix', caption: 'How form type and speed of follow-up combine to decide what your leads are worth.', after: 1, cols: ['Contacted fast', 'Contacted slowly'], rows: ['Higher-intent form', 'More-volume form'], cells: [
        { title: 'Strong pipeline', body: 'Fewer leads, but most answer and many qualify' },
        { title: 'Wasted intent', body: 'Good leads go cold; fix routing before spending more' },
        { title: 'Volume to sort', body: 'Many leads; needs fast calls and a clear qualifier' },
        { title: 'Burned budget', body: 'Cheap leads that rarely answer; change the form first' },
      ] },
      { type: 'steps', caption: 'A simple weekly loop for checking which Facebook leads became customers, no CRM needed.', after: 3, steps: [
        { title: 'Export leads', body: 'Download the week’s leads from Meta' },
        { title: 'Mark outcomes', body: 'Qualified, sold or junk, in a shared sheet' },
        { title: 'Upload to Meta', body: 'Outcomes added in Events Manager' },
        { title: 'Judge on sales', body: 'Move budget to ads that bring customers' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Facebook ads agency does for a lead-based business',
        paragraphs: [
          'Lead generation on Facebook looks easy. An instant form can bring in leads within hours, often at a cost per lead that seems too good to be true. Usually it is: the form was easy to submit by accident, the audience was broad, and nobody told Facebook which leads mattered.',
          'A Facebook ads agency working for a lead-based business should own the whole path from ad to sale: the offer, the form, how quickly leads are contacted, and the feedback that teaches the algorithm what a good lead looks like. Cost per qualified lead and cost per customer are the numbers to watch, not cost per form.',
          'This approach suits home services, local retailers, education providers, B2B suppliers and stores that sell high-value items through a consultation. If you run a catalog-driven online store, our page on Meta ads for online stores covers that work instead.',
        ],
      },
      {
        heading: 'Lead ads and instant forms: trading volume for quality',
        paragraphs: [
          'Instant forms open inside Facebook and pre-fill details from the user’s profile, which is why they convert so easily. The trade-off is quality. A few settings move the balance:',
        ],
        bullets: [
          'Choose the higher-intent form type, which adds a review screen before submitting',
          'Add one or two multiple-choice qualifying questions, such as budget, timeline or ZIP code',
          'Use the intro to say clearly what happens next and who will be in touch',
          'Ask for a field people must type themselves when quality matters more than volume',
          'Link to your privacy policy and say how you will use the details',
        ],
      },
      {
        heading: 'Placements: feed, Marketplace and Reels',
        paragraphs: [
          'Facebook placements behave very differently. The feed suits clear offers and some explanation. Marketplace reaches people already in a browsing and buying mindset, which works well for local retail, home goods and services with a visible result. Facebook Reels and in-stream video suit short demonstrations and before-and-after stories.',
          'We test placements with creative made for each one, then read results by placement and by lead quality, not just by cost per lead. A good Facebook ads agency knows that a placement bringing cheap leads who never answer is the most expensive one in the account.',
          'Speed matters as much as the placement. A lead called within minutes still remembers the ad; one called after three days often does not. We route leads by email or into a shared sheet straight away and agree with your team who calls and when.',
        ],
      },
      {
        heading: 'Sending lead outcomes back to Facebook without a CRM',
        paragraphs: [
          'Facebook optimizes for whatever you tell it is a conversion. If that is a form submission, it will find people who submit forms. To steer toward buyers, you first need to know which leads became qualified or turned into sales.',
          'You do not need a CRM to start. Download your leads each week, mark each one as qualified, sold or junk in a shared spreadsheet, and upload the outcomes in Events Manager. That lets you judge every ad, placement and audience on real customers instead of form fills, and a good Facebook ads agency moves budget on that basis. Having Meta optimize directly toward converted leads is a further step: it needs a supported connection, such as the Conversions API or a platform integration, sending lead stages back with each lead ID, and it pays off only once lead volume justifies it.',
          'This weekly habit takes a few minutes of admin, and it is usually what separates accounts that improve from accounts that stall.',
        ],
      },
      {
        heading: 'Local audiences, special ad categories and comment moderation',
        paragraphs: [
          'Local businesses can target a radius around an address or a list of ZIP codes, and Advantage+ audience can widen that when it finds better prospects. Keep the service area realistic: leads from outside it waste your team’s time and teach the algorithm the wrong lesson.',
          'Some topics fall under Meta’s special ad categories, including housing, employment, credit and financial products, and social issues, elections or politics. These campaigns must be declared, and some targeting options are restricted. We set them up within those rules; trying to work around them puts the ad account at risk.',
          'Comments are part of the ad. Spam, scam links and unanswered questions under a lead ad lower trust for everyone who sees it. We set hidden-word filters, remove spam, reply to genuine questions with approved wording and flag complaints to you in our daily note.',
        ],
      },
      {
        heading: 'Privacy rules, seasonality and our hours',
        paragraphs: [
          'US privacy rules vary by state. California’s CCPA, as amended by the CPRA, gives residents the right to know what is collected and to opt out of the sale or sharing of their data, and several states have similar laws. For lead ads, that means a clear privacy policy link, honest wording about how details are used, and respecting opt-outs. Meta’s lead ad rules also limit questions about sensitive topics such as health or finances. We are not lawyers, so confirm the specifics with your counsel.',
          'Lead businesses have seasons too. Home services follow the weather, and from Black Friday to Christmas, retailers flood Facebook and push costs up for everyone. Where your business allows, run heavier lead campaigns outside those weeks.',
          'We are a Chennai, India team working remotely, with no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, or 12.5 to 13.5 hours ahead of Pacific. We overlap briefly with your morning, our evening, for calls, and most work happens while the US sleeps. We do not offer support during US business hours, so leads go straight to your team, not through us.',
        ],
      },
    ],
    related: [
      { label: 'Meta advertising across Facebook, Instagram and WhatsApp (US)', href: '/us/meta-ads-agency/' },
      { label: 'Meta ads for online stores: catalog and Advantage+ (US)', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'How to compare Facebook ad agencies in the US', href: '/us/facebook-advertising-agencies/' },
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Free ROAS calculator for ad campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a Facebook ads agency do for lead generation?', a: 'It plans and runs Facebook campaigns that collect inquiries, usually with lead ads and instant forms. The work covers the offer, form design and qualifying questions, placements, local audiences, fast lead routing, comment moderation, and tracking which leads become customers so budget follows real sales rather than form fills.' },
      { q: 'How much does it cost to hire a Facebook ads agency?', a: 'We quote a monthly management fee in USD after a free audit. It depends on the number of campaigns and locations, how much creative and form work is needed, moderation volume, the lead feedback setup and your ad spend. Ad spend is paid directly to Meta from your own account.' },
      { q: 'Why are my Facebook leads such low quality?', a: 'Usually the form is too easy, the audience is too broad, or nobody tracks which leads turned into customers. Switch to the higher-intent form type, add a qualifying question, contact leads within minutes and record lead outcomes each week so budget moves to the ads that bring buyers.' },
      { q: 'Can I track Facebook lead outcomes without a CRM?', a: 'Yes, for judging campaigns. Export the week’s leads, mark each as qualified, sold or junk in a spreadsheet, and upload the results in Events Manager, so you can compare ads on real customers. Having Meta optimize toward converted leads needs a supported Conversions API connection or integration, worth adding once lead volume justifies it.' },
      { q: 'Are Marketplace ads worth it for local businesses?', a: 'They can be, especially for products and services people browse visually, such as furniture, home improvement or local retail. Marketplace runs as a placement within your campaign, so test it with suitable creative and judge it on qualified leads, not on cost per lead alone.' },
      { q: 'What are Meta special ad categories?', a: 'They are topics such as housing, employment, credit and financial products, and social issues or politics, where Meta requires advertisers to declare the category. Some targeting options are restricted to reduce discrimination. If your ads fall into one, the campaign must be set up under those rules from the start.' },
      { q: 'Do you moderate comments on our ads and page?', a: 'Yes. We set hidden-word filters, remove spam and scam links, reply to genuine questions with wording you approve and flag complaints to you in our daily note. Because we work while the US sleeps, urgent issues during your day should go to someone on your team.' },
    ],
  },

  // ───────────────────────── A: Facebook advertising agencies (US) ─────────────────────────
  {
    slug: 'us/facebook-advertising-agencies',
    kind: 'global',
    market: 'US',
    twin: 'facebook-advertising-agencies',
    title: 'Facebook Advertising Agencies (US): How to Choose | Magnus Path',
    description: 'Comparing Facebook advertising agencies in the US? Agency types, questions to ask, red flags, audits and account ownership explained, plus how our team works.',
    primaryKeyword: 'Facebook advertising agencies',
    navLabel: 'Facebook Advertising Agencies',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Agency types · Questions to ask · Red flags',
    h1: 'Facebook Advertising Agencies: How to *Compare* Them Before You Sign',
    intro: 'Comparing Facebook advertising agencies is hard when every proposal promises growth. This page explains the main types of agency, the questions that reveal how they really work, the red flags in contracts and account access, and what a proper audit should cover. Then it shows how our Chennai team works with US brands, so you can judge us the same way.',
    icon: 'social',
    facts: ['Accounts stay in your name', 'Written audit before any quote', 'Fee quoted in USD'],
    headings: {
      pains: 'Why choosing an agency feels like guesswork',
      includes: 'What you get if you choose to work with us',
      process: 'How working with us starts, in *4 steps*',
      guide: 'How to compare Facebook advertising agencies: a buyer’s guide for US brands',
    },
    pains: [
      { title: 'Every proposal looks the same', body: 'Each agency promises lower costs and more sales, and the decks use similar screenshots, so it is hard to see who will actually do the work.' },
      { title: 'Contracts that hide the exit', body: 'Long minimum terms, notice periods and unclear rules on who keeps the ad account and creative only show up when you try to leave.' },
      { title: 'Audits that are really sales pitches', body: 'A “free audit” full of generic tips, written without looking at your Events Manager, margins or past campaigns, tells you nothing.' },
    ],
    includes: [
      { title: 'A written audit you can keep', body: 'Findings on tracking, account structure, creative and offers, written up so you can act on them with or without us.' },
      { title: 'A named team and clear roles', body: 'You know who plans, who builds creative and who reports, and who to contact when something goes wrong.' },
      { title: 'Plain contract terms', body: 'Scope, notice period, exclusions and creative ownership are written into the quote before any work starts.' },
      { title: 'Your accounts, your data', body: 'Business portfolio, ad account, pixel and page stay in your name. We are added as a partner and can be removed at any time.' },
      { title: 'Weekly change notes', body: 'A short written log of what changed in the account and why, so you can check the work, not just the results.' },
      { title: 'Reporting tied to your sales', body: 'Meta’s numbers compared with the orders, leads or revenue in your own systems, including new versus returning customers.' },
    ],
    process: [
      { title: 'Free audit request', body: 'You give us view access to your ad account and Events Manager. We review everything without changing a setting.' },
      { title: 'Written findings call', body: 'We go through the audit on a call in your morning, including what we would leave alone and why.' },
      { title: 'Scope and USD quote', body: 'A written quote with scope, timeline, exclusions and notice period. Ad spend stays billed by Meta directly to you.' },
      { title: 'Onboarding as a partner', body: 'You add us as a partner on your Business portfolio, we agree reporting and the first month’s tests, and work starts.' },
    ],
    figures: [
      { type: 'matrix', caption: 'Which type of agency tends to fit, by how complex your account is and how much creative help you need.', after: 0, cols: ['Simple account', 'Complex account'], rows: ['You supply the creative', 'You need creative help'], cells: [
        { title: 'Freelancer', body: 'One person running a few campaigns can be enough' },
        { title: 'Ads specialist', body: 'Deep Meta skills for many campaigns and tracking work' },
        { title: 'Small studio', body: 'Ads plus a steady flow of simple creative' },
        { title: 'Full-service', body: 'Strategy, creative, tracking and other channels in one team' },
      ] },
      { type: 'steps', caption: 'What a proper Meta account audit should check before anyone quotes you a fee.', after: 2, steps: [
        { title: 'Ownership', body: 'Who owns the page, pixel and ad account' },
        { title: 'Tracking', body: 'Pixel, Conversions API and duplicates' },
        { title: 'Structure', body: 'Campaigns, budgets and learning status' },
        { title: 'Creative', body: 'What was tested and what wore out' },
        { title: 'Economics', body: 'Margins, break-even ROAS, lead value' },
      ] },
      { type: 'venn', caption: 'What you bring and what an agency brings: results come from the overlap.', after: 4,
        left: { title: 'Your business', body: 'Product knowledge, margins, offers and fast approvals' },
        right: { title: 'The agency', body: 'Account build, testing, tracking and weekly optimization' },
        overlap: 'Shared targets and honest reports' },
    ],
    guide: [
      {
        heading: 'The main types of Facebook advertising agencies',
        paragraphs: [
          'Facebook advertising agencies range from one-person freelancers to large full-service firms, and the right choice depends on your account, not on the size of the agency. A small account with good creative may only need a freelancer; a store running catalog campaigns, server-side tracking and weekly UGC tests needs more hands. Most agencies fall into four groups, and an in-house hire is a fifth option worth comparing:',
        ],
        bullets: [
          'Freelancers: flexible and direct, but one person covers strategy, setup and reporting, and holidays or illness stop the work',
          'Paid social specialists: focused on Meta and often TikTok, with deeper tracking and testing skills',
          'Creative-led studios: strong on video and UGC, sometimes lighter on measurement and account structure',
          'Full-service agencies: ads, creative, email, search and web in one team, useful when channels need to be planned together',
          'In-house hire: full attention and product knowledge, but you carry recruitment, training and management, and one person rarely covers every skill',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        paragraphs: [
          'Proposals tend to look alike, so ask questions that show how an agency actually works. The last one below is the most revealing: an agency that wants to rebuild everything without looking at what already works is selling a process, not reading your account.',
        ],
        bullets: [
          'Who will work on our account each week, and what are their roles?',
          'Can you show an anonymized change log from a current account?',
          'How do you measure results against our own sales or lead data, not only Meta’s reporting?',
          'How many new creative concepts do you test each month, and who makes them?',
          'What is the notice period, and what do we keep if we leave?',
          'What would you not change in our account, and why?',
        ],
      },
      {
        heading: 'What a proper audit should cover',
        paragraphs: [
          'Many Facebook advertising agencies offer a free audit. A useful one is specific to your account and written down, so you can act on it even if you hire someone else. It should cover at least five areas.',
          'Ownership: who owns the page, Instagram account, ad account, pixel and catalog, and who has access. Tracking: whether the pixel and Conversions API both send events, whether they are deduplicated, and how reported conversions compare with real orders or leads. Structure: whether campaigns get enough conversions to learn or are split too thin. Creative: what has been tested, what wore out and what has never been tried. Economics: your margins, break-even ROAS or value per lead, so targets are based on profit.',
          'If an audit contains no screenshots or numbers from your own account, it is a sales brochure.',
        ],
      },
      {
        heading: 'Red flags in proposals and contracts',
        paragraphs: [
          'Some warning signs come up again and again when brands compare agencies. One on its own is not always a dealbreaker, but each deserves a direct question and a written answer:',
        ],
        bullets: [
          'The agency wants to run ads from its own ad account or Business portfolio instead of yours',
          'Ad spend is paid to the agency and passed on, with no clear view of what Meta actually charged',
          'Results such as a fixed ROAS are promised before anyone has seen your data',
          'Long minimum terms with no point at which performance is reviewed',
          'Reports show only reach, clicks or Meta’s ROAS, never your own sales',
          'Creative ownership is unclear, so you cannot reuse ads you paid for',
        ],
      },
      {
        heading: 'Account ownership, access and leaving cleanly',
        paragraphs: [
          'Account ownership is the one thing to settle before anything else. Your company should own the Business portfolio (formerly Business Manager), the Facebook page, the Instagram account, the ad account, the pixel and any catalog. The agency is added as a partner with the access it needs, and Meta charges ad spend directly to your card or invoice.',
          'With that in place, leaving is simple: you remove the partner, and every campaign, audience and piece of history stays with you. Agree in the contract who owns creative made during the engagement, how creator usage rights are handled, and how long the notice period is.',
        ],
      },
      {
        heading: 'How we work, and whether we fit',
        paragraphs: [
          'We are a Chennai, India team that manages Meta advertising for US brands remotely; we have no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, or 12.5 to 13.5 hours ahead of Pacific. There is a short overlap in your morning, our evening, for calls. Most work happens while the US sleeps, so you start the day with a change note. We do not offer support during US business hours.',
          'We plan around the US calendar, from Prime Day, which pulls shoppers toward Amazon, to Black Friday, Cyber Monday and the holiday season, when Meta costs rise. We set tracking to respect state privacy laws such as California’s CCPA and CPRA, and Meta’s own data rules, which bar sending sensitive data such as health details. We are not lawyers, so your counsel should confirm the specifics.',
          'We fit brands that want a written audit, plain contract terms and accounts in their own name. Compare us with other Facebook advertising agencies using the same questions; we would rather you choose well than choose quickly.',
        ],
      },
    ],
    related: [
      { label: 'Meta ads for online stores: catalog and Advantage+ (US)', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Meta advertising across Facebook, Instagram and WhatsApp (US)', href: '/us/meta-ads-agency/' },
      { label: 'Facebook lead ads and local campaigns for US businesses', href: '/us/facebook-ads-agency/' },
      { label: 'E-commerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Amazon PPC agency for Amazon.com sellers', href: '/us/amazon-ppc-agency/' },
      { label: 'Free ROAS calculator for ad campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'How do I choose between Facebook advertising agencies?', a: 'Start with what your account needs: how complex the tracking is, how much creative you need and whether other channels must be planned together. Then ask each agency who will do the work, to see a sample change log, how they measure against your own sales, and what you keep if you leave.' },
      { q: 'How much do Facebook advertising agencies charge?', a: 'Fees vary with scope: the number of campaigns and placements, creative volume, tracking work, reporting needs and ad spend. We quote a monthly management fee in USD after a free audit, in a written quote listing scope, timeline and exclusions. Ad spend is paid directly to Meta from your own account.' },
      { q: 'Is a freelancer or an agency better for Facebook ads?', a: 'A freelancer can suit a simple account with ready-made creative and modest budgets. An agency fits better when you need tracking work, regular creative testing and cover for holidays or illness. Whichever route you take, compare the actual people who will run your account, not the sales deck.' },
      { q: 'What should a free Facebook ads audit include?', a: 'It should be written and specific to your account: who owns your assets, whether the pixel and Conversions API are set up and deduplicated, how campaigns are structured, which creative has been tested, and how Meta’s reported results compare with your real sales or leads.' },
      { q: 'Should an agency run ads from its own ad account?', a: 'No. Ads should run from an ad account in your company’s Business portfolio, with the agency added as a partner. If the agency owns the account, you can lose campaign history, audiences and pixel data when you leave, and you cannot see exactly what Meta charged.' },
      { q: 'What contract terms should I check?', a: 'Check the minimum term and notice period, what the fee covers and excludes, who owns creative and usage rights, how ad spend is billed, and what happens to access when the contract ends. Get all of it in writing before work starts, not in a follow-up email.' },
      { q: 'Can a team in India manage Facebook ads for a US brand?', a: 'Yes, if the time difference is handled honestly. India is 9.5 hours ahead of US Eastern in summer and 10.5 in winter. We use a short overlap in your morning for calls and work while the US sleeps, so changes are done by your morning. We do not offer support during US business hours.' },
    ],
  },
];
