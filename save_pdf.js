var

express = require("express"), os = require('os'), path = require('path'), Busboy = require('busboy'), fs = require('fs'), app = express();

app.post('/savepdf', function(req, res) {

	var busboy = new Busboy({
		headers : req.headers
	});

	busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
		console.log("OS tmp dir ========>" + os.tmpDir());
		console.log("Base name ========>" + path.basename(filename));
		var saveTo = path.join(os.tmpDir(), path.basename(filename));
		file.pipe(fs.createWriteStream(saveTo));
	});
	busboy.on('finish', function() {
		res.writeHead(200, {
			'Connection' : 'close'
		});
		console.log("Upload finished !!!");
		res.end("Success!");
	});
	return req.pipe(busboy);

});

app.get('/', function(req, res) {

	console.log("send the file");

	// res.send('ok');
	res.sendFile(path.join(__dirname, '/html/testRestUpload.html'));

});

app.listen(3000);
console.log('app started ');