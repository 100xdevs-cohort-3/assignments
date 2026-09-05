# 100xdevs Cohort 3 — solved assignments

Implementations are in the original exercise folders. The original `solution/`, `solutions/`, and `solutionsrc/` folders remain available for comparison.

Start with [SOLUTIONS.md](SOLUTIONS.md) for the question-by-question map and explanations. [VERIFICATION.md](VERIFICATION.md) records the checks performed.

Weeks 8, 12, 15, and 16 were not supplied in this repository.

## Run the HTML and JavaScript pages

From the repository root:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Open `http://localhost:8080`, then navigate to a Week 1 or Week 3 assignment. Use HTTP for the quiz because its data file is an ES module. Week 3 pages share [assets/assignments.css](assets/assignments.css).

## Run a React project

Run these commands inside the relevant folder:

```powershell
npm install
npm run dev
```

| Folder               | Application                                                    |
| -------------------- | -------------------------------------------------------------- |
| `week-7/client`      | Course selling; also start `week-7/server`                     |
| `week-9/petAdoption` | Adoption form, live validation, submitted-data table           |
| `week-9/timerApp`    | Editable countdown with start, pause, reset, and progress ring |
| `week-10/userApi`    | Random users, pagination, loading, retry                       |
| `week-10/authSystem` | Switch between state lifting and Context API                   |
| `week-11/amazonCart` | Recoil wishlist and cart                                       |
| `week-14/client`     | TypeScript course frontend; also start `week-14/server`        |

Vite prints the actual local URL. `npm run build` creates a production build.

## Run the Express projects

Install dependencies in each backend folder. For MongoDB projects, copy `.env.example` to `.env`, set `MONGO_URI`, and replace `JWT_SECRET` with a random secret.

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Only run the copy command in projects with an environment example, and preserve any existing configuration.

| Folder                                | Default port | Database / frontend                                    |
| ------------------------------------- | ------------ | ------------------------------------------------------ |
| `week-4/hard`                         | 3000         | MongoDB; backend exercise                              |
| `week-5/backend`                      | 3002         | MongoDB; serves the Taskify frontend                   |
| `week-6/6.1-todo/backend`             | 3001         | In memory; serves the todo frontend                    |
| `week-6/6.2-bookmark-manager/backend` | 3003         | In memory; serves the bookmark frontend                |
| `week-7/server`                       | 3007         | MongoDB; serves `client-easy`; React uses a Vite proxy |
| `week-14/server`                      | 3014         | MongoDB; typed server, React uses a Vite proxy         |

Week 6 needs only `npm install` and `npm start`. Its data lasts until the server restarts. The plain frontends do not have their own npm dependencies.

For course projects, create an **Instructor** account to publish courses and a **Student** account to enroll. Enrollment is an assignment operation; no payment processor is connected.

## Run the database assignments

Use Node.js 22 or newer, npm, and PostgreSQL. Set `DATABASE_URL` in each project's `.env`. The supplied reset-based tests require a database name ending in `_test`.

Week 17:

```powershell
cd week-17
npm install
Copy-Item .env.example .env
npm run build
npm start
npm run seed
npm test
```

Week 18:

```powershell
cd week-18
npm install
Copy-Item .env.example .env
npm run generate
npm run migrate
npm run build
npm test
```

Week 17 uses parameterized SQL. Week 18 implements the same operations through Prisma. The database-only password column follows the exercise contract; the authentication apps use password hashes.

## Run Week 19

The event app uses **Next.js, TypeScript, NextAuth, Prisma, and PostgreSQL**, matching the existing database schema and migration history.

```powershell
cd week-19
npm install
Copy-Item .env.example .env
npm run generate
npm run migrate
npm run dev
```

Set `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` before starting. Open `http://localhost:3000`. Create an account, publish events, search, book multiple events, and manage your bookings. Event deletion is limited to the host.

## Run Week 13

```powershell
cd week-13
npm install
npm run dev
```

The index links to all three Tailwind exercises: Favorites, Bookmark, and the Shopify homepage study. `npm run build` builds all three pages.

## Check everything

From the repository root:

```powershell
node tools/check-all.mjs
```

This installs missing project dependencies, runs the provided tests, builds the applications, tests the DOM exercises, and exercises the APIs against isolated MongoDB and PostgreSQL instances. The first integration run downloads database binaries. Test data is separate from your configured application databases.

For a single JavaScript exercise:

```powershell
cd week-2/week-2-js
npm install
npx jest tests/expenditure-analysis.test.js
```

For integration checks only, after the applications are installed and built:

```powershell
cd tools/verification
npm install
npm run dom
npm test
```
