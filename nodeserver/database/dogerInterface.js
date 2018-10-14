var firebase = require("firebase");
const uuidv1 = require('uuid/v1');

module.exports = {
    saveDoger: function(doger) {
        firebase.database().ref('doger/' + uuidv1()).set({
            breed: doger.breed,
            name: '',
            imageUrl : doger.imageUrl
        }); 
    },

    updateDoger: function(id, doger) {
        firebase.database().ref('doger/' + id).set({
            breed: doger.breed,
            name: doger.name,
            imageUrl : doger.imageUrl
        }); 
    },   
    
    deleteDoger: function(id) {
        firebase.database().ref('doger/' + id).set(null); 
    },    

    readAllDogers: function(res) {
        var dogers = firebase.database().ref('doger/');
        return dogers.once('value', function(snapshot) {
            res.send( snapshot.val());
          });
    }    
  };