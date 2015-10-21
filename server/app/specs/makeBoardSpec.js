var Promise = require('bluebird');
var should = require('should');
var makeBoard = require('../makeBoard');
var db = require('../../db/pg/db');
var dbUtils = require('../../db/dbUtils');

describe('app logic', function() {
  describe('makeBoard()', function() {
    after(function(done) {
      dbUtils.wipePg().then(function() {
        done();
      });
    });

    it('should make a new board with a title and description', function(done) {
      var makeBoardResult = makeBoard('Chicago', 'The other greatest city in the world', {name: 'chi-test'});
      var dbResult = db.select('*').from('boards').where({boardid: createBoardResult});
      dbResult[0].boardid.should.equal(createBoardResult);
      dbResult[0].name.should.equal('chi-test');
      done();
    });
    makeBoardResult();
  });
});