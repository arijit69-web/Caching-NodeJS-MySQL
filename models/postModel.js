const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');

const connection = mysql.createConnection(dbConfig);

class Post {
    static getById(id, callback) {
        connection.query(
            'SELECT posts.*, authors.name AS author_name FROM posts INNER JOIN authors ON posts.author_id = authors.id WHERE posts.id = ?',
            [id],
            (err, results) => {
                if (err) throw err;
                callback(results[0]);
            }
        );
    }
}

module.exports = Post;
