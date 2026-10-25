import type { ServicePageData } from '../../data/types';

const ukBreadcrumb = [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }];

export const ukChatgptAdsPages: ServicePageData[] = [
  {
    slug: 'uk/chatgpt-ads-agency',
    twin: 'chatgpt-ads-agency',
    kind: 'global',
    market: 'UK',
    title: 'ChatGPT Ads Agency UK | London Office | Billion Ecommerce Agency',
    description: 'ChatGPT ads agency for UK online shops, B2B firms and agencies. OpenAI Ads Manager, consent-aware tracking and GBP reports. Meet us at our London office.',
    primaryKeyword: 'ChatGPT ads agency',
    navLabel: 'ChatGPT Ads',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'ChatGPT advertising · UK GDPR-aware tracking · GBP reporting',
    h1: 'ChatGPT Ads for UK Brands, Set Up *Consent-First* and Judged in Pounds',
    intro: 'Billion Ecommerce Agency is a ChatGPT ads agency with a London office, helping UK online shops, B2B firms and marketing agencies try advertising inside ChatGPT with clean data. We set up OpenAI Ads Manager in your account, load the pixel behind your cookie banner, write ads in British English and report in GBP beside your Google, Meta and Amazon.co.uk spend.',
    icon: 'ai',
    facts: ['Meet us in London', 'Pixel behind your cookie banner', 'Reports in GBP'],
    headings: {
      pains: 'What goes wrong when UK teams *rush* into ChatGPT ads',
      includes: 'What our ChatGPT ads management covers for UK businesses',
      process: 'How we run your first ChatGPT ads test in *4 steps*',
      guide: 'ChatGPT advertising in the UK: a buyer’s guide for 2026',
    },
    pains: [
      { title: 'Tags that ignore the cookie banner', body: 'A pixel pasted straight into the site header fires before anyone has said yes. That is a UK GDPR and cookie consent problem, and it muddles your data too.' },
      { title: 'Copy that breaks UK ad rules', body: 'Ads written fast for a new channel can slip in claims your team would never put in a Google ad. The ASA and CAP rules still apply, wherever the ad appears.' },
      { title: 'Another budget line in a spreadsheet', body: 'ChatGPT spend gets reported in clicks, while Google, Meta and Amazon.co.uk are judged on orders. Without one view in pounds, nobody can say which channel earned its money.' },
    ],
    includes: [
      { title: 'UK eligibility and policy check', body: 'We confirm your UK billing entity can use self-serve Ads Manager, and review your category, claims and landing pages against OpenAI’s current ad policies.' },
      { title: 'Ads Manager in your own account', body: 'Campaigns, brand details and billing set up under your company, so the account, history and data stay yours whether or not we keep working together.' },
      { title: 'Consent-aware pixel and CAPI', body: 'OpenAI pixel loaded through Google Tag Manager and your consent platform, plus server-side Conversions API events and UTMs that keep paid ChatGPT traffic separate in GA4.' },
      { title: 'British English ad creative', body: 'Headlines, descriptions and images written for the question someone has just asked, checked against ASA and CAP rules before anything is submitted.' },
      { title: 'Landing pages that answer the follow-up', body: 'Product, comparison or enquiry pages that show UK delivery, returns, VAT-inclusive prices and one clear next step, so the click has somewhere useful to go.' },
      { title: 'One report in GBP', body: 'A weekly change note and a monthly report setting ChatGPT cost per order or lead beside your Google, Meta and Amazon.co.uk results, all in pounds.' },
    ],
    platforms: ['OpenAI Ads Manager', 'OpenAI pixel', 'Conversions API', 'Google Tag Manager', 'GA4', 'Shopify', 'Google Ads', 'Meta Ads', 'Amazon Ads'],
    process: [
      { title: 'Free audit, in London or online', body: 'We look at your products, margins, tracking and consent setup, then talk it through at our London office or on a morning video call.' },
      { title: 'GBP quote and consent-ready tags', body: 'You get a monthly fee in pounds. The pixel, Conversions API and UTMs go live behind your cookie banner and are tested before any spend.' },
      { title: 'A small test with rules', body: 'A fixed budget, an end date, a few conversation topics and ad angles, and a written success rule agreed before the first ad runs.' },
      { title: 'Compare across channels', body: 'We set the results beside Google, Meta and Amazon.co.uk in GBP and recommend whether to scale, change one thing or stop.' },
    ],
    figures: [
      { type: 'mindmap', caption: 'The pieces of a UK ChatGPT ads setup, from consent to the monthly report.', after: 0, center: 'UK ChatGPT ads setup', branches: [
        { label: 'Account', items: ['UK billing entity', 'Ads Manager access', 'Category policy check'] },
        { label: 'Consent', items: ['Cookie banner first', 'Pixel waits for a yes', 'Privacy notice updated'] },
        { label: 'Ads', items: ['British English copy', 'ASA and CAP check', 'Page that answers next'] },
        { label: 'Report', items: ['GA4 with UTMs', 'Cost per order in GBP', 'Beside Google and Meta'] },
      ] },
      { type: 'matrix', caption: 'Where your UK product sits decides whether to test now, check first or wait.', after: 3, cols: ['Health or money claims', 'Plain product claims'], rows: ['Buyers compare first', 'Bought on impulse'], cells: [
        { title: 'Check rules first', body: 'Can fit well, but policy and ASA review comes before any spend' },
        { title: 'Test now', body: 'Questions and comparisons lead people to your product' },
        { title: 'Wait', body: 'Restrictions plus impulse buying rarely make a test worth it' },
        { title: 'Small test only', body: 'Meta and Google Shopping usually win; keep it short and capped' },
      ] },
    ],
    guide: [
      {
        heading: 'How ChatGPT ads work for UK advertisers',
        paragraphs: [
          'As of October 2026, ChatGPT ads appear below a relevant answer and are labelled as ads. Each one shows the advertiser’s name and icon, a headline, a short description, an image and a link. OpenAI says ads do not change the answer itself, so you are paying for a place next to the conversation, not a recommendation inside it.',
          'Ads are bought through OpenAI’s self-serve Ads Manager. It opened to US businesses in May 2026 and has since expanded, and reports list the UK among the markets now available. Eligibility depends on the country of your billing entity, so a UK limited company and its overseas parent may see different options. The product is changing quickly, so check OpenAI’s help pages for the current position before you plan a budget.',
          'Targeting is contextual. The system matches your ad to the topic of a conversation, and there is no keyword bidding and no demographic targeting. Some people call it ChatGPT PPC because clicks are charged per click, but planning it feels closer to choosing themes than building keyword lists.',
        ],
      },
      {
        heading: 'Which UK businesses should try ChatGPT ads first',
        paragraphs: [
          'The best fit is anything people research before they buy. If your customers already ask ChatGPT “which is better” or “what should I look for”, there is a natural moment for your ad. A good ChatGPT ads agency should also tell you honestly when you are better off waiting.',
        ],
        bullets: [
          'UK D2C and e-commerce brands in considered categories, such as homeware, outdoor kit, cycling, baby products or specialist food, that are already profitable on Google or Meta',
          'B2B firms whose buyers compare suppliers, software or specifications before sending an enquiry',
          'Marketing agencies that want to offer ChatGPT ads to clients without hiring for an unproven channel',
          'Not yet: businesses without working conversion tracking, or with no consent setup on the site',
        ],
      },
      {
        heading: 'Cookie consent, UK GDPR and the OpenAI pixel',
        paragraphs: [
          'This is the part UK teams most often skip. The OpenAI pixel is a tracking technology, so under UK GDPR and the cookie rules it generally should not fire until a visitor has agreed. We load it through Google Tag Manager, tie it to your consent platform, and test that it stays quiet when someone declines. We are not lawyers, so your privacy notice and any legal questions belong with your own adviser.',
          'Server-side events through the Conversions API help you recover some of the signal lost to declined cookies and ad blockers, but they still need a lawful basis and an honest privacy notice. Add UTMs to every ad link so GA4 shows paid ChatGPT traffic separately from organic ChatGPT referrals. OpenAI reports results in aggregate, and advertisers do not see individual conversations.',
        ],
      },
      {
        heading: 'UK advertising rules and restricted categories',
        paragraphs: [
          'OpenAI has its own ad policies, with restricted categories that tend to cover sensitive areas such as health, finance and politics. On top of that, the ASA and the CAP code apply to UK advertising in general, whichever platform carries the ad. Claims need evidence, prices must be clear, and health or beauty wording needs particular care.',
          'Before launch, we check your category, ad copy and landing pages against both, and tell you plainly if something is unlikely to be approved or could cause a complaint. A careful ChatGPT ads agency treats this as part of setup, not an afterthought.',
        ],
      },
      {
        heading: 'Budgeting ChatGPT advertising beside Google, Meta and Amazon.co.uk',
        paragraphs: [
          'Reach campaigns are bought on CPM and clicks campaigns on CPC, and conversion-optimised campaigns are still billed per click. Real costs depend on your category, competition and the topics you choose, so we do not quote typical rates.',
          'Treat ChatGPT ads as one line in a wider plan. Google still captures people who know what they want, Meta creates demand, and Amazon.co.uk catches shoppers ready to buy. A sensible first test takes a small slice of that budget, runs for a fixed period and is judged on cost per order or qualified lead in GBP, the same measure used for the other channels. If the numbers hold, move budget across in steps. If not, change one thing and test again later. If you prefer to run it yourself, our guide on how to advertise on ChatGPT walks through each step.',
        ],
      },
      {
        heading: 'Working with our London office and Chennai team',
        paragraphs: [
          'If you are comparing a ChatGPT advertising agency, it helps to meet the people involved. You can meet us by appointment at our London office in E18 to agree the plan, and most of the hands-on delivery is done by our Chennai team. India is 4.5 hours ahead of the UK in summer (BST) and 5.5 hours in winter (GMT), so our day overlaps your morning and early afternoon. Requests sent before UK lunchtime are usually handled the same day, and optimisation continues after you log off.',
          'As your ChatGPT ads agency, we work inside your own Ads Manager, your card pays OpenAI directly, and fees are quoted in GBP after a free audit. Agencies can also use us as an unbranded delivery team, with reports in their own template.',
        ],
      },
    ],
    related: [
      { label: 'Meta ads agency (UK)', href: '/uk/meta-ads-agency/' },
      { label: 'Ecommerce PPC agency (UK)', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'E-commerce marketing agency for UK brands', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'AI search optimisation agency for UK businesses', href: '/uk/ai-search-optimisation-agency/' },
      { label: 'How to advertise on ChatGPT: a step-by-step guide', href: '/blog/how-to-advertise-on-chatgpt/' },
      { label: 'ChatGPT ads agency for Indian D2C and B2B brands', href: '/chatgpt-ads-agency/' },
      { label: 'Amazon agency for Amazon.co.uk sellers', href: '/uk/amazon-agency/' },
    ],
    faqs: [
      { q: 'Are ChatGPT ads available in the UK?', a: 'As of October 2026, reports list the UK among the markets where OpenAI’s self-serve Ads Manager is available, after the US launch in May 2026. Eligibility depends on the country of your billing entity and may change. Check OpenAI’s current help pages, or ask us to confirm for your company before you set a budget.' },
      { q: 'How much do ChatGPT ads cost?', a: 'It depends on your category, competition and the conversation topics you target. Reach campaigns are bought on CPM and clicks campaigns on CPC, and conversion-optimised campaigns are still billed per click. We do not quote typical rates. Our management fee is quoted in GBP after a free audit, and ad spend goes straight to OpenAI.' },
      { q: 'Do you have a UK office?', a: 'Yes. We have a London office in E18 where UK clients can meet the team by appointment. Most delivery is done by our Chennai team, which is 4.5 to 5.5 hours ahead of the UK, so requests sent before UK lunchtime are usually handled the same day and work carries on after your day ends.' },
      { q: 'Does the OpenAI pixel need cookie consent?', a: 'In most cases, yes. Under UK GDPR and the cookie rules, tracking tags like the OpenAI pixel generally should not fire until a visitor agrees. We connect it to your consent platform through Google Tag Manager and test it. We are not lawyers, so please check your privacy notice and legal position with your own adviser.' },
      { q: 'Do UK advertising rules apply to ChatGPT ads?', a: 'Broadly, yes. The ASA and CAP code cover UK advertising in general, whichever platform shows the ad, and OpenAI has its own policies and restricted categories as well. We check claims, pricing and landing pages against both before launch, and flag anything that looks unlikely to be approved.' },
      { q: 'What does a ChatGPT advertising agency do that we cannot?', a: 'Nothing you could not learn, but it saves time. We check eligibility and policy, set up Ads Manager, wire consent-aware tracking, write British English ads, fix landing pages and run capped tests. Then we compare cost per order or lead in GBP with your Google, Meta and Amazon.co.uk results.' },
      { q: 'Can UK agencies white-label your ChatGPT ads work?', a: 'Yes. We can work as your unbranded delivery team: setup, tracking, creative and weekly optimisation inside each client’s own Ads Manager, with reports in your template and in GBP. You keep the client relationship and the strategy calls, and we can meet your team at our London office.' },
    ],
  },
];
