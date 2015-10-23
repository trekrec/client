var Promise = require('bluebird');
var app = require('../app/app');

var findLocationsRadiusRoute = function(req, res) {
  var location = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    radius: req.body.radius
  }
  var findLocationsRadiusRoutine = Promise.coroutine(function*(){
    var foundLocations = yield app.findLocationsRadius(location.latitude, location.longitude, location.radius);
    res.send({success: true, locations: foundLocations});
  });
  findLocationsRadiusRoutine();
}

module.exports = findLocationsRadiusRoute;