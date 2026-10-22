import type { ServicePageData } from '../../data/types';

const ukBreadcrumb = [{ label: 'United Kingdom', href: '/uk/ecommerce-marketing-agency/' }];

export const ukIndustryBeautyPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. Skincare (UK)
  {
    slug: 'uk/skincare-marketing-agency',
    kind: 'industry',
    market: 'UK',
    twin: 'industries/skincare-marketing-agency',
    title: 'Skincare Marketing Agency UK for Beauty Brands | Magnus Path',
    description: 'Skincare marketing agency for UK brands: ingredient-led product pages, ASA-aware ad copy, sampling that leads to reorders, and Amazon UK and TikTok Shop growth.',
    primaryKeyword: 'skincare marketing agency',
    navLabel: 'Skincare UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Skincare brands in the UK',
    h1: 'A Skincare Marketing Agency for UK Brands Built on *Ingredients and Reorders*',
    intro: 'Magnus Path is a skincare marketing agency for UK brands selling serums, SPF, cleansers and moisturisers online. We write ingredient-led pages for shoppers who read labels, keep ad copy inside ASA and platform rules, build sampling that turns into full-size orders, and grow sales on your own store, Amazon UK and TikTok Shop. UK clients can meet us at our London office in E18.',
    icon: 'social',
    facts: ['ASA-aware skin claims', 'Store, Amazon UK and TikTok Shop', 'London office, Chennai delivery'],
    headings: {
      pains: 'Where UK skincare brands get stuck',
      includes: 'What our skincare marketing for UK brands covers',
      process: 'How we grow a UK skincare brand in *4 steps*',
      guide: 'Skincare marketing in the UK: ingredients, claims and repeat orders',
    },
    pains: [
      { title: 'Your serum looks like every other serum', body: 'UK shoppers can pick up niacinamide or retinol from a supermarket own label or a high-street chemist for very little. If your page does not show why your formula, strength or texture is different, the cheaper bottle wins.' },
      { title: 'Claims that fall foul of the ASA or Meta', body: 'Copy that promises to clear spots, erase wrinkles or calm eczema reads as a medicinal claim. Filtered or retouched results can mislead as well. Rejected ads and complaints both cost you reach and time.' },
      { title: 'Busy launch month, quiet second month', body: 'A launch or a TikTok moment brings a rush of new buyers who never return. Nobody reminds them when the SPF runs out or suggests the next step in their routine.' },
    ],
    includes: [
      { title: 'Ingredient and routine pages', body: 'Product pages that state each active, its strength, the skin types it suits, when to use it and what to avoid pairing it with, written for people who compare labels.' },
      { title: 'Claims review before launch', body: 'We list every claim, match it to the evidence you hold and rewrite anything that sounds medicinal or exaggerated before it reaches an ad, a listing or a creator brief.' },
      { title: 'Meta, TikTok and Google ads', body: 'Campaigns built around hero products and routines, with creative about texture, ingredients and daily use, and Google Shopping feeds kept in step with your store.' },
      { title: 'Minis and discovery kits', body: 'Paid trial sizes followed by usage tips, a check-in before the last use and a credit towards the full size, measured on how many become full-size orders.' },
      { title: 'Amazon UK and TikTok Shop', body: 'Listings, A+ content, sponsored ads and shoppable videos for hero products, with prices aligned to your own store so marketplaces do not undercut it.' },
      { title: 'Replenishment and bundles', body: 'Morning and evening routine sets, refill reminders timed to how long each product lasts, and subscriptions for products people use every day.' },
    ],
    process: [
      { title: 'Free audit and claims list', body: 'We review your store, ads and listings, then list each product claim with the evidence behind it. We can walk you through it on a video call or at our London office.' },
      { title: 'Written plan and GBP quote', body: 'A plan covering pages, channels, sampling and targets, with our fee quoted in GBP. Ad spend is paid by you directly to each platform.' },
      { title: 'Fix pages, then launch', body: 'Hero product pages and routine guides are rewritten first, then ads, sampling and marketplace work go live around them.' },
      { title: 'Review on reorders', body: 'Each month we report acquisition cost, trial-to-full-size rate and repeat orders by product, and move budget to what customers buy again.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads', 'TikTok Shop', 'Google Ads', 'Amazon UK', 'GA4'],
    figures: [
      { type: 'mindmap', caption: 'Four areas a UK skincare brand needs working together before ad spend can scale.', after: 0, center: 'UK skincare growth', branches: [
        { label: 'Product pages', items: ['Actives and strength', 'Skin type and routine', 'Texture photos and video'] },
        { label: 'Claims', items: ['Cosmetic, not medicinal', 'Evidence for every number', 'No filtered results'] },
        { label: 'Channels', items: ['Own store first', 'Amazon UK and TikTok Shop', 'Meta and Google Shopping'] },
        { label: 'Retention', items: ['Minis to full size', 'Refill reminders', 'Routine bundles'] },
      ] },
      { type: 'matrix', caption: 'Where a skincare claim belongs depends on the evidence you hold for it.', after: 2, cols: ['Strong evidence', 'Little evidence'], rows: ['Ads and listings', 'Product page detail'], cells: [
        { title: 'Lead with it', body: 'Use the tested claim in ads, with the report on file' },
        { title: 'Leave it out', body: 'Keep unsupported claims away from paid traffic' },
        { title: 'Explain in full', body: 'Show how it was tested and what the result means' },
        { title: 'Describe use', body: 'Talk about texture and routine, not results you cannot show' },
      ] },
    ],
    guide: [
      {
        heading: 'How UK shoppers choose skincare now',
        paragraphs: [
          'Many UK skincare buyers now start with an ingredient rather than a brand: retinol, azelaic acid, niacinamide, ceramides, a high-factor sunscreen. They compare strengths on LOOKFANTASTIC, read reviews on Amazon UK, watch a creator test a texture on TikTok and check what the same active costs at Boots or Superdrug. By the time they land on your product page, they already know a good deal.',
          'That raises the bar for independent brands. A supermarket own-label serum can carry the same headline active as yours at a much lower price, so the case for your product has to be made in detail: the concentration, the supporting ingredients, the base, packaging that protects an unstable active, and the testing behind it. A skincare marketing agency earns its fee by finding that case and putting it everywhere a shopper looks.',
        ],
      },
      {
        heading: 'What a skincare marketing agency should cover for a UK brand',
        paragraphs: [
          'Running Meta ads is the visible part of the job. The less visible part is making sure every click lands on a page that answers a careful buyer’s questions, and that the words in the ad match what you can prove. For a UK brand the work usually covers four things: ingredient and routine content on your own store, paid social and search that stays inside the rules, a trial and replenishment plan, and a presence on Amazon UK and, increasingly, TikTok Shop.',
          'These parts depend on each other. Ads sent to thin product pages waste budget. Excellent pages with no reorder plan cap your growth at whatever you can afford to acquire each month. Marketplace listings that contradict your own site confuse buyers. We plan all four together, so a change in one is carried through to the others.',
        ],
      },
      {
        heading: 'UK rules on skincare claims, in plain terms',
        paragraphs: [
          'Skincare sold in Great Britain falls under the UK Cosmetics Regulation. In general terms, each product needs a UK Responsible Person, a safety assessment and a notification through the government’s cosmetic product notification service before it goes on sale, and claims are expected to be truthful and supported by evidence. Northern Ireland broadly follows EU cosmetics rules, which matters if you ship there.',
          'Advertising is covered by the CAP Code, which the ASA enforces. A cosmetic is meant to clean, protect or improve appearance, so wording that suggests treating acne, eczema or rosacea can be treated as a medicinal claim. The ASA has also ruled against social media ads that used filters to exaggerate what a product does, and it expects paid creator posts to be labelled clearly. This is general guidance, not legal advice; your Responsible Person or regulatory adviser should approve final wording.',
        ],
        bullets: [
          'Describe how skin looks and feels, not which condition a product cures',
          'Hold the test report behind any number, from SPF to a timed result',
          'Show unfiltered, unretouched results and real customer photos',
          'Make sure creators label paid and gifted posts as ads',
        ],
      },
      {
        heading: 'Education that builds trust without borrowed authority',
        paragraphs: [
          'The content that sells skincare well reads like a calm explanation from someone who understands the chemistry: how to introduce retinol slowly, why daily SPF matters when you use acids, which actives can share a routine. Writing in that voice does not need a doctor’s name, and you should never imply an endorsement you do not have. Phrases such as “dermatologist tested” or “clinically proven” need documented evidence that matches the exact claim.',
          'If a cosmetic scientist or skin professional genuinely advises you, introduce them properly and keep their input general rather than diagnostic. This content also works for search. Questions such as “can I use vitamin C with niacinamide” are asked every day on Google and in AI assistants, and a clear, careful answer on your site brings in shoppers who are already deciding what to buy.',
        ],
      },
      {
        heading: 'Trial sizes, minis and the road to a second order',
        paragraphs: [
          'Skincare is a cautious purchase. People worry about breakouts, stinging and textures they dislike, so a smaller first step helps. Free sample giveaways tend to attract freebie hunters, though. Paid minis, discovery kits and travel sizes at a fair price draw people who are genuinely curious about the formula.',
          'What happens after the mini arrives matters more than the mini. Send a short how-to-use message in the first few days, a check-in just before it runs out and a credit towards the full size. Track how many trial buyers move to a full-size order, by product and by channel, and put the sampling budget behind the kits that convert.',
        ],
      },
      {
        heading: 'Amazon UK, TikTok Shop and the high street',
        paragraphs: [
          'Plenty of UK shoppers compare skincare on Amazon UK before buying, and TikTok Shop has become a real sales channel for products that demonstrate well on video. Both reward complete listings with ingredient detail, clear images of texture and pack, and a steady flow of genuine reviews. Sponsored ads pay off once those basics are in place.',
          'Your own store is still where bundles, subscriptions and customer data live. Keep prices consistent across channels so buyers do not learn to wait for a marketplace deal, and watch for unauthorised resellers whose old stock can drag down your ratings. If you hope to be stocked by a retailer such as Boots or LOOKFANTASTIC one day, strong direct sales and reviews make that conversation easier, though no agency can promise a listing.',
        ],
      },
      {
        heading: 'Measuring skincare growth through the UK year',
        paragraphs: [
          'Judge skincare on more than first-order return on ad spend. Track repeat rate, time to second order and revenue per customer over several months, by product. A daily SPF or cleanser that people reorder can justify a higher cost per new customer than a one-off mask. Plan around the UK calendar as well: gift sets for Black Friday and Christmas, Boxing Day and January routine resets, Valentine’s, and Mother’s Day in March.',
          'Returns matter less in skincare than in fashion, but they exist. UK consumer law generally gives online buyers a cancellation period, with exceptions for sealed goods opened for hygiene reasons, so build refunds into your numbers. A good skincare marketing agency reports all of this plainly. We quote our fee in GBP after a free audit, and our LTV to CAC calculator helps you test what a new customer is worth.',
        ],
      },
    ],
    related: [
      { label: 'Haircare marketing for UK hair brands', href: '/uk/haircare-marketing-agency/' },
      { label: 'Makeup and cosmetics marketing in the UK', href: '/uk/cosmetics-marketing-agency/' },
      { label: 'Meta catalogue ads for UK online shops', href: '/uk/ecommerce-meta-ads-agency/' },
      { label: 'Amazon UK listings and sponsored ads', href: '/uk/amazon-agency/' },
      { label: 'Ecommerce SEO for UK ingredient searches', href: '/uk/ecommerce-seo-agency/' },
      { label: 'Shopify agency for UK beauty stores', href: '/uk/shopify-agency/' },
      { label: 'LTV to CAC calculator', href: '/tools/ltv-cac-calculator/' },
      { label: 'Product page checklist', href: '/resources/product-page-checklist/' },
    ],
    faqs: [
      { q: 'What does a skincare marketing agency do for UK brands?', a: 'It plans and runs the marketing that sells skincare online in the UK: ingredient and routine content, product pages, Meta, TikTok and Google ads written to stay within ASA and platform rules, sampling, reviews, and listings and ads on Amazon UK and TikTok Shop. The aim is customers who reorder, not one-off sales.' },
      { q: 'Can we advertise that our product helps with acne or eczema?', a: 'Be careful. In the UK a cosmetic is meant to clean, protect or improve appearance, and wording that suggests treating a skin condition can be read as a medicinal claim under the CAP Code. Most brands describe how skin looks and feels and name each ingredient’s role. Your regulatory adviser should approve final claims.' },
      { q: 'Do skincare products need notifying before they go on sale in the UK?', a: 'Generally yes. Under the UK Cosmetics Regulation, products placed on the GB market need a UK Responsible Person, a safety assessment and a notification through the government service before sale. We are not regulatory advisers, so we work alongside whoever handles this for you and write marketing around the claims they approve.' },
      { q: 'Are creator and influencer posts treated as ads?', a: 'Usually, yes. If a brand pays for a post, gifts products in return for coverage or controls the content, the ASA and CMA generally expect it to be clearly labelled, for example with “#ad” at the start. We brief creators on labelling and on the claims they can and cannot make about your products.' },
      { q: 'Should we sell on Amazon UK or TikTok Shop as well as our own store?', a: 'Most skincare brands benefit from both, in order. Get your own store and hero product pages right first, then add Amazon UK for shoppers who compare there and TikTok Shop if your products show well on video. Keep prices aligned so marketplaces do not undercut your own site.' },
      { q: 'How much does a skincare marketing agency cost in the UK?', a: 'It depends on the channels, the number of products, how much creative and content you need, and whether marketplace management is included. Ad spend is paid by you directly to Meta, Google, TikTok or Amazon. Our management fee is quoted separately in GBP, in a fixed written quote after a free audit.' },
      { q: 'Can we meet your team in London?', a: 'Yes. We have a London office in E18 where UK clients can meet the team by appointment. Most delivery is done by our Chennai team, which works ahead of UK time, so requests sent before UK lunchtime are usually handled the same day and work carries on after UK hours.' },
    ],
  },

  // ───────────────────────────────────────────── 2. Haircare (UK)
  {
    slug: 'uk/haircare-marketing-agency',
    kind: 'industry',
    market: 'UK',
    twin: 'industries/haircare-marketing-agency',
    title: 'Haircare Marketing Agency UK for Hair Brands | Magnus Path',
    description: 'Haircare marketing agency for UK hair brands: claim-safe thinning hair copy, curly and textured hair content, TikTok Shop and Amazon UK, and repeat orders.',
    primaryKeyword: 'haircare marketing agency',
    navLabel: 'Haircare UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Haircare brands in the UK',
    h1: 'A Haircare Marketing Agency for UK Brands Whose Results *Take Time*',
    intro: 'Magnus Path is a haircare marketing agency for UK brands selling shampoos, conditioners, scalp serums, hair oils and styling products online. Hair results take weeks, so we set honest expectations, keep thinning and hair loss messaging within UK rules, speak to curly, textured and men’s hair buyers in their own terms, and grow repeat orders across your store, Amazon UK and TikTok Shop.',
    icon: 'social',
    facts: ['Claim-safe hair loss copy', 'Curly, textured and men’s hair', 'Quoted in GBP after an audit'],
    headings: {
      pains: 'Why UK haircare brands lose buyers early',
      includes: 'What our haircare marketing for UK brands includes',
      process: 'How we grow a UK haircare brand in *4 steps*',
      guide: 'Haircare marketing in the UK: hair types, claims and the first weeks',
    },
    pains: [
      { title: 'Hair loss copy that crosses the line', body: 'Promising regrowth or a fix for thinning turns a shampoo into a medicinal claim. Ads get rejected, and a complaint to the ASA is a real risk for a small brand.' },
      { title: 'Buyers give up before results show', body: 'A scalp serum may need weeks of regular use. Customers who expected a change in days leave poor reviews and never buy the second bottle.' },
      { title: 'One message for every hair type', body: 'Fine, coily, coloured and grey hair need different products and different words. Generic ads speak to nobody, and the people who most need your formula scroll past.' },
    ],
    includes: [
      { title: 'Hair-type product pages', body: 'Pages and filters organised by hair type, porosity and concern, with usage steps, wash frequency and honest timelines for when change might be visible.' },
      { title: 'Claims review for hair and scalp', body: 'Every claim checked against your evidence and the line between cosmetic and medicinal, before it appears in an ad, a creator brief or a listing.' },
      { title: 'Community-led creative', body: 'Creator and customer videos made with people whose hair actually matches the product, from tight coils to fine straight hair and men’s short cuts.' },
      { title: 'TikTok Shop and Amazon UK', body: 'Listings, shoppable videos and sponsored ads for hero products, with consistent prices and clear size and hair-type information.' },
      { title: 'Routine and refill journeys', body: 'Wash-day routines, bundles and reminders timed to how long a bottle usually lasts, so customers stay with you through the weeks before results.' },
      { title: 'Search content for hair questions', body: 'Guides on wash routines, scalp care and protective styles that answer real questions on Google and in AI assistants, within claims rules.' },
    ],
    process: [
      { title: 'Free audit by product', body: 'We look at your store, ads, listings and reviews product by product, and note which claims need evidence or a rewrite.' },
      { title: 'Plan and GBP quote', body: 'A written plan for pages, creative, channels and retention, with our fee in GBP. Ad spend goes straight from your account to each platform.' },
      { title: 'Build for the first weeks', body: 'Product pages, routine content and post-purchase messages are set up to carry buyers through the early weeks of use.' },
      { title: 'Grow on second orders', body: 'Monthly reports on cost per new customer, second-order rate and reviews by product, with budget moved to what people buy again.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Shop', 'TikTok Ads', 'Google Ads', 'Amazon UK', 'YouTube'],
    figures: [
      { type: 'venn', caption: 'A haircare page sells when product facts meet the buyer’s own hair and expectations.', after: 0,
        left: { title: 'What your formula does', body: 'Ingredients, evidence and the hair types it is made for' },
        right: { title: 'What the buyer needs', body: 'Their hair type, their concern and a realistic timeline' },
        overlap: 'A page they trust and act on' },
      { type: 'steps', caption: 'Messages that carry a haircare buyer from the first wash to the second bottle.', after: 4, steps: [
        { title: 'Order arrives', body: 'How-to-use video and wash routine' },
        { title: 'Week two', body: 'Check-in and answers to common worries' },
        { title: 'Near the last use', body: 'Review request and refill reminder' },
        { title: 'Second bottle', body: 'Routine bundle or subscription offer' },
      ] },
    ],
    guide: [
      {
        heading: 'Why haircare is a patience business',
        paragraphs: [
          'Most beauty purchases show their effect quickly: a lipstick on the lips, a moisturiser on the skin. Haircare is slower. A scalp serum, a strengthening treatment or a new wash routine may need several weeks of regular use before anyone notices a difference, and hair grows at its own pace whatever the label says. That gap between purchase and result is where most haircare brands lose customers.',
          'It shapes the marketing too. Ads that promise instant change attract buyers who are bound to be disappointed. Pages that explain how long things take, what to look for along the way and how to use the product properly keep people going long enough to see results, and those people become your reviewers and repeat customers.',
        ],
      },
      {
        heading: 'What a haircare marketing agency should plan for UK brands',
        paragraphs: [
          'A haircare marketing agency working in the UK needs to plan for the whole period between first wash and visible result, not just the first click. That means product pages organised around hair type and concern, creative that sets fair expectations, post-purchase messages that keep people using the product, and channels that make reordering easy: your own store, Amazon UK, and TikTok Shop for products that look good on camera.',
          'It also means knowing who you are talking to. UK haircare buyers include large communities with curly, coily and Afro-textured hair who were long underserved by mainstream ranges, men looking for simple routines, people with coloured or grey hair, and South Asian households where pre-wash oiling is a family habit. Each group searches, shops and trusts differently.',
        ],
      },
      {
        heading: 'Thinning hair and the medicinal line',
        paragraphs: [
          'Thinning hair is one of the biggest reasons people search for haircare, and it is where the rules are strictest. In the UK, a product presented as treating or preventing hair loss is generally regarded as a medicine, and medicines need authorisation from the MHRA. A cosmetic shampoo or serum can talk about hair looking fuller, feeling stronger or breaking less during styling, but regrowth claims are risky without a licence.',
          'The CAP Code, enforced by the ASA, expects claims to be backed by evidence, and Meta and TikTok add their own limits on before-and-after images and on copy that singles out personal characteristics. If you also sell hair gummies or supplements, those fall under food law, where only authorised health claims may be used. This is general guidance, not legal advice, so check final wording with your adviser.',
        ],
        bullets: [
          'Say how hair looks and feels, not that it regrows',
          'Keep before-and-after photos real, unedited and taken in the same light',
          'Use only authorised wording for any supplement health claim',
          'Avoid copy that assumes the viewer is losing their hair',
        ],
      },
      {
        heading: 'Speaking to curly, textured and men’s hair buyers',
        paragraphs: [
          'Curly and Afro-textured hair buyers have good reason to be sceptical. They want to see the product on hair like theirs, hear how it behaves on wash day and know whether it suits low or high porosity. Creative made with people from those communities, and product pages that use the words they use, earn far more trust than a generic model shot.',
          'Men’s haircare is a different conversation: short routines, fewer steps, styling products and scalp care, often bought on Amazon UK alongside other grooming items. Hair oils from South Asian traditions appeal to diaspora households and to a wider audience discovering oiling through TikTok. Each segment deserves its own ads, landing pages and reviews rather than one message for everyone.',
        ],
      },
      {
        heading: 'Keeping customers through the first weeks',
        paragraphs: [
          'The post-purchase journey matters more in haircare than in almost any other beauty category. A short video on applying the product, a reminder of the routine, a check-in after a couple of weeks and a review request near the end of the bottle all help buyers stick with it. Answer common worries early, such as some shedding when a new routine starts, without making claims you cannot support.',
          'Bundles that match real routines, such as a shampoo, conditioner and leave-in for one hair type, raise order value and make the next order obvious. Subscriptions suit products used on every wash. Track how many first-time buyers place a second order, by product, and treat that as the clearest sign the marketing is working.',
        ],
      },
      {
        heading: 'TikTok Shop, Amazon UK and your own store',
        paragraphs: [
          'Haircare demonstrates well on video, which is why TikTok Shop has become an important channel for UK hair brands. Amazon UK suits replenishment, especially for men’s products and everyday shampoos. Both need complete listings with hair type, size, ingredients and clear usage steps. On the high street, ranges in Boots and Superdrug shape what shoppers expect to pay, so price hero products with that in mind.',
          'Your own store should hold the full range, bundles, subscriptions and the routine content marketplaces cannot carry. Keep prices consistent across channels so buyers do not learn to wait for a marketplace promotion.',
        ],
      },
      {
        heading: 'Measuring haircare growth across the year',
        paragraphs: [
          'A haircare marketing agency should report on more than first-order return on ad spend. Watch second-order rate, time between orders, reviews and refunds by product. UK consumer law generally gives online buyers a cancellation period, with exceptions for sealed items opened for hygiene reasons, so keep returns in your numbers. Demand shifts through the year as well: frizz control in humid summers, gift sets for Black Friday and Christmas, and gifting again for Mother’s Day in March and Father’s Day in June.',
          'We start with a free audit, then quote our fee in GBP. UK clients can meet us at our London office in E18, while much of the daily work is done by our Chennai team.',
        ],
      },
    ],
    related: [
      { label: 'Skincare marketing for UK brands', href: '/uk/skincare-marketing-agency/' },
      { label: 'Makeup and cosmetics marketing in the UK', href: '/uk/cosmetics-marketing-agency/' },
      { label: 'Ayurveda and herbal hair oil brands in the UK', href: '/uk/ayurveda-marketing-agency/' },
      { label: 'Meta catalogue ads for UK online shops', href: '/uk/ecommerce-meta-ads-agency/' },
      { label: 'Amazon UK listings and sponsored ads', href: '/uk/amazon-agency/' },
      { label: 'Google Shopping and search ads for UK stores', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'AI search optimisation for haircare questions', href: '/uk/ai-search-optimisation-agency/' },
      { label: 'ROAS calculator', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a haircare marketing agency do?', a: 'It plans and runs the marketing that sells hair products online: product pages by hair type, ads on Meta, TikTok and Google that stay within claims rules, creator content, post-purchase messages that carry buyers through the first weeks, and listings on Amazon UK and TikTok Shop. The aim is second and third orders, not one-off sales.' },
      { q: 'Can a shampoo claim to stop hair loss in the UK?', a: 'Generally not. A product presented as treating or preventing hair loss is usually regarded as a medicine in the UK, which needs MHRA authorisation. Cosmetic products can describe hair looking thicker, feeling stronger or breaking less. Your regulatory adviser should approve final wording, and we write ads around what they sign off.' },
      { q: 'How should we market to curly and Afro-textured hair buyers?', a: 'Show the product on hair like theirs, made with creators from those communities, and use the language they use: porosity, curl pattern, wash day, protective styles. Product pages should say clearly which hair types a product suits. Trust comes from honest demonstrations and reviews, not from a generic model shot.' },
      { q: 'Is TikTok Shop worth it for a haircare brand?', a: 'Often, yes, because hair products demonstrate well on video. It tends to pay off once your listings have clear hair-type information and you have creators whose hair matches the product. Treat it as one channel alongside your own store and Amazon UK, and keep prices consistent across all three.' },
      { q: 'How do we stop customers giving up before results show?', a: 'Set expectations on the product page, then support buyers after purchase: a how-to video, a routine reminder, a check-in after a couple of weeks and a refill reminder near the end of the bottle. Answer common worries early. Track the second-order rate by product to see where buyers drop off.' },
      { q: 'How much does haircare marketing cost?', a: 'It depends on the number of products, the channels, how much creator and video content you need, and whether marketplace management is included. Ad spend is paid by you directly to the platforms. Our management fee is quoted separately in GBP, in a fixed written quote after a free audit of your store and ads.' },
      { q: 'Do you meet UK hair brands in person?', a: 'Yes. UK clients can meet the team by appointment at our London office in E18. Day-to-day work is mostly delivered by our Chennai team, so tasks continue after UK hours and requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────────────────────────── 3. Cosmetics (UK)
  {
    slug: 'uk/cosmetics-marketing-agency',
    kind: 'industry',
    market: 'UK',
    twin: 'industries/cosmetics-marketing-agency',
    title: 'Cosmetics Marketing Agency UK for Makeup Brands | Magnus Path',
    description: 'Cosmetics marketing agency for UK makeup brands: shade finders, unfiltered creator content, launch and drop plans, TikTok Shop sales and Christmas gifting.',
    primaryKeyword: 'cosmetics marketing agency',
    navLabel: 'Cosmetics UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Makeup and cosmetics brands in the UK',
    h1: 'A Cosmetics Marketing Agency for UK Makeup Brands: *Shades, Creators and Launches*',
    intro: 'Magnus Path is a cosmetics marketing agency for UK makeup brands selling foundation, concealer, lip, eye and nail products online. We help shoppers find their shade without a tester, run creator and UGC programmes that respect ASA rules on filters and ad labels, plan launches and limited drops, and grow sales through your own store, TikTok Shop and the Christmas gifting peak.',
    icon: 'social',
    facts: ['Shade-finding pages', 'Unfiltered creator content', 'Launch and gifting plans'],
    headings: {
      pains: 'Why UK makeup brands lose sales online',
      includes: 'What our cosmetics marketing for UK brands covers',
      process: 'How we grow a UK makeup brand in *4 steps*',
      guide: 'Selling makeup online in the UK: shades, creators and seasons',
    },
    pains: [
      { title: 'Shoppers cannot swatch through a screen', body: 'Without a tester, buyers guess their foundation shade, get it wrong and send it back, or simply stay with a brand whose shade range they already know.' },
      { title: 'Filtered content that backfires', body: 'Beauty filters and heavy retouching make a product look better than it performs. The ASA has acted against filtered ads, and viewers notice it too.' },
      { title: 'Launches that fade after a weekend', body: 'A new palette sells well for a few days, then nothing. No waitlist, no follow-up content and no plan for the customers who arrived late.' },
    ],
    includes: [
      { title: 'Shade finders and swatches', body: 'Swatch photos and video across a wide range of skin tones, undertone guides and a simple shade matcher, so buyers choose the right shade first time.' },
      { title: 'Creator and UGC programmes', body: 'Briefs for creators across skin tones and ages, with clear rules on unfiltered footage, honest claims and labelling paid posts as ads.' },
      { title: 'Launch and drop planning', body: 'Teasers, waitlists, launch-day ads and follow-up tutorials for new shades and limited editions, with stock checked before spend goes up.' },
      { title: 'TikTok Shop and Amazon UK', body: 'Shoppable videos, live selling, affiliate creators and listings with swatches and shade names that match your own store exactly.' },
      { title: 'Gifting and seasonal sets', body: 'Black Friday, Christmas, Valentine’s and Mother’s Day sets planned early, with gift pages and ads ready before demand peaks.' },
      { title: 'Meta and Google campaigns', body: 'Catalogue ads by shade family, search ads for shade, finish and coverage queries, and creative refreshed before it wears out.' },
    ],
    process: [
      { title: 'Free audit of shades and ads', body: 'We review your product pages, swatches, creator content, ads and returns reasons, and show you where shoppers hesitate. We can meet at our London office or by video.' },
      { title: 'Plan and GBP quote', body: 'A written plan for shade content, creators, launches and channels, with our fee in GBP. Ad spend is paid by you directly to each platform.' },
      { title: 'Build shades and creators', body: 'Swatch libraries, shade guides and a first group of creators come first, so every ad sends people to pages that help them choose.' },
      { title: 'Launch, learn, repeat', body: 'Launches and seasonal pushes run on a shared calendar, and each month we report sales, returns and repeat orders by product and channel.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Shop', 'TikTok Ads', 'Instagram', 'YouTube', 'Google Ads', 'Amazon UK'],
    figures: [
      { type: 'mindmap', caption: 'What a foundation page should show before a shopper commits to a shade.', after: 0, center: 'A foundation page', branches: [
        { label: 'Shade', items: ['Undertone guide', 'Swatches on many tones', 'Simple shade matcher'] },
        { label: 'Finish', items: ['Matte, dewy or satin', 'Coverage level'] },
        { label: 'Proof', items: ['Unfiltered creator video', 'Reviews by skin tone'] },
        { label: 'Practical', items: ['Shade swap policy', 'Ingredients and SPF detail'] },
      ] },
      { type: 'steps', caption: 'A launch plan for a new shade range or a limited edition.', after: 3, steps: [
        { title: 'Tease', body: 'Sneak peeks and a waitlist sign-up' },
        { title: 'Seed', body: 'Products sent to creators early' },
        { title: 'Launch', body: 'Waitlist first, then ads and live selling' },
        { title: 'Follow up', body: 'Tutorials and reviews in the first weeks' },
      ] },
    ],
    guide: [
      {
        heading: 'Why makeup is bought differently online',
        paragraphs: [
          'Skincare buyers read ingredient lists. Makeup buyers want to see the product on a face. Colour, finish, coverage and wear time all matter, and none of them can be judged from a flat pack shot. That is why makeup sales in the UK lean so heavily on video, creators and reviews, and why so much research happens on TikTok and Instagram before a shopper ever visits a brand’s site.',
          'It also explains the returns problem. A foundation in the wrong shade is useless to the buyer, and a lipstick that looks different in daylight disappoints. Good cosmetics marketing reduces that gap between expectation and reality, which lowers returns, improves reviews and makes the second order far more likely.',
        ],
      },
      {
        heading: 'Shade matching without a tester',
        paragraphs: [
          'Base products are where shade matters most. A useful product page shows each shade on several real people, explains undertones in plain words, describes each shade as light, medium, tan or deep with its undertone, and offers a simple matcher that asks a few questions about skin and the shade a shopper wears now. Photograph swatches in daylight as well as studio light, and label them honestly.',
          'Make the shade range itself part of the marketing. UK shoppers with deep or very fair skin have often been let down by limited ranges, so a broad, well-photographed range is a reason to choose you. A clear shade swap policy helps too, as long as it is stated plainly and your margins can carry it.',
        ],
      },
      {
        heading: 'What a cosmetics marketing agency does with creators',
        paragraphs: [
          'Creators sell makeup because they show it in use. A cosmetics marketing agency should build a programme rather than a series of one-off posts: a mix of larger creators for reach and smaller ones whose followers trust their recommendations, chosen across skin tones, ages and styles. Briefs should explain the product, the claims that are allowed and the ones that are not.',
          'The ASA expects paid and gifted posts to be labelled clearly as ads, and it has ruled against beauty ads where filters exaggerated what a product does. Ask creators to film without beauty filters, keep any lighting realistic and avoid editing that changes skin texture. This is general guidance, not legal advice. Unfiltered content is also more convincing, so following the rules tends to help sales.',
        ],
        bullets: [
          'Brief creators across a wide range of skin tones and ages',
          'Ask for unfiltered footage and natural light where possible',
          'Label every paid or gifted post as an ad from the first line',
          'Reuse strong creator videos as ads, with their permission',
        ],
      },
      {
        heading: 'Launches, drops and limited editions',
        paragraphs: [
          'New shades and limited editions create urgency, but only if the run-up is planned. Build a waitlist before launch, seed products to creators early so content is ready on day one, and give the waitlist first access before ads widen the reach. Check stock levels with your warehouse before turning budgets up, because selling out within hours with no restock date wastes the attention you paid for.',
          'The weeks after a launch matter as much as the launch day. Tutorials, real reviews and looks from customers keep the product visible and give late arrivals a reason to buy. Decide in advance whether a limited edition will return, and say so honestly: false scarcity damages trust, and the ASA expects urgency claims such as “last chance” or “limited stock” to be true.',
        ],
      },
      {
        heading: 'UK rules for makeup products and ads',
        paragraphs: [
          'Makeup sold in Great Britain is covered by the UK Cosmetics Regulation. In general, each product needs a UK Responsible Person, a safety assessment and a notification through the government’s notification service before it goes on sale, with labels in English and ingredients listed correctly. Products with SPF or long-wear and waterproof claims need evidence that supports them.',
          'Advertising falls under the CAP Code, enforced by the ASA. Claims about wear time, coverage or transfer resistance should match testing you hold, and imagery should not overstate the effect. Rules change, so we check current guidance and platform policies before each campaign, and your Responsible Person or adviser should approve final claims.',
        ],
      },
      {
        heading: 'TikTok Shop, Amazon UK and the gifting seasons',
        paragraphs: [
          'TikTok Shop suits makeup well, because live selling and short tutorials show colour and finish in motion. Amazon UK works for repeat purchases of products people already know, such as a favourite mascara. Shoppers also compare against high-street ranges at Boots and Superdrug, and against premium brands on LOOKFANTASTIC, so be clear about where your products sit.',
          'The UK calendar shapes the year: Black Friday and Christmas gift sets, Boxing Day and January sales, Valentine’s, and Mother’s Day in March. Gift sets need to be designed, photographed and listed weeks ahead, with delivery cut-off dates stated on every page.',
        ],
      },
      {
        heading: 'Measuring makeup sales properly',
        paragraphs: [
          'Count returns before you judge any campaign. UK consumer law generally gives online buyers a cancellation period, and opened makeup may be excluded for hygiene reasons, but shade problems still lead to refunds, swaps and lost goodwill. Track returns and swaps by shade and by channel, alongside first-order return on ad spend.',
          'Repeat orders tell you which products have become staples. A good cosmetics marketing agency moves budget towards those staples and the creators whose audiences buy again. We quote our fee in GBP after a free audit, and UK clients can meet us at our London office in E18.',
        ],
      },
    ],
    related: [
      { label: 'Skincare marketing for UK brands', href: '/uk/skincare-marketing-agency/' },
      { label: 'Haircare marketing for UK hair brands', href: '/uk/haircare-marketing-agency/' },
      { label: 'Perfume and fragrance marketing in the UK', href: '/uk/perfume-marketing-agency/' },
      { label: 'Shopify agency for UK makeup stores', href: '/uk/shopify-agency/' },
      { label: 'Meta catalogue ads for UK online shops', href: '/uk/ecommerce-meta-ads-agency/' },
      { label: 'UK ecommerce marketing agency', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'Ecommerce sale calendar for UK gifting peaks', href: '/resources/sale-calendar/' },
      { label: 'Discount calculator for gift-set offers', href: '/tools/discount-calculator/' },
    ],
    faqs: [
      { q: 'What does a cosmetics marketing agency do?', a: 'It plans and runs the marketing that sells makeup online: shade guides and swatches, product pages, creator and UGC programmes, launches and limited drops, ads on Meta, TikTok and Google, and listings on TikTok Shop and Amazon UK. The aim is fewer wrong-shade returns and more customers who come back for their staples.' },
      { q: 'How do we help shoppers find their foundation shade online?', a: 'Show every shade on several real people in daylight, explain undertones in plain words, offer a short shade matcher and collect reviews that mention skin tone. A clear shade swap policy lowers the risk of a first order. All of this reduces returns as well as raising sales.' },
      { q: 'Can creators use beauty filters when promoting our makeup?', a: 'It is risky. The ASA has ruled against beauty ads where filters exaggerated what a product does, so ask creators to film without filters and avoid editing that changes skin texture. Paid and gifted posts should also be labelled clearly as ads. Unfiltered content is usually more convincing anyway.' },
      { q: 'Do makeup products need to be notified before sale in the UK?', a: 'Generally yes. Cosmetics placed on the GB market need a UK Responsible Person, a safety assessment and a notification through the government service before sale. We are not regulatory advisers, so we work with whoever handles compliance for you and write marketing around the claims they approve.' },
      { q: 'Is TikTok Shop a good channel for makeup brands?', a: 'For many brands, yes. Live selling and short tutorials show colour, finish and wear in a way photos cannot. It works well when listings, shade names and prices match your own store, and when creators are chosen to reflect a wide range of skin tones.' },
      { q: 'How much does cosmetics marketing cost?', a: 'It depends on the size of your range, the number of channels, how much creator and video content you need, and whether launches and marketplaces are included. Ad spend is paid by you directly to the platforms. Our fee is quoted separately in GBP, in a fixed written quote after a free audit.' },
      { q: 'When should we start planning Christmas gift sets?', a: 'Well before autumn. Sets need designing, producing, photographing and listing ahead of Black Friday, when UK gift shopping starts in earnest. Ads, gift pages and delivery cut-off messages should be ready before then, with stock checked so you do not sell out during the busiest weeks.' },
    ],
  },

  // ───────────────────────────────────────────── 4. Ayurveda (UK)
  {
    slug: 'uk/ayurveda-marketing-agency',
    kind: 'industry',
    market: 'UK',
    twin: 'industries/ayurveda-marketing-agency',
    title: 'Ayurveda Marketing Agency UK for Herbal Brands | Magnus Path',
    description: 'Ayurveda marketing agency for herbal brands selling in the UK: MHRA-aware claims, diaspora and wellness audiences, Amazon UK, SEO and Indian exporters.',
    primaryKeyword: 'ayurveda marketing agency',
    navLabel: 'Ayurveda UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Ayurvedic, herbal and wellness brands in the UK',
    h1: 'An Ayurveda Marketing Agency for Herbal Brands *Selling in the UK*',
    intro: 'Magnus Path is an Ayurveda marketing agency for herbal and wellness brands selling in the UK, whether you are a British brand or an Indian maker exporting here. We plan pages and ads around how each product is legally classed in the UK, explain herbs and rituals in plain English, reach South Asian diaspora households and wider wellness shoppers, and grow sales through your store, Amazon UK and search.',
    icon: 'marketplace',
    facts: ['Claims matched to UK product status', 'Diaspora and wellness buyers', 'London office, Chennai team'],
    headings: {
      pains: 'Why Ayurvedic brands struggle in the UK',
      includes: 'What our Ayurveda marketing for the UK covers',
      process: 'How we grow an Ayurvedic brand in the UK in *4 steps*',
      guide: 'Marketing Ayurveda in the UK: product status, claims and audiences',
    },
    pains: [
      { title: 'An Indian licence does not travel', body: 'A product sold as an Ayurvedic medicine in India may be a food supplement, a cosmetic or an unlicensed medicine in the UK. Marketing it the wrong way can stop sales altogether.' },
      { title: 'Traditional wording reads as a medical claim', body: 'Phrases about curing digestion, joints or immunity are normal in classical texts, but in a UK ad or listing they can break advertising and medicines rules.' },
      { title: 'Two audiences, one generic message', body: 'Diaspora buyers know chyawanprash and triphala; many wellness shoppers have never heard of them. Copy written for one group confuses the other.' },
    ],
    includes: [
      { title: 'Product status review', body: 'With your adviser, we map each product as a cosmetic, food supplement, registered herbal medicine or other category, and set the claims and channels that fit each one.' },
      { title: 'Plain-English herb pages', body: 'Pages that explain each herb, its traditional use, how to take or apply the product and who should speak to a doctor first, without disease claims.' },
      { title: 'Diaspora and wellness campaigns', body: 'Separate creative and landing pages for South Asian households and for wellness shoppers new to Ayurveda, timed to Diwali, January resets and winter.' },
      { title: 'Amazon UK listings', body: 'Listings that respect each product’s UK category rules, with ingredients, origin, dosage or usage, and any registration shown clearly.' },
      { title: 'Search and AI answers', body: 'Content on herbs, rituals and daily routines that answers questions people ask Google and AI assistants, written to stay within claims rules.' },
      { title: 'Export-ready store set-up', body: 'For Indian brands selling here: GBP product pricing, UK delivery and returns information, and a store written for UK buyers rather than a copy of the Indian site.' },
    ],
    process: [
      { title: 'Free audit and product map', body: 'We review your range, store, ads and listings, and list each product with its likely UK category and claims to check. We can meet at our London office or by video.' },
      { title: 'Plan and GBP quote', body: 'A written plan for audiences, pages, channels and claims, with our fee quoted in GBP. Ad spend is paid by you directly to each platform.' },
      { title: 'Rewrite, then advertise', body: 'Product pages and herb guides are rewritten with approved wording first. Ads follow, only for products and claims that suit each platform.' },
      { title: 'Grow on routines', body: 'Monthly reports on new customers, repeat orders and audience performance, with budget moved to the products people take every day.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Google Ads', 'Amazon UK', 'eBay', 'Google Search Console', 'GA4'],
    figures: [
      { type: 'matrix', caption: 'Who you sell to and how well they know the product decide the message.', after: 0, cols: ['Diaspora buyers', 'Wellness shoppers'], rows: ['Familiar products', 'Lesser-known products'], cells: [
        { title: 'Remind, reorder', body: 'Search ads, bundles and refill reminders for staples they know' },
        { title: 'Explain the ritual', body: 'Show how it fits into daily life, in plain English' },
        { title: 'Show it is genuine', body: 'Origin, ingredients and how it is made, stated clearly' },
        { title: 'Teach, then sell', body: 'Start with content and a trial size before the full range' },
      ] },
      { type: 'steps', caption: 'Checks to run before advertising a herbal product in the UK.', after: 2, steps: [
        { title: 'Name the product', body: 'What it is and how it is used' },
        { title: 'Find its category', body: 'Cosmetic, food, herbal medicine or other' },
        { title: 'Agree the claims', body: 'Wording approved by your adviser' },
        { title: 'Pick channels', body: 'Platforms that accept that category' },
      ] },
    ],
    guide: [
      {
        heading: 'Ayurveda in the UK: two audiences',
        paragraphs: [
          'Ayurveda reaches UK shoppers through two quite different doors. The first is the South Asian diaspora, where many households grew up with chyawanprash, triphala, herbal hair oils and turmeric in daily life. These buyers know the products, care about authenticity and often shop by brand name. The second is the wider wellness audience, people who have met ashwagandha or abhyanga through yoga, podcasts or TikTok and want to know more.',
          'Each audience needs different marketing. Diaspora buyers want to find a familiar product quickly, trust that it is genuine and reorder easily. Wellness shoppers need the idea explained first: what the herb is, how it is traditionally used, how it fits into a modern routine. An Ayurveda marketing agency should run these as separate campaigns with separate landing pages.',
        ],
      },
      {
        heading: 'What an Ayurveda marketing agency should check first',
        paragraphs: [
          'Before any ad goes live, the most important question is what each product is under UK rules. The same jar of herbs can be a food supplement, a cosmetic, a registered traditional herbal medicine or an unlicensed medicine depending on its ingredients, its presentation and the claims made for it. That classification decides which words you can use, which platforms will accept your ads and how Amazon UK will treat your listing.',
          'A careful Ayurveda marketing agency does not decide this alone. We work with your regulatory adviser or importer, build a simple product map, and only then write pages and ads. It slows the start slightly, but it avoids the far bigger cost of withdrawn listings, rejected ad accounts or regulatory letters later.',
        ],
      },
      {
        heading: 'MHRA, THR and food supplement rules in general terms',
        paragraphs: [
          'In the UK, a product presented as treating or preventing disease is generally regarded as a medicine and falls under the MHRA. Herbal medicines can be sold under the traditional herbal registration scheme, known as THR, which covers products with a long history of traditional use for minor conditions; registered products carry the THR mark and may make the limited claims their registration allows. The MHRA also looks at borderline products, and it has warned in the past about some imported Ayurvedic preparations.',
          'Many herbal products are instead sold as food supplements, which come under food law. Here only authorised nutrition and health claims may be used, and many claims about botanicals have not been authorised, so supplement copy usually stays with ingredients, tradition and daily use. Hair oils, balms and face packs are generally cosmetics and follow the UK Cosmetics Regulation. This is general guidance, not legal advice.',
        ],
      },
      {
        heading: 'Writing about tradition without breaking advertising rules',
        paragraphs: [
          'The CAP Code, enforced by the ASA, applies to every ad and to claims on your own website. Classical texts describe herbs in terms of balancing doshas or supporting digestion, sleep and immunity, and that language feels natural to many brands. In UK marketing, the safe path is to describe tradition as tradition, explain how a product is used, and avoid stating or implying that it treats any condition unless the product is authorised to do so.',
        ],
        bullets: [
          'Say “traditionally used in Ayurveda for” only where your adviser agrees it is appropriate',
          'Keep disease names, symptoms and cures out of ads and product titles',
          'Use authorised health claim wording for any vitamins or minerals in a supplement',
          'Add sensible cautions, such as checking with a doctor during pregnancy or alongside medication',
          'Avoid testimonials that describe recovering from an illness',
        ],
      },
      {
        heading: 'Indian Ayurvedic brands exporting to the UK',
        paragraphs: [
          'Many Ayurvedic brands that sell in the UK are made in India. An AYUSH licence and Indian labelling do not, on their own, make a product legal to sell here, so exporters usually need a UK importer or Responsible Person, English labels that meet UK rules, and evidence on ingredient safety and contaminants. Customs, duty and VAT also apply, and slow international delivery frustrates UK buyers used to next-day parcels.',
          'Most exporters do better holding stock in the UK, either in their own warehouse partner or through Amazon UK fulfilment, and running a store built for UK buyers with GBP prices, UK delivery times and clear returns information. Diaspora demand also follows the Indian festive calendar, with Diwali often a peak for gifting and family orders.',
        ],
      },
      {
        heading: 'Amazon UK, your store and search',
        paragraphs: [
          'Amazon UK is often where diaspora shoppers reorder staples, but it applies its own rules to supplements and herbal products, and listings can be removed if claims or documents do not fit. Your own store is the place for herb guides, routines, bundles and subscriptions. Search matters a great deal in this category: people look up herbs by name and ask AI assistants how to use them, so clear, careful explainers can bring steady traffic for years.',
          'Paid social suits education-led products and gift sets, provided the creative stays well clear of health claims. Platform policies on supplements and wellness change regularly, so we check them before each campaign.',
        ],
      },
      {
        heading: 'Measuring growth and choosing a partner',
        paragraphs: [
          'Ayurvedic products are often used every day, so repeat purchase is the number to watch. Track reorder rates by product and audience, the share of sales from returning customers, and refunds. UK consumer law generally gives online buyers a cancellation period, with exceptions for sealed goods that have been opened, so include returns in your figures.',
          'When choosing an Ayurveda marketing agency, ask how it handles claims, whether it understands both diaspora and wellness audiences, and how it reports. We quote our fee in GBP after a free audit. UK clients can meet us at our London office in E18, and our Chennai team brings a working knowledge of Ayurvedic products alongside UK market experience.',
        ],
      },
    ],
    related: [
      { label: 'Haircare marketing for UK hair oil and shampoo brands', href: '/uk/haircare-marketing-agency/' },
      { label: 'Skincare marketing for UK brands', href: '/uk/skincare-marketing-agency/' },
      { label: 'Perfume and attar marketing in the UK', href: '/uk/perfume-marketing-agency/' },
      { label: 'Amazon UK agency for listings and ads', href: '/uk/amazon-agency/' },
      { label: 'Ecommerce SEO for UK herbal brands', href: '/uk/ecommerce-seo-agency/' },
      { label: 'AI search optimisation for herb and ritual questions', href: '/uk/ai-search-optimisation-agency/' },
      { label: 'UK ecommerce marketing for Indian exporters', href: '/uk/ecommerce-marketing-agency/' },
      { label: 'LTV to CAC calculator', href: '/tools/ltv-cac-calculator/' },
    ],
    faqs: [
      { q: 'What does an Ayurveda marketing agency do in the UK?', a: 'It helps herbal and Ayurvedic brands sell to UK buyers: mapping each product’s UK category with your adviser, writing product pages and herb guides in plain English, running ads that stay within advertising and medicines rules, and growing sales through your own store, Amazon UK and search, for both diaspora and wellness audiences.' },
      { q: 'Can we advertise Ayurvedic products on Meta and Google in the UK?', a: 'Often, within limits. Ads must follow the CAP Code and each platform’s health policies, and products presented as treating conditions are generally regarded as medicines. Many brands advertise ingredients, tradition and daily use instead. Which products you can promote, and how, depends on their UK category, so check with your adviser first.' },
      { q: 'What is the traditional herbal registration scheme?', a: 'THR is an MHRA scheme that lets certain herbal medicines be sold for minor conditions on the basis of long traditional use rather than full clinical trials. Registered products carry the THR mark and can make the limited claims their registration allows. Unregistered products should not make medicinal claims. Your regulatory adviser can confirm what applies.' },
      { q: 'Can an Indian Ayurvedic brand sell directly to UK customers?', a: 'Yes, but an Indian licence alone is not enough. You usually need a UK importer or Responsible Person, labels that meet UK rules and products classed correctly for the UK. Holding stock in the UK speeds up delivery. We handle the marketing and store side alongside your compliance adviser.' },
      { q: 'How do we market to diaspora buyers and wellness shoppers at the same time?', a: 'Run them as separate campaigns. Diaspora buyers want familiar products, proof of authenticity and easy reordering, often around Diwali and winter. Wellness shoppers need the herb and ritual explained first, ideally with a trial size. Separate landing pages and creative keep each message clear.' },
      { q: 'How much does Ayurveda marketing cost in the UK?', a: 'It depends on the size of your range, the channels, how much content is needed and whether marketplace or export set-up is included. Ad spend is paid by you directly to the platforms. Our fee is quoted separately in GBP, in a fixed written quote after a free audit of your store, listings and ads.' },
      { q: 'Do you have a team in the UK?', a: 'We have a London office in E18 where UK clients can meet the team by appointment. Much of the delivery is done by our Chennai team, which helps when working with Indian manufacturers, and requests sent before UK lunchtime are usually handled the same day.' },
    ],
  },

  // ───────────────────────────────────────────── 5. Perfume (UK)
  {
    slug: 'uk/perfume-marketing-agency',
    kind: 'industry',
    market: 'UK',
    twin: 'industries/perfume-marketing-agency',
    title: 'Perfume Marketing Agency UK for Fragrance Brands | Magnus Path',
    description: 'Perfume marketing agency for UK fragrance brands: note-led copy, discovery sets, dangerous-goods shipping, gifting peaks and growth on Amazon UK and TikTok Shop.',
    primaryKeyword: 'perfume marketing agency',
    navLabel: 'Perfume & fragrance UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Perfume, niche fragrance and attar in the UK',
    h1: 'A Perfume Marketing Agency for UK Fragrance Brands Selling *a Scent Online*',
    intro: 'Magnus Path is a perfume marketing agency for UK fragrance houses, niche perfumers, attar makers and home-scent brands. Nobody can smell a fragrance through a screen, so we sell with notes, mood and occasion, discovery sets that lead to full bottles, gifting campaigns for Christmas, Valentine’s and Mother’s Day, and listings on Amazon UK and TikTok Shop that handle dangerous-goods rules properly.',
    icon: 'social',
    facts: ['Discovery sets to full bottles', 'UK gifting calendar', 'Shipping rules planned in'],
    headings: {
      pains: 'Why UK fragrance brands find online sales hard',
      includes: 'What our perfume marketing for UK brands includes',
      process: 'How we grow a UK fragrance brand in *4 steps*',
      guide: 'Selling perfume online in the UK: notes, samples, gifting and shipping',
    },
    pains: [
      { title: 'Words that describe nothing', body: '“Luxurious, captivating, unforgettable.” Most fragrance pages say the same. Shoppers cannot tell your scent from a hundred others and close the tab.' },
      { title: 'Samples that never become bottles', body: 'Discovery sets sell, then buyers move on to the next brand’s set. Without follow-up, sampling turns into a cheap product line rather than a route to full sizes.' },
      { title: 'Parcels held up by shipping rules', body: 'Alcohol-based perfume counts as a flammable liquid for transport. Carriers, Amazon UK and international parcels each have their own limits, and the wrong set-up stalls orders.' },
    ],
    includes: [
      { title: 'Note, mood and occasion copy', body: 'Top, heart and base notes described in plain words, with mood, season and occasion, and comparisons to familiar scent families rather than other brands’ names.' },
      { title: 'Discovery and sample journeys', body: 'Discovery sets and travel sprays with a credit towards a full bottle and a follow-up asking which scent the buyer liked.' },
      { title: 'Gifting campaigns', body: 'Black Friday, Christmas, Valentine’s, Mother’s Day in March and Father’s Day in June, with gift pages, wrapping options and delivery cut-off messages.' },
      { title: 'Shipping-aware listings', body: 'Carrier choices and product data that respect dangerous-goods rules for alcohol-based fragrance, and Amazon UK listings prepared for its hazmat review.' },
      { title: 'Creator and video content', body: 'Short videos that show the bottle, the wearer and the moment, with honest descriptions of how a scent develops and how long it lasts.' },
      { title: 'Meta and Google ads', body: 'Catalogue ads by scent family, search ads for notes and occasions, and Shopping feeds with sizes and concentrations listed correctly.' },
    ],
    process: [
      { title: 'Free audit of range and journey', body: 'We review your fragrance pages, sampling, ads, shipping set-up and reviews. We can go through it at our London office, where you can bring the range, or by video.' },
      { title: 'Plan and GBP quote', body: 'A written plan for copy, sampling, gifting and channels, with our fee in GBP. Ad spend is paid by you directly to each platform.' },
      { title: 'Rewrite and set up sampling', body: 'Scent pages are rewritten around notes and occasions, and the discovery-set journey is built before ads scale.' },
      { title: 'Run the calendar', body: 'Campaigns follow the UK gifting calendar, and monthly reports show sample-to-bottle rate, repeat orders and results by channel.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Instagram', 'TikTok Shop', 'Google Ads', 'Amazon UK', 'YouTube'],
    figures: [
      { type: 'mindmap', caption: 'What a fragrance page needs when the shopper cannot smell the scent.', after: 0, center: 'Selling a scent online', branches: [
        { label: 'Notes', items: ['Top, heart and base', 'Scent family'] },
        { label: 'Feeling', items: ['Mood and season', 'Day or evening wear'] },
        { label: 'Proof', items: ['Longevity in plain words', 'Reviews from wearers'] },
        { label: 'Trial', items: ['Discovery set', 'Credit to a full bottle'] },
      ] },
      { type: 'venn', caption: 'Both formats are cosmetics in the UK, but they ship quite differently.', after: 4,
        left: { title: 'Alcohol-based perfume', body: 'Flammable for transport; carrier and Amazon limits apply' },
        right: { title: 'Oil-based attar', body: 'Often simpler to ship; still check each carrier’s rules' },
        overlap: 'Cosmetics rules and allergens' },
    ],
    guide: [
      {
        heading: 'Why perfume is so hard to sell online',
        paragraphs: [
          'Perfume is bought with the nose, and the nose cannot shop online. In a department store such as John Lewis or Liberty, a customer tries a scent on a blotter, then on skin, walks around and comes back. Online, all of that has to be replaced with words, pictures, video and a low-risk way to try. Most fragrance brands underinvest in all three and rely on beautiful bottle shots instead.',
          'That leaves room for brands that do the work. A perfume marketing agency should help you describe each scent so it can be imagined, give shoppers an easy way to test it at home, and time campaigns to the moments when people buy fragrance, which in the UK is mostly as a gift.',
        ],
      },
      {
        heading: 'Describing a fragrance so it can be imagined',
        paragraphs: [
          'Start with the structure: top notes that greet you, heart notes that settle in, base notes that stay. Then add the scent family, such as fresh citrus, floral, woody, amber or gourmand, because many shoppers know which families they like. Mood, season and occasion help next: a bright scent for spring weekends, a warm one for winter evenings.',
          'Be honest about performance. Say plainly whether a scent sits close to the skin or projects, and give a realistic sense of how long it lasts, without exaggerating. Reviews that mention longevity and compliments are valuable, so ask for them. Video helps too, showing the person and the setting rather than just the bottle.',
        ],
      },
      {
        heading: 'Discovery sets and the path to a full bottle',
        paragraphs: [
          'Discovery sets are the closest thing online shoppers have to a fragrance counter. They do that job well as a paid product with a clear purpose: try several scents at home, choose one, and use a credit towards the full bottle. Travel sprays and single samples do a similar job for people who already have a favourite in mind.',
          'The follow-up decides whether sampling pays. A message a few days after delivery asking which scent the buyer liked, a reminder of the credit and a simple way to order the full size turn samples into revenue. Track the share of discovery-set buyers who go on to buy a full bottle, and which scents they choose.',
        ],
      },
      {
        heading: 'Planning around the UK gifting calendar',
        paragraphs: [
          'A large share of fragrance is bought as a gift, so the calendar matters more than in most categories. Plan backwards from each peak, with creative, gift pages and stock ready before demand rises, and state delivery cut-off dates clearly on every page.',
        ],
        bullets: [
          'Black Friday and Christmas, the main gifting season for most UK fragrance brands',
          'Boxing Day and January sales, useful for clearing seasonal sets',
          'Valentine’s Day in February',
          'Mother’s Day in March, which falls earlier in the UK than in many countries',
          'Father’s Day in June, for colognes and woody scents',
          'Diwali and Eid for attar and oud brands with South Asian and Muslim audiences',
        ],
      },
      {
        heading: 'Shipping, dangerous goods and UK product rules',
        paragraphs: [
          'Alcohol-based perfume is generally classed as a flammable liquid for transport, which makes it dangerous goods. Domestic carriers usually accept it within limits, international parcels are more restricted, and Amazon UK reviews fragrance listings for hazmat before it accepts stock into fulfilment. Check each carrier’s current rules, pack bottles properly and set customer expectations on where you can deliver.',
          'Fragrance is a cosmetic, so the UK Cosmetics Regulation applies in general terms: a UK Responsible Person, a safety assessment, notification before sale and labels that list certain fragrance allergens. Many brands also follow IFRA standards on ingredient use. This is general guidance, not legal advice, so confirm details with your Responsible Person.',
        ],
      },
      {
        heading: 'Inspired-by, attar and niche brands',
        paragraphs: [
          'Inspired-by and dupe-style brands need particular care. Naming a designer fragrance in ads, product titles or hashtags can raise trade mark problems, and comparative claims must be fair and verifiable under the CAP Code. Marketplaces have their own rules on using other brands’ names. Describing the scent family and notes is usually a safer way to help shoppers find you.',
          'Attar and oud brands often serve South Asian and Muslim communities, with demand around Eid, Diwali and weddings, as well as a growing niche fragrance audience. Niche perfumers sell on story, materials and craft. In each case, the job is to explain what makes the scent and the house distinct: where the materials come from, who composed the fragrance, how it is made and why it smells the way it does. That story gives creators something real to talk about and gives shoppers a reason to pay more than they would for a high-street scent.',
        ],
      },
      {
        heading: 'Marketplaces and measuring growth',
        paragraphs: [
          'Amazon UK suits replenishment of known scents, and TikTok Shop works for brands with strong video and creator content. Your own store remains the home of discovery sets, gift wrapping and customer data. UK consumer law generally gives online buyers a cancellation period, though opened fragrance may be excluded for hygiene reasons, so make your returns policy clear.',
          'A perfume marketing agency should judge results on sample-to-bottle rate, repeat orders and gifting-season performance, not just first-order return on ad spend. We quote our fee in GBP after a free audit, and UK clients can meet the team at our London office in E18.',
        ],
      },
    ],
    related: [
      { label: 'Jewellery marketing for UK gifting brands', href: '/uk/jewellery-marketing-agency/' },
      { label: 'Makeup and cosmetics marketing in the UK', href: '/uk/cosmetics-marketing-agency/' },
      { label: 'Ayurveda and herbal brands in the UK', href: '/uk/ayurveda-marketing-agency/' },
      { label: 'Meta catalogue ads for UK fragrance shops', href: '/uk/ecommerce-meta-ads-agency/' },
      { label: 'Google Shopping and search ads for UK stores', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'Amazon UK listings and sponsored ads', href: '/uk/amazon-agency/' },
      { label: 'Ecommerce sale calendar with UK gifting dates', href: '/resources/sale-calendar/' },
      { label: 'ROAS calculator', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a perfume marketing agency do?', a: 'It plans and runs the marketing that sells fragrance online: copy that describes notes, mood and occasion, discovery sets and sample journeys, gifting campaigns, creator video, ads on Meta and Google, and listings on Amazon UK and TikTok Shop. The aim is turning curious browsers into buyers of full bottles who come back.' },
      { q: 'How do you sell a perfume people cannot smell?', a: 'Describe it with notes, scent family, mood, season and occasion, show it on people in real settings, and be honest about how long it lasts. Then offer a low-risk way to try it at home, such as a discovery set with a credit towards the full bottle.' },
      { q: 'Can we ship perfume anywhere from the UK?', a: 'Not always. Alcohol-based perfume is generally treated as a flammable liquid for transport, so carriers limit how it is sent, especially abroad. Amazon UK also reviews fragrance for hazmat before accepting stock. Check each carrier’s current rules and state clearly where you deliver.' },
      { q: 'Are discovery sets worth it for a small fragrance brand?', a: 'Usually, if they lead to full bottles. Sell them as a paid product, follow up a few days after delivery to ask which scent the buyer liked, and offer a credit towards the full size. Measure how many discovery-set buyers go on to buy a full bottle.' },
      { q: 'Can we mention designer perfumes our scents are inspired by?', a: 'It is risky. Using another brand’s name in ads, titles or hashtags can raise trade mark issues, and comparative claims must be fair and verifiable under the CAP Code. Marketplaces have their own rules too. Describing scent family and notes is usually safer. Take legal advice before naming other brands.' },
      { q: 'How much does perfume marketing cost?', a: 'It depends on the size of your range, the channels, how much creative and video you need, and whether marketplace management and gifting campaigns are included. Ad spend is paid by you directly to the platforms. Our fee is quoted separately in GBP, in a fixed written quote after a free audit.' },
      { q: 'Can we bring our fragrances to a meeting?', a: 'Yes. We have a London office in E18 where UK clients can meet the team by appointment, and smelling the range helps us write about it. Most delivery is done by our Chennai team, so work continues after UK hours.' },
    ],
  },

  // ───────────────────────────────────────────── 6. Jewellery (UK)
  {
    slug: 'uk/jewellery-marketing-agency',
    kind: 'industry',
    market: 'UK',
    twin: 'industries/jewellery-marketing-agency',
    title: 'Jewellery Marketing Agency UK for Online Brands | Magnus Path',
    description: 'Jewellery marketing agency for UK brands: hallmark and metal clarity, close-up and try-on video, gifting and engagement campaigns, Etsy, Google Shopping and Meta.',
    primaryKeyword: 'jewellery marketing agency',
    navLabel: 'Jewellery UK',
    breadcrumb: ukBreadcrumb,
    eyebrow: 'Fine, demi-fine, silver and fashion jewellery in the UK',
    h1: 'A Jewellery Marketing Agency That Earns UK Buyers’ Trust *Before the First Order*',
    intro: 'Magnus Path is a jewellery marketing agency for UK brands selling fine, demi-fine, silver, lab-grown diamond and fashion jewellery online. We build trust with clear metal, hallmark and stone details, close-up and try-on video, campaigns for engagements, Christmas, Valentine’s and Mother’s Day, and growth across your own store, Etsy, Google Shopping and Meta, with meetings at our London office in E18.',
    icon: 'website',
    facts: ['Hallmark and metal clarity', 'Gifting and engagement plans', 'London office, Chennai delivery'],
    headings: {
      pains: 'Why UK jewellery brands struggle to convert online',
      includes: 'What our jewellery marketing for UK brands covers',
      process: 'How we grow a UK jewellery brand in *4 steps*',
      guide: 'Jewellery marketing in the UK: trust, hallmarks and gifting seasons',
    },
    pains: [
      { title: 'Quality is hard to judge from a photo', body: 'Is it solid gold or plated? How big is the stone really? Without close-ups, scale shots and plain metal details, cautious buyers leave or send questions nobody answers in time.' },
      { title: 'Loose metal descriptions', body: 'Calling a plated piece “gold”, or leaving out hallmark details, confuses buyers and can cause problems under UK hallmarking law and advertising rules.' },
      { title: 'A year that rests on a few weeks', body: 'Christmas and Valentine’s carry the year, then quiet months follow. Without self-purchase and milestone campaigns, revenue depends on a handful of frantic weeks.' },
    ],
    includes: [
      { title: 'Trust-first product pages', body: 'Metal, purity, hallmark, plating details where relevant, stone type and size, dimensions shown on a hand or neck, and care advice on every product.' },
      { title: 'Close-up and try-on video', body: 'Macro shots, scale against a hand and short videos in daylight, so buyers see sparkle, colour and size honestly before they order.' },
      { title: 'Google Shopping and Meta catalogue ads', body: 'Feeds with correct metal, stone and size attributes, catalogue ads by collection, and search ads for engagement, birthstone and gift searches.' },
      { title: 'Etsy and marketplace listings', body: 'Etsy listings for handmade and personalised pieces, plus Amazon UK or eBay where they fit, with titles and photos aligned to your own store.' },
      { title: 'Seasonal and milestone campaigns', body: 'Engagements, Christmas, Valentine’s, Mother’s Day, graduations and birthstone months planned ahead, with delivery cut-offs on every page.' },
      { title: 'Appointment and studio bookings', body: 'For brands with a studio or showroom, ads and pages that book viewings and bespoke consultations, not just online orders.' },
    ],
    process: [
      { title: 'Free audit of pages and ads', body: 'We review product pages, photography, feeds, ads and enquiries, and flag missing metal or hallmark details. We can meet at our London office, where you can bring pieces, or by video.' },
      { title: 'Plan and GBP quote', body: 'A written plan for pages, content, channels and seasons, with our fee in GBP. Ad spend is paid by you directly to each platform.' },
      { title: 'Fix trust signals first', body: 'Product details, photography briefs, sizing guides and returns information are put right before ad budgets increase.' },
      { title: 'Scale across the year', body: 'Seasonal and always-on campaigns run from one calendar, with monthly reports on sales, returns, enquiries and repeat customers.' },
    ],
    platforms: ['Shopify', 'WooCommerce', 'Google Ads', 'Google Merchant Center', 'Meta Ads', 'Instagram', 'Etsy', 'Pinterest'],
    figures: [
      { type: 'matrix', caption: 'How a jewellery purchase changes with its price point and who it is for.', after: 0, cols: ['Everyday piece', 'Investment piece'], rows: ['Bought for themselves', 'Bought as a gift'], cells: [
        { title: 'Stack and repeat', body: 'Short video, layering ideas and quick delivery' },
        { title: 'Considered treat', body: 'Detailed pages, payment options and reviews' },
        { title: 'Gift ready', body: 'Gift wrap, cut-off dates and simple sizing help' },
        { title: 'Trust first', body: 'Hallmarks, grading reports, clear returns and viewings' },
      ] },
      { type: 'steps', caption: 'A simple hallmarking check before a piece goes on sale in the UK.', after: 1, steps: [
        { title: 'Check the metal', body: 'Precious metal, plated or base metal' },
        { title: 'Check the weight', body: 'Is it above the exemption weight?' },
        { title: 'Hallmark it', body: 'Send to a UK assay office if required' },
        { title: 'Say it clearly', body: 'Hallmark, purity and dealer’s notice online' },
      ] },
    ],
    guide: [
      {
        heading: 'Why jewellery is a trust purchase',
        paragraphs: [
          'Jewellery asks a lot of an online shopper. The piece may be expensive, it may be a gift for someone important, and the buyer cannot hold it, see how it catches the light or check the hallmark. They worry about plating that wears off, stones that look smaller than expected and a ring that does not fit. Every one of those worries is a reason to leave.',
          'A good jewellery marketing agency starts by removing those worries, not by buying more traffic. Clear details, honest photography, sizing help and visible returns information raise conversion on the traffic you already have, and make every pound of ad spend work harder.',
        ],
      },
      {
        heading: 'UK hallmarking, described plainly',
        paragraphs: [
          'The UK has strict hallmarking rules. In general terms, items described as gold, silver, platinum or palladium must be hallmarked by one of the UK assay offices, in London, Birmingham, Sheffield or Edinburgh, unless they fall below small exemption weights. Some international convention marks are also recognised. Plated or base-metal pieces should not be described simply as gold or silver, which matters for demi-fine brands.',
          'Sellers are also expected to display a notice explaining hallmarks, and this is generally taken to apply to websites too. Jewellery made overseas, including pieces made in India for UK brands, usually needs a UK hallmark or a recognised convention mark before it can be sold here as precious metal. This is general guidance, not legal advice; an assay office can confirm what applies to your range.',
        ],
      },
      {
        heading: 'Fine, demi-fine, silver and lab-grown: be precise',
        paragraphs: [
          'Precision builds trust and keeps you within advertising rules. State the metal and purity, the plating metal and base where relevant, and the stone type and size. If a diamond is lab-grown, say so clearly in titles, ads and product pages. Mention any treatments to gemstones, and only use terms like “ethical” or “sustainable” when you can explain and evidence what you mean.',
        ],
        bullets: [
          'Fine jewellery: metal, purity, hallmark, stone details and any grading report',
          'Demi-fine: base metal, plating metal and how to care for it',
          'Silver: sterling hallmark details and tarnish care advice',
          'Lab-grown diamonds: clearly labelled as lab-grown everywhere they appear',
          'Fashion jewellery: materials, nickel information and realistic durability',
        ],
      },
      {
        heading: 'Photography, video and try-on',
        paragraphs: [
          'Jewellery photography has two jobs: to make pieces desirable and to show them honestly. Use macro shots for detail, on-body shots for scale, and short videos in natural light that show how stones and metal move. Show rings on hands of different sizes and necklaces at their real length. Avoid heavy retouching that changes colour or sparkle, because a buyer who receives something different from the photo is likely to return it and less likely to trust you again.',
          'Creator content works well for demi-fine and fashion pieces, especially stacking and styling videos on Instagram and TikTok. For fine jewellery and engagement rings, slower, detailed video and the option to book a viewing or video consultation often do more than a quick reel.',
        ],
      },
      {
        heading: 'Engagements, gifting and self-purchase through the year',
        paragraphs: [
          'UK jewellery demand peaks around Black Friday and Christmas, which is also a popular time for engagements, then again for Valentine’s and Mother’s Day in March. Each needs gift pages, wrapping options and clear delivery cut-off dates, planned weeks ahead. Personalised pieces need even longer lead times, so set an earlier last order date for engraving and made-to-order work and say it plainly on the product page as well as in ads.',
          'To smooth the year, build campaigns around self-purchase, birthstone months, graduations, anniversaries and milestone birthdays. Asian bridal and Diwali jewellery is a distinct opportunity for brands serving South Asian communities. A jewellery marketing agency should plan all of these on one calendar.',
        ],
      },
      {
        heading: 'Etsy, Google Shopping and your own store',
        paragraphs: [
          'Etsy is a natural home for handmade and personalised jewellery in the UK, and its search rewards good titles, tags and photographs. Google Shopping is strong for product searches by metal, stone and style, as long as your feed carries accurate attributes. Meta catalogue ads work for retargeting and for showing collections to new audiences. Department stores such as Liberty and John Lewis set expectations for presentation and service, even if you sell only online.',
          'Your own store should hold the full collection, detailed product information, sizing guides and the customer relationship. Keep prices and descriptions consistent across channels, answer enquiries quickly, and make it easy to ask a question by chat or email before buying. For higher-value pieces, payment options and visible, secure checkout details matter as much as the photography.',
        ],
      },
      {
        heading: 'Returns, personalisation and choosing a jewellery marketing agency',
        paragraphs: [
          'UK consumer law generally gives online buyers a cancellation period, but made-to-order and personalised items are usually excluded, so explain your policy clearly on each product. Ring sizing guides, free resizing where you can offer it and clear return steps reduce hesitation, especially for gifts.',
          'When choosing a jewellery marketing agency, ask how it handles product detail, photography and hallmark wording as well as ads. We quote our fee in GBP after a free audit. UK clients can meet the team, and bring pieces, at our London office in E18, while much of the delivery is done by our Chennai team.',
        ],
      },
    ],
    related: [
      { label: 'Perfume and fragrance marketing for UK gifting brands', href: '/uk/perfume-marketing-agency/' },
      { label: 'Makeup and cosmetics marketing in the UK', href: '/uk/cosmetics-marketing-agency/' },
      { label: 'Google Shopping ads for UK online stores', href: '/uk/ecommerce-ppc-agency/' },
      { label: 'Meta catalogue ads for UK jewellery shops', href: '/uk/ecommerce-meta-ads-agency/' },
      { label: 'Shopify agency for UK jewellery stores', href: '/uk/shopify-agency/' },
      { label: 'Ecommerce SEO for UK jewellery collections', href: '/uk/ecommerce-seo-agency/' },
      { label: 'London ecommerce agency', href: '/london/ecommerce-agency/' },
      { label: 'Ecommerce sale calendar with UK gifting dates', href: '/resources/sale-calendar/' },
    ],
    faqs: [
      { q: 'What does a jewellery marketing agency do?', a: 'It plans and runs the marketing that sells jewellery online: product pages with clear metal, hallmark and stone details, photography and video briefs, Google Shopping and Meta catalogue ads, Etsy listings, and seasonal campaigns for engagements and gifting. The aim is to build enough trust that cautious buyers order, and come back.' },
      { q: 'Does our jewellery need to be hallmarked to sell in the UK?', a: 'Generally, items described as gold, silver, platinum or palladium need a UK hallmark or a recognised convention mark unless they are below small exemption weights. Plated pieces should not be described simply as gold or silver. An assay office can confirm what applies to your range.' },
      { q: 'How should we describe lab-grown diamonds?', a: 'Clearly and consistently. Say “lab-grown” in product titles, descriptions and ads, not only in the small print, so buyers are not misled. Give the same stone details you would for a natural diamond, and include any grading report you hold. Avoid environmental claims you cannot explain and support.' },
      { q: 'Is Etsy or our own website better for selling jewellery?', a: 'Many UK brands use both. Etsy brings shoppers searching for handmade and personalised pieces, while your own store holds the full collection, customer data and repeat business. Keep prices and descriptions consistent, and use Google Shopping and Meta ads to grow your own store.' },
      { q: 'When should jewellery brands plan Christmas campaigns?', a: 'Early. Gift pages, photography, stock and ads should be ready before Black Friday, and personalised or made-to-order pieces need even longer lead times. State delivery cut-off dates clearly on every page. Plan Valentine’s and Mother’s Day in March at the same time, as they follow closely.' },
      { q: 'How much does jewellery marketing cost?', a: 'It depends on the size of your collection, the channels, how much photography and video is needed, and whether marketplace or appointment campaigns are included. Ad spend is paid by you directly to the platforms. Our fee is quoted separately in GBP, in a fixed written quote after a free audit.' },
      { q: 'Can we meet you and bring our pieces?', a: 'Yes. We have a London office in E18 where UK clients can meet the team by appointment and show us their pieces. Most delivery is handled by our Chennai team, so requests sent before UK lunchtime are usually dealt with the same day.' },
    ],
  },
];
