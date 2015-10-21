var db = require('../db');

/**
* Inserts a new board into the boards table in the pg db. Title / description are stored in their own columns,
* respectively. In addition, the method accepts a data parameter which is an object.
* The method expects that the key value pairs in that object
* represent actual column names and data to be placed in those columns. The method will loop through the
* object and insert each value into the column that corresponds to the key in the object.
*
* @method createBoard
* @param {String} title name of the board to create
* @param {String} description text describing the board
* @param {Object} data key-value pairs representing column names in the table and the values to put in them
* @return {Promise} Returns a promise that will resolve with the results of the insert
*/ 

var createBoard = function(title, description) {

  var insertSQL = `INSERT INTO boards (title, description) 
                   VALUES (${title}, ${description})`

  return db.raw(insertSQL);
}

module.exports = createBoard;