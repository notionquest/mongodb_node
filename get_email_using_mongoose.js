var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code,

assert = require('assert');

var mongoose = require('mongoose');

var db = new Db('localhost', new Server('localhost', 27017));

var bodyParser = require('body-parser');

var express = require("express"), app = express();

var UserSchema = new mongoose.Schema({
	userEmail : String
});

var connection = mongoose
		.createConnection('mongodb://localhost:27017/localhost');
		//.createConnection('mongodb://localhost:27017/localhost', {"stringify": false});
var User = connection.model('users', UserSchema);

var urlencoded_body_parser = bodyParser.urlencoded({
	extended : true
});

app.use(bodyParser.json());
app.use(urlencoded_body_parser);

var router = express.Router();
app.use('/', router);

router.post('/getemail', function(req, res) {

	console.log("body: " + JSON.stringify(req.body));

	var email = req.body.email;

	console.log(email);
	db.open(function(err, db) {
		var collection = db.collection("email");

		User.find({
			"userEmail" : email
		}, function(err, userDetails) {
			console.log("err =======>" + err);
			if (err) {
				return next(err);
			}
			console.log(userDetails);
			res.json(userDetails);
		});
	});

});

/*router.get('/:userEmail', function(req, res, next) {
 User.find({ "userEmail": req.params.userEmail }, function(err, userDetails) {
 if(err){
 return next(err);
 }
 res.json(userDetails);
 });
 });


var outputObj = { 
    "_id": ObjectId("57d6884c74f6fcadd23280f7"),
    "userEmail": "abc@gmail.com"
  }; */

router.get('/:userEmail', function(req, res, next) {
	User.find({"userEmail": req.params.userEmail}, {"_id":false}).lean().exec(function(err, users) {
		if (err) {
			return next(err);
		}
		console.log(users);
		res.json(users);
	});
});

module.export = router;

app.listen(3000);
console.log('app started ');