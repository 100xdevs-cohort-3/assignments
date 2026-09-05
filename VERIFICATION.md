# Verification results

Verified locally on Windows with Node.js 24.18.0, on September 5, 2026.

## Supplied tests

| Suite | Result |
| --- | --- |
| Week 2 JavaScript | 49 / 49 passed |
| Week 2 async JavaScript | 13 / 13 passed |
| Week 4 middleware | 10 / 10 passed |
| Week 17 PostgreSQL | 5 / 5 passed |
| Week 18 Prisma | 5 / 5 passed |
| **Total** | **82 / 82 passed** |

The supplied assertions were retained. Week 18 adds shared Prisma-client teardown to its test file.

## Application builds

All 12 build targets passed:

- Week 7 React client.
- Week 9 pet-adoption app and timer.
- Week 10 random-user app and authentication-state app.
- Week 11 Recoil shopping cart.
- Week 13 multi-page Tailwind project (all three designs).
- Week 14 TypeScript server and client.
- Week 17 PostgreSQL TypeScript project.
- Week 18 Prisma TypeScript project.
- Week 19 Next.js production build, including lint and type checks.

JavaScript syntax checks also passed for 71 application/configuration files.

## DOM checks

All five Week 3 exercise groups passed in jsdom:

- Color selection, custom colors, duplicate prevention.
- Quiz scoring, answer review, reset.
- Form-builder text/radio fields, required state, submission, removal.
- Task creation, status menu, drag/drop, persistence, deletion.
- Pokémon type lookup, card count, rendering, service-error recovery.

PokéAPI responses are mocked in these tests so they are deterministic.

## Integration checks

All nine groups in `tools/verification/integration.mjs` passed against isolated local databases:

1. Week 6 todo CRUD, validation, search, completion, deletion.
2. Week 6 bookmark validation, search, favorite/unfavorite, deletion.
3. Week 4 Taskify accounts, password hashing, task CRUD, ownership, logout revocation.
4. Week 5 Taskify accounts and the same ownership/session checks.
5. Week 7 course roles, instructor ownership, draft visibility, enrollment, duplicate prevention.
6. Week 14 TypeScript course API with the same checks.
7. Week 17 supplied PostgreSQL tests.
8. Week 18 fresh migration and supplied Prisma tests.
9. Week 19 fresh migrations and real HTTP/NextAuth signup/login, event creation/search/update/deletion, ownership checks, booking, duplicate rejection, cancellation, and cascading booking cleanup.

No configured application database was used for verification. The test runner starts and stops its own MongoDB/PostgreSQL servers and Next.js process. PostgreSQL test-cluster files remain under ignored `tools/verification/.data/`.

## Practical limits

These checks cover source compilation, DOM behavior, and API/database behavior. They do not certify pixel-perfect matching to the reference screenshots or live availability of external images, PokéAPI, and RandomUser. Marketing pages and shopping checkout are educational UI exercises; they do not create real subscriptions, stores, or payments.

To reproduce the checks, run `node tools/check-all.mjs` from the repository root. See [README.md](README.md) for individual project commands.
