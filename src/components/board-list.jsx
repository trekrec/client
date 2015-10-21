var React = require('react');
var Board = require('./board');

var BoardList = React.createClass({
  render: function() {
    var boardNodes = this.props.data.map(function(board) {
      return (
        <Board title={board.title} description={board.description}>
        </Board>
      );
    });
    return (
      <div className="boardList">
        {boardNodes}
      </div>
    );
  }
});

module.exports = BoardList;