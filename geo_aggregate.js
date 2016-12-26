var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code,
//BSON = require('mongodb').pure().BSON,
assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));
// Fetch a collection to insert document into
db.open(function(err, db) {
	var collection = db.collection("places");

	console.log(collection.listIndexes);

	// Wait for a second before finishing up, to ensure we have written the item to disk
	setTimeout(function() {
		collection.aggregate([ {
			$geoNear : {
				near : {
					type : "Point",
					coordinates : [ parseFloat(-73.97), parseFloat(40.77) ]
				},
				distanceField : "distance",
				spherical : true
			}
		}, {
			$sort : {
				distance : 1
			}
		}, {
			$limit : 20
		} ], function(err, docs) {
			if (err) {
				console.log(err);
			}
			console.log("completed...........");
			console.log("doc ====>" + JSON.stringify(docs));
		});
	}, 1000);
});