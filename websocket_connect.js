const
webstomp = require('webstomp-client');
var Stomp = require('stompjs');

/*const
client = webstomp.client('ws://localhost:8080', {
	debug : true
})*/

 var client = Stomp.overWS('ws://localhost:8080/hello');

var headers = {
	login : 'marc@gmail.com',
	passcode : 'marc@gmail.com',
	// additional header
	'client-id' : 'my-client-id'
};

client.connect(headers, connect_callback);

client.send("/app/hello", {
	priority : 9
}, JSON.stringify({
	'name' : 'God'
}));

var subscription = client.subscribe("/queue/test", subscription_callback);

var connect_callback = function() {
	console.log("connected");
};

var subscription_callback = function(message) {
	// called when the client receives a STOMP message from the server
	if (message.body) {
		alert("got message with body " + message.body)
	} else {
		alert("got empty message");
	}
};