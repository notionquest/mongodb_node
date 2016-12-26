var fs = require('fs');
var musicData = require('musicmetadata');
//working for "01 .Brown Rang -Mp3 Songs -[320kbps]-[Exclusive]~~~[CooL GuY] {{a2zRG}}.mp3"
//var parser = musicData(fs.createReadStream('C:/Users/sakumar/Downloads/03 RANG DE CHUNRIYA.mp3'), {
//var parser = musicData(fs.createReadStream('C:/Users/sakumar/Downloads/01BrownRang.mp3'), {
//var parser = musicData(fs.createReadStream('d9822e3c-937c-4083-9beb-633424179cba.mp3'), {
//var parser = musicData(fs.createReadStream('D:/workspaces/mongodb_node/html/test.mp3'), {	

//var readStream = fs.readFileSync('D:/workspaces/mongodb_node/html/Rang De Chunariya.mp3', 'utf8');

var parser = musicData(fs.createReadStream('D:/workspaces/mongodb_node/html/Rang_De_Chunariya.mp3'), {
//var parser = musicData(readStream, {
		
//var parser = musicData(fs.createReadStream('D:/workspaces/DPC_docs/Support/d9822e3c-937c-4083-9beb-633424179cba.mp3'), {
	duration : true
}, function(err, metadata) {
	var talkItem = {};
	if (err) {
		console.log('err:', err);
	} else {
		console.log(metadata);
		if (metadata.title === undefined || metadata.title === "") {
			talkItem.title = '';
		} else {
			talkItem.title = metadata.title;
		}

		talkItem.duration = metadata.duration;
		console.log('talkItem:', talkItem);

	}
});