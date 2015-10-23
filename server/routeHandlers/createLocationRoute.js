var Promise = require('bluebird');
var app = require('../app/app');

var createLocationRoute = function(req, res) {
  var location = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    data: req.body.data
  }
  var createLocationRoutine = Promise.coroutine(function*(){
    var newLocationID = yield app.createLocation(location.latitude, location.longitude, location.data);
    res.send({success: true, locationID: newLocationID});
  });
  createLocationRoutine();
}

module.exports = createLocationRoute;