---
title: Multi-Drone Motion Planning with RRT-Connect
description: A centralised RRT-Connect planner that finds collision-free paths for several drones at once in 3D, plus a benchmark harness that generates environments at five difficulty levels.
date: 2025-08-21
tech: [Python, NumPy, RRT-Connect, Motion Planning, python-fcl, Vedo]
repo: https://github.com/gokul-dinesh/MultiDrone
featured: true
---

**ANU Master of Computing, AI planning coursework.** The `MultiDrone` simulator (3D world, sphere drones,
FCL collision checking) was provided; the planner, experiment runner and analysis are my work.

## The problem

Plan collision-free paths for **K drones simultaneously** through a bounded 3D space full of boxes, spheres
and cylinders. The drones can't hit obstacles or each other. The planner treats the whole fleet as one robot,
so the search runs in a **3K-dimensional** configuration space, which gets hard quickly as K grows.

## What I built

- **Centralised RRT-Connect** (`rrt_connect_multidrone.py`): bidirectional trees grown from the start and goal
  configurations, goal-biased sampling, a step-limited `steer`, and greedy `connect` until the trees meet.
  Every edge is checked for validity against both obstacles and drone-to-drone collisions.
- **Path shortcutting:** randomised post-processing that removes waypoints whenever a direct motion is valid,
  giving noticeably shorter joint paths.
- **Benchmark harness** (`run_q4_experiments.py`): procedurally generates environments at five complexity levels:
  1. Level 0: empty space
  2. Levels 1–3: increasing numbers of random obstacles, with a ceiling slab at level 3 that stops drones
     simply flying over everything
  3. Level 4: full-height walls with a **narrow passage** only slightly wider than a drone

  The harness enforces start and goal clearance, retries invalid environments, and logs success, time, nodes
  and path length per trial.
- **Analysis scripts:** summary tables and plots with 95% confidence intervals.

## Results (K = 2 drones, 5 seeds per level)

| Level | Success | Mean planning time |
| :---: | :---: | :---: |
| 0 (empty) | 5/5 | 0.057 s |
| 1 | 5/5 | 0.060 s |
| 2 | 5/5 | 0.072 s |
| 3 (ceiling) | 5/5 | 0.069 s |
| 4 (narrow passage) | **4/5** | 0.051 s |

The narrow passage is where sampling-based planners struggle, and it's the only level with a failure. Random
samples rarely land inside a thin corridor, so the trees can take a long time to find the way through.

## What I learned

- Why centralised planning scales badly: each extra drone adds three dimensions to the search space.
- How much **experiment design** matters. A benchmark is only as good as its environment generator, and
  trivially easy instances can quietly inflate the results.
