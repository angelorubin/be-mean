'use strict';

const express = require('express'),
      request = require('request'),
      router = express.Router();

router.get('/users', function(req, res, data) {
    const url = 'https://gist.githubusercontent.com/angelorubin/bce2629bb23684acd8556f4ccb2dab01/raw/0b0c8a0073049c460f451c2381d576da72d49a4e/twitter.json';
    request({
        url: url,
        json: true
    }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json(body);
        }
    });
});

router.get('/users/:id', function(req, res) {
    res.json({ 'id' : '1908927892872789swjiwii' })
});

module.exports = router;
