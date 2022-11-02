FROM node:fermium-alpine3.16 AS builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci
COPY . .
RUN npm run build:prod

FROM nginx:1.21.3-alpine AS runner

COPY --from=builder /app/dist/angular-tour-of-heroes /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]