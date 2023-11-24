FROM node:21-alpine3.17

WORKDIR /app
COPY . .
EXPOSE 8888
CMD ["node", "app.js"]

