import type { ServicePageData } from '../../data/types';

const UAE_HUB: { label: string; href: string } = { label: 'United Arab Emirates', href: '/uae/ecommerce-marketing-agency/' };

export const uaeMarketingPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. Digital marketing agency in Dubai
  {
    slug: 'uae/digital-marketing-agency-dubai',
    kind: 'global',
    market: 'UAE',
    title: 'Digital Marketing Agency in Dubai, Sales-Led',
    description: 'Digital marketing for Dubai and UAE businesses: SEO, Google, Meta, Snapchat, TikTok and LinkedIn ads in Arabic and English, judged on sales. Quoted in AED.',
    primaryKeyword: 'digital marketing agency in Dubai',
    navLabel: 'Digital Marketing Agency Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'For Dubai and UAE businesses · SEO · Google · Meta · Snapchat · TikTok · LinkedIn',
    h1: 'Digital Marketing Agency for Dubai, *Measured in Sales*',
    intro: 'Looking for a digital marketing agency in Dubai that reports on sales and leads, not likes? Billion Ecommerce Agency is a Chennai team serving Dubai and the wider UAE remotely. We run SEO, Google, Meta, Snapchat, TikTok and LinkedIn campaigns in Arabic and English, with tracking that follows each enquiry to a sale. Our working days almost fully overlap with yours.',
    icon: 'social',
    facts: ['UAE is 1.5 hrs behind IST', 'Arabic and English campaigns', 'Quoted in AED after an audit'],
    headings: {
      pains: 'Why Dubai businesses lose faith in marketing agencies',
      includes: 'What our digital marketing for UAE businesses covers',
      process: 'Getting started from Dubai in *4 steps*',
      guide: 'How to choose a digital marketing agency in Dubai: a buyer’s guide',
    },
    pains: [
      { title: 'Reports full of reach, short on revenue', body: 'Monthly decks show impressions, followers and engagement. Nobody can say how many enquiries became customers or which campaign paid for itself.' },
      { title: 'Leads that go cold on WhatsApp', body: 'Ads bring messages and form fills, but replies come hours later, nobody follows up, and sales blames the leads while marketing blames sales.' },
      { title: 'English-only thinking in a bilingual market', body: 'Arabic ads are a translated caption on an English video, landing pages break right to left, and a large part of your audience scrolls past.' },
    ],
    includes: [
      { title: 'SEO for Google in the UAE', body: 'Technical fixes, service and product pages, English and Arabic versions with hreflang, and Google Business Profile for clinics, showrooms and restaurants.' },
      { title: 'Google Ads', body: 'Search, Performance Max, Shopping for online stores and YouTube, with tight keyword lists, negatives and call and form tracking from day one.' },
      { title: 'Meta, Instagram, Snapchat and TikTok ads', body: 'Lead forms, click-to-WhatsApp and sales campaigns, with native vertical creative briefed separately for Arabic and English audiences.' },
      { title: 'LinkedIn ads for B2B', body: 'Campaigns aimed at job titles, industries and named companies, for B2B services, distributors, corporate training and professional firms.' },
      { title: 'Websites and landing pages', body: 'Fast bilingual landing pages and websites, tested right to left, with short forms, click-to-call and WhatsApp buttons that are tracked.' },
      { title: 'Tracking and WhatsApp lead handling', body: 'GA4, Meta Conversions API, WhatsApp Business routing and a simple CRM, with qualified leads and sales sent back to the ad platforms.' },
    ],
    process: [
      { title: 'Free audit and call', body: 'We review your website, ad accounts, tracking and how leads are handled today, then walk you through the findings on a video call in your working day.' },
      { title: 'Written plan and AED quote', body: 'Agreed goals such as orders, booked appointments or qualified meetings, the channels that fit them, monthly tasks and a quote in AED.' },
      { title: 'Onboarding and tracking', body: 'Access to ad accounts and your website, tracking and WhatsApp set-up, a shared project board and a WhatsApp or Slack channel for day-to-day questions.' },
      { title: 'Run, report and review', body: 'Daily campaign management, a monthly report on leads, sales and cost per result, and a review call to agree next month’s priorities.' },
    ],
    platforms: ['Google Ads', 'Meta Ads', 'Snapchat Ads', 'TikTok Ads', 'LinkedIn Ads', 'GA4', 'Google Tag Manager', 'Google Business Profile', 'WhatsApp Business', 'Shopify', 'WordPress'],
    figures: [
      { type: 'matrix', caption: 'Which channels fit, depending on who you sell to and whether they are already looking.', after: 1, cols: ['Already searching', 'Not looking yet'], rows: ['Selling to consumers', 'Selling to businesses'], cells: [
        { title: 'Google Search', body: 'Catch people who know what they need, from clinics to products' },
        { title: 'Meta, Snap, TikTok', body: 'Build demand with phone-shot video and click-to-WhatsApp ads' },
        { title: 'Search, B2B terms', body: 'Supplier and service searches from buyers ready to ask' },
        { title: 'LinkedIn', body: 'Reach decision-makers by job title and company' },
      ] },
      { type: 'venn', caption: 'Arabic and English ads share an offer but need their own words and creative.', after: 2, left: { title: 'Arabic ads', body: 'own hook and copy, landing pages that read right to left' }, right: { title: 'English ads', body: 'for the many residents who search and scroll in English' }, overlap: 'Same offer, separate creative' },
    ],
    guide: [
      {
        heading: 'What a digital marketing agency in Dubai should deliver',
        paragraphs: [
          'Dubai has a crowded agency market, and most agencies promise the same things: more visibility, more followers, more engagement. Those numbers are easy to report and hard to bank. A digital marketing agency in Dubai earns its fee when it can show which campaigns produced enquiries, which enquiries became customers and what each one cost.',
          'That applies whether you sell online or not. An e-commerce brand needs paid orders after returns and COD refusals. A real estate broker needs qualified viewings, a clinic needs booked appointments, a training institute needs enrolments, and a B2B supplier needs meetings with the right buyers. A restaurant needs covers and delivery orders. The channels overlap; the measure of success does not. We start every account by agreeing that measure in writing.',
          'For e-commerce brands, that also means looking beyond your own website. Amazon.ae and Noon sales often rise when social campaigns run, so where you sell on both we report marketplace and store revenue together instead of crediting each channel in isolation.',
        ],
      },
      {
        heading: 'Choosing channels: Google, Meta, Snapchat, TikTok and LinkedIn',
        paragraphs: [
          'Google Search catches people who already know what they need, from a clinic nearby to a specific product, which is why it usually comes first for service businesses. Performance Max and Shopping suit online stores with a clean product feed. Meta and Instagram build demand and work well with lead forms and click-to-WhatsApp ads.',
          'Snapchat and TikTok are strong in the Gulf and reward native, phone-shot creative over polished TV-style ads. LinkedIn costs more per click but can reach decision-makers by job title and company, which makes it useful for B2B services, distributors and corporate training. Most businesses do not need every channel. Two or three run well beat six run thinly.',
        ],
        bullets: [
          'Google Search and Performance Max for people already looking',
          'Meta and Instagram for reach, retargeting and lead forms',
          'Snapchat and TikTok for mobile-first audiences and video',
          'LinkedIn for B2B decision-makers',
        ],
      },
      {
        heading: 'Arabic and English campaigns that do not feel translated',
        paragraphs: [
          'The UAE is bilingual and its audiences are mixed. Some respond better to Arabic ads, while many residents search and scroll in English. A translated caption on an English video rarely works. Each language needs its own hook, copy and, ideally, its own creative.',
          'We do not have in-house Arabic writers. We plan bilingual campaigns, coordinate professional translators or your team for copy, and build landing pages that work right to left. We also watch advertising rules: real estate, healthcare and financial services ads face extra checks from the platforms and local authorities, so claims and permit details need care. We are not lawyers, so regulated businesses should confirm wording with their adviser.',
        ],
      },
      {
        heading: 'WhatsApp, lead handling and tracking',
        paragraphs: [
          'In Dubai, many enquiries arrive on WhatsApp rather than through a form. That is good for conversion but bad for measurement, because the conversation leaves your website and the ad platform never learns what happened. Speed matters as well: a lead answered within minutes behaves very differently from one answered the next day.',
          'We set up click-to-WhatsApp tracking, route messages to the right person with WhatsApp Business, and log each lead’s status in a CRM or a shared sheet. Those outcomes go back to Google and Meta as offline conversions, so campaigns learn from qualified leads and sales, not from anyone who tapped a button. Under the UAE PDPL, forms and pixels should respect consent; we are not lawyers, so take local advice on your privacy policy.',
        ],
      },
      {
        heading: 'What drives the cost of digital marketing in Dubai',
        paragraphs: [
          'Prices vary widely, and a quote without context tells you little. Be careful comparing a cheap fee from one digital marketing agency in Dubai with a fuller proposal from another. A low fee often means templated ads, no tracking work and a junior account manager, which can cost more in wasted spend than the difference in fees.',
          'When you compare proposals, look at what each one includes. The main cost factors are:',
        ],
        bullets: [
          'How many channels are managed, and how often campaigns change',
          'Whether creative, video and Arabic copy come from the agency or from you',
          'Website or landing page work needed before ads can convert',
          'Tracking, CRM and WhatsApp set-up, which is mostly a one-off cost',
          'Reporting depth and how many review calls you want',
        ],
      },
      {
        heading: 'Working with a remote team, and questions to ask any agency',
        paragraphs: [
          'Ad spend is separate from the agency fee and should always be paid from your own accounts. Be wary of any proposal that folds spend into a fixed fee, because you cannot see what reached the platforms. We quote a monthly retainer in AED after a free audit, so the scope matches what you need.',
          'We have no office, address or trade licence in Dubai, and we do not offer in-person meetings. Billion Ecommerce Agency is a Chennai team serving Dubai and the wider UAE remotely, through video calls, WhatsApp and a shared project board. UAE time is 1.5 hours behind India, so our working days almost fully overlap and same-day replies are realistic.',
          'A remote model suits businesses that care more about results than a meeting room. Whichever digital marketing agency in Dubai you shortlist, including us, ask these questions before you sign:',
        ],
        bullets: [
          'Who will run my account day to day, and how senior are they?',
          'Will I own the ad accounts, pixels, website and data?',
          'How will you track WhatsApp and phone enquiries back to campaigns?',
          'What does the monthly report show apart from reach and clicks?',
        ],
      },
    ],
    related: [
      { label: 'Facebook ads agency in Abu Dhabi', href: '/uae/facebook-ads-agency-abu-dhabi/' },
      { label: 'Facebook advertising agencies in Dubai', href: '/uae/facebook-advertising-agencies-dubai/' },
      { label: 'Google Ads agency in Dubai', href: '/uae/google-ads-agency-dubai/' },
      { label: 'Ecommerce agency in Dubai and the UAE', href: '/uae/ecommerce-marketing-agency/' },
      { label: 'Performance marketing agency in Dubai', href: '/uae/performance-marketing-agency-dubai/' },
      { label: 'SEO services in Dubai', href: '/uae/seo-services-dubai/' },
      { label: 'Ecommerce website development in Dubai', href: '/uae/ecommerce-website-development-dubai/' },
      { label: 'Free marketing audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'Do you have an office in Dubai?', a: 'No. Billion Ecommerce Agency has no office, address or trade licence in Dubai. We are a Chennai team serving Dubai and the wider UAE remotely, through video calls, WhatsApp and a shared project board. UAE time is 1.5 hours behind India, so our working days almost fully overlap and same-day replies are realistic.' },
      { q: 'Do you work with service businesses or only e-commerce?', a: 'Both. Our roots are in e-commerce, but the same sales-led approach works for real estate, clinics, education, restaurants and B2B companies. For service businesses we focus on qualified enquiries: calls, WhatsApp messages and forms tracked through to booked appointments, viewings, enrolments or meetings.' },
      { q: 'Which platforms do you manage?', a: 'Google Ads, including Search, Performance Max, Shopping and YouTube, plus Meta and Instagram, Snapchat, TikTok and LinkedIn, alongside SEO and Google Business Profile. We recommend two or three channels based on your audience, goals and budget rather than spreading spend thinly across all of them.' },
      { q: 'Can you run campaigns in Arabic and English?', a: 'Yes. We plan separate Arabic and English campaigns with their own hooks and copy, and build landing pages that work right to left. We do not have in-house Arabic writers, so we coordinate professional translators or your team, then check every ad and page before launch.' },
      { q: 'How do you track leads that come through WhatsApp?', a: 'We track clicks to WhatsApp from ads and your website, route chats with WhatsApp Business and record each lead’s status in a CRM or shared sheet. Qualified leads and sales are sent back to Google and Meta as offline conversions, so campaigns optimise for real customers.' },
      { q: 'How much does a digital marketing agency in Dubai cost?', a: 'It depends on the number of channels, whether we produce creative and Arabic copy, and how much website and tracking work is needed. We do not publish fixed UAE prices. After a free audit we send a written scope with a monthly quote in AED. Ad spend is paid from your own accounts.' },
      { q: 'How quickly will we see results?', a: 'Paid campaigns usually start producing enquiries within the first few weeks, although the first month is mostly testing audiences, messages and creative. SEO takes longer, often several months before rankings move meaningfully. We agree realistic milestones in the plan and report against them every month.' },
      { q: 'Will we own our ad accounts and data?', a: 'Yes. Ad accounts, pixels, Google Business Profile, website and CRM stay in your company’s name, and we work through access you grant. If you stop working with us, everything stays with you, including campaign history, audiences and past reports.' },
    ],
  },

  // ───────────────────────────────────────────── 2. Performance marketing agency in Dubai
  {
    slug: 'uae/performance-marketing-agency-dubai',
    kind: 'global',
    market: 'UAE',
    twin: 'performance-marketing',
    title: 'Performance Marketing Agency in Dubai | Billion Ecommerce Agency',
    description: 'Performance marketing for UAE online brands: Meta, Google, Snapchat and TikTok ads in Arabic and English, set by margin and checked against paid orders.',
    primaryKeyword: 'performance marketing agency in Dubai',
    navLabel: 'Performance Marketing Agency Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'For UAE e-commerce brands · Meta · Google · Snapchat · TikTok · Noon and Amazon ads',
    h1: 'Performance Marketing Agency for Dubai Brands, *Set by Margin*',
    intro: 'Need a performance marketing agency in Dubai that judges ads on paid orders, not platform ROAS? Billion Ecommerce Agency is a Chennai team running Meta, Google, Snapchat and TikTok campaigns for UAE online brands, remotely. We set targets by margin, test Arabic and English creative, and fix tracking so cash-on-delivery refusals stop inflating your numbers.',
    icon: 'social',
    facts: ['Targets set by product margin', 'Arabic and English creative', 'Quoted in AED after an audit'],
    headings: {
      pains: 'Where UAE ad budgets leak',
      includes: 'What our performance marketing for UAE brands covers',
      process: 'Taking over your ad accounts in *4 steps*',
      guide: 'Performance marketing in Dubai and the UAE: a guide for online brands',
    },
    pains: [
      { title: 'ROAS inflated by orders nobody paid for', body: 'Platforms count a COD order the moment it is placed. Refused parcels and failed deliveries never come back out, so campaigns look profitable when they are not.' },
      { title: 'Peak seasons planned the week before', body: 'Ramadan, White Friday and the Dubai Shopping Festival arrive, costs rise, stock runs short and creative is rushed, so the busiest weeks deliver the thinnest margin.' },
      { title: 'One creative carrying the whole account', body: 'A single English video runs for months on Meta, Snapchat and TikTok. Frequency climbs, costs climb, and nobody tests a new hook or an Arabic version.' },
    ],
    includes: [
      { title: 'Meta and Instagram ads', body: 'Prospecting, retargeting, Advantage+ shopping and catalogue ads, with audiences and budgets built around your best-margin products.' },
      { title: 'Google Search, Shopping and Performance Max', body: 'Merchant Center feed fixes in English and Arabic, AED pricing checks, and Shopping and Performance Max campaigns split by margin and best-sellers.' },
      { title: 'Snapchat and TikTok ads', body: 'Native vertical video, Spark Ads and catalogue campaigns, started on test budgets and scaled only when paid orders follow.' },
      { title: 'Creative testing in Arabic and English', body: 'Hooks, offers and formats tested in a planned order for each language, with briefs for creators and your designer and quick variations in-house.' },
      { title: 'Server-side tracking and Conversions API', body: 'Meta Conversions API, Google enhanced conversions and server-side tagging, deduplicated against the pixel and set up with consent in mind.' },
      { title: 'COD-adjusted reporting', body: 'Weekly reports that split placed, confirmed and delivered orders by campaign, with confirmed sales sent back to the platforms for bidding.' },
    ],
    process: [
      { title: 'Free account audit', body: 'We review your ad accounts, tracking, product feed and COD data, then walk you through what we found on a video call in your working day.' },
      { title: 'Margin targets and AED quote', body: 'Break-even ROAS and target cost per order by product group, a channel and testing plan, and a monthly quote in AED.' },
      { title: 'Onboarding and tracking fixes', body: 'Account access, Conversions API and enhanced conversions, feed fixes, order confirmation flow and a shared reporting sheet.' },
      { title: 'Test, scale and report', body: 'Weekly creative tests and budget changes, a weekly report on delivered orders and cost per order, and a monthly review call.' },
    ],
    platforms: ['Meta Ads', 'Google Ads', 'Google Merchant Center', 'Snapchat Ads', 'TikTok Ads', 'Noon Ads', 'Amazon Ads', 'GA4', 'Google Tag Manager', 'Shopify', 'Klaviyo'],
    figures: [
      { type: 'mindmap', caption: 'What comes out of each order before you know the most you can pay to win it.', center: 'Profit per order', after: 0, branches: [
        { label: 'Order value', items: ['Average order value', 'Bundles for thin margins'] },
        { label: 'Product', items: ['Product cost', 'Expected returns'] },
        { label: 'Getting there', items: ['Delivery cost', 'COD orders refused'] },
        { label: 'Fees and tax', items: ['Payment fees', '5% VAT'] },
      ] },
      { type: 'steps', caption: 'How cash-on-delivery orders are confirmed and fed back, so ad platforms learn from buyers who pay.', after: 2, steps: [
        { title: 'Order placed', body: 'Meta and Google count it straight away' },
        { title: 'Confirm first', body: 'WhatsApp or SMS check before dispatch' },
        { title: 'Track by campaign', body: 'Placed, confirmed and delivered orders' },
        { title: 'Send back', body: 'Confirmed or delivered orders as conversions' },
        { title: 'Cut the weak spots', body: 'Pause campaigns with many refusals' },
      ] },
    ],
    guide: [
      {
        heading: 'What a performance marketing agency in Dubai should be judged on',
        paragraphs: [
          'Performance marketing means paying for media against a measurable result: a purchase, a lead, an app install. For a UAE online brand, the result that matters is a paid, delivered order at a profit. A performance marketing agency in Dubai that reports platform ROAS alone is reporting the number that is easiest to inflate.',
          'Set targets from your margin first. Take your average order value, subtract product cost, delivery, payment fees, 5% VAT and expected returns, and what remains is the most you can pay to win an order. That figure becomes your target cost per order, and break-even ROAS follows from it. Products with thin margins need tighter targets, or should be advertised mainly inside bundles.',
          'This matters most when budgets grow. Any performance marketing agency in Dubai can make a small account look good by spending mainly on retargeting and branded search, where people would have bought anyway. Real growth comes from prospecting that still pays back once delivered orders are counted, so we report new-customer orders separately.',
        ],
      },
      {
        heading: 'Meta, Google, Snapchat and TikTok: how the budget splits',
        paragraphs: [
          'Meta and Instagram usually carry prospecting for UAE fashion, beauty and home brands, with Advantage+ shopping and catalogue ads doing much of the work once tracking is clean. Google Search catches people looking for your brand or product type, while Shopping and Performance Max cover product discovery. Both depend on a clean Merchant Center feed with accurate AED prices.',
          'Snapchat and TikTok are strong in the Gulf and often reach shoppers your Meta ads miss. They reward native, vertical video filmed on a phone more than polished brand films. We start them on test budgets and scale what shows up in paid orders, not just in-platform conversions.',
          'Noon Ads and Amazon Ads sit alongside these. Marketplace ads capture shoppers already searching on Noon or Amazon.ae, and social ads often lift those searches, so we read results across channels rather than in isolation.',
        ],
      },
      {
        heading: 'Cash on delivery and the ROAS you are shown',
        paragraphs: [
          'Cash on delivery is still common in the UAE, and it quietly distorts ad reporting. Meta and Google count a purchase when the order is placed. If some COD orders are refused or never reached, reported ROAS overstates real revenue, and the algorithm keeps finding more people who order but do not pay.',
          'We fix this in three steps. First, order confirmation by WhatsApp or SMS before dispatch. Second, reporting that separates placed, confirmed and delivered orders by campaign. Third, sending confirmed or delivered orders back to the platforms as conversions, so bidding learns from buyers who pay. Prepaid options such as cards, Apple Pay, Tabby and Tamara can also be nudged at checkout.',
          'Watch the confirmation rate by campaign, not only overall. Some audiences, offers and placements bring far more refusals than others, and those are the first places to cut spend or switch to prepaid-only offers.',
        ],
      },
      {
        heading: 'Server-side tracking and Conversions API',
        paragraphs: [
          'Browser pixels miss conversions as ad blockers, privacy settings and in-app browsers interfere. Meta’s Conversions API, Google’s enhanced conversions and server-side tagging send purchase events from your server, deduplicated against the pixel, so platforms see a more complete picture. Server-side events also carry order values more reliably, which helps value-based bidding on both platforms.',
          'Tracking also needs to respect consent. The UAE PDPL covers personal data, so we set up consent handling and pass only the data your policy allows. We are not lawyers, so have your privacy policy reviewed locally. Once tracking is in place, we check platform numbers against your store orders every week.',
        ],
      },
      {
        heading: 'Planning Ramadan, White Friday and DSF budgets',
        paragraphs: [
          'The UAE retail calendar does not follow the Western one. During Ramadan, browsing shifts later into the evening and gifting demand builds towards Eid. White Friday brings heavy discounting and busier auctions. The Dubai Shopping Festival lifts demand across several weeks around the turn of the year. Good peak planning starts six to eight weeks out:',
        ],
        bullets: [
          'Agree stock levels and which products will carry the offer',
          'Brief Arabic and English creative early, with a tone that suits Ramadan',
          'Raise budgets gradually so campaigns learn before the peak',
          'Set a cost-per-order ceiling and pause products that cross it',
          'Compare delivered revenue and margin with the previous peak afterwards',
        ],
      },
      {
        heading: 'Creative testing, and how to choose an agency',
        paragraphs: [
          'Creative is now the biggest targeting lever on Meta, Snapchat and TikTok. We test hooks, offers and formats in a planned order, in Arabic and English separately, because the two audiences often respond to different messages. We coordinate professional translators or your team for Arabic copy rather than relying on machine translation.',
          'We have no office in Dubai and do not offer in-person meetings. We are a Chennai team serving Dubai and the wider UAE remotely, and UAE time is only 1.5 hours behind India, so our working days almost fully overlap. Whichever performance marketing agency in Dubai you speak to, ask how they handle COD in reporting, who owns the ad accounts, and how often creative is refreshed.',
        ],
      },
    ],
    related: [
      { label: 'Festive sale playbook', href: '/resources/festive-sale-playbook/' },
      { label: 'Facebook ads agency in Dubai', href: '/uae/facebook-ads-agency-dubai/' },
      { label: 'Meta ads agency in Dubai', href: '/uae/meta-ads-agency-dubai/' },
      { label: 'Google Ads agency in Dubai', href: '/uae/google-ads-agency-dubai/' },
      { label: 'Ecommerce PPC agency in Dubai', href: '/uae/ecommerce-ppc-agency-dubai/' },
      { label: 'Ecommerce agency in Dubai and the UAE', href: '/uae/ecommerce-marketing-agency/' },
      { label: 'Digital marketing agency in Dubai', href: '/uae/digital-marketing-agency-dubai/' },
      { label: 'Amazon.ae and Noon ads management', href: '/uae/amazon-noon-agency/' },
      { label: 'ROAS calculator for break-even targets', href: '/tools/roas-calculator/' },
      { label: 'How to reduce COD returns and RTO', href: '/blog/how-to-reduce-rto-cod-returns/' },
    ],
    faqs: [
      { q: 'Do you have an office in Dubai?', a: 'No. Billion Ecommerce Agency has no office, address or trade licence in Dubai. We are a Chennai team serving Dubai and the wider UAE remotely, through video calls, WhatsApp and a shared reporting sheet. UAE time is 1.5 hours behind India, so our working days almost fully overlap and same-day changes are realistic.' },
      { q: 'What ROAS should a UAE e-commerce brand target?', a: 'There is no single right number. Your target depends on margin after product cost, delivery, payment fees, VAT and returns. We work out break-even ROAS and a target cost per order for each product group, then judge campaigns on confirmed or delivered orders rather than the platform’s own figure.' },
      { q: 'How does cash on delivery affect reported ROAS?', a: 'Ad platforms count a COD purchase when the order is placed, so refused parcels and failed deliveries still look like sales. That inflates ROAS and teaches bidding to find non-payers. We add order confirmation, report delivered orders by campaign and send confirmed sales back to the platforms.' },
      { q: 'Do you run Snapchat and TikTok ads?', a: 'Yes. Snapchat and TikTok are strong in the Gulf and often reach shoppers Meta misses. We run them with native vertical video, Spark Ads and catalogue campaigns, starting on test budgets and scaling only the campaigns that show up in paid orders.' },
      { q: 'Do you also manage Noon and Amazon.ae ads?', a: 'Yes, as part of a wider plan. Noon Ads and Amazon Sponsored Products capture shoppers already searching on the marketplaces, and social campaigns often lift those searches. For full marketplace management, including listings and stock, see our Amazon and Noon agency service.' },
      { q: 'What is server-side tracking and do I need it?', a: 'Server-side tracking sends purchase events from your server to Meta and Google, alongside the browser pixel, so fewer conversions are lost to ad blockers and privacy settings. If you spend meaningfully on ads, it usually pays for itself through better reporting and smarter bidding.' },
      { q: 'How much does performance marketing in Dubai cost?', a: 'It depends on the number of channels, your ad spend, how much creative we produce and the tracking work needed. We do not publish fixed UAE prices. After a free audit we send a written scope with a monthly quote in AED, and ad spend is paid from your own accounts.' },
    ],
  },
];
