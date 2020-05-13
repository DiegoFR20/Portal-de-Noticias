module.exports = function (application) {
    application.get('/formulario', function (req, res) {
        application.app.controllers.admin.formulario(application, req, res);
    });

    application.post('/noticias/salvar', function (req, res) {
        application.app.controllers.admin.salvar(application, req, res);
    });
}