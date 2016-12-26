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
  var collection = db.collection("simple_document_insert_collection_no_safe");
  // Insert a single document
  collection.insert({hello:'world_no_safe'});

  // Wait for a second before finishing up, to ensure we have written the item to disk
  setTimeout(function() {

    // Fetch the document
    collection.findOne({hello:'world_no_safe'}, function(err, item) {
      assert.equal(null, err);
      assert.equal('world_no_safe', item.hello);
      db.close();
    })
  }, 100);
});