'use strict';

const express = require('express'),
	  router = express.Router(),
	  UserModel = require('./model'),
	  callback = (err, data, res) => {
	  	if(err) return res.json({'ERROR' : err});
	  	return res.json(data);
	  };

router.get('/', (req, res) => {
	UserModel.findOne({}, (err, data) => {
		if(err) return err;
		res.json({ 'users' : data });
	});
});

router.post('/', (req, res) => {
	const body = req.body,
		  user = new UserModel(body);
	user.save((err, data) => {
		callback(err, data, res);
	});
});

module.exports = router;