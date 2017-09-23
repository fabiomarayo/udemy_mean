function NoticiaDAO(connection) {
    this._connection = connection;
}

NoticiaDAO.prototype.getNoticias = function(callback) {
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC;', callback);
};

NoticiaDAO.prototype.getNoticia = function(id_noticia, callback) {
    this._connection.query('SELECT * FROM noticias WHERE id = ' + id_noticia, callback);
};

NoticiaDAO.prototype.getUltimasNoticias = function(callback) {
    this._connection.query('SELECT * FROM noticias ORDER by data_criacao DESC LIMIT 5;', callback);
};

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback) {
    this._connection.query("INSERT INTO noticias SET ?", noticia, callback);
};

module.exports = function() {
    return NoticiaDAO;
}