var createBoard = require('../queries/createBoard');
var Promise = require('bluebird');
var should = require('should');
var db = require('../db');
var wipePg = require('../utils/wipePg');

describe('postgres queries', function() {
  before(function(done) {
    wipePg('boards').then(function() {
      done();
    });
  });
  after(function(done) {
    wipePg('boards').then(function() {
      done();
    });
  });
  describe('createBoard()', function() {
    it('should create a board in the database, along with title and description provided data', function(done) {
      var testCreateBoard = Promise.coroutine(function*() {
        var createResult = yield createBoard('San Francisco', 'The best city in the world', {name: 'test'})
        createResult.command.should.equal('INSERT');
        createResult.rowCount.should.equal(1);
        var queryResult = yield db.select('*').from('boards').where({name: 'test'});
        queryResult.length.should.equal(1);
        queryResult[0].title.should.equal('San Francisco');
        queryResult[0].description.should.equal('The best city in the world');
        queryResult[0].name.should.equal('test');
        done();
      });
      testCreateBoard();
    });
  });
});