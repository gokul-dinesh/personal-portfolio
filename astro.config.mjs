// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE / BASE are injected by the GitHub Pages workflow.
// Locally they fall back to sensible defaults.
export default defineConfig({
  site: process.env.SITE ?? 'https://gokul-dinesh.github.io',
  base: process.env.BASE ?? '/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
