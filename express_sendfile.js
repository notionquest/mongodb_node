var

express = require("express"),

path = require('path'),

app = express();

app.use( express.static(__dirname + '/public'));
app.get('*', function(req, res) {
	
	console.log("send the file");

	//res.send('ok');
	res.sendFile(path
			.join(__dirname, '/html/Basic.html'));

});
app.listen(3000);
console.log('app started ');