FROM node:10

RUN mkdir /app
WORKDIR /app

COPY ./ ./

RUN yarn install
RUN yarn build

CMD [ "yarn", "serve" ]