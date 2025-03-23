FROM node:23
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY . /usr/src/app
EXPOSE 8000
CMD ["npm","start"]