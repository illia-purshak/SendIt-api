FROM node:20-alpine AS builder

WORKDIR /app

ENV NODE_ENV=development
ENV NPM_CONFIG_PRODUCTION=false

RUN apk add --no-cache libc6-compat
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

COPY . .

ENV DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
RUN pnpm exec prisma generate

RUN pnpm run build


FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN corepack enable
ENV HUSKY=0

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/generated ./dist/src/generated
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

CMD ["./entrypoint.sh"]
