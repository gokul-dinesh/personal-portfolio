import { getCollection } from 'astro:content';

/** Prefix an internal path with the configured base (needed on GitHub Pages project sites). */
export function url(path = ''): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function readingTime(text = ''): string {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

/** Published posts, newest first. Drafts are visible in `npm run dev` only. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

/** Shipped projects: featured first, then by date. */
export async function getProjects() {
  const projects = await getCollection('projects', (p) => visible(p) && p.data.status === 'shipped');
  return projects.sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/** In-progress projects, shown as redacted teasers. */
export async function getUpcoming() {
  return getCollection('projects', (p) => visible(p) && p.data.status === 'in-progress');
}
