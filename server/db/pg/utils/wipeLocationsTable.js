var Promise = require('bluebird');
var db = require('../db');

module.exports = Promise.coroutine(function*() {
  yield db('locations').delete();
});