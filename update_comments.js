var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));
db.open(function(err, db) {
	var collection = db.collection("posts");

	var postId = '577c71735d35de6371388efc';
	var commentId = '57811681010bd12923eda0ca';

	var query = {
		_id : new ObjectID(postId), 
		comments : {
			$elemMatch : {
				_id : new ObjectID(commentId)
			}
		}
	};

	collection.update(query, {
		$set : {
			"comments.$.author" : "new author",
			"comments.$.email" : "newemail@gmail.com",
			"comments.$.text" : "new email updated",
			"comments.$.updatedAt" : new Date()
		}
	}, {
		multi : false
	}, function(err, item) {		
		assert.equal(null, err);
		console.log("comments updated ..." + JSON.stringify(item));
	});

});