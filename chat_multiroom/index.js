// importar configurações do servidor
var app = require('./config/server');

// parametrizar porta de escurta
var server = app.listen(80, function() {
    console.info('Servidor Online');
});

var io = require("socket.io").listen(server);

/* criar a conexao por websocket */
io.on('connection', function(socket) {
    console.log('Usuario Conectou');

    socket.on('disconnect',function() {
        console.log('usuario desconectou');
    });
});