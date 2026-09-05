# TypeScript course-selling application

The Week 7 application converted to TypeScript, including the Express backend and React frontend.

## Server

```powershell
cd server
npm install
Copy-Item .env.example .env
npm run dev
```

Configure MongoDB and a JWT secret in `.env`. The server listens on port 3014.

`npm run build` type-checks and emits JavaScript into `dist`; `npm start` runs that build.

## Client

In a separate terminal:

```powershell
cd client
npm install
npm run dev
```

Vite proxies `/admin` and `/users` to port 3014. `npm run build` checks TypeScript and creates the production frontend. Once built, the backend can also serve `client/dist`.

Create instructor and student accounts to test both roles. Instructors create/edit/publish their courses. Students discover published courses, enroll, and view their purchased list.

## Types and structure

- `server/src/models`: typed Mongoose schemas.
- `server/src/middleware`: role-aware JWT authentication.
- `server/src/routes`: account and course handlers.
- `server/src/lib`: password hashing and async handler wrapper.
- `client/src/types.ts`: Course, Session, and component contracts.
- `client/src/components`: typed forms and course cards.
- `client/src/pages/Home.tsx`: UI state and typed API results.

Strict mode is enabled on both sides. API inputs are also checked at runtime.
