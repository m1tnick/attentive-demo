var express = require('express'),
      app = express(),
      bodyParser = require("body-parser");

      var request = require('request');

app.use(bodyParser.urlencoded({extended: true}));

var dogRoutes = require("./routes/dog.js"),
    catRoutes = require("./routes/cat");


// app.get("/", function(req, res) {
//     res.send("HELLO")
// });


app.get("/", function(req, res) {
    request('https://aws.random.cat/meow', function (error, response, body) {
      res.send(body);
    });
});

//app.use("/", dogRoutes);

app.listen(8000, () => {
    console.log('Server started!');
  });