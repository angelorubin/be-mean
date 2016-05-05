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
	  	email: { 
	  		type : String,
	  		unique : true,
	  		required : true
	  	},
	  	password: String
	  },
	  userSchema = new Schema(_schema),
	  UserModel = mongoose.model('User', userSchema);

module.exports = UserModel; 