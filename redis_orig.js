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
	// console.log(arr[i]);
	var obj1 = arr[i];
	client.get(obj1.title, function(err, response) {
		if (err) {
			console.log(err);
		}
		if (response) {
			if (i % 3 == 0) {
				client.del(obj1.title);
			} else {
				client.incr(obj1.title);
			}
		} else {
			client.set(obj1.title, 1);
		}
	});
}