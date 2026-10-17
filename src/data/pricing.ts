// Draft starting prices — client to confirm (see docs/content-brief.md). All prices exclude GST; ads prices exclude ad spend.
export const priceList = [
  { group: 'Websites', rows: [
    { name: 'Shopify store (template-based)', price: '₹60,000', unit: 'one-time', href: '/shopify-development/' },
    { name: 'Custom Shopify store', price: '₹1.5–5 lakh', unit: 'one-time', href: '/shopify-development/' },
    { name: 'WooCommerce store', price: '₹50,000', unit: 'one-time', href: '/woocommerce-development/' },
    { name: 'Custom e-commerce development', price: '₹2,00,000', unit: 'one-time', href: '/ecommerce-website-development/' },
  ]},
  { group: 'Business websites', rows: [
    { name: 'Business / corporate website (5–10 pages)', price: '₹35,000', unit: 'one-time', href: '/corporate-website-development/' },
    { name: 'Custom corporate website', price: '₹75,000–2 lakh', unit: 'one-time', href: '/corporate-website-development/' },
    { name: 'WordPress website', price: '₹30,000', unit: 'one-time', href: '/wordpress-website-development/' },
    { name: 'Website maintenance', price: '₹5,000', unit: '/ month', href: '/website-maintenance-services/' },
  ]},
  { group: 'Ads', rows: [
    { name: 'Meta & Google ads (performance marketing)', price: '₹30,000', unit: '/ month + ad spend', href: '/performance-marketing/' },
    { name: 'Amazon advertising (PPC)', price: '₹25,000', unit: '/ month or 10–15% of ad spend', href: '/amazon-marketing-agency/' },
    { name: 'Amazon account management', price: '₹30,000', unit: '/ month', href: '/amazon-account-management/' },
    { name: 'Flipkart account management', price: '₹25,000', unit: '/ month', href: '/flipkart-account-management/' },
    { name: 'Quick commerce ads (Blinkit, Zepto, Instamart)', price: '₹25,000', unit: '/ month', href: '/quick-commerce-marketing/' },
  ]},
  { group: 'SEO', rows: [
    { name: 'E-commerce SEO', price: '₹35,000', unit: '/ month', href: '/ecommerce-seo/' },
    { name: 'Shopify SEO', price: '₹30,000', unit: '/ month', href: '/shopify-seo/' },
    { name: 'Amazon SEO & listing optimisation', price: '₹20,000', unit: '/ month', href: '/amazon-seo/' },
    { name: 'AI search optimisation (GEO)', price: '₹25,000', unit: '/ month', href: '/ai-search-optimization/' },
    { name: 'SEO services & local SEO', price: '₹25,000', unit: '/ month', href: '/seo-services/' },
  ]},
  { group: 'B2B & global', rows: [
    { name: 'B2B digital marketing for manufacturers & exporters', price: '₹50,000', unit: '/ month', href: '/b2b-digital-marketing/' },
    { name: 'White-label SEO for agencies', price: 'US$350', unit: '/ month per site', href: '/white-label-seo/' },
    { name: 'SEO outsourcing to India', price: 'US$500', unit: '/ month', href: '/seo-outsourcing-india/' },
  ]},
];

export interface Tier { name: string; price: string; unit: string; for: string; features: string[]; featured?: boolean }

export const websiteTiers: Tier[] = [
  { name: 'Launch', price: '₹60,000', unit: 'one-time', for: 'New brands that need a professional Shopify store fast', features: ['Premium theme customised to your brand', 'Up to 50 products uploaded', 'UPI, cards, COD and GST invoices', 'Shiprocket / courier integration', 'Basic SEO setup and sitemap', '30 days of support'] },
  { name: 'Growth', price: '₹1,50,000', unit: 'one-time', for: 'Growing D2C brands ready to convert more visitors', features: ['Custom design for home, collection and product pages', 'Up to 300 products and migration', 'Reviews, WhatsApp and email flows', 'Speed optimisation for mobile', 'Product schema and technical SEO', 'Analytics, Meta and Google tracking'], featured: true },
  { name: 'Custom', price: '₹2,00,000+', unit: 'one-time', for: 'Large catalogues, B2B and multi-country stores', features: ['Shopify Plus, WooCommerce or headless', 'Marketplace and ERP integrations', 'B2B pricing and RFQ flows', 'Multi-currency and multi-language', 'Custom apps and automations', 'Dedicated project manager'] },
];

export const businessTiers: Tier[] = [
  { name: 'Starter', price: '₹30,000', unit: 'one-time', for: 'Small businesses that need a clean, professional WordPress site', features: ['Up to 5 pages on WordPress', 'Mobile-first design', 'Contact form and WhatsApp button', 'Google Business Profile link-up', 'Basic on-page SEO', '30 days of support'] },
  { name: 'Business', price: '₹35,000', unit: 'one-time', for: 'Companies that want a professional site that brings enquiries', features: ['5–10 pages, custom design', 'Services or product catalogue', 'Enquiry forms with lead tracking', 'Speed and technical SEO', 'Easy editing for your team', 'Analytics and Search Console setup'], featured: true },
  { name: 'Corporate', price: '₹75,000+', unit: 'one-time', for: 'Manufacturers, exporters and larger organisations', features: ['Custom design and CMS', 'Product spec sheets and RFQ forms', 'Multilingual pages', 'Careers and investor sections', 'Integrations with CRM', 'Dedicated project manager'] },
];

export const ecomSeoTiers: Tier[] = [
  { name: 'Starter', price: '₹35,000', unit: '/ month', for: 'Stores under 200 products starting with SEO', features: ['Technical SEO audit and fixes', '15 target keywords', 'Category & product page optimisation (10 pages/month)', '2 blog guides per month', 'Google Search Console & GA4 setup', 'Monthly ranking & traffic report'] },
  { name: 'Growth', price: '₹60,000', unit: '/ month', for: 'Growing stores that want organic revenue', features: ['Everything in Starter', '40 target keywords', '25 pages optimised per month', '4 blog guides per month', 'Digital PR and quality backlinks', 'AI search (GEO) readiness', 'Weekly reports'], featured: true },
  { name: 'Scale', price: '₹1,00,000', unit: '/ month', for: 'Large catalogues and multi-country stores', features: ['Everything in Growth', '100+ target keywords', 'Programmatic category pages', 'International SEO (hreflang)', 'Amazon & Flipkart listing SEO', 'Dedicated SEO lead'] },
];

export const seoTiers: Tier[] = [
  { name: 'Local', price: '₹25,000', unit: '/ month', for: 'Local businesses in one city', features: ['Google Business Profile optimisation', '10 target keywords', 'Local citations and NAP clean-up', 'On-page SEO for 5 pages/month', 'Review generation plan', 'Monthly report'] },
  { name: 'Growth', price: '₹45,000', unit: '/ month', for: 'Businesses competing across India', features: ['Everything in Local', '30 target keywords', 'Technical SEO fixes', '3 content pieces per month', 'Quality backlinks', 'Fortnightly reports'], featured: true },
  { name: 'Authority', price: '₹80,000', unit: '/ month', for: 'Competitive industries and multi-location brands', features: ['Everything in Growth', '75+ target keywords', '6 content pieces per month', 'Digital PR', 'AI search (GEO) optimisation', 'Dedicated SEO lead'] },
];
