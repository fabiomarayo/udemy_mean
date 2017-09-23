module.exports.noticias = function(app, req, res) {
    var conn = app.config.dbConnection();
    var noticias = new app.app.models.NoticiaDAO(conn);

    noticias.getNoticias(function (error, result) {
        res.render("noticias/noticias", {noticias: result});
    });
}

module.exports.noticia = function(app, req, res) {
    var conn = app.config.dbConnection();
    var noticia = new app.app.models.NoticiaDAO(conn);

    var id_noticia = req.query.id;
    noticia.getNoticia(id_noticia, function(error, result) {
        res.render('noticias/noticia', {noticia: result});
    });
}