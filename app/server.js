
// packages required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// information required by database
var friends = require("./data/friends.js");
//express and port 
var app = express();
var PORT = process.env.PORT || 8080; 
// static content with out it it will not work
app.use(express.static("app/public"));
//express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Routes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);
//listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
