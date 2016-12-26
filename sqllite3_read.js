var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
var files = [];
var fragments = {};

db.serialize(function() {
  
	console.log('Files length: ', files.length);
	 console.log('Fragments length: ', Object.keys(fragments).length);
});
 
db.close();