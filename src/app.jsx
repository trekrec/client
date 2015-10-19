var React = require('react');
var Map = require('./map');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="title">
           trekrec
        </div>
        <Map>
        </Map>
      </div>
    );
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
