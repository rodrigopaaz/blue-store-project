FROM node:16.14
WORKDIR /app/backend
COPY package*.json ./
RUN npm install
COPY . ./
ENTRYPOINT [ "npm", "start" ]
RUN apt update
RUN apt install lsof