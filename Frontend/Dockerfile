FROM node:latest
ARG MY_ENV
ENV MY_NODE_ENV=$MY_ENV
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]