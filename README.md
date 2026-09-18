# Kitty Quest 2.0: Dominance

Local-first training, protected Personal Time, an evidence-driven game layer, and a deep Muscle Map. See `outputs/Testing-and-Muscle-Map-validation.md` for the latest features, safety design, and validation.

Run `node serve.cjs` and open http://127.0.0.1:5173 locally. No production package installation is required. Alternatively serve `dist/` over HTTP on localhost or HTTPS. ES modules and service workers cannot reliably run by opening index.html directly from disk.

Install test dependencies with `pnpm install --frozen-lockfile`; run `pnpm test` (Node.js 24+). Production browser code has no package dependencies. All 115 regression tests pass.

Open Muscle Map from Train or Dominance. Exercise-specific load ladders, stages, controlled resistance PRs, bodyweight variations, and shared muscle exposure all read the same workout and Dominance evidence. Percentages measure configured primary path tier completion, never muscle growth or physiological strength.

Open Settings → Testing tools for four reviewed reset levels and isolated Test Mode. Test Mode uses a separate database, clearly marks simulated activity, and offers tomorrow, quest/XP, readiness, workout, badge, and boss simulations. Test backups cannot be restored into the real profile. Every reset offers a backup and requires acknowledgement plus typing `RESET KITTY`; full reset also asks whether to keep custom workouts and routines.

Profile contains Export Backup / Import Backup. Database schema is version 8, with append-only migrations and matching backup adapters. Never edit a released schema migration; append a new version. Legacy app migration remains deliberately deferred.

User records are device/origin-local. Moving between a local preview and a hosted origin requires exporting and restoring a backup. Serving or publishing this source does not upload the user's IndexedDB records. Caelum remains local, deterministic app-data guidance rather than a connected language model.
