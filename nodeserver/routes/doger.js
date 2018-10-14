var express = require("express");
var router = express.Router();
var dogerInterface = require("../database/dogerInterface.js");
const request = require('request-promise');

const dogListUrl = 'https://dog.ceo/api/breeds/list/all';
const breedImageUrl = 'https://dog.ceo/api/breed/:breedName/images/random';

function Doger() {
    this.breed;
    this.name;
    this.imageUrl;
 }

 router.post('/', (req, res) => {
    dogerInterface.saveDoger(req.body);
    res.send(req.body);
 })

 router.get('/', (req, res) => {
    dogerInterface.readAllDogers(res);
 })

 router.put('/:id', (req, res) => {
  var id = req.params.id;
  dogerInterface.updateDoger(id, req.body);
  res.send(req.body);
})

router.delete('/:id', (req, res) => {
  dogerInterface.deleteDoger(req.params.id);
  res.sendStatus(202);
})  

router.get('/random', (req, res) => {
    request({
      uri: dogListUrl,
      json: true
    })
      .then((data) => {
        return dogger = getRandomDoger(data.message);
      })
      .then((data) => {
        var doger = data;
        const resolvedUrl = breedImageUrl.replace(":breedName", doger.breed);
        request({
            uri: resolvedUrl,
            json: true
          })
            .then((data) => {
              dogger.imageUrl = data.message;
              res.send(dogger);
            })
      })
      .catch((err) => {
        console.log(err)
      })
  })

function getRandomDoger(dogersObj) {
    var dogers = extractDogers(dogersObj);
    var doger = Math.floor((Math.random() * dogers.length));
    doger = dogers[doger];
    return doger;
}

function extractDogers(dogersObj) {
    var dogers = [];

    for (let key in dogersObj) {
        var dog = new Doger();
        dog.breed = key;
        dogers.push(dog);
      }
    return dogers;
}

module.exports = router