'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/be-mean';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
	console.log('Connected: ' + dbURI);
});