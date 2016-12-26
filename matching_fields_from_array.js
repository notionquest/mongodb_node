var Db = require('mongodb').Db, Server = require('mongodb').Server, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

var checkFields = [ "checkFields.field1", "checkFields.field2",
		"checkFields.field3" ];

db.open(function(err, db) {

	checkFields.forEach(function(value, key, myArray) {
		var query = {};
		query["checkFields.user"] = "admin";

		query[value] = {
			$exists : true
		};

		//console.log('fieldVal ==>' + value);

		//console.log(query);

		var cursor = db.collection('checkfields').find(query);
		cursor.count(function(err, count) {
			console.log("Total matches for " + value + " :" + count);

		});

	});

});
