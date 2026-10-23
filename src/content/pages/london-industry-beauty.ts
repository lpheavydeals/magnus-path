import type { ServicePageData } from '../../data/types';

const londonBreadcrumb = [
  { label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' },
  { label: 'London', href: '/london/ecommerce-agency/' },
];

const londonOfficeNote = (who: string) =>
  `Our London office is in E18, near Woodford and Walthamstow. ${who} can meet the team there by appointment for the audit walk-through or a planning session; most daily campaign work is done by our Chennai team, so changes keep moving after UK hours.`;

export const londonIndustryBeautyPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. Skincare (London)
  {
    slug: 'london/skincare-marketing-agency',
    kind: 'location',
    market: 'UK',
    title: 'Skincare Marketing Agency in London: Indie Brands | Magnus Path',
    description: 'Skincare marketing agency in London for indie brands: content for every skin tone, ASA-aware claims, London creators, TikTok Shop UK and growth across the UK and EU.',
    primaryKeyword: 'skincare marketing agency in London',
    navLabel: 'Skincare London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Skincare brands in London · Indie labels · Every skin tone',
    h1: 'Skincare Marketing Agency in London for *Indie Skincare Brands*',
    intro: 'Magnus Path is a skincare marketing agency in London for independent brands making serums, SPF, cleansers and barrier creams. We build product pages and ads that speak to every skin tone in the city, keep claims inside UK rules, work with London creators and TikTok Shop UK, and help you sell from London to the rest of the UK and Europe. Meet us in E18 by appointment.',
    icon: 'social',
    facts: ['Content for every skin tone', 'Free audit, then a GBP quote', 'Meet us in E18 by appointment'],
    headings: {
      pains: 'Where London skincare brands *lose momentum*',
      includes: 'What our skincare marketing in London covers',
      process: 'Working with a London skincare brand in *4 steps*',
      guide: 'Skincare marketing in London: a guide for indie founders',
    },
    pains: [
      { title: 'Shot for one skin tone, sold to a whole city', body: 'Swatches and texture shots often show a narrow range of skin. Shoppers in Lewisham, Ilford or Wembley scroll past because nothing tells them the formula was made with their skin in mind.' },
      { title: 'Pop-up buzz that never reaches the website', body: 'A weekend stall at Spitalfields or a Boxpark pop-up brings real conversations and sales, but those buyers are never captured online, so their next order goes to whichever brand reaches them first on Instagram.' },
      { title: 'Claims that read like a clinic menu', body: 'Londoners know treatment language from aesthetics clinics. When a product page borrows words such as treat, heal or repair damage, a cosmetic can start to sound like a medicine and ads get pulled.' },
    ],
    includes: [
      { title: 'Pages for every skin tone', body: 'Product pages and swatches shown on a real range of London skin, with notes on dark marks, white cast, sensitivity and how each formula sits on deeper tones.' },
      { title: 'Claims check against UK rules', body: 'Every claim mapped to the evidence you hold, with medicinal-sounding wording rewritten before it reaches an ad, a listing or a creator brief.' },
      { title: 'London creator programme', body: 'Briefs for London skincare creators on TikTok and Instagram, with #ad labelling, usage rights agreed in writing and partnership ads run from their handles.' },
      { title: 'Paid social and Google Shopping', body: 'Meta, TikTok and Google campaigns split by London, the rest of the UK and EU markets, so you can see where new customers really come from.' },
      { title: 'TikTok Shop UK and Amazon UK', body: 'Shoppable videos, live sessions and listings for hero products, priced in line with your own store so marketplaces do not teach buyers to wait for a deal.' },
      { title: 'Pop-up to online follow-up', body: 'QR codes, sign-up offers and post-event emails for market stalls and pop-ups, so a London weekend crowd becomes a list of customers you can reach again.' },
    ],
    process: [
      { title: 'Free skincare audit', body: 'We review your store, ads, listings and claims, then talk through the findings on a video call or at our E18 office in East London.' },
      { title: 'Plan and GBP quote', body: 'A written plan for pages, creators, channels and markets, with the management fee quoted in GBP. Ad spend stays in your own accounts.' },
      { title: 'Fix pages, then launch', body: 'Hero products, skin-type content and claims are fixed first; ads, creator posts and TikTok Shop go live once the pages can convert.' },
      { title: 'Monthly review on reorders', body: 'We report new customers, reorders and cost per customer by product and market, and move budget towards the formulas London buys again.' },
    ],
    platforms: ['Shopify', 'Shopify Markets', 'Meta Ads', 'TikTok Ads', 'TikTok Shop UK', 'Google Ads', 'Amazon UK', 'GA4'],
    local: {
      city: 'London',
      areas: ['Shoreditch', 'Hackney', 'Walthamstow', 'Stratford', 'Ilford', 'Wembley', 'Brixton', 'Peckham', 'Clerkenwell', 'Notting Hill'],
      note: londonOfficeNote('Skincare founders'),
    },
    figures: [
      { type: 'venn', caption: 'Skincare content for London works where the city’s range of skin meets UK claims rules.', after: 1, left: { title: 'London’s range of skin', body: 'Deeper tones, dark marks, sensitivity, hard water' }, right: { title: 'UK claims rules', body: 'Cosmetic wording, evidence on file, labelled creator posts' }, overlap: 'Pages every Londoner trusts' },
      { type: 'steps', caption: 'Turning a London pop-up visitor into a repeat online customer.', after: 3, steps: [
        { title: 'Market stall', body: 'Spitalfields, Broadway Market or Boxpark' },
        { title: 'QR sign-up', body: 'An offer for a first online order' },
        { title: 'Welcome emails', body: 'How to use it and what to pair it with' },
        { title: 'Refill nudge', body: 'Timed to when the bottle runs low' },
        { title: 'Second order', body: 'A bundle or the next routine step' },
      ] },
    ],
    guide: [
      {
        heading: 'What a skincare marketing agency in London does for indie brands',
        paragraphs: [
          'London is home to a large number of independent skincare labels, many started in a kitchen, a studio flat or a shared unit in Hackney Wick. Founders here tend to sell to their own neighbourhood first, then to the rest of the UK, and often to Ireland and the EU soon after. A skincare marketing agency in London has to serve all three audiences at once: the local buyer who met you at a market, the UK shopper comparing you with high-street options, and the European customer who needs clear delivery and duty information.',
          'The work behind that is fairly consistent: product pages that answer careful questions, ads that stay within the rules, creators who genuinely use the product, a route from trial to reorder, and reporting that separates London, the wider UK and overseas orders. Department stores and specialist shops such as Liberty, Selfridges and Space NK shape what London shoppers expect from premium skincare, so even a small brand is judged against that standard online.',
        ],
      },
      {
        heading: 'Skincare for every skin tone and type in London',
        paragraphs: [
          'London’s skin is as varied as its population. One campaign can reach buyers with melanin-rich skin worried about dark marks, South Asian shoppers in Southall or along Green Street looking for an even tone, and commuters with dry, tight skin from central heating, hard water and long Tube journeys.',
          'Content that works here shows the product on that full range. It talks about dark marks without promising to erase them, says honestly whether a sunscreen leaves a white cast on deeper skin, and never suggests that lighter skin is the goal. Lightening and whitening language is a sensitive area for advertising and, depending on the ingredients, for product safety, so we steer copy towards evenness, radiance and protection.',
        ],
        bullets: [
          'Swatch and texture shots on light, medium and deep skin',
          'Notes on white cast, pilling under make-up and fragrance-free options',
          'Plain patch-test advice for sensitive and reactive skin',
          'Routine content that covers hard water and heated offices',
        ],
      },
      {
        heading: 'UK claims rules in plain terms',
        paragraphs: [
          'Selling skincare from London means working under the UK Cosmetics Regulation. Broadly, that involves a UK Responsible Person, a product safety report and a notification before a product goes on sale in Great Britain, plus evidence for the claims you make. Shipping into the EU usually needs an EU Responsible Person as well, which is worth arranging before European sales open.',
          'Ads and creator posts fall under the CAP Code, which the ASA enforces. In general, a cosmetic should describe how skin looks and feels rather than which condition it treats; wording about curing acne or eczema can push a product into territory the MHRA oversees as medicines. Filtered results and unlabelled paid posts are common causes of complaints. We write within these limits, but we are not regulatory advisers, so your Responsible Person should approve final claims.',
        ],
      },
      {
        heading: 'London creators, TikTok Shop UK and pop-ups',
        paragraphs: [
          'London has a deep pool of skincare creators, from aestheticians and make-up artists to students filming routines in shared flats. The ones that sell are specific: someone with similar skin to your buyer, using the product honestly for a few weeks. We brief them on what they can and cannot claim, agree usage rights and run their content as partnership ads.',
          'TikTok Shop UK has turned short videos and live sessions into a direct sales channel, which suits textures that look good on camera. Offline, a stall at Spitalfields, Broadway Market or a Boxpark pop-up gives instant feedback on texture, scent and price. Treat those days as research as well as sales: a QR code with a first-order offer means the people you meet can be reached again.',
        ],
      },
      {
        heading: 'Fast delivery, seasons and repeat orders',
        paragraphs: [
          'London shoppers are used to quick delivery, and some local brands use same-day or next-day dispatch within the M25 as a reason to buy direct. If you can do it reliably, say so in ads and at checkout; if you cannot, state realistic dates rather than letting buyers guess.',
          'The year has clear peaks: Black Friday, Christmas gift sets and Boxing Day, then January routine resets, Valentine’s and Mother’s Day in March. Diwali and Eid matter to many London households, especially for gift boxes. Across all of them, the profit sits in second and third orders, so refill reminders, routine bundles and minis that lead to full sizes deserve as much planning as a launch.',
        ],
      },
      {
        heading: 'Choosing a skincare marketing agency in London',
        paragraphs: [
          'Ask any skincare marketing agency in London how it handles claims, how it would show your product on different skin tones, and how it measures reorders rather than first-order return on ad spend alone. Ask who will own the ad accounts and the creator content; with us, everything stays in your company’s name.',
          'Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment. Most daily campaign work is done by our Chennai team, which starts ahead of UK time, so requests sent before UK lunchtime are usually handled the same day. Our fee is quoted in GBP after a free audit, and ad spend is paid directly to each platform from your own account.',
        ],
      },
    ],
    related: [
      { label: 'Skincare marketing agency UK', href: '/uk/skincare-marketing-agency/' },
      { label: 'Skincare brands across India', href: '/industries/skincare-marketing-agency/' },
      { label: 'Haircare marketing agency in London', href: '/london/haircare-marketing-agency/' },
      { label: 'Cosmetics marketing agency in London', href: '/london/cosmetics-marketing-agency/' },
      { label: 'Ecommerce Meta ads agency in London for beauty shops', href: '/london/ecommerce-meta-ads-agency/' },
      { label: 'Shopify agency in London for skincare stores', href: '/london/shopify-agency/' },
      { label: 'Ecommerce SEO agency in London for ingredient searches', href: '/london/ecommerce-seo-agency/' },
      { label: 'E-commerce growth agency in London', href: '/london/ecommerce-agency/' },
    ],
    faqs: [
      { q: 'What does a skincare marketing agency in London do?', a: 'It plans and runs the marketing that sells skincare online from London: product pages and routine content, Meta, TikTok and Google ads, creator partnerships, TikTok Shop UK and Amazon UK listings, and reorder emails. For indie brands it also links pop-ups and markets to online sales and supports expansion to the rest of the UK and Europe.' },
      { q: 'How should a brand market skincare to people with melanin-rich skin?', a: 'Show the product on deeper skin in swatches, video and reviews, and answer the questions those buyers ask, such as white cast, dark marks and irritation. Avoid any lightening or whitening language. We plan creators and photography so that every product page reflects the range of skin you will meet across London.' },
      { q: 'Can our ads say a product clears acne or calms eczema?', a: 'Usually not as written. Under the CAP Code a cosmetic should describe appearance and feel, and treatment claims can be treated as medicinal, which brings MHRA rules into play. Most brands describe ingredients and how skin looks instead. Your Responsible Person or regulatory adviser should approve the final wording before anything goes live.' },
      { q: 'Is TikTok Shop UK worth it for a London skincare brand?', a: 'It can be, if your products show well on camera and you can handle the orders a popular video creates. Start with one or two hero products, work with creators who share your buyers’ skin type, and keep prices aligned with your own store so the shop does not undercut it.' },
      { q: 'Can you help us sell to the EU from London?', a: 'Yes, on the marketing side. We set up Shopify Markets, localised pages and ads for EU countries, with reporting split by market. You will usually need an EU Responsible Person and a clear plan for duties and delivery, which your logistics and regulatory advisers should confirm before launch.' },
      { q: 'How much does a skincare marketing agency in London cost?', a: 'It depends on the number of products, channels and markets, and how much creative and creator work you need. We quote the management fee in GBP in a fixed written quote after a free audit. Ad spend is separate and paid by you directly to Meta, TikTok, Google or Amazon.' },
      { q: 'Can we meet your team in London?', a: 'Yes. Our London office is in E18, near Woodford and Walthamstow, and skincare founders can meet us there by appointment. Most daily work is done by our Chennai team, which starts ahead of UK time, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────────────────────────── 2. Haircare (London)
  {
    slug: 'london/haircare-marketing-agency',
    kind: 'location',
    market: 'UK',
    title: 'Haircare Marketing Agency in London: All Hair Types | Magnus Path',
    description: 'Haircare marketing agency in London for oils, shampoos and styling brands: textured hair content, South Asian hair rituals, careful growth claims and TikTok Shop UK.',
    primaryKeyword: 'haircare marketing agency in London',
    navLabel: 'Haircare London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Haircare brands in London · Textured hair · Hair oils · Scalp care',
    h1: 'Haircare Marketing Agency in London for *Every Hair Type*',
    intro: 'Magnus Path is a haircare marketing agency in London for brands making hair oils, shampoos, conditioners, styling products and scalp care. We build content for coily, curly, wavy and straight hair, reach Black British and South Asian buyers with care, work with London hair creators and TikTok Shop UK, and keep claims inside UK rules. Meet us in E18 by appointment.',
    icon: 'social',
    facts: ['Textured hair and hair oil content', 'Free audit, then a GBP quote', 'Meet us in E18 by appointment'],
    headings: {
      pains: 'Why London haircare brands *stall*',
      includes: 'What our haircare marketing in London covers',
      process: 'Growing a London haircare brand in *4 steps*',
      guide: 'Haircare marketing in London: hair types, rituals and rules',
    },
    pains: [
      { title: 'One routine for a city of hair types', body: 'A single wash-and-go video cannot speak to someone with tight coils in Peckham, a South Asian buyer oiling long hair in Southall and a commuter with fine, flat hair at once. Generic content gets ignored by all three.' },
      { title: 'Growth promises that get ads rejected', body: 'Copy about regrowing hair, stopping shedding or curing dandruff can read as a medicinal claim. Ads are disapproved, and trust suffers when results take months to show.' },
      { title: 'Buyers loyal to the shop down the road', body: 'Many Londoners buy haircare from the Afro hair shop or South Asian grocer on their high street. Without a clear reason to order online, such as range, bundles or delivery, they stay put.' },
    ],
    includes: [
      { title: 'Content by hair type and texture', body: 'Product pages, routines and video organised by curl pattern, porosity and density, so a buyer can see in seconds whether a product suits their hair.' },
      { title: 'Hair oil and ritual content', body: 'Pre-wash oiling and scalp massage explained for South Asian buyers and newcomers alike, with honest guidance on how much to use and how to wash it out.' },
      { title: 'Claims review', body: 'Shedding, growth, dandruff and scalp wording checked against the CAP Code and platform policy, then rewritten around care, feel and appearance.' },
      { title: 'London hair creators', body: 'Natural hair, loc, braid and South Asian haircare creators briefed on long-term honest use, with labelling and usage rights agreed in writing.' },
      { title: 'Paid social, Google and TikTok Shop UK', body: 'Campaigns built on routines and textures, Google Shopping feeds for hero products, and shoppable videos where wash-day content performs.' },
      { title: 'Bundles and refill timing', body: 'Wash-day kits, oil and shampoo pairs, and reminders timed to how long a bottle lasts for short, medium and long hair.' },
    ],
    process: [
      { title: 'Free haircare audit', body: 'We review your store, ads, reviews and claims by hair type, then go through the findings on a call or at our E18 office.' },
      { title: 'Audience map and GBP quote', body: 'A written plan that splits your buyers by hair type and heritage, with channels, creators and our fee quoted in GBP.' },
      { title: 'Content first, then ads', body: 'Routine pages and creator content are produced before spend rises, so ads land on pages that answer each group’s questions.' },
      { title: 'Review reorders by product', body: 'Monthly reporting on new customers, time between orders and repeat rate by product and hair type, with budget moved accordingly.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads', 'TikTok Shop UK', 'YouTube', 'Google Ads', 'Amazon UK', 'GA4'],
    local: {
      city: 'London',
      areas: ['Peckham', 'Brixton', 'Tottenham', 'Lewisham', 'Croydon', 'Southall', 'Ilford', 'Green Street', 'Walthamstow', 'Wembley'],
      note: londonOfficeNote('Haircare founders'),
    },
    figures: [
      { type: 'mindmap', caption: 'The four haircare audiences a London brand usually needs to speak to separately.', after: 0, center: 'London haircare buyers', branches: [
        { label: 'Textured hair', items: ['Coils and curls', 'Long wash-day routines', 'Protective styles'] },
        { label: 'Hair oiling', items: ['Pre-wash oil rituals', 'Scalp massage', 'Long, thick hair'] },
        { label: 'Scalp care', items: ['Dryness and flakes', 'Cosmetic, not medical'] },
        { label: 'Everyday', items: ['Hard water and frizz', 'Fine or flat hair'] },
      ] },
      { type: 'matrix', caption: 'How to present a haircare benefit depends on how fast it shows and what it touches.', after: 3, cols: ['Shows on day one', 'Shows over weeks'], rows: ['Look and feel', 'Scalp and growth'], cells: [
        { title: 'Lead with video', body: 'Softness, shine and definition shown on real hair' },
        { title: 'Show the routine', body: 'Diary-style content across several wash days' },
        { title: 'Describe comfort', body: 'Talk about a scalp that feels clean and calm' },
        { title: 'Handle with care', body: 'Growth wording needs evidence and careful review' },
      ] },
    ],
    guide: [
      {
        heading: 'What a haircare marketing agency in London needs to understand first',
        paragraphs: [
          'London buyers bring an unusually wide range of hair to a single category. Coily and kinky hair, loose curls, thick South Asian hair grown long, fine straight hair, colour-treated hair and protective styles all sit in the same audience. A haircare marketing agency in London has to segment by hair type before it segments by age or postcode, because each group asks completely different questions.',
          'The city also has a strong offline haircare culture. Afro hair shops in Peckham, Brixton and Tottenham, South Asian beauty stores in Southall and on Green Street, and salons that recommend products to regulars all shape what people buy. Online brands win when they offer range, bundles, honest education and dependable delivery that the high street cannot always match.',
        ],
      },
      {
        heading: 'Textured hair: education first, product second',
        paragraphs: [
          'For many Black British and mixed-race buyers, haircare is a long learning process: porosity, the balance of moisture and protein, detangling, protective styles and wash days that take hours. Content that respects that knowledge, made with creators who share the hair type, earns trust. Content that treats textured hair as a niche add-on is spotted quickly.',
          'Show products on real coils and curls, filmed through the whole routine rather than just the final result. Say clearly which curl patterns a product suits and which it does not. Avoid framing that presents natural hair as a problem to be tamed.',
        ],
        bullets: [
          'Filters by curl pattern, porosity and density on collection pages',
          'Wash-day videos filmed in full, not only the finish',
          'Ingredient notes on oils, butters, humectants and proteins',
          'Clear advice for locs, braids and other protective styles',
        ],
      },
      {
        heading: 'Hair oils and South Asian haircare in London',
        paragraphs: [
          'Oiling before washing is a weekly habit in many South Asian households in Southall, Wembley, Ilford and East Ham, and it is spreading among buyers who discovered it on TikTok. That gives oil brands two audiences: people who grew up with coconut, amla or bhringraj oil and want a version they trust, and newcomers who need to be shown how much to use and how to rinse it out.',
          'Speak to both without talking down to either. Heritage buyers respond to ingredients and methods they recognise, sometimes with Hindi, Punjabi, Gujarati, Tamil or Urdu words in the creative. Newcomers need simple steps and honest expectations about texture. Diwali and Eid gift sets suit oils and hair rituals, as long as they are planned early.',
        ],
      },
      {
        heading: 'Shedding, growth and scalp claims under UK rules',
        paragraphs: [
          'Hair loss is an emotional subject, which is why claims around it draw regulators’ attention. Broadly, a cosmetic shampoo or oil can talk about cleansing, conditioning, less breakage when brushing or a scalp that feels comfortable. Wording that promises regrowth, stops hair loss or treats dandruff as a condition can be read as medicinal, and products presented that way may come under MHRA rules on medicines.',
          'The ASA applies the CAP Code to ads, social posts and creator content. Comparison images need to be genuine and representative, and any timescale needs evidence. We write around these limits and flag risky lines, but final approval belongs to your Responsible Person or regulatory adviser.',
        ],
      },
      {
        heading: 'Creators, TikTok Shop UK and London delivery',
        paragraphs: [
          'London hair creators range from loctitians and braiders to students filming their first big chop. Wash-day content is long and patient, which suits TikTok, YouTube and Instagram Reels, and it works well as partnership ads once usage rights are agreed. TikTok Shop UK lets viewers buy during the video, which helps with styling products and tools.',
          'Delivery matters more for haircare than people expect. A buyer who runs out of leave-in conditioner the night before wash day will walk to the local shop. Brands that dispatch quickly across London, offer refill subscriptions or send a reminder before the bottle runs low keep that order online.',
        ],
      },
      {
        heading: 'Seasons, reorders and choosing a haircare marketing agency in London',
        paragraphs: [
          'Plan around Black Friday, Christmas gift sets and Boxing Day, then Valentine’s, Mother’s Day in March, Diwali, Eid and summer holidays, when swimming and humid weather abroad change routines. Measure repeat rate and time between orders by product, because haircare is bought again and again.',
          'When you compare a haircare marketing agency in London, ask how it would segment your audience by hair type, how it handles growth claims and who owns the content it produces. Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment; most daily campaign work is done by our Chennai team. Our fee is quoted in GBP after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Haircare marketing agency UK', href: '/uk/haircare-marketing-agency/' },
      { label: 'Haircare brands across India', href: '/industries/haircare-marketing-agency/' },
      { label: 'Skincare marketing agency in London', href: '/london/skincare-marketing-agency/' },
      { label: 'Ayurveda marketing agency in London for hair oils', href: '/london/ayurveda-marketing-agency/' },
      { label: 'Ecommerce Meta ads agency in London', href: '/london/ecommerce-meta-ads-agency/' },
      { label: 'Google Ads agency in London for Shopping campaigns', href: '/london/google-ads-agency/' },
      { label: 'Amazon agency in London for haircare listings', href: '/london/amazon-agency/' },
      { label: 'Shopify agency in London', href: '/london/shopify-agency/' },
    ],
    faqs: [
      { q: 'What does a haircare marketing agency in London do?', a: 'It plans and runs the marketing that sells haircare online from London: content by hair type, product pages, Meta, TikTok and Google ads, creator partnerships, TikTok Shop UK and Amazon UK, and refill reminders. In London that also means speaking to textured hair and South Asian hair-oil buyers with real understanding.' },
      { q: 'How do you market products for textured hair?', a: 'Start with education and honesty. Show products on real coils and curls through a whole wash day, say which curl patterns they suit, and work with creators who share the hair type. Avoid framing natural hair as a problem. Organise the store so buyers can filter by curl pattern and porosity.' },
      { q: 'Can we say our hair oil makes hair grow?', a: 'Be very careful. In the UK, claims about regrowth or stopping hair loss can be read as medicinal and may bring a product under MHRA rules. Cosmetic wording usually focuses on conditioning, shine, less breakage and scalp comfort. Your regulatory adviser should approve the final claims before ads run.' },
      { q: 'Should a hair oil brand target South Asian buyers in London?', a: 'Usually yes, alongside newcomers to oiling. Heritage buyers in Southall, Wembley, Ilford and East Ham know the ritual and want quality they trust; newcomers need simple steps. We run separate creative and pages for each group and plan Diwali and Eid gift sets well ahead.' },
      { q: 'Does TikTok Shop UK work for haircare?', a: 'It can, especially for styling products, tools and oils that show a visible result on video. Wash-day and routine content performs when it is genuine and detailed. Start with a few hero products, brief creators on claims, and keep prices in line with your own store.' },
      { q: 'How much does a haircare marketing agency in London cost?', a: 'It depends on the channels, the number of products and hair-type audiences, and how much creator and video work you need. We quote the management fee in GBP in a fixed written quote after a free audit. Ad spend is separate and paid directly to each platform from your account.' },
      { q: 'Can we meet your team in London?', a: 'Yes. Our London office is in E18, near Woodford and Walthamstow, and haircare founders can meet us there by appointment. Most daily work is done by our Chennai team, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────────────────────────── 3. Cosmetics (London)
  {
    slug: 'london/cosmetics-marketing-agency',
    kind: 'location',
    market: 'UK',
    title: 'Cosmetics Marketing Agency in London: Make-up Brands | Magnus Path',
    description: 'Cosmetics marketing agency in London for make-up brands: shade content for every skin tone, London MUAs and creators, launch drops, TikTok Shop UK and gifting seasons.',
    primaryKeyword: 'cosmetics marketing agency in London',
    navLabel: 'Cosmetics London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Make-up brands in London · Shades · Launches · Creators',
    h1: 'Cosmetics Marketing Agency in London for *Inclusive Shade Ranges*',
    intro: 'Magnus Path is a cosmetics marketing agency in London for make-up brands selling foundation, concealer, lip, eye and complexion products. We plan shade content for London’s full range of skin tones, work with London make-up artists and creators, launch drops on TikTok Shop UK and Instagram, and prepare early for Christmas, Diwali and Eid gifting. Meet us in E18 by appointment.',
    icon: 'social',
    facts: ['Shade content for every skin tone', 'Free audit, then a GBP quote', 'Meet us in E18 by appointment'],
    headings: {
      pains: 'Where London make-up brands *lose sales*',
      includes: 'What our cosmetics marketing in London covers',
      process: 'From audit to launch in *4 steps*',
      guide: 'Cosmetics marketing in London: shades, launches and creators',
    },
    pains: [
      { title: 'Shades that look wrong on screen', body: 'A foundation that matches in person can look grey, orange or ashy in a phone photo. Buyers with deep or olive skin are let down most often, send it back and say so in a review.' },
      { title: 'Launches that fade after one weekend', body: 'A new palette sells out on drop day, then slows to a trickle because there is no plan for the weeks after and the creators have moved on to the next brand.' },
      { title: 'Gifting peaks planned too late', body: 'Christmas, Diwali and Eid sets are decided in October, creative arrives in November and ads start when competition for attention is already fierce.' },
    ],
    includes: [
      { title: 'Shade finder and swatches', body: 'Swatches on light to deep skin in daylight and indoor light, undertone guidance and a simple shade quiz to cut wrong-shade returns.' },
      { title: 'Launch and drop planning', body: 'Teasers, waitlists, creator seeding, launch-day ads and a content plan for the four weeks after, so a drop keeps selling.' },
      { title: 'London make-up artists and creators', body: 'Briefs for MUAs, bridal artists and beauty creators, with honest wear tests, #ad labelling and usage rights agreed in writing.' },
      { title: 'Paid social and Shopping feeds', body: 'Meta and TikTok campaigns built on swatches and wear tests, and Google Shopping feeds with shade names, finishes and matching variant images.' },
      { title: 'TikTok Shop UK and live selling', body: 'Shoppable videos and live sessions for launches, with stock and prices kept in step with your own store.' },
      { title: 'Gift sets and the seasonal calendar', body: 'Christmas, Valentine’s, Mother’s Day, Diwali, Eid and wedding-season sets planned months ahead, with creative ready before the rush.' },
    ],
    process: [
      { title: 'Free make-up audit', body: 'We review your store, shade content, ads, reviews and returns reasons, then go through the findings on a call or at our E18 office.' },
      { title: 'Shade and launch plan', body: 'A written plan for swatches, creators, launches and seasons, with the management fee quoted in GBP.' },
      { title: 'Content shoot and launch', body: 'Swatch and wear-test content is produced first, then ads, creator posts and TikTok Shop go live around the launch date.' },
      { title: 'Monthly review', body: 'We report sales by shade and product, returns, repeat orders and creator results, and adjust the next drop accordingly.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Instagram', 'TikTok Ads', 'TikTok Shop UK', 'Google Shopping', 'Amazon UK', 'GA4'],
    local: {
      city: 'London',
      areas: ['Soho', 'Covent Garden', 'Shoreditch', 'Dalston', 'Stratford', 'Ilford', 'Wembley', 'Southall', 'Brixton', 'Croydon'],
      note: londonOfficeNote('Make-up founders'),
    },
    figures: [
      { type: 'venn', caption: 'Make-up sells online in London when accurate shades meet creator energy.', after: 0, left: { title: 'Shade accuracy', body: 'Swatches on real skin, undertones, true-colour photos' }, right: { title: 'Creator energy', body: 'MUAs, wear tests and GRWM videos on London skin' }, overlap: 'Fewer returns, more repeat buys' },
      { type: 'steps', caption: 'A launch plan that keeps a London make-up drop selling after the first weekend.', after: 3, steps: [
        { title: 'Teaser', body: 'Close-ups and shade hints two weeks out' },
        { title: 'Seeding', body: 'Products to London MUAs and creators' },
        { title: 'Drop day', body: 'Live session, ads and waitlist email' },
        { title: 'Week one', body: 'Reviews, wear tests and shade help' },
        { title: 'Weeks two to four', body: 'Looks, routines and restock news' },
      ] },
    ],
    guide: [
      {
        heading: 'What a cosmetics marketing agency in London has to get right',
        paragraphs: [
          'London is one of the most demanding places to sell make-up. Shoppers can walk through the beauty halls at Selfridges or Harrods, test at Space NK and then compare prices on their phone. Independent brands win attention with something sharper: a shade range that genuinely covers the city, a point of view, and content that feels made by people who wear the product.',
          'A cosmetics marketing agency in London therefore spends as much time on product pages and swatches as on ads. Every shade needs to be shown accurately, every launch needs a plan beyond the first weekend, and every creator brief needs to respect UK rules. The ads only work once those foundations are in place.',
        ],
      },
      {
        heading: 'Shade ranges for London skin tones',
        paragraphs: [
          'Shade is where most make-up sales are won or lost online. London buyers range from very fair to very deep, with olive, golden and neutral undertones across South Asian, Black, East Asian, Middle Eastern and mixed-heritage skin. A foundation range that stops at medium, or swatches that only show lighter tones, tells much of the city that the brand is not for them.',
          'Photograph swatches on real skin, in daylight and under indoor light, without filters. Name undertones clearly, give shade comparisons with well-known ranges where you can do so fairly, and offer a short shade quiz. Read returns reasons by shade; they often show exactly which photos are misleading.',
        ],
        bullets: [
          'Swatches on at least light, medium, tan and deep skin for each product',
          'Daylight and indoor photos with no filters or retouching on texture',
          'Undertone notes and shade comparisons buyers can check',
          'A shade quiz or chat option for buyers between shades',
        ],
      },
      {
        heading: 'Make-up artists, creators and GRWM content',
        paragraphs: [
          'London has a busy community of make-up artists, from fashion and editorial MUAs to bridal artists who specialise in South Asian and Black brides. They are trusted because they work on many faces. Briefing a few of them for honest wear tests often does more than one large influencer post.',
          'Get-ready-with-me videos, eight-hour wear tests and Tube-commute touch-ups show how a product behaves in real London life. Agree usage rights in writing so the strongest clips can run as partnership ads, and make sure every paid or gifted post is clearly labelled.',
        ],
      },
      {
        heading: 'Launches, drops and TikTok Shop UK',
        paragraphs: [
          'Make-up runs on newness. A drop needs teasers, a waitlist, creator seeding, a live session on launch day and content for the four weeks after. TikTok Shop UK makes that last part easier, because a strong video can keep selling long after launch day if stock and prices are in place.',
          'Pop-ups at Boxpark, in Covent Garden or at Spitalfields can launch a collection in person and give you swatch photos on real customers. Capture sign-ups at the event so the people who tried a shade can buy it online later.',
        ],
      },
      {
        heading: 'UK cosmetics rules for make-up brands',
        paragraphs: [
          'Make-up is covered by the UK Cosmetics Regulation, which broadly requires a UK Responsible Person, a safety assessment and notification before products go on sale in Great Britain. Claims such as long-wear, transfer-proof or non-comedogenic need evidence that matches the exact wording.',
          'The ASA has ruled against beauty ads that used filters to exaggerate a product’s effect, so wear tests and swatches should be shown as they are. Claims such as vegan or cruelty-free should be accurate and explained. This is general guidance; your Responsible Person or adviser should approve final claims.',
        ],
      },
      {
        heading: 'Gifting seasons and choosing a cosmetics marketing agency in London',
        paragraphs: [
          'Plan the year in advance: Black Friday, Christmas gift sets and Boxing Day, then Valentine’s, Mother’s Day in March, Eid, Diwali and the South Asian wedding season, when brides, families and guests all buy make-up. Fast London delivery helps for last-minute party and occasion buys, so state cut-off times clearly.',
          'When comparing a cosmetics marketing agency in London, ask how it handles shade content, launches and creator rights, not just ad budgets. Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment; daily campaign work is done by our Chennai team. Our fee is quoted in GBP after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Cosmetics marketing agency UK', href: '/uk/cosmetics-marketing-agency/' },
      { label: 'Cosmetics and make-up brands across India', href: '/industries/cosmetics-marketing-agency/' },
      { label: 'Skincare marketing agency in London', href: '/london/skincare-marketing-agency/' },
      { label: 'Perfume marketing agency in London', href: '/london/perfume-marketing-agency/' },
      { label: 'Ecommerce Meta ads agency in London for launches', href: '/london/ecommerce-meta-ads-agency/' },
      { label: 'Google Ads agency in London for Shopping feeds', href: '/london/google-ads-agency/' },
      { label: 'Shopify agency in London for beauty stores', href: '/london/shopify-agency/' },
      { label: 'E-commerce growth agency in London', href: '/london/ecommerce-agency/' },
    ],
    faqs: [
      { q: 'What does a cosmetics marketing agency in London do?', a: 'It plans and runs the marketing that sells make-up online from London: shade content and swatches, product pages, launch plans, creator and make-up artist partnerships, Meta, TikTok and Google ads, TikTok Shop UK and seasonal gift sets. The aim is fewer wrong-shade returns and more customers who come back for the next launch.' },
      { q: 'How can we reduce wrong-shade returns?', a: 'Show every shade on real skin in daylight and indoor light, without filters. Name undertones, offer fair comparisons with familiar ranges, and add a short shade quiz or chat. Then read returns reasons by shade, because they usually point to the exact photos or descriptions that are misleading buyers.' },
      { q: 'Should we work with London make-up artists or big influencers?', a: 'Often both, but make-up artists are underused. They work on many faces and skin tones, so honest wear tests from a few London MUAs can carry more weight than one large post. We brief them on claims, labelling and usage rights, and run their best clips as partnership ads.' },
      { q: 'Can we use filters in make-up ads?', a: 'Generally not on the area the product is meant to change. The ASA has ruled against beauty ads where filters exaggerated the effect of a product. Show wear tests and swatches as they really look. Lighting and framing are fine as long as they do not misrepresent the result.' },
      { q: 'When should we plan Christmas, Diwali and Eid gift sets?', a: 'Months ahead. Decide sets and packaging in late summer, produce creative by early autumn, and start building audiences before the peak. Diwali and Eid dates move each year, so check them early. Late planning usually means paying more for attention when every beauty brand is advertising.' },
      { q: 'How much does a cosmetics marketing agency in London cost?', a: 'It depends on the number of products and shades, the channels, the number of launches and how much creator and video content you need. We quote the management fee in GBP in a fixed written quote after a free audit. Ad spend is paid by you directly to each platform.' },
      { q: 'Can we meet your team in London?', a: 'Yes. Our London office is in E18, near Woodford and Walthamstow, and make-up founders can meet us there by appointment, including to bring shades for a review. Most daily work is done by our Chennai team, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────────────────────────── 4. Ayurveda (London)
  {
    slug: 'london/ayurveda-marketing-agency',
    kind: 'location',
    market: 'UK',
    title: 'Ayurveda Marketing Agency in London: Herbal Brands | Magnus Path',
    description: 'Ayurveda marketing agency in London for herbal and wellness brands: South Asian diaspora and wellness buyers, careful UK claims, clear sourcing and Amazon UK growth.',
    primaryKeyword: 'ayurveda marketing agency in London',
    navLabel: 'Ayurveda London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Ayurvedic and herbal brands in London · Diaspora · Wellness',
    h1: 'Ayurveda Marketing Agency in London for *Diaspora and Wellness Buyers*',
    intro: 'Magnus Path is an ayurveda marketing agency in London for brands selling Ayurvedic oils, herbal skincare and haircare, teas and wellness products. We speak to two audiences at once, London’s South Asian families and wellness buyers new to Ayurveda, keep claims within UK cosmetics, food and medicines rules, and grow sales on your store, Amazon UK and TikTok Shop UK. Meet us in E18 by appointment.',
    icon: 'social',
    facts: ['Diaspora and wellness audiences', 'Free audit, then a GBP quote', 'Meet us in E18 by appointment'],
    headings: {
      pains: 'What holds London Ayurveda brands *back*',
      includes: 'What our Ayurveda marketing in London covers',
      process: 'Working with a London Ayurveda brand in *4 steps*',
      guide: 'Ayurveda marketing in London: two audiences and the UK rules',
    },
    pains: [
      { title: 'Two audiences, one muddled message', body: 'A grandmother in Southall knows exactly what triphala is. A yoga teacher in Stoke Newington may not. Copy that tries to speak to both at once confuses one and bores the other.' },
      { title: 'Traditional wording UK rules do not allow', body: 'Classical texts describe herbs as remedies for specific conditions. Repeat that in a UK ad or product page and you risk ASA complaints, MHRA attention and rejected ads.' },
      { title: 'Questions about quality and sourcing', body: 'UK health authorities have warned in the past about some imported herbal preparations. Without clear sourcing, testing and labelling information, careful London shoppers do not reach checkout.' },
    ],
    includes: [
      { title: 'Two-audience content plan', body: 'Separate pages, ads and emails for heritage buyers who know the names and wellness buyers who need the basics, built on one honest product story.' },
      { title: 'Product category check', body: 'Each product mapped to how it is likely sold in the UK, as a cosmetic, a food or supplement, or a herbal medicine, so the language fits. Your adviser confirms the final view.' },
      { title: 'Claims rewrite', body: 'Classical and traditional wording turned into compliant descriptions of ritual, ingredients and use, without disease or treatment claims.' },
      { title: 'Sourcing and quality pages', body: 'Clear pages on where herbs come from, how products are made and tested, and what is in each pack, written for careful London shoppers.' },
      { title: 'Store, Amazon UK and TikTok Shop UK', body: 'Listings, ads and shoppable content for oils, teas and herbal skincare, priced consistently across every channel.' },
      { title: 'Festival and wellness calendar', body: 'Diwali, Navratri, Vaisakhi and Eid gift sets alongside January wellness resets and autumn routine content.' },
    ],
    process: [
      { title: 'Free audit and category check', body: 'We review your store, ads, listings and claims, flag wording to check with your adviser and go through it on a call or at our E18 office.' },
      { title: 'Audience plan and GBP quote', body: 'A written plan for heritage and wellness audiences, channels and seasons, with the management fee quoted in GBP.' },
      { title: 'Rewrite, then launch', body: 'Product pages, sourcing content and claims are rewritten first; ads, creators and marketplace work follow once your adviser signs off.' },
      { title: 'Monthly review', body: 'We report new customers, reorders and results by audience and channel, and move budget to what each group buys again.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Google Ads', 'TikTok Shop UK', 'Amazon UK', 'YouTube', 'WhatsApp Business', 'GA4'],
    local: {
      city: 'London',
      areas: ['Southall', 'Wembley', 'Harrow', 'Ilford', 'East Ham', 'Green Street', 'Tooting', 'Hounslow', 'Stoke Newington', 'Hackney'],
      note: londonOfficeNote('Ayurveda and herbal brand founders'),
    },
    figures: [
      { type: 'venn', caption: 'Ayurveda marketing in London has to serve heritage buyers and curious wellness buyers together.', after: 0, left: { title: 'Heritage buyers', body: 'Know triphala, amla and abhyanga; want quality they trust' }, right: { title: 'Wellness buyers', body: 'Curious about rituals; need simple steps and sourcing' }, overlap: 'Honest ritual, clear sourcing' },
      { type: 'steps', caption: 'Taking an Ayurvedic product from classical wording to UK-ready marketing.', after: 3, steps: [
        { title: 'Classify product', body: 'Cosmetic, food or herbal medicine' },
        { title: 'List every claim', body: 'Pack, site, listings and creator posts' },
        { title: 'Rewrite wording', body: 'Ritual and ingredients, not cures' },
        { title: 'Adviser sign-off', body: 'Final check before anything runs' },
        { title: 'Brief creators', body: 'Share the approved wording' },
      ] },
    ],
    guide: [
      {
        heading: 'What an ayurveda marketing agency in London does',
        paragraphs: [
          'Ayurvedic brands in London sell to one of the largest South Asian communities outside the subcontinent and, at the same time, to a wellness audience that discovered abhyanga, turmeric lattes and oil pulling through yoga studios and social media. An ayurveda marketing agency in London has to keep both groups in view without diluting the tradition or overselling it.',
          'The day-to-day work covers product pages, ads, creators, marketplaces and seasonal campaigns, but the hardest part is language. Ayurveda describes herbs in terms of balance and healing; UK rules on cosmetics, food and medicines limit what can be said in an ad. Getting that translation right is what keeps a brand selling.',
        ],
      },
      {
        heading: 'London’s South Asian diaspora: Southall, Wembley, Ilford and beyond',
        paragraphs: [
          'For many families in Southall, Wembley, Harrow, Ilford, East Ham and Tooting, Ayurvedic oils, powders and teas are part of everyday life, often bought from a local grocer or brought back from India. These buyers know the names and the rituals. What they want online is quality they can trust, familiar formulations and reliable delivery.',
          'Creative for them can use Hindi, Gujarati, Punjabi, Tamil, Bengali or Urdu words naturally, show multi-generational routines, and lean into Diwali, Navratri, Vaisakhi and Eid. Our team in Chennai and Bengaluru knows the classical product names and how families use them, which helps when writing for heritage buyers.',
        ],
      },
      {
        heading: 'Wellness buyers discovering Ayurveda',
        paragraphs: [
          'The second audience lives in Hackney, Stoke Newington, Islington and similar neighbourhoods, shops at wellness stores and follows yoga and slow-living creators. They are curious but cautious. They need short explanations of each herb, simple steps for a ritual such as self-massage with warm oil, and honest information about where ingredients come from.',
          'Avoid exoticising the tradition, and avoid treating it as a trend. Content that credits its roots, explains doshas simply without making health promises and shows real routines tends to earn trust with both audiences.',
        ],
        bullets: [
          'One-line explanations of each herb and its traditional use',
          'Step-by-step ritual guides with photos or short video',
          'Sourcing, testing and ingredient pages linked from every product',
          'No disease, cure or treatment wording in any channel',
        ],
      },
      {
        heading: 'How UK rules apply to Ayurvedic products',
        paragraphs: [
          'In general terms, the route depends on how a product is presented. Oils, balms and herbal skincare sold for appearance usually fall under the UK Cosmetics Regulation. Teas, powders and capsules sold as foods or food supplements come under food law, where health claims are limited to an authorised list. Products presented as treating or preventing illness are generally treated as medicines, overseen by the MHRA, and herbal medicines may need a traditional herbal registration.',
          'The ASA applies the CAP Code across all of them, including creator posts. Quality matters as well: buyers increasingly expect information on testing for contaminants such as heavy metals. We are not regulatory advisers, so we work with whoever advises you and write marketing around the claims they approve.',
        ],
      },
      {
        heading: 'Content, creators and channels for London Ayurveda brands',
        paragraphs: [
          'Your own store is where the full story lives: sourcing, rituals and bundles. Amazon UK reaches buyers searching for specific herbs or oils, and TikTok Shop UK suits oils and rituals that show well on video. Google Search catches people asking what an herb is used for, which is a chance to answer carefully and link to products.',
          'Creators should be chosen for each audience: South Asian family and beauty creators for heritage buyers, yoga teachers and wellness creators for newcomers. Brief both on approved wording, and label every paid or gifted post.',
        ],
      },
      {
        heading: 'Festivals, seasons and choosing an ayurveda marketing agency in London',
        paragraphs: [
          'Plan gift sets for Diwali, Eid and Christmas, routine content for January resets and colder months, and Mother’s Day in March for self-care gifting. Fast London delivery helps for festival orders, so state cut-off dates clearly.',
          'When choosing an ayurveda marketing agency in London, ask how it handles both audiences and how it works with your regulatory adviser on claims. Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment; most daily campaign work is done by our Chennai team. Our fee is quoted in GBP after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Ayurveda marketing agency UK', href: '/uk/ayurveda-marketing-agency/' },
      { label: 'Ayurveda and herbal brands across India', href: '/industries/ayurveda-marketing-agency/' },
      { label: 'Haircare marketing agency in London', href: '/london/haircare-marketing-agency/' },
      { label: 'Skincare marketing agency in London', href: '/london/skincare-marketing-agency/' },
      { label: 'Amazon agency in London for herbal product listings', href: '/london/amazon-agency/' },
      { label: 'Ecommerce SEO agency in London for herb and ritual searches', href: '/london/ecommerce-seo-agency/' },
      { label: 'Ecommerce Meta ads agency in London', href: '/london/ecommerce-meta-ads-agency/' },
      { label: 'E-commerce growth agency in London', href: '/london/ecommerce-agency/' },
    ],
    faqs: [
      { q: 'What does an ayurveda marketing agency in London do?', a: 'It plans and runs marketing for Ayurvedic and herbal brands selling from London: product and sourcing pages, ads, creators, Amazon UK and TikTok Shop UK, and seasonal campaigns. Above all, it translates traditional language into wording that fits UK rules, and speaks separately to South Asian heritage buyers and wellness newcomers.' },
      { q: 'Can we describe what an herb treats, as the classical texts do?', a: 'Generally not in UK marketing. Claims that a product treats or prevents a condition can make it a medicine in the eyes of the MHRA, and the ASA applies strict rules to health claims. Describe the ritual, ingredients and traditional use carefully instead, and have your regulatory adviser approve final wording.' },
      { q: 'Is our product a cosmetic, a food supplement or a herbal medicine?', a: 'It depends on what it is and how it is presented. Oils and skincare for appearance are usually cosmetics; teas and capsules may be foods or supplements; anything presented as treating illness may be a medicine. We map each product as a starting point, but your regulatory adviser should confirm the category.' },
      { q: 'How do you market Ayurveda to London’s South Asian community?', a: 'With respect for what people already know. Heritage buyers in Southall, Wembley, Ilford and Tooting want quality, familiar formulations and reliable delivery. We use familiar product names and languages where they fit, show family routines and plan around Diwali, Navratri, Vaisakhi and Eid.' },
      { q: 'How do you reach wellness buyers new to Ayurveda?', a: 'With simple, honest education: what each herb is, how a ritual works and where ingredients come from. We work with yoga and wellness creators, avoid exoticising the tradition, and keep every claim within UK rules. Sourcing and testing pages linked from each product help careful buyers decide.' },
      { q: 'How much does an ayurveda marketing agency in London cost?', a: 'It depends on the number of products, the channels, how much claims and content work is needed, and whether marketplaces are included. We quote the management fee in GBP in a fixed written quote after a free audit. Ad spend is paid directly to each platform from your account.' },
      { q: 'Can we meet your team in London?', a: 'Yes. Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment. Most daily work is done by our Chennai team, with support from Bengaluru, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────────────────────────── 5. Perfume (London)
  {
    slug: 'london/perfume-marketing-agency',
    kind: 'location',
    market: 'UK',
    title: 'Perfume Marketing Agency in London: Niche Fragrance | Magnus Path',
    description: 'Perfume marketing agency in London for niche and indie fragrance brands: scent copy people can picture, discovery sets that lead to bottles, creators and gifting.',
    primaryKeyword: 'perfume marketing agency in London',
    navLabel: 'Perfume London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Fragrance brands in London · Niche · Attar and oud · Gifting',
    h1: 'Perfume Marketing Agency in London for *Niche Fragrance Brands*',
    intro: 'Magnus Path is a perfume marketing agency in London for niche perfumers, indie fragrance houses, attar and oud brands and home fragrance makers. We turn notes into language people can picture, build discovery sets that lead to full bottles, work with London fragrance creators and TikTok Shop UK, and plan for Christmas, Valentine’s, Eid and Diwali. Meet us in E18 by appointment.',
    icon: 'social',
    facts: ['Discovery sets that lead to bottles', 'Free audit, then a GBP quote', 'Meet us in E18 by appointment'],
    headings: {
      pains: 'Why fragrance is *hard to sell* online in London',
      includes: 'What our perfume marketing in London covers',
      process: 'Growing a London fragrance brand in *4 steps*',
      guide: 'Perfume marketing in London: selling a scent through a screen',
    },
    pains: [
      { title: 'A scent nobody can smell through a screen', body: 'Lists of top, heart and base notes mean little to most buyers. Without a clear picture of how a perfume smells and wears, London shoppers wait until they can try it in a shop.' },
      { title: 'Samples that never become bottles', body: 'Discovery sets go out, people enjoy them and then forget which one they liked. Without follow-up, the sampling budget is spent and the full-size sale never comes.' },
      { title: 'Standing next to the department store counter', body: 'London’s great fragrance halls set a high bar for how niche perfume is presented. An online shop with thin pages and stock photos struggles to feel premium beside them.' },
    ],
    includes: [
      { title: 'Scent copy people can picture', body: 'Product copy that explains how a fragrance opens, settles and lasts, using moods, places and familiar comparisons as well as notes.' },
      { title: 'Discovery sets with follow-up', body: 'Sample and discovery set funnels with wear tips, a “which one did you love” email and the sample cost credited towards a full bottle.' },
      { title: 'London fragrance creators', body: 'Briefs for fragrance reviewers and lifestyle creators, with honest wear reviews, #ad labelling and usage rights agreed in writing.' },
      { title: 'Paid social and search', body: 'Meta and TikTok ads built on mood, occasion and texture, plus Google campaigns for searches about scent families and specific notes.' },
      { title: 'Attar and oud audiences', body: 'Content and timing for London’s Arab, South Asian and Muslim buyers who know attar and oud, planned around Ramadan, Eid and Diwali.' },
      { title: 'Gifting and personalisation', body: 'Christmas, Valentine’s and Mother’s Day gift sets, engraving and gift notes planned early, with last order dates written into ads.' },
    ],
    process: [
      { title: 'Free fragrance audit', body: 'We review your store, scent copy, sampling, ads and reviews, then go through the findings on a call or at our E18 office.' },
      { title: 'Plan and GBP quote', body: 'A written plan for scent copy, sampling, creators and seasons, with the management fee quoted in GBP.' },
      { title: 'Rewrite and relaunch sampling', body: 'Product pages and discovery set follow-up are rebuilt first, then ads and creator content are scaled around them.' },
      { title: 'Monthly review', body: 'We report sample-to-bottle conversion, repeat orders and results by scent and channel, and move budget accordingly.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Instagram', 'TikTok Ads', 'TikTok Shop UK', 'Google Ads', 'Pinterest', 'GA4'],
    local: {
      city: 'London',
      areas: ['Mayfair', 'Marylebone', 'Covent Garden', 'Soho', 'Notting Hill', 'Shoreditch', 'Edgware Road', 'Whitechapel', 'Wembley', 'Walthamstow'],
      note: londonOfficeNote('Perfumers and fragrance founders'),
    },
    figures: [
      { type: 'mindmap', caption: 'Four things that help a London fragrance brand sell a scent people cannot smell online.', after: 0, center: 'Selling scent online', branches: [
        { label: 'Words', items: ['Notes in plain English', 'Mood and occasion', 'How long it lasts'] },
        { label: 'Samples', items: ['Discovery sets', 'Credit to full size'] },
        { label: 'People', items: ['Fragrance creators', 'Real wear reviews'] },
        { label: 'Moments', items: ['Christmas and Valentine’s', 'Eid and Diwali'] },
      ] },
      { type: 'steps', caption: 'The route from a discovery set to a full bottle and a reorder.', after: 3, steps: [
        { title: 'Discovery set', body: 'Bought at a fair price, not given away' },
        { title: 'Wear week', body: 'Tips on how to test each scent' },
        { title: 'Favourite email', body: 'Ask which one they loved' },
        { title: 'Bottle credit', body: 'Sample cost off the full size' },
        { title: 'Reorder', body: 'A reminder before the bottle runs low' },
      ] },
    ],
    guide: [
      {
        heading: 'What a perfume marketing agency in London does for niche brands',
        paragraphs: [
          'London has a long fragrance history, from heritage perfumers around Jermyn Street and Mayfair to the niche houses and indie makers selling at markets in Spitalfields and Broadway Market today. That makes it an exciting place to launch a fragrance and a hard place to stand out.',
          'A perfume marketing agency in London has one central problem to solve: buyers cannot smell your product on a screen. Everything else follows from that. The words on the page, the sampling programme, the creators and the timing all exist to give people enough confidence to try a scent, and then to buy the bottle.',
        ],
      },
      {
        heading: 'London fragrance culture as context',
        paragraphs: [
          'London shoppers can test niche perfume in the fragrance halls at Liberty, Selfridges and Harrods, at specialist boutiques in Marylebone and Covent Garden, and at oud and attar shops along Edgware Road and in Whitechapel. Many of your buyers will have tried dozens of scents in person, so they notice vague or borrowed descriptions straight away.',
          'The city’s communities shape demand as well. Arab, South Asian and Muslim households often know attar and oud deeply and buy for Ramadan, Eid and Diwali. Younger buyers discover niche fragrance on TikTok and collect decants. A brand that understands which of these groups it serves can speak to them precisely.',
        ],
      },
      {
        heading: 'Describing a scent people cannot smell',
        paragraphs: [
          'Notes alone are not enough. Describe how a fragrance opens in the first few minutes, how it settles after an hour and what it feels like at the end of the day. Use moods, places and occasions: a cold walk across Hampstead Heath, a late summer evening, freshly ironed cotton. Compare it fairly with familiar scent families so buyers can place it.',
          'Be honest about strength and longevity, and only state wear times you have tested. Reviews that mention projection and lasting power are often more persuasive than your own copy, so ask for them.',
        ],
        bullets: [
          'Opening, heart and dry-down described in plain words',
          'Mood, season and occasion for every fragrance',
          'Honest notes on strength and how long it lasts',
          'Scent family filters so buyers can explore similar perfumes',
        ],
      },
      {
        heading: 'Discovery sets, samples and the full bottle',
        paragraphs: [
          'Discovery sets are the most reliable way to sell fragrance online, provided they lead somewhere. Charge a fair price for them, include wear tips, and email a few days later to ask which scent the buyer loved. Credit the sample cost against a full bottle, and track how many sets convert by scent and by channel.',
          'Fast London delivery helps, because a buyer who tries a sample on Monday and loves it may want the bottle for the weekend. If you offer same-day or next-day dispatch in London, say so clearly.',
        ],
      },
      {
        heading: 'UK rules and practicalities for fragrance brands',
        paragraphs: [
          'Perfumes are cosmetics under the UK Cosmetics Regulation, so they broadly need a UK Responsible Person, a safety assessment and notification before going on sale in Great Britain, with certain fragrance allergens listed on the label. Many perfumers also work to the IFRA industry standards.',
          'Advertising follows the CAP Code: wear-time claims need evidence, and “inspired by” or comparison marketing can raise trade mark and comparative advertising issues, so take advice before naming another brand. Alcohol-based perfume is usually treated as a dangerous good in transport, which affects couriers and shipping to Europe. This is general guidance, not legal advice.',
        ],
      },
      {
        heading: 'Gifting seasons and choosing a perfume marketing agency in London',
        paragraphs: [
          'Fragrance is one of the most gifted beauty categories. Plan Black Friday, Christmas and Boxing Day, Valentine’s, Mother’s Day in March and Father’s Day, plus Ramadan, Eid and Diwali for attar and oud buyers. Engraving and gift notes need earlier cut-off dates, so put them in your ads.',
          'When comparing a perfume marketing agency in London, ask how it would describe your scents and how it measures sample-to-bottle conversion. Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment, samples in hand; most daily campaign work is done by our Chennai team. Our fee is quoted in GBP after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Perfume marketing agency UK', href: '/uk/perfume-marketing-agency/' },
      { label: 'Perfume and fragrance brands across India', href: '/industries/perfume-marketing-agency/' },
      { label: 'Cosmetics marketing agency in London', href: '/london/cosmetics-marketing-agency/' },
      { label: 'Jewellery marketing agency in London', href: '/london/jewellery-marketing-agency/' },
      { label: 'Ecommerce Meta ads agency in London for gifting campaigns', href: '/london/ecommerce-meta-ads-agency/' },
      { label: 'Google Ads agency in London for scent searches', href: '/london/google-ads-agency/' },
      { label: 'Shopify agency in London for fragrance stores', href: '/london/shopify-agency/' },
      { label: 'E-commerce growth agency in London', href: '/london/ecommerce-agency/' },
    ],
    faqs: [
      { q: 'What does a perfume marketing agency in London do?', a: 'It plans and runs the marketing that sells fragrance online from London: scent descriptions, product pages, discovery set funnels, creator partnerships, Meta, TikTok and Google ads, TikTok Shop UK and gifting campaigns. The central job is giving buyers enough confidence to try a scent they cannot smell, then turning that trial into a full bottle.' },
      { q: 'How do you sell a perfume people cannot smell online?', a: 'Describe how it opens, settles and lasts in plain words, use moods and occasions, compare it fairly with familiar scent families and show real wear reviews. Then offer a discovery set at a fair price, follow up to ask which scent they loved, and credit the sample cost towards a full bottle.' },
      { q: 'Are discovery sets worth it for a small fragrance brand?', a: 'Usually yes, if they are followed up. A paid discovery set attracts people genuinely interested in your scents. The value comes from the emails after it arrives: wear tips, a favourite-scent question and a bottle credit. We track conversion by scent and channel so the sets pay for themselves.' },
      { q: 'Can we market a perfume as inspired by a famous fragrance?', a: 'Take advice first. Naming another brand’s perfume can raise trade mark and comparative advertising issues, and platforms may reject such ads. Describing your own scent family, notes and mood is usually safer and builds your own brand rather than someone else’s.' },
      { q: 'Do you work with attar and oud brands?', a: 'Yes. London has strong attar and oud buyers among its Arab, South Asian and Muslim communities, from Edgware Road to Whitechapel and Wembley. We plan content and gift sets around Ramadan, Eid and Diwali, and explain oils and concentrations clearly for newer buyers.' },
      { q: 'How much does a perfume marketing agency in London cost?', a: 'It depends on the number of scents, the channels, sampling volume and how much creator and content work you need. We quote the management fee in GBP in a fixed written quote after a free audit. Ad spend is separate and paid directly to each platform from your account.' },
      { q: 'Can we meet your team in London?', a: 'Yes. Our London office is in E18, near Woodford and Walthamstow, and perfumers can meet us there by appointment, samples in hand. Most daily work is done by our Chennai team, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────────────────────────── 6. Jewellery (London)
  {
    slug: 'london/jewellery-marketing-agency',
    kind: 'location',
    market: 'UK',
    title: 'Jewellery Marketing Agency in London: Online Brands | Magnus Path',
    description: 'Jewellery marketing agency in London for fine, demi-fine and silver brands: trust-first pages, hallmark clarity, try-on video, weddings, Diwali, Eid and Christmas.',
    primaryKeyword: 'jewellery marketing agency in London',
    navLabel: 'Jewellery London',
    breadcrumb: londonBreadcrumb,
    eyebrow: 'Jewellery brands in London · Fine · Demi-fine · Bridal',
    h1: 'Jewellery Marketing Agency in London for *Online Jewellery Brands*',
    intro: 'Magnus Path is a jewellery marketing agency in London for fine, demi-fine, silver and fashion jewellery brands selling online. We build trust for high-value purchases, explain metals and hallmarks clearly, plan video and try-on content, and time campaigns to Valentine’s, Christmas, engagements, Diwali, Eid and the South Asian wedding season. Meet us in E18 by appointment.',
    icon: 'social',
    facts: ['Trust-first product pages', 'Free audit, then a GBP quote', 'Meet us in E18 by appointment'],
    headings: {
      pains: 'Where London jewellery brands *lose buyers*',
      includes: 'What our jewellery marketing in London covers',
      process: 'Working with a London jewellery brand in *4 steps*',
      guide: 'Jewellery marketing in London: trust, video and the wedding calendar',
    },
    pains: [
      { title: 'High-value pieces on low-trust pages', body: 'A buyer about to spend serious money on a ring wants the metal, stones, hallmark, sizing, returns and maker. Pages that skip those details send people to look in person instead.' },
      { title: 'Photos that hide scale and sparkle', body: 'Flat product shots make it hard to judge size, weight and how a piece moves. Shoppers cannot tell whether an earring is dainty or bold until it arrives, and returns follow.' },
      { title: 'Wedding and festive demand missed', body: 'South Asian weddings, Diwali and Eid bring major jewellery purchases for many London families, yet campaigns are often built only around Christmas and Valentine’s.' },
    ],
    includes: [
      { title: 'Trust-building product pages', body: 'Metal, purity, hallmark, stone details, dimensions, sizing, care, insured delivery and returns stated clearly on every piece.' },
      { title: 'Video and try-on content', body: 'Short videos on hands, ears and necklines in daylight, showing scale and movement, plus virtual try-on where your platform supports it.' },
      { title: 'Search and Shopping campaigns', body: 'Google Search and Shopping for specific pieces, metals and occasions such as engagement rings, gold bangles or personalised necklaces.' },
      { title: 'Paid social for gifts and self-purchase', body: 'Meta, Pinterest and TikTok ads split between gift buyers and people buying for themselves, with different creative and timing for each.' },
      { title: 'Wedding and festive campaigns', body: 'Bridal sets, Diwali gold, Eid gifts and Christmas planned months ahead, with content for families who choose pieces together.' },
      { title: 'Showroom and appointment bookings', body: 'For brands with a studio or showroom, booking flows and local campaigns that turn online interest into appointments.' },
    ],
    process: [
      { title: 'Free jewellery audit', body: 'We review product pages, photography, feeds, ads and enquiries, then go through the findings on a call or at our E18 office, where you can bring pieces.' },
      { title: 'Plan and GBP quote', body: 'A written plan for pages, video, channels and the jewellery calendar, with the management fee quoted in GBP.' },
      { title: 'Pages and video first', body: 'Product detail, hallmark wording and try-on video are fixed before spend rises, then Search, Shopping and social campaigns launch.' },
      { title: 'Monthly review', body: 'We report sales, enquiries, appointments and returns by collection and channel, and move budget towards what sells.' },
    ],
    platforms: ['Shopify', 'Google Ads', 'Google Shopping', 'Meta Ads', 'Pinterest', 'TikTok Ads', 'Etsy', 'GA4'],
    local: {
      city: 'London',
      areas: ['Hatton Garden', 'Clerkenwell', 'Mayfair', 'Shoreditch', 'Southall', 'Wembley', 'Green Street', 'Ilford', 'Tooting', 'Walthamstow'],
      note: londonOfficeNote('Jewellery founders'),
    },
    figures: [
      { type: 'matrix', caption: 'What a jewellery page needs to stress depends on the price level and who the piece is for.', after: 1, cols: ['Gift purchase', 'Self-purchase'], rows: ['Fine jewellery', 'Demi-fine and fashion'], cells: [
        { title: 'Reassure the giver', body: 'Sizing help, gift wrap and easy exchange after the day' },
        { title: 'Explain the value', body: 'Metal, stones, hallmark and craft in full detail' },
        { title: 'Make it easy', body: 'Gift edits by occasion and fast London delivery' },
        { title: 'Show it styled', body: 'Stacks, layering and everyday wear on real people' },
      ] },
      { type: 'steps', caption: 'A London jewellery year: plan stock and creative for each moment well ahead.', after: 4, steps: [
        { title: 'Valentine’s', body: 'Gifts and proposals in February' },
        { title: 'Mother’s Day', body: 'March gifting, often personalised' },
        { title: 'Wedding season', body: 'Bridal and family sets' },
        { title: 'Diwali and Eid', body: 'Gold and festive gifting' },
        { title: 'Christmas', body: 'Peak gifting and engagements' },
      ] },
    ],
    guide: [
      {
        heading: 'What a jewellery marketing agency in London does',
        paragraphs: [
          'Buying jewellery online asks a lot of trust. The piece may be expensive, it may mark an engagement or an anniversary, and the buyer cannot hold it or see how it catches the light. A jewellery marketing agency in London earns its keep by replacing that missing moment at the counter with detail, video and reassurance.',
          'In practice that means product pages that answer every question, photography and video that show scale and movement, Search and Shopping campaigns for buyers who know what they want, social ads for gifting and self-purchase, and a calendar that reflects how London actually buys jewellery, from Valentine’s proposals to Diwali gold.',
        ],
      },
      {
        heading: 'Hatton Garden, studios and buying jewellery online',
        paragraphs: [
          'Hatton Garden has been London’s jewellery quarter for generations, and many Londoners still go there to compare engagement rings in person. Independent designers work from studios in Clerkenwell, Hackney and Walthamstow, while South Asian jewellers on Green Street, in Southall and in Wembley serve families buying gold for weddings and festivals.',
          'Online brands compete with all of them. The way to do it is to match their strengths: the detail a jeweller explains across the counter, the chance to see a piece worn, and the confidence that you can return or resize it. Where you have a studio or showroom, use online campaigns to book appointments rather than forcing every sale through checkout.',
        ],
      },
      {
        heading: 'Hallmarks and materials, explained clearly',
        paragraphs: [
          'UK buyers expect precious metal to be described accurately. In broad terms, pieces sold as gold, silver, platinum or palladium generally need a UK hallmark from an assay office, such as the London Assay Office at Goldsmiths’ Hall, unless they fall under the weight exemptions. Sellers are usually expected to show a notice explaining hallmarks, online as well as in shops.',
          'Demi-fine brands need particular care with words such as gold, vermeil, plated and filled, and lab-grown diamonds should be named as such. This is general information, not legal advice; an assay office or adviser can confirm what applies to your range.',
        ],
        bullets: [
          'Metal, purity and hallmark details on every precious-metal piece',
          'Plating type and base metal stated plainly for demi-fine items',
          'Stone type, size and origin, including lab-grown where relevant',
          'Ring sizing help, resizing options and care advice',
        ],
      },
      {
        heading: 'Video, try-on and photography that sell jewellery',
        paragraphs: [
          'Short videos in daylight do more for jewellery than any other content: a ring turning on a hand, earrings moving as someone laughs, a necklace on different necklines and skin tones. Show pieces on hands and ears of different sizes so buyers can judge scale, and include a coin or ruler shot for dainty pieces.',
          'Virtual try-on tools can help with earrings and rings where your platform supports them. London creators who style jewellery in everyday outfits, stacks and layers help self-purchase buyers picture a piece in their own life.',
        ],
      },
      {
        heading: 'South Asian weddings, Diwali and Eid in London',
        paragraphs: [
          'For many London families, the biggest jewellery purchases happen around weddings and festivals rather than Christmas. Bridal sets, gold bangles and gifts for relatives are often chosen together, sometimes over several visits. Content that shows complete looks, explains carat and craftsmanship, and invites families to book a viewing fits how these purchases are made.',
          'Diwali, Eid and the wedding season deserve their own campaigns, creative and stock plans. Dates move each year, so plan them early and keep imagery respectful of each community’s traditions.',
        ],
      },
      {
        heading: 'Seasons, trust and choosing a jewellery marketing agency in London',
        paragraphs: [
          'Map the year: Valentine’s, Mother’s Day in March, the wedding season, Diwali and Eid, Black Friday, Christmas and Boxing Day. Fast, insured London delivery matters for last-minute gifts, so state cut-off times clearly. Reviews, clear returns and resizing policies and visible maker stories build trust all year.',
          'When comparing a jewellery marketing agency in London, ask how it handles product detail, hallmark wording and video as well as ads. Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment, pieces in hand; most daily campaign work is done by our Chennai team. Our fee is quoted in GBP after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Jewellery marketing agency UK', href: '/uk/jewellery-marketing-agency/' },
      { label: 'Jewellery brands across India', href: '/industries/jewellery-marketing-agency/' },
      { label: 'Perfume marketing agency in London', href: '/london/perfume-marketing-agency/' },
      { label: 'Cosmetics marketing agency in London', href: '/london/cosmetics-marketing-agency/' },
      { label: 'Google Ads agency in London for jewellery Search and Shopping', href: '/london/google-ads-agency/' },
      { label: 'Ecommerce Meta ads agency in London for gifting campaigns', href: '/london/ecommerce-meta-ads-agency/' },
      { label: 'Shopify agency in London for jewellery stores', href: '/london/shopify-agency/' },
      { label: 'Ecommerce SEO agency in London', href: '/london/ecommerce-seo-agency/' },
    ],
    faqs: [
      { q: 'What does a jewellery marketing agency in London do?', a: 'It plans and runs the marketing that sells jewellery online from London: trust-first product pages, photography and try-on video, Google Search and Shopping, Meta, Pinterest and TikTok ads, appointment bookings for showrooms, and campaigns for Valentine’s, Christmas, weddings, Diwali and Eid. The aim is confident buyers and fewer returns.' },
      { q: 'Do we need to explain hallmarks on our website?', a: 'Generally yes. Pieces sold as gold, silver, platinum or palladium usually need a UK hallmark unless exempt by weight, and sellers are normally expected to display a notice explaining hallmarks, including online. An assay office such as the London Assay Office can confirm what applies to your range.' },
      { q: 'How should demi-fine brands describe their metals?', a: 'Plainly and accurately. Say what the base metal is, what the plating or vermeil layer is, and how to care for it. Avoid calling plated pieces simply gold or silver. Clear wording builds trust, reduces complaints and keeps you on the right side of hallmarking and advertising rules.' },
      { q: 'How do you market jewellery to South Asian families in London?', a: 'With campaigns built around weddings, Diwali and Eid, content that shows complete bridal and festive looks, clear carat and craftsmanship details, and an easy way to book a viewing. Families in Southall, Wembley, Ilford and around Green Street often choose together, so we plan for that.' },
      { q: 'Does video really matter for jewellery?', a: 'Yes. Short daylight videos show scale, sparkle and movement in a way photos cannot, and they reduce surprises on arrival. Show pieces on different hands, ears and skin tones, include a scale reference for small items, and use try-on tools where your platform supports them.' },
      { q: 'How much does a jewellery marketing agency in London cost?', a: 'It depends on the size of the collection, the channels, how much photography and video work is needed, and whether appointment bookings are part of the plan. We quote the management fee in GBP in a fixed written quote after a free audit. Ad spend is paid directly to each platform.' },
      { q: 'Can we meet your team in London?', a: 'Yes. Our London office is in E18, near Woodford and Walthamstow, and you can meet us there by appointment, pieces in hand. Most daily work is done by our Chennai team, so requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },
];
