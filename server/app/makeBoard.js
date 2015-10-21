var Promise = require('bluebird');
var db = require('../db/pg/queries/createBoard');

var makeBoard = Promise.coroutine(function(title, description) {
  var dbInsertResult = db.createBoard(title, description);
  return dbInsertResult;
});

module.exports = makeBoard;