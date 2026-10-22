// Which blog guides appear in the "Guides on this topic" row of each service page (by page slug).
// Guides that already list a page in their own `related` links are added automatically.
// India-specific guides (₹ examples, Indian marketplaces) are kept off UK/US/UAE/AU pages.
export const guideMap: Record<string, string[]> = {
  'amazon-ppc-guide-india': ['amazon-marketing-agency', 'amazon-account-management', 'amazon-seo', 'industries/beauty-ayurveda'],
  'how-to-sell-on-amazon-usa-from-india': ['amazon-marketing-agency', 'amazon-account-management', 'amazon-seo'],
  'best-ecommerce-platform-in-india': ['ecommerce-website-development', 'shopify-development', 'woocommerce-development', 'chennai/ecommerce-website-development', 'bangalore/ecommerce-website-development'],
  'ecommerce-website-cost-in-india': ['ecommerce-website-development', 'shopify-development', 'woocommerce-development', 'chennai/ecommerce-website-development', 'bangalore/ecommerce-website-development', 'chennai/website-development-company'],
  'digital-marketing-cost-in-chennai': ['chennai/digital-marketing-agency', 'chennai/seo-company', 'chennai/social-media-marketing-agency', 'performance-marketing', 'coimbatore/seo-services'],
  'website-design-cost-in-bangalore': ['bangalore/website-development-company', 'bangalore/digital-marketing-agency', 'bangalore/seo-company', 'bangalore/performance-marketing-agency', 'bangalore/ecommerce-website-development', 'corporate-website-development', 'wordpress-website-development'],
  'flipkart-ads-guide': ['flipkart-account-management', 'performance-marketing', 'industries/fashion-apparel'],
  'how-to-advertise-on-chatgpt': ['chatgpt-ads-agency', 'us/chatgpt-ads-agency', 'uk/chatgpt-ads-agency', 'ai-search-optimization', 'uk/ai-search-optimisation-agency', 'us/generative-engine-optimization-agency'],
  'how-to-find-buyers-for-export': ['b2b-digital-marketing', 'seo-services', 'industries'],
  'how-to-reduce-rto-cod-returns': ['ecommerce-meta-ads-agency', 'chennai/ecommerce-meta-ads-agency', 'bangalore/ecommerce-meta-ads-agency', 'ecommerce-ppc-agency', 'performance-marketing', 'shopify-development', 'industries/fashion-apparel', 'industries/beauty-ayurveda', 'chennai/digital-marketing-agency'],
  'how-to-sell-on-blinkit-zepto-instamart': ['quick-commerce-marketing', 'industries/food-fmcg', 'bangalore/performance-marketing-agency', 'industries/beauty-ayurveda'],
  'how-to-sell-on-etsy-from-india': ['industries/fashion-apparel', 'b2b-digital-marketing', 'shopify-development', 'industries'],
  'how-to-sell-on-noon': ['uae/amazon-noon-agency', 'uae/ecommerce-marketing-agency', 'uae/performance-marketing-agency-dubai', 'uae/digital-marketing-agency-dubai'],
  'shopify-seo-checklist': ['shopify-seo', 'ecommerce-seo', 'us/shopify-seo-agency', 'uk/ecommerce-seo-agency', 'london/ecommerce-seo-agency', 'australia/ecommerce-seo', 'shopify-development', 'chennai/seo-company', 'bangalore/seo-company'],
};
