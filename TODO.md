# Portfolio: things only I can fill in

Tick these off as you go. Most important first.

## Urgent (security)

- [ ] **Revoke the Twitter/X API keys** hardcoded in `Sentimental_analysis_NLP_PROJECT/tweet_retriever.py`. That repo has been public since 2020. Revoke them in the X developer portal. Deleting the file isn't enough, because the keys stay in git history. Then make the repo private.

## High impact

- [ ] **Clean up your GitHub profile.** Recruiters will click the GitHub link on the site.
  - Pin `MultiDrone` and `personal-portfolio`.
  - Make old coursework and stub repos private: `Sentimental_analysis_NLP_PROJECT`, `random_python_projects`, `NLP_SESSION_WORKS`, `Arduino_`, `project_1_led-and-sound-indication`, `theatre_management_system`, `Theatre_Management_SYS`, `krypto_task`, `URL-Shortener`.
- [ ] **Fix the MultiDrone K-sweep bug, then re-run.** In `run_q4_experiments.py`, `build_starts_goals` places each goal 1 unit directly above its start. That makes every run with K = 1–12 trivial (0 iterations, 0.00 s). Put the goals on the far side of the obstacles, re-run `--k-range 1 12` and send Claude the new `summary_q4.json`. "Scales to N drones" is the result recruiters will care about.
- [ ] **Check ANU's policy on publishing assignment solutions** before promoting MultiDrone. If it's not allowed, make the repo private and remove the `repo:` line from `src/content/projects/multidrone.md`.
- [ ] **VIT UWB parking capstone:** what was your part? The repo shows Vaishnav as the author. If you built a real piece of it (Raspberry Pi reader, Flask API or Android app), tell Claude and it can be added.

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
