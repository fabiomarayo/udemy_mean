var app = require('./config/server');

var routeHome       = require('./app/routes/home')(app);
var routeFormulario = require('./app/routes/formulario')(app);
var routeNoticias   = require('./app/routes/noticias')(app);


app.listen(3000, function(){
    console.log('ON');
})