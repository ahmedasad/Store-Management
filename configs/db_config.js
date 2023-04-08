const mysql = require('mysql2')
const dotenv = require('dotenv').config();


const pool = {

  host: process.env.HOST,
  user: process.env.DBUSER,
  port: process.env.DBPORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}

const dbConnection = mysql.createConnection(pool);

dbConnection.connect(err =>{
    if (err) console.log("db connection error: " + err.message);

})


module.exports = {
    connection: dbConnection
  };
  