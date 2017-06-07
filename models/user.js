var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
	user_id		: {  type : Number, required : true },
	name 		: {  type : String, required : true  },
	email		: {  type : String, required : true, unique : true }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User',schema);