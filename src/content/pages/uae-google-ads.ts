import type { ServicePageData } from '../../data/types';

const UAE_HUB: { label: string; href: string } = { label: 'United Arab Emirates', href: '/uae/ecommerce-marketing-agency/' };

export const uaeGoogleAdsPages: ServicePageData[] = [
  // ───────────────────────────────────────────── Google Ads agency in Dubai
  {
    slug: 'uae/google-ads-agency-dubai',
    kind: 'global',
    market: 'UAE',
    title: 'Google Ads Agency in Dubai | Search, Leads and Arabic Ads',
    description: 'Google Ads agency in Dubai for UAE businesses: Search in English and Arabic, call, form and WhatsApp lead tracking, and accounts that stay in your name.',
    primaryKeyword: 'Google Ads agency in Dubai',
    navLabel: 'Google Ads Agency Dubai',
    breadcrumb: [UAE_HUB],
    eyebrow: 'For UAE service businesses · Search · Lead tracking · Arabic ads · Performance Max · YouTube',
    h1: 'Google Ads for Dubai and UAE Businesses, *Judged by Real Enquiries*',
    intro: 'Need a Google Ads agency in Dubai that counts enquiries your team can actually sell to, not just clicks? Billion Ecommerce Agency is a Chennai team serving Dubai and the wider UAE remotely. We plan and run Search, Performance Max and YouTube campaigns in English and Arabic, track calls, forms and WhatsApp messages, and send qualified leads back to Google so bidding learns what a good enquiry looks like.',
    icon: 'social',
    facts: ['You pay Google directly', 'Ads in English and Arabic', 'Fee quoted in AED after an audit'],
    headings: {
      pains: 'Where Google Ads money leaks for many UAE businesses',
      includes: 'What our Google Ads management for Dubai and the UAE includes',
      process: 'From first audit to steady leads in *4 steps*',
      guide: 'Google Ads in Dubai and the UAE: a plain guide for business owners',
    },
    pains: [
      { title: 'Plenty of leads, few real customers', body: 'Forms arrive from people outside your service area, job seekers and spam, yet the account reports them as conversions and keeps buying more of the same.' },
      { title: 'Calls and WhatsApp chats go uncounted', body: 'Many UAE customers would rather phone or message than fill in a form. If those contacts are not tracked, Google cannot tell which keywords bring them.' },
      { title: 'An account built on default settings', body: 'Broad match everywhere, a thin negative list, English ads only and targeting that includes people merely interested in the UAE all quietly raise the cost of each enquiry.' },
    ],
    includes: [
      { title: 'Search campaigns built around intent', body: 'Brand, service and competitor searches in separate campaigns, with match types chosen per keyword group and a negative list reviewed every week.' },
      { title: 'English and Arabic ads', body: 'Keyword lists and responsive search ads in both languages, with Arabic written or checked by a fluent writer and sent to an Arabic landing page.' },
      { title: 'Location and schedule targeting', body: 'Targeting by emirate, by radius around your branches or by Dubai area, set to people physically present, with ad schedules that follow your opening hours.' },
      { title: 'Call, form and WhatsApp tracking', body: 'Call assets with Google forwarding numbers, website call conversions, form submissions and WhatsApp button clicks, all recorded as separate actions.' },
      { title: 'Lead quality fed back to Google', body: 'Lead form assets where they suit, click IDs saved with each enquiry, and qualified or won leads uploaded as offline conversions from your sales records.' },
      { title: 'Performance Max, Demand Gen and YouTube', body: 'Wider-reach campaigns added once tracking is reliable, with your own videos and images, audience signals and clear limits on brand traffic.' },
      { title: 'Account audits and restructures', body: 'A full review of an existing account, then a staged rebuild that keeps useful history rather than starting again from zero.' },
      { title: 'GA4, enhanced conversions and reporting', body: 'GA4 and Google Tag Manager checked, enhanced conversions for leads and Consent Mode set up, and a weekly report on cost per qualified enquiry.' },
    ],
    process: [
      { title: 'Free account audit', body: 'We go through your Google Ads account, conversion setup, landing pages and search terms, then talk you through the findings on a video call during your working day.' },
      { title: 'Plan and written quote', body: 'A campaign structure, the conversions that matter, a target cost per qualified lead and a monthly management fee in AED, all set out in writing.' },
      { title: 'Tracking first, then rebuild', body: 'Call, form and WhatsApp tracking fixed before anything else, then Search campaigns rebuilt in stages with Arabic ads and tighter targeting.' },
      { title: 'Weekly work, monthly review', body: 'Search term cleaning, bid and budget changes and new ad tests each week, a short written report, and a monthly call to look at lead quality with you.' },
    ],
    platforms: ['Google Ads', 'Google Analytics 4', 'Google Tag Manager', 'Performance Max', 'Demand Gen', 'YouTube', 'Looker Studio', 'Google Business Profile'],
    figures: [
      { type: 'mindmap', caption: 'The four parts of a Google Ads account that decide the cost of a useful enquiry in the UAE.', center: 'Google Ads for UAE leads', after: 0, branches: [
        { label: 'Search', items: ['Brand and non-brand', 'Match types and negatives', 'Competitor terms'] },
        { label: 'Targeting', items: ['Dubai areas and emirates', 'English and Arabic ads'] },
        { label: 'Lead tracking', items: ['Calls and WhatsApp clicks', 'Forms with click IDs', 'Qualified leads sent back'] },
        { label: 'Wider reach', items: ['Performance Max', 'Demand Gen and YouTube'] },
      ] },
      { type: 'matrix', caption: 'How to sort keywords by how specific they are and how ready the searcher is to get in touch.', after: 1, cols: ['Ready to enquire', 'Still researching'], rows: ['Specific to your service', 'Broad or vague'], cells: [
        { title: 'Bid with priority', body: 'Exact and phrase match, own ad group, matching landing page' },
        { title: 'Test on a budget', body: 'Lower bids, a helpful page, judge by qualified leads' },
        { title: 'Tighten first', body: 'Add negatives and place names before raising bids' },
        { title: 'Usually exclude', body: 'Add as negatives, or reach these people with video' },
      ] },
      { type: 'steps', caption: 'How a lead travels from an ad click back into Google, so bidding learns which enquiries turn into sales.', after: 3, steps: [
        { title: 'Ad click', body: 'Google adds a click ID to the page address' },
        { title: 'Enquiry', body: 'Form, call or WhatsApp message is logged' },
        { title: 'Sales follow-up', body: 'Your team marks it poor, qualified or won' },
        { title: 'Upload', body: 'Qualified and won leads go back to Google' },
        { title: 'Bidding adjusts', body: 'More spend on searches that bring buyers' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Google Ads agency in Dubai should do for a lead-based business',
        paragraphs: [
          'Most businesses in the UAE that advertise on Google are not selling a product in a basket. They want a phone call, a booking or a form: a clinic filling appointment slots, a property broker looking for buyers and tenants, a training institute enrolling students, a B2B supplier chasing trade enquiries, or a cleaning, AC repair or moving company covering a few districts. For all of them, a Google Ads agency in Dubai has one job: bring enquiries your team can turn into revenue, at a cost the business can carry.',
          'That means measuring the right thing. In a default setup, a job seeker’s form and a two-second call both count as conversions. Good management separates useful contacts from noise and tells Google which is which.',
          'Some sectors carry extra rules. Medical and property advertising in Dubai can need approval or a permit number from the relevant authority, so check what applies to you before ads go live. We follow Google’s own policies and your regulator’s guidance, but we are not lawyers.',
          'Your Google Ads account stays in your company’s name, Google bills ad spend to your own card or invoice, and we work through access you can remove at any time.',
        ],
      },
      {
        heading: 'Search campaigns that bring enquiries, not just clicks',
        paragraphs: [
          'Search is where most lead budgets should start. Keep three groups apart: brand searches for your own name, non-brand searches for the service (such as “dental implants Dubai” or “corporate training Abu Dhabi”), and competitor names. Each group behaves differently and needs its own budget and targets.',
          'Match types matter. Exact and phrase match give control over the services you actually offer; broad match can find new searches once conversion data is reliable, but on a new or poorly tracked account it often wanders. Whatever the mix, the negative keyword list does much of the work. Typical negatives for UAE service businesses include jobs, salary, free, course (unless you teach), PDF and the names of areas you do not cover.',
          'Bidding on competitor names is allowed, but you generally cannot use their trademark in ad text, and these clicks cost more and convert less. Treat them as a small test.',
          'If you already run ads, start with an audit, then restructure in stages so the account keeps the history that still helps.',
        ],
      },
      {
        heading: 'Arabic ads and location targeting across Dubai and the emirates',
        paragraphs: [
          'People in the UAE search in English, in Arabic and sometimes in Arabic typed in Latin letters. We build Arabic keyword lists and ads alongside the English ones, with copy written or checked by a fluent writer, and send Arabic searchers to an Arabic landing page.',
          'Location settings are easy to get wrong. Google’s default can include people who are only interested in a place, so a clinic in Al Barsha may pay for clicks from another country. We target people who are present in, or regularly in, your chosen area. That might be all seven emirates, Dubai plus Sharjah and Ajman, a radius around each branch, or specific districts such as Business Bay, Dubai Marina, JLT, Deira or Dubai Silicon Oasis for a home-services firm that only covers certain routes.',
          'Ad schedules should follow your opening hours and the Saturday–Sunday weekend, so calls are not sent to a closed office.',
        ],
      },
      {
        heading: 'Tracking calls, forms and WhatsApp leads properly',
        paragraphs: [
          'Lead tracking has four layers. First, every contact type is a separate conversion: form submissions, calls from call assets, calls from the website number, and clicks on a WhatsApp button. A WhatsApp click shows intent but not a conversation, so we keep it as a secondary action. Second, GA4 and Google Tag Manager are checked so numbers agree. Third, enhanced conversions for leads match enquiries to Google users more reliably. Fourth, and most useful, offline conversion import: each enquiry is stored with its click ID, your team marks it qualified or won, and those results are uploaded back to Google from a sheet or your sales system.',
          'Lead form assets collect details inside the ad. They can bring cheap volume of mixed quality, so add a qualifying question.',
          'The UAE Personal Data Protection Law (PDPL) covers how you collect and use personal data, and free zones such as DIFC and ADGM have their own rules. In plain terms: ask for consent where it is needed, say what you collect in your privacy notice, and only upload data your notice allows. We set up Consent Mode to match your choices, but a local adviser should review the legal side.',
        ],
      },
      {
        heading: 'Performance Max, Demand Gen, YouTube and the UAE calendar',
        paragraphs: [
          'Performance Max runs across Search, YouTube, Display, Gmail and Maps from one campaign. For lead generation it can find cheap form fills that never buy, so we add it only once offline conversions tell Google what a good lead is, and we exclude your brand name where possible. Demand Gen and YouTube suit services people need to understand first, such as treatments, courses or property launches.',
          'The UAE year shapes demand. During Ramadan, office hours shorten and searching moves later into the evening, so schedules and budgets should move too. B2B enquiries tend to slow over the Eid holidays. Education demand builds before each new term, and the Dubai Shopping Festival lifts retail, hospitality and leisure searches around the turn of the year. A good Google Ads agency in Dubai plans these weeks ahead rather than reacting once costs have already risen.',
        ],
      },
      {
        heading: 'If you run an online store',
        paragraphs: [
          'Online stores need a different setup: a Merchant Center product feed, Shopping and Performance Max campaigns split by product margin, and targets based on return on ad spend rather than cost per lead. We cover that in our ecommerce PPC service for Dubai and UAE stores, and our ROAS calculator helps you work out a break-even target.',
          'For every business type, the working arrangement is the same. We have no office in Dubai and do not offer in-person meetings; we are a Chennai team serving Dubai and the wider UAE remotely. UAE time is 1.5 hours behind India, so our working days almost fully overlap and same-day replies are realistic. When you compare any Google Ads agency in Dubai, ask who owns the account, which conversions are counted, and how lead quality reaches Google.',
        ],
      },
    ],
    related: [
      { label: 'Facebook ads agency in Dubai', href: '/uae/facebook-ads-agency-dubai/' },
      { label: 'Ecommerce PPC management for Dubai online stores', href: '/uae/ecommerce-ppc-agency-dubai/' },
      { label: 'Performance marketing agency in Dubai for every paid channel', href: '/uae/performance-marketing-agency-dubai/' },
      { label: 'Digital marketing agency for Dubai businesses', href: '/uae/digital-marketing-agency-dubai/' },
      { label: 'SEO services in Dubai to grow organic enquiries', href: '/uae/seo-services-dubai/' },
      { label: 'Ecommerce marketing agency for the UAE', href: '/uae/ecommerce-marketing-agency/' },
      { label: 'ROAS calculator for break-even ad targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'How much does a Google Ads agency in Dubai cost?', a: 'The fee depends on how many campaigns, languages and locations you need, the state of your tracking, whether an existing account needs restructuring, and how competitive your sector is. We do not publish fixed prices. After a free audit we send a written scope with a monthly management fee in AED. Ad spend is separate and paid by you directly to Google.' },
      { q: 'Where is your team, and can we meet in Dubai?', a: 'No. Billion Ecommerce Agency has no office, address or trade licence in the UAE, and we do not offer in-person meetings there. We are a Chennai team serving Dubai and the wider UAE remotely, using video calls, WhatsApp and shared reports. UAE time is 1.5 hours behind India, so our working days almost fully overlap.' },
      { q: 'Can you track phone calls and WhatsApp enquiries from Google Ads?', a: 'Yes. Calls from call assets and from your website number are tracked with Google forwarding numbers, and clicks on WhatsApp buttons are recorded as their own action. Because a click is not a conversation, we also store the click ID with each enquiry so your team can mark real leads and upload them back to Google.' },
      { q: 'Do you write Google Ads in Arabic?', a: 'Yes. We build Arabic keyword lists and responsive search ads alongside the English ones. Arabic copy is written or checked by a fluent writer rather than machine-translated, and Arabic searchers go to an Arabic landing page. If your site has no Arabic pages yet, we can start with English and add Arabic once a page is ready.' },
      { q: 'Can you audit and fix our existing Google Ads account?', a: 'Yes, and the first audit is free. We review search terms, wasted spend, conversion settings, location options, ad quality and landing pages, then show you what we found on a call. If you go ahead, we restructure in stages so useful history is kept, starting with tracking because every later decision depends on it.' },
      { q: 'Do you run Google Ads for online stores?', a: 'Yes, through a separate service. Online stores need a Merchant Center feed, Shopping and Performance Max campaigns and targets based on return on ad spend, which our ecommerce PPC service for Dubai stores covers. This page is about Google Ads for service and lead-based businesses such as clinics, brokers, schools and B2B suppliers.' },
      { q: 'How soon will we see results?', a: 'Tracking fixes and wasted-spend cuts often show within the first few weeks. New campaigns and bidding strategies need time to collect data, and offline conversion import needs enough qualified leads before Google can learn from it. We agree checkpoints at the start and report cost per qualified enquiry weekly, so you can judge progress yourself.' },
    ],
  },
];
