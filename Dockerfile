FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM joseluisq/static-web-server:2-alpine
COPY --from=build /app/dist /usr/share/static-web-server
ENV SERVER_ROOT=/usr/share/static-web-server
EXPOSE 80
ENTRYPOINT ["/bin/sh", "-c", "SERVER_PORT=${PORT:-8080} static-web-server"]
