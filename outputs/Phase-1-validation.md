# Phase 1 validation

25 automated regression tests passed on 2026-09-17.

The tests use the production repository/action modules with fake-indexeddb 6.2.5. They close/reopen database connections to exercise persistent state, use concurrent requests to check idempotence, and inject failures to check transaction rollback. This is supplemented by checks in the live browser; it is not a complete cross-browser or device-storage durability certification.

Covered requirements:

- Completed Main workout survives reload.
- Extra, Sports, and Custom sessions leave completed Main records unchanged.
- Sets survive pause/reload/resume.
- Concurrent/repeated completion awards exactly one XP/coin entry.
- Water survives database reopen; midnight selects a new dated state and preserves old logs.
- Dated schedule changes leave template definitions unchanged.
- Daily rollover preserves every historical table.
- Ended sessions reject accidental edits; deliberate corrections retain before/after audit records.
- Completion/reward writes and whole-database restores roll back on simulated storage failures.
- Backups round-trip all tables and reject malformed, incomplete, duplicate-ID, and unsupported versions.
- Explicit IndexedDB and backup-format migrations retain existing records.
- Structured exercises include the required data categories.
- Dependency graphs reject cycles/missing dependencies and require proof of prerequisites.
- UI and command dispatch use the same workout-rescheduling action.
- Transformation configuration survives reload and validates its target range.
- Dated routines retain their snapshot when tomorrow’s template changes.
- Pilot duplicate slots remain archived with their set logs intact.

Browser verification:

- A logged set persisted, the workout completed, and browser reload showed the completed status with 50 XP and 10 coins.
- Water WebMCP tools registered with the expected schemas/annotations. A valid 8 oz entry updated the same visible progress bar; an invalid negative amount failed and left consumption unchanged.
- Schema upgrades opened successfully after the older preview tab released its database connection.
- Profile exposed both backup controls and retained workout history.
- Public application assets, locally bundled fonts, and JavaScript syntax were checked.

Offline support uses a service-worker shell cache. Records remain in IndexedDB on this device/browser/origin; full backup exports are the restoration mechanism. Legacy app import and cloud synchronization are not implemented.

This repository contains the Phase 1 source, not a cloud-synchronized user database. Browser test records are not included in the source upload. Hosted deployment is separate from storing the code on GitHub.
