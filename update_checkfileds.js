var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));
db.open(function(err, db) {
	var collection = db.collection("checkfields");

	var id = 'tt0110912-10208273';

	var query = {
		_id : id,
	};
	
	var recordToUpsert = {};
	recordToUpsert.modificationDate = new Date();
	recordToUpsert.recordType = 'Rating 2';

	collection.update(query, {
		$set : 
			recordToUpsert
		
	}, {
		upsert : true
	}, function(err, item) {
		assert.equal(null, err);
		console.log("date updated ..." + JSON.stringify(item));
	});

});