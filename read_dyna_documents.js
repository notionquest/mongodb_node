var Db = require('mongodb').Db, Server = require('mongodb').Server, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

var query = {"checkFields.user" : "admin", "checkFields.field1": { "$exists": "true"} };

console.log(query);
var checkFields = ["field1","field2","field3"];

/*db.open(openCallback => {
	   var cursor =db.collection('posts').find(query);
	   cursor.each(function(err, doc) {
	      assert.equal(err, null);
	      if (doc !== null) {
	         console.log(JSON.stringify(doc));
	         break;
	      } 
	   });
	});


*/
