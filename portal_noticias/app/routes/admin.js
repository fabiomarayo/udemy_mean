module.exports = function(app) {

    app.get('/noticias/adicionar', function(req, res) {
        console.log(app.controllers);
        app.app.controllers.admin.noticias_adicionar(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res) {
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}