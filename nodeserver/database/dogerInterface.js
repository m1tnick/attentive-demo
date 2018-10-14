var firebase = require("firebase");
const uuidv1 = require('uuid/v1');

module.exports = {
    saveDoger: function(doger) {
        firebase.database().ref('doger/' + uuidv1()).set({
            breed: doger.breed,
            givenName: '',
            imageUrl : doger.imageUrl
        }); 
    },

    readAllDogers: function(res) {
        var dogers = firebase.database().ref('doger/');
        return dogers.once('value', function(snapshot) {
            res.send( snapshot.val());
          });
    }    
  };

//   var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', function(snapshot) {
//   updateStarCount(postElement, snapshot.val());
// });