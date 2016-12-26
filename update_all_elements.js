var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));
db.open(function(err, db) {
	var collection = db.collection("spaces");

	var query = {
		attributes : {
			$elemMatch : {
				weight : {
					$ne : 0
				}
			}
		}
	};

	while (collection.find(query).count() > 0, function(err, itemCount) {
		console("loop");
		if (!err) {
			db.spaces.update(query, {
				$set : {
					"attributes.$.weight" : 2
				}
			}, {
				multi : true
			});
		} else {
			exit;
		}
		
	})
		;

	/*
	 * collection.distinct('testMethod', { 'build' : 1 }, function(err, item) {
	 * console.log("item:" + JSON.stringify(item));
	 * 
	 * db.close(); });
	 */

});