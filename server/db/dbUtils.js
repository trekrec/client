var Promise = require('bluebird');
var wipePg = require('./pg/utils/wipePg');

var wipePg = Promise.coroutine(function*() {
  yield wipePg();
});

exports.wipePg = wipePg;