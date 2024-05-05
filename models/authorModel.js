const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');

const connection = mysql.createConnection(dbConfig);

class Author {
  static getById(id, callback) {
    connection.query('SELECT * FROM authors WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      callback(results[0]);
    });
  }
}

module.exports = Author;
