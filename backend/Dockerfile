FROM node:latest

WORKDIR /app

COPY . .

RUN rm -rf node_modules

RUN npm i

CMD [ "npm", "run", "dev" ]

EXPOSE 3001