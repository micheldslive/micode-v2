FROM node:14-alpine
WORKDIR /micode

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]