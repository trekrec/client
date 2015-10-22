var Promise = require('bluebird');
var should = require('should');
var createBoard = require('../createBoard');
var db = require('../../db/pg/db');
var wipeBoardsTable = require('../../db/pg/utils/wipeBoardsTable');

describe('app logic', function() {
  describe('createBoard()', function() {
    after(function(done) {
      wipeBoardsTable('boards').then(function() {
        done();
      });
    });

    it('should make a new board with a title and description', function(done) {
      var createBoardTest = Promise.coroutine(function*() {
        var createBoardResult = yield createBoard('Chicago', 'The other greatest city in the world');
        createBoardResult.rowCount.should.equal(1);
        done();
      });      
      createBoardTest();
    });
  });
});