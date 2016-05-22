'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://angelorubin:apiweb@ds015892.mlab.com:15892/api-web';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
	console.log('Connected: ' + dbURI);
});