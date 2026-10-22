import type { ServicePageData } from '../../data/types';

const usBreadcrumb = [{ label: 'United States', href: '/us/ecommerce-marketing-agency/' }];

export const usIndustryBeautyPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. Skincare (US)
  {
    slug: 'us/skincare-marketing-agency',
    kind: 'industry',
    market: 'US',
    twin: 'industries/skincare-marketing-agency',
    title: 'Skincare Marketing Agency for US DTC Brands | Magnus Path',
    description: 'Skincare marketing agency for US DTC brands: ingredient-led pages, FDA- and FTC-aware claims, creator programs, and growth on Amazon US and TikTok Shop.',
    primaryKeyword: 'skincare marketing agency',
    navLabel: 'Skincare',
    breadcrumb: usBreadcrumb,
    eyebrow: 'US skincare brands',
    h1: 'Skincare Marketing Agency for US Brands Built on *Claims You Can Back*',
    intro: 'Magnus Path is a skincare marketing agency for US direct-to-consumer brands selling serums, sunscreens, cleansers and moisturizers. We write ingredient-led pages and ads that keep cosmetic claims on the right side of the FDA line, run creator programs with proper FTC disclosures, and grow sales on your Shopify store, Amazon US and TikTok Shop. We are a remote team in India with no US office.',
    icon: 'social',
    facts: ['Cosmetic vs drug claims checked', 'Shopify, Amazon and TikTok Shop', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Why US skincare brands stall after launch',
      includes: 'What our skincare marketing covers for US brands',
      process: 'How we grow a US skincare brand in *4 steps*',
      guide: 'Marketing skincare in the US: a practical guide for founders',
    },
    pains: [
      { title: 'A claim that turns a serum into a drug', body: 'Copy that promises to treat acne, erase wrinkles or repair skin can push a cosmetic toward drug territory under US rules, and ad platforms reject it first.' },
      { title: 'Creator posts with no disclosure', body: 'Gifted products and affiliate links go out with the “ad” label buried or missing, which exposes the brand, not only the creator, under FTC endorsement rules.' },
      { title: 'Amazon and TikTok Shop out of step', body: 'Different prices, older formulas and mismatched images across marketplaces and your own site confuse shoppers and pile up confused reviews.' },
    ],
    includes: [
      { title: 'Ingredient and routine pages', body: 'Each hero product explains its actives and their strength, skin type, texture, routine order and what not to layer it with, written for label readers.' },
      { title: 'Claims review', body: 'Every ad and page line sorted into cosmetic, OTC drug or unsupported, so copy matches how the product is actually sold and what your file supports.' },
      { title: 'Creator and affiliate programs', body: 'Briefs, talking points, FTC disclosure wording and a posting log for gifted, paid and affiliate creators on TikTok, Instagram and YouTube.' },
      { title: 'Amazon US and TikTok Shop', body: 'Listings, A+ content, Sponsored Products, TikTok Shop product cards and affiliate offers, kept in line with what your own store says.' },
      { title: 'Paid social and search', body: 'Meta, TikTok and Google campaigns built around hero products and routines, with copy written to clear beauty and health ad policies.' },
      { title: 'Refills and subscriptions', body: 'Reminders timed to how long each product lasts, subscribe-and-save offers and easy skip or cancel, sent only to customers who opted in.' },
    ],
    process: [
      { title: 'Free audit and claims map', body: 'We review your store, ads, marketplaces and claims file, then go through the findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'You get a written plan by channel and a fee quoted in USD. Ad accounts stay in your name and ad spend is paid to each platform.' },
      { title: 'Fix pages and listings', body: 'Hero product pages, Amazon listings and TikTok Shop cards are rewritten before any budget goes up.' },
      { title: 'Launch, test and grow reorders', body: 'Ads, creators and sampling go live; monthly reviews move budget toward the products customers buy again.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Google Ads', 'TikTok Shop', 'Amazon', 'Walmart Marketplace', 'Instagram', 'YouTube'],
    figures: [
      { type: 'venn', caption: 'In the US, what a skincare claim says can decide whether a product is treated as a cosmetic or a drug.', after: 1,
        left: { title: 'Cosmetic claims', body: 'Cleanses, hydrates, improves the look of skin' },
        right: { title: 'Drug claims (OTC)', body: 'Treats acne, helps prevent sunburn, changes skin' },
        overlap: 'Wording decides; get sign-off' },
      { type: 'steps', caption: 'A refill journey for a US skincare customer, from a paid mini to a subscription.', after: 4, steps: [
        { title: 'Paid mini', body: 'Discovery kit with credit toward full size' },
        { title: 'Routine tips', body: 'How to use it in the first week' },
        { title: 'Review request', body: 'Asked of every buyer, not only fans' },
        { title: 'Refill reminder', body: 'Timed to when the bottle runs out' },
        { title: 'Subscribe option', body: 'Easy to skip, pause or cancel' },
      ] },
    ],
    guide: [
      {
        heading: 'Selling skincare to US shoppers who read the label',
        paragraphs: [
          'US skincare buyers arrive informed. Many have watched a dozen creator videos about retinol or azelaic acid before they reach your product page, and they compare your formula with what they have seen at Sephora, Ulta, Target and on Amazon. They want the percentage of the active, the supporting ingredients, the texture, whether it is fragrance-free and how it fits into a morning or evening routine.',
          'That puts the product page at the center of the plan. A skincare marketing agency that sends paid traffic to thin pages pays twice: once for the click, and again in returns and poor reviews when the product does not match what the buyer expected. Before any budget goes up, every hero product should explain what it does for the look and feel of skin, who it suits, how to use it and what to pair it with.',
        ],
      },
      {
        heading: 'Cosmetic or drug: the line US claims must respect',
        paragraphs: [
          'In the US, what you say about a product helps decide how it is regulated. The FDA treats a product meant to cleanse, beautify or change appearance as a cosmetic. A product meant to treat or prevent a condition, or to affect the structure or function of the body, can be treated as a drug. Sunscreens and most acne treatments with ingredients such as benzoyl peroxide or salicylic acid are sold as over-the-counter drugs, with their own labeling rules.',
          'The Modernization of Cosmetics Regulation Act of 2022, known as MoCRA, added duties for cosmetics too, including facility registration, product listing, safety substantiation and reporting of serious adverse events. The FTC, separately, expects advertising claims to be truthful and backed by evidence before they run. We are not lawyers, so your regulatory adviser should sign off on claims. In copy, these habits keep most brands out of trouble:',
        ],
        bullets: [
          'Describe the visible result, such as smoother-looking or more hydrated skin, not a cure',
          'Keep “treats acne” and SPF claims for products that are actually sold as OTC drugs',
          'Hold the test report behind any number, such as hydration after a set number of hours',
          'Use “dermatologist tested” or “clinically shown” only with documentation you can produce',
          'Avoid words like “heal”, “repair” or “reverse” for products sold as cosmetics',
        ],
      },
      {
        heading: 'Creators, affiliates and FTC disclosure',
        paragraphs: [
          'Much US skincare discovery now happens on TikTok, Instagram Reels and YouTube, where creators test products on camera. That works because it feels honest, which is exactly why the FTC pays attention to it. Under its Endorsement Guides, a creator who gets free product, payment or an affiliate commission should disclose that connection clearly in the post itself, not hidden in a profile or after a wall of hashtags. Brands are expected to brief and monitor the creators they work with.',
          'We write creator briefs that cover the product, the talking points you can support and the disclosure the creator must use, and we keep a simple log of what was posted. Creators should share their honest experience; scripting claims you could not make in your own ads does not get around the rules. The same applies to reviews: the FTC has a rule against fake or bought reviews, so review programs should ask every buyer, not only the happy ones.',
        ],
      },
      {
        heading: 'Amazon US, TikTok Shop and your own store',
        paragraphs: [
          'Most US skincare brands end up selling in three places. Your Shopify store holds bundles, subscriptions and customer data. Amazon US catches shoppers who search there first and trust its reviews and fast delivery. TikTok Shop turns creator videos and live sessions into orders inside the app. Walmart Marketplace and Target Plus can come later, usually once operations and reviews are strong.',
          'Each channel needs the same core facts, adapted to its format: A+ content and Sponsored Products on Amazon, short demos and affiliate commissions on TikTok Shop, detailed pages and a routine quiz on your site. Keep pricing consistent so shoppers are not trained to wait for a marketplace coupon, and watch for unauthorized resellers, since expired or diverted stock can damage ratings fast.',
        ],
      },
      {
        heading: 'Sampling, subscriptions and refills',
        paragraphs: [
          'Skincare is a routine purchase, so the second order matters more than the first. Trial sizes help hesitant buyers, but free samples sent to anyone mostly attract people collecting freebies. Paid minis or discovery kits, with a credit toward the full-size product, tend to bring in buyers who mean it.',
          'After the first order, timing does the work. A cleanser that lasts about six weeks should get a reminder near week five, by email or by text message for customers who opted in, since US texting rules require consent. Subscribe-and-save on your store and on Amazon can keep the routine going, as long as skipping or cancelling stays easy, which regulators also watch closely for subscriptions.',
        ],
      },
      {
        heading: 'The US calendar, measurement and how we work',
        paragraphs: [
          'Plan skincare promotions around Black Friday and Cyber Monday, holiday gift sets, Valentine’s Day, Mother’s Day in May and Amazon’s Prime Day in July. Sunscreen demand rises in late spring and summer, while barrier care and rich moisturizers sell through the winter. A skincare marketing agency should report what matters for a routine product: cost to acquire a customer, sample-to-full-size rate, time to second order and repeat value over several months, by product.',
          'Magnus Path is a team in Chennai, India, with offices in Bengaluru and London and no US office. India is 9.5 hours ahead of US Eastern in summer and 10.5 hours in winter, so there is a short overlap in your morning for calls, and most work happens while you sleep. We quote in USD after a free audit; ad spend is paid by you directly to each platform.',
        ],
      },
    ],
    related: [
      { label: 'Haircare marketing for US hair brands', href: '/us/haircare-marketing-agency/' },
      { label: 'Cosmetics marketing for US makeup brands', href: '/us/cosmetics-marketing-agency/' },
      { label: 'Ayurveda marketing for US wellness brands', href: '/us/ayurveda-marketing-agency/' },
      { label: 'Ecommerce Meta ads agency for US stores', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Amazon account management for US sellers', href: '/us/amazon-account-management/' },
      { label: 'Shopify SEO for ingredient and routine searches', href: '/us/shopify-seo-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'LTV to CAC calculator for repeat products', href: '/tools/ltv-cac-calculator/' },
    ],
    faqs: [
      { q: 'What does a skincare marketing agency do for US brands?', a: 'It plans and runs the marketing that sells skincare online in the US: ingredient-led product pages, Meta, Google and TikTok ads, creator programs with proper disclosures, Amazon US and TikTok Shop listings, and refill and subscription journeys. The goal is customers who reorder, not a single discounted first purchase.' },
      { q: 'Can we say our serum treats acne or reduces wrinkles?', a: 'Be careful. In the US, a claim to treat acne or change skin structure can make a product a drug in the FDA’s eyes. Acne treatments are usually sold as OTC drugs with set active ingredients and labels. For cosmetics, describe how skin looks and feels, and have your regulatory adviser review every claim.' },
      { q: 'Do creators have to disclose free skincare products?', a: 'Under the FTC Endorsement Guides, yes. If a creator gets free product, payment or an affiliate commission, the connection should be clear in the post itself, in plain words such as “ad” or “gifted”. Brands are expected to tell creators this and check what they post, so we build it into every brief.' },
      { q: 'What does MoCRA mean for skincare marketing?', a: 'MoCRA mainly changes operations: facility registration, product listing with the FDA, safety substantiation, serious adverse event reporting and some labeling updates. For marketing, it means claims and labels should match what you have documented. We work from your regulatory file and leave compliance sign-off to your adviser, since we are not lawyers.' },
      { q: 'Should a US skincare brand start on Amazon or TikTok Shop?', a: 'It depends on the product and your creator pull. Amazon suits products people search for by ingredient or concern, and rewards reviews and steady stock. TikTok Shop suits products that demo well on video and have creators ready to post. Most brands start with their own store plus one marketplace, then add the other.' },
      { q: 'How much does skincare marketing cost for a US brand?', a: 'We quote in USD after a free audit. The fee depends on the channels, the number of products, creative and content volume, the size of the creator program and whether Amazon or TikTok Shop management is included. Ad spend is paid directly by you to Meta, Google, TikTok or Amazon, separately from our fee.' },
      { q: 'Do you have a US office?', a: 'No. Magnus Path works from Chennai and Bengaluru in India, with an office in London for UK clients. US brands work with us remotely. India is 9.5 to 10.5 hours ahead of US Eastern, so calls fit your morning and most of the work is done overnight in US time.' },
    ],
  },

  // ───────────────────────────────────────────── 2. Haircare (US)
  {
    slug: 'us/haircare-marketing-agency',
    kind: 'industry',
    market: 'US',
    twin: 'industries/haircare-marketing-agency',
    title: 'Haircare Marketing Agency for US Hair Brands | Magnus Path',
    description: 'Haircare marketing agency for US hair brands: shampoo, scalp and curl care, careful hair-loss claims, creator content, and Amazon and TikTok Shop growth.',
    primaryKeyword: 'haircare marketing agency',
    navLabel: 'Haircare',
    breadcrumb: usBreadcrumb,
    eyebrow: 'US haircare brands',
    h1: 'Haircare Marketing Agency for US Brands Selling *Routines, Not Miracles*',
    intro: 'Magnus Path is a haircare marketing agency for US brands selling shampoos, conditioners, oils, scalp care and curl products online. We plan for the weeks results take to show, keep hair-loss and growth claims within FDA and FTC limits, build creator content for every hair texture you serve, and grow sales on Shopify, Amazon US, TikTok Shop and Walmart Marketplace, working remotely from India.',
    icon: 'social',
    facts: ['Hair-loss claims handled carefully', 'Content for every hair texture', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Where US haircare brands lose customers',
      includes: 'What our haircare marketing covers for US brands',
      process: 'How we grow a US haircare brand in *4 steps*',
      guide: 'Selling haircare online in the US: a guide for brand owners',
    },
    pains: [
      { title: 'Growth promises that cross the line', body: 'Ads that promise regrowth or thicker hair in weeks get disapproved, and a hair-growth claim can make a shampoo or serum look like an unapproved drug.' },
      { title: 'One message for every hair type', body: 'Fine straight hair, waves, curls and coils need different products and different words. Copy written “for all hair types” speaks to nobody in particular.' },
      { title: 'Customers who quit before it works', body: 'Scalp and strength products take weeks to show anything. With no support in between, buyers decide it failed and never order again.' },
    ],
    includes: [
      { title: 'Hair-type product pages', body: 'Pages and a quiz organized by texture, porosity, scalp and concern, so shoppers find the right product without guessing.' },
      { title: 'Claims within FDA and FTC limits', body: 'Copy that separates appearance claims from hair-loss treatment, with structure/function wording and the FDA disclaimer for any hair supplement.' },
      { title: 'Creator and stylist content', body: 'Wash-day routines, styling demos and honest progress diaries from creators across hair types, briefed with clear FTC disclosures.' },
      { title: 'Amazon US and Walmart Marketplace', body: 'Listings, A+ content, Sponsored Products and Subscribe & Save setup, with multipacks that do not undercut your own store.' },
      { title: 'TikTok Shop and paid social', body: 'Short demos, live sessions and affiliate offers on TikTok Shop, plus Meta campaigns built on routines rather than shock before-and-after shots.' },
      { title: 'Retention through the results window', body: 'A post-purchase sequence with usage tips, a mid-point check-in and a reorder prompt timed to when the bottle runs low.' },
    ],
    process: [
      { title: 'Free audit by hair type', body: 'We map your range by texture and concern, review claims, pages, ads and marketplaces, and walk you through it on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'A written plan by channel and hair type, with the fee quoted in USD. Ad spend is paid by you directly to each platform.' },
      { title: 'Rewrite pages and claims', body: 'Product pages get usage steps, a realistic timeline and claims your evidence supports, before campaigns scale.' },
      { title: 'Launch and keep them going', body: 'Creators, ads and marketplace campaigns go live, and the post-purchase journey carries customers through to the second bottle.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Google Ads', 'TikTok Shop', 'Amazon', 'Walmart Marketplace', 'YouTube', 'Instagram'],
    figures: [
      { type: 'steps', caption: 'Keeping a haircare customer going through the weeks before results show.', after: 1, steps: [
        { title: 'Day 1', body: 'Order note sets a realistic timeline' },
        { title: 'Week 1', body: 'How-to tips and a wash-day routine' },
        { title: 'Week 3', body: 'Check-in on what to notice so far' },
        { title: 'Week 5', body: 'Refill reminder before it runs out' },
      ] },
      { type: 'matrix', caption: 'Choosing the lead channel for a haircare product by how fast and how visibly it works.', after: 3, cols: ['Fast visible result', 'Slow visible result'], rows: ['Easy to show on video', 'Hard to show on video'], cells: [
        { title: 'Lead with demos', body: 'Styling and frizz products: TikTok and Reels demos' },
        { title: 'Diary content', body: 'Scalp and strength care: week-by-week creator diaries' },
        { title: 'Search and reviews', body: 'Shampoos and conditioners: Amazon search and ratings' },
        { title: 'Educate first', body: 'Supplements and serums: explain routine and timeline' },
      ] },
    ],
    guide: [
      {
        heading: 'How US shoppers buy haircare online',
        paragraphs: [
          'Haircare looks simple on a shelf and gets complicated online. A US shopper choosing a shampoo is often matching it to a hair texture, a scalp issue, color-treated hair or daily heat styling, and may already follow a routine from a creator with similar hair. Curly and coily hair communities in particular know their ingredients, from silicones and sulfates to proteins and humectants, and they notice quickly when a brand does not.',
          'That makes segmentation the first job. A haircare marketing agency should group products by hair type and concern, write pages that say plainly who each product is for, and build ads that speak to one group at a time. A broad “for all hair types” message tends to cost more and convert worse than a routine aimed at, say, fine hair that gets oily by day two.',
        ],
      },
      {
        heading: 'The results window and what to promise',
        paragraphs: [
          'Most haircare results take time. A clarifying shampoo works on the first wash, but scalp serums, strengthening treatments and bond-building products may need several weeks of regular use before a customer sees a difference. If your marketing implies overnight change, you will collect refunds and one-star reviews from people who were never told what to expect.',
          'Set the timeline in the ad, on the product page and in the post-purchase emails. Tell customers what they should notice first, such as a softer feel or less breakage when brushing, and when to judge the bigger result. Then keep them going: usage reminders, a check-in around week three and a refill prompt before the bottle is empty. Retention through this window is where haircare profit is made.',
        ],
      },
      {
        heading: 'Hair loss, growth claims and US rules',
        paragraphs: [
          'Thinning hair is one of the biggest concerns in the category and one of the most sensitive. In the US, a product that claims to grow hair or stop hair loss is generally treated as a drug, and the main OTC topical approved by the FDA for regrowth uses minoxidil under strict labeling. Cosmetic shampoos and serums should talk about how hair looks and feels: fuller-looking, less breakage, a cleaner scalp. Hair supplements, such as biotin blends, are dietary supplements and may make structure/function claims only with the required FDA disclaimer.',
          'The FTC adds its own test: claims must be truthful and backed by appropriate evidence, and health-related claims need solid scientific support. Ad platforms are stricter still about before-and-after photos. We are not lawyers, so claims go to your adviser, but these habits help:',
        ],
        bullets: [
          'Say “fuller-looking” or “less breakage from brushing”, not “regrows hair”',
          'Show real customer photos in consistent lighting, unedited, and say how long they used the product',
          'Keep supplement claims to structure/function language with the FDA disclaimer',
          'Leave medical conditions such as alopecia out of ad copy for a cosmetic product',
        ],
      },
      {
        heading: 'Creators, stylists and texture-specific content',
        paragraphs: [
          'Haircare video works because people can see the product on hair like theirs. Wash-day routines, styling tutorials, tips from working stylists and honest four-week diaries do more than polished campaign shots. Recruit creators across the textures you serve and brief each one on the routine, the claims you can support and the disclosure the FTC expects for gifted or paid posts.',
          'Use creator content beyond organic posts. With the creator’s permission, run their videos as ads on Meta and TikTok, add them to product pages and reuse them in Amazon listings where the rules allow. Agree usage rights and their duration in writing before you put money behind someone else’s face.',
        ],
      },
      {
        heading: 'Amazon, Walmart, Target Plus and TikTok Shop',
        paragraphs: [
          'Many US haircare purchases are replenishment: a shopper reorders the same shampoo when it runs out. Amazon’s Subscribe & Save and fast delivery make it a natural home for that habit, and Walmart Marketplace reaches value-minded buyers who also shop in Walmart stores. Target Plus is invitation-only, so treat it as a later step. TikTok Shop is strong for discovery, especially for styling products and tools that show a visible change on camera.',
          'Keep the catalog consistent everywhere: the same names, sizes, ingredient lists and images. Watch multipack pricing so a two-pack on a marketplace does not undercut your own store, and use your site for kits, bundles and subscriptions that marketplaces handle less well.',
          'Reviews deserve the same care on every channel. Ask every buyer for a review once they have used the product long enough to judge it, not on day two, and never offer rewards for positive ones, which the FTC treats as deceptive. Reply to complaints about texture or scent publicly and calmly, since the next shopper reads those replies too.',
        ],
      },
      {
        heading: 'Seasons, measurement and how we work with US brands',
        paragraphs: [
          'Haircare has gentler peaks than gifting categories, but it still moves: humidity and frizz products in summer, dry-scalp care in winter, dorm and back-to-school restocks in August, gift sets around Black Friday and the holidays, and deals around Prime Day in July. A haircare marketing agency should track what a repeat category needs: acquisition cost, reorder rate within the expected usage window, subscription retention and refund reasons by product.',
          'We are a team in Chennai, India, with offices in Bengaluru and London and no US office. India runs 9.5 to 10.5 hours ahead of US Eastern, so calls fit your morning and most work is done overnight in US time. We quote in USD after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Skincare marketing for US DTC brands', href: '/us/skincare-marketing-agency/' },
      { label: 'Cosmetics marketing for US makeup brands', href: '/us/cosmetics-marketing-agency/' },
      { label: 'Ayurveda marketing for herbal hair oils in the US', href: '/us/ayurveda-marketing-agency/' },
      { label: 'Amazon PPC agency for US sellers', href: '/us/amazon-ppc-agency/' },
      { label: 'Ecommerce Meta ads agency for US stores', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Shopify Plus agency for growing US brands', href: '/us/shopify-plus-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'LTV to CAC calculator for reorder products', href: '/tools/ltv-cac-calculator/' },
    ],
    faqs: [
      { q: 'What does a haircare marketing agency do?', a: 'It plans and runs the online growth of a hair brand: product pages and quizzes by hair type, creator and stylist content, Meta, TikTok and Google ads, Amazon and Walmart listings, and a post-purchase journey that keeps customers using the product until results show and they reorder.' },
      { q: 'Can a shampoo claim to stop hair loss in the US?', a: 'Generally not as a cosmetic. Claims to stop hair loss or regrow hair are drug claims under US rules, and approved OTC regrowth products follow strict labeling. A cosmetic shampoo can describe fuller-looking hair or less breakage. Your regulatory adviser should review hair-loss wording before it appears anywhere.' },
      { q: 'How do you market to curly and coily hair customers?', a: 'With specifics. These shoppers know their ingredients and routines, so pages should state what the product contains, which textures it suits and how to use it on wash day. Creators with the same hair type, real routines and honest reviews carry far more weight than generic model shots.' },
      { q: 'Is Amazon Subscribe & Save worth it for a haircare brand?', a: 'Often, yes, for products people reorder on a schedule, such as shampoo and conditioner. It builds repeat orders inside Amazon. Check the discount you fund against your margin, keep stock steady so subscriptions do not lapse, and make sure your own store offers a comparable subscription.' },
      { q: 'Can we use before-and-after photos in hair ads?', a: 'Sometimes, with care. Meta and Google restrict before-and-after imagery, especially when it implies a health result. Where you use customer photos, keep lighting consistent, avoid editing, say how long the product was used and keep the claim to appearance. Expect some placements to reject them anyway.' },
      { q: 'How much does haircare marketing cost for a US brand?', a: 'We quote in USD after a free audit. The fee depends on how many products and hair types you market, the channels involved, creator program size, content volume and whether marketplace management is included. Ad spend is paid by you directly to each platform, separately from our fee.' },
      { q: 'Can you run our haircare marketing from India?', a: 'Yes. Our team works from Chennai and Bengaluru, and we have no US office. India is 9.5 to 10.5 hours ahead of US Eastern, so we hold calls in your morning and do most work while you sleep, sending a short written note of what changed.' },
    ],
  },

  // ───────────────────────────────────────────── 3. Cosmetics (US)
  {
    slug: 'us/cosmetics-marketing-agency',
    kind: 'industry',
    market: 'US',
    twin: 'industries/cosmetics-marketing-agency',
    title: 'Cosmetics Marketing Agency for US Makeup Brands | Magnus Path',
    description: 'Cosmetics marketing agency for US makeup brands: shade-finding pages, creator launches, TikTok Shop and Amazon growth, and MoCRA- and FTC-aware claims.',
    primaryKeyword: 'cosmetics marketing agency',
    navLabel: 'Cosmetics',
    breadcrumb: usBreadcrumb,
    eyebrow: 'US makeup and cosmetics brands',
    h1: 'Cosmetics Marketing Agency for US Makeup Brands That *Sell on Color*',
    intro: 'Magnus Path is a cosmetics marketing agency for US makeup brands selling foundation, concealer, lip, eye and complexion products online. We build shade-finding pages that work without a tester, plan creator-led launches with proper FTC disclosures, grow sales on Shopify, TikTok Shop and Amazon US, and keep claims in line with FDA rules for cosmetics and color additives. We work remotely from India.',
    icon: 'social',
    facts: ['Shade-finding product pages', 'Creator launches with disclosures', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'What holds US makeup brands back online',
      includes: 'What our cosmetics marketing covers for US brands',
      process: 'How we grow a US makeup brand in *4 steps*',
      guide: 'Marketing makeup in the US: a guide for cosmetics founders',
    },
    pains: [
      { title: 'Shade returns eating the margin', body: 'Shoppers guess between three foundation shades, order two and send one back. Without swatches on real skin tones, returns climb with every launch.' },
      { title: 'Launch buzz that fades in a week', body: 'A new palette trends for a few days on TikTok, then sales drop because there was no plan for restocks, second-wave creators or paid support.' },
      { title: 'Claims that outrun the evidence', body: '“Clean”, “non-comedogenic”, “24-hour wear” and “cruelty-free” appear on packs and in ads with nothing on file to back them up.' },
    ],
    includes: [
      { title: 'Shade finders and swatch libraries', body: 'Swatches on a range of skin tones, undertone guides, a shade-match quiz and comparisons to shades shoppers already know.' },
      { title: 'Launch and drop planning', body: 'Teasers, creator seeding, waitlists, launch-day ads and a restock plan, so a new product keeps selling after its first week.' },
      { title: 'Creator and UGC programs', body: 'Seeding lists, briefs, FTC disclosure wording, affiliate codes and usage rights for makeup creators on TikTok, Instagram and YouTube.' },
      { title: 'TikTok Shop and Amazon US', body: 'Product cards, live shopping sessions and affiliate offers, plus Amazon listings with shade images and Sponsored Brands video.' },
      { title: 'Claims and label check', body: 'Wear-time, finish and skin-feel claims matched to test data, with color additive and labeling questions flagged for your adviser.' },
      { title: 'Gift sets and seasonal campaigns', body: 'Holiday kits, Valentine’s lip sets and Mother’s Day bundles planned with creative and stock well before each peak.' },
    ],
    process: [
      { title: 'Free shade and channel audit', body: 'We review shade pages, returns by shade, creator activity, ads and marketplaces, and share findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'A launch and channel plan with the fee quoted in USD. Ad spend and creator payments stay with you, paid directly.' },
      { title: 'Fix shade pages first', body: 'Swatches, undertone copy and the shade quiz are improved before launch budgets go live.' },
      { title: 'Launch, then the second wave', body: 'Seeding, launch-day content and paid support, followed by fresh creators and restock news to keep demand going.' },
    ],
    platforms: ['Shopify', 'TikTok Shop', 'Meta Ads', 'Google Ads', 'Amazon', 'Instagram', 'YouTube', 'Pinterest'],
    figures: [
      { type: 'mindmap', caption: 'What a foundation shade page should show before a US shopper picks a shade.', after: 1, center: 'A foundation shade page', branches: [
        { label: 'Shade', items: ['Swatches on many skin tones', 'Undertone in plain words', 'Matches to known shades'] },
        { label: 'Finish', items: ['Matte, satin or dewy', 'Coverage level'] },
        { label: 'Wear', items: ['Tested wear time', 'Transfer and oil control'] },
        { label: 'Proof', items: ['Reviews by skin tone', 'Creator videos in daylight'] },
      ] },
      { type: 'steps', caption: 'A creator-led makeup launch that keeps selling after the first week.', after: 2, steps: [
        { title: 'Seed creators', body: 'Product out a few weeks before launch' },
        { title: 'Build a waitlist', body: 'Email and SMS sign-ups with consent' },
        { title: 'Launch day', body: 'Posts, a live session and paid support' },
        { title: 'Second wave', body: 'New creators, new looks, restock news' },
      ] },
    ],
    guide: [
      {
        heading: 'Makeup is bought on color, and color is hard online',
        paragraphs: [
          'Makeup shoppers buy what they can see: the exact shade, the finish and how it wears on skin like theirs. In a store they can swatch a lipstick or test a foundation on their jaw. Online, they rely on photos, videos and other people’s reviews, and when those fall short they either do not buy or buy two shades and return one. For complexion products, shade confidence is the main thing standing between a browser and an order.',
          'A cosmetics marketing agency should treat this as the core problem, not an afterthought. The goal is simple: a shopper with any skin tone should be able to find their shade, see it on someone who looks like them and understand the finish before they pay. Ads, creators and marketplace listings all work harder once that is in place.',
        ],
      },
      {
        heading: 'Shade finding without a tester',
        paragraphs: [
          'Start with swatches on a wide range of real skin tones, shot in the same daylight-balanced lighting so colors can be compared. Label each shade with its undertone, whether warm, cool, neutral or olive, and describe it in plain words. Add a short quiz that asks about shades the shopper already wears, since many US buyers know their match from a department store or a Sephora or Ulta visit and want a translation. Mention another brand only to describe a shade comparison, never in a way that suggests a connection.',
          'Virtual try-on tools can help with lip and eye color, though complexion matching is harder to get right. Whatever you use, track returns by shade. If one shade is returned far more often than its neighbors, the swatch or description is probably misleading, and fixing it is cheaper than any new ad. Reviews help here too: ask reviewers to share their usual shade and undertone, so the next buyer can find someone like them.',
        ],
      },
      {
        heading: 'Creators, launches and FTC disclosure',
        paragraphs: [
          'US makeup launches now start on social video. A typical plan seeds products to creators a few weeks ahead, builds a waitlist, opens with launch-day posts and a live session, and then runs paid ads behind the content that performed. The second wave matters as much as the first: fresh creators, new looks and restock news keep demand going after the novelty fades.',
          'Every gifted or paid post should carry a clear disclosure under the FTC Endorsement Guides, in the video and the caption, not hidden behind “more”. Affiliate codes count as a material connection too. A cosmetics marketing agency should write the disclosure wording into each brief and keep a record of posts, because the FTC expects brands to monitor the creators they work with. If you run creator videos as ads, agree usage rights in writing first.',
        ],
      },
      {
        heading: 'MoCRA, color additives and the claims you print',
        paragraphs: [
          'Makeup is regulated as a cosmetic in the US, and the Modernization of Cosmetics Regulation Act of 2022 (MoCRA) added duties such as facility registration, product listing, safety substantiation and serious adverse event reporting. Color additives have their own FDA rules: they generally need approval for the intended use, and some approved colors are not permitted around the eyes. That matters when a lip product is marketed for eyes and cheeks as well.',
          'Marketing claims sit on top of that. The FTC expects objective claims to be supported before they run. We are not lawyers, so your adviser signs off, but these claims usually need a file behind them:',
        ],
        bullets: [
          'Wear time such as “16-hour” or “transfer-proof”, backed by a wear test',
          '“Non-comedogenic” or “suitable for sensitive skin”, backed by testing',
          '“Cruelty-free” or “vegan”, backed by supplier records and any program whose logo you use',
          '“Clean” or “non-toxic”, defined in words on your site, since neither has a legal definition',
          'Multi-use claims such as “lip and cheek”, matched to the permitted uses of the colors',
        ],
      },
      {
        heading: 'TikTok Shop, Amazon and the retail context',
        paragraphs: [
          'TikTok Shop suits makeup well: a creator can show a shade, a blend and the finished look in under a minute, and the viewer can buy without leaving the app. Live shopping works for launches and gift sets. Amazon US is more search-led, so listings need clear shade images, full ingredient lists and Sponsored Brands video to stand out. Ulta and Sephora shape what shoppers expect from shade ranges, swatches and returns, even if you never sell there.',
          'Your own store should hold the full shade range, bundles, the shade quiz and customer data. Keep prices aligned across channels and plan stock by shade, since running out of your most popular foundation shades can stall a launch faster than weak ads.',
        ],
      },
      {
        heading: 'Seasons, measurement and working with us',
        paragraphs: [
          'The US makeup calendar centers on Black Friday, Cyber Monday and holiday gift sets, then Valentine’s Day for lip products, prom and wedding season in spring, Mother’s Day in May and Prime Day in July. Measure launches beyond day one: sell-through by shade, return rate by shade, repeat purchase of the same product and how creator content performs once it runs as paid ads.',
          'Magnus Path is a team in Chennai, India, with offices in Bengaluru and London and no US office. India is 9.5 to 10.5 hours ahead of US Eastern, so we keep calls to your morning and do most work while you sleep. We quote in USD after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Skincare marketing for US DTC brands', href: '/us/skincare-marketing-agency/' },
      { label: 'Haircare marketing for US hair brands', href: '/us/haircare-marketing-agency/' },
      { label: 'Perfume marketing for US fragrance brands', href: '/us/perfume-marketing-agency/' },
      { label: 'Ecommerce Meta ads agency for US stores', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Amazon account management for US sellers', href: '/us/amazon-account-management/' },
      { label: 'Ecommerce PPC agency for Google Shopping in the US', href: '/us/ecommerce-ppc-agency/' },
      { label: 'Shopify Plus agency for US brands', href: '/us/shopify-plus-agency/' },
      { label: 'Free ROAS calculator for launch campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a cosmetics marketing agency do?', a: 'It plans and runs the online growth of a makeup brand: shade-finding product pages, creator seeding and launches, TikTok, Meta and Google ads, TikTok Shop and Amazon listings, and seasonal gift campaigns. For US brands it also means FTC-compliant creator disclosures and claims that match your test data.' },
      { q: 'How can a makeup brand reduce shade-related returns?', a: 'Show every shade on real skin tones in consistent daylight lighting, state the undertone in plain words, add a quiz that translates shades buyers already wear, and track returns by shade. A shade that comes back far more often than others usually has a misleading swatch or description.' },
      { q: 'Do makeup creators need to disclose gifted products?', a: 'Yes. Under the FTC Endorsement Guides, free products, payment and affiliate codes are all connections that should be disclosed clearly in the post itself. Brands are expected to tell creators this and to monitor posts, so disclosure wording belongs in every seeding brief.' },
      { q: 'Does MoCRA affect how we market makeup?', a: 'Mostly indirectly. MoCRA added registration, product listing, safety substantiation and adverse event reporting duties, and your labels and claims should match what is documented. Color additives also have FDA rules on where they may be used, which matters for multi-use products. Your regulatory adviser should confirm the details.' },
      { q: 'Should a makeup brand launch on TikTok Shop or Amazon first?', a: 'For a new shade-led or visual product, TikTok Shop often gives faster discovery, because creators can show the color and finish. Amazon suits products people already search for, and rewards reviews and steady stock. Many brands launch on their own store and TikTok Shop, then add Amazon once reviews build.' },
      { q: 'Can we call our makeup “clean”?', a: 'You can, but explain it. “Clean” has no legal definition in the US, so define on your site what it means for your brand, such as specific ingredients you leave out, and make sure every product meets that definition. Vague clean or non-toxic claims can mislead buyers and draw FTC attention.' },
      { q: 'How much does cosmetics marketing cost for a US brand?', a: 'We quote in USD after a free audit. The fee depends on the size of the shade range, launch frequency, creator program size, content volume, the channels involved and whether marketplace management is included. Ad spend and creator fees are paid by you directly, separately from our fee.' },
    ],
  },

  // ───────────────────────────────────────────── 4. Ayurveda (US)
  {
    slug: 'us/ayurveda-marketing-agency',
    kind: 'industry',
    market: 'US',
    twin: 'industries/ayurveda-marketing-agency',
    title: 'Ayurveda Marketing Agency for US Wellness Brands | Magnus Path',
    description: 'Ayurveda marketing agency for US wellness brands: careful supplement and cosmetic claims, purity and testing pages, and growth on Amazon US and Shopify.',
    primaryKeyword: 'ayurveda marketing agency',
    navLabel: 'Ayurveda',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Ayurvedic and herbal brands in the US',
    h1: 'Ayurveda Marketing Agency for US Brands That Keep *Claims Careful*',
    intro: 'Magnus Path is an ayurveda marketing agency for brands selling Ayurvedic and herbal products in the US, from ashwagandha and turmeric to triphala, herbal teas, hair oils and skincare. We explain traditional ingredients to mainstream buyers and the Indian diaspora, keep supplement and cosmetic claims within FDA and FTC limits, and grow sales on Shopify and Amazon US as a remote team in India.',
    icon: 'marketplace',
    facts: ['Claims sorted by product type', 'Mainstream and diaspora buyers', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Why Ayurvedic brands struggle in the US market',
      includes: 'What our Ayurveda marketing covers for US brands',
      process: 'How we grow an Ayurvedic brand in the US in *4 steps*',
      guide: 'Marketing Ayurvedic products in the US: a careful guide',
    },
    pains: [
      { title: 'Traditional claims that read as drug claims', body: 'Phrases that sit comfortably in a classical text, such as balancing blood sugar or easing joint pain, can read as disease claims in a US ad.' },
      { title: 'Buyer worry about purity', body: 'US shoppers and journalists know the FDA has warned about heavy metals in some imported Ayurvedic products. Without test results on show, cautious buyers move on.' },
      { title: 'Listings blocked on Amazon', body: 'Supplement listings get suppressed when documents, labels or claims do not match Amazon’s current requirements, and relaunching can take weeks.' },
    ],
    includes: [
      { title: 'Product-type mapping', body: 'Each product sorted as a dietary supplement, cosmetic, food or tea, so claims, labels and ad copy follow the right set of rules.' },
      { title: 'Structure/function copy', body: 'Supplement claims written as structure/function statements with the FDA disclaimer, and disease language removed from pages and ads.' },
      { title: 'Purity and testing pages', body: 'Pages that show third-party lab results for heavy metals and microbes, batch codes and sourcing, in words a cautious buyer can follow.' },
      { title: 'Ingredient education', body: 'Plain explainers on ashwagandha, triphala, brahmi, shatavari and other herbs, separating traditional use from what research supports.' },
      { title: 'Amazon US listings', body: 'Listing content, A+ pages and Sponsored Products for supplements and herbal care, prepared with Amazon’s testing and document checks in mind.' },
      { title: 'Diaspora and mainstream campaigns', body: 'Separate messages for Indian-American buyers who know the herbs and for wellness shoppers meeting them for the first time.' },
    ],
    process: [
      { title: 'Free audit and product map', body: 'We sort your range by product type, review claims, labels, pages and listings, and share findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'A written plan for each audience and channel, with the fee quoted in USD. Ad spend is paid by you directly to each platform.' },
      { title: 'Rewrite claims and trust pages', body: 'Disease language comes out, structure/function and cosmetic wording goes in, and purity pages are built from your lab files.' },
      { title: 'Launch and build repeat buyers', body: 'Search content, Amazon campaigns and paid social go live, with subscriptions and reorder reminders for daily-use products.' },
    ],
    platforms: ['Shopify', 'Amazon', 'Meta Ads', 'Google Ads', 'TikTok Shop', 'Walmart Marketplace', 'YouTube', 'Google Search Console'],
    figures: [
      { type: 'matrix', caption: 'How the same herb can fall under different US rules depending on the product and the claim.', after: 1, cols: ['Taken by mouth', 'Used on skin or hair'], rows: ['Support or appearance', 'Disease claim'], cells: [
        { title: 'Supplement', body: 'Capsules and powders; FDA disclaimer on the label' },
        { title: 'Cosmetic', body: 'Oils and balms; describe look and feel only' },
        { title: 'Drug territory', body: 'Claims to treat or cure a disease; avoid' },
        { title: 'Drug territory', body: 'Claims to heal a skin condition; avoid' },
      ] },
      { type: 'steps', caption: 'A purity trail that lets a cautious US buyer check an Ayurvedic product before buying.', after: 2, steps: [
        { title: 'Test each batch', body: 'Heavy metals and microbes, third-party' },
        { title: 'Print batch codes', body: 'Link each pack to its lab results' },
        { title: 'Publish results', body: 'A page buyers can check themselves' },
        { title: 'Answer it in FAQs', body: 'Address the purity question directly' },
      ] },
    ],
    guide: [
      {
        heading: 'Two US audiences for Ayurvedic products',
        paragraphs: [
          'Ayurvedic brands in the US usually sell to two groups at once. Indian-American and wider South Asian buyers often know the herbs, the classical formulas and the brands from home, and look for familiar names, authentic sourcing and fresh stock on Amazon. Mainstream wellness shoppers know a few ingredients, such as ashwagandha and turmeric, from supplement aisles and social video, but have little sense of Ayurveda as a system.',
          'The two need different messages. Diaspora buyers want to know the formula is genuine and the product is fresh. Mainstream buyers need a simple explanation of what the product is, how to take or use it and why they should trust it. An ayurveda marketing agency should build separate pages, ads and search content for each group, while keeping the underlying facts identical.',
        ],
      },
      {
        heading: 'How US rules treat Ayurvedic products',
        paragraphs: [
          'The US has no separate legal category for Ayurveda. The FDA looks at what a product is and what it claims. Capsules, powders and tonics taken by mouth are usually sold as dietary supplements under DSHEA. Oils, balms and skincare applied to the body are often cosmetics. Teas and some foods fall under food rules. If any of them claims to treat, cure or prevent a disease, it can be treated as an unapproved drug, whatever tradition it comes from.',
          'Dietary supplements may carry structure/function claims, such as supporting a healthy response to everyday stress, as long as the label carries the FDA disclaimer that the statement has not been evaluated by the FDA and the product is not intended to diagnose, treat, cure or prevent any disease. The FTC, for its part, expects health claims in ads to be backed by competent and reliable scientific evidence. We are not lawyers; your regulatory adviser should review claims before anything runs.',
        ],
      },
      {
        heading: 'Heavy metals, testing and earning trust',
        paragraphs: [
          'Purity is the question US buyers raise most. The FDA has warned consumers about lead, mercury and arsenic found in some Ayurvedic products, particularly certain imported ones, and some classical preparations include metals by design. Your marketing cannot ignore this. A shopper researching your brand may find those warnings before they find your site.',
          'The honest answer is evidence. Many brands commission third-party lab testing for heavy metals and microbes on each batch and publish the results in a form buyers can check. California’s Proposition 65 may also require warnings for some substances, so ask your adviser whether it applies to you. On product pages, say what you test for, how often and who does the testing, and avoid words like “pure” or “toxin-free” that you cannot define. Supplements must also be made under the FDA’s current good manufacturing practice rules, so say how yours are made.',
        ],
        bullets: [
          'Show lab results by batch, with the batch code printed on the pack',
          'Name where the key herbs are grown and processed',
          'Describe manufacturing in plain words, without claiming approvals you do not hold',
          'Answer the heavy-metals question directly in your FAQs',
        ],
      },
      {
        heading: 'Turning tradition into ad copy that runs',
        paragraphs: [
          'Classical texts describe herbs in terms of doshas, digestion, vitality and balance. That language is part of the appeal, but ad platforms read copy literally. Meta and Google restrict health claims, and Google limits ads for some supplement ingredients. Copy that promises to lower blood sugar, fix thyroid problems or relieve arthritis is likely to be rejected, and it can also be a disease claim under US rules.',
          'Work from what you can support. Present traditional use as tradition, say what the product is and how to use it, and keep outcomes to permitted structure/function or cosmetic wording. Creators can share personal routines, but they need clear FTC disclosures and should not make claims you could not make yourself. Testimonials about curing an illness are a liability, not proof.',
        ],
      },
      {
        heading: 'Amazon US, Shopify and search',
        paragraphs: [
          'Amazon US is where many diaspora buyers start, and its supplement rules are strict. Amazon has asked supplement sellers for documents such as testing results and label images, and listings that miss them can be suppressed. Read the current category requirements before launch and keep your files ready. Walmart Marketplace has its own approval steps for supplements, so treat it as a second marketplace.',
          'Your Shopify store is where the full story lives: herb explainers, lab results, sourcing, subscriptions for daily supplements and routines such as a morning and evening set. Search matters too. Questions like “what is triphala” or “how to take ashwagandha” are asked constantly on Google and in AI answers, and an ayurveda marketing agency that writes careful, well-sourced pages can earn those visits for years.',
        ],
      },
      {
        heading: 'Seasons, measurement and how we work',
        paragraphs: [
          'Ayurvedic sales follow a wellness calendar more than a gifting one: New Year routines in January, Prime Day and Black Friday deals, cold-season interest in immune support through fall and winter, and Diwali for diaspora buyers, with gift boxes and family orders. Measure subscription retention, reorder rate, review quality and refund reasons, not only first-order return on ad spend.',
          'Magnus Path is based in Chennai, India, with offices in Bengaluru and London and no US office. India is 9.5 to 10.5 hours ahead of US Eastern, so calls fit your morning and most work is done overnight in US time. We quote in USD after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Skincare marketing for US DTC brands', href: '/us/skincare-marketing-agency/' },
      { label: 'Haircare marketing for US hair brands', href: '/us/haircare-marketing-agency/' },
      { label: 'Amazon account management for US supplement sellers', href: '/us/amazon-account-management/' },
      { label: 'Amazon PPC agency for US sellers', href: '/us/amazon-ppc-agency/' },
      { label: 'Shopify SEO for herb and ingredient searches', href: '/us/shopify-seo-agency/' },
      { label: 'Generative engine optimization for AI answers', href: '/us/generative-engine-optimization-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Marketplace profit calculator', href: '/tools/marketplace-profit-calculator/' },
    ],
    faqs: [
      { q: 'What does an ayurveda marketing agency do for US brands?', a: 'It plans and runs online growth for Ayurvedic and herbal brands selling in the US: product pages and herb explainers, claims written for supplement or cosmetic rules, purity and testing pages, Amazon US listings and ads, search content and paid social for both diaspora and mainstream wellness buyers.' },
      { q: 'Are Ayurvedic products regulated as supplements in the US?', a: 'Many are, but not all. There is no Ayurveda category in US law. Products taken by mouth are often dietary supplements, oils and skincare are often cosmetics, and teas may be foods. Any product claiming to treat or cure a disease can be treated as an unapproved drug. Your regulatory adviser should confirm each product.' },
      { q: 'What should an Ayurvedic brand say about heavy metals?', a: 'Address it openly. The FDA has warned about lead, mercury and arsenic in some imported Ayurvedic products, so buyers ask. Test each batch through an independent lab, publish results by batch code, explain how products are made and answer the question in your FAQs rather than hoping nobody raises it.' },
      { q: 'Can we use traditional Ayurvedic claims in US ads?', a: 'Only with care. Traditional language about balance and vitality can work, but claims to treat conditions such as diabetes, arthritis or thyroid problems are disease claims under US rules and are rejected by ad platforms. Keep supplement claims to structure/function wording with the FDA disclaimer and describe tradition as tradition.' },
      { q: 'Why was our Ayurvedic supplement listing suppressed on Amazon?', a: 'Common causes are missing testing or label documents, label images that do not match the listing, ingredients Amazon restricts, or disease claims in the title or bullets. Check the current dietary supplement requirements in Seller Central, fix the claims and resubmit the documents Amazon asks for.' },
      { q: 'Should we target the Indian diaspora or mainstream US buyers?', a: 'Usually both, with separate messages. Diaspora buyers know the herbs and want authenticity and fresh stock. Mainstream buyers need a plain explanation and proof of purity. Many brands start with diaspora demand on Amazon, then build mainstream reach through search content, creators and their own store.' },
      { q: 'How much does Ayurveda marketing cost for a US brand?', a: 'We quote in USD after a free audit. The fee depends on how many products need claims work, the channels involved, content and creative volume, and whether Amazon management is included. Ad spend is paid by you directly to each platform, separately from our fee, and lab testing stays with you.' },
    ],
  },

  // ───────────────────────────────────────────── 5. Perfume (US)
  {
    slug: 'us/perfume-marketing-agency',
    kind: 'industry',
    market: 'US',
    twin: 'industries/perfume-marketing-agency',
    title: 'Perfume Marketing Agency for US Fragrance Brands | Magnus Path',
    description: 'Perfume marketing agency for US fragrance brands: discovery sets, creator scent stories, holiday and Valentine’s plans, and hazmat-aware marketplace growth.',
    primaryKeyword: 'perfume marketing agency',
    navLabel: 'Perfume & fragrance',
    breadcrumb: usBreadcrumb,
    eyebrow: 'US perfume and fragrance brands',
    h1: 'Perfume Marketing Agency for US Brands Selling *Scent Through a Screen*',
    intro: 'Magnus Path is a perfume marketing agency for US fragrance brands selling eau de parfum, body mists, perfume oils and discovery sets online. We describe scents in words and video shoppers trust, build sample-to-full-bottle journeys, plan around the holidays, Valentine’s Day and Mother’s Day, and grow sales on Shopify, TikTok Shop and Amazon US with shipping rules for alcohol-based perfume in mind. We work remotely from India.',
    icon: 'social',
    facts: ['Discovery-set journeys', 'Holiday and gifting plans', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Why fragrance is a hard sell for US online brands',
      includes: 'What our perfume marketing covers for US brands',
      process: 'How we grow a US fragrance brand in *4 steps*',
      guide: 'Selling perfume online in the US: a guide for fragrance brands',
    },
    pains: [
      { title: 'Shoppers cannot smell the product', body: 'A list of notes means little to most buyers. Without mood, occasion and comparisons they understand, they hesitate at the price of a full bottle.' },
      { title: 'Shipping problems on every order', body: 'Alcohol-based perfume counts as a flammable liquid for shipping. The wrong service, missing markings or air routing can delay or block orders.' },
      { title: 'Dupe language that invites trouble', body: 'Inspired-by brands that name designer fragrances in ads and listings risk trademark complaints, takedowns and suspended marketplace accounts.' },
    ],
    includes: [
      { title: 'Scent descriptions that sell', body: 'Notes, mood, occasion, longevity and projection written in plain words, with comparisons shoppers use and no misuse of other brands’ marks.' },
      { title: 'Discovery sets and samples', body: 'Sample and discovery-set offers with a credit toward a full bottle, plus follow-ups timed to when the vials run out.' },
      { title: 'Creator scent stories', body: 'Briefs for fragrance creators on TikTok, Instagram and YouTube, with FTC disclosure wording and written usage rights for ads.' },
      { title: 'Gifting calendar campaigns', body: 'Holiday gift sets, Valentine’s Day, Mother’s Day and Father’s Day plans with creative, stock and shipping cut-offs set early.' },
      { title: 'Marketplace and shipping readiness', body: 'Amazon US and TikTok Shop listings prepared with safety data sheets and hazmat review in mind, plus clear ground-shipping messages at checkout.' },
      { title: 'Paid social and search', body: 'Meta, TikTok and Google campaigns built around scent families and occasions, with discovery sets as the entry offer.' },
    ],
    process: [
      { title: 'Free scent and channel audit', body: 'We review product pages, sampling, creators, ads, listings and shipping setup, and go through findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'A written plan built around your gifting calendar, with the fee quoted in USD. Ad spend is paid by you directly to each platform.' },
      { title: 'Rewrite scents and set sampling', body: 'Scent descriptions, discovery-set offers and follow-up journeys are fixed before paid campaigns scale.' },
      { title: 'Run the seasons', body: 'Campaigns for each gifting peak, with creators, ads and stock planned weeks ahead and reviewed after every season.' },
    ],
    platforms: ['Shopify', 'TikTok Shop', 'Meta Ads', 'Google Ads', 'Amazon', 'Instagram', 'YouTube', 'Pinterest'],
    figures: [
      { type: 'mindmap', caption: 'Four ways to describe one fragrance so a US shopper can picture it without smelling it.', after: 1, center: 'Describing one scent', branches: [
        { label: 'Notes', items: ['Top, heart and base', 'Key ingredients'] },
        { label: 'Mood', items: ['Fresh, warm or sensual', 'Quiet or bold'] },
        { label: 'Occasion', items: ['Office, evening, weekend', 'The season it suits'] },
        { label: 'Performance', items: ['Typical longevity', 'How far it projects'] },
      ] },
      { type: 'steps', caption: 'Getting alcohol-based perfume ready to ship and list in the US. Confirm details with your carrier.', after: 3, steps: [
        { title: 'Check the SDS', body: 'Flash point and alcohol content' },
        { title: 'Pick the service', body: 'Ground shipping, limited-quantity marks' },
        { title: 'Hazmat review', body: 'Amazon dangerous goods check' },
        { title: 'Set checkout rules', body: 'Flag addresses ground cannot reach' },
      ] },
    ],
    guide: [
      {
        heading: 'Selling fragrance when nobody can smell it',
        paragraphs: [
          'Perfume is the hardest beauty category to sell online because the product is invisible. A shopper scrolling on a phone cannot sample the opening or wait to see how the dry-down settles. They rely on words, video, reviews and other people’s reactions, and they hesitate before paying for a full bottle of something they have never smelled.',
          'US buyers have learned workarounds. Many watch fragrance creators review scents on TikTok and YouTube, read community reviews and compare new launches with designer scents they already know from department stores, Sephora or Ulta. A perfume marketing agency should work with these habits: give buyers the vocabulary, the comparisons and a low-risk way to try before committing.',
        ],
      },
      {
        heading: 'Describing a scent so people can picture it',
        paragraphs: [
          'Notes alone rarely sell. “Bergamot, iris, sandalwood” means something to collectors and almost nothing to a casual buyer. Pair the notes with a scent family, a mood, a season and an occasion: a clean citrus-woody scent for warm office days, or a rich vanilla amber for winter evenings. Add honest performance details, such as typical longevity and how strongly the scent projects.',
          'Video helps more than still images. A creator describing the first spray, the change after an hour and the reactions they got gives shoppers something to hold on to. Collect reviews that mention occasions and longevity and show them on product pages. If you sell perfume oils or alcohol-free formats, explain how they wear differently from sprays.',
        ],
      },
      {
        heading: 'Discovery sets and the path to a full bottle',
        paragraphs: [
          'The most reliable route to a full-bottle sale is a small, paid first step. Discovery sets of several vials let shoppers wear each scent for a few days and find one they like. Offering a credit toward a full bottle makes the next step easy, and charging something for the set filters out people who only want freebies.',
          'The journey after the sample is what makes it pay. Send wearing tips on day one, ask which scent they liked near the end of the set and offer the full bottle of that scent with the credit applied. Track the share of discovery-set buyers who buy a full bottle within a couple of months, by set and by channel. That number tells you where to spend on acquisition.',
        ],
      },
      {
        heading: 'Shipping alcohol-based perfume in the US',
        paragraphs: [
          'Most perfumes contain enough alcohol to count as flammable liquids for shipping, which makes them hazardous materials, or hazmat, under US transport rules. In practice, many brands ship by ground under limited-quantity provisions with the required markings, and avoid air services that restrict flammable liquids. USPS, UPS and FedEx each set their own requirements, and these change, so confirm current rules with your carrier and fulfillment provider.',
          'Marketplaces add their own checks. Amazon reviews many fragrance listings as dangerous goods and may ask for a safety data sheet before stock can enter its fulfillment network, so build that into launch dates. Tell customers at checkout if some addresses, such as Alaska, Hawaii or military mail, cannot be reached or need slower shipping. We are not shipping or legal advisers; your logistics partner should confirm the details.',
        ],
      },
      {
        heading: 'Gifting seasons and creator content',
        paragraphs: [
          'Fragrance is a gift category, so the calendar sets the budget. The holiday season from Black Friday through December is the largest peak, followed by Valentine’s Day, Mother’s Day in May and Father’s Day in June, with Prime Day in July for marketplace sellers. Each needs gift sets, packaging shots and shipping cut-off dates planned weeks ahead, because ground-only shipping takes longer in the holiday rush.',
          'Creators carry much of the discovery. Brief them on the scent story and the occasion rather than scripted claims, and require clear FTC disclosures for gifted, paid or affiliate posts. Reuse strong videos as ads once usage rights are agreed in writing. A perfume marketing agency should also plan the gap between peaks, when discovery sets and creator content keep new buyers coming.',
          'Gift buyers behave differently from self-purchasers. They often know the recipient’s taste only roughly, so gift guides by personality or occasion, an easy exchange policy for unopened bottles and a gift receipt option all reduce hesitation. A digital gift card or a discovery set with a full-bottle credit works well for last-minute shoppers who have missed the ground-shipping cut-off.',
        ],
      },
      {
        heading: 'Inspired-by scents, measurement and how we work',
        paragraphs: [
          'Inspired-by and dupe brands are popular, but naming a designer fragrance in ads, keywords or listing titles can lead to trademark complaints, takedowns and account problems. Many brands describe the scent profile instead and let shoppers draw the comparison. Fragrance is regulated as a cosmetic, and MoCRA directs the FDA to set fragrance allergen labeling rules, so watch for updates. Track sample-to-bottle rate, repeat purchase, returns, damage in transit and profit by season. Compare these numbers between gifting peaks and quieter months, because a scent that sells mainly as a gift needs a different budget plan from one that customers rebuy for themselves.',
          'Magnus Path is a team in Chennai, India, with offices in Bengaluru and London and no US office. India runs 9.5 to 10.5 hours ahead of US Eastern, so calls fit your morning and work continues while you sleep. We quote in USD after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Cosmetics marketing for US makeup brands', href: '/us/cosmetics-marketing-agency/' },
      { label: 'Jewelry marketing for US gifting brands', href: '/us/jewelry-marketing-agency/' },
      { label: 'Skincare marketing for US DTC brands', href: '/us/skincare-marketing-agency/' },
      { label: 'Ecommerce Meta ads agency for US stores', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Amazon account management for US sellers', href: '/us/amazon-account-management/' },
      { label: 'Ecommerce PPC agency for Google Shopping in the US', href: '/us/ecommerce-ppc-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Free shipping threshold calculator', href: '/tools/free-shipping-threshold-calculator/' },
    ],
    faqs: [
      { q: 'What does a perfume marketing agency do?', a: 'It plans and runs the online growth of a fragrance brand: scent descriptions people can picture, discovery sets and sample follow-ups, creator content, Meta, TikTok and Google ads, marketplace listings and gifting campaigns. For US brands it also means planning around hazmat shipping rules and FTC disclosure rules for creators.' },
      { q: 'How can a fragrance brand sell when customers cannot smell it?', a: 'Replace the tester with description, video and sampling. Pair notes with mood, season and occasion, show creators reacting to the scent over time, collect reviews that mention longevity, and offer a paid discovery set with a credit toward a full bottle, so trying is low risk.' },
      { q: 'Is perfume hazmat for shipping in the US?', a: 'Most alcohol-based perfumes are treated as flammable liquids, which makes them hazmat for shipping. Many brands ship by ground under limited-quantity rules with the right markings and avoid air services. Carrier rules differ and change, so confirm with USPS, UPS or FedEx and your fulfillment provider before launch.' },
      { q: 'Can we mention designer fragrances in our ads?', a: 'Be careful. Using another brand’s trademarked name in ad copy, keywords or listing titles can lead to complaints, takedowns and account issues, especially on Amazon. Describing the scent profile and letting buyers compare is safer. Have a trademark lawyer review any comparative wording you plan to use.' },
      { q: 'Are discovery sets worth it for a US perfume brand?', a: 'Usually, if they lead somewhere. A paid set of several vials lowers the risk of a first order and shows you which scents people prefer. Follow up near the end of the set, offer the favorite scent as a full bottle with a credit, and track how many set buyers convert.' },
      { q: 'When should a fragrance brand plan holiday campaigns?', a: 'Start in late summer. Gift sets, packaging photography, creator briefs and stock need to be ready before Black Friday, and ground-only shipping means earlier cut-off dates than other categories. Plan Valentine’s Day and Mother’s Day the same way, a couple of months before each date.' },
      { q: 'How much does perfume marketing cost for a US brand?', a: 'We quote in USD after a free audit. The fee depends on the number of scents, sampling and creator programs, content volume, the channels involved and whether marketplace management is included. Ad spend is paid by you directly to each platform, separately from our fee.' },
    ],
  },

  // ───────────────────────────────────────────── 6. Jewelry (US)
  {
    slug: 'us/jewelry-marketing-agency',
    kind: 'industry',
    market: 'US',
    twin: 'industries/jewellery-marketing-agency',
    title: 'Jewelry Marketing Agency for US Online Brands | Magnus Path',
    description: 'Jewelry marketing agency for US brands: FTC-aware metal and stone copy, clear lab-grown disclosure, Google Shopping, Etsy and Amazon, and gifting season plans.',
    primaryKeyword: 'jewelry marketing agency',
    navLabel: 'Jewelry',
    breadcrumb: usBreadcrumb,
    eyebrow: 'Fine, demi-fine, lab-grown and fashion jewelry',
    h1: 'Jewelry Marketing Agency for US Brands Selling *Metal, Stones and Meaning*',
    intro: 'Magnus Path is a jewelry marketing agency for US brands selling fine, demi-fine, lab-grown and fashion jewelry online. We write product pages and ads that describe metals and stones the way the FTC Jewelry Guides expect, make lab-grown disclosure clear, plan for Valentine’s Day, Mother’s Day and the holidays, and grow sales on Shopify, Google Shopping, Etsy and Amazon US. We work remotely from India.',
    icon: 'website',
    facts: ['Metal and stone wording checked', 'Lab-grown clearly disclosed', 'Quoted in USD after a free audit'],
    headings: {
      pains: 'Why US shoppers hesitate before buying jewelry online',
      includes: 'What our jewelry marketing covers for US brands',
      process: 'How we grow a US jewelry brand in *4 steps*',
      guide: 'Marketing jewelry online in the US: a guide for brand owners',
    },
    pains: [
      { title: 'Vague metal descriptions', body: '“Gold” on a plated piece or “sterling” on a mixed alloy leads to complaints and returns, and it is the kind of wording the FTC Jewelry Guides warn against.' },
      { title: 'Lab-grown and mined blurred', body: 'Copy that calls lab-grown stones “real” or hides the origin in the fine print confuses buyers and risks misleading-advertising problems.' },
      { title: 'High-value orders that never close', body: 'Engagement rings and fine pieces get browsed for weeks. Without proof of quality, clear returns and follow-up, shoppers buy in a store instead.' },
    ],
    includes: [
      { title: 'Product pages that answer metal questions', body: 'Karat, plating and base metal, stone origin, treatments, dimensions and care, written to match exactly how each piece is made.' },
      { title: 'Lab-grown and gemstone disclosure', body: 'Clear “laboratory-grown” wording beside every stone mention, and treatment disclosures for gemstones, in titles, pages, feeds and ads.' },
      { title: 'Photography and video direction', body: 'Shot lists for scale on hand and neck, sparkle in natural light, clasp close-ups and 360-degree views that cut size-related returns.' },
      { title: 'Google Shopping and search', body: 'A product feed with metal, stone and size attributes, Shopping and Performance Max campaigns, and search ads for high-intent terms.' },
      { title: 'Etsy, Amazon US and TikTok Shop', body: 'Listings for handmade, personalized and fashion pieces on Etsy, Amazon and TikTok Shop, kept consistent with your own store.' },
      { title: 'Gifting and engagement calendars', body: 'Valentine’s Day, Mother’s Day, holiday and proposal-season campaigns with engraving, shipping and return cut-offs planned early.' },
    ],
    process: [
      { title: 'Free audit of pages and feeds', body: 'We check product wording against how pieces are made, review your feed, ads and marketplaces, and share findings on a call in your morning.' },
      { title: 'Plan and USD quote', body: 'A written plan around your gifting calendar, with the fee quoted in USD. Ad spend is paid by you directly to Google, Meta or the marketplace.' },
      { title: 'Fix wording, photos and feed', body: 'Metal and stone descriptions, lab-grown disclosure, photo gaps and feed attributes are fixed before budgets rise.' },
      { title: 'Run the gifting seasons', body: 'Shopping, social and marketplace campaigns for each peak, with returns and revenue after refunds reviewed every month.' },
    ],
    platforms: ['Shopify', 'Google Ads', 'Google Merchant Center', 'Meta Ads', 'Etsy', 'Amazon', 'TikTok Shop', 'Pinterest'],
    figures: [
      { type: 'venn', caption: 'Mined and lab-grown diamonds share the same grading language; the origin must be stated clearly.', after: 2,
        left: { title: 'Mined diamond', body: 'Formed in the earth; sourcing story matters' },
        right: { title: 'Lab-grown diamond', body: 'Grown in a lab; say so beside the word diamond' },
        overlap: 'Same 4Cs, same grading reports' },
      { type: 'steps', caption: 'The US jewelry gifting calendar, with engraving and shipping cut-offs set before each peak.', after: 5, steps: [
        { title: 'Holiday peak', body: 'Black Friday to Christmas, and proposals' },
        { title: 'Valentine’s Day', body: 'Gifts and pieces for couples' },
        { title: 'Mother’s Day', body: 'Birthstones and name jewelry in May' },
        { title: 'Graduation', body: 'Spring gifts and first fine pieces' },
        { title: 'Wedding season', body: 'Bands and bridal party gifts in summer' },
      ] },
    ],
    guide: [
      {
        heading: 'Jewelry is bought on trust and detail',
        paragraphs: [
          'Jewelry asks a buyer to pay for something they cannot touch, weigh or see in daylight before ordering. Is the gold solid or plated? Will the chain tarnish? How big is the stone on a real hand? Is the diamond mined or lab-grown? Shoppers ask these questions whether or not your product page answers them, and if it does not, they buy from a brand that does or wait until they can visit a store.',
          'A jewelry marketing agency should start with those answers. Clear metal and stone descriptions, photos that show true scale and color, honest care instructions and a visible returns policy do more for conversion than any single campaign. Once pages carry that detail, ads, creators and marketplaces have something solid to send traffic to.',
        ],
      },
      {
        heading: 'The FTC Jewelry Guides in plain words',
        paragraphs: [
          'The FTC’s Guides for the Jewelry, Precious Metals, and Pewter Industries, usually called the Jewelry Guides, explain how to describe metals and stones without misleading buyers. They are guidance rather than a rulebook, but the FTC refers to them when it looks at deceptive advertising, so most US jewelers follow them closely. We are not lawyers, and your adviser should review your wording, but the main points for copy are these:',
          'Product titles, ads and marketplace listings count as much as the product page. A short title in a Google Shopping ad must be just as accurate as the full description.',
        ],
        bullets: [
          'Describe gold by karat, such as 14K, and do not call a plated or filled piece simply “gold”',
          'Use “gold plated”, “gold filled” and “vermeil” only for pieces that meet those meanings',
          'Call silver “sterling” only when it meets the 925 standard',
          'Disclose gemstone treatments, such as heating or filling, when they affect value or care',
          'Do not use “natural”, “genuine” or “real” in a way that suggests a lab-grown stone was mined',
        ],
      },
      {
        heading: 'Lab-grown diamonds and clear disclosure',
        paragraphs: [
          'Lab-grown diamonds have the same chemistry as mined ones, and many US buyers choose them knowingly for cost and sourcing reasons. The FTC expects the origin to be disclosed clearly, with words such as “laboratory-grown”, “laboratory-created” or the maker’s name followed by “created”, placed close to the word diamond so no buyer could think the stone was mined.',
          'Good disclosure is also good marketing. Lab-grown buyers want to compare carat, cut, color and clarity, see the grading report from an independent lab and understand resale expectations. Mined-diamond buyers want sourcing information. Write for both groups, keep the word lab-grown visible in titles and ads, and never let a creator call a lab stone “natural”.',
        ],
      },
      {
        heading: 'Photography, video and size confidence',
        paragraphs: [
          'Most jewelry returns come from a gap between the photo and the piece: smaller than expected, a different tone of gold, a stone that looked brighter online. Show every piece on a hand, ear or neck for scale, with dimensions in inches and millimeters. Use natural light as well as studio light, add a short video that shows movement and sparkle, and photograph clasps and backs.',
          'For rings, offer a printable sizer or a sizing tool and say how resizing works. State materials that matter for sensitive skin, such as nickel content, only when testing supports the claim. If you sell children’s jewelry, federal lead limits for children’s products apply and some states also restrict cadmium, so confirm testing before advertising to parents.',
        ],
      },
      {
        heading: 'Google Shopping, Etsy, Amazon and TikTok Shop',
        paragraphs: [
          'Jewelry search is visual and specific, so Google Shopping and Performance Max usually lead paid acquisition. The feed needs accurate metal, stone, color and size attributes and clean images. Search ads work for high-intent terms such as a ring style plus a metal. Etsy suits handmade, personalized and name jewelry, Amazon US suits gifting and fashion pieces with strong reviews, and TikTok Shop and Pinterest help with discovery and styling ideas.',
          'Keep descriptions identical across channels, since a marketplace title that says “gold” when the page says “gold plated” is still a misleading claim. High-value orders need extra care: signature on delivery, shipping insurance and fraud checks on unusual orders. A jewelry marketing agency should check all of this before scaling spend.',
          'High-consideration pieces need follow-up. A shopper who views an engagement ring three times over two weeks is still deciding, so retargeting with close-up video, the grading report and your return terms helps more than a discount. Offer a video consultation where you can, and make financing options visible if you offer them, since many buyers want to know the monthly cost before they commit.',
        ],
      },
      {
        heading: 'Seasons, measurement and how we work',
        paragraphs: [
          'The US jewelry calendar is crowded: the holiday season from Black Friday to Christmas, which is also when many proposals happen, then Valentine’s Day, Mother’s Day in May, and graduation and wedding season through spring and summer. Plan engraving and shipping cut-offs early. Measure revenue after returns, return rate by product, average order value, time from first visit to purchase and repeat buying for later gifting occasions.',
          'Magnus Path is a team in Chennai, India, with offices in Bengaluru and London and no US office. India is 9.5 to 10.5 hours ahead of US Eastern, so calls fit your morning and most work happens while you sleep. We quote in USD after a free audit.',
        ],
      },
    ],
    related: [
      { label: 'Perfume marketing for US fragrance brands', href: '/us/perfume-marketing-agency/' },
      { label: 'Cosmetics marketing for US makeup brands', href: '/us/cosmetics-marketing-agency/' },
      { label: 'Ecommerce PPC agency for Google Shopping in the US', href: '/us/ecommerce-ppc-agency/' },
      { label: 'Ecommerce Meta ads agency for US stores', href: '/us/ecommerce-meta-ads-agency/' },
      { label: 'Shopify Plus agency for US brands', href: '/us/shopify-plus-agency/' },
      { label: 'Shopify SEO for jewelry collections', href: '/us/shopify-seo-agency/' },
      { label: 'Ecommerce marketing agency for US brands', href: '/us/ecommerce-marketing-agency/' },
      { label: 'Free ROAS calculator for Shopping campaigns', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a jewelry marketing agency do?', a: 'It plans and runs online growth for a jewelry brand: product pages with accurate metal and stone wording, photography and video direction, Google Shopping and search, Meta and TikTok ads, Etsy and Amazon listings, and gifting-season campaigns. For US brands it also means following the FTC Jewelry Guides in every description.' },
      { q: 'What are the FTC Jewelry Guides?', a: 'They are the FTC’s guidance on describing jewelry, precious metals and gemstones without misleading buyers. They cover karat gold, plated and filled pieces, sterling silver, gemstone treatments and lab-grown stones. They are not a statute, but the FTC uses them when it reviews jewelry advertising, so follow them closely.' },
      { q: 'How should we describe lab-grown diamonds?', a: 'State the origin clearly and close to the word diamond, using terms such as “laboratory-grown” or “laboratory-created”. Do not call them “natural” or imply they were mined. Keep the disclosure in titles, ads, feeds and creator content, not only on the product page, and share the independent grading report.' },
      { q: 'Can we call gold-plated jewelry “gold”?', a: 'Not on its own. The FTC Jewelry Guides expect plated, filled and vermeil pieces to be described as such, and solid gold to be described by karat. Calling a plated piece “gold” in a title, ad or listing can mislead buyers, even if the full description is accurate.' },
      { q: 'Is Etsy or Amazon better for a jewelry brand?', a: 'They suit different pieces. Etsy fits handmade, personalized and name jewelry, and buyers there expect a maker’s story. Amazon US fits gifting and fashion jewelry with strong reviews and fast delivery. Fine jewelry usually sells better on your own store, supported by Google Shopping and search.' },
      { q: 'How can an online jewelry brand reduce returns?', a: 'Show scale and true color. Photograph pieces on hands, ears and necks, give dimensions in inches and millimeters, use natural light and short videos, offer a ring sizer and describe metals exactly. Then track returns by product to find the listings that set the wrong expectations.' },
      { q: 'How much does jewelry marketing cost for a US brand?', a: 'We quote in USD after a free audit. The fee depends on catalog size, how much product wording and feed work is needed, photography direction, the channels involved and whether marketplace management is included. Ad spend is paid by you directly to Google, Meta or the marketplace, separately from our fee.' },
    ],
  },
];
