import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog collection — one markdown file per article.
 * Articles live in src/content/blog/*.md
 *
 * Images are referenced as relative paths from the markdown file.
 * Use the image() schema helper so Astro optimizes them at build time.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      category: z.string(),
      date: z.string(), // human-readable, e.g. "25 AVRIL 2026"
      sortDate: z.coerce.date(), // ISO date for sorting
      readTime: z.string(),
      author: z.string(),
      heroImage: image().or(z.string().url()), // local image or external URL
      intro: z.array(z.string()).optional(), // intro paragraphs (lettrine on first)
      sections: z
        .array(
          z.object({
            title: z.string(),
            paragraphs: z.array(z.string()),
            images: z.array(image()).optional(),
          })
        )
        .optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
