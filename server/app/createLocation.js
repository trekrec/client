var Promise = require('bluebird');
var pg = require('../db/pg/queries/pgQueries');
var docStore = require('../db/documentStore/queries/documentStoreQueries');

var createLocation = Promise.coroutine(function*(latitude, longitude, data) {
  var documentID = yield docStore.insertData(data);
  var GISInsertResult = yield pg.insertPoint(latitude, longitude, {locationid: documentID});

  return documentID;  
});

module.exports = createLocation;