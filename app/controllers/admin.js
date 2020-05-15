module.exports.formulario = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.editar = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);
    var id_noticia = req.params;

    noticiasDAO.getNoticia(id_noticia, (error, result) => {
        res.render("admin/form_edit_noticia", { validacao: {}, noticia: result });
    });
}

module.exports.atualizar = function (application, req, res) {
    var noticia = req.body;
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    var erros = req.validationErrors();
    var id_noticia = req.params;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({ format: 'yyyy-MM-dd' });
    req.assert('noticia', 'Noticia é obrigatória').notEmpty();   

    if (erros) {
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
        return;
    }
    
    noticiasModel.atualizarNoticia(id_noticia, noticia, (error, result) => {
        res.redirect('/noticias');
    });
}

module.exports.salvar = function (application, req, res) {
    var noticia = req.body;
    var erros = req.validationErrors();
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({ format: 'yyyy-MM-dd' });
    req.assert('noticia', 'Noticia é obrigatória').notEmpty();

    if (erros) {
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
        return;
    }

    noticiasModel.salvarNoticia(noticia, (error, result) => {
        res.redirect('/noticias');
    });
}

module.exports.deletar = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    var id_noticia = req.params;

    noticiasDAO.deletarNoticia(id_noticia, (error, result) => {
        res.redirect("/noticias");
    });
}