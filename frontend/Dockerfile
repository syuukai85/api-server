FROM node:12.2.0-alpine as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]