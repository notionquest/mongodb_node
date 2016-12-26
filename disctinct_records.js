var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    //BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));
// Fetch a collection to insert document into
db.open(function(err, db) {  
	  
	  var aggregateRestaurants = function(db, callback) {
		   db.collection('stack').aggregate(
		     [
		       { $group: { "_id": "$testMethod", "count": { $sum: 1 } } }
		     ]).toArray(function(err, result) {
		     assert.equal(err, null);
		     console.log(JSON.stringify(result));
		     callback(result);
		   });
		};
		
});

