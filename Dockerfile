FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Ensure dev dependencies (including prisma CLI) are installed in build stage.
ENV NODE_ENV=development
ENV NPM_CONFIG_PRODUCTION=false

RUN apk add --no-cache libc6-compat
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

COPY . .

RUN pnpm exec prisma generate
RUN pnpm run build


FROM node:20-alpine AS runner

WORKDIR /usr/src/app

RUN apk add --no-cache libc6-compat
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

COPY --from=build /usr/src/app/dist ./dist
# Copy Prisma runtime artifacts built during generate (engines + client).
COPY --from=build /usr/src/app/node_modules/@prisma ./node_modules/@prisma
COPY --from=build /usr/src/app/prisma ./prisma
COPY --from=build /usr/src/app/prisma.config.ts ./prisma.config.ts

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

CMD ["./entrypoint.sh"]
