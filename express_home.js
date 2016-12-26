var

express = require("express"),

path = require('path'),

app = express();

app.use( express.static(__dirname + '/public'));
app.post('/', function(req, res) {
	
	console.log("send the file");

	//res.send('ok');
	res.sendFile(path
			.join(__dirname, '/html/testRestUpload.html'));

});
app.listen(3000);
