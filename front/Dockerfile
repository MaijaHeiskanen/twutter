FROM node:10

RUN mkdir /app
WORKDIR /app

COPY ./ ./

RUN yarn install
RUN yarn build

EXPOSE 5000

CMD [ "yarn", "serve" ]