let { getConnection } = require("../config/dbconfig");
const connection = getConnection();
const queryPromisified = (sql, param) => {
  return new Promise((resolve, reject) =>
    connection.query(sql, param, async function (error, results, fields) {
      if (error) return reject(error);
      resolve(results);
    })
  );
};

exports.employee = async function(req,res){
    let users = {
        email : req.body.email,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        role : req.body.role,
        status : req.body.status
      };
      let sql = "INSERT INTO employee SET ?";
      let param = users;
      try {
        await queryPromisified(sql, param);
        res.send({
            code : 200,
            message : "employee details filled successfully"
        });
    }catch(err){
        res.send({
            code : 400,
            message : "something went wrong"
        });
    }
}

exports.update = async function(req,res){
    let sql = "select role from employee where email = ?";
    let param = req.body.email;
    try{
      const info = await queryPromisified(sql,param);
      console.log(info[0].role);
      if(info[0].role === "admin"){
        upstatus = req.body.status;
        sql = `update employee set status = "${upstatus}" where firstname =?`;
        param = req.body.firstname;

        try{
          await queryPromisified(sql,param);
          res.send({
            code : 200,
            message : "update successfully"
          });
        }catch(err){
          console.log(err);
          res.send({
            code : 400,
            message : "error in updating employee details"
          });
        }
      }else{
        res.send({
          code:400,
          message : "you are not admin"
        });
      }
    }catch(err){
      res.send({
        code : 400,
        message : "email dosen't match"
      });
    } 
}

exports.employeeList = async function (req, res) {
  sql = "select * from employee";
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

exports.searchuser = async function (req,res){
  sql = "select * from employee where firstname = ?";
  param = req.body.firstname;
  try{
    const result = await queryPromisified(sql, param);
    res.send({
      status : 200,
      data : result,
    });
  }catch(err){
    res.send({
      code : 400,
      message : "something went wrong",
    });
  }
}

exports.userStatus = async function (req,res){
  sql = "select * from employee where status = ?";
  param = req.body.status;
  try{
    const results = await queryPromisified(sql, param);
    res.send({
      status : 200,
      data : results,
    });
  }catch(err){
    res.send({
      code : 400,
      message : "something went wrong",
    });
  }
}
