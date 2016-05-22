'use strict';

const mongoose = require('mongoose'),
	  Schema = mongoose.Schema,
	  _schema = {
	  	firstname: {
	  		type : String,
	  		required : true
	  	},
	  	lastname: {
	  		type : String,
	  		required : true
	  	},
	  	dateBirth : {
	  		type : Date
	  	},
	  	email: { 
	  		type : String,
	  		unique : true,
	  		required : true
	  	},
	  	password: {
	  		type : String
	  	},
	  	phones : Array,
	  	adresses : Array
	  }
	  , userSchema = new Schema(_schema);
	  
	  module.exports = mongoose.model('User', userSchema);