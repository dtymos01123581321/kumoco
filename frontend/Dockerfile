FROM node:10.16.0-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm", "run", "staging"]
