FROM node:alpine

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

RUN mkdir "build"

COPY . .

ENV DEBUG=express:*

CMD [ "npm", "run", "start" ]