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


function delOrIncr(obj1, i) {
	client.get(obj1.title, function(err, response) {
		if (err) {
			console.log(err);
		}
		if (response) {
			if (i % 3 === 0) {
				console.log('Deleting >' + obj1.title);
				client.del(obj1.title);
			} else {
				console.log('Increment >' + obj1.title);
				client.incr(obj1.title);
			}
		} else {
			console.log('Creating new >' + obj1.title);
			client.set(obj1.title, 1);
		}
	});
}

for (var i = 0; i < arr.length; i++) {
	delOrIncr(arr[i], i);

}

