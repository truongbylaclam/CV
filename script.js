// Script.js

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
const https = require("https");

app.use(express.static(public));
app.use(bodyParser.urlencoded({extended: true}));
export.getMapAPI = function(){
const api_key = "AIzaSyAQBTelLX0khrzWcWG-FrGVRICf6lYM9-E";
const api_link_header = "https://maps.googleapis.com/maps/api/js?key=";
const api_link_footer = "&callback=initMap&libraries=&v=weekly&channel=2";
return api_link_header + api_key + api_link_footer
}

app.get('/', function(req, res){
  res.send(__dirname +  "/index.html");
})

app.post('/', function(req, res){
  res.s
})
$("h1").on("click", function(){
  $("h1").css("color", "gray");
  setTimeout(function(){
    $("h1").css("color", "black")
  }, 300)
});


$(".hide-name").on("click", function (){
  $("h1").slideToggle().animate({margin: 70});
});

$(".name-text").hover , function() {
  $(".big-text").slideToggle();
});




app.listen(3000, function(){
  console.log("Server is running on port 3000");
})

async
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQBTelLX0khrzWcWG-FrGVRICf6lYM9-E&callback=initMap&libraries=&v=weekly&channel=2">
