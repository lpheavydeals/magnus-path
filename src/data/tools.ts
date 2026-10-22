// Free tools and resources: one list used by /tools/, /resources/, the sitemap page and the home page.
type Icon = 'shopify' | 'website' | 'amazon' | 'marketplace' | 'social' | 'quick' | 'seo' | 'ai';
export type FreeItem = { title: string; desc: string; href: string; icon: Icon; group: string };

export const freeTools: FreeItem[] = [
  { title: 'Ecommerce website checker', desc: 'Test mobile speed and check order-value boosters, offers, trust and checkout. Get a score and your top fixes.', href: '/tools/ecommerce-website-checker/', icon: 'website', group: 'Check your store' },
  { title: 'Conversion rate calculator', desc: 'See what a better conversion rate or order value is worth in extra orders, revenue and profit.', href: '/tools/conversion-rate-calculator/', icon: 'website', group: 'Check your store' },
  { title: 'Profit margin calculator', desc: 'True profit per order after product cost, shipping, payment fees, returns and ads.', href: '/tools/profit-margin-calculator/', icon: 'marketplace', group: 'Margins and pricing' },
  { title: 'Discount calculator', desc: 'How many more sales a discount needs just to keep the same profit.', href: '/tools/discount-calculator/', icon: 'marketplace', group: 'Margins and pricing' },
  { title: 'Free shipping threshold calculator', desc: 'Set a free-delivery threshold that lifts order value without eating your margin.', href: '/tools/free-shipping-threshold-calculator/', icon: 'quick', group: 'Margins and pricing' },
  { title: 'RTO and COD cost calculator', desc: 'What returned cash-on-delivery parcels cost you each month, and what moving buyers to prepaid saves.', href: '/tools/rto-cod-calculator/', icon: 'quick', group: 'Margins and pricing' },
  { title: 'Amazon & Flipkart profit calculator', desc: 'Payout and profit per unit after marketplace fees, GST, ads and returns.', href: '/tools/marketplace-profit-calculator/', icon: 'amazon', group: 'Margins and pricing' },
  { title: 'ROAS & break-even ACoS calculator', desc: 'Check whether your Meta, Google, Amazon or Flipkart ads actually make money.', href: '/tools/roas-calculator/', icon: 'social', group: 'Ads and growth' },
  { title: 'Ad budget planner', desc: 'Work back from a revenue target to the traffic, orders and ad spend you need each month.', href: '/tools/ad-budget-planner/', icon: 'social', group: 'Ads and growth' },
  { title: 'LTV and CAC calculator', desc: 'Customer lifetime value, the most you can pay to win a customer, and your payback period.', href: '/tools/ltv-cac-calculator/', icon: 'ai', group: 'Ads and growth' },
  { title: 'UTM link builder', desc: 'Build tracked links for Meta, Google, WhatsApp, email and influencer campaigns in seconds.', href: '/tools/utm-builder/', icon: 'seo', group: 'Ads and growth' },
];

export const freeResources: FreeItem[] = [
  { title: 'Ecommerce sale calendar 2027', desc: 'Key sale dates for India, the UK, US, UAE and Australia, with when to start ads and prep.', href: '/resources/sale-calendar/', icon: 'quick', group: 'Plan' },
  { title: 'Festive sale playbook', desc: 'A six-week, week-by-week plan before Diwali, Black Friday, Ramadan or EOFY.', href: '/resources/festive-sale-playbook/', icon: 'social', group: 'Plan' },
  { title: 'Ecommerce launch checklist', desc: '50 points from domain and payments to launch week. Tick as you go or download the PDF.', href: '/resources/ecommerce-launch-checklist/', icon: 'shopify', group: 'Checklists and templates' },
  { title: 'Product page checklist', desc: '30 points that turn product pages into sales pages: images, offers, delivery, trust and SEO.', href: '/resources/product-page-checklist/', icon: 'website', group: 'Checklists and templates' },
  { title: 'Monthly ads report template', desc: 'A ready spreadsheet for spend, revenue, ROAS, CAC and profit after ads by channel.', href: '/resources/ads-report-template/', icon: 'marketplace', group: 'Checklists and templates' },
  { title: 'Ecommerce glossary', desc: 'ROAS, ACoS, RTO, AOV, LTV, PMax, Advantage+ and 50 more terms in plain English.', href: '/resources/ecommerce-glossary/', icon: 'ai', group: 'Learn' },
];
