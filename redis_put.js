var redis = require("redis");
var client = redis.createClient({detect_buffers: true});
 

var arr = [{title:"title1"},{title:"title2"},{title:"title3"},{title:"title4"}];

for(var i =0; i<arr.length; i++){
	var obj1 = arr[i];
	client.set(obj1.title, 1);	
}


client.quit();