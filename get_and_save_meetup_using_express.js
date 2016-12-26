var Db = require('mongodb').Db, 
	Server = require('mongodb').Server;

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

router.post('/savemeetup', function(req, res) {

	console.log("body: " + JSON.stringify(req.body));

	var id = req.body;

	var userId = id.id;
	var userName = id.name;
	console.log('User Id :', userId);
	console.log('User Name :', userName);
	db.open(function(err, db) {
		var collection = db.collection("meetup");

		collection.insert({
			'_id' : userId,
			'name' : userName
		},function(err, records){
			if (err) {
				res.send(err);
			} else {
				console.log("Record added as : ", JSON.stringify(records));	
				res.send("Success");
			}
  			
  			
		});
	});

});

router.get('/getmeetup', function(req, res) {

	var userId = req.param("id");	
	console.log('User id :', userId);
	db.open(function(err, db) {
		var collection = db.collection("meetup");

		collection.find({
			'_id' : userId
		}).toArray(function(err, item) {
			if (err) {
				res.send(err);	
			} else {
				res.send(item);	
			}
			
		});
	});

});

module.export = router;

app.listen(3000);
console.log('app started ');