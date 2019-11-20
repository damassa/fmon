const mysql = require('mysql');
require('dotenv').config();
  
let connect = mysql.createConnection({
    host        : process.env.DB_HOST,
    port        : process.env.DB_PORT,
    database    : process.env.DB_DATABASE,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASSWORD,
});

// eslint-disable-next-line 
if (connect.state != 'authenticated') {
    connect.connect();
}

module.exports = {
    connect: connect
}