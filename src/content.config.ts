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
export const collections = { blog };
