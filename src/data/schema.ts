import { site } from './site';
export const breadcrumbSchema = (trail: { label: string; href: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [{ label: 'Home', href: '/' }, ...trail].map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${site.url}${c.href}` })),
});
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
