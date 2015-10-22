var config = require('./config');
var Promise = require('bluebird');

// Automatically handles pooling, so make one connection and then export for files to use
var knex = require('knex')({
  client: config.client,
  connection: {
    host: config.hostIP,
    user: config.user,
    password: config.password,
    database: config.database
  }
});
module.exports = knex;

// Put this after export because its dependent on the export
// creates tables if they don't already exist
var boardsSchema = require('./schemas/boardsSchema')();
var usersSchema = require('./schemas/usersSchema')();