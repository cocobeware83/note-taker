var express = require("express");
var path = require("path");
var fs = require("fs")

//TODO --- set up the express app

var app = express();
var PORT = process.env.PORT || 3000;


//TODO --- set up commands to pull info from db.json


// server listens
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });