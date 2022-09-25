FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm i express
RUN npm i fs
COPY . .
CMD [ "node", "app.js"  ]