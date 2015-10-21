var db = require('../db');
var Promise = require('bluebird');

var createBoardsTable = Promise.coroutine(function*() {
  var exists = yield db.schema.hasTable('boards');
  if (!exists) {
    yield db.schema.createTable('boards', function(table) {
      table.increments();
      table.string('boardid');
      table.string('title');
      table.text('description');
      table.timestamps();
    });
  }
});

module.exports = createBoardsTable;