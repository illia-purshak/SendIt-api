# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
pnpm install

# Development (hot reload)
pnpm start:dev

# Build and run production
pnpm build && pnpm start:prod

# Lint (auto-fix)
pnpm lint

# Tests
pnpm test                          # all unit tests
pnpm test:watch                    # watch mode
pnpm test:cov                      # with coverage
pnpm test:e2e                      # end-to-end tests
```

## Database / Prisma

```bash
# Create and apply a new migration (dev)
pnpm exec prisma migrate dev

# Apply existing migrations (prod/staging)
pnpm exec prisma migrate deploy

# Regenerate Prisma client after schema change
pnpm exec prisma generate

# Reset database (destructive)
pnpm exec prisma migrate reset
```

Prisma client is generated into `src/generated/prisma/` (not `node_modules`). Always import from `src/generated/prisma` or `src/generated/prisma/client`, never from `@prisma/client`.

## Docker

- `docker-compose.yml` — production/EC2: full stack (API + PostgreSQL), DB not exposed externally
- `docker-compose.local.yml` — local dev: DB only, port 5432 exposed to host

## Local development workflows

### Option A — local DB

```bash
# 1. Start DB container (exposes localhost:5432)
docker compose -f docker-compose.local.yml up -d

# 2. Create .env.local with local DB URL (see .env.local.example)
# DATABASE_URL="postgresql://postgres:<password>@localhost:5432/SendIt-db"

# 3. Run the app natively
pnpm start:dev
```

### Option B — EC2 DB via SSH tunnel

```bash
# 1. Open tunnel (keep this terminal open)
ssh -L 5432:localhost:5432 ubuntu@<ec2-ip> -N

# 2. .env.local DATABASE_URL still points to localhost:5432 — no change needed

# 3. Run the app natively
pnpm start:dev
```

`.env.local` values override `.env` for both the app and Prisma CLI. See `.env.local.example`.

## Architecture

NestJS v11 + TypeScript monolith backed by PostgreSQL (Prisma v7 with `@prisma/adapter-pg`).

### Module layout

```
src/
  app.module.ts          # root module
  main.ts                # bootstrap: CORS, cookies, Zod pipe, Swagger at /api
  constants/
    apiRoutes.ts         # single source of truth for all route strings
    time.ts              # MINUTE, WEEK constants + setDeadlineFromNow()
    regex.ts             # PASSWORD_REGEX, PHONE_REGEX
  common/
    decorators.ts        # @AccessUserContext(), @RefreshTokenContext() param decorators
  filters/
    zod-validation.filter.ts  # formats ZodValidationException → {statusCode, message[]}
  utils/
    helper.ts            # hashThis() (argon2), createToken() (random hex)
  types/
    express.d.ts         # extends Express Request with tokenId, refreshToken, user
  modules/
    prisma/              # PrismaService extends PrismaClient (uses PrismaPg adapter)
    auth/                # JWT auth, registration, password reset
    mail/                # Nodemailer + Pug templates for transactional emails
```

### Auth flow

- **Access token**: short-lived JWT (15 min), passed as `Authorization: Bearer <token>`. Verified by `AccessTokenGuard`.
- **Refresh token**: 1-week token stored hashed in `RefreshTokens` table. Sent as httpOnly cookies (`refreshToken` + `tokenId`) scoped to `/auth`. Verified by `RefreshTokenGuard`. Rotation on every refresh; reuse triggers revocation of all user tokens.
- **Password reset**: SHA-256 lookup hash stored for unique lookup; argon2 hash for verification. Token expires in 15 min.

### Validation pattern

DTOs are Zod schemas wrapped with `createZodDto()` from `nestjs-zod`. The global `ZodValidationPipe` handles validation automatically. Route-level schemas can be applied with `@Body(new ZodValidationPipe(Schema))`. All route strings live in `src/constants/apiRoutes.ts`.

### Data model summary

- `User` → `IndividualProfile` or `OrganizationProfile` (set after registration via profile-completion endpoints)
- `User` → `UserCredentials` (argon2 password hash, 1:1)
- `User` → `RefreshTokens[]` (many, rotated on each use)
- `Shipment` → `Parcel[]` → `ParcelRoute[]` (tracking route points)
- `Shipment` → `ShipmentStatusHistory[]`
- User roles: `SUPER_ADMIN`, `ADMIN`, `OPERATOR`, `COURIER`, `CLIENT`
- User types: `INDIVIDUAL`, `ORGANIZATION`

### Email

`MailService` uses Nodemailer with Pug templates in `src/modules/mail/templates/`. Add new templates there and call `mailService.sendEmail(to, subject, templateName, context)`.

## Environment Variables

Copy `.env.example` to `.env` and fill in:

| Variable                                            | Notes                            |
| --------------------------------------------------- | -------------------------------- |
| `PORT`                                              | API port (default 3000)          |
| `NODE_ENV`                                          | `development` or `production`    |
| `DATABASE_URL`                                      | PostgreSQL connection string     |
| `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` | Used by Docker Compose           |
| `FRONTEND_URLS`                                     | Comma-separated origins for CORS |
| `JWT_SECRET`                                        | Secret for signing access tokens |
| `SMTP_HOST`, `SMTP_PORT`                            | Mail server                      |
| `EMAIL_ADDRESS`, `EMAIL_PASS`, `EMAIL_USER`         | Mail credentials                 |

## CI / Branching

- GitHub Actions builds the Docker image on every push/PR to `main` and `dev`.
- Feature branches follow `IP/feat/<name>` convention.
- Main branch for PRs: `dev`.
- Husky runs `eslint --fix` + `prettier --write` via `lint-staged` on pre-commit.
