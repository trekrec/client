var createUser = require('../queries/createUser');
var Promise = require('bluebird');
var should = require('should');
var db = require('../db');
var wipeUsersTable = require('../utils/wipeUsersTable');

describe('postgres queries', function() {
  before(function(done) {
    wipeUsersTable('users').then(function() {
      done();
    });
  });
  after(function(done) {
    wipeUsersTable('users').then(function() {
      done();
    });
  });
  describe('createUser()', function() {
    it('should create a user in the database, with a username and password', function(done) {
      var testCreateUser = Promise.coroutine(function*() {
        var createResult = yield createUser('david', 'test');
        createResult.command.should.equal('INSERT');
        createResult.rowCount.should.equal(1);
        var queryResult = yield db.select('*').from('users');
        queryResult.length.should.equal(1);
        queryResult[0].username.should.equal('david');
        queryResult[0].password.should.equal('test');
        done();
      });
      testCreateUser();
    });
  });
});