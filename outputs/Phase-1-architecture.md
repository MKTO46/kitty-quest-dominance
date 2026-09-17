# Kitty Quest 2.0: Dominance — Phase 1

Priority: data safety → state reliability → workout lifecycle → daily tracking → dominance → UI polish.

## Current implementation

- Five working surfaces: Today, Train, Dominance, Quests, Profile; global Caelum command bar.
- Browser-local IndexedDB. Explicit version 1, 2, and 3 upgrade migrations preserve existing records. Upgrade steps are append-only; backup format migrations are separate.
- Separate stores: preferences, sessions, water, routineLogs, events, attempts, metrics, checkins, rewards, templates, configurations, exercises, goals, dailyStates, edits.
- Local dates identify daily records. Midnight creates a new daily state; it does not delete history. Routine definitions are snapshotted into dated states.
- Independent Main, Second, Extra, Sports, Custom session identities. Main and Second starts are serialized and reuse their dated slot, enforced by a unique index. Pilot duplicate slots are archived with their records intact.
- Each set is committed immediately. Pause/resume preserves logs. Completion and its source-keyed reward entry commit atomically. Concurrent or repeated completion cannot duplicate rewards.
- Ended sessions resist generic mutation. A deliberate correction records the reason, timestamp, revision, and original/corrected set snapshots. Reward entries remain unchanged.
- Full JSON backup exports every object store in one consistent read transaction. Import validates the supported version, table completeness, IDs, shapes, ranges, lifecycle states, reward sources, and dependency graph before writing. Restores replace records in one all-store transaction, with rollback on failure. The UI exports current records before restoration.
- Structured exercise data includes muscles, equipment, movement type, regressions, alternatives, progressions, dominance metadata, and safety cues.
- First Strict Pull-Up has a validated dependency DAG covering hangs, scapular control, assisted pull-ups, negatives, and grip. Its evaluator requires proof for the goal and every dependency. Account XP cannot satisfy it.
- Buttons, WebMCP, and Caelum's supported workout-rescheduling command use the same domain action registry. The command proposes the action through the UI; it does not silently mutate state.
- Transformation starting weight, goal range, later milestone, duration, and weekly trend range are configuration records. The dashboard reads them; they are exported/restored with the database.
- Offline service-worker shell cache includes the app and local font assets. Browser storage still requires backups; it is device/origin-specific and is not cloud synchronization.

## Domain boundaries

`store.js`: IndexedDB schema, migrations, transactions, consistent snapshots.

`actions.js`: command dispatch, lifecycle rules, completion/reward idempotence, correction audit, schedule changes, validated record writes.

`backup.js`: backup validation, version adapters, atomic restoration. Legacy import is intentionally deferred; a future adapter must produce a validated backup.

`config.js`: configuration defaults, structured exercise seed library, goal dependency definitions and graph evaluator.

`engine.js`: reusable activity-specific trial and consistency evaluation; lifecycle transitions. Painful, uncontrolled, maximal-effort attempts do not qualify as mastery evidence.

`app.js`: current screen rendering and interaction composition. Further phase work should split these views without moving domain rules into them.

## Workout lifecycle

Planned → Active ↔ Paused → Completed / Partial.

Ended records cannot return to active through ordinary actions. Corrections affect recorded measurements, preserve the edit history, and never award another completion reward.

## Validation

Automated tests execute the production repository and actions against a standards-compatible IndexedDB test implementation. They cover database reopen, concurrent requests, failure rollback, midnight boundaries, preservation of all historical tables, templates versus instances, corrections, backup round trips, explicit schema/backup upgrades, structured exercise metadata, goal cycles/prerequisites, and configurable transformation values. Browser checks additionally exercise the visible session and water flows.

## Next foundation work

- Full editable training program/split definitions and richer set fields (time, distance, tempo, rest).
- User-defined goals and evidence collection for each dependency; validated higher-tier definitions and automatic physical unlocks.
- Richer weekly trends/reviews, meals, per-muscle recovery history, routine variants, and schedule override editing.
- Persisted timers and broader offline/browser compatibility coverage.

Sports-specific running/climbing logic, connected AI, advanced readiness estimates, and complete boss animations are later phases. The current Caelum implementation is local deterministic app-data guidance, clearly labeled in the interface.

## Legacy migration

No old app/database was supplied. No legacy migration is implemented. Keep schema upgrades and backup adapters active; reserve legacy adapters for inspection of a real source and an explicit migration report.
