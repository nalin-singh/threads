FROM node:20

WORKDIR /usr/workdir/threads

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn","dev"]