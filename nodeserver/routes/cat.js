var express = require("express");

var express = require('express')
var router = express.Router()
var request = require('request');

router.get('/', function (req, res) {
    request('https://aws.random.cat/meow', function (error, response, body) {
        if(error) {
            console.log(error);
        } else {
            res.send(body);
        }
    });
});

module.exports = router