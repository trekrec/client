var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="main" className="navbar-brand">
            Home
          </Link>
          <Link to="map" className="navbar-brand">
            Map
          </Link>
          <Link to="itinerary" className="navbar-brand">
            Itinerary
          </Link>
          <Link to="feed" className="navbar-brand">
            Feed
          </Link>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;

