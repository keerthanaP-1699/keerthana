let jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const _ = require("lodash");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
let { getConnection } = require("../config/dbConfig");
const connection = getConnection();
const queryPromisified = (sql, param) => {
  return new Promise((resolve, reject) =>
    connection.query(sql, param, async function (error, results, fields) {
      if (error) return reject(error);
      resolve(results);
    })
  );
};
exports.queryPromisified = queryPromisified;

exports.register = async function (req, res) {
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";

  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  confirmationCode = token;

  let users = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: encryptedPassword,
    confirmationCode: confirmationCode,
  };
  let sql = "INSERT INTO users SET ?";
  let param = users;
  try {
    await queryPromisified(sql, param);
    let transport = nodemailer.createTransport({
      host: process.env.passport_Host,
      port: process.env.passport_Port,
      auth: {
        user: process.env.passport_User,
        pass: process.env.passport_Pass,
      },
    });

    var mailOptions = {
      from: '"Account Verification" <keerthanapadmanaban1699@gmail.com>',
      to: users.email,
      subject: "Account Verification",
      text:
        "Hey there, Please confirm your email account by using the following link ",
      html: `<h1>Email Confirmation</h1>
      <h2>Hello ${users.firstname}</h2>
      <p>Thank you for subscribing. Please confirm your email by clicking on the below link</p>
      <a href=http://localhost:8081/api/auth/confirm?token=${confirmationCode}> Click here</a>
      </div>`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
    });

    res.send({
      code: 200,
      message: "User was registered successfully! Please check your email",
    });
  } catch (error) {
    res.send(error);
  }
};

exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let sql = "SELECT password,status FROM users WHERE email = ? ";
  let param = [email];
  try {
    if (_.isEmpty(email)) {
      res.send({
        code: 400,
        success: "Bad request",
      });
    } else {
      let user = JSON.parse(JSON.stringify(await queryPromisified(sql, param)));
      if (
        user &&
        bcrypt.compareSync(password, user[0].password) &&
        user[0].status === "Active"
      ) {
        let secret = process.env.SECRET;
        let expiresIn = 3600;
        let payload = {
          audience: "TEST",
          data: email,
        };

        let token = await jwt.sign(payload, secret, {
          algorithm: "HS256",
          expiresIn: expiresIn,
        });

        if (token != false) {
          res.cookie("Token", token, {
            maxAge: 86400000,
            httpOnly: true,
          });
          res.end();
        } else {
          res.send("Could not create token");
          res.end();
        }
      } else if (user[0].status != "Active") {
        return res.status(401).send({
          message: "Pending Account. Please Verify Your Email!",
        });
      } else {
        res.send({
          code: 401,
          success: "Email and password does not match",
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.send({
      code: 400,
      success: "email does not exists",
    });
  }
};

exports.verifyUser = async function (req, res, next) {
  let sql = "update users set status = 'Active' where confirmationCode = ?";
  let param = req.query.token;
  try {
    let awaitprint = JSON.parse(
      JSON.stringify(await queryPromisified(sql, param))
    );
    if (awaitprint.affectedRows == 1) {
      res.send({
        code: 200,
        message: "verified successfully",
      });
    }
  } catch (error) {
    res.send(error);
  }
};

exports.userList = async function (req, res) {
  sql = "select firstname,lastname, email, status from users";
  try {
    const resData = await queryPromisified(sql);
    res.send({
      status: 200,
      data: resData,
    });
  } catch (err) {
    res.send(err);
  }
};

exports.sortUserList = async function (req, res) {
  let param = req.params.order;
  let sql = `select concat(firstName,' ',lastName) as concatValue,email,status from users order by concatValue ${param}`;
  try {
    const resData = await queryPromisified(sql);
    res.send({
      status: 200,
      message: resData,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.pagination = async function (req, res) {
  let param = req.params.id;
  let sql = `select firstname,lastname, email, status from users order by email limit ${param}`;
  try {
    const resData = await queryPromisified(sql, param);
    res.send({
      status: 200,
      message: resData,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.patientDetails = async function (req, res) {
  let users = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    DOB: req.body.DOB,
    sex: req.body.sex,
    diseasename: req.body.diseasename,
    address: req.body.address,
    phoneno: req.body.phoneno,
    doctorname: req.body.doctorname,
  };
  let sql1 = "INSERT INTO patient SET ?";
  let param = users;
  try {
    await queryPromisified(sql1, param);
    sql1 = "select noofcases from diseases where diseasename = ?";
    param = req.body.diseasename;
    try {
      const data = await queryPromisified(sql1, param);
      if (_.isEmpty(data)) {
        let count = 1;
        sql1 = `insert into diseases set diseasename = ?, noofcases = ${count} `;
        param = req.body.diseasename;
        await queryPromisified(sql1, param);
        res.send({
          code: 200,
          message: "patient data added and diseases table filled",
        });
      } else {
        let count = data[0].noofcases + 1;
        sql1 = `update diseases set noofcases = ${count} where diseasename = ?`;
        param = req.body.diseasename;
        await queryPromisified(sql1, param);
        res.send({
          code: 200,
          message: "data added and diseases value incremented",
        });
      }
    } catch (error) {
      res.send({
        code: 400,
        message: "patient data added but cannot add disease",
      });
    }
  } catch (error) {
    res.send({
      code: 400,
      message: "something went wrong",
    });
  }
};
