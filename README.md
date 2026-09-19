# Kitty Quest 2.0: Dominance

Local-first training, protected Personal Time, an evidence-driven game layer, and a deep Muscle Map. See `outputs/Testing-and-Muscle-Map-validation.md` for the latest features, safety design, and validation.

Run `node serve.cjs` and open http://127.0.0.1:5173 locally. No production package installation is required. Alternatively serve `dist/` over HTTP on localhost or HTTPS. ES modules and service workers cannot reliably run by opening index.html directly from disk.

## Install on iPhone and use offline

Open the deployed HTTPS site in Safari, tap Share, choose **Add to Home Screen**, then tap **Add**. Open Kitty Quest once while connected so every app file is cached. It will then launch from the Home Screen and work offline; Profile shows connection status and the same instructions. Safari stores the IndexedDB database on that iPhone for that exact site address, so export a backup before clearing Safari data, changing phones, or moving to a different domain.

The installable package includes a web app manifest, iPhone Home Screen icon, standalone display metadata, safe-area layout, and an offline service worker. Deploy the contents of `dist/` at one stable HTTPS address. Each release should change the cache name in `dist/sw.js` so installed copies receive the new shell on their next online launch.

## 12-week Transformation Quest

Today and Profile link to a quest dashboard with Foundation, Build, and Define phases derived from the existing configurable transformation start and duration. It reads the existing four daily pillars, completed workouts, skill evidence, Muscle Map exercise records, water, measurements, recovery check-ins, and reward ledger. Weekly checkpoints save to the existing check-in and metrics tables. Progress Photo Mode stores original JPEG/PNG/WebP images as dated photo check-ins; the side-by-side and ghost overlay never alter the original. Full backups include the photos. Keep images under 5 MB each and export backups regularly, especially before changing devices.

The training page includes a pre-workout joint check with pain-aware guidance. The weekly report and Week 1 comparisons use recorded evidence, with unknown data shown as unknown. Photo records do not count as recovery check-ins or generate active-day streaks. This is a progression layer; the original workout, schedule, Bae Time, hydration, rewards, and persistence logic remain authoritative.

Install test dependencies with `pnpm install --frozen-lockfile`; run `pnpm test` (Node.js 24+). Production browser code has no package dependencies. All 115 regression tests pass.

Open Muscle Map from Train or Dominance. Exercise-specific load ladders, stages, controlled resistance PRs, bodyweight variations, and shared muscle exposure all read the same workout and Dominance evidence. Percentages measure configured primary path tier completion, never muscle growth or physiological strength.

Open Settings → Testing tools for four reviewed reset levels and isolated Test Mode. Test Mode uses a separate database, clearly marks simulated activity, and offers tomorrow, quest/XP, readiness, workout, badge, and boss simulations. Test backups cannot be restored into the real profile. Every reset offers a backup and requires acknowledgement plus typing `RESET KITTY`; full reset also asks whether to keep custom workouts and routines.

Profile contains Export Backup / Import Backup. Database schema is version 8, with append-only migrations and matching backup adapters. Never edit a released schema migration; append a new version. Legacy app migration remains deliberately deferred.

User records are device/origin-local. Moving between a local preview and a hosted origin requires exporting and restoring a backup. Serving or publishing this source does not upload the user's IndexedDB records. Caelum remains local, deterministic app-data guidance rather than a connected language model.
