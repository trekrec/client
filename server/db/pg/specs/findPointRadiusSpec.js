var findPointsRadius = require('../queries/findPointsRadius');
var insertPoint = require('../queries/insertPoint');
var Promise = require('bluebird');
var should = require('should');
var db = require('../db');
var wipeLocationsTable = require('../utils/wipeLocationsTable');

describe('postGIS Queries', function() {
  before(function(done) {
    wipeLocationsTable('locations').then(function(){
      done();
    });
  });
  after(function(done) {
    wipeLocationsTable('locations').then(function(){
      done();
    });
  });
  describe('findPointsRadius()', function() {
    it('should find all points in the database within a specified radius of a point', function(done) {
      var testFindPointsRadius = Promise.coroutine(function*() {
        var insertResult = yield insertPoint(25,25, {name: "Falafel House"});
        // within 15M of Falafel house
        var insertResult = yield insertPoint(25.0001,25.0001, {name: "Shawarma House"});
        // 150KM from Falafel house
        var insertResult = yield insertPoint(26,26, {name: "Hogie House"});

        var queryResult = yield findPointsRadius(25,25, 1);
        queryResult[0].name.should.equal("Falafel House");
        queryResult[1].name.should.equal("Shawarma House");

        var queryResult = yield findPointsRadius(25,25, 200);
        queryResult[0].name.should.equal("Falafel House");
        queryResult[1].name.should.equal("Shawarma House");
        queryResult[2].name.should.equal("Hogie House");

        done();
      });
      testFindPointsRadius();
    });
  });
});