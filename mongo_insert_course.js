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
  var collection = db.collection("course");
  // Insert a single document
   
  collection.insert({
	  "_id" : "Zdhmwv5orgAd8pq54",
	  "title" : "Learn ABC",

	  "courseSchedule" : [ 

	      {
	          "scheduleTitle" : "a",
	          "scheduleAuthor" : "a",
	          "id" : "93b817302efac52116794ec2"
	      }, 
	      {
	          "scheduleTitle" : "b",
	          "scheduleAuthor" : "b",
	          "id" : "7651b1954a24d7c5a8bd58e1"
	      }, 
	      {
	          "scheduleTitle" : "c",
	          "scheduleAuthor" : "c",
	          "id" : "43fbc406dca754596f8ea1d7"
	      },
	       {    
	          "scheduleTitle" : "d",
	          "scheduleAuthor" : "d",
	          "id" : "43fbc406dca754596f8ea1d7"
	      },

	  ]});


  // Wait for a second before finishing up, to ensure we have written the item to disk
  setTimeout(function() {

    // Fetch the document
    collection.findOne({"_id":'Zdhmwv5orgAd8pq54'}, function(err, item) {
      assert.equal(null, err);
      assert.equal("Learn ABC", item.title);
      db.close();
    });
  }, 100);
});