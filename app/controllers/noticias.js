module.exports.noticias = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.getNoticias((error, result) => {
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;

    noticiasDAO.getNoticia(id_noticia, (error, result) => {
        res.render("noticias/noticia", { noticia: result });
    });
}