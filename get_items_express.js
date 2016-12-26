var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code,

assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

var bodyParser = require('body-parser');

var express = require("express"), app = express();

var urlencoded_body_parser = bodyParser.urlencoded({
	extended : true
});

app.use(bodyParser.json());
app.use(urlencoded_body_parser);

var router = express.Router();
app.use('/', router);

router.post('/getitems', function(req, res) {

	console.log("body: " + JSON.stringify(req.body));

	var id = req.body;
	var idsProjects = id.items;
	console.log(idsProjects);
	db.open(function(err, db) {
		var collection = db.collection("items");

		collection.find({
			'item_id' : {
				$in : idsProjects
			}
		}).toArray(function(err, item) {
			res.send(item);
		});
	});

});

module.export = router;

app.listen(3000);
console.log('app started ');