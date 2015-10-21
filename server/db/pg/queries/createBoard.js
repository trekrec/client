var db = require('../db');

/**
* Inserts a new board into the boards table in the pg db. Title / description are stored in their own columns,
* respectively.
*
* @method createBoard
* @param {String} title name of the board to create
* @param {String} description text describing the board
*/ 

var createBoard = function(title, description) {
  console.log('db: ', db);
  return db.table('boards')
    .insert({title: title, description: description});
}

module.exports = createBoard;