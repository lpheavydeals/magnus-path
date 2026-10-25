import type { ServicePageData } from '../../data/types';

export const bangaloreGoogleAdsPages: ServicePageData[] = [
  // ───────────────────────── Google Ads Agency in Bangalore ─────────────────────────
  {
    slug: 'bangalore/google-ads-agency',
    kind: 'location',
    title: 'Google Ads Agency in Bangalore | Lead-Gen Search',
    description: 'Google Ads agency in Bangalore for startups, clinics, colleges, B2B and local firms: Search, call and WhatsApp lead tracking, Kannada ads. Free audit first.',
    primaryKeyword: 'Google Ads agency in Bangalore',
    navLabel: 'Google Ads Agency Bangalore',
    breadcrumb: [{ label: 'E-commerce Ads', href: '/performance-marketing/' }],
    eyebrow: 'Google Ads for Bengaluru businesses',
    h1: 'Google Ads Agency in Bangalore for *Leads Your Team Can Close*',
    intro: 'Billion Ecommerce Agency is a Google Ads agency in Bangalore for businesses that need enquiries, not just clicks. We run Search, local and YouTube campaigns for startups, B2B firms, clinics, colleges, builders and home-service companies, track every call, form and WhatsApp chat, and feed sales outcomes back to Google. Meet us at our Bengaluru office by appointment.',
    icon: 'social',
    facts: ['Free account audit first', 'Ad account stays in your name', 'Meet us in Bengaluru'],
    headings: {
      pains: 'Why Google Ads disappoint so many Bengaluru businesses',
      includes: 'What our Google Ads management includes',
      process: 'How we start on your Google Ads in *4 steps*',
      guide: 'Google Ads for Bengaluru lead generation: a practical guide',
    },
    pains: [
      { title: 'Plenty of leads, few real buyers', body: 'The account reports a low cost per lead, but your sales team spends the week calling wrong numbers, job seekers and people outside your service area.' },
      { title: 'Broad keywords with no negatives', body: 'Ads appear for free, jobs, courses, DIY and competitor support searches because nobody reads the search terms report or maintains a negative list.' },
      { title: 'Calls and WhatsApp chats go uncounted', body: 'Most of your enquiries arrive by phone or WhatsApp, yet only form fills are tracked, so Google keeps backing the campaigns that bring the fewest real conversations.' },
    ],
    includes: [
      { title: 'Search campaign structure', body: 'Separate brand, non-brand and competitor campaigns, sensible match types, shared negative lists and ad groups tight enough that each ad answers the search behind it.' },
      { title: 'Kannada and English ads', body: 'Keywords and ad copy in both languages where your buyers search that way, with the Kannada versions written or checked by a fluent Kannada writer before they go live.' },
      { title: 'Location and radius targeting', body: 'Targeting set by pin code, locality or radius across Bengaluru and the rest of Karnataka, with presence-based settings so people elsewhere searching about the city are left out.' },
      { title: 'Call, form and WhatsApp tracking', body: 'Call extensions, website calls, form submissions and WhatsApp clicks tracked as separate conversions, so you can see which campaigns start which kind of conversation.' },
      { title: 'Offline conversion import', body: 'Lead outcomes from your sales team or CRM sent back to Google Ads, so bidding learns from qualified leads, site visits and closed deals rather than raw enquiries.' },
      { title: 'Local campaigns and Google Business Profile', body: 'Your Business Profile linked to the account, location assets on ads, and store visits, direction requests and calls measured for showrooms, clinics and branches.' },
      { title: 'YouTube and Demand Gen', body: 'Short video and image campaigns that build awareness in Bengaluru before people search, sized so they support Search instead of draining its budget.' },
      { title: 'Audits, restructures and GA4', body: 'A full review of an existing account, a phased rebuild where needed, and GA4 with enhanced conversions set up so reported leads match what your team receives.' },
    ],
    process: [
      { title: 'Audit and lead review', body: 'We study your account, landing pages and tracking, and listen to how your team describes a good lead. You get a written list of what to keep, fix and stop.' },
      { title: 'Tracking before targeting', body: 'Calls, forms and WhatsApp are set up as conversions, and a simple way to mark lead quality is agreed with your sales team before bids change.' },
      { title: 'Rebuild in phases', body: 'Search campaigns are restructured with new keywords, negatives and Kannada or English ads, while campaigns that already work keep running alongside.' },
      { title: 'Weekly care, monthly review', body: 'Search terms, bids and budgets are checked weekly. Once a month we review lead quality and cost per qualified lead with you, in Bengaluru or on video.' },
    ],
    platforms: ['Google Ads', 'Google Analytics 4', 'Google Tag Manager', 'Google Business Profile', 'YouTube', 'Demand Gen', 'Looker Studio', 'WhatsApp Business'],
    local: {
      city: 'Bangalore',
      areas: ['Malleshwaram', 'Rajajinagar', 'Basavanagudi', 'JP Nagar', 'BTM Layout', 'Hebbal', 'Yelahanka', 'Sarjapur Road', 'Bannerghatta Road', 'Ulsoor'],
      note: 'Clients can meet us at our Bengaluru office by appointment for audit reviews, keyword and lead-quality workshops, and monthly check-ins; these workshops come within the agreed scope. Much of the campaign building and daily account work is carried out by our Chennai head-office team on the same working hours, with updates by video call and WhatsApp.',
    },
    figures: [
      { type: 'mindmap', caption: 'The four parts of a Google Ads account that produces useful leads in Bengaluru.', after: 0, center: 'Lead-gen Google Ads', branches: [
        { label: 'Search', items: ['Brand and non-brand', 'Match types and negatives', 'Competitor terms'] },
        { label: 'Reach', items: ['Radius and pin codes', 'Kannada and English ads', 'YouTube and Demand Gen'] },
        { label: 'Tracking', items: ['Calls, forms, WhatsApp', 'Offline conversion import', 'GA4 and enhanced data'] },
        { label: 'Planning', items: ['Admission season', 'Ugadi, Dasara, Diwali', 'Year-end B2B budgets'] },
      ] },
      { type: 'steps', caption: 'How a sales team’s lead outcomes get back into Google Ads so bidding favours real buyers.', after: 2, steps: [
        { title: 'Capture click ID', body: 'Store the Google click ID with every lead' },
        { title: 'Mark the outcome', body: 'Sales tags each lead: junk, qualified, won' },
        { title: 'Export on a rhythm', body: 'Upload outcomes daily or weekly, not yearly' },
        { title: 'Bid on quality', body: 'Optimise to qualified leads, not every form' },
      ] },
      { type: 'venn', caption: 'Why Search and YouTube do different jobs for a Bengaluru business, and work together.', after: 3, left: { title: 'Search', body: 'Catches people already looking for your service today' }, right: { title: 'YouTube and Demand Gen', body: 'Puts your name in front of people before they need you' }, overlap: 'More searches for your brand later' },
    ],
    guide: [
      {
        heading: 'What a Google Ads agency in Bangalore should do for lead-led businesses',
        paragraphs: [
          'Most Bengaluru businesses that advertise on Google are not selling a product in a cart. A SaaS startup wants demo bookings and trial sign-ups. An IT services firm wants a meeting with a decision maker. A dental clinic wants appointments, a coaching institute wants counselling calls, a builder wants site visits and a modular kitchen showroom wants walk-ins. Each of these is a lead, and leads are judged after the click, by your sales or front-desk team.',
          'That changes what good management looks like. A Google Ads agency in Bangalore should care less about cheap clicks and more about which searches turn into conversations your team can close. That means careful keyword choice, honest tracking of calls and chats, and a feedback loop from sales to the ad account. The rest of this guide explains how to set that up, whether you hire us or run the account yourself.',
        ],
      },
      {
        heading: 'Search structure: brand, non-brand, match types and negatives',
        paragraphs: [
          'Split Search into at least three campaigns. Brand covers people typing your name; it is cheap and protects you from competitors bidding on it. Non-brand covers the service itself, such as "physiotherapy clinic near me" or "payroll software for small business". Competitor terms, if you use them, sit alone with their own budget, because they cost more and convert less.',
          'Use phrase and exact match for your core terms and broad match only where conversion tracking is solid enough to guide it. Read the search terms report every week. Typical Bengaluru negatives include jobs, salary, internship, free, course (unless you sell courses), PDF and the names of areas you do not serve. A short, well-kept negative list saves more budget than any bidding trick.',
        ],
        bullets: [
          'Write ads that say who the service is for and where you are, so the wrong people skip them.',
          'Send each ad group to a landing page that matches the search, not the home page.',
          'Keep competitor campaigns factual and never use their trademarks in ad text.',
        ],
      },
      {
        heading: 'Kannada, English and targeting across Bengaluru and Karnataka',
        paragraphs: [
          'Bengaluru searches are mostly in English, but Kannada and mixed searches matter for clinics, schools, real estate, home services and anything aimed at older family decision makers or towns such as Mysuru, Hubballi and Mangaluru. Run Kannada ads as a separate test and have them written or checked by a fluent Kannada writer. Machine-translated copy reads badly and wastes the impression.',
          'Set location targeting to people in or regularly in your target area, not people merely interested in it. A clinic in JP Nagar might target a five to eight kilometre radius, while a B2B firm may target all of Karnataka and the metros. Traffic on Outer Ring Road is a real reason a Whitefield customer will not visit a Rajajinagar showroom, so set radius by travel time, not only distance. For walk-in businesses, link Google Business Profile and add location assets so ads show your address, hours and directions.',
          'YouTube and Demand Gen campaigns are useful once Search is stable. They reach people before they search, which helps a new clinic, institute or project become a name people later look up.',
        ],
      },
      {
        heading: 'Tracking leads that sales can actually close',
        paragraphs: [
          'Track calls, form fills and WhatsApp clicks as separate conversions. Then go one step further: capture the Google click ID with each lead and send the outcome back through offline conversion import from your sales team or CRM. When Google learns which leads became qualified, it shifts spend towards the searches that produce them. Volume often drops a little at first while quality rises, which is usually the right trade.',
          'Set up GA4 and enhanced conversions so form leads are matched more reliably. India’s Digital Personal Data Protection Act expects you to tell people what data you collect and why, and to have their consent. In plain terms: show a short notice on each form, keep a record of consent and only share hashed contact details with Google where that notice covers it. We are not lawyers, so check the specifics with your own adviser.',
        ],
      },
      {
        heading: 'Sector rules and the Bengaluru calendar',
        paragraphs: [
          'Google has advertising policies for some sectors, such as healthcare and financial services, and every ad in those areas must follow them. Read the relevant policy pages early and plan time for review before a launch, because a disapproved ad can stall a campaign for days. A good Google Ads agency in Bangalore will flag this during the audit, not after ads are disapproved.',
          'Demand also moves with the calendar. Colleges and coaching institutes peak in admission season. Ugadi, Dasara and Diwali lift interest in property bookings, vehicles, home interiors and gifting, and many companies spend remaining budgets before the financial year ends in March, which matters for B2B and IT services. Raise budgets a few weeks before each peak and have landing pages ready.',
        ],
      },
      {
        heading: 'If you run an online store',
        paragraphs: [
          'This page is about lead generation. If you sell products online, your account will lean on Shopping, Performance Max and a product feed, with targets set on order margins. That work is covered by our PPC service in Bengaluru, which focuses on e-commerce. Many brands use both: a Google Ads agency in Bangalore for B2B or bulk enquiries, and e-commerce PPC for the store.',
        ],
      },
    ],
    related: [
      { label: 'Facebook ads agency in Bangalore', href: '/bangalore/facebook-ads-agency/' },
      { label: 'E-commerce PPC and Google Shopping in Bengaluru', href: '/bangalore/ppc-company/' },
      { label: 'Paid media across Google, Meta and marketplaces in Bengaluru', href: '/bangalore/performance-marketing-agency/' },
      { label: 'Digital marketing agency in Bangalore', href: '/bangalore/digital-marketing-agency/' },
      { label: 'SEO company in Bangalore for organic leads', href: '/bangalore/seo-company/' },
      { label: 'Landing pages and websites built in Bengaluru', href: '/bangalore/website-development-company/' },
      { label: 'B2B digital marketing and lead generation', href: '/b2b-digital-marketing/' },
    ],
    faqs: [
      { q: 'What does a Google Ads agency in Bangalore do?', a: 'It plans, builds and runs your Google Ads account: Search, local, YouTube and Demand Gen campaigns, keywords and negatives, ad copy, landing page advice and conversion tracking. For lead-led businesses it should also connect ads to sales outcomes, so the account is judged on qualified enquiries and closed deals, not clicks.' },
      { q: 'How much does Google Ads management in Bangalore cost?', a: 'It depends on the number of campaigns and locations, languages, tracking work needed, how competitive your keywords are and how often you want reviews. Ad spend is paid directly to Google from your own account. Our management fee is quoted separately in writing after a free audit, with scope and exclusions listed.' },
      { q: 'Can you improve lead quality, not just lead volume?', a: 'Yes, and it is usually the main job. We tighten keywords and negatives, add qualifying form fields, write ads that say who the service is for and import lead outcomes from your sales team. Google then bids towards searches that produce qualified leads. Lead volume may dip briefly while cost per qualified lead improves.' },
      { q: 'Do you write Google Ads in Kannada?', a: 'Yes, where your buyers search that way. Kannada keywords and ads are written or checked by a fluent Kannada writer and run as a separate test alongside English. They tend to help clinics, schools, real estate, home services and campaigns reaching the rest of Karnataka. We keep whichever version brings better leads.' },
      { q: 'Who owns the Google Ads account?', a: 'You do. The account is set up in your business name and billed to your own card or invoice. We work through manager access that you can remove at any time, and all campaigns, conversion history and audiences stay with you if you move the work to another agency or in-house.' },
      { q: 'We run an online store. Is this the right service?', a: 'Not on its own. This service is built for leads. For Shopping, Performance Max and product feeds, our PPC service in Bengaluru is the better fit because it focuses on e-commerce and order margins. If you also take bulk or B2B enquiries, we can run lead-gen Search alongside it.' },
      { q: 'Can we meet your team in Bengaluru?', a: 'Yes. Our Bengaluru office hosts audit reviews, keyword and lead-quality workshops and monthly check-ins by appointment, and those workshops are part of the agreed scope. Much of the day-to-day account work is done by our Chennai head-office team on the same hours, with updates by video and WhatsApp.' },
    ],
  },
];
