import type { ServicePageData } from '../../data/types';

const auBreadcrumb = [{ label: 'Australia', href: '/australia/ecommerce-marketing-agency/' }];

const auHub = { label: 'Ecommerce marketing agency for Australian brands', href: '/australia/ecommerce-marketing-agency/' };
const auSkincare = { label: 'Skincare marketing for Australian beauty brands', href: '/australia/skincare-marketing-agency/' };
const auHaircare = { label: 'Haircare marketing for Australian hair brands', href: '/australia/haircare-marketing-agency/' };
const auCosmetics = { label: 'Cosmetics and makeup marketing in Australia', href: '/australia/cosmetics-marketing-agency/' };
const auAyurveda = { label: 'Ayurveda and herbal brand marketing in Australia', href: '/australia/ayurveda-marketing-agency/' };
const auPerfume = { label: 'Perfume and fragrance marketing in Australia', href: '/australia/perfume-marketing-agency/' };
const auJewellery = { label: 'Jewellery marketing for Australian brands', href: '/australia/jewellery-marketing-agency/' };

export const auIndustryBeautyPages: ServicePageData[] = [
  // ───────────────────────────────────────────── 1. Skincare (Australia)
  {
    slug: 'australia/skincare-marketing-agency',
    kind: 'industry',
    market: 'AU',
    twin: 'industries/skincare-marketing-agency',
    title: 'Skincare Marketing Agency Australia: SPF & Actives',
    description: 'Skincare marketing agency for Australian brands: ingredient-led pages, TGA-aware SPF copy, minis that lead to reorders, and Amazon AU and TikTok Shop growth.',
    primaryKeyword: 'skincare marketing agency',
    navLabel: 'Skincare Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Skincare and SPF brands in Australia',
    h1: 'A Skincare Marketing Agency for Australian Brands, from *SPF to Serums*',
    intro: 'Billion Ecommerce Agency is a skincare marketing agency for Australian brands selling serums, cleansers, moisturisers and SPF products online. We write ingredient pages for shoppers who read the back of the pack, keep sunscreen and skin claims within TGA, consumer law and platform limits, turn minis into full-size orders, and grow sales on your store, Amazon AU and TikTok Shop. We work remotely and quote in AUD.',
    icon: 'social',
    facts: ['Sunscreen and claims checked', 'Store, Amazon AU and TikTok Shop', 'Remote team, AUD quotes'],
    headings: {
      pains: 'What holds Australian skincare brands back online',
      includes: 'Skincare marketing for Australian brands: what we handle',
      process: 'Growing an Australian skincare brand in *4 steps*',
      guide: 'Skincare marketing in Australia: a guide for brand owners',
    },
    pains: [
      { title: 'Shelves full of the same actives', body: 'An Australian shopper can pick up niacinamide or vitamin C at a chemist, a supermarket or a big beauty retailer within minutes of home. Unless your page shows what is different about your formula, the familiar bottle on the shelf wins.' },
      { title: 'SPF copy written like moisturiser copy', body: 'Many sunscreens are therapeutic goods in Australia, not ordinary cosmetics. Brands that write SPF ads like any other skincare ad can end up with claims their product is not allowed to make.' },
      { title: 'Summer rush, winter silence', body: 'Sales jump when the weather warms and gifting season starts, then fall away. Without refill reminders and routine bundles, most first-time buyers never come back for a second bottle.' },
    ],
    includes: [
      { title: 'Ingredient-led product pages', body: 'Each active with its strength, the skin types it suits, where it sits in a routine and what not to pair it with, written for Australians who compare labels before buying.' },
      { title: 'Claims and evidence check', body: 'Every claim on pages, ads, listings and creator briefs matched to the testing you hold, with anything that sounds therapeutic flagged for your regulatory adviser.' },
      { title: 'Sunscreen and SPF messaging', body: 'Copy for primary sunscreens and SPF moisturisers that follows how each product is regulated, with SPF and water resistance stated only as tested and labelled.' },
      { title: 'Meta, TikTok and Google ads', body: 'Texture and routine creative for Reels and TikTok, plus Google Shopping with GST-inclusive AUD prices that match your store.' },
      { title: 'Minis that lead to full size', body: 'Paid trial kits followed by usage tips, a check-in before the mini runs out and a credit towards the full-size bottle.' },
      { title: 'Amazon AU and TikTok Shop', body: 'Listings, A+ content and sponsored ads on Amazon.com.au, and shoppable video on TikTok Shop, priced in line with your own store.' },
      { title: 'Reorders and peak planning', body: 'Refill reminders timed to bottle life, routine bundles and offers planned for Click Frenzy, Black Friday, Christmas and Mother’s Day.' },
    ],
    process: [
      { title: 'Free audit and claims map', body: 'With read-only access we review your store, ads and listings, then map each product claim to the evidence behind it and talk it through on a video call in your afternoon.' },
      { title: 'Written plan and AUD quote', body: 'A plan for pages, channels, sampling and targets, with our management fee quoted in AUD. Ad spend goes straight from your account to each platform.' },
      { title: 'Pages first, then traffic', body: 'Hero product pages and routine guides are rebuilt before ads, sampling and marketplace work are scaled up around them.' },
      { title: 'Judge it on reorders', body: 'Monthly reporting on acquisition cost, mini-to-full-size rate and repeat orders by product, with budget moved to what people buy again.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads', 'TikTok Shop', 'Google Ads', 'Amazon AU', 'Afterpay', 'GA4'],
    figures: [
      { type: 'matrix', caption: 'A rough guide to SPF products in Australia. Your adviser confirms how each product is regulated.', after: 2, cols: ['Primary sunscreen', 'Secondary SPF product'], rows: ['What it usually is', 'What the copy needs'], cells: [
        { title: 'Sun protection', body: 'Main job is SPF; usually a therapeutic good on the ARTG' },
        { title: 'Skincare first', body: 'Moisturiser or makeup with SPF; may be a cosmetic, within limits' },
        { title: 'Match the label', body: 'SPF and water resistance only as tested and approved' },
        { title: 'Lead on skincare', body: 'Sell the texture and routine; state SPF only as tested' },
      ] },
      { type: 'steps', caption: 'How a paid mini should lead to a second full-size order.', after: 4, steps: [
        { title: 'Paid mini', body: 'A small trial kit, not a free giveaway' },
        { title: 'Early tips', body: 'How to fit it into a routine' },
        { title: 'Check-in', body: 'A message before the mini runs out' },
        { title: 'Credit back', body: 'Trial cost off the full-size bottle' },
        { title: 'Refill reminder', body: 'Timed to how long a bottle lasts' },
      ] },
    ],
    guide: [
      {
        heading: 'How Australians shop for skincare now',
        paragraphs: [
          'Australian skincare buyers are well informed. Many search by ingredient first, compare strengths and read reviews before they look at the brand name. They can also walk into a chemist, a supermarket or a beauty retailer such as Mecca, Sephora or Priceline and pick up a familiar product the same afternoon. An independent label selling online has to give them a reason to wait for a parcel.',
          'That reason is usually detail: a clearer explanation of the formula, an honest note on texture and finish, the testing behind the product, or a routine that suits the climate the buyer lives in. A dry Canberra winter and a humid Brisbane summer call for different products, and shoppers notice when a brand understands that.',
        ],
      },
      {
        heading: 'What a skincare marketing agency should do for an Australian brand',
        paragraphs: [
          'A skincare marketing agency should start with your products and your evidence, not with an ad budget. It needs to know which actives you sell, what testing you hold, which products are cosmetics and which may be therapeutic goods, and which phrases will get an ad or listing rejected. Only then is it worth paying for traffic.',
          'The work covers four parts that depend on each other: product pages and routine content that answer a careful buyer’s questions, ads that stay inside platform and Australian advertising rules, a sampling plan that leads to full-size orders, and marketplace growth on Amazon AU and TikTok Shop. A skincare marketing agency that runs ads without fixing pages, or builds pages without a plan for reorders, leaves money on the table.',
        ],
      },
      {
        heading: 'Sunscreens, SPF claims and the TGA',
        paragraphs: [
          'Sunscreen is where Australian skincare differs most from other markets. In general, products whose main purpose is sun protection are therapeutic goods regulated by the Therapeutic Goods Administration (TGA), and they need to be included on the Australian Register of Therapeutic Goods (ARTG) before they are supplied. Some moisturisers, tinted products and makeup with SPF can instead be treated as cosmetics, but only within set conditions. Which group a product sits in shapes its label, its claims and how it can be advertised.',
          'Therapeutic goods also have their own advertising code, with limits on testimonials and on references to serious conditions. We are not regulatory advisers, so we ask you or your sponsor to confirm each product’s status, and we write the copy to match it.',
        ],
        bullets: [
          'State SPF and water resistance exactly as the product is tested and labelled',
          'Avoid phrases such as “blocks all UV” or “all-day protection” that overstate performance',
          'Keep reapplication advice from the label visible on product pages and in ads',
          'Check creator content for SPF products, as testimonials for therapeutic goods are restricted',
        ],
      },
      {
        heading: 'Cosmetic claims, labels and the Australian Consumer Law',
        paragraphs: [
          'For cosmetic skincare, the ACCC and the Australian Consumer Law are the main reference points. Claims must not mislead, whether they sit in an ad, on a product page, in a promoted review or in a creator’s video. “Clinically proven”, “dermatologist tested” or “visible results in a week” all need evidence that supports the exact wording. Claims about treating acne, eczema or rosacea can push a product towards therapeutic territory, so we describe what a product does for the look and feel of skin instead.',
          'Ads are also judged against the AANA codes, with complaints heard by Ad Standards, and Meta and TikTok apply their own rules on personal attributes and before-and-after images. Labels matter as well: a mandatory information standard requires most cosmetics sold in Australia to list their ingredients, and businesses that import cosmetics or cosmetic ingredients may need to register with AICIS, the national industrial chemicals scheme. This is general information, not legal advice.',
        ],
      },
      {
        heading: 'Sampling, reorders and the Australian calendar',
        paragraphs: [
          'Skincare is hard to buy blind, and a reaction is a real worry for people with sensitive skin. Small paid minis lower that risk without filling your list with freebie hunters. What turns a mini into a customer is the follow-up: usage tips in the first days, a check-in before it runs out and a credit towards the full size. Measure the mini-to-full-size rate by product and by channel, and move budget to the kits that convert.',
          'Plan the year around Australian dates. Sunscreen and lightweight textures lift as summer arrives; gift sets sell around Valentine’s Day, Mother’s Day in May, Click Frenzy, Black Friday and Christmas; and EOFY sales in June suit clearing older stock. Afterpay and other buy now, pay later options are familiar here, so showing them on routine bundles is worth testing.',
        ],
      },
      {
        heading: 'Your store, Amazon AU and TikTok Shop',
        paragraphs: [
          'Amazon.com.au is a regular stop for buyers who want quick delivery and plenty of reviews in one place, and TikTok Shop suits products that look good on camera, such as textures, swatches and routines. eBay AU can move older lines, though they rarely build a brand. Each listing needs the same ingredient detail as your own page, with GST-inclusive AUD prices that do not undercut your store.',
          'Your website remains the home of routines, bundles, subscriptions and customer data. Wider retail ranging can come later, and a strong direct channel is useful evidence of demand when that conversation starts.',
        ],
      },
      {
        heading: 'Working with a remote team in India',
        paragraphs: [
          'Billion Ecommerce Agency has no office in Australia. Our team works remotely from India, with the head office in Chennai and a second team in Bengaluru. Sydney and Melbourne are 4.5 hours ahead of India in winter and 5.5 hours ahead during daylight saving, and Perth is 2.5 hours ahead, so calls fall in your afternoon and work carries on while you sleep. As a skincare marketing agency, we quote in AUD after a free audit, and your ad accounts stay in your name.',
        ],
      },
    ],
    related: [
      auHaircare,
      auCosmetics,
      auAyurveda,
      { label: 'Ecommerce Meta ads for Australian online stores', href: '/australia/ecommerce-meta-ads-agency/' },
      { label: 'Shopify agency for Australian beauty stores', href: '/australia/shopify-agency/' },
      { label: 'Ecommerce SEO for ingredient searches in Australia', href: '/australia/ecommerce-seo/' },
      auHub,
      { label: 'LTV to CAC calculator for repeat skincare buyers', href: '/tools/ltv-cac-calculator/' },
    ],
    faqs: [
      { q: 'What does a skincare marketing agency do for Australian brands?', a: 'It plans and runs the marketing that sells skincare online in Australia: ingredient and routine pages, claims checks, Meta, TikTok and Google ads, sampling programmes, reviews, and listings on Amazon AU and TikTok Shop. The aim is first orders that become regular reorders, with every claim matched to how the product is regulated.' },
      { q: 'Is my sunscreen a cosmetic or a therapeutic good?', a: 'It depends on the product. In general, products mainly for sun protection are therapeutic goods that need ARTG inclusion, while some moisturisers and makeup with SPF can be cosmetics within set conditions. The difference changes what you can claim and how you advertise, so confirm each product’s status with your regulatory adviser or sponsor.' },
      { q: 'Can we say “dermatologist tested” or “clinically proven” in Australia?', a: 'Only if you hold evidence that supports the exact wording. Under the Australian Consumer Law, claims must not mislead, and the AANA codes expect the same of advertising. If a test covered a small group or a narrow result, say so plainly. We write around what your reports actually show.' },
      { q: 'Can influencers promote our skincare products?', a: 'Yes for cosmetic products, as long as paid and gifted content is clearly disclosed and claims are honest. Therapeutic goods, which include many sunscreens, are different: their advertising code restricts testimonials, including from paid creators. We brief creators on these limits and keep records of each agreement.' },
      { q: 'Should an Australian skincare brand sell on Amazon AU?', a: 'Often yes, once your own store and reviews are in good shape. Amazon.com.au reaches buyers who want fast delivery and many reviews in one place. Start with hero products, keep pricing consistent with your website and use your store for bundles, subscriptions and minis.' },
      { q: 'How much does skincare marketing cost in Australia?', a: 'It depends on the channels, the number of products, creative and content volume, and whether marketplace work is included. Ad spend is paid directly to each platform from your own account, and our management fee is quoted separately in AUD. We send a fixed written quote after a free audit.' },
      { q: 'Do you have an office in Australia?', a: 'No. We are a remote team in India, with our head office in Chennai and a team in Bengaluru. The east coast is 4.5 to 5.5 hours ahead of India depending on daylight saving, so calls fit your afternoon and finished work is waiting for you the next morning.' },
    ],
  },

  // ───────────────────────────────────────────── 2. Haircare (Australia)
  {
    slug: 'australia/haircare-marketing-agency',
    kind: 'industry',
    market: 'AU',
    twin: 'industries/haircare-marketing-agency',
    title: 'Haircare Marketing Agency Australia for Hair Brands',
    description: 'Haircare marketing agency for Australian hair brands: honest results timelines, TGA-aware scalp and hair-loss copy, wash-day content and Amazon AU growth.',
    primaryKeyword: 'haircare marketing agency',
    navLabel: 'Haircare Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Haircare and scalp care brands in Australia',
    h1: 'A Haircare Marketing Agency for Australian Brands Whose Results *Take Time*',
    intro: 'Billion Ecommerce Agency is a haircare marketing agency for Australian brands selling shampoos, conditioners, treatments, scalp care and styling products online. Hair results take weeks, so we set honest expectations, keep anti-dandruff and hair-loss wording on the right side of TGA and consumer law, build content around hair type and climate, and grow reorders on your store, Amazon AU and TikTok Shop.',
    icon: 'social',
    facts: ['Honest results timelines', 'Scalp and hair-loss copy checked', 'Remote team, AUD quotes'],
    headings: {
      pains: 'Why Australian haircare brands struggle to grow online',
      includes: 'Haircare marketing for Australian brands: what is included',
      process: 'How we grow an Australian haircare brand in *4 steps*',
      guide: 'Haircare marketing in Australia: claims, climate and reorders',
    },
    pains: [
      { title: 'Buyers quit before results show', body: 'A scalp serum or treatment needs weeks of regular use, but many buyers judge it within days. They stop, ask for a refund or post a poor review before the product had a fair go.' },
      { title: 'Hair-loss and dandruff copy that crosses a line', body: 'Promises to stop shedding, regrow hair or cure dandruff can make a product look like a therapeutic good. Ads get rejected, and the claim may not match what the product is allowed to say.' },
      { title: 'Salon know-how that never reaches online', body: 'Plenty of Australian haircare grew through salons and word of mouth. Selling online means explaining on a page what a stylist used to explain in the chair, and most product pages do not.' },
    ],
    includes: [
      { title: 'Hair-type and concern guides', body: 'Content for curly, fine, thick, colour-treated and textured hair, and for frizz, dryness, breakage and oily scalps, so buyers can choose without a stylist beside them.' },
      { title: 'Claims sorted by product type', body: 'Cosmetic hair products separated from those that may be therapeutic goods, with copy written for each and legal questions passed to your adviser.' },
      { title: 'Creative that sells the routine', body: 'Wash-day videos, texture close-ups, styling tutorials and honest customer clips, without side-by-side scalp photos or growth promises.' },
      { title: 'Follow-ups through the results window', body: 'Emails and SMS across the first weeks with usage tips and a reminder of when to judge results, so fewer buyers give up early.' },
      { title: 'Men’s grooming ranges', body: 'Separate campaigns and pages for beard, styling and men’s scalp products, which sell to a different buyer in a different way.' },
      { title: 'Amazon AU and TikTok Shop', body: 'Listings, A+ content, sponsored ads and shoppable video for core products, with bundles and salon sizes kept for your own store.' },
      { title: 'Subscriptions and refills', body: 'Subscribe-and-save, refill pouches and reminders timed to how long a bottle lasts with regular washing.' },
    ],
    process: [
      { title: 'Free audit, range sorted', body: 'We review your store, ads and listings, then split the range into products judged on the first wash and those judged over several weeks.' },
      { title: 'Written plan and AUD quote', body: 'A plan for content, claims, channels and retention, with our fee quoted in AUD. Ad spend is paid from your account directly to each platform.' },
      { title: 'Fix pages and claims', body: 'Product pages get usage steps, hair-type guidance and an honest timeline, and risky wording is rewritten before traffic grows.' },
      { title: 'Launch and keep them using it', body: 'Ads, marketplace listings and follow-up journeys go live together, with monthly reporting on repeat orders by product.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads', 'TikTok Shop', 'Google Ads', 'Amazon AU', 'Afterpay', 'GA4'],
    figures: [
      { type: 'venn', caption: 'Two kinds of haircare product, and what keeps both of them selling.', after: 1, left: { title: 'Judged on the first wash', body: 'Shampoo, conditioner and styling: feel, scent and finish' }, right: { title: 'Judged over weeks', body: 'Scalp serums and treatments: need regular, patient use' }, overlap: 'A routine they keep using' },
      { type: 'steps', caption: 'Follow-ups across the weeks a hair product needs to show what it can do.', after: 4, steps: [
        { title: 'Delivery', body: 'How to use it and how often' },
        { title: 'Week one', body: 'Ask about feel, scent and finish' },
        { title: 'Week three', body: 'Routine tips and a nudge to keep going' },
        { title: 'Results check', body: 'Review request once change can show' },
        { title: 'Refill', body: 'Reminder timed to bottle life' },
      ] },
    ],
    guide: [
      {
        heading: 'Haircare in Australia is several businesses in one',
        paragraphs: [
          'From outside, haircare looks like one category. In practice it splits into very different products. A shampoo or conditioner is judged on the first wash: lather, scent, slip and how hair feels once dry. A styling product is judged in the mirror the same morning. A scalp serum or hair-loss treatment is bought on hope and judged over weeks. Men’s grooming ranges sell to yet another buyer, often through short, plain videos.',
          'Each of these needs its own creative, landing page and often its own channel. When a brand treats the whole range the same way, it tends to push the most claim-heavy product hardest, which is also the one most likely to get ads rejected or to attract complaints.',
        ],
      },
      {
        heading: 'What a haircare marketing agency should plan around',
        paragraphs: [
          'The biggest difference between haircare and most beauty products is time. Hair grows slowly, and changes in shedding or thickness usually take weeks or months to notice. A buyer expecting change in a week will feel let down and may leave a poor review.',
          'A haircare marketing agency should build the whole plan around that window. Product pages should say how long people typically use a product before judging it. Post-purchase emails and SMS should carry the first weeks with tips and a reminder of when to look for change. Ads should sell the routine, the ingredients and how the product feels to use, not a dramatic result. This keeps more customers using the product and makes reviews fairer.',
        ],
      },
      {
        heading: 'Anti-dandruff, hair loss and the TGA',
        paragraphs: [
          'In Australia, the line between a cosmetic and a therapeutic good depends on ingredients and on what the product claims to do. Shampoos and conditioners sold for cleansing, conditioning and appearance are generally cosmetics. Some anti-dandruff products can also be cosmetics if they meet set conditions, while products that claim to treat a scalp condition, or contain certain active ingredients, may be therapeutic goods that need ARTG inclusion. Hair-loss treatments that claim to regrow hair are usually medicines.',
          'If a product sits on the therapeutic side, the TGA advertising code applies, including limits on testimonials. If it is a cosmetic, it should not make therapeutic claims at all. We sort your range with you, ask your adviser or sponsor to confirm each product’s status, and write copy that fits. This is general information, not legal advice.',
        ],
        bullets: [
          'Talk about breakage, shine, softness and how the scalp feels rather than regrowth or cures',
          'Avoid promises of thicker hair or less shedding within a set number of days',
          'Keep active-ingredient claims to what the label and your evidence support',
          'Do not open an ad by pointing at the viewer’s hair loss or flaky scalp',
        ],
      },
      {
        heading: 'Advertising rules and before-and-after images',
        paragraphs: [
          'Under the Australian Consumer Law, the ACCC expects claims to be truthful and backed by evidence, and that includes images. Before-and-after scalp photos taken in different light, or edited to look thicker, can mislead. The AANA codes, enforced through Ad Standards complaints, cover advertising generally, and Meta, TikTok and Google add their own rules on personal attributes and health claims.',
          'In practice, safer creative is also more believable: wash-day routines, close-ups of texture and lather, honest customer clips about how hair feels, and styling tutorials. Make the landing page match the ad, because platform reviewers look at both.',
        ],
      },
      {
        heading: 'Climate, hair type and men’s grooming',
        paragraphs: [
          'Australia’s climate varies a lot. Humid summers in Queensland and the Top End bring frizz, while dry inland heat and winter heating leave hair brittle. Sun, salt water and chlorine matter to beach and pool regulars. Content that names these situations, and recommends a routine for each, gives buyers a reason to trust your advice over a generic ad.',
          'Curly and textured hair communities are well informed and quick to spot a brand that does not understand them, so involve real users in your content. Men’s grooming tends to respond to simple messages, short demos and separate campaigns, not a men’s tab bolted onto a women’s funnel.',
        ],
      },
      {
        heading: 'Channels, seasons and reorders',
        paragraphs: [
          'Shampoo and conditioner run out at predictable intervals, so reorders are where a haircare brand earns its margin. Subscriptions, refill pouches and reminders timed to bottle life keep buyers on your brand instead of whatever is on special at the supermarket or chemist. Amazon AU suits core products and repeat buyers, and TikTok Shop suits styling tools and products that show a visible change on camera.',
          'Plan promotions around Click Frenzy, EOFY in June, Black Friday and Christmas gift sets, and use Afterpay messaging on higher-priced bundles and tools. Ask for reviews in two stages: about feel and scent soon after delivery, and about results only after several weeks.',
        ],
      },
      {
        heading: 'How we work with Australian haircare brands',
        paragraphs: [
          'We have no Australian office. Billion Ecommerce Agency works remotely from India, with our head office in Chennai and a team in Bengaluru. Our working day overlaps with your afternoon on the east coast and most of your day in Perth. As a haircare marketing agency, we report on repeat orders by product across your store and marketplaces, and quote our fee in AUD after a free audit.',
        ],
      },
    ],
    related: [
      auSkincare,
      auCosmetics,
      auAyurveda,
      { label: 'Meta ads agency for Instagram and Reels in Australia', href: '/australia/meta-ads-agency/' },
      { label: 'Ecommerce PPC and Google Shopping in Australia', href: '/australia/ecommerce-ppc-agency/' },
      { label: 'Shopify agency for Australian haircare stores', href: '/australia/shopify-agency/' },
      auHub,
      { label: 'ROAS calculator for haircare ad targets', href: '/tools/roas-calculator/' },
    ],
    faqs: [
      { q: 'What does a haircare marketing agency do for Australian brands?', a: 'It plans and runs the marketing that sells hair products online in Australia: hair-type and concern content, product pages with honest timelines, claims checks, Meta, TikTok and Google ads, and sales on Amazon AU and TikTok Shop. It also keeps customers using a product long enough to judge it and reorder.' },
      { q: 'Is an anti-dandruff shampoo a cosmetic or a therapeutic good in Australia?', a: 'It can be either. Some anti-dandruff products are cosmetics if they meet set conditions, while others are therapeutic goods because of their ingredients or claims. The category decides what you can say and how you can advertise, so confirm each product with your regulatory adviser or sponsor before writing copy.' },
      { q: 'Can we use before-and-after photos in hair ads?', a: 'It is risky. Under consumer law, images must not mislead, and edited or poorly matched photos can. Ad platforms also restrict before-and-after imagery for appearance and health products. Wash-day videos, texture close-ups and honest customer clips are safer and usually more believable.' },
      { q: 'How long should we say a hair treatment takes to work?', a: 'Only what your evidence supports. Hair changes slowly, so honest messaging asks buyers to use a product regularly for several weeks before judging it. Put that timeline on the product page and in follow-up messages, and never promise growth within a set number of days.' },
      { q: 'Should a haircare brand sell on Amazon AU or TikTok Shop?', a: 'Often both, for different products. Amazon AU suits core shampoos and conditioners that people reorder, while TikTok Shop suits styling products and tools that show a visible change on camera. Keep bundles, refills and subscriptions on your own store, and keep prices consistent everywhere.' },
      { q: 'How much does haircare marketing cost in Australia?', a: 'It depends on your channels, number of products, content and creative volume, and whether marketplace management is included. Ad spend is paid directly to each platform from your account, and our management fee is quoted separately in AUD. We send a fixed written quote after a free audit.' },
      { q: 'Can you work with us if you are not in Australia?', a: 'Yes. We are a remote team in India with no Australian office. Calls fit your afternoon on the east coast, work continues overnight, and your ad accounts, store and data stay in your name. Most haircare marketing work is done online, so location matters less than clear communication.' },
    ],
  },

  // ───────────────────────────────────────────── 3. Cosmetics (Australia)
  {
    slug: 'australia/cosmetics-marketing-agency',
    kind: 'industry',
    market: 'AU',
    twin: 'industries/cosmetics-marketing-agency',
    title: 'Cosmetics Marketing Agency Australia: Makeup Brands',
    description: 'Cosmetics marketing agency for Australian makeup brands: shade finders, clearly disclosed creator content, launch runways, gifting peaks and TikTok Shop sales.',
    primaryKeyword: 'cosmetics marketing agency',
    navLabel: 'Cosmetics Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Makeup and cosmetics brands in Australia',
    h1: 'A Cosmetics Marketing Agency for Australian Makeup: *Shades, Creators, Launches*',
    intro: 'Billion Ecommerce Agency is a cosmetics marketing agency for Australian makeup brands selling foundation, concealer, lip, brow, eye and nail products online. We help shoppers choose a shade without a tester, run creator and UGC programmes that disclose paid content clearly, plan launches and limited drops, and build gifting campaigns for Mother’s Day, Black Friday and Christmas. We work remotely and quote in AUD.',
    icon: 'social',
    facts: ['Shade-finding pages', 'Creator content, clearly disclosed', 'Remote team, AUD quotes'],
    headings: {
      pains: 'Where Australian makeup brands lose sales online',
      includes: 'Makeup marketing for Australian brands, from swatch to launch',
      process: 'How we run a makeup launch for Australian buyers in *4 steps*',
      guide: 'Cosmetics marketing in Australia: shades, creators and rules',
    },
    pains: [
      { title: 'Shade guesses that come back', body: 'A foundation that looks right on a phone can look wrong in daylight. Without swatches across many skin tones, buyers guess, return the product or abandon the cart.' },
      { title: 'Competing with the beauty halls', body: 'Australian shoppers can swatch big brands at Mecca, Sephora or a Myer or David Jones counter. An online-first label has to give the same confidence through a screen.' },
      { title: 'Creator posts that vanish', body: 'A handful of gifted posts gives a spike, then nothing. Without a steady programme and written rights to reuse content, ads keep running on the same tired visuals.' },
    ],
    includes: [
      { title: 'Shade system and swatches', body: 'Every shade shown on a wide range of skin tones in daylight and indoor light, with undertone notes and comparisons buyers can relate to.' },
      { title: 'Shade quiz and try-on', body: 'A short quiz or virtual try-on on hero products where your platform supports it, always alongside real swatches rather than instead of them.' },
      { title: 'Creator and UGC programme', body: 'A roster of Australian creators across skin tones and budgets, briefs covering disclosure and unfiltered swatches, and written rights to reuse content in ads.' },
      { title: 'Launch and drop planning', body: 'Teasers, waitlists, early access for past customers and back-in-stock alerts, with ads, emails and listings ready on launch day.' },
      { title: 'Meta, TikTok and TikTok Shop', body: 'Short-form video ads, Spark Ads from creator posts and shoppable videos, with landing pages that show the exact shade from the ad.' },
      { title: 'Gift sets and kits', body: 'Gift guides, kits and wrapping options for Valentine’s Day, Mother’s Day, Black Friday and Christmas, built around products that need no shade match.' },
      { title: 'Claims and label check', body: 'Long-wear, waterproof, vegan and SPF claims matched to testing, and ingredient lists checked against cosmetics labelling rules.' },
    ],
    process: [
      { title: 'Audit shades and returns', body: 'We review shade images, return and exchange reasons, reviews and creator content to see where buyers hesitate or pick the wrong shade.' },
      { title: 'Written plan and AUD quote', body: 'A plan for shade pages, creators, launches and channels, with our fee quoted in AUD. Ad spend and creator fees are paid separately.' },
      { title: 'Build pages, seed creators', body: 'Swatches and shade tools go onto hero products, creators receive product early and the waitlist opens before launch.' },
      { title: 'Launch, measure, restock', body: 'We track sell-through by shade, return reasons and which creator content drives sales, then plan restocks and the next drop.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads', 'TikTok Shop', 'Instagram', 'Google Ads', 'Amazon AU', 'Afterpay'],
    figures: [
      { type: 'mindmap', caption: 'Four ways to help an Australian shopper choose a makeup shade online.', after: 1, center: 'Choosing a shade online', branches: [
        { label: 'Undertone', items: ['Warm, cool or neutral', 'A simple self-check'] },
        { label: 'Swatches', items: ['Wide range of skin tones', 'Daylight and indoor light', 'Face and arm swatches'] },
        { label: 'Tools', items: ['Short shade quiz', 'Virtual try-on'] },
        { label: 'Proof', items: ['Reviews naming the shade', 'Creators by skin tone'] },
      ] },
      { type: 'steps', caption: 'A launch runway for a new shade range or limited-edition drop.', after: 4, steps: [
        { title: 'Swatches first', body: 'Close-ups shared before shade names' },
        { title: 'Waitlist opens', body: 'Past customers get first access' },
        { title: 'Creators film', body: 'Product with creators weeks ahead' },
        { title: 'Launch day', body: 'Ads, email and listings at once' },
        { title: 'Restock', body: 'Reorder the shades that ran out' },
      ] },
    ],
    guide: [
      {
        heading: 'How Australians buy makeup online',
        paragraphs: [
          'Makeup is bought quickly and socially. Someone sees a lip colour on TikTok or Instagram, wants it, and needs to know within seconds whether it will suit them. Results are instant, so the main question is not whether the product works but whether this shade works on this person. Trends move fast, new shades launch often, and gifting accounts for a big share of sales at certain times of year.',
          'In Australia, online-first labels also compete with beauty halls and specialist stores where shoppers can swatch before buying. A cosmetics marketing agency for this market spends less time on long education and more on shade accuracy, creator content, launch timing and gifting, all aimed at the same goal: giving people confidence to buy a colour they cannot test in person.',
        ],
      },
      {
        heading: 'Shade matching for a diverse country',
        paragraphs: [
          'Australia is one of the most culturally diverse countries in the world, and its makeup buyers cover a very wide range of skin tones and undertones. A single swatch on one model leaves most of them guessing, which leads to returns for foundation, concealer and bronzer, and to abandoned carts for everything else.',
          'Strong shade pages show each product on several skin tones, in natural and indoor light, with clear undertone notes. A short quiz helps, and comparisons to well-known shade descriptions give buyers a reference point. Virtual try-on can work for lip and eye colour, but it should sit next to real swatches. Reviews that mention the shade the reviewer wears and their skin tone are some of the most useful content you can collect, so ask for them.',
        ],
      },
      {
        heading: 'What a cosmetics marketing agency does with creators',
        paragraphs: [
          'Makeup sells through faces. Tutorials, get-ready-with-me videos and honest swatch reels shift more product than studio shoots. A good cosmetics marketing agency runs a steady programme: a roster of creators across skin tones and audience sizes, clear briefs, product sent well before launches, and written agreements covering reuse in ads.',
          'Disclosure matters. The AANA code expects advertising to be clearly distinguishable as advertising, which covers paid and gifted creator posts, and the ACCC has paid close attention to undisclosed influencer content and fake reviews. Filters that change how a product looks on skin can mislead buyers under the Australian Consumer Law. We brief creators on these points. This is general guidance, not legal advice.',
        ],
        bullets: [
          'Label paid, gifted and affiliate posts clearly, at the start of the caption or video',
          'Keep beauty filters off the product itself and show swatches on bare skin',
          'Never write or edit reviews, and do not hide negative ones',
          'Get written permission and agreed terms before using creator content in ads',
        ],
      },
      {
        heading: 'Claims, labels and ingredients',
        paragraphs: [
          'Decorative makeup usually faces fewer claim problems than skincare, but the rules still apply. Long-wear, transfer-proof and waterproof claims need testing behind them. Vegan, cruelty-free and clean claims need to be accurate and explainable, since the ACCC treats green and ethical claims seriously. Makeup with SPF can bring sunscreen rules into play, so check how each product is classed before you advertise sun protection.',
          'Most cosmetics sold in Australia must list their ingredients under a mandatory information standard, and businesses that import cosmetics or their ingredients may need to register with AICIS. If you import from overseas manufacturers, confirm who is responsible for that before launch.',
        ],
      },
      {
        heading: 'Launches, drops and TikTok Shop',
        paragraphs: [
          'New shades and collections are one of a makeup brand’s strongest tools, but only with a runway. Share close-up swatches early, open a waitlist, offer past buyers first access and get product to creators a few weeks ahead so their videos are ready on the day. Meta and TikTok ads, emails, SMS and marketplace listings should all go live together.',
          'TikTok Shop and Spark Ads let a creator’s video become the shop window, which suits lip, blush and nail launches. Watch stock closely: selling out a limited shade builds interest, but running out of a core shade mid-campaign wastes budget. Back-in-stock alerts turn a sell-out into a waiting list.',
        ],
      },
      {
        heading: 'Gifting peaks and the Australian calendar',
        paragraphs: [
          'Makeup is a popular gift, so plan around Valentine’s Day, Mother’s Day in May, Click Frenzy, Black Friday, Christmas and Boxing Day. For South Asian and other communities, Diwali and wedding seasons can matter too. Buyers shopping for someone else worry about shade, so gift sets built on lip kits, palettes, nail colour and minis sell more easily than foundation. Gift guides, wrapping and easy exchanges reduce the hesitation further, and Afterpay can help on larger sets. Publish Australia Post and courier cut-off dates clearly before Christmas.',
        ],
      },
      {
        heading: 'Measuring results and working with us',
        paragraphs: [
          'Look beyond return on ad spend. Track sell-through by shade, return and exchange reasons, how many buyers use the shade tool, and which creators drive sales. A cosmetics marketing agency should use those numbers to decide which shades to restock and which creators to rebook.',
          'Billion Ecommerce Agency has no Australian office. We work remotely from India, with our head office in Chennai and a team in Bengaluru, and our day overlaps with your east-coast afternoon. We quote in AUD after a free audit.',
        ],
      },
    ],
    related: [
      auSkincare,
      auHaircare,
      auPerfume,
      { label: 'Ecommerce Meta ads with catalogue and UGC creative', href: '/australia/ecommerce-meta-ads-agency/' },
      { label: 'Shopify agency for Australian makeup stores', href: '/australia/shopify-agency/' },
      { label: 'Web development company for Australian brands', href: '/australia/web-development-company/' },
      auHub,
      { label: 'Discount calculator for gift-set offers', href: '/tools/discount-calculator/' },
    ],
    faqs: [
      { q: 'What does a cosmetics marketing agency do for Australian brands?', a: 'It runs the marketing that sells makeup online in Australia: shade pages and swatches, creator and UGC programmes with clear disclosure, launch planning, Meta and TikTok ads, TikTok Shop and Amazon AU listings, and gifting campaigns. The focus is helping buyers choose the right shade and come back for each new launch.' },
      { q: 'Do Australian creators have to label sponsored makeup posts?', a: 'Yes. Under the AANA code, advertising should be clearly distinguishable, which includes paid and gifted creator content, and the ACCC has acted on undisclosed influencer posts. Label the content clearly and early, and avoid filters that change how the product looks. Check details with your adviser.' },
      { q: 'How can we cut returns caused by the wrong shade?', a: 'Show each shade on a wide range of skin tones in different light, explain undertones, add a short shade quiz and collect reviews that name the shade worn. Virtual try-on can help for lip and eye colour. Clear shade guidance reduces both returns and abandoned carts.' },
      { q: 'Can we call our makeup vegan or cruelty-free?', a: 'Only if it is accurate and you can explain what the claim means. Under the Australian Consumer Law, ethical and green claims must not mislead. Keep records from your suppliers and manufacturer, describe what the claim covers, and avoid vague words such as clean without explaining them.' },
      { q: 'Is TikTok Shop worth it for a makeup brand in Australia?', a: 'It can be, especially for lip, blush and nail products that look good on camera. Creator videos become the product page, and Spark Ads let you put spend behind posts that already work. Keep stock levels in sync with your store and check that pricing matches across channels.' },
      { q: 'How much does makeup marketing cost in Australia?', a: 'It depends on your channels, number of shades and products, the size of the creator programme, how often you launch and whether marketplace work is included. Ad spend and creator fees are separate from our management fee, which we quote in AUD after a free audit.' },
      { q: 'Do you have a team in Australia?', a: 'No. We are a remote team in India, with our head office in Chennai and a team in Bengaluru. We brief Australian creators online, meet you on video calls in your afternoon and work while you sleep. Your ad accounts, store and creator agreements stay in your name.' },
    ],
  },

  // ───────────────────────────────────────────── 4. Ayurveda (Australia)
  {
    slug: 'australia/ayurveda-marketing-agency',
    kind: 'industry',
    market: 'AU',
    twin: 'industries/ayurveda-marketing-agency',
    title: 'Ayurveda Marketing Agency Australia: Herbal Brands',
    description: 'Ayurveda marketing agency for herbal brands selling in Australia: TGA-aware copy for listed medicines, teas and oils, diaspora and wellness buyers, Amazon AU.',
    primaryKeyword: 'ayurveda marketing agency',
    navLabel: 'Ayurveda Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Ayurvedic, herbal and wellness brands in Australia',
    h1: 'An Ayurveda Marketing Agency for Australia That Respects *Tradition and the TGA*',
    intro: 'Billion Ecommerce Agency is an ayurveda marketing agency for herbal and Ayurvedic brands selling to Australian customers, whether you are based in Australia or shipping from India. We sort your range into cosmetics, foods and products that may be therapeutic goods, write copy that fits each, and reach South Asian communities and mainstream wellness buyers through your store, Amazon AU and search. We quote in AUD.',
    icon: 'marketplace',
    facts: ['Range sorted before launch', 'Diaspora and wellness buyers', 'Remote team, AUD quotes'],
    headings: {
      pains: 'Why Ayurvedic brands find Australia harder than expected',
      includes: 'Ayurvedic marketing for the Australian market: what we cover',
      process: 'How we launch an Ayurvedic range in Australia in *4 steps*',
      guide: 'Ayurveda marketing in Australia: rules, buyers and channels',
    },
    pains: [
      { title: 'Classical wording becomes a medical claim', body: 'Ayurvedic texts describe herbs by the conditions they address. Repeat that on an Australian product page or ad and you may be making a therapeutic claim the product is not allowed to make.' },
      { title: 'Stock that is not ready for Australia', body: 'A churna or tablet sold freely in India may need ARTG inclusion and an Australian sponsor before it can be supplied here. Too many brands find this out after the ads are built.' },
      { title: 'Two audiences, one message', body: 'Indian, Sri Lankan and Nepali families already know the herbs, while mainstream wellness buyers need them explained. One generic campaign speaks clearly to neither group.' },
    ],
    includes: [
      { title: 'Range and status sort', body: 'Products grouped as cosmetics, foods such as teas and spice blends, and possible therapeutic goods, so each gets suitable wording and channels. Your adviser or sponsor confirms the status.' },
      { title: 'Listed medicine copy', body: 'For products on the ARTG as listed complementary medicines, copy that stays within their permitted indications and the therapeutic goods advertising code.' },
      { title: 'Herb and ritual content', body: 'Guides on ashwagandha, turmeric, triphala, oil massage and daily routines, written for Google and AI answers and kept free of disease claims.' },
      { title: 'Diaspora campaigns', body: 'Ads and content for South Asian communities in Sydney, Melbourne, Brisbane, Perth and Adelaide, with Diwali and family gifting in the calendar.' },
      { title: 'Mainstream wellness reach', body: 'Plain-English explanations of Ayurvedic ideas for people who shop at health food stores and pharmacies but have never heard the word dosha.' },
      { title: 'Amazon AU and your store', body: 'Listings with accurate category and ingredient details, ARTG numbers where they apply, plus subscriptions and bundles on your own site.' },
      { title: 'Import and shipping checks', body: 'For brands shipping from India, a list of what to confirm on biosecurity, therapeutic goods and labelling before ads go live.' },
    ],
    process: [
      { title: 'Free audit and range sort', body: 'We review your labels, store, listings and past ads, and group each product by how it is likely to be regulated in Australia, for your adviser to confirm.' },
      { title: 'Written plan and AUD quote', body: 'A plan covering which products to lead with, audiences, channels and content, with our fee quoted in AUD. Ad spend is paid directly to each platform.' },
      { title: 'Rewrite, then launch', body: 'Pages, listings and ads are reworded around ingredients, ritual and daily use, and go live once each product’s status is confirmed.' },
      { title: 'Grow repeat and reach', body: 'Refill reminders, subscriptions and search content build repeat orders, while ads test new audiences one group at a time.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'Google Ads', 'Amazon AU', 'Google Search Console', 'Afterpay', 'GA4'],
    figures: [
      { type: 'steps', caption: 'Turning a traditional product description into copy that suits Australian rules.', after: 1, steps: [
        { title: 'Spot the claim', body: 'Words naming a condition or a cure' },
        { title: 'Check its status', body: 'Cosmetic, food or therapeutic good' },
        { title: 'Keep the heritage', body: 'Source text and herbs, kept in view' },
        { title: 'Explain daily use', body: 'When and how it fits a routine' },
        { title: 'Adviser sign-off', body: 'Final check for therapeutic goods' },
      ] },
      { type: 'matrix', caption: 'Diaspora and mainstream wellness buyers start from different places.', after: 4, cols: ['Diaspora buyers', 'Wellness buyers'], rows: ['What they already know', 'What works in ads'], cells: [
        { title: 'Herbs and brands', body: 'Grew up with the products; want familiar names and quality' },
        { title: 'Little or none', body: 'Need the herb and the ritual explained in plain English' },
        { title: 'Heritage and trust', body: 'Family rituals, Diwali gifting, sourcing from India' },
        { title: 'Ritual and calm', body: 'Daily routines, ingredients and how it feels to use' },
      ] },
    ],
    guide: [
      {
        heading: 'Ayurveda in Australia: two very different buyers',
        paragraphs: [
          'Ayurvedic brands in Australia sell to two groups. The first is the large South Asian community, including Indian, Sri Lankan and Nepali families who grew up with chyawanprash, herbal oils and churnas and want familiar products of good quality. The second is the mainstream wellness shopper who buys turmeric lattes, adaptogen blends and massage oils, but knows little about Ayurveda itself.',
          'Both groups are worth reaching, but they need different messages. Diaspora buyers respond to heritage, trusted names and sourcing. Wellness buyers need the herb, the ritual and the reason explained simply. An ayurveda marketing agency should plan separate content, ads and landing pages for each, rather than one campaign that half-suits both.',
        ],
      },
      {
        heading: 'Therapeutic goods, listed medicines and the ARTG',
        paragraphs: [
          'In Australia, products that make therapeutic claims, including many herbal and Ayurvedic medicines, are generally therapeutic goods regulated by the TGA. Most lower-risk complementary medicines are listed on the Australian Register of Therapeutic Goods, carry an AUST L number, and may only use indications from a permitted list. They also need an Australian sponsor who is responsible for them. A product sold freely as a medicine in India may need this before it can be supplied here.',
          'The TGA has, in the past, warned about some imported Ayurvedic products found to contain heavy metals, which is one reason quality, testing and sourcing information matters to Australian buyers. We are not regulatory advisers; we help you organise the questions and write copy once your adviser or sponsor has confirmed each product’s position.',
        ],
        bullets: [
          'Check whether each product is a cosmetic, a food or a therapeutic good before writing copy',
          'For listed medicines, keep ads within the indications on the ARTG entry',
          'Show the AUST L number where it applies, and do not imply TGA endorsement',
          'Keep testing and sourcing records ready, as buyers and marketplaces may ask',
        ],
      },
      {
        heading: 'Advertising rules: the TGA code, the ACCC and the platforms',
        paragraphs: [
          'Ads for therapeutic goods sold to the public must follow the Therapeutic Goods Advertising Code. In general terms it restricts references to serious diseases, limits testimonials, including from paid influencers and health professionals, and expects claims to match the product’s entry on the register. For cosmetics and foods, the Australian Consumer Law applies: claims must not mislead, and words such as “cures”, “detox” or “boosts immunity” can cause trouble.',
          'Meta and Google add their own health policies, and Ad Standards hears complaints under the AANA codes. In practice, copy that focuses on ritual, ingredients, sourcing and daily use passes review more often and reads as more trustworthy.',
        ],
      },
      {
        heading: 'What an ayurveda marketing agency should do with your range',
        paragraphs: [
          'Start by sorting the catalogue. Massage oils, ubtan face packs and herbal hair oils are often cosmetics, which must list ingredients and avoid therapeutic claims. Herbal teas and spice blends may be foods, covered by the Food Standards Code, which also limits health claims. Tablets, capsules and classical formulations sold for health purposes are likely to be therapeutic goods.',
          'An ayurveda marketing agency should then decide which products lead. Often that means starting with oils, teas and cosmetics that are simpler to sell, while medicine products go through the proper process. Product pages should explain the source text or tradition, the herbs and how to use each product, with no promise of outcomes.',
        ],
      },
      {
        heading: 'Reaching South Asian communities and mainstream wellness buyers',
        paragraphs: [
          'For diaspora buyers, Diwali, family gifting and festival hampers matter, and so does reliable stock of products people already know. Community creators, Hindi, Tamil or Sinhala language variants where your data supports them, and Meta audiences in the cities with large South Asian communities all help.',
          'For mainstream buyers, search content does much of the work. People ask how to use ashwagandha, what triphala is or how to do an oil massage. Clear, careful answers bring buyers in research mode, and plain-English product pages turn that interest into orders. Mother’s Day, Christmas, Black Friday and EOFY sales suit gift sets for both groups.',
        ],
      },
      {
        heading: 'Shipping from India to Australian customers',
        paragraphs: [
          'Indian brands selling directly to Australians face extra checks. Plant material, seeds and some herbal ingredients can fall under biosecurity import conditions, and therapeutic goods supplied commercially need to meet TGA requirements. Delivery times and returns also need to be stated honestly. Many brands start with products that are simpler to import, test demand on Amazon AU or their own site, and later move stock to an Australian warehouse or partner.',
          'Be clear on the product page about where an order ships from, how long it takes and what happens if a parcel is held at the border. Australian buyers are used to quick domestic delivery, so a two-week wait needs to be stated up front rather than discovered after checkout. Customs and biosecurity delays are outside your control, but an honest delivery page, tracking updates by email or SMS and a simple refund process keep reviews fair. Once demand is proven, local stock removes most of these problems and makes Afterpay, subscriptions and faster delivery easier to offer.',
        ],
      },
      {
        heading: 'Working with us from India',
        paragraphs: [
          'Billion Ecommerce Agency has no Australian office. We work remotely from India, with our head office in Chennai and a team in Bengaluru, which suits Ayurvedic brands with roots in India. Our day overlaps with your east-coast afternoon. As an ayurveda marketing agency, we report on repeat orders, search growth and results by audience, and we quote in AUD after a free audit. Your ad accounts, store and listings stay in your name.',
        ],
      },
    ],
    related: [
      { label: 'Ayurveda marketing for brands selling in India', href: '/industries/ayurveda-marketing-agency/' },
      auSkincare,
      auHaircare,
      auPerfume,
      { label: 'Ecommerce SEO for herb and ritual searches in Australia', href: '/australia/ecommerce-seo/' },
      { label: 'Ecommerce PPC and Google Shopping in Australia', href: '/australia/ecommerce-ppc-agency/' },
      auHub,
      { label: 'Marketplace profit calculator for Amazon fees', href: '/tools/marketplace-profit-calculator/' },
    ],
    faqs: [
      { q: 'What does an ayurveda marketing agency do in Australia?', a: 'It plans and runs online growth for Ayurvedic and herbal brands selling to Australians: sorting products by how they are likely to be regulated, writing claim-aware copy, building product pages and search content, and running ads and Amazon AU listings for both South Asian communities and mainstream wellness buyers.' },
      { q: 'Do Ayurvedic medicines need TGA approval to be sold in Australia?', a: 'Many products sold for health purposes are therapeutic goods that need to be on the ARTG, usually as listed complementary medicines, with an Australian sponsor. Oils, teas and cosmetics may fall under other rules. Requirements depend on ingredients and claims, so confirm each product with a regulatory adviser before you advertise.' },
      { q: 'Can we advertise Ayurvedic products on Meta and Google in Australia?', a: 'Often yes, within limits. Therapeutic goods must follow the TGA advertising code, and other products must not make misleading health claims under consumer law. Platforms add their own health policies. Ads built on ritual, ingredients, sourcing and daily use tend to pass review and build trust.' },
      { q: 'Can influencers promote Ayurvedic supplements?', a: 'For therapeutic goods, the advertising code restricts testimonials, including from paid or gifted influencers, so be careful. For oils, teas and cosmetics, creators can be used with clear disclosure and honest claims. We check each product’s status before briefing anyone.' },
      { q: 'Can an Indian Ayurveda brand sell directly to Australian customers?', a: 'Some can, depending on the product. Therapeutic goods supplied commercially must meet TGA rules, and some herbal ingredients face biosecurity import conditions. Many brands start with cosmetics, oils or teas, test demand online and later use an Australian warehouse or partner.' },
      { q: 'How much does Ayurvedic marketing cost in Australia?', a: 'It depends on the number of products, how much regulatory sorting and content is needed, the channels and audiences you target and whether marketplace work is included. Ad spend is paid directly to each platform from your account, and our fee is quoted separately in AUD after a free audit.' },
      { q: 'Do you have an office in Australia?', a: 'No. We are a remote team in India, with our head office in Chennai and a team in Bengaluru. Calls fit your afternoon on the east coast, and work continues overnight. Being in India also helps when we work with Ayurvedic manufacturers and suppliers there.' },
    ],
  },

  // ───────────────────────────────────────────── 5. Perfume (Australia)
  {
    slug: 'australia/perfume-marketing-agency',
    kind: 'industry',
    market: 'AU',
    twin: 'industries/perfume-marketing-agency',
    title: 'Perfume Marketing Agency Australia: Samples & Gifts',
    description: 'Perfume marketing agency for Australian fragrance brands: note-led pages, discovery sets, gifting peaks, dangerous goods shipping checks and Amazon AU growth.',
    primaryKeyword: 'perfume marketing agency',
    navLabel: 'Perfume Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Perfume, fragrance and attar brands in Australia',
    h1: 'A Perfume Marketing Agency for Australian Scents *Buyers Cannot Smell Yet*',
    intro: 'Billion Ecommerce Agency is a perfume marketing agency for Australian fragrance brands selling eau de parfum, body mists, solid perfumes and attars online. We describe scents so buyers can picture them, build discovery sets that lead to full bottles, plan gifting around Valentine’s Day, Mother’s Day and Christmas, and check that delivery promises fit dangerous goods rules. We work remotely and quote in AUD.',
    icon: 'social',
    facts: ['Discovery sets to full bottles', 'Gifting calendar planned early', 'Remote team, AUD quotes'],
    headings: {
      pains: 'What makes fragrance hard to sell online in Australia',
      includes: 'Fragrance marketing for Australian brands: what we do',
      process: 'How we grow an Australian perfume brand in *4 steps*',
      guide: 'Perfume marketing in Australia: scent, samples and shipping',
    },
    pains: [
      { title: 'Every full bottle is a gamble', body: 'Shoppers are asked to commit to a scent they have only read about. Vague words such as fresh or sensual give them nothing to hold on to, so most of them leave.' },
      { title: 'Delivery promises perfume cannot keep', body: 'Alcohol-based perfume is usually treated as dangerous goods for transport, so some express and international services may not carry it. Ads promising next-day delivery everywhere set up complaints.' },
      { title: 'Inspired-by names that draw complaints', body: 'Naming a designer fragrance in ads, keywords or listings can lead to rejected ads, removed listings and trademark disputes, and may mislead buyers under consumer law.' },
    ],
    includes: [
      { title: 'Note-led product pages', body: 'Top, heart and base notes in everyday words, concentration, a realistic description of how the scent wears, and the season and occasion it suits.' },
      { title: 'Discovery sets and samples', body: 'Sample vials and discovery boxes with credit towards a full bottle, followed by a message asking which scent the buyer liked.' },
      { title: 'Video ads on Meta and TikTok', body: 'Creative built on mood, setting and real reactions, plus Google search campaigns on scent families such as woody, citrus, musk and oud.' },
      { title: 'Gifting campaigns', body: 'Gift sets, wrapping and delivery cut-offs planned for Valentine’s Day, Mother’s Day, Father’s Day, Black Friday, Christmas and, for attar buyers, Diwali and Eid.' },
      { title: 'Shipping and policy copy', body: 'Delivery pages, checkout notes and ad copy that reflect how your carriers handle perfume as dangerous goods, including slower road-only routes.' },
      { title: 'Amazon AU and TikTok Shop', body: 'Listings with notes, concentration and volume, A+ content and sponsored ads, after checking each marketplace’s rules for flammable products.' },
    ],
    process: [
      { title: 'Free audit and range map', body: 'We review your store, ads, listings and delivery set-up, then sort scents by family, occasion and price to choose heroes and a sampler.' },
      { title: 'Written plan and AUD quote', body: 'A plan for pages, sampling, gifting and channels, with our fee quoted in AUD. Ad spend is paid directly from your account to each platform.' },
      { title: 'Fix pages and delivery notes', body: 'Notes, wear descriptions, gift options and honest delivery times go onto every hero page before ads are scaled.' },
      { title: 'Sample, gift and repeat', body: 'Discovery sets and follow-ups run all year, and gifting campaigns are prepared well before each peak.' },
    ],
    platforms: ['Shopify', 'Meta Ads', 'TikTok Ads', 'TikTok Shop', 'Google Ads', 'Amazon AU', 'Instagram', 'Afterpay'],
    figures: [
      { type: 'steps', caption: 'How a discovery set should lead an Australian buyer to a full bottle.', after: 2, steps: [
        { title: 'Discovery box', body: 'Several scents in small vials' },
        { title: 'Ask which one', body: 'A message a few days after delivery' },
        { title: 'Credit applied', body: 'Set cost taken off a full bottle' },
        { title: 'Full bottle', body: 'The chosen scent at full size' },
        { title: 'Wear review', body: 'How it lasted through a day' },
      ] },
      { type: 'venn', caption: 'Gift buyers and self buyers want different things, and a few offers suit both.', after: 4, left: { title: 'Gift buyers', body: 'Need wrapping, clear cut-off dates and a safe choice' }, right: { title: 'Self buyers', body: 'Want notes, samples and a scent that suits them' }, overlap: 'Discovery sets and gift cards' },
    ],
    guide: [
      {
        heading: 'Why fragrance is hard to sell from a screen',
        paragraphs: [
          'Perfume is one of the few beauty categories where the product cannot be shown at all. A photo shows the bottle, not the scent. In store, Australians can spray a tester at Myer, David Jones or a chemist counter; online, they are asked to buy blind. That is why fragrance sites often see plenty of browsing and few full-bottle orders.',
          'A perfume marketing agency replaces the tester with three things: words that let people imagine the scent, samples that let them try it on their own skin, and reviews that describe how it wears. Ads matter, but they only work once those three are in place.',
        ],
      },
      {
        heading: 'Describing a scent so Australians can picture it',
        paragraphs: [
          'Notes are a start, but most buyers do not know what vetiver or ambroxan smells like. Pair each note with a familiar image, such as cut grass, warm skin after the beach or a eucalyptus walk, and say how the scent changes over the first hour. State the concentration and give a realistic sense of how long it lasts, without promising all-day wear you cannot show.',
          'Climate matters here. A heavy oud or gourmand that works in a Melbourne winter can feel overwhelming in a humid Darwin or Brisbane summer, while light citrus scents may fade fast in the heat. Recommending scents by season and setting helps buyers choose and shows you understand where they live.',
        ],
        bullets: [
          'Top, heart and base notes, each with an everyday comparison',
          'Concentration, bottle size and a fair description of wear time',
          'Season, time of day and occasion the scent suits',
          'Short videos of real people describing their first impression',
        ],
      },
      {
        heading: 'Discovery sets and the path to a full bottle',
        paragraphs: [
          'A discovery set lowers the risk of a first order and tells you which scents people prefer. Price it fairly, offer its cost as credit towards a full bottle, and send a message a few days after delivery asking which scent they liked. Then follow with the full-size offer for that scent, and a review request once they have worn it for a while.',
          'Measure the sample-to-bottle rate by scent and by channel. If one sampler converts far better than another, change what goes in the box rather than spending more on ads.',
          'Samples also feed your content. Ask buyers which scent they kept going back to and why, then use their words, with permission, on product pages and in ads. Real descriptions such as “smells like a summer evening on the verandah” often do more than a perfumer’s note list. Subscriptions for travel sprays or refills suit the scents people wear every day, and a yearly discovery set of new releases keeps loyal customers trying more of your range.',
        ],
      },
      {
        heading: 'Shipping perfume as dangerous goods',
        paragraphs: [
          'Most alcohol-based perfumes are flammable liquids under dangerous goods rules, which affects how they can be sent. Australia Post and couriers set their own conditions, which can include road-only transport, quantity limits and restrictions on international parcels. Road-only routes to Perth, Darwin or regional areas can take noticeably longer than express air delivery.',
          'Your delivery page, checkout and ads should reflect those limits. Promising express delivery that a carrier will not provide leads to complaints and refund requests. Marketplaces such as Amazon AU also review flammable products before they can be listed or stored. Check your carrier’s current terms; we are not dangerous goods advisers.',
        ],
      },
      {
        heading: 'Gifting peaks in the Australian calendar',
        paragraphs: [
          'Fragrance is a classic gift, so the year has clear peaks: Valentine’s Day, Mother’s Day in May, Father’s Day in September, Click Frenzy, Black Friday, Christmas and Boxing Day. Attar and oud buyers in South Asian and Middle Eastern communities also shop around Diwali and Eid. EOFY sales in June suit clearing older stock.',
          'Prepare gift sets, wrapping, creative and stock several weeks ahead, and publish dangerous goods delivery cut-offs early, since road transport needs more time. Gift buyers worry about choosing wrongly, so discovery sets, gift cards and easy exchanges help them commit. Afterpay can make a higher-priced bottle easier to buy.',
        ],
      },
      {
        heading: 'Attar, oud and inspired-by brands',
        paragraphs: [
          'Inspired-by fragrance is a large segment, but using a designer brand’s name in ad text, keywords, titles or hashtags invites trademark complaints and can mislead under the Australian Consumer Law. Describe each scent by its own name, notes and mood. Attar and oud brands should explain what attar is, how it is applied and how it differs from alcohol-based perfume, which also helps with shipping. Fragrance importers should check whether AICIS registration applies to them, and make sure labels list ingredients as the cosmetics labelling rules require.',
        ],
      },
      {
        heading: 'Measuring growth and working with us',
        paragraphs: [
          'Judge a perfume marketing agency on more than first-order sales: track sample-to-bottle rate, repeat purchase, gift share by season and refund reasons. Delivery complaints and damaged-parcel claims are worth watching too, since they often point to a shipping promise that needs rewording. Billion Ecommerce Agency has no Australian office; we work remotely from India, with our head office in Chennai and a team in Bengaluru, overlapping your east-coast afternoon. We quote in AUD after a free audit.',
        ],
      },
    ],
    related: [
      auCosmetics,
      auJewellery,
      auSkincare,
      { label: 'Ecommerce Meta ads for Australian fragrance stores', href: '/australia/ecommerce-meta-ads-agency/' },
      { label: 'Ecommerce PPC and Google Shopping in Australia', href: '/australia/ecommerce-ppc-agency/' },
      { label: 'Shopify agency for Australian perfume brands', href: '/australia/shopify-agency/' },
      auHub,
      { label: 'Free shipping threshold calculator', href: '/tools/free-shipping-threshold-calculator/' },
    ],
    faqs: [
      { q: 'What does a perfume marketing agency do for Australian brands?', a: 'It plans the marketing that sells fragrance online in Australia: note-led product pages, discovery sets and sampling, Meta, TikTok and Google ads, gifting campaigns around Australian peaks, Amazon AU and TikTok Shop listings, and delivery copy that fits dangerous goods rules. It measures how samples turn into full bottles.' },
      { q: 'Can perfume be shipped by express post in Australia?', a: 'Often not by air. Most alcohol-based perfumes are dangerous goods, and carriers may limit them to road transport or restrict quantities and international parcels. Check your carrier’s current terms, and make sure your delivery page and ads show realistic times for each region.' },
      { q: 'Are discovery sets worth it for a small fragrance brand?', a: 'Usually, yes. A discovery set lowers the risk of a first order and shows which scents people prefer. Offering its cost as credit on a full bottle and following up a few days after delivery turns many sample buyers into full-bottle customers.' },
      { q: 'Can inspired-by perfume brands advertise in Australia?', a: 'They can advertise their own products, but naming a designer fragrance in ads, keywords, titles or hashtags risks trademark complaints and removed listings, and may mislead under the Australian Consumer Law. Describe each scent by its own name and notes, and check comparative wording with a lawyer.' },
      { q: 'When should we plan perfume gifting campaigns in Australia?', a: 'Several weeks before each peak, and earlier than other categories because road-only delivery takes longer. The main dates are Valentine’s Day, Mother’s Day in May, Father’s Day in September, Black Friday and Christmas. Attar and oud buyers may also shop around Diwali and Eid.' },
      { q: 'How much does perfume marketing cost in Australia?', a: 'It depends on the number of scents, the channels you use, how much video and creative is needed and whether marketplace work is included. Ad spend is paid directly to each platform from your account, and our management fee is quoted separately in AUD after a free audit.' },
      { q: 'Do you have an Australian office?', a: 'No. We are a remote team in India, with our head office in Chennai and a team in Bengaluru. Our working day overlaps with the east-coast afternoon, so calls are easy to arrange and work moves forward overnight. Your accounts and data stay in your name.' },
    ],
  },

  // ───────────────────────────────────────────── 6. Jewellery (Australia)
  {
    slug: 'australia/jewellery-marketing-agency',
    kind: 'industry',
    market: 'AU',
    twin: 'industries/jewellery-marketing-agency',
    title: 'Jewellery Marketing Agency Australia: Online Brands',
    description: 'Jewellery marketing agency for Australian brands: clear metal and karat details, lab-grown disclosure, on-body video, gifting peaks and Meta and Google ads.',
    primaryKeyword: 'jewellery marketing agency',
    navLabel: 'Jewellery Australia',
    breadcrumb: auBreadcrumb,
    eyebrow: 'Fine, demi-fine, silver and fashion jewellery in Australia',
    h1: 'A Jewellery Marketing Agency for Australian Brands That *Earns Trust Online*',
    intro: 'Billion Ecommerce Agency is a jewellery marketing agency for Australian brands selling fine, demi-fine, silver and fashion jewellery online. We build product pages that spell out metal, karat, plating and stone origin, including lab-grown diamonds, write briefs for on-body video, run Meta and Google campaigns by price tier and plan for Valentine’s Day, Mother’s Day and Christmas. We work remotely and quote in AUD.',
    icon: 'website',
    facts: ['Metal and stone details up front', 'Online orders and showroom visits', 'Remote team, AUD quotes'],
    headings: {
      pains: 'Why Australian jewellery brands lose buyers online',
      includes: 'Jewellery marketing for Australian brands: what is covered',
      process: 'How we grow an Australian jewellery brand in *4 steps*',
      guide: 'Jewellery marketing in Australia: honesty, video and seasons',
    },
    pains: [
      { title: 'Vague metal descriptions', body: 'Gold could mean solid 9 karat, 18 karat, plated or vermeil. When pages blur the difference, careful buyers leave, and others may feel misled when the piece arrives.' },
      { title: 'Lab-grown and natural side by side', body: 'Lab-grown diamonds have changed what engagement and fine jewellery buyers compare. Pages that do not make origin obvious lose trust and can raise problems under consumer law.' },
      { title: 'Gifting peaks that arrive too fast', body: 'Valentine’s Day, Mother’s Day and Christmas drive much of the year’s demand. Brands that plan creative and stock late pay more for ads and miss delivery cut-offs.' },
    ],
    includes: [
      { title: 'Clear product facts', body: 'Metal, karat or fineness, plating type, stone type and origin, size, weight and care notes, placed where buyers look first.' },
      { title: 'Lab-grown and natural disclosure', body: 'Origin stated in titles, descriptions, filters and ads, with grading reports linked where you hold them.' },
      { title: 'Video and photography briefs', body: 'On-body reels, scale shots on a hand, sparkle clips in daylight, and try-on tools for earrings and rings where your platform supports them.' },
      { title: 'Meta and Google by price tier', body: 'Catalogue ads for fashion and demi-fine pieces; video and enquiry campaigns for engagement rings and fine jewellery.' },
      { title: 'Showroom and appointment campaigns', body: 'Local ads, Google Business Profile, booking flows and enquiry tracking for brands with a studio or showroom.' },
      { title: 'Gifting and engagement planning', body: 'Valentine’s Day, Mother’s Day, Christmas and Boxing Day campaigns, plus year-round engagement content, prepared before ad costs climb.' },
      { title: 'Search content for designs', body: 'Collection pages and guides for searches such as lab-grown engagement rings, solid gold huggies or birthstone necklaces.' },
    ],
    process: [
      { title: 'Free audit of trust signals', body: 'We review product pages, policies, reviews, photos and ad history, and list the gaps that stop a careful buyer from ordering.' },
      { title: 'Written plan and AUD quote', body: 'A plan by price tier and channel, with our fee quoted in AUD. Ad spend is paid directly from your account to Meta and Google.' },
      { title: 'Fix pages, then launch', body: 'Metal, stone and size details, new video and clear policies go live on hero collections before campaigns scale.' },
      { title: 'Plan the gifting year', body: 'We map the year around gifting peaks and engagement demand, and measure online orders, enquiries and bookings together.' },
    ],
    platforms: ['Shopify', 'WooCommerce', 'Meta Ads', 'Google Ads', 'Google Business Profile', 'Instagram', 'Afterpay', 'GA4'],
    figures: [
      { type: 'mindmap', caption: 'What an Australian jewellery product page should make clear before checkout.', after: 1, center: 'A page buyers trust', branches: [
        { label: 'Metal', items: ['Karat or fineness', 'Solid, plated or vermeil'] },
        { label: 'Stones', items: ['Natural or lab-grown', 'Grading report if held'] },
        { label: 'Fit', items: ['Size guide and scale shot', 'Weight and dimensions'] },
        { label: 'Policies', items: ['Returns and resizing', 'Care and repairs'] },
      ] },
      { type: 'steps', caption: 'An engagement ring journey that mixes online research with a call or visit.', after: 3, steps: [
        { title: 'Browse designs', body: 'Settings, metals and stone shapes' },
        { title: 'Compare origin', body: 'Lab-grown and natural, side by side' },
        { title: 'Video call', body: 'See the ring move in real light' },
        { title: 'Try or order', body: 'Showroom visit, or clear returns' },
        { title: 'Size and care', body: 'Resizing and aftercare explained' },
      ] },
    ],
    guide: [
      {
        heading: 'Why jewellery is bought on trust',
        paragraphs: [
          'Jewellery is personal, often expensive and hard to judge from a photo. A buyer wants to know what the piece is made of, how big it really is, how it will look on them and what happens if it does not fit. Many are buying a gift or marking a milestone, which raises the stakes further. When a page leaves those questions open, buyers leave too.',
          'A jewellery marketing agency should therefore start with the product page, not the ad account. Clear facts, honest photos and video, and plain policies do more for conversion than a bigger budget. Ads then send people to pages that can actually close the sale.',
        ],
      },
      {
        heading: 'Describing metals honestly without hallmarking',
        paragraphs: [
          'Australia has no compulsory national hallmarking system, unlike some other countries. Marks such as 9K or 375, 18K or 750, and 925 for sterling silver are widely used, but the main protection for buyers is the Australian Consumer Law, which prohibits misleading descriptions. In practice, that means saying exactly what a piece is made of, everywhere it is described.',
          'Terms that sound similar mean different things. Solid gold, gold-plated, gold-filled and vermeil are not interchangeable, and a buyer who pays for one and receives another has a fair complaint. Spell the difference out on the product page and in a short metals guide. This is general information, not legal advice.',
        ],
        bullets: [
          'State the karat or fineness of the metal, not just its colour',
          'Say whether a piece is solid, plated, gold-filled or vermeil, and what sits underneath',
          'Describe plating honestly, including that it can wear over time',
          'Keep the same wording across your site, ads, marketplaces and packaging',
        ],
      },
      {
        heading: 'Lab-grown diamonds and stone disclosure',
        paragraphs: [
          'Lab-grown diamonds have grown quickly and are now a normal part of the engagement and fine jewellery conversation. They are real diamonds in composition, but buyers need to know which is which. Make origin obvious in product titles, descriptions, filters and ads, and do not let a lab-grown stone be read as natural through vague wording. Simulants such as cubic zirconia and moissanite should be named plainly, and treated stones described as treated.',
          'Claims such as ethical, conflict-free or Australian-made need evidence behind them. Under consumer law, a credence claim that a buyer cannot check for themselves still has to be true, and the ACCC has been active on green and ethical claims. Australian opals and other local stones can be a strong story when you can show where they came from.',
        ],
      },
      {
        heading: 'What a jewellery marketing agency should do by price tier',
        paragraphs: [
          'Fashion and demi-fine jewellery is often bought on impulse, so catalogue ads, Reels, creator styling and a quick checkout with Afterpay work well. Silver and lab-grown pieces sit in the middle and benefit from reviews, video and email follow-up. Engagement rings and fine pieces need a longer journey: research, comparison, a video call or showroom visit, then a decision.',
          'A jewellery marketing agency should run separate campaigns and targets for each tier rather than one blended ROAS figure. For brands with a studio or showroom, enquiries and booked appointments should be tracked alongside online orders, so the full effect of the ads is visible.',
        ],
      },
      {
        heading: 'Photography, video and try-on',
        paragraphs: [
          'Flat photos rarely do jewellery justice. Short on-body clips show how a chain sits and how earrings move; scale shots on a hand show real size; daylight video shows sparkle without heavy editing. Avoid retouching that changes how a stone or metal looks, since that can mislead. Virtual try-on works for some earrings and rings, but real video on real people remains the most persuasive content.',
          'Plan shoots around how buyers search. Show stacking ideas for rings and necklaces, matching sets for gifts, and every metal colour a design comes in. For engagement rings, film the same design with different stone shapes and sizes so buyers can compare without booking a visit first. Customer photos, shared with permission, add proof that a piece looks as good in everyday life as it does in the studio, and they help with shoppers who feel unsure about size.',
        ],
      },
      {
        heading: 'Seasons, Afterpay and delivery',
        paragraphs: [
          'The Australian jewellery year has clear peaks: Valentine’s Day, Mother’s Day in May, Click Frenzy, Black Friday, Christmas and Boxing Day, with EOFY sales in June. Many proposals happen around Christmas and New Year, so engagement content should build through spring. For South Asian buyers of gold jewellery, Diwali and wedding seasons matter too.',
          'Afterpay and other buy now, pay later options are widely used for gifts and mid-priced pieces, and showing them clearly can help. For higher-value orders, explain insured delivery, signature on receipt and packaging. Returns pages should explain change-of-mind and resizing terms, alongside the consumer rights under the Australian Consumer Law that apply when an item is faulty.',
        ],
      },
      {
        heading: 'Working with us from India',
        paragraphs: [
          'Billion Ecommerce Agency has no office in Australia. We work remotely from India, with our head office in Chennai and a team in Bengaluru, and our day overlaps with your east-coast afternoon. As a jewellery marketing agency, we brief Australian photographers and creators online, report on orders, enquiries and bookings by price tier, and quote in AUD after a free audit. Your ad accounts and store stay in your name.',
        ],
      },
    ],
    related: [
      auPerfume,
      auCosmetics,
      { label: 'Ecommerce Meta ads with catalogue ads for jewellery', href: '/australia/ecommerce-meta-ads-agency/' },
      { label: 'Facebook lead ads for showroom appointments in Australia', href: '/australia/facebook-ads-agency/' },
      { label: 'Ecommerce SEO for jewellery design searches', href: '/australia/ecommerce-seo/' },
      { label: 'Shopify agency for Australian jewellery stores', href: '/australia/shopify-agency/' },
      auHub,
      { label: 'Conversion rate calculator for high-value products', href: '/tools/conversion-rate-calculator/' },
    ],
    faqs: [
      { q: 'What does a jewellery marketing agency do for Australian brands?', a: 'It plans and runs online growth for jewellery brands in Australia: product pages with clear metal and stone details, photography and video briefs, Meta and Google campaigns by price tier, search content for design searches, and campaigns around gifting peaks. For brands with a showroom, it also tracks enquiries and booked visits.' },
      { q: 'Is there hallmarking for gold jewellery in Australia?', a: 'There is no compulsory national hallmarking system. Marks such as 9K, 18K, 375 and 750 are widely used, but the main protection is the Australian Consumer Law, which prohibits misleading descriptions. State the exact metal and karat on every page and listing, and keep supplier records to back it up.' },
      { q: 'How should we describe lab-grown diamonds?', a: 'Make origin clear wherever the stone is described: product titles, descriptions, filters, ads and packaging. Lab-grown diamonds are real diamonds, but buyers must not be led to think they are natural. Name simulants such as moissanite plainly, and link grading reports where you hold them.' },
      { q: 'Can we call our jewellery ethical or recycled?', a: 'Only if you can show it. Under consumer law, ethical, recycled and conflict-free claims must be accurate, and buyers cannot easily check them, so the ACCC takes them seriously. Keep supplier documents, explain exactly what the claim covers and avoid broad statements you cannot support.' },
      { q: 'Does Afterpay help jewellery sales?', a: 'It often helps for gifts and mid-priced pieces, where splitting the cost makes a decision easier. Show it on product pages and in ads where it applies. For engagement rings and high-value pieces, trust, video and a consultation usually matter more than payment options.' },
      { q: 'How much does jewellery marketing cost in Australia?', a: 'It depends on catalogue size, the channels you use, how much photography and video is needed and whether showroom campaigns are included. Ad spend is paid directly to Meta or Google from your account, and our management fee is quoted separately in AUD after a free audit.' },
      { q: 'Do you have an office in Australia?', a: 'No. We are a remote team in India, with our head office in Chennai and a team in Bengaluru. Calls fit your afternoon on the east coast, and work moves forward overnight. We brief photographers and creators in Australia online and keep your accounts in your name.' },
    ],
  },
];
