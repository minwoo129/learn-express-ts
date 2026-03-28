# ---- Build Stage ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn tsc

# ---- Production Stage ----
FROM node:22-alpine AS production

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN yarn install --production --frozen-lockfile

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["node", "build/src/app.js"]
