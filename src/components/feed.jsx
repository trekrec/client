var React = require('react');
var NavBar = require('./navigation');

var Feed = React.createClass({
  render: function() {
    return (
      <div className="feed">
        <NavBar />
        Feed Page
      </div>
    );
  }
});

module.exports = Feed;