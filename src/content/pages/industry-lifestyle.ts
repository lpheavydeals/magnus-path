import type { ServicePageData } from '../../data/types';

export const industryLifestylePages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. Ayurveda
  {
    slug: 'industries/ayurveda-marketing-agency',
    kind: 'industry',
    title: 'Ayurveda Marketing Agency for Herbal Brands',
    description: 'Ayurveda marketing agency for herbal brands: claim-aware ads, classical and proprietary product pages, marketplaces, SEO and diaspora buyers abroad.',
    primaryKeyword: 'ayurveda marketing agency',
    navLabel: 'Ayurveda',
    breadcrumb: [{ label: 'Industries', href: '/industries/' }],
    eyebrow: 'Ayurvedic, herbal and wellness brands',
    h1: 'Ayurveda Marketing Agency That Respects *Tradition and the Rules*',
    intro: 'Billion Ecommerce Agency is an Ayurveda marketing agency for herbal, Ayurvedic and wellness brands selling online in India and abroad. We plan ads and product pages around how your products are licensed and labelled, explain classical formulations and proprietary blends in plain language, and reach both Indian buyers and the diaspora in the UK, UAE, US and Australia.',
    icon: 'marketplace',
    facts: ['Claims checked before launch', 'India and diaspora buyers', 'Store, marketplaces and search'],
    headings: {
      pains: 'Why Ayurvedic brands struggle to grow online',
      includes: 'Ayurvedic digital marketing, from label to checkout',
      process: 'How we grow an Ayurveda brand in *4 steps*',
      guide: 'Working with an Ayurveda marketing agency: a practical guide',
    },
    pains: [
      { title: 'Traditional words that ads refuse', body: 'Classical texts describe herbs by the conditions they address. Copy lifted from those descriptions reads as a medical claim to Meta, Google and the marketplaces, and gets rejected.' },
      { title: 'Products that look the same', body: 'Ashwagandha, triphala and chyawanprash are sold by many brands. Without a clear story on sourcing, preparation and formulation, buyers pick the cheapest or most familiar name.' },
      { title: 'Buyers abroad who cannot find you', body: 'Indian families in London, Dubai or New Jersey look for brands they knew at home, but many Ayurveda stores do not ship abroad, rank abroad or explain what can be sent where.' },
    ],
    includes: [
      { title: 'Claims and label review', body: 'We read your labels, product pages and past ads, group products by how they are licensed, and mark wording to rewrite before it reaches an ad reviewer.' },
      { title: 'Classical and proprietary product pages', body: 'Pages that explain the source text and ingredients of classical formulations, and the thinking behind your own blends, without promising outcomes.' },
      { title: 'Policy-aware Meta and Google ads', body: 'Creative built around ritual, ingredients, sourcing and daily use, with landing pages that match, so ads pass review and accounts stay healthy.' },
      { title: 'Herbal products marketing on marketplaces', body: 'Amazon, Flipkart and Nykaa listings with the right category, licence and ingredient details and A+ content, plus sponsored ads on products that earn reorders.' },
      { title: 'Search content on herbs and rituals', body: 'Guides on ingredients, daily routines and how to use each product, written for Google and AI assistants and kept free of disease claims.' },
      { title: 'Diaspora and export growth', body: 'Country pages, currency, shipping set-up and ads aimed at Indian communities abroad, once you have confirmed which products can be sold in each country.' },
    ],
    process: [
      { title: 'Sort the catalogue', body: 'We group your products into medicines, cosmetics and foods, and classical versus proprietary, because each group has different label and advertising limits.' },
      { title: 'Rewrite risky wording', body: 'Ads, product pages and marketplace listings are reworded around ingredients, ritual and use. Legal questions go to your regulatory adviser before launch.' },
      { title: 'Launch in India first', body: 'Meta, Google and marketplace campaigns go live on hero products, with review requests and refill reminders running from the first order.' },
      { title: 'Open diaspora markets', body: 'Once India is profitable, we test the UK, UAE, US or Australia with products you have confirmed are allowed there.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Google Ads', 'Amazon', 'Flipkart', 'Nykaa', 'Judge.me', 'WhatsApp', 'Google Search Console'],
    figures: [
      { type: 'steps', caption: 'Turning traditional product wording into ad-safe copy for an Ayurvedic product.', after: 3, steps: [
        { title: 'Find the claim', body: 'Spot words that name a disease or a cure' },
        { title: 'Keep the heritage', body: 'Name the text, herb or ritual behind it' },
        { title: 'Describe the use', body: 'When and how it is taken or applied' },
        { title: 'Show real buyers', body: 'Reviews on taste, texture and routine' },
        { title: 'Check with adviser', body: 'Sign-off for medicine products' },
      ] },
      { type: 'matrix', caption: 'Which Ayurveda products to take to diaspora buyers first.', after: 4, cols: ['Easy to ship abroad', 'Hard to ship abroad'], rows: ['Strong demand abroad', 'Little demand abroad'], cells: [
        { title: 'Lead abroad', body: 'Teas, oils and cosmetics buyers already know' },
        { title: 'Use local stock', body: 'Consider a stockist or warehouse in that country' },
        { title: 'Test quietly', body: 'Small ad tests to see whether interest builds' },
        { title: 'Keep in India', body: 'Sell at home; not worth the shipping effort' },
      ] },
    ],
    guide: [
      {
        heading: 'What makes Ayurveda different from other wellness categories',
        paragraphs: [
          'An Ayurvedic brand is not simply a beauty brand with herbal ingredients. Many of its products are licensed as medicines, some are sold as cosmetics and others as foods or nutraceuticals, and each group comes with its own rules for labels and advertising. A good Ayurveda marketing agency starts by understanding that split, because it decides what you can say, where you can advertise and which marketplace categories will list you.',
          'The buyer is different too. Some shoppers grew up with these products and want the formulation their family has always used. Others are new to Ayurveda and want to understand what a herb is and how to use it. Your marketing has to serve both without overpromising to either. Our beauty and Ayurveda industry page covers herbal skincare alongside other beauty categories; this guide goes deeper on Ayurveda alone.',
        ],
      },
      {
        heading: 'AYUSH licensing and labelling: what to check before you advertise',
        paragraphs: [
          'In India, Ayurvedic medicines are made under a manufacturing licence issued by the state licensing authority under the Drugs and Cosmetics Act and its rules, with the Ministry of AYUSH setting policy for the sector. Labels on these products are expected to carry details such as the licence number, ingredients, batch and dates, and directions for use. Products sold as Ayurvedic cosmetics or as foods follow different rules. We are marketers, not lawyers, so treat this as a checklist to discuss with your regulatory adviser rather than legal advice.',
          'Advertising adds another layer. The Drugs and Magic Remedies (Objectionable Advertisements) Act restricts advertisements that claim to treat certain diseases and conditions, and the specific rules on advertising Ayurvedic medicines have changed and been challenged in court in recent years. Ad platforms add their own policies on top. Before any campaign, we ask you to confirm with your adviser which products can be advertised and in what terms.',
        ],
        bullets: [
          'Confirm how each product is licensed: medicine, cosmetic or food',
          'Keep licence numbers and label details consistent on your site and marketplaces',
          'List every ingredient with its common, Sanskrit and botanical name',
          'Agree a list of words your brand will never use in ads',
          'Get adviser sign-off on any wording about medicine products',
        ],
      },
      {
        heading: 'Classical formulations vs proprietary products',
        paragraphs: [
          'Classical Ayurvedic formulations follow recipes from recognised texts: chyawanprash, triphala churna or kumkumadi tailam, for example. Many brands sell them, so the product name alone does not set you apart. What does is the quality story: where the herbs come from, how the formulation is prepared, how closely you follow the text, and how the product tastes, smells or feels.',
          'Proprietary products are your own formulations, such as a herbal face oil, a hair oil blend or a daily tea. You own the name and the recipe, which makes branding easier, but you also have to explain why the blend exists. We write these pages around the ingredients, the ritual of use and the people the product is made for, rather than around outcomes. In search, classical products tend to be found through questions such as “how to take triphala”, while proprietary products are found through brand and gifting searches, so the content plan differs for each.',
        ],
      },
      {
        heading: 'Traditional language vs ad platform policies',
        paragraphs: [
          'The hardest everyday problem in Ayurvedic digital marketing is language. Classical descriptions say a herb balances a dosha, supports digestion or helps with a named condition. An ad that repeats those lines often reads as a health claim to a reviewer, and Meta, Google, Amazon and Flipkart all limit health claims. Repeated rejections can restrict the whole account and pause every campaign you run.',
          'The fix is not to hide the tradition but to change what the ad is about. Talk about the herb and where it grows, the ritual of an evening oil massage or a morning tea, the texture of a balm, the taste of a chyawanprash and what real customers say about using it. Keep the landing page in the same register, since reviewers look at both. Where a statement about a medicine product matters to your story, check it with your regulatory adviser first.',
        ],
        bullets: [
          'Swap “cures”, “treats” and “heals” for words about use and routine',
          'Name the classical text or the herb instead of the condition',
          'Avoid before-and-after images and disease-first hooks',
          'Keep dosage and safety notes on the product page, not in the ad',
        ],
      },
      {
        heading: 'Reaching diaspora buyers abroad',
        paragraphs: [
          'Indian communities in the UK, UAE, US, Canada, Singapore and Australia are a natural market for Ayurvedic brands. They search for familiar names and classical products, often mixing English with Hindi, Tamil or Malayalam terms, and they value reliable delivery over a small saving.',
          'Selling to them takes more than switching on international shipping. Each country decides for itself whether your product counts as a food, a cosmetic, a supplement or a herbal medicine there, and some herbal medicines need local registration before sale; the UK, for example, runs a traditional herbal registration scheme. Customs, label language and courier rules for oils and liquids also vary. An Ayurveda marketing agency should help you pick the first country and the first products, then set up country pages, currency, shipping and diaspora-focused ads, but only after you and your adviser have confirmed what can be sold there. Our London office is a useful base for UK conversations.',
        ],
      },
      {
        heading: 'Measuring growth and choosing an agency',
        paragraphs: [
          'Ayurveda is a repeat category: oils, churnas, teas and chyawanprash run out and get bought again. We report acquisition cost, repeat rate and revenue per customer over 90 days, by product and by country, so budget goes to the products that bring buyers back rather than to one-off discount sales.',
          'When you compare an Ayurveda marketing agency, ask how they handle claims, whether they understand the difference between classical and proprietary products, and how they would approach buyers abroad. Ask them to show how they would rewrite one of your rejected ads. Herbal products marketing done carefully is slower to start than ad-led growth in some other categories, but trust built this way tends to last.',
        ],
      },
    ],
    related: [
      { label: 'Ayurveda marketing agency in Coimbatore', href: '/coimbatore/ayurveda-marketing-agency/' },
      { label: 'Ayurveda marketing agency in Chennai', href: '/chennai/ayurveda-marketing-agency/' },
      { label: 'Ayurveda marketing agency in Bangalore', href: '/bangalore/ayurveda-marketing-agency/' },
      { label: 'Beauty and Ayurveda brand marketing hub', href: '/industries/beauty-ayurveda/' },
      { label: 'Marketing for perfume and attar brands', href: '/industries/perfume-marketing-agency/' },
      { label: 'Marketing for jewellery brands', href: '/industries/jewellery-marketing-agency/' },
      { label: 'Meta ads for ecommerce brands', href: '/ecommerce-meta-ads-agency/' },
      { label: 'Amazon account management', href: '/amazon-account-management/' },
      { label: 'Ecommerce SEO for herbal brands', href: '/ecommerce-seo/' },
      { label: 'Selling to UK buyers from India', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'LTV to CAC calculator', href: '/tools/ltv-cac-calculator/' },
    ],
    faqs: [
      { q: 'What does an Ayurveda marketing agency do?', a: 'It plans and runs the online growth of an Ayurvedic or herbal brand: Meta and Google ads, product pages, marketplace listings, SEO content and repeat-purchase programmes. The difference from a general agency is care with claims, an understanding of how Ayurvedic products are licensed and labelled, and a plan for buyers both in India and abroad.' },
      { q: 'Can Ayurvedic medicines be advertised on Meta and Google?', a: 'Some can, within limits. Indian law restricts ads that claim to treat certain diseases, and the platforms limit health claims of their own. Many brands advertise by focusing on ingredients, ritual and daily use rather than conditions. Because the rules for Ayurvedic medicines have changed in recent years, check each product with your regulatory adviser first.' },
      { q: 'What is the difference between classical and proprietary Ayurvedic products?', a: 'Classical products follow recipes from recognised Ayurvedic texts, such as chyawanprash or triphala churna, and many brands make them. Proprietary products are a brand’s own formulations. Classical products compete on quality, sourcing and faithfulness to the text, while proprietary products compete on brand, story and the experience of using them.' },
      { q: 'Do you offer Ayurvedic digital marketing for brands selling abroad?', a: 'Yes. We help Ayurvedic brands reach Indian communities in the UK, UAE, US, Singapore and Australia with country pages, local currency, shipping set-up and diaspora-focused ads. Each country has its own rules on herbal products, so we start only after you have confirmed with your adviser which products can be sold there.' },
      { q: 'How much does it cost to hire an Ayurveda marketing agency?', a: 'It depends on the channels, the number of products, how much content and creative is needed, and whether marketplaces or overseas markets are included. Ad spend is paid directly to the platforms from your account, and our management fee is quoted separately. We send a fixed written quote after a free audit of your store and ads.' },
      { q: 'Is herbal products marketing slower than other categories?', a: 'Often a little, at the start. Claims need checking, buyers need some education and trust takes time to build. The upside is repeat purchase: oils, teas and churnas run out and get reordered. Brands that invest early in product pages, reviews and refill reminders often find later growth cheaper than the first few months.' },
      { q: 'Can you help with Ayurveda listings on Amazon and Flipkart?', a: 'Yes. We check the category, add licence and ingredient details, write titles and A+ content that avoid restricted claims, and run sponsored ads on products that earn repeat orders. Marketplaces review health-related listings closely, so accurate category and label information prevents many listing suppressions.' },
    ],
  },

  // ───────────────────────────────────────────── 2. Perfume and fragrance
  {
    slug: 'industries/perfume-marketing-agency',
    kind: 'industry',
    title: 'Perfume Marketing Agency for Fragrance Brands',
    description: 'Perfume marketing agency for fragrance, attar and inspired-by brands: note-led ads, discovery sets, sampling, gifting seasons and growth on Amazon and Nykaa.',
    primaryKeyword: 'perfume marketing agency',
    navLabel: 'Perfume & fragrance',
    breadcrumb: [{ label: 'Industries', href: '/industries/' }],
    eyebrow: 'Perfume, fragrance and attar',
    h1: 'Perfume Marketing Agency for Scents *Nobody Can Smell Online*',
    intro: 'Billion Ecommerce Agency is a perfume marketing agency for fragrance houses, attar makers and inspired-by brands. Shoppers cannot smell a perfume through a screen, so we sell it with notes, mood and occasion, discovery sets and samples, gifting campaigns timed to the calendar, and listings on Amazon, Nykaa and Myntra that answer the questions a store assistant would.',
    icon: 'social',
    facts: ['Sampling-led growth', 'Gifting season plans', 'Store and marketplaces'],
    headings: {
      pains: 'Why fragrance brands find online growth hard',
      includes: 'Perfume brand marketing, built around the bottle',
      process: 'How we grow a fragrance brand in *4 steps*',
      guide: 'Choosing a perfume marketing agency: how scent sells online',
    },
    pains: [
      { title: 'A full bottle is a blind buy', body: 'Shoppers are asked to pay for a scent they have never smelt. Without samples, clear notes and honest descriptions, most of them leave the page.' },
      { title: 'Sales that only spike at festivals', body: 'Diwali, Valentine’s Day and the wedding season bring rushes of gifting orders. Then sales drop while ad costs stay high.' },
      { title: 'Inspired-by risks', body: 'Using designer brand names in ads, keywords or listings can get ads rejected or listings removed after trademark complaints.' },
    ],
    includes: [
      { title: 'Note-led product pages', body: 'Top, heart and base notes, concentration, realistic wear time, occasion and season, so buyers can picture the scent before they order.' },
      { title: 'Discovery sets and sampling', body: 'Sample vials, discovery boxes and credit-back offers that let a buyer try first and then move to a full bottle.' },
      { title: 'Fragrance ads on Meta and Google', body: 'Video and carousel creative around mood, occasion and notes, plus search campaigns on scent families such as oud, musk and floral.' },
      { title: 'Gifting season campaigns', body: 'Gift sets, wrapping, messages and delivery cut-offs planned ahead of Diwali, Raksha Bandhan, Valentine’s Day, Eid, Christmas and the wedding season.' },
      { title: 'Amazon, Nykaa and Myntra', body: 'Listings with notes, concentration and volume in titles and bullets, A+ content, and sponsored ads on hero scents and gift sets.' },
      { title: 'Reviews and creator content', body: 'Reviews that describe how a scent wears through the day, and creator videos with real reactions, reused on product pages and in ads.' },
    ],
    process: [
      { title: 'Map the range', body: 'We sort your scents by family, occasion and price, then choose the hero scents and the sampler that will lead new buyers in.' },
      { title: 'Fix the product pages', body: 'Notes, concentration, wear-time descriptions, reviews and gift options go onto every hero page before ads are scaled.' },
      { title: 'Launch sampling and ads', body: 'Discovery sets and sample offers go live with Meta, Google and marketplace campaigns, plus follow-ups that turn samples into full bottles.' },
      { title: 'Plan the gifting year', body: 'We map the gifting peaks, prepare gift sets and creative early, and keep repeat buyers interested between seasons.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Google Ads', 'Instagram', 'Amazon', 'Nykaa', 'Myntra', 'WhatsApp', 'YouTube'],
    figures: [
      { type: 'mindmap', caption: 'Four ways to describe a scent so an online buyer can imagine it.', after: 1, center: 'Describing a scent', branches: [
        { label: 'Notes', items: ['Top: the first minutes', 'Heart: the main character', 'Base: what lingers'] },
        { label: 'Strength', items: ['EDP, EDT or attar oil', 'Honest wear time'] },
        { label: 'Occasion', items: ['Office, evening, wedding', 'Summer or winter wear'] },
        { label: 'Feeling', items: ['Fresh, warm or sweet', 'Who it suits'] },
      ] },
      { type: 'steps', caption: 'From sample to full bottle: a simple sampling path for a perfume brand.', after: 2, steps: [
        { title: 'Discovery set', body: 'Several scents in small vials' },
        { title: 'Follow-up message', body: 'Ask which scent they liked' },
        { title: 'Credit back', body: 'Sample cost credited on a full bottle' },
        { title: 'Full bottle', body: 'The chosen scent at full size' },
        { title: 'Review request', body: 'How it wore through the day' },
      ] },
    ],
    guide: [
      {
        heading: 'Why perfume is hard to sell online',
        paragraphs: [
          'Perfume is a sense-first product sold through a screen. In a store, a buyer sprays a tester, waits a few minutes and decides. Online, they have a photo of a bottle and a list of notes. That gap is the central problem any perfume marketing agency has to solve, and it explains why fragrance brands that grow online lean so heavily on samples, descriptions and reviews.',
          'Price adds pressure. A full bottle is a considered purchase, and buyers worry that a scent will smell different on their skin, fade by lunchtime or feel too strong for the office. Every part of your marketing should reduce that risk: clear notes, honest wear-time descriptions, an easy way to try first, and a fair policy on exchanges for unopened bottles.',
        ],
      },
      {
        heading: 'Describing a scent with notes, mood and occasion',
        paragraphs: [
          'Most buyers do not know fragrance vocabulary, but they understand moods and moments. A good product page names the top, heart and base notes, then translates them: fresh and citrusy for the first few minutes, softly floral through the day, warm and woody by evening. Add the concentration (eau de parfum, eau de toilette or attar oil), the occasions it suits and the season it fits.',
          'Comparisons help when they are honest. “If you like warm, spicy scents, start here” guides a buyer without naming another brand. Short videos of real people describing a scent in their own words often do more than a polished bottle shot, and they work as ad creative too. The first thing we do as a perfume marketing agency is rewrite hero product pages in this way, because ads cannot fix a page that leaves buyers guessing.',
        ],
        bullets: [
          'Name the notes, then describe them in everyday words',
          'State the concentration and give a realistic idea of wear time',
          'Group scents by family: fresh, floral, woody, oud, musk, gourmand',
          'Suggest occasions and seasons for each scent',
        ],
      },
      {
        heading: 'Discovery sets, samples and the path to a full bottle',
        paragraphs: [
          'Sampling is the most dependable way to lower the risk of a first order. A discovery set of several small vials lets a buyer test scents on their own skin over a few days. Pair it with a credit that comes off a later full-bottle order, and the sample becomes a customer acquisition tool rather than a cost.',
          'The follow-up matters as much as the set. A message a few days after delivery asking which scent they liked, with a direct link to that full bottle, turns a trial into a sale. For perfume brand marketing on a modest budget, this sample-to-bottle path is often a better use of ad spend than pushing full bottles to cold audiences.',
        ],
      },
      {
        heading: 'Planning around gifting seasons',
        paragraphs: [
          'Perfume is a popular gift. In India, Diwali, Raksha Bandhan, Valentine’s Day and the wedding season drive gifting demand, and abroad Christmas, Eid and Mother’s Day matter. Gift buyers behave differently from people buying for themselves: they want a safe choice, attractive packaging, a gift message and a firm delivery date.',
          'Between peaks, keep self-buyers engaged with new launches, layering ideas and refills, so the year does not depend on a few weeks of gifting. A fragrance marketing agency should plan both halves of the year, not only the festive rush.',
        ],
        bullets: [
          'Build gift sets and minis well before each peak',
          'Show delivery cut-off dates clearly on the site and in ads',
          'Offer gift wrap, a note and easy exchanges for the recipient',
          'Retarget past gift buyers before the next occasion',
        ],
      },
      {
        heading: 'Attar and inspired-by brands: special care',
        paragraphs: [
          'Attar brands sell a tradition: concentrated, usually alcohol-free oils with roots in Indian and Middle Eastern perfumery. Buyers want to know the base oil, the main ingredient and how to apply it. Content that explains this, along with the history of the craft and places such as Kannauj, is useful in search and gives ads something to say beyond a discount.',
          'Inspired-by and dupe brands face a different challenge. Using a designer brand’s name in ads, keywords, product titles or hashtags can lead to trademark complaints, ad rejections and listing removals, and marketplaces act on these complaints. Describe your scents by their own names and notes, and let buyers make the comparison in reviews. Check any comparative wording with a legal adviser before it goes live.',
        ],
      },
      {
        heading: 'Marketplaces, shipping and measuring growth',
        paragraphs: [
          'Amazon, Nykaa and Myntra bring fragrance buyers who already intend to buy. Put the concentration, volume and main notes in titles and bullets, use A+ content for the notes pyramid, and watch for counterfeit sellers on your listings. Alcohol-based perfume is treated as dangerous goods on many shipping routes, especially by air, so check courier rules before promising fast delivery or international shipping.',
          'Measure growth across the whole customer journey: sample orders, sample-to-bottle conversion, repeat purchases and gifting revenue by season. A perfume marketing agency that reports only on first-order return on ad spend will undervalue your sampling programme and tend to overspend at peak season.',
        ],
      },
    ],
    related: [
      { label: 'Perfume marketing agency in Coimbatore', href: '/coimbatore/perfume-marketing-agency/' },
      { label: 'Perfume marketing agency in Chennai', href: '/chennai/perfume-marketing-agency/' },
      { label: 'Perfume marketing agency in Bangalore', href: '/bangalore/perfume-marketing-agency/' },
      { label: 'Beauty and Ayurveda brand marketing hub', href: '/industries/beauty-ayurveda/' },
      { label: 'Marketing for Ayurvedic and herbal brands', href: '/industries/ayurveda-marketing-agency/' },
      { label: 'Marketing for jewellery and gifting brands', href: '/industries/jewellery-marketing-agency/' },
      { label: 'Meta ads for fragrance and ecommerce brands', href: '/ecommerce-meta-ads-agency/' },
      { label: 'Google Shopping and search ads for online stores', href: '/ecommerce-ppc-agency/' },
      { label: 'Amazon account management', href: '/amazon-account-management/' },
      { label: 'Indian sale and gifting calendar', href: '/resources/sale-calendar/' },
      { label: 'ROAS calculator', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'How do you sell perfume online when people cannot smell it?', a: 'You replace the tester with words, video and samples. Describe the top, heart and base notes in everyday language, state the concentration and a realistic wear time, show real people reacting to the scent, and offer a discovery set or sample with credit towards a full bottle. Reviews that describe how a scent wears add the final reassurance.' },
      { q: 'What does a fragrance marketing agency do differently?', a: 'It plans around the fact that buyers cannot smell the product. That means note-led product pages, sampling and discovery sets, creative built around mood and occasion, and a calendar shaped by gifting seasons. It also keeps inspired-by brands clear of trademark problems and measures sample-to-bottle conversion, not only first-order sales.' },
      { q: 'Are discovery sets worth it for a small perfume brand?', a: 'Usually, yes. A discovery set lowers the risk of a first order, lets buyers test scents on their own skin and tells you which scents people prefer. Offering the set’s cost as credit on a full bottle, and following up a few days after delivery, turns many sample buyers into full-bottle customers.' },
      { q: 'Can inspired-by perfume brands advertise on Meta and Google?', a: 'They can advertise their own products, but using a designer brand’s name in ad text, keywords, product titles or hashtags risks trademark complaints, rejected ads and removed listings. Describe each scent by its own name, notes and mood, and let customers draw comparisons in reviews. Check comparative wording with a legal adviser.' },
      { q: 'When should perfume brands plan gifting campaigns?', a: 'Start several weeks before each peak. Gift sets, packaging, creative and stock need to be ready before ad costs rise, and delivery cut-off dates must be clear. In India the main peaks are Diwali, Raksha Bandhan, Valentine’s Day and the wedding season; abroad, Christmas, Eid and Mother’s Day matter too.' },
      { q: 'How much does a perfume marketing agency cost?', a: 'It depends on the number of scents, the channels you use, how much video and creative is needed and whether marketplaces are included. Ad spend is paid directly to Meta, Google or Amazon from your account, and our management fee is quoted separately. We send a fixed written quote after a free audit of your store and ads.' },
      { q: 'Should a perfume brand sell on Amazon and Nykaa?', a: 'For most brands, yes. Amazon, Nykaa and Myntra reach fragrance buyers who are already shopping. Strong listings with notes, concentration and volume, plus A+ content and reviews, matter more than ad budget at the start. Your own store remains the place for discovery sets, subscriptions and building a direct relationship with buyers.' },
    ],
  },

  // ───────────────────────────────────────────── 3. Jewellery
  {
    slug: 'industries/jewellery-marketing-agency',
    kind: 'industry',
    title: 'Jewellery Marketing Agency for Online Brands',
    description: 'Jewellery marketing agency for gold, silver, demi-fine and fashion jewellery brands: trust-led pages, hallmark clarity, try-on video and store visits.',
    primaryKeyword: 'jewellery marketing agency',
    navLabel: 'Jewellery',
    breadcrumb: [{ label: 'Industries', href: '/industries/' }],
    eyebrow: 'Gold, silver, demi-fine and fashion jewellery',
    h1: 'Jewellery Marketing Agency That Earns Trust *Before the First Order*',
    intro: 'Billion Ecommerce Agency is a jewellery marketing agency for gold, diamond, silver, demi-fine and fashion jewellery brands. High prices and fear of fakes make buyers cautious, so we build trust with clear purity and hallmark details, close-up and try-on video, wedding and festive campaigns, and ads that bring shoppers to your website or into your store.',
    icon: 'website',
    facts: ['Trust-first product pages', 'Online sales and store visits', 'Wedding and festive plans'],
    headings: {
      pains: 'Where jewellery brands lose buyers online',
      includes: 'Jewellery digital marketing, from reel to showroom',
      process: 'How we grow a jewellery brand in *4 steps*',
      guide: 'What a jewellery marketing agency should do for your brand',
    },
    pains: [
      { title: 'High prices, low trust', body: 'Buyers hesitate to spend large amounts online with a brand they have not met. Missing purity, weight, hallmark or return details sends them back to a jeweller they know.' },
      { title: 'Photos that hide the piece', body: 'Flat images cannot show sparkle, size on the body or how a chain sits. If buyers cannot judge the piece, they do not order it.' },
      { title: 'Seasons that come and go', body: 'Akshaya Tritiya, Dhanteras, Diwali and the wedding season drive demand. Brands that plan late pay more for ads and run short of stock.' },
    ],
    includes: [
      { title: 'Trust-led product pages', body: 'Metal, purity, weight, stone details, hallmark and HUID information, size guides, care notes and return and exchange policies, all in plain view.' },
      { title: 'Video and virtual try-on', body: 'Close-up reels, on-body video, scale shots next to a hand or coin, and try-on tools for earrings and rings where your platform supports them.' },
      { title: 'Meta and Google ads by price tier', body: 'Catalogue ads for demi-fine and fashion ranges, consideration video for gold and diamond pieces, and search campaigns on design and occasion terms.' },
      { title: 'Store visit campaigns', body: 'Local ads, Google Business Profile, appointment booking and WhatsApp enquiries for brands with showrooms, tracked alongside online orders.' },
      { title: 'Wedding and festive planning', body: 'Bridal collections and festive gifting campaigns planned months ahead, with creative, stock and offers ready before demand peaks.' },
      { title: 'SEO for design searches', body: 'Collection pages and guides for searches such as temple jewellery, kada designs or lab-grown diamond rings, written for Google and AI answers.' },
    ],
    process: [
      { title: 'Audit trust signals', body: 'We check product pages, policies, reviews, photos and ad history, and list the gaps that stop a cautious buyer from ordering.' },
      { title: 'Fix pages and content', body: 'Purity, hallmark, weight and size details, new video and clear policies go live on hero collections first.' },
      { title: 'Launch by price tier', body: 'Fashion and demi-fine ranges get catalogue ads aimed at online sales; gold and diamond pieces get video, enquiry and store-visit campaigns.' },
      { title: 'Plan the season', body: 'We build the year around weddings, festivals and gifting days, and measure online orders, enquiries and store visits together.' },
    ],
    platforms: ['Shopify', 'WooCommerce', 'Meta Ads', 'Google Ads', 'Google Business Profile', 'Instagram', 'YouTube', 'Amazon', 'WhatsApp'],
    figures: [
      { type: 'matrix', caption: 'How the sales path changes with jewellery type and how buyers decide.', after: 2, cols: ['Quick decision', 'Weeks of research'], rows: ['Usually bought online', 'Often finished in store'], cells: [
        { title: 'Catalogue ads', body: 'Fashion and demi-fine: reels, catalogue ads, fast checkout' },
        { title: 'Nurture online', body: 'Silver and lab-grown: reviews, video, WhatsApp follow-up' },
        { title: 'Gift fast', body: 'Small gold gifts: clear purity, quick delivery, store pickup' },
        { title: 'Book a visit', body: 'Bridal and diamond: video first, then an appointment' },
      ] },
      { type: 'venn', caption: 'Online and showroom do different jobs for a jewellery brand; video calls join them.', after: 4, left: { title: 'Online store', body: 'Browse designs, check purity, read reviews' }, right: { title: 'Showroom', body: 'Touch, try on and decide with family' }, overlap: 'Video calls and booked visits' },
    ],
    guide: [
      {
        heading: 'Why jewellery is a trust purchase',
        paragraphs: [
          'Jewellery combines high value, emotion and a fear of being cheated. A buyer is not only choosing a design; they are trusting that the gold is the purity you say, the stones are what you describe and the piece will arrive as pictured. Any jewellery marketing agency worth hiring starts with that trust problem before it spends anything on ads.',
          'The category is also wide. Fashion jewellery and demi-fine pieces in silver or gold-plated metal are often bought quickly, for oneself or as a gift. Gold, diamond and bridal pieces are considered for weeks, discussed with family and often finished in a store. One marketing plan for all of these wastes money; each tier needs its own message, channel and measure of success.',
        ],
      },
      {
        heading: 'Hallmarking, HUID and purity: say it clearly',
        paragraphs: [
          'In India, hallmarking by the Bureau of Indian Standards (BIS) is mandatory for most gold jewellery sold in the districts covered by the rules. A hallmarked piece carries the BIS mark, the purity grade (for example 22K916 for 22 carat gold) and a six-character alphanumeric HUID, the Hallmark Unique Identification number. Buyers can verify a HUID in the BIS Care app. Silver and other metals follow separate rules, so confirm the current position for your own products.',
          'For marketing, this is an asset rather than paperwork. Show purity and hallmark details on every gold product page, explain what the marks mean in a short guide, and mention hallmarking in ads where it fits. For diamonds, state clearly whether stones are natural or lab-grown and share independent grading reports where you have them. Clear disclosure protects your brand and gives buyers confidence.',
        ],
        bullets: [
          'Metal and purity, such as 22 carat gold, 18 carat gold or 925 sterling silver',
          'Net weight, stone weight and how making charges are worked out',
          'Hallmark and HUID details for gold pieces',
          'Natural or lab-grown, with grading report details for diamonds',
          'Return, exchange and buyback policies in plain words',
        ],
      },
      {
        heading: 'Gold vs demi-fine, silver and fashion jewellery',
        paragraphs: [
          'Demi-fine, silver and fashion jewellery suit direct online sales. Prices are lower, designs change often and buyers respond to reels, creator styling and catalogue ads. Success here looks like a healthy conversion rate, repeat purchases and a steady flow of new designs. Plating quality, skin sensitivity and care instructions are the questions to answer on every page.',
          'Gold and diamond jewellery behaves differently. Buyers research online, compare designs and weights, ask questions on WhatsApp and often finish the purchase in a showroom or on a video call. Jewellery digital marketing for this tier is measured by enquiries, appointments and store visits as much as by online orders. Gold rates also move daily, so pages and ads that show product prices need to update with them.',
        ],
      },
      {
        heading: 'Video, try-on and photography',
        paragraphs: [
          'Jewellery is small, shiny and hard to photograph. Buyers want to see a piece move, catch the light and sit on a real neck, wrist or ear. Short close-up videos, on-body shots across different skin tones and a scale reference such as a hand or coin answer the question “how big is it really?”. Virtual try-on tools help for earrings, nose pins and rings where your platform supports them.',
          'This content does double duty. The same reels feed Instagram and Meta ads, product pages, YouTube Shorts and marketplace listings. Plan shoots by collection and occasion, so the bridal set, the office-wear chain and the festive gift each get footage that fits how they are bought.',
        ],
      },
      {
        heading: 'Wedding, festive and store-visit campaigns',
        paragraphs: [
          'Demand for jewellery in India rises around Akshaya Tritiya, Dhanteras and Diwali, and through the wedding season. Abroad, Valentine’s Day, Mother’s Day and Christmas matter, as do diaspora wedding seasons. Plan creative and stock early, because ad costs rise when every jeweller competes for the same buyers in the same weeks.',
          'For brands with showrooms, the aim of many campaigns is a visit, not an online order. Local search ads, a complete Google Business Profile, appointment booking and WhatsApp enquiry flows bring buyers in. Track store visits and enquiries alongside online sales, so the budget that drives in-store sales is not cut by mistake.',
        ],
        bullets: [
          'Bridal collections and appointment campaigns before the wedding season',
          'Gifting edits for Raksha Bandhan, Valentine’s Day and anniversaries',
          'Dhanteras and Akshaya Tritiya campaigns for gold coins and small pieces',
          'Retargeting for buyers who enquired but did not visit',
        ],
      },
      {
        heading: 'Choosing a jewellery marketing agency',
        paragraphs: [
          'When you compare agencies, ask how they would show purity and hallmark details, how they would split budget between fashion and fine jewellery, and how they measure store visits. Ask how they would handle gold rate changes in ads and how they plan for the wedding season. A jewellery marketing agency should also be honest about what online ads can and cannot do for high-value pieces.',
          'Brands abroad searching for a jewelry marketing agency, in the US spelling, can work with us remotely, and we can plan campaigns for buyers in the UK, UAE, US and Australia, including Indian communities looking for traditional designs. For most jewellery brands, the right first step is a trust audit of product pages before any increase in ad spend.',
        ],
      },
    ],
    related: [
      { label: 'Jewellery marketing agency in Coimbatore', href: '/coimbatore/jewellery-marketing-agency/' },
      { label: 'Jewellery marketing agency in Chennai', href: '/chennai/jewellery-marketing-agency/' },
      { label: 'Jewellery marketing agency in Bangalore', href: '/bangalore/jewellery-marketing-agency/' },
      { label: 'Beauty and Ayurveda brand marketing hub', href: '/industries/beauty-ayurveda/' },
      { label: 'Marketing for perfume and gifting brands', href: '/industries/perfume-marketing-agency/' },
      { label: 'Marketing for Ayurvedic and herbal brands', href: '/industries/ayurveda-marketing-agency/' },
      { label: 'Meta catalogue ads for ecommerce brands', href: '/ecommerce-meta-ads-agency/' },
      { label: 'Google Shopping ads for online stores', href: '/ecommerce-ppc-agency/' },
      { label: 'Shopify store development for jewellery brands', href: '/shopify-development/' },
      { label: 'Ecommerce SEO for jewellery collections', href: '/ecommerce-seo/' },
      { label: 'Festive sale playbook', href: '/resources/festive-sale-playbook/' },
    ],
    faqs: [
      { q: 'What does a jewellery marketing agency do?', a: 'It plans and runs online growth for a jewellery brand: product pages that build trust, photography and video, Meta and Google ads, SEO for design searches and campaigns around weddings and festivals. For brands with showrooms, it also drives enquiries and store visits, and measures them alongside online orders so the full effect of the ads is visible.' },
      { q: 'How do you sell high-value gold jewellery online?', a: 'Lead with trust. Show purity, weight, hallmark and HUID details, clear return and exchange policies and close-up video of every piece. Offer WhatsApp or video-call consultations and showroom appointments, because many buyers want to see gold in person before paying. Measure enquiries and visits as well as online orders.' },
      { q: 'Should I show HUID and hallmark details on my website?', a: 'Yes. Hallmarking with a HUID is mandatory for most gold jewellery sold in India, and buyers can verify the number in the BIS Care app. Showing purity and hallmark details on product pages, with a short guide to what the marks mean, answers a key buyer worry and makes your brand look more credible.' },
      { q: 'Is jewellery digital marketing different for demi-fine and fashion brands?', a: 'Yes. Demi-fine and fashion jewellery are lower-priced and often bought on impulse, so catalogue ads, reels, creator styling and fast checkout work well. Gold and diamond pieces need longer consideration, video, consultations and store visits. Most brands with a mixed range should run separate campaigns and targets for each tier.' },
      { q: 'When should jewellery brands plan wedding and festive campaigns?', a: 'Start planning a few months before each peak. Bridal collections, shoots and stock should be ready before the wedding season, and festive campaigns before Akshaya Tritiya, Dhanteras and Diwali. Ad costs rise when every jeweller competes for the same buyers, so creative made early gives you room to test before the rush.' },
      { q: 'How much does a jewellery marketing agency cost?', a: 'It depends on the size of your catalogue, the channels you use, how much photography and video is needed and whether store-visit campaigns are included. Ad spend is paid directly to Meta or Google from your account, and our management fee is quoted separately. We send a fixed written quote after a free audit.' },
      { q: 'Do you work with overseas brands looking for a jewelry marketing agency?', a: 'Yes. We work remotely with jewellery brands abroad and with Indian brands selling to the UK, UAE, US and Australia, including diaspora buyers looking for traditional designs. Clients in the UK can also meet the team at our London office by appointment, while most delivery is handled by our Chennai team.' },
    ],
  },
];
