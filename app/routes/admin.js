module.exports = (application) => {
    application.get('/formulario', (req, res) => {
        application.app.controllers.admin.formulario(application, req, res);
    });

    application.get('/noticia/editar/:id_noticia', (req, res) => {
        application.app.controllers.admin.editar(application, req, res);
    });

    application.post('/noticia/editar:id_noticia', (req, res) => {
        application.app.controllers.admin.atualizar(application, req, res);
    })

    application.post('/noticias/salvar', (req, res) => {
        application.app.controllers.admin.salvar(application, req, res);
    });

    application.get('/delete/:id_noticia', (req, res) => {
        application.app.controllers.admin.deletar(application, req, res);
    });
}