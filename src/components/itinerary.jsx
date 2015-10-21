var React = require('react');
var NavBar = require('./navigation');
var BoardList = require('./board-list');
var data = require('../utils/sampleData');

var Itinerary = React.createClass({
  render: function() {
    return (
      <div className="itinerary">
        <NavBar />
        Itinerary Page
        <BoardList data={data} />
      </div>
    );
  }
});

module.exports = Itinerary;