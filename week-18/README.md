# Prisma travel-plan manager

The Week 17 database exercise implemented with Prisma.

## Setup

```powershell
npm install
Copy-Item .env.example .env
npm run generate
npm run migrate
npm run build
```

Set `DATABASE_URL` in `.env` to a PostgreSQL database. The initial migration creates both User and TravelPlan, so it works on a fresh database. It replaces the starter's incomplete migration, which assumed an existing todo schema.

## Implementations

- `src/db/user.ts`: create a user and retrieve by ID.
- `src/db/travelPlan.ts`: create, update title/budget, and list a user's plans.
- `src/db/client.ts`: shared Prisma client.
- `src/db/setup.ts`: clear travel rows before user rows for testing.
- `src/index.ts`: list existing plans (`npm start` after building).

Travel dates and budgets are validated before database writes. A zero budget is supported; omitted update fields are preserved.

## Tests

Run `npm test` against a dedicated database whose name ends in `_test`. Tests clear that database's assignment tables. The original assertions are retained, with shared-client cleanup added.

The root verification tool provisions a separate PostgreSQL instance and runs these tests automatically.
