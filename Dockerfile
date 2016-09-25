FROM node:6

ADD ./package.json package.json
RUN npm install --production

ADD ./database.json database.json
ADD ./index.js index.js
ADD ./migrations migrations

CMD npm run start
