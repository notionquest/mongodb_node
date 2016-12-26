var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code,
assert = require('assert');

var db = new Db('localhost', new Server('localhost', 27017));

db.open(function(err, db) {

	

	var spawn = require('child_process').spawn;
	var bat = spawn('cmd.exe', ['/c', 'myimport.bat']);
	
	bat.stdout.on('data', (data) => {
		  console.log("Commands ...");
		});




		var exec = require('child_process').exec;
		exec('myimport.bat', (err, stdout, stderr) => {
			  if (err) {
			    console.error(err);			    
			  }
			  console.log("Executing ...");
			});
});