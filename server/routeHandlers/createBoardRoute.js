var Promise = require('bluebird');
var app = require('../app/app');

var createBoardRoute = function(req, res) {
  var board = {
    title: req.body.title,
    description: req.body.description,
    data: req.body.data
  }
  var createBoardRoutine = Promise.coroutine(function*() {
    var newBoardID = yield app.makeBoard(board.title, board.description, board.data);
    res.send({success: true, boardID: newBoardID});
  });
  createBoardRoutine();
}

module.exports = createBoardRoute;