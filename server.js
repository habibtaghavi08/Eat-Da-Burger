// creating server  and Url path 
var express = require("express")

var app = express()

// creating port
var port = process.env.PORT || 8000

// initalizing the handlebars setup
var expressHandleBars = require("express-handlebars")
app.engine("handlebars", expressHandleBars({defaultLayout:"main" }))

// setting the view engine to handlebars
app.set("view engine", "handlebars")

