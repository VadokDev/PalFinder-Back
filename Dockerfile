FROM node:12-alpine as builder

WORKDIR /app
COPY . /app
COPY .env.example /app/.env
RUN apk --no-cache add --virtual builds-deps build-base python
RUN yarn install

EXPOSE 8080
CMD ["yarn", "run", "dev"]