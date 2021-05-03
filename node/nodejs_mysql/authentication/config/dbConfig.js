require("dotenv").config();
const mysql = require("mysql");
exports.getConnection = () => {
  let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  connection.connect(function (err) {
    if (err) console.log(" not connected");
    console.log("connected");
    connection.query(
      "create database if not exists keechu",
      function (err, result) {
        if (err) {
          throw err;
        }
      }
    );
  });

  let sql1 =
    "CREATE TABLE if not exists users (Id INT(11) AUTO_INCREMENT primary key NOT NULL, firstname VARCHAR(255), lastname VARCHAR(255) NOT NULL, email VARCHAR(255), password VARCHAR(255), status VARCHAR(255) DEFAULT 'Not Active', confirmationCode VARCHAR(255), loginfo VARCHAR(255) DEFAULT 'LOGOUT')";
  connection.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("table created");
  });

  let sql =
    "CREATE TABLE if not exists diseases (diseasename VARCHAR(255), noofcases INT(11))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("table created for diseases");
  });

  sql =
    "CREATE TABLE if not exists patient (firstname VARCHAR(255), lastname VARCHAR(255), dob Date NOT NULL, sex VARCHAR(255), diseasename VARCHAR(255), address VARCHAR(255), phoneno BIGINT, doctorname VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("table created for patient");
  });
  return connection;
};
