const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "", //keep empty won't work with 1234 entered
 database: "todos",
});

conn.connect();

module.exports = conn;