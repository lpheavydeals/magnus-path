// EXAMPLE CASE STUDIES — illustrative only. Pages render with an "Example" badge and noindex
// until `example` is set to false with real, client-approved data.
export interface CaseStudy {
  slug: string; example: boolean; client: string; industry: string; type: string; bg: string;
  stats: [string, string][]; summary: string;
  challenge: string[]; did: string[]; results: string[]; services: { label: string; href: string }[];
  quote?: { text: string; who: string };
}
export const cases: CaseStudy[] = [
  {
    slug: 'ayurveda-brand-shopify-meta-ads', example: true, client: 'Chennai Ayurveda brand', industry: 'Beauty & Ayurveda', type: 'Shopify rebuild · Meta ads',
    bg: 'linear-gradient(135deg,#2a1a12,#7a3418 60%,#f16436)', stats: [['3.1×', 'blended ROAS'], ['+64%', 'conversion rate']],
    summary: 'Rebuilt product pages and checkout for mobile, then launched structured creative testing on Meta.',
    challenge: ['Most traffic came from Instagram on mobile, but the store was a desktop-first theme with slow product pages.', 'Meta campaigns were running a single creative per product with no testing plan, and reporting did not connect ads to orders.'],
    did: ['Rebuilt the Shopify theme mobile-first with clear ingredient, usage and delivery information on every product page.', 'Added UPI-first checkout, COD verification and WhatsApp order confirmation.', 'Set up server-side purchase tracking and restructured Meta campaigns into prospecting, retargeting and testing.', 'Ran weekly creative tests using customer reviews and founder-led videos.'],
    results: ['Blended ROAS improved to 3.1× over the first 90 days.', 'Store conversion rate rose 64% on mobile.', 'COD return-to-origin orders reduced after verification was added.'],
    services: [{ label: 'Shopify development', href: '/shopify-development/' }, { label: 'Performance marketing', href: '/performance-marketing/' }, { label: 'Beauty & Ayurveda', href: '/industries/beauty-ayurveda/' }],
  },
  {
    slug: 'tiruppur-apparel-amazon-us', example: true, client: 'Tiruppur apparel exporter', industry: 'Fashion & Ethnic Wear', type: 'Amazon US · Shopify',
    bg: 'linear-gradient(135deg,#121316,#2c2f35 55%,#5a3a2c)', stats: [['+58%', 'monthly orders'], ['−31%', 'ACoS']],
    summary: 'Listing SEO and Sponsored Brands on Amazon US, plus a D2C Shopify store for repeat international buyers.',
    challenge: ['A knitwear manufacturer selling on Amazon.com had listings written for wholesale buyers, not US shoppers.', 'Sponsored Products campaigns were on broad auto targeting with no negative keywords.'],
    did: ['Rewrote titles, bullets and backend search terms around US search behaviour and size questions.', 'Built A+ content and lifestyle images, and launched Sponsored Brands for the hero range.', 'Harvested converting search terms into exact-match campaigns and added negatives weekly.', 'Launched a Shopify store with Shopify Markets for repeat buyers in the US and UK.'],
    results: ['Monthly Amazon orders grew 58%.', 'ACoS fell 31% while spend stayed similar.', 'Repeat buyers started ordering directly from the D2C store.'],
    services: [{ label: 'Amazon advertising', href: '/amazon-marketing-agency/' }, { label: 'Amazon SEO', href: '/amazon-seo/' }, { label: 'Fashion & ethnic wear', href: '/industries/fashion-apparel/' }],
  },
  {
    slug: 'snacks-brand-seo-quick-commerce', example: true, client: 'South Indian snacks brand', industry: 'Food & FMCG', type: 'E-commerce SEO · Blinkit ads',
    bg: 'linear-gradient(135deg,#3b1d0f,#c2410c 60%,#ffb08a)', stats: [['120+', 'keywords in top 10'], ['4', 'quick-commerce cities']],
    summary: 'Category-page content and technical SEO on the D2C store, with a quick-commerce launch across four metros.',
    challenge: ['The D2C store had hundreds of product variants but thin category pages that did not rank for snack searches.', 'The brand wanted quick-commerce reach in metros outside Tamil Nadu without overspending on ads.'],
    did: ['Fixed duplicate URLs and added product and breadcrumb structured data.', 'Wrote category pages and gifting guides around how buyers search for South Indian snacks.', 'Planned city-wise assortment and stock for quick-commerce launch, then ran visibility ads around festive seasons.'],
    results: ['More than 120 target keywords reached the top 10.', 'Live on quick commerce in four metro cities.', 'Organic orders grew alongside quick-commerce sales.'],
    services: [{ label: 'E-commerce SEO', href: '/ecommerce-seo/' }, { label: 'Quick commerce ads', href: '/quick-commerce-marketing/' }, { label: 'Food & FMCG', href: '/industries/food-fmcg/' }],
  },
];
