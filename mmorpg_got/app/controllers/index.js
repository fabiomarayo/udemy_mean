module.exports.index = function(application, req, res) {
    res.render('index', {validacao: []});
}
module.exports.autenticar = function(application, req, res) {
    var dados = req.body;

    req.assert('usuario', 'Usuario não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();

    var erros = req.validationErrors();
    if(erros) {
        res.render('index', {validacao: erros});
    }
    var conn = application.config.dbConnection;
    var UsuarioDAO = new application.app.models.UsuarioDAO(conn);
    UsuarioDAO.autenticar(dados, req, res);

    //res.send('asdsad');
}