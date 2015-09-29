var express = require('express')
var bodyParser = require('body-parser')
var model = require('./models/todos.js')
var app = express()
module.exports = app //this line is only used to make testing easier

// REMEMBER TO PLUGIN YOUR ROUTERS HERE!
var routes = require('./routes')

app.use(bodyParser.json()); // for parsing application/json


app.use('/', routes)


app.listen(process.env.PORT || 3000)
