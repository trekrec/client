var db = require('../db');

/**
* Inserts a new user into the users table in the pg db. username and password are stored in their own columns,
* respectively.
*
* @method createUser
* @param {String} username to create
* @param {String} password to create
*/ 

var createUser = function(username, password) {
  return db.table('users')
    .insert({username: username, password: password});
}

module.exports = createUser;