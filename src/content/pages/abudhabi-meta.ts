import type { ServicePageData } from '../../data/types';

const UAE_HUB: { label: string; href: string } = { label: 'United Arab Emirates', href: '/uae/ecommerce-marketing-agency/' };

const linkEcom = { label: 'Catalogue and Advantage+ sales ads for Abu Dhabi online stores', href: '/uae/ecommerce-meta-ads-agency-abu-dhabi/' };
const linkMeta = { label: 'Instagram, Messenger and WhatsApp campaigns across Abu Dhabi', href: '/uae/meta-ads-agency-abu-dhabi/' };
const linkFacebook = { label: 'Facebook lead forms for Abu Dhabi service businesses', href: '/uae/facebook-ads-agency-abu-dhabi/' };
const linkCompare = { label: 'How to compare ad agencies in Abu Dhabi before you sign', href: '/uae/facebook-advertising-agencies-abu-dhabi/' };

export const abuDhabiMetaPages: ServicePageData[] = [
  // ───────────────────────────────────────────── E: Ecommerce Meta ads agency in Abu Dhabi
  {
    slug: 'uae/ecommerce-meta-ads-agency-abu-dhabi',
    kind: 'location',
    market: 'UAE',
    title: 'Ecommerce Meta Ads Agency in Abu Dhabi | Arabic-First Store Ads',
    description: 'Ecommerce Meta ads agency in Abu Dhabi for online stores: Arabic and English catalogues, Advantage+ sales campaigns, UGC tests and ROAS split by card and COD.',
    primaryKeyword: 'ecommerce Meta ads agency in Abu Dhabi',
    navLabel: 'Ecommerce Meta Ads Abu Dhabi',
    breadcrumb: [UAE_HUB],
    eyebrow: 'Online stores only · Arabic-first catalogue · Advantage+ sales · COD-aware ROAS · UGC',
    h1: 'Ecommerce Meta Ads Agency in Abu Dhabi for *Stores That Sell in Two Languages*',
    intro: 'Looking for an ecommerce Meta ads agency in Abu Dhabi that understands Arabic-first shoppers? Magnus Path runs Meta ads for online stores from our Chennai head office, serving the capital remotely. We clean your catalogue in Arabic and English, run Advantage+ sales and catalogue campaigns, test UGC video weekly and report ROAS separately for card and cash-on-delivery orders.',
    icon: 'social',
    facts: ['Arabic and English catalogue', 'Prepaid and COD ROAS reported', 'Free audit, then AED quote'],
    headings: {
      pains: 'Where Abu Dhabi online stores lose money on Meta',
      includes: 'What we manage for your store on Facebook and Instagram',
      process: 'Catalogue first, then scale, in *4 steps*',
      guide: 'Meta ads for Abu Dhabi online stores: catalogue, payments and seasons',
    },
    pains: [
      { title: 'An English-only catalogue for Arabic readers', body: 'Product names, sizes and image text exist only in English, so catalogue ads shown to Arabic-speaking shoppers look like an afterthought and get scrolled past.' },
      { title: 'One ROAS number for every payment type', body: 'Card, instalment and cash-on-delivery orders are counted the same way in Ads Manager, even though a refused COD parcel never turns into revenue.' },
      { title: 'Budgets that ignore the season', body: 'Spend stays flat through the summer lull and is then raised in a rush when the cooler months arrive, so campaigns are still learning just as demand peaks.' },
    ],
    includes: [
      { title: 'Bilingual catalogue and feed', body: 'Commerce Manager set-up, a language feed for Arabic titles and descriptions, AED prices with VAT, variant and stock checks, and fixes made in your store so they stick.' },
      { title: 'Advantage+ sales campaigns', body: 'Meta’s automated shopping campaigns, previously known as Advantage+ shopping, with a cap on existing-customer spend and a smaller manual campaign alongside for comparison.' },
      { title: 'Advantage+ catalogue ads', body: 'Retargeting for product viewers and basket abandoners, previously called dynamic product ads, split by the language each shopper browsed in.' },
      { title: 'UGC briefs and weekly tests', body: 'Scripts and shot lists for customers and creators, Arabic captions written or checked by a fluent Arabic writer, and one variable tested at a time.' },
      { title: 'Payment-split reporting', body: 'ROAS for prepaid and cash-on-delivery orders shown separately, with refusals and returns removed, so budgets follow money you actually receive.' },
      { title: 'Product sets for gifting and Al Ain', body: 'Sets for Ramadan, Eid and National Day gifting, and for products you can deliver quickly outside the city, so ads only promise what you can fulfil.' },
      { title: 'Shops and tracking checks', body: 'Facebook and Instagram Shops kept in step with the catalogue, and pixel plus Conversions API purchases matched against your store orders each week.' },
    ],
    process: [
      { title: 'Free store and catalogue audit', body: 'We look at your ad account, catalogue diagnostics, tracking and order data by payment method, then explain each finding to you over video.' },
      { title: 'Margins, targets and an AED quote', body: 'Break-even points are calculated separately for prepaid and COD orders, targets are set from them, and the monthly fee arrives as a written AED quote.' },
      { title: 'Feed and language clean-up', body: 'Arabic language feed, product sets, event deduplication and a weekly order match are in place before any budget increase.' },
      { title: 'Test, report and scale by season', body: 'New creative every week, budgets moved toward profitable products, and spend stepped up ahead of the cooler-season peak and gifting dates.' },
    ],
    platforms: ['Meta Ads Manager', 'Commerce Manager', 'Events Manager', 'Conversions API', 'Shopify', 'WooCommerce', 'Google Sheets'],
    local: {
      city: 'Abu Dhabi',
      areas: ['Al Reem Island', 'Khalifa City', 'Mohammed Bin Zayed City', 'Al Raha', 'Yas Island', 'Al Khalidiyah', 'Shakhbout City', 'Saadiyat Island', 'Al Ain'],
      note: 'We have no office in the UAE. Stores across Abu Dhabi and Al Ain are served remotely from our Chennai head office; UAE clocks run 1.5 hours behind India’s, leaving most of the day shared. Catalogue and creative reviews take place over video, with no in-person meetings in Abu Dhabi.',
    },
    figures: [
      { type: 'mindmap', caption: 'What decides whether Meta ads pay back for an online store selling across Abu Dhabi.', center: 'Store ads in Abu Dhabi', after: 0, branches: [
        { label: 'Catalogue', items: ['Arabic language feed', 'AED prices with VAT', 'Stock that drops out'] },
        { label: 'Audiences', items: ['Emirati families', 'Expat shoppers', 'Al Ain buyers'] },
        { label: 'Creative', items: ['UGC from real homes', 'Arabic and English cuts'] },
        { label: 'Payments', items: ['Card and instalments', 'COD after refusals'] },
      ] },
      { type: 'venn', caption: 'Why prepaid and cash-on-delivery orders need their own ROAS before you add them together.', after: 3,
        left: { title: 'Prepaid orders', body: 'Card or instalments: revenue is known when the order is placed' },
        right: { title: 'Cash on delivery', body: 'Revenue arrives only if the parcel is accepted and kept' },
        overlap: 'ROAS on money received' },
      { type: 'matrix', caption: 'Where to push Meta budget through the year, by season and type of purchase.', after: 5, cols: ['Cooler months', 'Summer months'], rows: ['Gifts and family buys', 'Everyday reorders'], cells: [
        { title: 'Push hardest', body: 'Gift sets, National Day and Eid ranges in both languages' },
        { title: 'Plan ahead', body: 'Keep testing while families travel; prepare autumn creative' },
        { title: 'Steady spend', body: 'Retargeting and past-buyer offers keep repeat orders moving' },
        { title: 'Trim and learn', body: 'Lower budgets, cheaper tests and refreshed product sets' },
      ] },
    ],
    guide: [
      {
        heading: 'The job of an ecommerce Meta ads agency in Abu Dhabi',
        paragraphs: [
          'An ecommerce Meta ads agency in Abu Dhabi works on one question: does each dirham sent to Meta come back as paid orders? That limits the work to shops with a product feed behind them, where Facebook and Instagram ads draw on your products, prices and stock rather than on a one-off post.',
          'Abu Dhabi shoppers are not one audience. Emirati families often browse and decide in Arabic, a large expat population shops in English and several other languages, and buyers in Al Ain behave differently from those on the islands. A store that sells to all of them needs catalogue data, creative and reporting that can be split along those lines.',
          'Ownership is simple. The catalogue, pixel, ad account and business portfolio (previously Business Manager) are registered to your company, and Meta charges ad spend to the card or payment method on your own ad account. We work through partner access that you grant and can withdraw whenever you like.',
        ],
      },
      {
        heading: 'Building an Arabic-first product catalogue',
        paragraphs: [
          'Many stores treat Arabic as a translation added at the end. For an audience that reads Arabic first, that shows: product names cut off mid-word, sizes listed only in English and lifestyle images with English text baked in. Catalogue ads pull straight from the feed, so those gaps appear in every Arabic ad.',
          'Before any budget rises, we go through the feed with these points in mind:',
        ],
        bullets: [
          'Arabic product names and descriptions held in a separate language feed, written or checked by a fluent Arabic writer',
          'Image overlays without English-only text, so the same picture works in both language versions',
          'Size, fit and fabric details that matter for modest fashion, abayas and kanduras',
          'Perfume and oud, dates, gift boxes and home fragrance grouped into their own product sets for gifting periods',
          'AED prices that match the store, including 5% VAT, and stock that drops out of ads once an item sells out',
          'Separate product sets for items you can deliver quickly to Al Ain and those you cannot',
        ],
      },
      {
        heading: 'Advantage+ sales campaigns and catalogue ads, set up for this market',
        paragraphs: [
          'With Advantage+ sales campaigns (previously called Advantage+ shopping campaigns), Meta decides which product to show to whom. That suits a store whose purchases are tracked reliably, though unchecked the budget drifts toward people who were already customers. We cap spend on existing customers, upload past-buyer lists where your consent wording allows it, and run a smaller manual campaign beside them so you can see what the automation adds.',
          'Advantage+ catalogue ads, formerly dynamic product ads, follow up with shoppers who viewed items or added them to the basket. For an Arabic-first audience the follow-up should come back in Arabic, so we split retargeting by the language of the page each visitor saw rather than showing English templates to everyone.',
          'Facebook and Instagram Shops can add a browsable storefront inside the apps. Whether checkout happens there or on your own site depends on your account’s eligibility, so we confirm that before planning around it.',
        ],
      },
      {
        heading: 'Cash on delivery and card payments: two different ROAS numbers',
        paragraphs: [
          'In Abu Dhabi some customers pay by card at checkout, others prefer cash on delivery, and a third group spreads the cost with Tabby or Tamara. Meta sees a purchase the moment any of these orders is placed. It does not see a COD parcel turned away at the door or a return two weeks later.',
          'We therefore report ROAS twice: once for prepaid orders, and once for COD orders after refusals and returns are taken off. The gap between the two tells you whether a small prepaid incentive, such as free delivery for card payment, would pay for itself, and which campaigns attract the riskiest orders.',
          'Set targets from your break-even ROAS, which is simply 1 ÷ your margin once product cost, shipping, card or COD fees and returns are deducted. Our ROAS calculator runs that sum for each product. An ecommerce Meta ads agency in Abu Dhabi should be comfortable showing you both numbers side by side.',
        ],
      },
      {
        heading: 'UGC creative that reflects real Abu Dhabi homes',
        paragraphs: [
          'Short phone-filmed videos from customers and creators usually earn more trust than studio shoots, as long as the people and settings look familiar to the viewer. A family unboxing a delivery in a Khalifa City villa speaks to local shoppers in a way a studio flat-lay rarely does.',
          'We test one thing at a time: the opening line, the format, the offer or the presenter. Briefs respect local norms on dress and modesty, and Arabic voice-overs or captions are scripted or checked by a fluent Arabic writer. English versions run alongside for expat audiences, and results are compared by language rather than lumped together.',
          'If an ad holds attention but does not sell, the problem is usually the price, the delivery promise or the product page, not the creative.',
        ],
      },
      {
        heading: 'The Abu Dhabi selling calendar and how we work remotely',
        paragraphs: [
          'Demand here follows the weather as much as the shopping calendar. Summer is quieter as many families travel, while the cooler months from autumn into spring bring the busiest trading. Ramadan moves browsing late into the night and leads into Eid gifting, and UAE National Day on 2 December brings patriotic ranges and gift sets. Build creative and product sets weeks before each moment, and raise budgets gradually.',
          'Magnus Path has no office in the UAE. Your account is run from our Chennai head office, and because the UAE is 1.5 hours behind India, our working days overlap almost entirely. Reviews and planning take place over video, never face to face in Abu Dhabi. When you speak to any ecommerce Meta ads agency in Abu Dhabi, ask how it will report paid orders rather than placed ones.',
        ],
      },
    ],
    related: [
      { label: 'Ecommerce Meta ads agency in Sharjah', href: '/uae/ecommerce-meta-ads-agency-sharjah/' },
      linkMeta,
      linkFacebook,
      linkCompare,
      { label: 'Catalogue ads for online stores in Dubai', href: '/uae/ecommerce-meta-ads-agency-dubai/' },
      { label: 'Ecommerce marketing agency for UAE brands', href: '/uae/ecommerce-marketing-agency/' },
      { label: 'Break-even ROAS calculator for store campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does an ecommerce Meta ads agency in Abu Dhabi cost?', a: 'The fee rises or falls with the size of your catalogue, the number of languages and campaigns, the volume of creative briefs and the state of your feed and tracking. Prices are not listed on this site. A free audit comes first, followed by a written AED quote covering scope, timeline and exclusions. Meta bills ad spend to your own ad account.' },
      { q: 'Should our catalogue ads run in Arabic, English or both?', a: 'It depends on who buys. Stores selling to Emirati families usually need Arabic-led ads and an Arabic product feed, while expat-focused stores may lead in English. Many run both and compare. A fluent Arabic writer writes or checks every Arabic title, caption and script, and each Arabic ad should open an Arabic product page.' },
      { q: 'Why do you report COD and card orders separately?', a: 'Meta counts every order when it is placed, whatever the payment method. Card and instalment orders are mostly paid, but a share of COD parcels come back unpaid or are sent back later. Reporting them separately shows the real return on each campaign and whether an incentive to prepay would be worth offering.' },
      { q: 'Do Advantage+ sales campaigns work for smaller stores?', a: 'They can, once the pixel and Conversions API record purchases reliably and there are enough orders each week for Meta to learn from. With very few sales, a simpler manual set-up is often easier to read. We check your purchase volume during the audit and recommend a structure to match it.' },
      { q: 'Can you target shoppers in Al Ain separately?', a: 'Yes. Al Ain can run as its own audience, with location targeting, its own product sets and delivery messages that match what you can actually fulfil there. Keeping it apart also shows whether those shoppers respond differently, instead of letting results from the capital hide them.' },
      { q: 'When should we raise budgets during the year?', a: 'Most Abu Dhabi stores see quieter summers and busier cooler months, with Ramadan, Eid and UAE National Day as extra gifting moments. Raise spend a few weeks before each peak so campaigns learn early, and use the summer to test creative and fix the catalogue while auctions are calmer.' },
      { q: 'Do you have an office in Abu Dhabi?', a: 'No. Magnus Path has no office in the UAE. Your store’s ads are managed remotely from our Chennai head office. With the UAE just 1.5 hours behind India, our hours and yours run almost side by side. Every meeting is a video call; we do not meet clients in person in Abu Dhabi.' },
    ],
  },

  // ───────────────────────────────────────────── M: Meta ads agency in Abu Dhabi
  {
    slug: 'uae/meta-ads-agency-abu-dhabi',
    kind: 'location',
    market: 'UAE',
    title: 'Meta Ads Agency in Abu Dhabi | Instagram, WhatsApp & Messenger',
    description: 'Meta ads agency in Abu Dhabi planning Facebook, Instagram, Messenger and WhatsApp campaigns in Arabic and English, with Conversions API and clear account roles.',
    primaryKeyword: 'Meta ads agency in Abu Dhabi',
    navLabel: 'Meta Ads Agency Abu Dhabi',
    breadcrumb: [UAE_HUB],
    eyebrow: 'Four Meta apps · Business Suite roles · Conversions API · WhatsApp in Arabic and English · Al Ain',
    h1: 'Meta Ads Agency in Abu Dhabi for *Arabic and English* Audiences',
    intro: 'Choosing a Meta ads agency in Abu Dhabi means trusting one team with Facebook, Instagram, Messenger and WhatsApp at once. Magnus Path manages all four remotely from our Chennai head office. We organise your Meta Business Suite so the right people approve and own each asset, send events through the Conversions API, and plan Advantage+ and WhatsApp chat campaigns for Arabic-first and expat audiences.',
    icon: 'social',
    facts: ['All four Meta apps planned together', 'Arabic checked by a fluent writer', 'Free audit, quote in AED'],
    headings: {
      pains: 'What makes Meta advertising hard to run in Abu Dhabi',
      includes: 'What our Meta platform management includes',
      process: 'Getting your Meta set-up in order in *4 steps*',
      guide: 'Meta ads in Abu Dhabi: apps, set-up, tracking and timing',
    },
    pains: [
      { title: 'Too many approvers, no clear owner', body: 'Marketing, IT, communications and senior management all have a say, yet nobody is sure who holds admin rights to the page, the ad account or the WhatsApp number.' },
      { title: 'Ads in one language for a two-language city', body: 'Campaigns run in English with a translated line or two, so Arabic-speaking audiences get a weaker version of every message.' },
      { title: 'Chats that arrive faster than anyone answers', body: 'Click-to-WhatsApp ads fill the inbox in the evening and at weekends, but replies come the next working day and interested people move on.' },
    ],
    includes: [
      { title: 'Business Suite roles and approvals', body: 'A business portfolio, previously Business Manager, set up in your organisation’s name with admin, editor and reviewer roles that match your sign-off chain.' },
      { title: 'Conversions API and Events Manager', body: 'Bookings, enquiries and purchases sent through both the pixel and the Conversions API with shared event IDs, then checked against your own records.' },
      { title: 'Instagram Reels, Stories and Explore', body: 'Vertical creative made for each placement, with Arabic and English text kept inside safe zones and subtitles for people watching on mute.' },
      { title: 'WhatsApp and Messenger campaigns', body: 'Click-to-chat ads with greetings in the viewer’s language, ready answers to frequent questions and a simple outcome label for every chat.' },
      { title: 'Advantage+ campaigns where they fit', body: 'Automated audience and placement campaigns used once tracking is sound, alongside manual campaigns for launches aimed at one area or audience.' },
      { title: 'A separate plan for Al Ain', body: 'Al Ain treated as its own audience with its own location targeting, creative and reporting, so results from the capital do not mask it.' },
      { title: 'One report across every app', body: 'Weekly results by app, placement and objective, linked to the bookings, enquiries or sales your team confirms.' },
    ],
    process: [
      { title: 'Free set-up audit', body: 'We map your business portfolio, ad accounts, page and Instagram access, WhatsApp number, Events Manager and recent campaigns, and present what we find over video.' },
      { title: 'Ownership map and AED quote', body: 'A written note of who owns and approves each asset, how campaigns will be split between apps, and a monthly AED quote shaped to your procurement steps.' },
      { title: 'Access, tracking and chat set-up', body: 'Assets moved into your portfolio, partner access granted, the Conversions API connected and WhatsApp greetings and labels agreed with your team.' },
      { title: 'Run, review and adjust', body: 'Campaigns across all four apps, creative tested weekly in both languages, budgets shifted with the seasons and a monthly review call.' },
    ],
    platforms: ['Meta Business Suite', 'Meta Ads Manager', 'Events Manager', 'Conversions API', 'WhatsApp Business', 'Instagram', 'Messenger', 'GA4'],
    local: {
      city: 'Abu Dhabi',
      areas: ['Yas Island', 'Saadiyat Island', 'Al Maryah Island', 'Corniche', 'Al Reem Island', 'Al Raha', 'Masdar City', 'Al Bateen', 'Al Ain'],
      note: 'Magnus Path keeps no office anywhere in the UAE. Organisations across Abu Dhabi, from Al Maryah Island to Al Ain, are served remotely from our Chennai head office. With the UAE 1.5 hours behind India our days overlap closely; planning, approvals and reviews run on video calls, with no in-person meetings in Abu Dhabi.',
    },
    figures: [
      { type: 'mindmap', caption: 'The jobs each Meta app can do for an Abu Dhabi business, all bought through one ad account.', center: 'One account, four apps', after: 0, branches: [
        { label: 'Facebook', items: ['Feed and Reels reach', 'Page for questions'] },
        { label: 'Instagram', items: ['Reels and Stories', 'Explore discovery'] },
        { label: 'WhatsApp', items: ['Click-to-chat ads', 'Arabic or English greeting'] },
        { label: 'Messenger', items: ['Replies inside Facebook', 'Quick answers'] },
      ] },
      { type: 'steps', caption: 'A sign-off route for organisations where several teams must approve an ad before it runs.', after: 1, steps: [
        { title: 'Brief agreed', body: 'Goal, audience and key message in writing' },
        { title: 'Two-language draft', body: 'Arabic and English versions side by side' },
        { title: 'Arabic check', body: 'A fluent Arabic writer reviews wording' },
        { title: 'Internal approval', body: 'Your reviewers sign off the final set' },
        { title: 'Launch', body: 'Live only after written approval' },
      ] },
      { type: 'matrix', caption: 'Where a click-to-chat ad should send someone, by language and how ready they are to act.', after: 3, cols: ['Has a question', 'Ready to book'], rows: ['Arabic-speaking', 'English-speaking'], cells: [
        { title: 'Arabic WhatsApp', body: 'Arabic greeting, quick replies and an Arabic-speaking reply' },
        { title: 'Arabic booking', body: 'Ad leads straight to an Arabic page with a booking form' },
        { title: 'English WhatsApp', body: 'English greeting with quick answers on times and prices' },
        { title: 'English booking', body: 'Direct link to book, with WhatsApp as a backup' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Meta ads agency in Abu Dhabi manages',
        paragraphs: [
          'One Ads Manager buys space on all four Meta apps: Facebook, Instagram, Messenger and WhatsApp. A Meta ads agency in Abu Dhabi decides which app does which job for you and makes sure every result can be traced back to a campaign. For a leisure operator on Yas Island, Instagram Reels may carry the awareness while WhatsApp handles questions about tickets. For a clinic in Khalifa City or a training institute near the Corniche, Facebook and Messenger may bring most of the enquiries.',
          'This page covers the full platform. Online stores focused on catalogue sales have their own page, as do businesses that mainly want Facebook lead forms. Whatever the mix, Meta charges ad spend to your organisation’s own ad account, and every asset remains your property.',
        ],
      },
      {
        heading: 'Business Suite for organisations with several approvers',
        paragraphs: [
          'Larger Abu Dhabi organisations, including government and semi-government entities, rarely have one person who can approve everything. Communications, legal, IT and senior leaders may each review a campaign, and suppliers are usually engaged through a formal procurement process with written scopes and registered vendors. Your Meta set-up should mirror that, not fight it.',
          'We set up roles so the people who must approve can see the work without being able to break anything, and we keep a written record of who holds each permission, which helps when staff change.',
        ],
        bullets: [
          'One business portfolio, previously called Business Manager, registered to the organisation, with at least two internal admins',
          'The Facebook page, the Instagram account and the WhatsApp Business number linked under that same portfolio',
          'Agency access granted through Meta’s partner access, so it can be withdrawn in one step when a contract ends',
          'Limited roles for people who sign off creative but do not run campaigns',
          'Two-factor authentication on every person with admin rights',
        ],
      },
      {
        heading: 'Events Manager and the Conversions API for bookings and enquiries',
        paragraphs: [
          'Not every Abu Dhabi advertiser sells through a basket. Many want table bookings, ticket purchases, trial classes or appointment requests. Each of these should reach Meta as a clear event, so campaigns optimise toward the action that matters instead of page views.',
          'The pixel records events from the visitor’s browser, while the Conversions API passes them from your server or booking platform, filling the gaps the browser leaves. Running both with a shared event ID means each booking is counted once. In Events Manager we check event match quality, remove duplicates and compare Meta’s numbers with your booking system every week.',
          'Booking platforms vary in how well they connect to Meta. Some have ready-made integrations; others need server-side tagging, which we scope during the audit.',
        ],
      },
      {
        heading: 'WhatsApp click-to-chat and Messenger in two languages',
        paragraphs: [
          'Plenty of people in Abu Dhabi would rather send a quick WhatsApp message than fill in a form. A click-to-WhatsApp ad starts that conversation with one tap from Facebook or Instagram, and Messenger ads do the same inside Facebook. They suit questions about availability, family packages, timings and prices.',
          'Two things decide whether they pay off. First, language: the greeting and quick replies should match the language of the ad, so an Arabic ad opens an Arabic conversation handled by someone who can continue in Arabic. Second, response time: chats often peak in the evening and at weekends, so agree who covers those hours before increasing spend. We label each chat’s outcome, which shows the campaigns producing bookings rather than mere messages.',
        ],
      },
      {
        heading: 'Instagram placements, Advantage+ and the leisure season',
        paragraphs: [
          'Reels, Stories and Explore on Instagram each want a purpose-made cut: vertical framing, Arabic and English text kept clear of the app’s buttons, and subtitles for silent viewing. Once each placement has proper creative, Advantage+ placements can spread delivery efficiently.',
          'Advantage+ campaigns let Meta handle audiences and budgets. They save effort when tracking is reliable, but they can blur the line between new and returning customers. We keep manual campaigns for targeted launches, such as a new outlet on Saadiyat Island or a separate push in Al Ain, where people respond to different offers and timings.',
          'Timing matters as much as targeting. Outdoor and leisure demand builds in the cooler months, when Yas Island’s attractions and events draw crowds, and eases in the summer heat, when indoor activities and travel take over.',
        ],
      },
      {
        heading: 'Privacy, the calendar and working with a remote team',
        paragraphs: [
          'Under the UAE Personal Data Protection Law (PDPL), personal data needs a lawful basis and a clear purpose. Put plainly, get consent before tracking anyone, say in your privacy policy which data Meta receives, and never upload a customer list without permission. Firms registered in Abu Dhabi Global Market (ADGM) also have ADGM’s own data protection rules to follow. We are not lawyers; a qualified adviser should confirm which rules apply to you.',
          'Plan Ramadan, Eid and UAE National Day well ahead, with creative and chat cover ready before budgets rise. We work remotely from our Chennai head office, with no office in the UAE and no in-person meetings in Abu Dhabi; as the UAE is 1.5 hours behind India, video calls slot easily into your day. Before you hire any Meta ads agency in Abu Dhabi, ask who will own the portfolio, pixel and WhatsApp number afterwards.',
        ],
      },
    ],
    related: [
      { label: 'Meta ads agency in Sharjah', href: '/uae/meta-ads-agency-sharjah/' },
      linkEcom,
      linkFacebook,
      linkCompare,
      { label: 'Instagram and WhatsApp advertising in Dubai', href: '/uae/meta-ads-agency-dubai/' },
      { label: 'Performance marketing in Dubai across all paid channels', href: '/uae/performance-marketing-agency-dubai/' },
    ],
    faqs: [
      { q: 'What does hiring a Meta ads agency in Abu Dhabi cost?', a: 'The fee reflects how many apps and objectives you advertise on, how many campaigns and languages run, the amount of creative required and the set-up or tracking repairs needed first. Our prices are not published. A free audit is followed by a written AED quote, and Meta charges ad spend to your own ad account.' },
      { q: 'Can you work within a government or semi-government procurement process?', a: 'Yes. We can provide a written scope, timeline, exclusions and an AED quote in the format your procurement team needs, and we follow the approval steps you set. Requirements differ between entities, so tell us early which documents and registrations you need and we will say honestly whether we can meet them.' },
      { q: 'Do you need access to our WhatsApp Business account?', a: 'Only enough to connect it to your business portfolio for click-to-chat ads and to check greeting messages and labels. Your team keeps the number, the conversations and the customer replies. We do not answer customer chats on your behalf unless that is agreed in writing as part of the scope.' },
      { q: 'What is Advantage+ and should we use it?', a: 'Advantage+ is Meta’s set of automated options for audiences, placements, budgets and creative. It often lowers costs once tracking is reliable and there is enough data. We use it where it suits and keep manual campaigns for launches that must reach one area, such as Al Ain, or one language group.' },
      { q: 'Our company is registered in ADGM. Does that change anything?', a: 'It can. ADGM has its own data protection rules, which may affect how you collect consent, upload customer lists and share data with Meta. We set up tracking with consent in mind, but legal advice is outside our work, so confirm with your adviser which rules apply and what your privacy policy must say.' },
      { q: 'How do you handle Arabic creative?', a: 'Arabic headlines, captions, video scripts and WhatsApp greetings all pass through a fluent Arabic writer, who writes or checks them; machine translation alone is never used. We plan Arabic and English versions together rather than translating at the end, and we report results by language so you can see how each audience responds.' },
      { q: 'Will you meet us in Abu Dhabi?', a: 'No. We have no office in the UAE, and meetings in Abu Dhabi are not something we offer. Your account is run remotely from our Chennai head office, and with the UAE only 1.5 hours behind India, video calls, reviews and replies sit comfortably inside your working day.' },
    ],
  },

  // ───────────────────────────────────────────── F: Facebook ads agency in Abu Dhabi
  {
    slug: 'uae/facebook-ads-agency-abu-dhabi',
    kind: 'location',
    market: 'UAE',
    title: 'Facebook Ads Agency in Abu Dhabi | Lead Forms Across the Emirate',
    description: 'Facebook ads agency in Abu Dhabi for service businesses: Arabic and English lead forms, area targeting out to Al Ain, lead quality tracking and comment care.',
    primaryKeyword: 'Facebook ads agency in Abu Dhabi',
    navLabel: 'Facebook Ads Agency Abu Dhabi',
    breadcrumb: [UAE_HUB],
    eyebrow: 'Instant forms in two languages · Area targeting · Lead outcomes · Placements · Comments',
    h1: 'Facebook Ads Agency in Abu Dhabi for *Service Businesses*',
    intro: 'A Facebook ads agency in Abu Dhabi should know whether your leads come from the areas you actually serve. Magnus Path runs Facebook lead campaigns remotely from our Chennai head office for clinics, home services, tutors and local shops. We build Arabic and English instant forms, target the districts you cover, track which leads become customers and moderate your comments.',
    icon: 'social',
    facts: ['Forms in Arabic and English', 'Leads judged on real customers', 'Free audit, quote in AED'],
    headings: {
      pains: 'Why Facebook leads fall flat for Abu Dhabi service firms',
      includes: 'What our Facebook campaign management covers',
      process: 'How we sharpen your lead campaigns in *4 steps*',
      guide: 'Facebook ads in Abu Dhabi: forms, areas, lead quality and comments',
    },
    pains: [
      { title: 'Leads from areas you do not cover', body: 'An AC repair firm in Mussafah gets enquiries from Al Ain, or a nursery on the island hears from families far out on the mainland, because targeting was set to the whole emirate.' },
      { title: 'Forms that ask too little', body: 'Name and phone fill in automatically, so people submit without thinking. Your team calls and finds that nobody expected the call.' },
      { title: 'Arabic comments nobody replies to', body: 'Questions under ads go unanswered or get an English reply, and the next reader sees a page that does not seem to be listening.' },
    ],
    includes: [
      { title: 'Instant forms with qualifying questions', body: 'Higher-intent forms with an area question, preferred contact method and timing, plus conditional questions so each person sees only what applies.' },
      { title: 'Area-based targeting', body: 'Radius and location targeting drawn around the districts you serve, with Al Ain and outlying areas run separately or excluded.' },
      { title: 'Feed, Marketplace and Reels placements', body: 'Ads designed for each Facebook placement and checked weekly by placement, so a cheap but poor source of leads is spotted quickly.' },
      { title: 'Lead outcome sheet', body: 'One shared spreadsheet, updated by your team, recording whether each lead was reached, qualified, booked or won. No special software required.' },
      { title: 'Lead outcome uploads', body: 'Uploading outcomes lets you judge each campaign by the real customers it brings. When volume justifies it, a Conversions API or integration connection lets Meta optimise toward converted leads.' },
      { title: 'Page and comment moderation', body: 'Ad and page comments reviewed on an agreed schedule, simple questions answered in Arabic or English with approved wording, spam hidden and complaints passed to you.' },
      { title: 'Bilingual follow-up templates', body: 'Thank-you screens and WhatsApp follow-up wording prepared in English and Arabic; a fluent Arabic writer writes or checks the Arabic.' },
    ],
    process: [
      { title: 'Free lead audit', body: 'We study your Facebook campaigns, forms, targeting and comment threads, plus how leads are handled once they land, and talk it through over video.' },
      { title: 'Service area, lead definition and AED quote', body: 'We map the districts you serve, define with your team what makes a lead worth calling, and send the monthly fee as a written AED quote.' },
      { title: 'Forms, targeting and outcome tracking', body: 'New forms in both languages, area targeting, the outcome spreadsheet and a set weekly time for logging what became of each lead.' },
      { title: 'Optimise on customers, not forms', body: 'Budget moved to the campaigns and areas that bring customers, comments moderated on schedule, and a weekly figure for what each qualified lead cost.' },
    ],
    platforms: ['Meta Ads Manager', 'Instant forms', 'Events Manager', 'Meta Business Suite', 'Facebook Marketplace', 'Google Sheets', 'WhatsApp Business'],
    local: {
      city: 'Abu Dhabi',
      areas: ['Mussafah', 'Khalifa City', 'Mohammed Bin Zayed City', 'Shakhbout City', 'Al Shamkha', 'Al Reef', 'Al Mushrif', 'Al Khalidiyah', 'Baniyas', 'Al Ain'],
      note: 'We have no UAE office. Service businesses from Mussafah to Al Ain are supported remotely from our Chennai head office. The UAE runs 1.5 hours behind India, so our hours line up with yours; campaign reviews happen over video calls and there are no in-person meetings in Abu Dhabi.',
    },
    figures: [
      { type: 'mindmap', caption: 'The parts of a Facebook lead campaign for an Abu Dhabi service business, from ad to follow-up.', center: 'Facebook lead campaigns', after: 0, branches: [
        { label: 'Placements', items: ['Feed and Marketplace', 'Reels and Stories'] },
        { label: 'Forms', items: ['Area question', 'Call or WhatsApp choice', 'Arabic and English'] },
        { label: 'Areas', items: ['Island and mainland', 'Al Ain run separately'] },
        { label: 'Follow-up', items: ['Reply the same day', 'Outcome for each lead'] },
      ] },
      { type: 'matrix', caption: 'Deciding where to spend on Facebook leads, by distance from your team and how urgent the job is.', after: 2, cols: ['Near your team', 'Far from your team'], rows: ['Urgent jobs', 'Planned jobs'], cells: [
        { title: 'Spend here first', body: 'Repairs and call-outs you can reach quickly' },
        { title: 'Usually exclude', body: 'Travel time eats the margin on urgent work' },
        { title: 'Steady campaigns', body: 'Quotes and bookings with time to plan' },
        { title: 'Test carefully', body: 'Only if the job value covers the travel' },
      ] },
      { type: 'steps', caption: 'What should happen in the first hour after a Facebook lead form arrives.', after: 3, steps: [
        { title: 'Form sent', body: 'An alert reaches your team at once' },
        { title: 'First contact', body: 'WhatsApp or call in the chosen language' },
        { title: 'Qualify', body: 'Area, timing and need confirmed' },
        { title: 'Log the outcome', body: 'Status entered in the shared sheet' },
      ] },
    ],
    guide: [
      {
        heading: 'Which businesses a Facebook ads agency in Abu Dhabi helps most',
        paragraphs: [
          'Facebook lead ads suit businesses that sell a service and need a conversation before the sale: clinics and dentists, nurseries and tutors, home cleaning and AC maintenance, car servicing in Mussafah, interior fit-out, fitness studios and driving lessons. A Facebook ads agency in Abu Dhabi earns its place when those campaigns produce enquiries that end in bookings.',
          'This page sticks to Facebook itself: instant forms, where ads appear in the app, who sees them locally and how leads are handled. Campaigns that need Instagram, Messenger and WhatsApp planned together, or catalogue ads for an online store, are covered by our sister pages.',
          'Meta bills ad spend to your own ad account, and the page, forms and lead data remain your business’s property.',
        ],
      },
      {
        heading: 'Instant forms that suit Abu Dhabi households',
        paragraphs: [
          'An instant form opens inside Facebook with contact details already filled in. That makes it quick, which is why lead counts often look healthy while sales stay flat. A well-built form slows people down just enough to separate genuine interest from idle taps, and it asks what your team needs to know before calling.',
          'Arabic forms are written or checked by a fluent Arabic writer, and someone who speaks Arabic should make the follow-up call. Beyond that, a few questions do a lot of work in Abu Dhabi:',
        ],
        bullets: [
          'Which area are you in? A short list of districts, so out-of-area leads can be filtered before anyone calls',
          'Would you prefer a call or a WhatsApp message, and in Arabic or English?',
          'When do you need this: this week, this month or just comparing?',
          'For family services, who the service is for, such as a child’s age group for a nursery',
          'A review step before sending, using Meta’s higher-intent form option',
        ],
      },
      {
        heading: 'Targeting the emirate: islands, mainland and Al Ain',
        paragraphs: [
          'Abu Dhabi is spread out. The island districts, newer mainland communities such as Khalifa City, Mohammed Bin Zayed City and Al Shamkha, and the city of Al Ain are effectively different markets for a service business. A plumber or AC technician who can reach Al Reem Island quickly may not want jobs on the far side of the city, and a clinic in Al Ain rarely needs leads from the capital.',
          'We draw radius or location targets around the areas you actually serve, and run Al Ain as its own campaign when you operate there. Placements are checked separately too. Marketplace suits people browsing for local services and second-hand goods, the feed works for longer explanations and before-and-after images, and Reels needs short vertical video. Where one placement brings leads that never answer, we cut it rather than let the average hide the problem.',
        ],
      },
      {
        heading: 'Judging leads on real customers',
        paragraphs: [
          'The most useful change for most lead campaigns costs nothing: record what happened to every lead. A shared sheet listing every lead, plus a column your team fills in with reached, qualified, booked, won or lost, is enough to begin. You do not need special sales software.',
          'Uploading those lead outcomes each week lets you judge each campaign, form and area on the customers it produced, not on form fills. Getting Meta to optimise toward converted leads comes later. That requires a supported connection, either the Conversions API or an integration with whatever system you use, and only pays off once enough leads convert each week for Meta to learn from. We tell you when that point arrives.',
        ],
      },
      {
        heading: 'Seasons, sensitive sectors and special ad categories',
        paragraphs: [
          'Service demand moves with the year. The summer heat brings AC repair and pest control enquiries, the school calendar drives tutoring and nursery searches, and the cooler months lift outdoor services, events and home improvements. During Ramadan, business hours and online activity shift later, so schedule ads and response cover to match. UAE National Day and Eid are good moments for offers, planned weeks ahead.',
          'Property, recruitment and lending ads may be placed in one of Meta’s special ad categories, along with ads on social or political issues. Some targeting choices are then unavailable, so plan those campaigns around the restrictions from day one.',
        ],
      },
      {
        heading: 'Comment moderation, privacy and remote working',
        paragraphs: [
          'People read the comments under an ad before deciding whether to enquire. Ad and page comments are reviewed on an agreed schedule: we answer simple questions in Arabic or English using wording you approve, hide spam, set keyword filters and pass complaints or detailed requests to your team.',
          'Every instant form gathers personal data, which brings the UAE Personal Data Protection Law (PDPL) into play. Put simply: link a clear privacy notice, tell people how you will contact them and use their details only for that. We are not lawyers; an adviser should check your wording.',
          'We have no office in the UAE. Campaigns are run remotely from our Chennai head office, the UAE is 1.5 hours behind India, and we meet by video call rather than in person in Abu Dhabi. Before you appoint a Facebook ads agency in Abu Dhabi, ask what it does with a lead after the form is sent.',
        ],
      },
    ],
    related: [
      { label: 'Facebook ads agency in Sharjah', href: '/uae/facebook-ads-agency-sharjah/' },
      linkEcom,
      linkMeta,
      linkCompare,
      { label: 'Facebook lead ads for service firms in Dubai', href: '/uae/facebook-ads-agency-dubai/' },
      { label: 'Paid search and social in Dubai with one performance team', href: '/uae/performance-marketing-agency-dubai/' },
    ],
    faqs: [
      { q: 'What does a Facebook ads agency in Abu Dhabi charge?', a: 'Cost follows scope: the services, areas and languages you promote, the number of forms, whether comments are moderated and any tracking repairs. Prices are not listed on our site. You get a free audit, then a written monthly AED quote. Meta takes ad spend from your own ad account, separately from our fee.' },
      { q: 'Should we advertise to the whole of Abu Dhabi?', a: 'Usually not. Target the districts your team can serve well, and treat Al Ain as a separate campaign if you work there. Whole-emirate targeting tends to bring leads you cannot serve profitably. We also add an area question to forms as a second filter, so out-of-area enquiries are spotted before anyone calls.' },
      { q: 'Can our lead forms be in Arabic?', a: 'Yes. Forms, thank-you screens and follow-up messages are built in both Arabic and English, and a fluent Arabic writer writes or checks the Arabic. The form can ask which language the person prefers, so the right member of your team makes the first contact.' },
      { q: 'How do we track which leads become customers without a CRM?', a: 'Begin with a spreadsheet your team keeps up to date, noting what happened to every lead. Uploading those outcomes shows which campaigns produce real customers. Letting Meta optimise toward converted leads requires a supported connection (the Conversions API or an integration) and steady weekly conversions, so we add it once volume justifies it.' },
      { q: 'Is comment moderation part of the service?', a: 'If it is in scope, yes. Ad and page comments are checked on an agreed schedule; we answer simple questions in Arabic or English using wording you have approved, hide spam and pass complaints or detailed requests to your team. Anything sensitive is sent to you before we respond.' },
      { q: 'Can you advertise property or job vacancies on Facebook?', a: 'Yes, within Meta’s rules. Property, job and credit ads can be classed as special ad categories, where some targeting settings are switched off. We build those campaigns around the restrictions and let precise creative and screening questions in the form do the filtering instead.' },
      { q: 'How quickly should we contact a new lead?', a: 'As soon as you reasonably can, ideally within the hour during working time. Interest fades quickly, and people often enquire with several businesses at once. We set up instant notifications and follow-up templates, and we report how fast leads were contacted so slow responses are visible alongside campaign results.' },
    ],
  },

  // ───────────────────────────────────────────── A: Facebook advertising agencies in Abu Dhabi
  {
    slug: 'uae/facebook-advertising-agencies-abu-dhabi',
    kind: 'location',
    market: 'UAE',
    title: 'Facebook Advertising Agencies in Abu Dhabi | A Buyer’s Checklist',
    description: 'Comparing Facebook advertising agencies in Abu Dhabi? Agency types, a scoring checklist, questions, red flags, audits, procurement and keeping accounts yours.',
    primaryKeyword: 'Facebook advertising agencies in Abu Dhabi',
    navLabel: 'Facebook Advertising Agencies Abu Dhabi',
    breadcrumb: [UAE_HUB],
    eyebrow: 'Agency types · Scoring checklist · Questions · Red flags · Audits · Contracts and ownership',
    h1: 'Facebook Advertising Agencies in Abu Dhabi: *How to Choose*',
    intro: 'Shortlisting Facebook advertising agencies in Abu Dhabi takes more than reading proposals. This guide sets out the kinds of agency available, a simple way to score them, the questions and red flags that matter here, what a real audit contains and how contracts should protect your accounts. Magnus Path serves Abu Dhabi remotely from our Chennai head office; how we work comes last.',
    icon: 'social',
    facts: ['Ad accounts stay in your name', 'Written audit before any quote', 'Scope and AED quote in writing'],
    headings: {
      pains: 'Why choosing an ad agency in Abu Dhabi goes wrong',
      includes: 'What working with Magnus Path includes',
      process: 'How we start with an Abu Dhabi client in *4 steps*',
      guide: 'Choosing between Facebook advertising agencies in Abu Dhabi',
    },
    pains: [
      { title: 'Proposals you cannot compare', body: 'One agency quotes for campaigns, another for creative, a third bundles ad spend into its fee, so there is no like-for-like basis for a decision.' },
      { title: 'Arabic treated as an extra', body: 'The pitch is polished in English, but nobody can say who will write the Arabic ads or answer Arabic comments once the campaign is live.' },
      { title: 'Leaving means starting over', body: 'The page, ad account or pixel was set up under the agency’s own business portfolio, so changing supplier means losing years of history and audiences.' },
    ],
    includes: [
      { title: 'A written audit first', body: 'Your account, tracking, creative and results reviewed, with findings and fixes listed in order of impact, useful even if you choose someone else.' },
      { title: 'A quote you can compare', body: 'Scope, timeline, reporting and exclusions set out alongside an AED monthly fee, with ad spend kept separate and paid straight to Meta.' },
      { title: 'Procurement-ready paperwork', body: 'Written scope documents and quotes prepared in the format your procurement team asks for, as far as we can meet its requirements.' },
      { title: 'Everything in your name', body: 'Business portfolio (previously Business Manager), ad accounts, page, pixel and audiences owned by your organisation, with our partner access removable at any time.' },
      { title: 'Named people and fluent Arabic', body: 'You know who runs the account day to day, and Arabic ads are written or checked by a fluent Arabic writer.' },
      { title: 'Reports matched to your results', body: 'Weekly figures checked against your own orders, bookings or leads, including cash-on-delivery refusals where they apply.' },
      { title: 'A clean handover', body: 'If you leave, campaigns, audiences, creative files and reports stay with you and our access is removed the same day.' },
    ],
    process: [
      { title: 'Introductory video call', body: 'We learn about your organisation, goals, approval steps and any procurement requirements, and tell you honestly if we are not the right fit.' },
      { title: 'Free written audit', body: 'Using view-only access, we check who owns what, how tracking works, how campaigns are built, the creative and the results, then send a written report.' },
      { title: 'Proposal and AED quote', body: 'A proposal setting out scope, timeline, reporting and exclusions with an AED monthly fee, formatted for your procurement process if you have one.' },
      { title: 'First month, then review', body: 'Access tidied, tracking fixed and first tests launched against agreed measures, then a call once the month closes to review progress.' },
    ],
    platforms: ['Meta Ads Manager', 'Meta Business Suite', 'Events Manager', 'Conversions API', 'GA4', 'Looker Studio'],
    local: {
      city: 'Abu Dhabi',
      areas: ['Al Maryah Island', 'Corniche', 'Al Khalidiyah', 'Al Reem Island', 'Al Zahiyah', 'Masdar City', 'Khalifa City', 'Saadiyat Island', 'Al Ain'],
      note: 'Magnus Path has no office in the UAE. Organisations across Abu Dhabi and Al Ain are served remotely from our Chennai head office; with the UAE 1.5 hours behind India, our working days overlap almost fully. Audits, proposals and reviews are presented on video calls, and we do not offer in-person meetings in Abu Dhabi.',
    },
    figures: [
      { type: 'mindmap', caption: 'Four things to weigh up before you hand your Facebook and Instagram ads to anyone in Abu Dhabi.', center: 'Comparing ad agencies', after: 0, branches: [
        { label: 'People', items: ['Who does the work', 'Cover for leave'] },
        { label: 'Proof', items: ['Results vs your sales', 'A written audit'] },
        { label: 'Ownership', items: ['Accounts in your name', 'Clean exit terms'] },
        { label: 'Local fit', items: ['Fluent Arabic copy', 'Seasons and Al Ain'] },
      ] },
      { type: 'steps', caption: 'A simple route from a long list of agencies to a signed contract.', after: 2, steps: [
        { title: 'Shortlist', body: 'Three or four agencies of different types' },
        { title: 'Same questions', body: 'Sent in writing to each one' },
        { title: 'Free audits', body: 'Compare findings, not presentations' },
        { title: 'Score', body: 'Rate each on the same checklist' },
        { title: 'Contract review', body: 'Ownership, notice and data terms' },
      ] },
      { type: 'venn', caption: 'Campaigns improve fastest when the agency’s skills and your own knowledge are combined.', after: 4,
        left: { title: 'What the agency brings', body: 'Testing, tracking, creative routines and platform know-how' },
        right: { title: 'What your team brings', body: 'Product knowledge, fast replies and honest sales data' },
        overlap: 'Campaigns that keep improving' },
    ],
    guide: [
      {
        heading: 'Four routes, and where Facebook advertising agencies in Abu Dhabi fit',
        paragraphs: [
          'When you look at Facebook advertising agencies in Abu Dhabi, you are really choosing between four ways of getting the work done. Each has a place, and many organisations in the capital end up combining two of them.',
          'Agencies may also work locally or remotely. A team overseas can run Meta campaigns well if it knows Arabic-first audiences, keeps hours that overlap with yours and is honest about where it is based.',
        ],
        bullets: [
          'Freelancers: one person who plans, builds and reports. Good value for a single simple account, but there is no cover for holidays or sickness',
          'Specialist agencies: teams that concentrate on Meta, sometimes with a second paid channel, usually with deeper testing routines',
          'Full-service agencies: ads alongside branding, PR, content and web work, convenient for large organisations but with paid social as one department among several',
          'In-house teams: common in larger companies and semi-government entities, close to the brand but in need of training, tools and outside review',
        ],
      },
      {
        heading: 'Scoring agencies like for like',
        paragraphs: [
          'Proposals rarely line up, so build a simple scoring sheet and rate each agency from one to five on the same points. It turns a gut feeling into something you can share with colleagues or a procurement committee.',
          'Weight the points to suit you. A semi-government body may weigh paperwork and approvals heavily, while an online store will care most about measurement.',
        ],
        bullets: [
          'People: who manages the account day to day, and how many other accounts they handle',
          'Measurement: whether results are checked against your own sales, bookings or leads',
          'Creative: who writes and produces the ads, how often new ones are tested, and in which languages',
          'Ownership: whether every asset is created in your organisation’s business portfolio',
          'Local knowledge: Arabic copy, Al Ain as a distinct audience, seasonal planning and WhatsApp follow-up',
          'Fit: whether the scope matches what you sell, from catalogue ads to service leads',
        ],
      },
      {
        heading: 'Questions to put to every shortlisted agency',
        paragraphs: [
          'Ask the Facebook advertising agencies in Abu Dhabi on your shortlist the same questions, ideally in writing, so the answers can be compared directly. Precise answers are a good sign; talk of secret methods or special access at Meta is not.',
        ],
        bullets: [
          'Who will write our Arabic ads, and can we see Arabic work you have produced?',
          'How do you plan around the summer slowdown, the cooler-season peak, Ramadan, Eid and UAE National Day?',
          'How will you track WhatsApp enquiries, and COD parcels the customer turns away?',
          'Does ad spend go from our own payment method straight to Meta?',
          'Can you work within our procurement and approval steps?',
          'What happens to campaigns, audiences and creative if we end the contract?',
        ],
      },
      {
        heading: 'What a proper audit should give you',
        paragraphs: [
          'A free audit is the most revealing step in any comparison, because it shows how an agency thinks before money changes hands. It should need only read-only access, take days rather than weeks, and arrive as a written document you keep.',
          'Good audits follow a sensible order. Ownership and access come first, since everything else depends on who controls the account. Tracking comes next: are the pixel and the Conversions API both live, and is each event counted once? Then structure, creative and finally a comparison of what Ads Manager reports against your real orders or leads. Each finding should come with evidence and a suggested fix, ranked by how much it matters.',
          'An audit that is mostly screenshots of charts, or that concludes you simply need to spend more, tells you little.',
        ],
      },
      {
        heading: 'Red flags, contracts and data protection',
        paragraphs: [
          'Read the contract for ownership, notice periods and what is handed back at the end. If campaigns use lead forms or customer lists, check how the agency treats personal data. The UAE Personal Data Protection Law (PDPL) boils down to consent first and use only for the stated purpose. Firms registered in ADGM have their own data protection rules as well. We are not lawyers, so ask an adviser to review both.',
          'Beyond the contract, some warning signs justify walking away, whatever the pitch:',
        ],
        bullets: [
          'Your campaigns live inside the agency’s ad account or portfolio, not yours',
          'One combined invoice that hides how much actually went to Meta',
          'Exact results promised before the account has even been opened',
          'No named person for Arabic copy or Arabic comment replies',
          'Lock-in periods with no handover clause',
        ],
      },
      {
        heading: 'How Magnus Path works with Abu Dhabi organisations',
        paragraphs: [
          'Magnus Path may be on your list, so here is how we operate. We have no office in the UAE; Abu Dhabi clients are served remotely from our Chennai head office. The UAE is 1.5 hours behind India, so our working days overlap closely and meetings happen on video, not in person.',
          'Work begins with a free audit, then a written AED quote. Meta charges ad spend to your organisation’s own ad account, and all assets are registered to you. Our scope follows what you sell: product catalogue campaigns for stores, Instagram and WhatsApp work for bookings and enquiries, or Facebook lead forms for service firms. Hold any of the Facebook advertising agencies in Abu Dhabi you meet, us included, to that same standard.',
        ],
      },
    ],
    related: [
      { label: 'Facebook advertising agencies in Sharjah', href: '/uae/facebook-advertising-agencies-sharjah/' },
      linkEcom,
      linkMeta,
      linkFacebook,
      { label: 'Questions to ask before hiring for Facebook ads in Dubai', href: '/uae/facebook-advertising-agencies-dubai/' },
      { label: 'Test an agency’s ROAS claims with our calculator', href: '/tools/roas-calculator/' },
      { label: 'Ecommerce marketing agency for UAE brands', href: '/uae/ecommerce-marketing-agency/' },
    ],
    faqs: [
      { q: 'What do Facebook advertising agencies in Abu Dhabi charge?', a: 'Fees track scope: campaigns and languages, creative volume, tracking work, how often you get reports and whether other channels are added. Ask every agency to quote its fee apart from ad spend, so the numbers can be compared fairly. Our own quote comes in AED after a free audit, and your ad spend goes to Meta directly.' },
      { q: 'Does an agency need an Abu Dhabi office to do the job well?', a: 'Not necessarily. Everything in Meta advertising is done online, so the real tests are understanding of local audiences, Arabic written or checked by a fluent writer and overlapping working hours. We serve Abu Dhabi remotely from Chennai, with no UAE office; the UAE is 1.5 hours behind India, so our days line up closely.' },
      { q: 'How should a procurement team compare agency proposals?', a: 'Ask every agency for the same items: scope, named staff, reporting, exclusions, notice period, ownership terms and a fee separate from ad spend. Score each against one checklist and request a written audit from the shortlist. Comparing audits shows how each agency thinks, which proposals alone rarely reveal.' },
      { q: 'What is the difference between a specialist and a full-service agency?', a: 'A specialist focuses on Meta and perhaps a couple of other ad platforms, so it usually tests more and knows the platform in more depth. A full-service agency also handles branding, PR, content or websites, which is convenient but can make paid social one small team among many. Choose based on what you need done.' },
      { q: 'Who should own the ad account?', a: 'Your organisation. Every asset, from the business portfolio and ad accounts to the page, pixel, audiences and creative, should be created under your name, with the agency given partner access you can remove whenever you choose. That way, changing agency never means losing campaign history, audiences or data.' },
      { q: 'What are the biggest red flags?', a: 'Running your ads from the agency’s own account, hiding ad spend inside one invoice, promising specific results before looking at your data, vague answers about who writes Arabic copy, and contracts with no handover clause. Any one of these is reason to ask hard questions; several together are reason to walk away.' },
      { q: 'When should we review an agency’s performance?', a: 'The opening weeks are mostly spent repairing tracking and running first tests, so judge them on the quality of work and communication. Reliable conclusions on sales or qualified leads take longer, often a couple of months, depending on budget and conversion volume. Agree in writing what success looks like before the first review.' },
    ],
  },
];
