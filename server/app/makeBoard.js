var Promise = require('bluebird');
var db = require('../db/pg/queries/createBoard');

var makeBoard = Promise.coroutine(function(title, description, data) {
  var dbInsertResult = db.createBoard(title, description, data);
  return dbInsertResult;
});

module.exports = makeBoard;