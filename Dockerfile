FROM node:12-alpine as builder

WORKDIR /app
COPY package.json /app/package.json
RUN apk --no-cache add --virtual builds-deps build-base python
RUN yarn install
COPY . /app

EXPOSE 8080
CMD ["yarn", "run", "dev"]