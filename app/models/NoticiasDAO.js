function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.atualizarNoticia = function (id_noticia, noticia, callback) {
    var idNoticia = id_noticia.id_noticia;
    this._connection.query("UPDATE noticias SET titulo = '"+noticia.titulo+"', resumo = '"+noticia.resumo+"', autor = '"+noticia.autor+"', data_noticia = '"+noticia.data_noticia+"', noticia = '"+noticia.noticia+"' where id_noticia ="+parseInt(idNoticia), callback);
}

NoticiasDAO.prototype.deletarNoticia = function (id_noticia, callback) {
    console.log(`DAO ${id_noticia.id_noticia}`);
    this._connection.query('delete from noticias where id_noticia = ' + parseInt(id_noticia.id_noticia), callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function () {
    return NoticiasDAO;
}