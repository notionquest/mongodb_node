var redis = require('redis');
var client = redis.createClient();
var arr = [ {
	title : "title1"
}, {
	title : "title2"
}, {
	title : "title3"
}, {
	title : "title4"
} ];

for (var i = 0; i < arr.length; i++) {
	client.get(arr[i].title, redis.print);
}

//client.flushdb();
client.quit();