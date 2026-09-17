# Kitty Quest 2.0: Dominance

Phase 2 training depth and protected Personal Time, built on the Phase 1 local-first foundation. See `outputs/Phase-2-validation.md` for scope and checks.

Run `node serve.cjs` and open http://127.0.0.1:5173 to use the app locally. No production package installation is required. Alternatively, serve `dist/` over HTTP on localhost or HTTPS. ES modules and service workers cannot reliably run by opening index.html directly from disk.

Install test dependencies with `pnpm install --frozen-lockfile`; run `pnpm test` (Node.js 24+). Production browser code has no package dependencies.

Profile contains Export Backup / Import Backup. Database schema is version 5. Never edit an already released schema migration; append a new version. Legacy app migration is deliberately deferred.

User records are device/origin-local. Moving between a local preview and a hosted origin requires exporting and restoring a backup. Serving source does not upload the user's IndexedDB records.
