var crypto = require('crypto');
function UsuarioDAO(connection) {
    console.log('usuariodao');
   this._conn = connection();
}

UsuarioDAO.prototype.inserirUsuario = function(usuario) {
    this._conn.open(function(err, mongoclient){
        mongoclient.collection('usuarios', function(err, collection) {
            console.log(usuario);
            collection.insert(usuario);
            mongoclient.close();
        });
    });
}

UsuarioDAO.prototype.autenticar = function(usuario, req, res) {
    this._conn.open(function(err, mongoclient){
        mongoclient.collection('usuarios', function(err, collection) {
            collection.find(usuario).toArray(function(err, result){
               if(result[0] != undefined){
                   req.session.autorizado = true;
                   req.session.usuario = result[0].usuario;
                   req.session.casa = result[0].casa;
               }
 
               if(req.session.autorizado) {
                   res.redirect('/jogo');
               } else {
                   res.redirect('/');
               }
            });

            mongoclient.close();
        });
    });
}

module.exports = function() {
    return UsuarioDAO;
}