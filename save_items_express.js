var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code,
//BSON = require('mongodb').pure().BSON,
assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

var bodyParser = require('body-parser');
var express = require("express"), app = express();
var urlencoded_body_parser = bodyParser.urlencoded({
	extended : true
});
//app.use(bodyParser.json({ type: 'application/*+json' }));
//app.use(urlencoded_body_parser);

var router = express.Router();

app.use('/', bodyParser.json(), function(req, res, next) {

	res.charset = 'utf-8';
	res.set({
		'Content-Type' : 'application/json'
	});

	console.log("body: " + JSON.stringify(req.body));
	
	console.log("Numvalue ---->" + req.body.numvalue);
	db.open(function(err, db) {
		var collection = db.collection("items");
		// Insert a single document

		
		collection.insert({
			"numvalue" : {req.body.numvalue},

		},function(err, item) {
			console.log("Insert result ...");
			console.log(item);
		
		});

		res.end("Success!");

	});

});

app.post('/saveitems', function(req, res) {

	console.log("body: " + JSON.stringify(req.body));
	
	console.log("Numvaluemmmmmmmmm ---->" + req.body.numvalue);
	db.open(function(err, db) {
		var collection = db.collection("items");
		// Insert a single document

		
		collection.insert({
			"numvalue" : req.body.numvalue,

		},function(err, item) {
			console.log("Insert result ...");
			console.log(item);
		
		});

		res.end("Success!");

	});

});

app.listen(3000);
console.log('app started ');