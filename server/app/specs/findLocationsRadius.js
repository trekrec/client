var Promise = require('bluebird');
var should = require('should');
var findLocationsRadius = require('../findLocationsRadius');
var pg = require('../../db/pg/db');
var docStore = require('../../db/documentStore/db');
var createLocation = require('../createLocation');
var findLocationsRadius = require('../findLocationsRadius');
var dbUtils = require('../../db/dbUtils');

describe('app logic', function() {
  describe('findLocationsRadius()', function() {
    after(function(done) {
      dbUtils.wipePgAndDocumentStore().then(function() {
        done();
      });
    });

    it('should return an array of document data when given an array of document IDs', function(done) {
      var findLocationsRadiusTest = Promise.coroutine(function*() {
        var testID1 = yield createLocation(25, 25, {'name': 'test1'});
        var testID2 = yield createLocation(25.0001, 25.0001, {'name': 'test2'});
        var testID3 = yield createLocation(26, 26, {'name': 'test3'});
        var testIDsArray = [testID1, testID2, testID3];
        
        var locationsData = yield findLocationsRadius(25, 25, 1);
        locationsData[0].data.name.should.equal('test1');
        locationsData[0].id.should.equal(testID1);
        locationsData[1].data.name.should.equal('test2');
        locationsData[1].id.should.equal(testID2);

        var locationsData = yield findLocationsRadius(25, 25, 200);
        locationsData[0].data.name.should.equal('test1');
        locationsData[0].id.should.equal(testID1);
        locationsData[1].data.name.should.equal('test2');
        locationsData[1].id.should.equal(testID2);
        locationsData[2].data.name.should.equal('test3');
        locationsData[2].id.should.equal(testID3);

        done();
      });
      findLocationsRadiusTest();
    });
  });
});