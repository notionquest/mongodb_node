var mongo = require("mongodb").MongoClient,
Server = require('mongodb').Server,  
ObjectID = require('mongodb').ObjectID
Db = require('mongodb').Db;

var db = new Db('localhost', new Server('localhost', 27017));  

db.open(function(err, db) {

    var sequence = db.collection('sequence');

    //Find and modify the sequence counter.
    sequence.findAndModify(
      {_id: "1"},
      {},
      {  $inc: {"seq": 1}},      
      {new:false, upsert:true}, function (err, doc) {
        if(err)
        console.log(err);
      else {

        console.log(doc);
        console.log(doc.value.seq);
      }
      });

    //console.log(obj);

    sequence.find({_id: "1"}).toArray(function(err,res){
      if(err)
        console.log(err);
      else
        console.log(res);

      db.close();  
    });
     
});