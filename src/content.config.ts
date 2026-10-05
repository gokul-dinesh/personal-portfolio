import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with "_" are ignored (use them for templates).
// Frontmatter is validated at build time — a typo fails loudly instead of silently.

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    paper: z.url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // "in-progress" projects appear as redacted teasers in the "In the lab" section.
    // Their title and body are never rendered until you switch status to "shipped".
    status: z.enum(['shipped', 'in-progress']).default('shipped'),
    codename: z.string().optional(),
    hint: z.string().optional(),
    log: z.array(z.string()).default([]),
    progress: z.number().min(0).max(100).optional(),
    eta: z.string().optional(),
  }),
});

export const collections = { blog, projects };
