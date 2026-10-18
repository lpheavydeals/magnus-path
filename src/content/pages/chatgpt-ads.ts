import type { ServicePageData } from '../../data/types';

export const chatgptAdsPages: ServicePageData[] = [
  {
    slug: 'chatgpt-ads-agency',
    kind: 'service',
    title: 'ChatGPT Ads Agency for E-commerce & B2B | Magnus Path',
    description: 'ChatGPT ads agency in Chennai for Indian D2C brands, exporters and B2B firms. We set up OpenAI Ads Manager, tracking and careful tests judged on cost per order.',
    primaryKeyword: 'ChatGPT ads agency',
    navLabel: 'ChatGPT Ads',
    breadcrumb: [{ label: 'E-commerce Ads', href: '/performance-marketing/' }],
    eyebrow: 'ChatGPT advertising · OpenAI Ads Manager',
    h1: 'ChatGPT Ads Agency for *Measured* Tests That Sell',
    intro: 'Magnus Path is a ChatGPT ads agency that helps Indian D2C brands, exporters and B2B firms test advertising inside ChatGPT without guesswork. We set up your OpenAI Ads Manager account, pixel and Conversions API, write ads for conversational intent, and judge every rupee against your Meta and Google results, so budget goes where orders and leads actually come from.',
    icon: 'ai',
    facts: ['Set up in your own account', 'Pixel + Conversions API tracking', 'Same team as Meta & Google'],
    headings: {
      pains: 'A new ad channel, and *very little* real know-how',
      includes: 'What our ChatGPT advertising service includes',
      process: 'How we launch ads in ChatGPT in *4 steps*',
      guide: 'How to advertise on ChatGPT: a practical guide for Indian brands',
    },
    pains: [
      { title: 'Nobody has a playbook yet', body: 'ChatGPT advertising is new, and the rules, formats and countries keep changing. Most teams do not know where to start or what a sensible first test looks like.' },
      { title: 'Tracking that falls apart', body: 'Without the pixel, Conversions API and clean UTM tags, ChatGPT clicks show up as unknown traffic and nobody can say whether the test made money.' },
      { title: 'A budget silo nobody compares', body: 'Run in isolation, a new channel either gets cut too early or keeps spending out of curiosity. It needs to be judged against Meta and Google on the same numbers.' },
    ],
    includes: [
      { title: 'Eligibility and policy check', body: 'We confirm whether your billing entity’s country is open for self-serve, and check your category and claims against OpenAI’s current ad policies before any spend.' },
      { title: 'OpenAI Ads Manager setup', body: 'Account, billing, brand details and campaign structure set up in your own account, so you keep full ownership of campaigns and data.' },
      { title: 'Pixel, Conversions API and UTMs', body: 'OpenAI pixel through Google Tag Manager, server-side events through the Conversions API, and consistent UTM tags so GA4 shows ChatGPT ad traffic clearly.' },
      { title: 'Ads written for conversations', body: 'Headlines, descriptions and images that answer the question a person was just asking, not recycled search ads or banner copy.' },
      { title: 'Landing pages that match intent', body: 'Each ad points to a page that continues the conversation: clear answers, proof, price and one next step. We fix or build pages where needed.' },
      { title: 'Weekly optimisation, monthly report', body: 'Bids, budgets and creatives reviewed every week, and a monthly report comparing cost per order or lead with your Meta and Google campaigns.' },
    ],
    platforms: ['OpenAI Ads Manager', 'OpenAI pixel', 'Conversions API', 'GA4', 'Google Tag Manager', 'Meta Ads', 'Google Ads'],
    process: [
      { title: 'Check fit and eligibility', body: 'We review your products, margins, category policy and billing country, and tell you honestly whether to test now or wait.' },
      { title: 'Set up tracking first', body: 'Pixel, Conversions API, UTM tags and GA4 goals go live and are tested before a single ad runs, so the first rupee is measured.' },
      { title: 'Launch a controlled test', body: 'A small, fixed budget across a few conversation topics, ad angles and landing pages, set with clear success and stop rules.' },
      { title: 'Compare, then scale or stop', body: 'We judge results on cost per order or lead against Meta and Google, then move budget towards whichever channel is working.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'How a ChatGPT ads campaign fits together.', center: 'ChatGPT ads', after: 0, branches: [
        { label: 'Set up', items: ['OpenAI Ads Manager', 'Billing country check', 'Policy review'] },
        { label: 'Track', items: ['OpenAI pixel', 'Conversions API', 'UTMs in GA4'] },
        { label: 'Create', items: ['Headline + image', 'Conversational copy', 'Matching landing page'] },
        { label: 'Judge', items: ['Cost per order', 'Compare with Meta, Google', 'Move budget weekly'] },
      ] },
      { type: 'matrix', caption: 'Who should test ChatGPT ads now, and who should wait.', after: 1, cols: ['Low margin', 'Healthy margin'], rows: ['Product people research', 'Impulse or commodity buy'], cells: [
        { title: 'Small test', body: 'Learn cheaply, judge on cost per order' },
        { title: 'Test now', body: 'Best fit: questions lead to your product' },
        { title: 'Wait', body: 'Meta and Google will do better for now' },
        { title: 'Maybe later', body: 'Revisit once targeting options grow' },
      ] },
      { type: 'venn', caption: 'Paid ChatGPT ads and organic AI search work best together.', after: 2, left: { title: 'ChatGPT ads', body: 'paid, labelled, below the answer, starts today' }, right: { title: 'AI search optimisation', body: 'earned, inside the answer, builds over months' }, overlap: 'Seen whenever buyers ask AI' },
    ],
    guide: [
      {
        heading: 'What ChatGPT ads are, and how they differ from Google and from AI search optimisation',
        paragraphs: [
          'OpenAI now shows ads in ChatGPT, placed below a relevant answer. As of October 2026, an ad shows the advertiser’s name and icon, a headline, a short description, an image and a link to a landing page. Ads are labelled and kept separate from ChatGPT’s answer, and advertisers have no say in what the answer itself says.',
          'This is different from Google Search ads. On Google you bid on keywords. In ChatGPT, targeting is contextual: the ad is matched to the topic of the conversation, and there is no demographic targeting. You describe what you sell and who it helps, and the system decides which conversations are relevant.',
          'It is also different from organic AI search optimisation, sometimes called GEO, which works to get your brand mentioned or cited inside the answer itself. That is earned visibility. ChatGPT ads are paid placements next to the answer. Many brands will need both, and a good ChatGPT ads agency should explain where one ends and the other begins.',
        ],
      },
      {
        heading: 'Who should test ChatGPT advertising now, and who should wait',
        paragraphs: [
          'People use ChatGPT to research, compare and plan before they buy. That makes ads in ChatGPT worth testing for products that need some explaining or comparison.',
        ],
        bullets: [
          'Test now: D2C brands with clear product advantages, such as skincare, Ayurveda, ethnic wear or specialty food, already profitable on Meta or Google',
          'Test now: exporters and B2B firms selling to buyers who research suppliers, materials or specifications before sending an enquiry',
          'Wait: brands without working conversion tracking or a stable website, since you cannot judge a new channel blind',
          'Wait: categories that OpenAI restricts, or very low-margin products where every rupee of testing hurts',
        ],
      },
      {
        heading: 'Setting up ChatGPT Ads Manager (OpenAI’s ad account) and tracking',
        paragraphs: [
          'Advertisers buy through OpenAI’s self-serve Ads Manager at ads.openai.com. Self-serve launched in the US in May 2026 and has since expanded to many more countries; reports list India among them. Eligibility depends on the country of your billing entity, so a UK or US subsidiary may follow different rules from an Indian company. Where a country is not yet open, businesses can register interest or speak to OpenAI’s sales team. The product is new and changing, so check OpenAI’s current help pages before you plan.',
          'Set up tracking before you spend. Install the OpenAI pixel on your site, ideally through Google Tag Manager, and send purchases or leads server-side through the Conversions API so fewer events are lost to browsers and ad blockers. Add UTM tags to every ad link so GA4 can show ChatGPT ad traffic separately from organic ChatGPT referrals. Reporting inside Ads Manager is aggregated: impressions, clicks, spend, CTR, CPC, CPM and conversions. Advertisers never see individual conversations.',
        ],
      },
      {
        heading: 'Writing ads and landing pages for conversational intent',
        paragraphs: [
          'Someone reading a ChatGPT answer is in the middle of thinking something through. A headline that shouts a discount feels out of place. One that continues their question works better: “Cold-pressed oils for Indian cooking, tested for purity” beats “Big festive sale, shop now”.',
          'The landing page has to keep that thread going. Answer the likely follow-up questions near the top, show proof such as lab reports, quality standards, reviews or export credentials, state the price or minimum order clearly, and give one next step. For B2B and exporters, that step is usually an enquiry form or WhatsApp chat rather than a cart.',
        ],
      },
      {
        heading: 'Budgeting a ChatGPT ads test and judging the cost',
        paragraphs: [
          'Campaign objectives include reach, bought on CPM, and clicks, bought on CPC. Conversion-optimised campaigns are still billed per click. ChatGPT ads cost depends on your category, competition and the topics you target, so we do not quote typical rates.',
          'Any sensible ChatGPT ads agency will start you with a small, controlled budget you can afford to lose, run it for a fixed period, and set your success rule in advance. Judge it on cost per order or cost per qualified lead, the same numbers you use for Meta and Google, not on clicks or CTR alone. If ChatGPT brings customers at a similar or better cost, scale it step by step. If not, pause and try a different angle or topic later.',
        ],
      },
      {
        heading: 'Ad policies and restricted categories',
        paragraphs: [
          'Some categories are restricted or limited in ChatGPT advertising, particularly sensitive areas such as health, finance and political topics. Rules also cover claims, so a wellness or Ayurveda brand needs to be careful with words like “cure” or “treat”. Policies are still evolving. We check your category, ads and landing pages against OpenAI’s current policy before launch, and tell you plainly if something is unlikely to be approved.',
        ],
      },
      {
        heading: 'How we run ChatGPT ads for you',
        paragraphs: [
          'As a ChatGPT ads agency, we work inside your own OpenAI Ads Manager account, and your card pays OpenAI directly. Every week we review topics, bids, budgets and creatives. Every month you get a short report that sets ChatGPT results next to your Meta and Google campaigns.',
          'Because the same Chennai team runs your Meta, Google, Amazon and quick-commerce ads, budget can move to whichever channel is bringing profitable orders that month. That cross-channel view matters more than any single platform trick. It is also why we suggest pairing paid tests with organic AI search work, so your brand shows up both next to the answer and inside it. UK and US businesses can use the same approach, subject to the rules for their billing country.',
        ],
      },
    ],
    related: [
      { label: 'Performance marketing agency for Meta and Google ads', href: '/performance-marketing/' },
      { label: 'AI search optimisation to get cited in ChatGPT answers', href: '/ai-search-optimization/' },
      { label: 'Generative engine optimization agency for US brands', href: '/us/generative-engine-optimization-agency/' },
      { label: 'B2B digital marketing for manufacturers and exporters', href: '/b2b-digital-marketing/' },
      { label: 'Free e-commerce marketing audit', href: '/free-ecommerce-audit/' },
    ],
    faqs: [
      { q: 'What does a ChatGPT ads agency do?', a: 'It checks whether your business is eligible and your category is allowed, sets up OpenAI Ads Manager, installs the pixel and Conversions API, writes ads and landing pages for conversational intent, and runs controlled tests. A good agency judges results on cost per order or lead, compared with your other ad channels.' },
      { q: 'Are ChatGPT ads available in India?', a: 'As of October 2026, reports list India among the countries where OpenAI’s self-serve Ads Manager is open, after the US launch in May 2026. Eligibility depends on the country of your billing entity and can change. Check OpenAI’s current help pages, or ask us to confirm before you plan a budget.' },
      { q: 'How much do ChatGPT ads cost?', a: 'Ad costs depend on your category, competition and the topics you target, and campaigns are bought on CPM for reach or CPC for clicks. We do not quote typical rates. Our management fee is quoted separately after a scoping call, and ad spend is paid directly to OpenAI from your own account.' },
      { q: 'Will ads change what ChatGPT says about my brand?', a: 'No. OpenAI keeps ads labelled and separate from ChatGPT’s answer, and advertisers do not influence the answer itself. If you want ChatGPT to mention or recommend your brand in its answers, that is organic AI search optimisation, which works on your content, reviews and reputation rather than paid placement.' },
      { q: 'How is advertising on ChatGPT different from Google Ads?', a: 'Google Ads lets you bid on keywords people type. ChatGPT ads are matched to the topic of a conversation, with no keyword bidding and no demographic targeting. The ad appears below a relevant answer, so copy should feel like a helpful next step rather than a search result.' },
      { q: 'How do you track sales from ChatGPT ads?', a: 'We install the OpenAI pixel on your site, send purchases or leads server-side through the Conversions API, and tag every ad link with UTMs so GA4 shows ChatGPT ad traffic separately. OpenAI reports aggregated figures such as clicks, spend and conversions; advertisers never see individual conversations.' },
      { q: 'Can exporters and B2B firms use ads in ChatGPT?', a: 'Yes, and they are often a good fit. Buyers use ChatGPT to research suppliers, materials and specifications before making an enquiry. We point ads to pages built for that research, with specifications, quality standards, minimum order details and a simple enquiry form or WhatsApp link.' },
    ],
  },
];
