import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    category: z.enum(['Websites', 'Platforms', 'Export', 'Ads', 'SEO', 'Industries']),
    publishDate: z.coerce.date(),
    readingMinutes: z.number(),
    author: z.string(),
    summary: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.object({ label: z.string(), href: z.string() })),
    figures: z.array(z.any()).optional(), // same shape as Figure in src/data/types.ts
    // Country version of an India guide: `twin` is the India guide's id; hreflang links the versions.
    market: z.enum(['UK', 'US', 'AU', 'UAE']).optional(),
    twin: z.string().optional(),
  }),
});
export const collections = { blog };
