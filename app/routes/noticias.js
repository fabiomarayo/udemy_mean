module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var conn = app.config.dbConnection();

        var noticia = new app.app.models.NoticiaDAO(conn);

        noticia.getNoticias(function (error, result) {
            res.render("noticias/noticias", {noticias: result});
        });

    });
}