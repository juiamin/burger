const mysql = require('mysql');

// load environment variables
require('dotenv').config();

if (process.env.COOLNAME) {
  console.log("We're in production");
  console.log(process.env.COOLNAME);
} else {
  console.log("We're in development");
  console.log(process.env.COOLNAME);
}

// create connection to db
const connection = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    });

module.exports = connection;
