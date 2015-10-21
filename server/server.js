var express = require('express');
var errorHandler = require('./errorHandler');
var pg = require('./db/pg/db');
var server = express();
var bodyParser = require('body-parser');
var addRoutes = require('./routing');
var cors = require('cors');

var port = 3000;

server.use(bodyParser.json());
server.use(cors());

addRoutes(server);

// error handling middleware applied last
server.use(errorHandler);

server.listen(port, function() {
  console.log('Server is listening on:' + port);
});