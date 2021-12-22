// Script.js

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const config = require(__dirname + "/confi.js");
const ejs = require("ejs");
const app = express();
const https = require("https");
const mongoose = require("mongoose");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

let api_link = config.api_key;
const api_link_header = "https://maps.googleapis.com/maps/api/js?key=";
const api_link_footer = "&callback=initMap&libraries=&v=weekly&channel=2";
const map_api = api_link_header + api_link + api_link_footer;

const itemSchema = {
  name: String
};

const Item = mongoose.model("Item", itemSchema);

app.get('/', function(req, res){
  Item.findAll(function(err, foundItems){
    if (!err) {
      res.render("main", {title: "Homepage", listItem: foundItems});
    } else {
      res.send("Error " + err + " has occurred. Please try again.");
    }
  })

});

app.post('/', function(req, res){
  res.send("Post success");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
