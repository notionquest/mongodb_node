var redis = require('redis');
var bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

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


function processKeys(obj1, i) {
	return client.getAsync(obj1.title).then(function(response) {
		if (response) {
			console.log('Cond >' + (i % 3) + '; i value >' + i);
			if (i % 3 === 0) {
				console.log('Deleting >' + obj1.title);
				client.del(obj1.title);
			} else {
				console.log('Increment >' + obj1.title);
				client.incr(obj1.title);
			}
		} else {
			console.log('Setting >' + obj1.title);
			client.set(obj1.title, 1);
		}
	});
	
}
for (var i = 0; i < arr.length; i++) {
	console.log(i);
	processKeys(arr[i], i+1);

}

//client.end(true);
//client.flushdb();
client.quit();