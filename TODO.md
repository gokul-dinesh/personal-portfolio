# Portfolio: things only I can fill in

Tick these off as you go. Most important first.

## High impact

- [ ] **Make the "In the lab" teaser true.** `src/content/projects/lab-01.md`
  - The codename, hint, log lines, `progress: 40` and ETA are placeholders. Change them to match the real AI/ML project.
  - When it ships: set `status: shipped`, write the real title, description, tech and links, and add a write-up in the body.
- [ ] **Screenshots for Bardar and PoliRec**, 2–3 each. Put them in `public/projects/` and send them to Claude to wire up.
- [ ] **PoliRec repo link.** Is it public? If yes, add `repo:` in `src/content/projects/polirec.md`. If not, consider a short screen recording or GIF.
- [ ] **One number for Bardar** (artists indexed, users, latency, anything measured). Add it to `src/content/projects/bardar.md`.

## Medium

- [ ] **Uses page.** Fill in your distro, desktop or window manager, shell, terminal, editor, hardware and games in `src/pages/_uses.md`. Then rename it to `uses.md` and uncomment the `Uses` line in `NAV` in `src/config.ts`.
- [ ] **CV download.** Decide whether you want one. If yes, use a PDF without your phone number, saved as `public/cv.pdf`, and set `hasCV: true` in `src/config.ts`.
- [ ] **First blog post.** Rewrite `src/content/blog/hello-world.md` in your own voice.

## Quick checks

- [ ] **Contact email.** The site uses `gokuldinesh@hotmail.com`, the one on your resume. Change `email` in `src/config.ts` if you'd rather use Gmail.
- [ ] **"Open to work" badge.** Update or clear `openTo` in `src/config.ts` once you land a role.
- [ ] *(Optional)* **Custom domain.** Add `public/CNAME` with your domain and set up DNS.
