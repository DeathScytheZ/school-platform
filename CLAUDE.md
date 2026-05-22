# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo layout

npm workspaces monorepo with two apps under `apps/*`:

- `apps/backend` — Express 5 API on port 3000 (CommonJS, MySQL via `mysql2/promise`, JWT auth in cookies, bcrypt hashing).
- `apps/frontend` — SvelteKit 2 / Svelte 5 (runes mode) on port 5173, `adapter-node`, Drizzle ORM configured for MySQL.

Backend `.env` is loaded from the **repo root** (`server.js` does `require('dotenv').config({path: '../../.env'})`). The frontend reads `JWT_SECRET` and `DATABASE_URL` from SvelteKit's `$env` (also root `.env`). Both apps must share the same `JWT_SECRET` because the frontend verifies the token the backend issues.

## Commands

Run from repo root:

```sh
npm run dev            # runs frontend + backend concurrently
npm run dev:backend    # nodemon apps/backend/server.js
npm run dev:frontend   # vite dev (SvelteKit)
```

Frontend-specific (run inside `apps/frontend`):

```sh
npm run build
npm run lint           # prettier --check . && eslint .
npm run format         # prettier --write .
npm run db:push        # drizzle-kit push (uses DATABASE_URL)
npm run db:generate | db:migrate | db:studio
```

No test runner is wired up. The root `npm test` and `apps/backend` `npm test` are placeholder scripts that exit non-zero.

## Architecture

### Cross-app auth flow

1. Browser POSTs credentials to SvelteKit form actions in `src/routes/**/+page.server.js`.
2. The action forwards the request server-to-server to `http://localhost:3000/api/auth/...`.
3. Backend issues a JWT (`{id, role}`, 7d) and returns it in the JSON body.
4. SvelteKit sets the JWT as an httpOnly cookie named `token` on the SvelteKit origin.
5. `src/hooks.server.js` decodes that cookie on every request and populates `event.locals.user`; route `load` functions gate access by `locals.user.role` and redirect to `/auth` if missing.
6. The backend's `middleware/auth.js` reads `req.cookies.token` for its own protected routes — so any direct browser → backend call requires the cookie on the backend origin (which CORS allows from `http://localhost:5173` with `credentials: true`).

There are effectively two parallel auth checks: SvelteKit `hooks.server.js` (gates UI pages) and Express `authenticate` middleware (gates `/api/auth/*` endpoints other than `signup`/`login`).

### Two databases

`apps/backend/config/db.js` creates **two** mysql2 connection pools:

- `schoolDb` — the platform's own data (accounts, users, registration_requests, teachers, staff, students).
- `govDb` — a separate "government" database used only by `models/GovOfficial.verify()` during signup to confirm an applicant exists in the official records.

Both default to `root` user, no password, `localhost`. Database names are hardcoded (`school`, `gov`).

### Signup → approval pipeline

Signup is a two-stage workflow, not a direct account creation:

1. `POST /api/auth/signup` inserts a row into `registration_requests` (status `pending`), then calls `GovOfficial.verify()` against `govDb` and updates the row to `gov_verified` or `gov_rejected`.
2. A system admin later calls `POST /api/auth/addUser` with the request id. `authController.addUser` runs a **transaction** on `schoolDb` that: creates `accounts` row, creates `users` row, marks the request `accepted`, then inserts into `teachers` or `staff` based on `role`. Rolls back on any failure.
3. `rejectUser` just flips the request to `rejected`.

Role-specific detail (`subject` for teacher, `position` for staff) is carried on the request row as `role_detail` and dispatched in `addUser`.

### Backend conventions

- Models are plain classes with `static` methods that execute SQL directly via the pool. They accept an optional `connection` parameter so callers can pass a transaction connection (`schoolDb.getConnection()` + `beginTransaction`); default is the pool itself. Preserve this pattern when adding new model methods that may participate in transactions.
- Passwords are hashed with bcrypt (saltRounds=10) at `RegistrationRequest.createRegistrationRequest` time and copied as-already-hashed into `accounts` in `addUser`.
- Status enums live alongside their model as frozen objects (e.g. `RegistrationRequestStatus`, `AccountStatus`) and are exported together with the class.

### Frontend conventions

- Svelte 5 runes are enabled (`compilerOptions.runes: true` in `svelte.config.js`).
- All backend communication happens in `+page.server.js` actions / loads — never in client code — so the JWT cookie can be set httpOnly.
- The `auth` route also uses a non-httpOnly `signup-pending` cookie to show a "waiting for approval" state across reloads; the `newSignup` action clears it.
- Drizzle schema is at `src/lib/server/db/schema.js`. Currently only a placeholder `task` table exists; the live schema is owned by the backend's raw SQL models, not Drizzle. Don't assume Drizzle is the source of truth.

## Gotchas

- `apps/frontend/src/routes/auth/+page.server.js` `login` action has typos in the payload keys (`offiicialId`, `passowrd`) — the backend expects `officialId`/`password`. The `teacher-dashboard` login action is the correct reference.
- `Account.authenticate` calls `bcrypt.compare` before the null check on `accountData`, so an unknown `officialId` will throw rather than return `null`.
- `routes/systemAdminRoutes.js` mounts the entire controller module as a handler (`router.get('/request', systemAdminControllers)`) — `systemAdminController.js` is currently a stub.
- Hardcoded DB credentials, CORS origin, and ports — there is no config layer yet.
- `githubToken.txt` exists at the repo root and is **not** gitignored. Do not commit it.
