var Db = require('mongodb').Db, Server = require('mongodb').Server, assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

var checkFields = ["field1", "field2", "field3"];

var checkFieldsLists = [];
for (var i = 0; i < checkFields.length; i++) {
    var jsObj = {};
    jsObj['checkFields.' + checkFields[i]] = {};
    jsObj['checkFields.' + checkFields[i]].$exists = true;
    checkFieldsLists.push(jsObj);
}

var query = {
    "$and" : [{
        "$or" : checkFieldsLists
    }, {
        "$or" : [{
            "checkFields.user" : "admin"
        }]
    }]
};

/*console.log(checkFieldsLists);

var checkFieldsLists = [];
for (i = 0; i < checkFields.length; i++) {
	var jsObj = {};
	jsObj['checkFields.' + checkFields[i]] = {};
	jsObj['checkFields.' + checkFields[i]].$exists = true;
	checkFieldsLists.push(jsObj);
}

var orQuery = [];
var queryString = new Object();
checkFields.forEach(function(value, key, myArray) {
	var query = {};

	query[value] = {
		$exists : true
	};	
	orQuery.push(query);
	
	queryString = queryString + query;
	
	console.log("query ==> " + JSON.stringify(query));
	console.log("queryString ==> " + JSON.stringify(queryString));

});

console.log("Or condition ==> " + orQuery);*/

/*function popElements() {
	var queryString = "";
	orQuery.forEach(function(value, key, myArray) {
		queryString = queryString + value;
	});
	console.log("queryString >>>" + queryString);
	return queryString;
}*/
var matchQuery = {
	"$match" : {
		"checkFields.user" : "admin",
		"$or" :  checkFieldsLists 

	}
};

var groupQuery = {
	$group : {
		_id : null,
		count : {
			$sum : 1
		}
	}
};

var aggregateCheckFields = function(db, callback) {
	console.log("Match query is ====>" + JSON.stringify(matchQuery));
	console.log("Group query is ====>" + JSON.stringify(matchQuery));
	db.collection('checkfields').aggregate([ matchQuery, groupQuery ]).toArray(
			function(err, result) {
				assert.equal(err, null);
				console.log("Result is ===>" + JSON.stringify(result));
				if (result.length > 0) {
					console.log("Count is ===>" + result[0].count);	
				}				
				callback(result);
			});
};

db.open(function(err, db) {

	aggregateCheckFields(db, function() {
		db.close();
	});

});