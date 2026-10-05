// ─────────────────────────────────────────────────────────────
//  Edit this file to change your name, bio, links and navigation.
//  Everything else (projects, posts) lives in src/content/.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Gokul Dinesh',
  title: 'Gokul Dinesh — Software Engineer & Applied AI',
  description:
    'ANU Master of Computing (AI) graduate building full-stack products with applied AI. Next.js, NestJS, PostgreSQL, Python, Java.',
  // Shown under your name on the home page.
  tagline: 'Full-stack · Applied AI · MComp (AI), ANU',
  location: 'Canberra, Australia', // leave empty to hide
  email: 'gokuldinesh@hotmail.com',
  // Shows an "Open to work" badge on the home page. Set to '' to hide.
  openTo: 'Open to graduate roles in software engineering, data & applied AI',
  // Put your CV at public/cv.pdf and set this to true to show a CV button.
  hasCV: false,
};

// Social links. Remove a line to hide it. Icons: see src/components/Icon.astro.
export const SOCIALS: { label: string; href: string; icon: 'github' | 'linkedin' | 'mail' | 'rss' | 'x' | 'scholar' }[] = [
  { label: 'GitHub', href: 'https://github.com/gokul-dinesh', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gokul-dinesh', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${SITE.email}`, icon: 'mail' },
  { label: 'RSS', href: 'rss.xml', icon: 'rss' },
];

// Top navigation. Add a page in src/pages/ and list it here.
export const NAV: { label: string; href: string }[] = [
  { label: 'About', href: 'about/' },
  { label: 'Projects', href: 'projects/' },
  { label: 'Blog', href: 'blog/' },
  // Uses is hidden until it's filled in: rename src/pages/_uses.md to uses.md and uncomment.
  // { label: 'Uses', href: 'uses/' },
];
