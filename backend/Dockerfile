FROM node:latest
RUN mkdir -p /usr/src/my-money-app/backend
WORKDIR /usr/src/my-money-app/backend
COPY package.json /usr/src/my-money-app/backend
RUN npm install
COPY . /usr/src/my-money-app/backend
EXPOSE 3000
CMD [ "npm", "start" ]
