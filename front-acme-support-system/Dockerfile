### STAGE 1: Run ###
FROM node:14.12.0-alpine3.10 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.9-alpine

EXPOSE 4200

COPY --from=build /usr/src/app/dist/front-acme-support-system /usr/share/nginx/html
