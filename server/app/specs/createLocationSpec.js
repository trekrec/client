var Promise = require('bluebird');
var should = require('should');
var createLocation = require('../createLocation');
var pg = require('../../db/pg/db');
var docStore = require('../../db/documentStore/db');
var ObjectID = require('mongodb').ObjectID;
var dbUtils = require('../../db/dbUtils');

describe('app logic', function() {
  describe('createLocation()', function() {
    after(function(done) {
      dbUtils.wipePgAndDocumentStore().then(function() {
        done();
      });
    });

    it('should create a new location with its coordinates and data', function(done) {
      var createLocationTest = Promise.coroutine(function*() {
        // createLocation returns the documentid of the created location
        var createLocationResult = yield createLocation(25, 25, {name: "yolo"});
        var pgResult = yield pg.select('*').from('locations').where({locationid: createLocationResult});
        // need to convert id from string to ObjectID type for mongo to understand
        var docStoreResult = yield docStore.locationData.find({_id: new ObjectID(createLocationResult)});

        pgResult[0].locationid.should.equal(createLocationResult);
        docStoreResult[0].name.should.equal('yolo');

        done();
      });
      createLocationTest();
    });
  });
});