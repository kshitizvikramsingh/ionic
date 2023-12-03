FROM node:latest

WORKDIR /usr/src/app

COPY package*.json app.js ./

RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]


