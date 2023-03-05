FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json .
RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node" , "./dist/index.js" ]
