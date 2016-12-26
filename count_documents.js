var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

db.open(function(err, db) {
	var collection = db.collection("posts");

	setTimeout(function() {

		collection.count({
			'description' : 'desc 1'
		}, function(err, item) {
			console.log(item);

			assert.equal(null, err);

			db.close();
		});

	}, 10000);
});