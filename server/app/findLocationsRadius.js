var Promise = require('bluebird');
var pg = require('../db/pg/queries/pgQueries');
var docStore = require('../db/documentStore/queries/documentStoreQueries');

var findLocationsRadius = Promise.coroutine(function*(latitude, longitude, radius) {
  var locationGeolocationData = yield pg.findPointsRadius(latitude, longitude, radius);
  var locationIDs = locationGeolocationData.map(function(location) {
    return location.locationid
  });
  var locationData = yield docStore.fetchData(locationIDs);

  // Merge pg data with Mongo data
  return locationData.map(function(data, index) {
    var location = {};
    location.data = data;
    location.id = data._id;
    delete data._id;
    location.longitude = locationGeolocationData[index].longitude;
    location.latitude = locationGeolocationData[index].latitude; 
    return location; 
  });
});

module.exports = findLocationsRadius;