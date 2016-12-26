var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var Store = new Schema({
	code : String,
	quantity : Number
});

var Option = new Schema({
	sku : String,
	stores : [ Store ],
	ean_code : String,
	size : String

});

var productSchema = new Schema({
	_id : ObjectId,
	sku : String,
	options : [ Option ]
});

var Product = mongoose.model('product', productSchema, 'product');

console.log("Cursor Approach #1");
var cursor = Product.find({
	'options.stores' : {
		$elemMatch : {
			code : '6',
			quantity : {
				$gt : 0
			}
		}
	}
}).cursor();

console.log("Curosr Results***************************************");
cursor.on('data', function(doc) {
	console.log("Getting doc using cursor ==========>" + JSON.stringify(doc));
});
cursor.on('close', function() {
	console.log("close the cursor");
});

console.log("Query Approach #2");

var query = Product.find({
	'options.stores' : {
		$elemMatch : {
			code : '6',
			quantity : {
				$gt : 0
			}
		}
	}
});

console.log("Query Results***************************************");
query.exec(function(err, doc) {
	if (err) {
		console.log(err);
	}

	console.log("Getting doc using query ==========>" + JSON.stringify(doc));
});