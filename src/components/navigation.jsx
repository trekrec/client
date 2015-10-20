var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="nav-bar">
        <Link to="main" className="main-link">
          Home
        </Link>
        <Link to="map" className="map-link">
          Map
        </Link>
        <Link to="feed" className="feed-link">
          Feed
        </Link>
      </div>
    );
  }
});

module.exports = NavBar;

