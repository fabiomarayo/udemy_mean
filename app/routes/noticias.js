module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var conn = app.config.dbConnection();

        var noticia = app.app.models.noticia;

        noticia.getNoticias(conn, function (error, result) {
            res.render("noticias/noticias", {noticias: result});
        });

        
    });
}