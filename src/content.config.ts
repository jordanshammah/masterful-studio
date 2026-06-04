import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Journal: long-form posts. The body is the original article HTML, preserved
// verbatim and rendered via set:html (see src/pages/journal/[id].astro).
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headline: z.string(),
    schemaDescription: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    articleSection: z.string(),
    about: z.array(z.string()),
    breadcrumbName: z.string(),
  }),
});

// Work: case-study collection. Stub now — real case studies land in Phase 2.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    service: z.string().optional(),
  }),
});

export const collections = { journal, work };
