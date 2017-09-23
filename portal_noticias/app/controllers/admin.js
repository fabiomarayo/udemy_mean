module.exports.noticias_adicionar = function(app, req, res) {
    res.render("admin/form_add_noticia", {errors: [], noticia: {}});
}

module.exports.noticias_salvar = function(app, req, res) {
    var data = req.body;
    
    req.assert('titulo','Titulo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo deve ser entre 10 e 100').len(10,100);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('data_noticia','Data é obrigatorio').notEmpty();//.toDate({format: 'YYYY-MM-DD'});
    req.assert('conteudo','Noticia é obrigatorio').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        res.render("admin/form_add_noticia", {errors: errors, noticia: data});
        return;
    }
    conn = app.config.dbConnection();

    var noticia = new app.app.models.NoticiaDAO(conn);

    noticia.salvarNoticia(data, function(error, result) {
        res.redirect("/noticias");
    });
}