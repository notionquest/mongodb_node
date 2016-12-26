var Db = require('mongodb').Db, Server = require('mongodb').Server, assert = require('assert');
var db = new Db('localhost', new Server('localhost', 27017));


var map = function() {
    if (this.positive) {
        emit(this.positive, 1);
    }
    if (this.negative) {
        emit(this.negative, -1);
    }
};

var reduce = function (key, values) {
     var o = { positiveCount: 0, negativeCount: 0 };
     for (var i = 0; i < values.length; i++) {
         if (values[i] === 1) {
             o.positiveCount++;
         }
         if (values[i] === -1) {
             o.negativeCount++;
         }
     }
     return o;
};

db.votes.mapReduce(map, reduce, { out: "solution" } );