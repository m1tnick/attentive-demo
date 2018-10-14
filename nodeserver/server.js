var express = require('express'),
      app = express(),
      bodyParser = require("body-parser"),
      cors = require("cors"),
      firebase = require("firebase");


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBcgWmnNu49kOhHM0qH3K7ekb6Tag6BLBY",
    authDomain: "attentive-demo.firebaseapp.com",
    databaseURL: "https://attentive-demo.firebaseio.com",
    projectId: "attentive-demo",
    storageBucket: "attentive-demo.appspot.com",
    messagingSenderId: "136969893952"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();


    // firebase.database().ref('users/' + 1).set({
    //   username: 'test',
    //   email: 'test@ema.a',
    //   profile_picture : 'blba'
    // });
  

app.use(bodyParser.urlencoded({extended: true}));

// Allow cors
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


var dogRoutes = require("./routes/dog"),
    catRoutes = require("./routes/cat");

app.use('/dogs', dogRoutes);
app.use('/cats', catRoutes);


app.listen(8000, () => {
    console.log('Server started!');
  });