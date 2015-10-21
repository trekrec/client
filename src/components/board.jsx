var React = require('react');

var Board = React.createClass({
  render: function() {
    return (
      <div className="board">
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