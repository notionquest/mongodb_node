var todayStart = new Date();
todayStart.setHours(0,0,0,0);

var todayEnd = new Date();
todayEnd.setHours(23,59,59,999);

var query = {
    "date": {
        $gte: todayStart,
        $lte: todayEnd
    }
};

db.collection('test').findOne(query, function(err, result) {
    if (err) throw new Error();
    console.log(JSON.stringify(result));
});


var todayStart = moment().startOf('day'); // set to 12:00 am today
var todayEnd = moment().endOf('day'); // set to 23:59 pm today

or 

var isodate = require('isodate');

var query = {

		"date" : {
		                '$gte' : isodate(todayStart ),
		                '$lt' : isodate(todayEnd )
		            }
		};