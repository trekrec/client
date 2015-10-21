var React = require('react');
var Map = require('./map');
var NavBar = require('./navigation');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div className="title">
        </div>
        <NavBar />
      </div>
    );
  }
});

module.exports = Main;