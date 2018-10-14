var express = require('express'),
      app = express(),
      bodyParser = require("body-parser"),
      cors = require("cors");

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