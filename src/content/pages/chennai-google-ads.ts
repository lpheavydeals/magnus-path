import type { ServicePageData } from '../../data/types';

export const chennaiGoogleAdsPages: ServicePageData[] = [
  // ───────────────────────── Google Ads Agency in Chennai ─────────────────────────
  {
    slug: 'chennai/google-ads-agency',
    kind: 'location',
    title: 'Google Ads Agency in Chennai | Leads and Calls | Magnus Path',
    description: 'Google Ads agency in Chennai for clinics, colleges, builders, B2B firms and showrooms: Search and local ads in Tamil and English, judged on qualified leads.',
    primaryKeyword: 'Google Ads agency in Chennai',
    navLabel: 'Google Ads Agency Chennai',
    breadcrumb: [{ label: 'E-commerce Ads', href: '/performance-marketing/' }],
    eyebrow: 'Lead generation with Google Ads',
    h1: 'Google Ads Agency in Chennai for *Enquiries That Convert*',
    intro: 'Magnus Path is a Google Ads agency in Chennai for businesses that grow through enquiries: hospitals and clinics, colleges and coaching centres, builders, manufacturers, home-service firms and showrooms. We run Search, local and YouTube campaigns in Tamil and English, track every call, form and WhatsApp chat, and feed your sales outcomes back to Google so it learns which leads matter.',
    icon: 'social',
    facts: ['Lead quality over lead volume', 'Your account, your billing', 'Chennai head office meetings'],
    headings: {
      pains: 'Where Google Ads lead generation goes wrong in Chennai',
      includes: 'What our Google Ads management covers',
      process: 'From audit to qualified leads in *4 steps*',
      guide: 'Google Ads in Chennai: a practical guide for lead-led businesses',
    },
    pains: [
      { title: 'Plenty of leads, few real buyers', body: 'Forms fill up with wrong numbers, job seekers and people outside your service area. Your sales team spends the day calling enquiries that were never going to book, enrol or order.' },
      { title: 'Google cannot see what happens next', body: 'The account counts a form submission as success. It never learns which leads turned into admissions, site visits or purchase orders, so it keeps finding more of the weak ones.' },
      { title: 'Calls and WhatsApp chats go uncounted', body: 'Many Chennai customers would rather phone or message than fill a form. If those contacts are not tracked, the campaigns that actually bring business look like they are failing.' },
    ],
    includes: [
      { title: 'Search campaigns built around intent', body: 'Separate brand, service and competitor campaigns, sensible match types, shared negative keyword lists and ad groups small enough that each ad answers the search behind it.' },
      { title: 'Tamil and English keywords and ads', body: 'Keywords in English, Tamil script and Tanglish where people search that way, with ad copy written or checked by a fluent Tamil writer before it goes live.' },
      { title: 'Call, form and WhatsApp tracking', body: 'Call extensions and website call tracking, form submissions and WhatsApp clicks set up as separate conversions in GA4 and Google Ads, with enhanced conversions where possible.' },
      { title: 'Offline conversion import', body: 'Your sales team marks which leads were qualified and which closed. We send those outcomes back to Google Ads so bidding favours the searches that turn into revenue.' },
      { title: 'Local campaigns for showroom visits', body: 'Radius and area targeting around your outlets, Google Business Profile linked to the account, and call and direction goals so you can see who is coming through the door.' },
      { title: 'YouTube and Demand Gen for awareness', body: 'Short video and image campaigns that build recall in Chennai and Tamil Nadu ahead of admission season, a project launch or a new branch, measured against branded search growth.' },
      { title: 'Account audits and restructures', body: 'A full review of an existing account: wasted search terms, overlapping campaigns, broken tracking and settings left on defaults, followed by a clean rebuild where it is needed.' },
    ],
    process: [
      { title: 'Free account audit', body: 'We go through your campaigns, search terms, conversion setup and landing pages, then walk you through what is wasting budget and what is working.' },
      { title: 'Define a good lead', body: 'With your sales or admissions team we agree what a qualified lead looks like, how it is recorded and how outcomes will flow back into Google Ads.' },
      { title: 'Restructure and launch', body: 'We rebuild campaigns, write Tamil and English ads, fix tracking and landing pages, and launch while keeping the keywords that already convert.' },
      { title: 'Tune on lead quality', body: 'Weekly search term and bid reviews, plus a monthly meeting on cost per qualified lead and closed business, at our Chennai office or online.' },
    ],
    platforms: ['Google Ads', 'GA4', 'Google Tag Manager', 'Google Business Profile', 'YouTube', 'Looker Studio'],
    local: {
      city: 'Chennai',
      areas: ['Mylapore', 'Kilpauk', 'Teynampet', 'Royapettah', 'Vadapalani', 'Kodambakkam', 'Thoraipakkam', 'Perungudi', 'Sholinganallur', 'Tambaram'],
      note: 'Chennai is our head office, so you can sit down with the people running your Google Ads by appointment for the audit review, planning sessions or monthly results. We also visit clinics, campuses, sites and factories when it helps. Businesses elsewhere in Tamil Nadu and India work with us online.',
    },
    figures: [
      { type: 'mindmap', caption: 'What a lead-generation Google Ads account needs before more budget will help.', after: 0, center: 'Google Ads for leads', branches: [
        { label: 'Keywords', items: ['Tamil and English terms', 'Negatives kept current', 'Competitor terms tested'] },
        { label: 'Targeting', items: ['Radius around branches', 'Chennai or all of TN', 'Ad schedule by hours'] },
        { label: 'Tracking', items: ['Calls, forms, WhatsApp', 'Enhanced conversions', 'Sales outcomes imported'] },
        { label: 'Follow-up', items: ['Quick callback', 'Lead status recorded', 'Monthly quality review'] },
      ] },
      { type: 'matrix', caption: 'Reading lead volume against lead quality tells you which fix to make first.', after: 2, cols: ['Few leads', 'Many leads'], rows: ['Mostly qualified', 'Mostly poor fit'], cells: [
        { title: 'Scale carefully', body: 'Widen keywords or area a step at a time and watch quality' },
        { title: 'Keep and protect', body: 'Hold targets steady and feed closed sales back to Google' },
        { title: 'Rebuild', body: 'Check tracking, landing page and intent of every keyword' },
        { title: 'Tighten', body: 'Add negatives, qualifying form fields and offline imports' },
      ] },
      { type: 'steps', caption: 'How a lead’s sales outcome gets back into Google Ads so bidding can learn from it.', after: 3, steps: [
        { title: 'Capture click ID', body: 'Store the Google click ID with each lead' },
        { title: 'Sales updates', body: 'Team marks qualified, visited or closed' },
        { title: 'Upload outcomes', body: 'Send stages to Google Ads on a schedule' },
        { title: 'Bid on value', body: 'Optimise to qualified or closed, not forms' },
      ] },
    ],
    guide: [
      {
        heading: 'What a Google Ads agency in Chennai should do for lead-led businesses',
        paragraphs: [
          'Most businesses in Chennai do not sell at a checkout. A hospital wants appointment calls, a coaching institute wants counselling sessions booked, a builder wants site visits and an exporter wants serious RFQs. A Google Ads agency in Chennai working for these businesses should measure success in those terms, not in clicks or form fills alone.',
          'The core is Search. Brand campaigns protect your name, service campaigns catch people actively looking (“knee replacement hospital Chennai”, “NEET coaching Anna Nagar”), and competitor campaigns can be tested with care. Phrase and exact match keep spend close to real intent, while broad match only earns a place once conversion tracking is reliable. A negative keyword list for jobs, free, courses, salary and DIY searches should be built on day one and reviewed every week.',
          'Google has advertising policies for some sectors, including healthcare, education and real estate. Ads and landing pages must follow them, and some formats or claims may need verification first. We check the current policy for your category before launch rather than guessing.',
        ],
      },
      {
        heading: 'Tamil and English search, and targeting across Tamil Nadu',
        paragraphs: [
          'People in Chennai search in English, in Tamil script and in Tamil typed with English letters. Each group needs its own keywords and ad copy that reads naturally. Machine translation tends to sound stiff, so every Tamil ad should be written or checked by a fluent Tamil writer. B2B buyers and procurement teams usually search in English, so manufacturer and exporter campaigns often stay English-only.',
          'Location settings matter as much as keywords. A dental clinic in Mylapore may want a tight radius, while a hospital with a strong specialty can draw patients from across Tamil Nadu. Set targeting to people in or regularly in your chosen areas rather than people merely interested in them, and use ad schedules so call ads only run when someone can answer the phone.',
        ],
        bullets: [
          'Radius targeting for clinics, salons and home-service firms',
          'City or district targeting for colleges and real estate projects',
          'State-wide or national targeting for specialist hospitals and B2B',
        ],
      },
      {
        heading: 'Lead quality vs lead volume: tracking calls, forms and WhatsApp',
        paragraphs: [
          'Lead volume is easy to raise: loosen keywords, cut form fields and cost per lead falls. Lead quality is harder, and it is what pays the bills. Start by tracking every contact type separately: calls from ads, calls from the website, form submissions and WhatsApp clicks. Use GA4 with Google Tag Manager, and turn on enhanced conversions so Google can match more leads to clicks using hashed details.',
          'Then add one or two qualifying questions to forms, such as course of interest, budget range or required quantity. A few fewer leads that your team can actually close is usually a better trade than a flood of poor ones. Any Google Ads agency in Chennai you hire should report both numbers: how many leads came in, and how many your team rated as genuine.',
          'India’s Digital Personal Data Protection Act, put simply, expects you to tell people why you collect their details, get their consent, use the data only for that purpose and let them withdraw. Keep forms short and add a clear notice. This is general information, not legal advice.',
        ],
      },
      {
        heading: 'Offline conversion import: teaching Google which leads close',
        paragraphs: [
          'Google bids on whatever you tell it is a conversion. If that is a form fill, it will find cheap form fills. Offline conversion import closes the loop. Each lead is saved with its Google click ID, your sales team marks the outcome (qualified, visited, enrolled, ordered) in whatever system they already use, and those outcomes are uploaded to Google Ads on a regular schedule.',
          'Once enough outcomes flow in, you can bid towards qualified leads or closed business instead of raw enquiries. This works for long sales cycles too, such as a property booking weeks after the first call. The hard part is not technical: it is getting the sales team to update lead status consistently, so we agree a simple routine with them at the start.',
        ],
      },
      {
        heading: 'Showrooms, YouTube and seasonal planning',
        paragraphs: [
          'Showrooms for furniture, electronics, jewellery and vehicles need footfall. Local campaigns tied to your Google Business Profile show your address, hours and reviews, and drive calls and directions requests. YouTube and Demand Gen campaigns build awareness before people search, and are judged by whether branded searches and direct enquiries rise afterwards.',
          'Chennai’s calendar shapes demand. Admission season brings colleges and coaching centres into the same auctions. Pongal and Diwali lift showroom and home-improvement searches, and wedding season does the same for jewellery, textiles, venues and photography. Plan budgets and ads ahead of each peak. Online stores that need Shopping and Performance Max are better served by our PPC service in Chennai, which focuses on feeds and order profitability.',
        ],
      },
      {
        heading: 'Choosing a Google Ads agency in Chennai and how fees work',
        paragraphs: [
          'Ask to see an audit of your own account before you sign. Your Google Ads account should stay in your business name, and ad spend should be paid directly to Google from your card or invoice. The management fee is separate. Ours is quoted after a free audit and depends on the number of campaigns, services and locations, languages, and how much tracking and offline import work is needed. A Google Ads agency in Chennai worth hiring will also be open about who manages your account each week.',
        ],
        bullets: [
          'Will I own the account and all its data?',
          'How will you separate qualified leads from total leads?',
          'Can you import sales outcomes from my team?',
          'Who reviews search terms, and how often?',
        ],
      },
    ],
    related: [
      { label: 'PPC services in Chennai for Shopping and PMax', href: '/chennai/ppc-agency/' },
      { label: 'Digital marketing agency in Chennai', href: '/chennai/digital-marketing-agency/' },
      { label: 'SEO company in Chennai for local search', href: '/chennai/seo-company/' },
      { label: 'Website development company in Chennai', href: '/chennai/website-development-company/' },
      { label: 'B2B digital marketing for manufacturers and exporters', href: '/b2b-digital-marketing/' },
    ],
    faqs: [
      { q: 'What does a Google Ads agency in Chennai do?', a: 'It plans, builds and manages Google Ads campaigns for local businesses: Search, local, YouTube and Demand Gen. That includes keyword research in Tamil and English, ad copy, location targeting, call, form and WhatsApp tracking, and regular search term reviews. A good agency reports on qualified leads and closed business, not just clicks.' },
      { q: 'How much does Google Ads management cost in Chennai?', a: 'Two costs are involved. Ad spend is paid directly to Google from your own account. The management fee is separate and depends on the number of campaigns, services and locations, languages and tracking work needed. We quote it in writing after a free audit, with scope and exclusions listed.' },
      { q: 'Can Google Ads work for hospitals, colleges and real estate?', a: 'Yes, Search campaigns suit all three because people actively look for these services. Google has policies for some sectors, including healthcare, education and real estate, and ads must follow them. We check the current rules for your category before launch and keep claims plain and accurate.' },
      { q: 'How do you improve lead quality, not just lead numbers?', a: 'We track each lead type separately, add qualifying questions to forms, tighten keywords and negatives, and import sales outcomes from your team into Google Ads. Bidding can then favour searches that become qualified leads or customers. Reports show total leads and genuine leads side by side.' },
      { q: 'Do you run Google Ads in Tamil?', a: 'Yes. We add keywords in English, Tamil script and Tamil typed in English letters where people search that way, and write matching ads. All Tamil copy is written or checked by a fluent Tamil writer. B2B and export campaigns usually stay in English because that is how those buyers search.' },
      { q: 'We run an online store. Is this the right service?', a: 'This page covers lead-led businesses. If you sell online and need Google Shopping, Performance Max and Merchant Center feed work, our PPC service in Chennai is built for that. Many businesses use both, for example a showroom brand with an online store as well.' },
      { q: 'Can we meet the team in Chennai?', a: 'Yes. Chennai is our head office and main delivery team. You can meet the people who manage your Google Ads by appointment for the audit review, kick-off and monthly results. Businesses in other parts of Tamil Nadu and India usually work with us over video calls.' },
    ],
  },
];
