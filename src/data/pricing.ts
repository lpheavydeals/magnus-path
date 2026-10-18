// SEO package tiers. No prices: every plan is quoted after a free audit.
export interface Tier { name: string; for: string; features: string[]; featured?: boolean }

export const ecomSeoTiers: Tier[] = [
  { name: 'Starter', for: 'Stores under 200 products starting with SEO', features: ['Technical SEO audit and fixes', '15 target keywords', 'Category & product page optimisation (10 pages/month)', '2 blog guides per month', 'Google Search Console & GA4 setup', 'Monthly ranking & traffic report'] },
  { name: 'Growth', for: 'Growing stores that want organic revenue', features: ['Everything in Starter', '40 target keywords', '25 pages optimised per month', '4 blog guides per month', 'Digital PR and quality backlinks', 'AI search (GEO) readiness', 'Weekly reports'], featured: true },
  { name: 'Scale', for: 'Large catalogues and multi-country stores', features: ['Everything in Growth', '100+ target keywords', 'Programmatic category pages', 'International SEO (hreflang)', 'Amazon & Flipkart listing SEO', 'Dedicated SEO lead'] },
];

export const seoTiers: Tier[] = [
  { name: 'Local', for: 'Local businesses in one city', features: ['Google Business Profile optimisation', '10 target keywords', 'Local citations and NAP clean-up', 'On-page SEO for 5 pages/month', 'Review generation plan', 'Monthly report'] },
  { name: 'Growth', for: 'Businesses competing across India', features: ['Everything in Local', '30 target keywords', 'Technical SEO fixes', '3 content pieces per month', 'Quality backlinks', 'Fortnightly reports'], featured: true },
  { name: 'Authority', for: 'Competitive industries and multi-location brands', features: ['Everything in Growth', '75+ target keywords', '6 content pieces per month', 'Digital PR', 'AI search (GEO) optimisation', 'Dedicated SEO lead'] },
];
