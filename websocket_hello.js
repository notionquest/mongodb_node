const
webstomp = require('webstomp-client');
var Stomp = require('stompjs');

/*const
client = webstomp.client('ws://localhost:8080', {
	debug : true
})*/

var client = Stomp.overWS('ws://localhost:8080');

// Create stomp client over sockJS protocol (see Note 1)
 //var socket = new SockJS("/hello");

console.log("Started ...........");

 var stompClient = Stomp.overWS('ws://localhost:8080/hello');

 // Connect as guest (Note 4)
 stompClient.connect("guest", "guest", connectCallback, errorCallback);
 
 console.log("Got the client ...........");
 
 // callback function to be called when stomp client is connected to server (see Note 2)
 var connectCallback = function() {
	 console.log("connected!");
      stompClient.subscribe('/topic/greetings', function(greeting){
           console.log(JSON.parse(greeting.body).content);
      });
 }; 

 // callback function to be called when stomp client could not connect to server (see Note 3)
 var errorCallback = function(error) {
      // display the error's message header:
	 console.log("Error!");
	 console.log(error.headers.message);
 };

