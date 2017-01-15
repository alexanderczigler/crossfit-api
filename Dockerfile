FROM node:6.5

ADD ./package.json package.json
RUN npm install --production

ADD ./.babelrc .babelrc
ADD ./database.json database.json
ADD ./index.js index.js
ADD ./lib lib
ADD ./migrations migrations

RUN touch .env
ADD ./.env .env

CMD npm run start
