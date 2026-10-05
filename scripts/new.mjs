#!/usr/bin/env node
// Scaffold a new post or project:
//   npm run new post "My post title"
//   npm run new project "My project"
import { existsSync, writeFileSync } from 'node:fs';

const [kind, ...words] = process.argv.slice(2);
const title = words.join(' ').trim();
if (!['post', 'project'].includes(kind) || !title) {
  console.error('Usage: npm run new <post|project> "Title"');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const date = new Date().toISOString().slice(0, 10);
const dir = kind === 'post' ? 'src/content/blog' : 'src/content/projects';
const file = `${dir}/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}

const frontmatter =
  kind === 'post'
    ? `title: ${JSON.stringify(title)}\ndescription: ""\ndate: ${date}\ntags: []\ndraft: true`
    : `title: ${JSON.stringify(title)}\ndescription: ""\ndate: ${date}\ntech: []\n# repo: https://github.com/gokul-dinesh/${slug}\nfeatured: false\ndraft: true`;

writeFileSync(file, `---\n${frontmatter}\n---\n\n`);
console.log(`Created ${file} (draft: true — flip it to false to publish)`);
