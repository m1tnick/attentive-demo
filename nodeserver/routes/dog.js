var express = require("express");

var express = require('express')
var router = express.Router()
var request = require('request');

const dogListUrl = 'https://dog.ceo/api/breeds/list/all';
const breedImageUrl = 'https://dog.ceo/api/breed/:breedName/images/random';

router.get('/', function (req, res) {
    request(dogListUrl, function (error, response, body) {
        if(error) {
            console.log(error);
        } else {
            res.send(body);
        }
    });
});

router.get('/:breedName', function (req, res) {
    const resolvedUrl = breedImageUrl.replace(":breedName", req.params.breedName);
    request(resolvedUrl, function (error, response, body) {
        if(error) {
            console.log(error);
        } else {
            res.send(body);
        }
    });
});

module.exports = router