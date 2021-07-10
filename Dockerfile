FROM node:14-alpine

WORKDIR /www/app

RUN cd ..
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g nodemon

RUN cd /www/app
COPY . .

CMD ["npm", "run", "dev"]