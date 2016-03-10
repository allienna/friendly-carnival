'use strict';

// Set up

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// Configuration

mongoose.connect('mongodb://localhost:27017/friendly-carnaval');
app.use(express.static(__dirname + "/public"));
// Log all request to the console
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// start app (with node server.js)
app.listen(8080);
console.log("Application listening on port 8080");