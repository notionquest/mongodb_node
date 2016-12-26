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
  var collection = db.collection("cpuinfo");
  // Insert a single document
  
  var t = Math.floor(new Date().getTime()/1000);
  
   
  collection.insert({	  
	  "hostname": "VPS",
	  "timestamp": 1460040691,
	  "cpuCores": 2,
	  "cpuList": [
	    {
	      "name": "cpu1",
	      "load": 3.4
	    },
	    {
	      "name": "cpu2",
	      "load": 0.7
	    }
	  ]
	});


  // Wait for a second before finishing up, to ensure we have written the item to disk
  setTimeout(function() {

    // Fetch the document
    collection.findOne({"hostname":'VPS'}, function(err, item) {
      assert.equal(null, err);
      assert.equal("VPS", item.hostname);
      db.close();
    });
  }, 100);
});