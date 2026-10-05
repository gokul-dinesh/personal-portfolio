# personal-portfolio

My personal website, where I share things about myself and my opinions.
It's built with [Astro](https://astro.build): static HTML, almost no JavaScript, and all content in Markdown.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321  (drafts are visible here)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Needs Node 22+.

## Where things live

| I want to… | Edit |
| --- | --- |
| Change name, bio, email, social links, nav | `src/config.ts` |
| Change colours / fonts | CSS variables at the top of `src/styles/global.css` |
| Edit the home page | `src/pages/index.astro` |
| Edit About / Uses | `src/pages/about.md`, `src/pages/uses.md` |
| Add a blog post | `npm run new post "Title"` → edit `src/content/blog/<slug>.md` |
| Add a project | `npm run new project "Title"` → edit `src/content/projects/<slug>.md` |
| Add a CV button | drop `cv.pdf` in `public/` and set `hasCV: true` in `src/config.ts` |
| Add a static file (images etc.) | `public/` (served from the site root) |

### Adding a new page

Create a Markdown file in `src/pages/`. The filename becomes the URL:

```md
---
layout: '@/layouts/PageLayout.astro'
title: Now
description: What I'm focused on right now.
---

Your content here.
```

Then add `{ label: 'Now', href: 'now/' }` to `NAV` in `src/config.ts`.
For pages that need components or logic, create an `.astro` file and wrap it in `BaseLayout` (see `src/pages/projects/index.astro`).

### Posts and projects

- Frontmatter is validated by `src/content.config.ts`. A missing or misspelled field fails the build with a clear error.
- `draft: true` hides an entry from the live site but keeps it visible in `npm run dev`.
- Projects with `featured: true` show on the home page.
- A project with an empty body appears as a card only. Write a body and it gets its own detail page.
- Files starting with `_` are ignored (see `src/content/projects/_template.md`).

## Features

RSS (`/rss.xml`), sitemap, blog tag pages, dark/light theme (follows the OS and remembers your choice), syntax highlighting, reading time, SEO/Open Graph tags, a custom 404 page, and an accessible, mobile-friendly layout.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
One-time setup: **Settings → Pages → Source: GitHub Actions**.
The workflow sets the site URL and base path automatically, so the site works at either
`https://gokul-dinesh.github.io/personal-portfolio/` or a custom domain.

Custom domain: add `public/CNAME` containing your domain and configure DNS. No code changes are needed.

## Project structure

```
src/
  config.ts            site-wide settings
  content.config.ts    content schemas
  content/blog/        posts (Markdown)
  content/projects/    projects (Markdown)
  pages/               routes (file = URL)
  layouts/             BaseLayout, PageLayout, EntryLayout
  components/          Header, Footer, cards, lists, icons
  styles/global.css    design tokens + base styles
public/                static files copied as-is
scripts/new.mjs        `npm run new` scaffolder
```
