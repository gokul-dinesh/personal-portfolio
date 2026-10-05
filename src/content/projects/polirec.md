---
title: PoliRec — Government Efficiency Android App
description: A role-based Android app that digitises vehicle records, profiles and transport policies, with an integrated AI chatbot.
date: 2025-10-01
tech: [Java, Android, Firebase, Espresso, JUnit, Python]
featured: true
---

**ANU group project. Team of 5. I owned the policies module.**

PoliRec digitises the management of vehicle records, personal profiles and government transport policies,
with separate experiences for citizens and administrators.

## What I built

- **Policies module (sole owner):** the admin-facing policy creation flow and the user-facing browse and search
  interface, backed by Firebase Realtime Database for live storage and retrieval.
- **Role-based access control:** used the **State design pattern** (`UserState`, `AdminState`, `RegularUserState`)
  to keep permission logic out of the UI code.
- **AI-ready data:** researched and loaded **150+ real Australian transport policies** into Firebase, structured
  so the app's integrated AI chatbot could use them.
- **Synthetic data:** generated and validated a **2,500-entry** user and vehicle dataset with Python (Faker),
  matching the structure required by the app's AVL-tree-backed search.
- **Testing:** Espresso UI tests and JUnit unit tests for policy flows, login and search validation.

<!-- TODO: add repo link (if public) and screenshots. -->
