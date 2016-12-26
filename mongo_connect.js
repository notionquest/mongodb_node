var fs = require('fs');
var http = require("https");
var express = require('express');
var app = express();
var path = require('path');
var http = require("http");
var url = require("url");
var req = require('request');
var pem = require('pem');
var cors = require("cors");
var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/Rewards';

// Use connect method to connect to the Server
mongodb.connect(url, function (err, db) { 
if (err) {
  console.log('Unable to connect to the mongoDB server. Error:', err);
} else {
  //HURRAY!! We are connected. :)
  console.log('Connection established to', url);

  // do some work here with the database.

  //Close connection
  db.close();
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,  Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '../')));
app.listen(process.env.PORT || 8080);
app.options('*', cors()); 

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.get('/home', function (req, res) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  contents = fs.readFileSync("sliderImages.json", "utf8");
  console.log(path.join(__dirname, '/sliderImages.json'));
 res.end(contents);

});