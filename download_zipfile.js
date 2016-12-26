var express = require("express"),
	path = require("path"),
	fs = require("fs"),
app = express();

app.get('/downloadZip', function(req, res) {
	
	var file = req.query.downloadURL;
	var filename = path.basename(file);
	var mimetype = 'application/zip';

	res.setHeader('Content-disposition', 'attachment');
	res.setHeader('Content-type', mimetype);

	var filestream = fs.createReadStream(file);
	filestream.pipe(res);
});

app.listen(3000);
console.log('app started ');