# School Platform Project

This project is a school management system consisting of a Node.js backend and a SvelteKit frontend. It manages students, teachers, parents, and administrative staff across different schools, with integration for government oversight.

## Project Structure

- `apps/backend/`: Node.js Express server handling API requests, authentication, and database interactions.
- `apps/frontend/`: SvelteKit application providing the user interface for different roles.

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL (using `mysql2` pool)
- **Authentication:** JWT (JSON Web Tokens) and bcrypt for password hashing.
- **Key Modules:** `cookie-parser`, `cors`, `dotenv`.

### Frontend
- **Framework:** SvelteKit (Svelte 5)
- **Build Tool:** Vite
- **ORM:** Drizzle ORM (configured for MySQL, though backend uses raw SQL models)
- **Styling:** CSS/Svelte components.

## Getting Started

### Prerequisites
- Node.js (latest LTS recommended)
- MySQL Server

### Backend Setup
1. Navigate to `apps/backend/`.
2. Install dependencies: `npm install`.
3. Create a `.env` file in the root directory (one level above `backend/`) with the following variables:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=school
   GOV_DB_NAME=gov
   JWT_SECRET=your_jwt_secret
   ```
4. Run the development server: `npm run dev`.

### Frontend Setup
1. Navigate to `apps/frontend/`.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. The frontend will be available at `http://localhost:5173`.

## Database Schema

The system uses two primary databases:
- `school`: Contains data for school management (users, students, teachers, classes, registration requests).
- `gov`: Likely used for government-level oversight or validation (referenced in `backend/config/db.js`).

### Key Models (Backend)
- `Account`: Manages login credentials and roles.
- `User`: Profile information linked to accounts.
- `Student`/`Teacher`/`Staff`/`Parent`: Role-specific data.
- `RegistrationRequest`: Handles new school or user registrations.

## Development Conventions

- **API Routes:** Backend API routes are prefixed with `/api/` (e.g., `/api/auth`, `/api/admin`).
- **Models:** Backend uses a class-based approach for database interactions in `apps/backend/models/`.
- **Frontend State:** Uses SvelteKit's load functions and form actions for data fetching and mutations.
- **Linting:** Frontend uses ESLint and Prettier. Run `npm run lint` or `npm run format`.
