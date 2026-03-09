#!/bin/sh
set -e

# Run migrations on startup to ensure schema exists.
pnpm exec prisma migrate deploy

if [ -f "dist/main.js" ]; then
  exec node dist/main.js
fi

exec node dist/src/main.js
