var React = require('react');

var Board = React.createClass({
  render: function() {
    return (
      <div className="thumbnail">
        <div className="boardTitle">
          {this.props.title}
        </div>
        <div className="boardDescription">
          {this.props.description}
        </div>
      </div>
    );
  }
});

module.exports = Board;