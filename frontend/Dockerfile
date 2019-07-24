FROM node:12.2.0-alpine as build-deps
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
