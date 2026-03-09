FROM node:20-alpine AS build

WORKDIR /api

# Ensure dev dependencies (including prisma CLI) are installed in build stage.
ENV NODE_ENV=development
ENV NPM_CONFIG_PRODUCTION=false

RUN apk add --no-cache libc6-compat
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

COPY . .

ARG DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
RUN DATABASE_URL="${DATABASE_URL:-postgresql://postgres:postgres@localhost:5432/postgres}" pnpm exec prisma generate

RUN pnpm run build


FROM node:20-alpine AS runner

WORKDIR /api

RUN apk add --no-cache libc6-compat
RUN corepack enable
ENV HUSKY=0

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

COPY --from=build /api/dist ./dist
# Prisma client is generated into src/generated; copy it into dist for runtime imports.
COPY --from=build /api/src/generated ./dist/src/generated
# Copy Prisma runtime artifacts built during generate (engines + client).
COPY --from=build /api/node_modules/@prisma ./node_modules/@prisma
COPY --from=build /api/prisma ./prisma
COPY --from=build /api/prisma.config.ts ./prisma.config.ts

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

CMD ["./entrypoint.sh"]
