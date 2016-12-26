var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

MongoClient.connect('mongodb://admin:password@localhost:27017/myDb', function(
		err, db) {

	if (!err) {
		console.log("Connected");

		// catch 404 and forward to error handler
		app.use(function(req, res, next) {
			var err = new Error('Not Found');
			err.status = 404;
			next(err);
		});
	} else {
		console.log("Bad bad :" + err);
		app.use(function(req, res, next) {
			var err = new Error('Not Found');
			err.status = 404;
			next(err);
		});
	}

});