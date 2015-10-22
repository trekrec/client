var db = require('../db');
var Promise = require('bluebird');

var createUsersTable = Promise.coroutine(function*() {
  var exists = yield db.schema.hasTable('users');
  if (!exists) {
    yield db.schema.createTable('users', function(table) {
      table.increments();
      table.string('username', 100).unique();
      table.string('password', 100);
      table.timestamps();
    });
  }
});

module.exports = createUsersTable;