var Promise = require('bluebird');
var should = require('should');
var createUser = require('../createUser');
var db = require('../../db/pg/db');
var wipeUsersTable = require('../../db/pg/utils/wipeUsersTable');

describe('app logic', function() {
  describe('createUser()', function() {
    after(function(done) {
      wipeUsersTable('users').then(function() {
        done();
      });
    });

    it('should make a new user with a username and password', function(done) {
      var createUserTest = Promise.coroutine(function*() {
        var createUserResult = yield createUser('david', 'test');
        createUserResult.rowCount.should.equal(1);
        done();
      });
      createUserTest();
    });
  });
});