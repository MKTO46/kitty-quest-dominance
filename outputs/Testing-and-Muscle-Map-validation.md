# Testing Tools and Muscle Map

Implemented September 18, 2026. Builds on the Phase 1–3 foundation without resetting real records.

## Safe reset levels

Settings → Testing tools exposes Reset Today Only, Reset Active Sessions, Reset Progression Test Data, and Full Test Profile Reset. The current profile and date are visible throughout. Full reset asks “Keep my custom workouts and routines?” before producing a review.

Every level lists its deletion scope and affected record counts, offers Export Backup, requires an acknowledgement, and requires the exact phrase RESET KITTY. A reviewed database fingerprint and an exact transaction-time snapshot comparison reject stale previews, including changes made by another tab. Clears and writes commit in one transaction; failures roll back every deletion. Successful reset returns a full pre-reset backup, which the UI exports automatically.

Today reset removes current-date workout instances and tracking inputs, resets current-date schedule completion while preserving the blocks, resets quests completed today, and preserves earlier workout and hydration history. Active reset removes unfinished sessions and their temporary records and scheduling links, never completed sessions. Progression reset clears trials, mastery, PRs, game rewards and purchases while preserving workout history, templates, configuration and settings. Its persisted baseline prevents retained old records from regenerating PRs or rewards. New sessions can earn fresh progress.

Full reset clears user tracking and game state and returns preferences to first launch. Exercise library, configured skill definitions, goal graphs, muscle path configuration, equipment profiles, app/economy configuration and system definitions remain. Custom templates and recurring personal-time patterns are retained or removed according to the user's choice. Built-in shipped templates, if marked builtIn, survive either choice. Deliberate reset is distinct from ordinary daily rollover, which still never deletes history.

## Isolated Test Mode

The real and test profiles use different IndexedDB names. Profile identity is captured separately in each loaded tab so switching another tab into Test Mode cannot change a real tab's clock. Only the test profile uses the simulated day offset. A persistent TEST MODE banner marks the active environment.

Controls simulate tomorrow/daily rollover, complete a synthetic quest and award test XP, change Triceps soreness, complete a synthetic workout, trigger a first-workout badge, and prove the Ground Control boss through synthetic Dominance evidence. The normal Muscle Map and Dominance screens inspect these calculations. Test rewards are rejected by the real-profile action layer. Exports identify test backups, and the restore action refuses to mix them into the real profile. Real profile reset remains possible only through its explicitly labeled, reviewed confirmation flow; this build did not execute a real reset.

## Muscle Map

Train and Dominance link to 27 capability areas across Arms, Shoulders, Chest, Back, Core, and Lower body. The library contains 78 structured movements, including the requested curl, extension, shoulder, chest, back, core, leg, calf and hip variations. Exercises retain target muscles, equipment, movement types, relationships, resistance type, Dominance links, and safety metadata. Gym cable-machine equipment resolves cable movement requirements.

Muscle Map is a derived view, not another progression database. It reads sessions, set logs, skillDefinitions, attempts, masteryAwards, records and recordEvents. One shared exercise contributes to multiple muscle views without writing duplicate sessions. Historical logs that predate exercise IDs can resolve through their recorded names without changing the source record.

Each exercise shows its most recent controlled non-painful set, exact exercise PRs and source-session links, dominated tiers, current proof requirements and stage, related goals, and same-exercise history/chart. Later bodyweight variations show locked stages until preceding proofs are earned. Load ladders can use dumbbell, machine or custom increments. The existing curl ladder remains in its original skill tree. Assistance progresses downward and has a separate least-assistance PR; it is never treated as lifted resistance. Programmed completion and same-exercise strength-maintenance comparisons respect that direction. Heaviest controlled resistance is separate from a heavier set with unconfirmed form.

Users choose relevant Primary/Core paths; other paths remain Optional. Region percentages are completed primary tiers divided by the total configured primary tiers. They explicitly do not measure anatomy, muscle growth, physiological strength or a universal muscle weight. Current proof percentages remain distinct from permanent tier completion. Suggestions respect available equipment and earlier locked proofs. Muscle milestones require breadth across distinct primary paths, including each tier's control, endurance and configured practice days. Stable award identities prevent repeated milestone XP; corrected session evidence cannot trigger a new muscle reward.

Practiced and awarded tiers retain their rules and order. Future load tiers can be configured, while trial rule edits cannot silently change ladder resistance or assistance direction. Existing tracked correction and protected-history actions remain intact.

## Caelum and scheduling

Muscle queries return exercise-specific controlled loads and configured proof, with explicit unknowns. Supported queries cover Triceps/Biceps capability, arm progress, closest trials, next configured weights, contributor exercises, lowest recorded path completion, and muscles with no recent exposure. Weakest means lowest recorded configured path coverage, never a biological or medical diagnosis.

Extra-muscle requests open the existing independent Extra session flow with current Dominance paths and Free Session choices. Recommendations preserve training/health/goals/schedule memory controls and protected personal-time windows. The test clock is shared across dated tracking, scheduling, actions and local guidance. Muscle mastery contributes to the existing training/game layer; walking remains movement tracking rather than forced muscle mastery.

## Validation

115 automated tests pass: 79 existing regression tests and 36 additional Muscle Map/testing regressions. Coverage includes every requested case plus atomic reset failure, stale/cross-profile confirmation, test backup isolation, protected practiced tiers, legacy workout-name resolution, metadata migration ordering, shared curl source, assistance direction, controlled-load PRs, and corrected-proof reward protection. Actual IndexedDB and backup migrations are exercised. Every JavaScript module parses, and all 36 offline shell assets exist.

Browser checks verified the desktop map, region detail, exercise detail, ladder form, Settings reset entry, custom-template choice, full-reset review/backup/typed confirmation, synthetic workout, exercise-specific Caelum answer, test XP/quest, Ground Control boss, and simulated tomorrow. Returning to real mode restored the original date, settings and reward balances. No real deletion or invented real workout was performed. No browser errors were recorded.

## Storage evolution

Released schema migrations 1–6 remain unchanged. Version 7 adds muscle path configuration and reset baselines; version 8 enriches Dominance links and alias coverage while retaining practiced rules and user-selected paths. Backup adapters upgrade earlier formats to the same schema. Muscle path settings and reset baselines round-trip with the full database. Offline caching includes every new module and bundled local font.

Caelum is still local deterministic guidance. Connected AI, old-app migration and external fitness imports remain later interfaces. Test controls produce synthetic fixtures only, and no personal database is included in the source package or GitHub update.
