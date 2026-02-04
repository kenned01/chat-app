FROM node:22.14.0

WORKDIR /var/usr

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
