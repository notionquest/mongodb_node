var Mingo = require('mingo');
var agg = new Mingo.Aggregator([ {
	'$match' : {
		"student_id" : student_id,

	}
}, {
	$group : {
		_id : "$item",
		minQuantity : {
			$min : "$scores"
		}
	}
} ]);