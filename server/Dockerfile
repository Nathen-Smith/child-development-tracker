FROM node:14

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080
ENV PROD=true

EXPOSE 8080

CMD ["npm", "run", "deploy"]