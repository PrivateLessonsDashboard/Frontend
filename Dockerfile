FROM node:21-alpine
RUN apk add --no-cache libc6-compat && apk update

WORKDIR /app
COPY . .
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN npm i turbo -g && pnpm i --frozen-lockfile

RUN pnpm format && turbo run build --filter=web

WORKDIR /app/apps/web

EXPOSE 3000

ENTRYPOINT ["pnpm", "start"]
