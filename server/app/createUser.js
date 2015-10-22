var Promise = require('bluebird');
var db = require('../db/pg/queries/pgQueries');

var createUser = Promise.coroutine(function*(username, password) {
  var dbInsertResult = yield db.createUser(username, password);
  return dbInsertResult;
});

module.exports = createUser;