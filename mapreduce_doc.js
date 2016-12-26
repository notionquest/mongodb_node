var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

  // Create a test collection
  var collection = db.collection('test_map_reduce_functions');

  // Insert some documents to perform map reduce over
  collection.insertMany([{'user_id':1}, {'user_id':2}], {w:1}, function(err, r) {

    // Map function
    var map = function() { emit(this.user_id, 1); };
    // Reduce function
    var reduce = function(k,vals) { return 1; };

    // Peform the map reduce
    collection.mapReduce(map, reduce, {out: {replace : 'tempCollection'}}, function(err, collection) {
      test.equal(null, err);

      // Mapreduce returns the temporary collection with the results
      collection.findOne({'_id':1}, function(err, result) {
        test.equal(1, result.value);

        collection.findOne({'_id':2}, function(err, result) {
          test.equal(1, result.value);
          console.log(JSON.stringify(result));

          db.close();
        });
      });
    });
  });
});