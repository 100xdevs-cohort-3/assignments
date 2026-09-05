# Gather — event booking assignment

A Next.js App Router application with TypeScript, Tailwind CSS, NextAuth credentials sessions, and Prisma/PostgreSQL.

## Setup

Use Node.js 22 or newer and a PostgreSQL database.

```powershell
npm install
Copy-Item .env.example .env
npm run generate
npm run migrate
npm run dev
```

Set `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL=http://localhost:3000` in `.env`. Generate a random secret with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.

Open http://localhost:3000. Use `npm run build` and `npm start` for production mode.

## Features

- Signup/signin with hashed passwords and NextAuth sessions.
- Browse upcoming events and search title, description, or location.
- Authenticated users can host events.
- Book multiple events and view personal bookings.
- Cancel a booking.
- Hosts can delete their own events; associated bookings are removed.
- The event update API enforces host ownership.
- Validation and consistent API errors; unique account emails and user/event booking pairs.

## Routes

| Page                 | Purpose                    |
| -------------------- | -------------------------- |
| `/`, `/events`       | Discover and search events |
| `/events/new`        | Create an event            |
| `/bookings`          | View/cancel your bookings  |
| `/signup`, `/signin` | Account forms              |

| API                       | Methods                                     |
| ------------------------- | ------------------------------------------- |
| `/api/user`               | POST signup; GET authenticated user         |
| `/api/auth/[...nextauth]` | NextAuth session and login/logout endpoints |
| `/api/events`             | GET search; POST create                     |
| `/api/events/:id`         | PATCH update; DELETE remove (host only)     |
| `/api/events/:id/book`    | POST book; DELETE cancel own booking        |
| `/api/bookings`           | GET current user's bookings                 |

Dates entered in the form use local time and are sent as UTC ISO timestamps.

The original PostgreSQL schema and migration history are retained. This corrects the starter README's MongoDB description. Migrations are applied to a new database with `npm run migrate`.

For integration testing, see [the root guide](../README.md#check-everything). The verifier starts isolated databases and tests the real NextAuth and API flows.
