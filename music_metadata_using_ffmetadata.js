var fs = require('fs');
var ffmetadata = require('ffmetadata');
var path = require('path');
//working for "01 .Brown Rang -Mp3 Songs -[320kbps]-[Exclusive]~~~[CooL GuY] {{a2zRG}}.mp3"
//var parser = musicData(fs.createReadStream('C:/Users/sakumar/Downloads/03 RANG DE CHUNRIYA.mp3'), {
//var parser = ffmetadata.read(fs.createReadStream('C:/Users/sakumar/Downloads/01BrownRang.mp3'), {

//ffmetadata.read("D:/workspaces/DPC_docs/Support/d9822e3c-937c-4083-9beb-633424179cba.mp3", function(err, data) {
//ffmetadata.read("C:/Users/sakumar/Downloads/03 RANG DE CHUNRIYA.mp3", function(err, data) {

var TEST_FILE = path.join(__dirname,"/mp3/", "test.mp3");

console.log(TEST_FILE);

ffmetadata.read(TEST_FILE, function(err, data) {
    if (err) {
    	console.error("Error reading metadata", err);
    }
    else {
    	console.log(data);
    }
});