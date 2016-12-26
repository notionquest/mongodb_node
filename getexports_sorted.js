var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var EpubExportSchema = new mongoose.Schema({
    createdOn : {type : Date, default : Date.now},
    content : String
});

var WebExportSchema = new mongoose.Schema({
    createdOn : {type : Date, default : Date.now},
    content : String
});

var ExportListSchema = new mongoose.Schema({
    projectId : {type: mongoose.Schema.Types.ObjectId},
    epubExports : [EpubExportSchema],
    webExports : [WebExportSchema]
});

var ExportList = mongoose.model('export', ExportListSchema, 'export');

console.log("Cursor Approach #1");
var cursor = ExportList.find({
	'projectId' : ObjectId('578a604bc179c9fe6fe2a416')
}).sort( {'epubExports.createdOn' : -1} ).cursor();

console.log("Curosr Results***************************************");
cursor.on('data', function(doc) {
	console.log("Getting doc using cursor ==========>" + JSON.stringify(doc));
});
cursor.on('close', function() {
	console.log("close the cursor");
});