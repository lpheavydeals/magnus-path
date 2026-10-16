export type IconName = 'shopify' | 'website' | 'amazon' | 'marketplace' | 'social' | 'quick' | 'seo' | 'ai';

export interface Link { label: string; href: string }

/** One data object = one landing page rendered by src/pages/[...slug].astro */
export interface ServicePageData {
  slug: string;                       // e.g. 'shopify-development' or 'chennai/seo-company' (no leading/trailing slash)
  kind: 'service' | 'hub' | 'industry' | 'location' | 'global';
  title: string;                      // <title>, ≤ 60 chars, primary keyword first
  description: string;                // meta description, 140–160 chars
  primaryKeyword: string;
  navLabel: string;                   // short page name for breadcrumbs, e.g. 'Shopify Development'
  headings: { pains: string; includes: string; process: string; guide: string; children?: string; pricing?: string };
  breadcrumb: Link[];                 // parents only (Home and the current page are added automatically)
  eyebrow: string;
  h1: string;                         // contains the primary keyword; wrap 1–3 words in *asterisks* for orange
  intro: string;                      // 40–70 words, primary keyword in first sentence
  icon: IconName;
  facts: string[];                    // exactly 3 short chips shown in the hero, e.g. 'Live in 3–6 weeks'
  pains: { title: string; body: string }[];        // 3 buyer problems
  includes: { title: string; body: string }[];     // 6 deliverables
  children?: { title: string; href: string; body: string; icon: IconName }[]; // hub pages: sub-services
  process: { title: string; body: string }[];      // 4 steps
  platforms?: string[];               // tools/platforms chips
  pricing?: { from: string; unit: string; note: string; items: string[] };
  local?: { city: string; areas: string[]; note: string };   // location pages
  guide: { heading: string; paragraphs: string[]; bullets?: string[] }[]; // long-form SEO content, 700+ words total
  related: Link[];                    // 3–5 internal links with keyword-rich labels
  faqs: { q: string; a: string }[];   // 6–8
  market?: 'US' | 'UK' | 'UAE';               // country-specific page: sets lang (en-US / en-GB), areaServed and offer currency
  twin?: string;                      // slug of the global page covering the same service (hreflang pair)
}
