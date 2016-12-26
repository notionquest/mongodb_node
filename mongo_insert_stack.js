var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code,
//BSON = require('mongodb').pure().BSON,
assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));
// Fetch a collection to insert document into
db.open(function(err, db) {
	var collection = db.collection("stack");
	// Insert a single document

	collection.insert({
		"testMethod" : "initialization",
		"testCase" : "com.harish.test.TestNGRest.OrganisationGetTest",
		"build" : 1,
		"ranNumberofTimes" : 2,
		"failed" : 1,
		"success" : 2,
		"testRuns" : [ {
			"testMethod" : "initialization",
			"testCase" : "com.harish.test.TestNGRest.OrganisationGetTest",
			"branchName" : "branch_1",
			"testRun" : 1,
			"success" : 1,
			"fail" : 0,
			"timetorun" : 0,
			"cases" : [ {
				"caseId" : 1,
				"status" : "success",
				"failreason" : null,
				"startDate" : "Fri May 27 14:41:22 EDT 2016",
				"endDate" : "Fri May 27 14:41:22 EDT 2016"
			} ],
			"startDate" : "Fri May 27 14:41:22 EDT 2016",
			"endDate" : "Fri May 27 14:41:22 EDT 2016"
		}, {
			"testMethod" : "initialization",
			"testCase" : "com.harish.test.TestNGRest.OrganisationGetTest",
			"branchName" : "branch_1",
			"testRun" : 2,
			"success" : 1,
			"fail" : 0,
			"timetorun" : 1,
			"cases" : [ {
				"caseId" : 1,
				"status" : "success",
				"failreason" : null,
				"startDate" : "Fri May 27 14:41:49 EDT 2016",
				"endDate" : "Fri May 27 14:41:49 EDT 2016"
			} ],
			"startDate" : "Fri May 27 14:41:49 EDT 2016",
			"endDate" : "Fri May 27 14:41:49 EDT 2016"
		} ]
	}, function(err, item) {
		console.log("Insert result ...");
		console.log(err);
		assert.equal(null, err);
	});

	// Wait for a second before finishing up, to ensure we have written the item to disk
	setTimeout(function() {

		// Fetch the document
		collection.findOne({
			"testRuns.testRun" : '1'
		}, function(err, item) {
			console.log(err);
			assert.equal(null, err);
			//assert.equal("initialization", item.testMethod);
			db.close();
		});
	}, 100);
});