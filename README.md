SendIt API

Backend API for the SendIt application, built with NestJS, Prisma, and PostgreSQL.

Useful commands

1. Install dependencies
   `pnpm install`
2. Start API in dev mode (watch)
   `pnpm start:dev`
3. Build for production
   `pnpm build`
4. Run production build
   `pnpm start:prod`
5. Lint
   `pnpm lint`
6. Tests
   `pnpm test`

Database and Prisma

1. Run only the database with Docker
   `docker compose up -d db`
2. Create and apply migrations in development
   `pnpm exec prisma migrate dev`
3. Apply migrations in production/staging
   `pnpm exec prisma migrate deploy`
4. Check migration status
   `pnpm exec prisma migrate status`
5. Reset database (destructive)
   `pnpm exec prisma migrate reset`

DB URL selection

Set these in `.env` to switch between local and Docker DB URLs.

1. `DB_URL_MODE=auto` uses `DATABASE_URL_DOCKER` when running inside a container, otherwise `DATABASE_URL_LOCAL`
2. `DB_URL_MODE=docker` forces `DATABASE_URL_DOCKER`
3. `DB_URL_MODE=local` forces `DATABASE_URL_LOCAL`
4. `DATABASE_URL` is a fallback if the others are not set
