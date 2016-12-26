var Db = require('mongodb').Db, Server = require('mongodb').Server, assert = require('assert');
var db = new Db('localhost', new Server('localhost', 27017));


	db.open(openCallback => {	
	// Create a test collection
	var collection = db.collection('Day1');

	// Insert some documents to perform map reduce over

	// Map function
	var map = function() {
		emit(this._id.UCODE, this.Total);
	};

	var reduce = function(key, values) {
		return Array.sum(values)
	};

	// Reduce function
	var options = {
		out : "FinData"
	};

	console.log(map)
	// Peform the map reduce
	collection.mapReduce(map, reduce, {
		out : {replace : 'FinData'}
	}, function(err, finDatacollection) {
	      
		console.log("collection .............." + finDatacollection);
		finDatacollection.findOne({}, function(err, result) {
			console.log(JSON.stringify(result));
	        
	          db.close();
		});
	});
	});