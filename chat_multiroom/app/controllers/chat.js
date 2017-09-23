module.exports.iniciaChat = function(application, req, res){
    var data = req.body;

    req.assert('apelido', 'Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Apelido deve ter entre 3 e 15 caracteres').len(3, 15);
    
    var errors = req.validationErrors();
    if(errors) {
        res.render('index', {errors:errors});
        return;
    }

    res.render('chat');
}