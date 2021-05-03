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

  let sql =
    "CREATE TABLE if not exists employee (Id INT(11) AUTO_INCREMENT primary key NOT NULL, firstname VARCHAR(255), lastname VARCHAR(255) NOT NULL, email VARCHAR(255), role VARCHAR(255), status VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("table created");
  });

  return connection;
};
