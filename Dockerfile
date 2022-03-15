FROM node:14
### install your dependencies if you have some
RUN mkdir /app && cd /app && npm install axios && npm install web3-eth-abi && npm install web3
COPY ./src /app
ENTRYPOINT [ "node", "/app/app.js"]