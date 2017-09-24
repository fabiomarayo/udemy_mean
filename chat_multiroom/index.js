// importar configurações do servidor
var app = require('./config/server');

// parametrizar porta de escurta
var server = app.listen(80, function() {
    console.info('Servidor Online');
});

var io = require("socket.io").listen(server);
app.set('io', io);
/* criar a conexao por websocket */
io.on('connection', function(socket) {
    console.log('Usuario Conectou');

    socket.on('disconnect',function() {
        console.log('usuario desconectou');
    });

    socket.on('msgParaServidor', function(data) {
        /* dialogo */
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });

        if(data.atualiza_apelido == '0') {
            /* atualiza participantes */
            socket.emit('participantesParaCliente', { apelido: data.apelido });
            socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido });
        }
    });
});