const mysql = require("mysql2")

// collegamento al database creato in mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connessione al database avvenuta con successo")
});

module.exports = connection;