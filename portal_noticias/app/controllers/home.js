module.exports.index = function(app, req, res) {
    conn = app.config.dbConnection();

    var noticias = new app.app.models.NoticiaDAO(conn);

    noticias.getUltimasNoticias(function(errors, result) {
        res.render("home/index", {noticias: result});
    });
}