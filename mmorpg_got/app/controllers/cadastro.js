module.exports.cadastro = function(application, req, res) {
    res.render('cadastro', {dados: {}, validacao:{}});
}

module.exports.cadastrar = function(application, req, res) {
    var dados = req.body;
    
    req.assert('nome', 'Nome nao pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuario nao pode ser vazio').notEmpty();
    req.assert('senha', 'Senha nao pode ser vazio').notEmpty();
    req.assert('casa', 'Casa nao pode ser vazio').notEmpty();

    var erros = req.validationErrors();
    if(erros) {
        res.render('cadastro', {validacao: erros, dados: dados});
        return;
    }
    var conn = application.config.dbConnection;
    var UsuarioDAO = new application.app.models.UsuarioDAO(conn);
    UsuarioDAO.inserirUsuario(dados);

    res.send("OK");

}