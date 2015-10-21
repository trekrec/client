var Promise = require('bluebird');
var db = require('../db/pg/queries/createBoard');

var createBoard = Promise.coroutine(function(title, description, data) {
  var dbInsertResult = yield db.createBoard
});