var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cars');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var carSchema = new Schema({
	_id : ObjectId,
	Session : String,
	carnumber : Number,
	date : String
});

var Car = mongoose.model('sessions', carSchema);

var query = Car.find({

});

query.exec(function(err, doc) {
	if (err) {
		console.log(err);
	}
		
	console.log(JSON.stringify(doc));
});