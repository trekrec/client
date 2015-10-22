var Promise = require('bluebird');
var app = require('../app/app');

var createUserRoute = function(req, res) {
  var user = {
    username: req.body.username,
    password: req.body.password
  }
  var createUserRoutine = Promise.coroutine(function*() {
    var newUserID = yield app.makeUser(user.username, user.password);
    res.send({success: true, userID: newUserID});
  });
  createUserRoutine();
}

module.exports = createUserRoute;