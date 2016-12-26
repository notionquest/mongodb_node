var MongoClient = require('mongodb').MongoClient, test = require('assert');
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

	// Create a test collection
	// var collection = db.collection('Day1');

	var collectionNameArray = [ "Day1", "Day2", "Day3" ];

	// Insert some documents to perform map reduce over

	collectionNameArray.forEach(function(collectionName) {
		console.log(collectionName);

		if (collectionName != null) {
			var collection = db.collection('"' + collectionName + '"');

			//console.log (collection);
			
			var map = function() {
				emit(this._id.UCODE, this.Total);
			};
			// Reduce function
			var reduce = function(k, values) {
				return Array.sum(values);
			};

			// Peform the map reduce
			collection.mapReduce(map, reduce, {
				out : 'FinData'				
			}, function(err, finCollection) {
				// test.equal(null, err);
				console.log (finCollection);
				finCollection.find().toArray().then(function(docs) {
					console.log(docs.length);
					db.close();
				});
			});

		}

	});

});