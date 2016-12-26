var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var ObjectId = require('mongodb').ObjectID;

var validateDocument = function(db, callback) {
	

	navigator.geolocation.getCurrentPosition(
		    function(position) {
		        alert('You are ' + geolib.getDistance(position.coords, {
		            latitude: 51.525,
		            longitude: 7.4575
		        }) + ' meters away from 51.525, 7.4575');
		    },
		    function() {
		        alert('Position could not be determined.')
		    },
		    {
		        enableHighAccuracy: true
		    }
		);
};

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
	assert.equal(null, err);
	findAllPlaces(db, function() {
		db.close();
	});
});

var findAllPlaces = function(db, callback) {
	var cursor = db.collection('geoplaces').find();
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if (doc !== null) {
			console.dir(doc);
			validateDocument(doc);

		} else {
			callback();
		}
	});
};