var Db = require('mongodb').Db, Server = require('mongodb').Server, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

db.open(openCallback => {
	   var cursor =db.collection('shares').find({"shares.shareName":"asda"});
	   cursor.each(function(err, doc) {
	      assert.equal(err, null);
	      if (doc !== null) {
	         console.log(JSON.stringify(doc));
	      } 
	   });
	});



