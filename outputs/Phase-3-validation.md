# Phase 3: The game layer

Implemented September 18, 2026. The premium monochrome interface, protected training state, local-first storage and Personal Time remain intact.

## Rewards and progression

The authoritative game economy is an immutable reward ledger. Every award stores a stable source ID, XP amount, coin amount, timestamp, reason and linked evidence. Cosmetic purchases use separate coin debits; XP is never removed for missed days. Previously earned Phase 1/2 rewards migrate into the ledger once. The older reward table remains a compatibility record; the game UI and coin balance use the ledger.

Player Level uses a configurable deterministic curve: 500 XP for the first increase, then 100 more XP per level. It represents engagement, not strength. Existing Dominance proof remains the only physical unlock mechanism. Coins and cosmetic inventory never alter a workout, skill, goal or transformation result.

Daily caps limit session rewards, useful PR rewards, Dominance practice rewards, routine completion, check-ins and paid quests. Water logs grant no XP. Personal quests award a modest fixed amount once daily, regardless of estimated duration. One-time badge and boss rewards use separate stable identities. Level milestones can grant cosmetic titles, frames and modest coins.

## Planned daily exposures

Four Pillars: Body Mastery, Mobility & Control, Strength and Movement Base. Users can plan normal, light, recovery or unplanned/rest exposures for today or future dates. Recorded exposures preserve the plan. Dedicated entries open equipment-aware independent sessions. A pillar is honored only from a completed programmed exposure, and each daily pillar reward can occur once.

Quad Clear requires all four planned pillars; light versions count. Day Clear reflects planned pillars, dated routines, an optional water target and completed opened Main/Second sessions. Optional quests and Personal Time duration never become additional Day Clear requirements. Partial workouts retain useful work without being labeled failure.

## Quests, achievements and bosses

Persisted quest types cover Daily, Weekly, Dominance, Side, Recovery, Personal, Boss and Transformation. Dominance quests come from unfinished goal prerequisites and real exercise/skill definitions. Estimated time, priority, effort, linked goals, deadlines, rewards and evidence support short-window Caelum recommendations. Completed quests remain completed. Road to Gravity uses permanent, dependency-specific physical proof as its chain state.

Optional weekly mobility, Four Pillars and walking challenges account for remaining days and recorded walking capacity when created. They never penalize a missed target.

Earned badges store name, description, date, category, rarity, reward and evidence. Secret achievement requirements are hidden in the Trophy Room until earned. Recovery, return experiences, consistency, milestones, sport, records, transformation and Dominance all have supported award rules.

Major bosses: Gravity I, Ground Control I, Iron Will I, Roadwork I, Carry the World I and Transformation I. Physical bosses require real mastery/dependency evidence; transformation requires the configured journey duration and check-ins from distinct weeks. Boss records preserve timestamp, evidence, title, XP, coins and important stats. Full celebration mode offers a restrained dedicated boss presentation; rewards cannot be granted twice.

## Trophy Room and cosmetics

The Trophy Room sorts by date, rarity or category and opens evidence/reward details, with session links where available. Users equip one earned title and showcase up to three earned badges. The Profile retains transformation and PR records, shows current mastery focus and recent boss clears, and adds a game-style weekly review.

Cosmetic-only inventory includes Core, Eclipse, Nova, Void, Lunar and White Star orb variants; monochrome frames, quiet stars and a profile banner. The default design remains complete. Purchases and inventory writes commit atomically, concurrent purchase requests debit once, and balances cannot become negative. Behavior never depends on cosmetics.

Celebration controls: Full / Minimal / Off. Active or paused workouts defer celebrations; unread milestones remain available manually even when effects are off. Reduced-motion settings are respected.

## Transformation, streaks and balance

Weight and waist milestones require separate multi-day measurement windows with minimum samples. Single measurements cannot manufacture trend awards. Strength-maintained evidence compares controlled recorded resistance across time. The transformation boss uses configuration data rather than a hardcoded 12-week outcome and stores logged trend, waist, mastery, record, body-control, cardio, carry and consistency summaries. Photos are not enabled or stored by this build. No physique result is promised.

Active, routine, training, mobility and walking streaks are derived from dated records. Breaking a streak changes the count only. Comeback guidance preserves past progress and offers a light restart. Tracked measurement corrections do not erase an activity streak or award new game rewards.

Balance Kept recognizes recorded schedule preservation with zero XP and zero coins. Its evidence contains the planned date and protected block identity, not relationship duration or quality. Overnight Extra sessions are checked against protected blocks. Personal Time has no streak, score or duration reward.

Stopping safely preserves partial-session records and can earn a small, capped recovery acknowledgment. Painful sessions do not earn game session awards. Low-readiness recommendation achievements require actual recorded readiness provenance rather than a caller-provided flag.

## Storage, restoration and failure recovery

IndexedDB schema version 6 appends game stores to the existing migrations. Full backups include configuration, ledger, quests, badges, bosses, plans, inventory, equipped profile and celebration queue. Earlier backups upgrade explicitly. Import validates game balances, source shapes and references before the atomic clear/restore transaction.

Source events commit before a separate atomic game evaluation. If game storage fails after workout completion, the workout stays saved; replay or retry grants the missing awards once. Ledger, badge and boss entries cannot be casually rewritten. Daily rollover never clears history.

## Verification

79 automated tests pass: all 48 previous regressions plus 31 game-layer tests. Coverage includes concurrent XP/coin awards, timestamp ties and daily caps, deterministic levels, Quad Clear replay, light/recovery exposures, complete programmed sets, boss and badge idempotence, cosmetic-only effects, concurrent purchase debits, full game backup restoration, real IndexedDB v5 upgrade, old backup upgrade, streak breaks, quest completion/chain persistence, secret achievements, balance without relationship metrics, overnight overlap, pain/safe-stop behavior, trend windows, configurable transformation duration, distinct-week check-ins, correction safeguards, celebration queues, readiness provenance, late-week challenge targets and injected reward-write failure recovery.

Live browser checks verified upgrade with existing workout rewards and user settings preserved, generated quests and prerequisite chains, Pillar entry, Trophy Room sorting controls and hidden signals, title/cosmetic shop, and celebration controls. Source JavaScript passed syntax checks. The service-worker cache includes the new game modules. Browser test checks did not invent workouts or relationship commitments in the user database.

This remains a local rules-based system. No connected AI, cross-device synchronization, GPS, progress-photo feature or complete cross-browser durability certification is included. Keep exporting backups because storage is scoped to the device, browser and origin. Source uploads do not include the user database.
