var Db = require('mongodb').Db, MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server, ReplSetServers = require('mongodb').ReplSetServers, ObjectID = require('mongodb').ObjectID, Binary = require('mongodb').Binary, GridStore = require('mongodb').GridStore, Grid = require('mongodb').Grid, Code = require('mongodb').Code, assert = require('assert');
var express = require('express');
var moment = require('moment');
var app = express();


app.get('/infostocks',function(req,res){
   Stock.find({},{_id:0,__v:0},function(err,data){
        if(err) throw (err);
        var result =  [];
        result.push(data);
        console.log(data.length);
        for(let i=0;i<data.length;i++){
  var now = moment().format("YYYY-MM-D");
  var now7=moment().subtract(7, 'days').format("YYYY-MM-D");
  console.log('now ==>' + now);
  console.log('now7 ==>' + now7);
yahooFinance.historical({
  symbol: data[i].id_stock,
  from: now7,
  to: now,
  // period: 'd' // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends
	// only)
}, function (err, quotes) {
  if(err) return res.send("Errore"+err);
  if(quotes.length>0){
    console.log(i);
    result.push(quotes);
    if(i==data.length-1){

      res.send(result);
    }
  }
  else{
    res.send("Code not valid");
  }

})
        }
    });
})