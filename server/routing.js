var createBoardRoute = require('./routeHandlers/createBoardRoute');

var routes = {
  '/api/createBoard': createBoardRoute,
}

var router = function(server) {
  for (var route in routes) {
    server.post(route, routes[route]);
  }
}

module.exports = router;