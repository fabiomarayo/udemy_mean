var express = require('express');
var consign = require('consign');
var app     = express();

var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressValidator());
app.use(express.static('./app/public'));

consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;