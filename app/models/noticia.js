module.exports = function() {
    this.getNoticias = function(conn, callback) {
        conn.query('SELECT * FROM noticias', callback);
    };

     this.getNoticia = function(conn, callback) {
        conn.query('SELECT * FROM noticias WHERE id = 1', callback);
    };

    return this;
}