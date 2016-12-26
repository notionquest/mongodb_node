var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));
var promise;

db.open(openCallback => {
	var collection = db.collection("posts");
	collection.findOne({
		'description' : 'desc 1'
	}, function(err, item) {
		promise = item;
		console.log(JSON.stringify(item));
		console.log(item._id);
		console.log(item.userId);
		console.log(item.description);
		assert.equal(null, err);		
	});
});

/*db.open(function(err, db) {
	var collection = db.collection("posts");
	collection.find({
		'description' : 'desc 1'
	}).toArray(function(err, results){
	    console.log(JSON.stringify(results)); 
	});
});
*/

openCallback = (function(err, db){
	console.log("callback");
	console.log(promise);
});

