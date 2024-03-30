FROM node:20

WORKDIR /app
COPY package*.json .
RUN npm install && npm install -D
COPY . .
RUN npm run build
RUN  rm -rf ./src

CMD ["npm", "start"]

