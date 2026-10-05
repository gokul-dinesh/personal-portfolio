---
title: Bardar — Artist Discovery Platform
description: A live artist discovery and analytics platform. Explore artists by location, compare them head to head, and ask an AI assistant about music.
date: 2026-06-01
tech: [Next.js, NestJS, Supabase, PostgreSQL, Last.fm API, Vercel, Heroku]
demo: https://bardar.online
featured: true
---

**ANU TechLauncher capstone. Team of 7. I was a full-stack developer.**

Bardar is a live platform at [bardar.online](https://bardar.online) for discovering and analysing music artists.
Users can explore artists by location, compare two artists head to head, bookmark profiles, and chat with
an AI assistant scoped to music and artists.

## What I built

- **Frontend & backend:** Next.js frontend and NestJS API on Supabase (PostgreSQL), including complex filtered
  queries and relational data across artist and user profiles.
- **Genre data pipeline:** pulled genre data from the Last.fm API to enrich artist profiles with
  genre-specific insights and power the popularity scoring.
- **Bookmarks:** designed and implemented with a teammate so users can save and revisit artists across sessions.
- **Deployment:** frontend on Vercel, backend on Heroku, with environment-based config for staging and production.
- **Testing:** end-to-end tests covering the core user flows.

<!-- TODO: add a screenshot (public/projects/bardar.png) and one concrete number: users, artists indexed, query latency… -->
