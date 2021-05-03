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
    "CREATE TABLE if not exists user (Id INT(11) AUTO_INCREMENT primary key NOT NULL,username VARCHAR(255), food VARCHAR(255))";
  connection.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("table created");
  });

  let sql =
    "CREATE TABLE if not exists survey (food VARCHAR(255), count INT, percentage FLOAT)";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("table created for survey");
  });
  return connection;
};
