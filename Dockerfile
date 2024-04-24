FROM node:16-alpine

RUN mkdir /server
RUN mkdir /client
RUN mkdir /author

WORKDIR /client

COPY ./client/*.json /client/

RUN npm install

COPY ./client/ /client/

RUN npm run build

WORKDIR /author

COPY ./author/*.json /author/

RUN npm install

COPY ./author/ /author/

RUN npm run build

WORKDIR /server

COPY ./server/*.json /server/

RUN npm install

COPY ./server/ /server/

COPY ./placeholders/ /placeholders/

ENV DEBUG=express:*

CMD npm run start