// ─────────────────────────────────────────────────────────────
//  Edit this file to change your name, bio, links and navigation.
//  Everything else (projects, posts) lives in src/content/.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Gokul Dinesh',
  title: 'Gokul Dinesh — AI & Computing',
  description:
    "Master's student in Computing specialising in AI. Linux enthusiast. Writing about ML, systems and the things I build.",
  // Shown in the hero on the home page.
  tagline: "Master's in Computing · AI specialisation · Linux enthusiast",
  location: '', // e.g. 'Dublin, Ireland' — leave empty to hide
  email: 'gokuldinesh.elleth@gmail.com',
  // Put your CV at public/cv.pdf and set this to true to show a CV button.
  hasCV: false,
};

// Social links. Remove a line to hide it. Icons: see src/components/Icon.astro.
export const SOCIALS: { label: string; href: string; icon: 'github' | 'linkedin' | 'mail' | 'rss' | 'x' | 'scholar' }[] = [
  { label: 'GitHub', href: 'https://github.com/gokul-dinesh', icon: 'github' },
  // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${SITE.email}`, icon: 'mail' },
  { label: 'RSS', href: 'rss.xml', icon: 'rss' },
];

// Top navigation. Add a page in src/pages/ and list it here.
export const NAV: { label: string; href: string }[] = [
  { label: 'About', href: 'about/' },
  { label: 'Projects', href: 'projects/' },
  { label: 'Blog', href: 'blog/' },
  { label: 'Uses', href: 'uses/' },
];
