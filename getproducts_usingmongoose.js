var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var productSchema = new Schema({
	_id : ObjectId
});

var Product = mongoose.model('productnew', productSchema, 'productnew');

var query = Product.find({

});

query.exec(function(err, doc) {
	if (err) {
		console.log(err);
	}
		
	console.log(JSON.stringify(doc));
});