var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var bindata = new require('mongodb').Binary("/9j/4AAQSkZJRgA...and...so...on../2Q==");

var insertDocument = function(db, callback) {
	var chunk = {
		"_id" : new ObjectId("535e1b88e421ad3a443742e9"),
		"files_id" : new ObjectId("5113b0062be53b231f9dbc11"),
		"n" : 0,
		"data" : bindata
	};

	db.collection('Day1').insertOne(chunk, function(err, result) {
		assert.equal(err, null);
		console.log("Inserted a document into the collection.");
		callback();
	});
};

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
	assert.equal(null, err);
	insertDocument(db, function() {
		db.close();
	});
});