var mongoose = require('mongoose');
var Schema 	= mongoose.Schema;

var schema=new Schema({
						title		:	{ type : String,	required : true  },
						user_id		:	{ type : Number, 	required : true  },
						description : 	{ type : String,	required : true  },
						file		:	[{ type : String,	required : false }],
						date 		:   { type : Date,	required : true }
					 });

module.exports=mongoose.model('Speech',schema);