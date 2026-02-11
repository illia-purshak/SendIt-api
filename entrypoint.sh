#!/bin/sh
set -e

# Run migrations on startup to ensure schema exists.
pnpm exec prisma migrate deploy

exec node dist/src/main.js
