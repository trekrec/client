var Promise = require('bluebird');
var db = require('../db/pg/queries/pgQueries');

var createBoard = Promise.coroutine(function*(username, password) {
  var dbInsertResult = yield db.createBoard(username, password);
  return dbInsertResult;
});

module.exports = createBoard;