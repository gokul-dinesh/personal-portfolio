import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '@/config';
import { getPosts } from '@/utils';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  // Resolve against site + base so links work on GitHub Pages project sites.
  const root = new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/'), context.site);
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: root.href,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      categories: p.data.tags,
      link: new URL(`blog/${p.id}/`, root).href,
    })),
  });
}
