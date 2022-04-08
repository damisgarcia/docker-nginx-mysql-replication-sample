FROM node:17-alpine3.14 as dependencies

COPY www /usr/src/app

WORKDIR /usr/src/app

RUN npm install

CMD ["node", "server.js"]
