var express = require("express");
var bodyParser=require("body-parser");
// var logger=require("morgan")
var mongoose=require("mongoose");

var PORT = 3000;

// var User =require("./userModel.js");

var app=express();

// app.use(logger("dev"));

// app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.static("public"));

//connect to MongoDB

// mongoose.connect()


//Routes 

app.post()

app.listen(PORT,function(){
  console.log("App is listening on PORT!")
});