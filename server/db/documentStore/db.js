var mongo = require('mongod');

var db = mongo('mongodb://localhost:27017/trekrec', ['glyphData']);

module.exports = db;