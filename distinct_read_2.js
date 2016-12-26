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
  var collection = db.collection("stack");
   
    // Wait for a second before finishing up, to ensure we have written the item to disk
  setTimeout(function() {

	  collection.distinct('testMethod', {'build':1}, function(err, item) {
		  console.log("item:" + JSON.stringify(item));
		  
	      db.close();
	    });
	  
    // Fetch the document
    /*collection.findOne({"testRuns.testRun":'1'}, function(err, item) {
      assert.equal(null, err);
      assert.equal("initialization", item.testMethod);
      db.close();
    });*/
  }, 10000);
});