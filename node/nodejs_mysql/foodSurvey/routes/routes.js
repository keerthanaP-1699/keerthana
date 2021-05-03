const _ = require("lodash");

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

exports.report = async function (req, res) {
  let users = {
    username: req.body.username,
    food: req.body.food,
  };
  let sql = "insert into user set ?";
  let param = users;
  try {
    await queryPromisified(sql, param);
    sql = "select count,percentage from survey where food = ?";
    param = req.body.food;
    try {
      const data = await queryPromisified(sql, param);
      sql = "select Id from user where username = ?";
      param = req.body.username;
      const idval = await queryPromisified(sql, param);
      if (_.isEmpty(data)) {
        let count = 1,
          percent = (count / idval[0].Id) * 100;
        sql = `insert into survey set food = ?, count = ${count}, percentage = ${percent} `;
        param = req.body.food;
        await queryPromisified(sql, param);
        res.send({
          code: 200,
          message: "food data added and survey table filled",
        });
      } else {
        let count = data[0].count + 1,
          percent = (count / idval[0].Id) * 100;
        sql = `update survey set count = ${count}, percentage = ${percent} where food = ?`;
        param = req.body.food;
        await queryPromisified(sql, param);
        res.send({
          code: 200,
          message: "food data added and count value incremented",
        });
      }
    } catch (error) {
      res.send({
        code: 400,
        message: "users data added but cannot add food",
      });
    }
  } catch (err) {
    res.send({
      code: 200,
      message: "something went wrong",
    });
  }
};

exports.surveyList = async function (req, res) {
  sql = "select * from survey";
  try {
    const Data = await queryPromisified(sql);
    res.send({
      status: 200,
      data: Data,
    });
  } catch (err) {
    res.send(err);
  }
};
