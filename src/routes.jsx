var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Map = require('./components/map');
var Feed = require('./components/feed');

var routes = (
  <Router history={new HashHistory}>
    <Route name="main" path="/" component={Main}></Route>
    <Route name="map" path="/map" component={Map}></Route>
    <Route name="feed" path="/feed" component={Feed}></Route>
  </Router>
);  

module.exports = routes;