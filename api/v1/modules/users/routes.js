'use strict';

const express = require('express'),
	  router = express.Router(),
	  User = require('./model');

/**
 * Create User
 */
router.post('/', (req, res) => {
	const body = req.body,
		  newUser = new User(body);

	newUser.save((err, data) => {
		if(err) return res.json(err);
		return res.json(data);
	});
});

/**
 * Read User
 */
router.get('/', (req, res) => {
	User.find( (err, data) => {
		if(err) return err;
		res.json(data);
	});
});

/**
 * Update User
 */
router.put('/:id', (req, res) => {
	const id = req.params.id,
		  body = req.body,
		  options = {
		  	runValidators : true
		  },
		  update = {
		  	'firstname' : body.firstname
		  };

		  User.findByIdAndUpdate(id, update, options, (err, data) => {
		  	if(err) return res.json({ 'ERROR(S)' : err });
		  	return res.json({ 'updated' : data });
		  });
});

/**
 * Delete User
 */
router.delete('/:id', (req, res) => {
	const id = req.params.id;
		  
	User.remove(id, (err, data) => {
		if(err) return res.json({ 'ERROR(S)' : err });
		return res.json({ 'removed' : data });
	});
});

module.exports = router;