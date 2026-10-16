import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    category: z.enum(['Websites', 'Platforms', 'Export', 'Ads', 'SEO']),
    publishDate: z.coerce.date(),
    readingMinutes: z.number(),
    author: z.string(),
    summary: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
});
const ta = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ta' }),
  schema: z.object({
    title: z.string(),            // Tamil H1
    metaTitle: z.string(),        // <title>, ≤ 60 chars
    description: z.string(),      // Tamil meta description
    primaryKeyword: z.string(),   // Tamil or Tanglish keyword
    kind: z.enum(['hub', 'guide']),
    englishUrl: z.string(),       // closest English page, used for hreflang
    summary: z.string(),          // 2-sentence Tamil quick answer
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
});
export const collections = { blog, ta };
