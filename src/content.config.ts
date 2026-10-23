import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts live in src/content/posts/*.md
// The filename becomes the URL: agents-across-two-teams.md -> /blog/agents-across-two-teams/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Drafts are listed with a "draft" marker. Set HIDE_DRAFTS=true at build time to leave them out.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
