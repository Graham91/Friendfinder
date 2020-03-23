var express = require("express");
var app = express();
var htmlroutes = require("./app/routing/htmlRoutes.js");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(htmlroutes);



app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
  });