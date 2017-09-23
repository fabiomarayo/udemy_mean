module.exports = function(app) {
    app.get('/noticia', function(req, res) {
        var conn = app.config.dbConnection();
        var noticia = app.app.models.noticia;
        noticia.getNoticia(conn, function(error, result) {
            res.render('noticias/noticia', {noticia: result});
        });
    });
}