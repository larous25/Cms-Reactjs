'use strict';

const http                = require("http");
const app                 = require("./config/express");



var db     = require("./config/mongoose");

const port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
  console.log(`server is running${port}`);
});
