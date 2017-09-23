// Importar módulo do framework express
var express = require('express');
// importar modulo do Consign
var consign = require('consign');
// importar body-parser
var bodyParser = require('body-parser');
// importar express-validator
var expressValidator = require('express-validator');
// Iniciar Express
var app = express();

// Setar variaveis de view engine e views no expres
app.set('view engine','ejs');
app.set('views','./app/views');

// Configurar middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// configurar consign
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

// Exportar express
module.exports = app;