var express = require("express");
var app = express();
const htmlroutes = require("./app/routing/htmlRoutes");
const apiroutes = require("./app/routing/apiRoutes");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(htmlroutes);
app.use(apiroutes);



app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
  });