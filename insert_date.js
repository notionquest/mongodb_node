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
  
  var d = new Date()
  var n = d.getTimezoneOffset();
  
  console.log('date obj ==>' + d);
  console.log('time zone obj ==>' + n);
  
   
  collection.insert({	  
	  "hostname": "SSS",
	  "timestamp": new Date(),
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
    collection.findOne({"hostname":'SSS'}, function(err, item) {
      assert.equal(null, err);
      assert.equal("SSS", item.hostname);
      db.close();
    });
  }, 100);
});