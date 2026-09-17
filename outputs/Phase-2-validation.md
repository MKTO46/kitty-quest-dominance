# Phase 2: Training depth and Personal Time

Implemented on September 17, 2026, preserving the Phase 1 monochrome interface and local-first database.

## Delivered

- 41 structured exercises with muscles, equipment, movement intent, substitutions, progression relationships, measurement types, safety metadata and related mastery paths.
- Independent muscle-specific Extra Training, free training, Light/Rebuild and targeted Dominance evidence sessions.
- Explainable Still Hungry recommendations from stored training, equipment, soreness, recovery, unfinished mastery and goal prerequisites, and time before commitments. Low estimated readiness favors Light/Rebuild. Upcoming protected blocks constrain the recommendation window.
- Reproducible per-muscle and general readiness estimates with input explanations; soreness logging from 0–4. Estimates remain advisory.
- Adaptive progression suggestions after three successful, controlled sessions; no automatic resistance increase or endless volume progression.
- Push-up and pull-up paths, curl load tiers, grip, mobility, carry and running foundations. Distinct trial requirements, qualifying practice days, permanent idempotent mastery awards, and dependency-specific pull-up evidence. Optional 4 × 100 endurance configuration is restricted to eligible curl levels.
- Rich reusable workout templates with order, load, repetitions, duration, distance, rest, tempo, difficulty, notes and mode; edit, duplicate and archive preserve session snapshots.
- Automatic resistance, repetition, controlled-repetition, timed, distance, carry and pace records with stable source identities; restrained optional PR messages. Current records recalculate after tracked corrections while historical record events remain preserved.
- Running efforts save time, distance, pace, intervals, effort and notes. Carry efforts save type, load, distance, duration, grip feedback and notes.
- Filterable completed and partial history with set details, substitutions, effort, elapsed duration, rewards, proof and correction history.
- Manual Home/Gym/Travel equipment profiles; sports toggles hide sport suggestions without deleting their history.
- Local rules-based Caelum coaching and shared domain actions. Assistant memory permissions govern access to schedule, training, goals and health inputs; no connected language model or GPS is used.

## Personal Time

Reusable protected commitments with Bae Time 🤍, Family Time, Friend Time, Me Time, Hobby Time, Gaming, Creative Time and custom labels. Supports manual or weekday recurrence, flexible duration, moving dated instances, and Planned / Active / Completed / Skipped / Moved status. Moving an instance preserves its recurrence pattern and identity.

Today, Schedule / Caelum Planner and Profile's weekly review show Personal Time. Optional automatic scheduling rejects protected overlaps, including overnight future recurrences. Still Hungry recommends sessions fitting before the next commitment and defers extras while a commitment is active. Explicit manual training remains a user choice.

Personal Time has no XP, duration rewards, productivity requirements or streaks. Weekly review counts completed blocks.

## Data safety

IndexedDB schema version 5 uses append-only migrations. Version 4 adds training, records, soreness, equipment, mastery and recurrence stores; version 5 separates trial-specific exercise bindings so hang proof cannot be supplied by timed scapular reps. Explicit backup-format adapters support earlier versions. All stores participate in full offline backup export and atomic restoration.

Historical workouts remain protected from casual writes. Deliberate measurement corrections require a reason and retain before/after snapshots. They recalculate current records and proof without duplicating workout rewards or retracting permanent mastery awards. Template changes never rewrite recorded sessions. Daily rollover never clears history.

## Verification

48 automated regression tests passed. Tests exercise production repository/actions against fake-indexeddb, including reopen, concurrency, rollback, protected history, backup roundtrips, schema upgrades, Extra/Main isolation, substitutions, difficulty persistence, reproducible readiness, PR/mastery idempotence, dependency-specific goal evidence, sports toggles, protected time, partial sessions, no-equipment alternatives, adaptive suggestions, trial-specific hang evidence, overnight recurrences and tracked corrections.

Browser checks verified startup with existing Phase 1 completion, water and reward records preserved, new schema upgrades, Training, recommendations and explanation controls, custom builder additions, progression trees, Bae Time scheduling fields and presets, and Planner / weekly counts. No browser errors were observed during these checks. User schedule records were not invented for browser verification.

This is the first rules-based implementation. Readiness percentages and session durations are estimates, not medical measurements or learned coaching. Session elapsed duration includes pauses. Cross-device sync, legacy-app migration, connected AI and a complete cross-browser/offline durability certification remain outside this phase. Backups remain essential because storage is local to the browser/device/origin.
