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

var ttimer = require("exectimer");

var db = new Db('localhost', new Server('localhost', 27017));
// Fetch a collection to insert document into
db.open(function(err, db) {
  var collection = db.collection("cpuinfo");
   
  console.log(collection.listIndexes);
  
    // Wait for a second before finishing up, to ensure we have written the item to disk
  setTimeout(function() {

	  var tick = new ttimer.Tick("aggregateFunction");
	  tick.start();
	  collection.aggregate([ 
	                        {"$match": 
		                        {
		                            "timestamp": {"$gte":1460040690},
		                            'hostname': 'VPS'
		                        }
	                        },	    
	                        { "$unwind": "$cpuList" }, 
		                    { "$group": 
		                        { "_id": 
		                            { "interval": 
		                                { "$subtract": [ 
		                                    "$timestamp",
		                                    { "$mod": [ "$timestamp", 60 * 5 ] }
		                                ]}
		                            }, 
		                            "avgCPULoad": { "$avg": "$cpuList.load" }, 
		                            "timestamp": { "$max": "$timestamp" }
		                        }
		                    },
		                    {
								"$project" : {
									"_id" : 0,
									"avgCPULoad" : 1,
									"timestamp" : 1
								}
		                    },	
		                    {
								$sort : {
									'timestamp' : -1
								}
		                    }, 		                    
		                    {$limit: 1}
	                ], function(err, item) {
		  
		  console.log("Selected record is ==>" + JSON.stringify(item));
		  
	      assert.equal(null, err);
	      assert.equal("2.05", item[0].avgCPULoad);
	      db.close();
	    });
	  
	  tick.stop();
	  console.log("Timer ===>" + ttimer.timers.aggregateFunction.duration());
  }, 1000);
});