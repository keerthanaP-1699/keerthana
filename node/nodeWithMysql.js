const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "keerthana@123",
  database: "keerthana",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
  var sql = "drop table marks";
  con.query(sql, function (err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});

/*
//create database
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("create database if not exists keerthana",function(err,result){
        if(err) {
            throw err;
        }
        console.log("Database created");
    });
});
// put this in mysql "show databases;" to see our database created

//create table
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("create table students (student_id int,student_name varchar(200),student_city varchar(200)",function(err,result){
        if(err) {
            throw err;
        }
        console.log("table created");
    });
});
//"use keerthana;" =>keerthana is the database name
//"show tables;" => to view the table in keerthana database
//"desc students;" => to show the tables with fiels,type,key,defaults


//create marks in table
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("create table students (student_id int,student_name varchar(200),student_city varchar(200)",function(err,result){
        if(err) {
            throw err;
        }
        console.log("table marks created");
    });
});
//show tables; =>marks will be added in tales

//insert values for the table
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
        var sql = "Insert into students (student_id,student_name,student_city) values(1,'keerthu','cbe')";
        con.query(sql,function(err,result){
        if(err) {
             throw err;
        }
        console.log("values inserted successfully");
    })
})
//"select * from students;" => shows the values inserted into the table


//adding multiple values into tables
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
        var sql = "Insert into students (student_id,student_name,student_city) values ?";
        var values = [
            [2,'kowsi','chennai'],
            [3,'anish','erode'],
            [4,'kavi','kallakurichi']
        ];
        con.query(sql,[values],function(err,result){
        if(err) {
             throw err;
        }
        console.log("multiple values inserted successfully");
    })
})
//select * from tables => values are inserted in table

//inserting marks
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
        var sql = "Insert into marks (student_id,student_grade) values ?";
        var values = [
            [1,'A'],
            [1,'B'],
            [2,'A'],
            [2,'C'],
            [3,'B'],
            [4,'B']
        ];
        con.query(sql,[values],function(err,result){
        if(err) {
             throw err;
        }
        console.log("marks inserted successfully");
    })
})
//select * from marks =>shows the table inserted with marks 

//to see the student and mark values in console
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
        var sql = "select * from students";
        con.query(sql,function(err,result){
        if(err) {
             throw err;
        }
        console.log(result);
    })
        var sql1 = "select * from marks";
        con.query(sql,function(err,result){
        if(err) {
             throw err;
        }
        console.log(result);
    })
})

//"where" condition to print only A grade students

    var sql1 = "select * from marks where student_grade='A'";
        con.query(sql1,function(err,result){
        if(err) {
             throw err;
        }
        console.log(result);
    })

//"order" to print the grade in desc order
var sql1 = "select * from marks order by student_grade desc";
con.query(sql1,function(err,result){
    //same statement as above
})

//to merge students and marks tables using "join"
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "select student_name as name,student_grade as grade from students join marks on students.student_id=marks.student_id";
        con.query(sql,function(err,result){
        if(err) {
             throw err;
        }
        console.log(result);
    });
});

//"left join" => prints all the values in students even if id is not matched and the marks will be null for the id's that doesn't have grades 

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "select student_name as name,student_grade as grade from students left join marks on students.student_id=marks.student_id";
        con.query(sql,function(err,result){
        if(err) {
             throw err;
        }
        console.log(result);
    });
});

//"right join" => print all the right side value even the name is not present
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "select student_name as name,student_grade as grade from students left join marks on students.student_id=marks.student_id";
        con.query(sql,function(err,result){
        if(err) {
             throw err;
        }
        console.log(result);
    });
});

//update students details

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "update students set student_city='trichy' where student_id=2";
    con.query(sql,function(err,result){
    if(err) {
         throw err;
    }
    console.log(result);
    });
});
//the student with id 2 will be updated with the city trichy

//group similar grades
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "select student_grade,count(student_id) from marks group by student_grade";
    con.query(sql,function(err,result){
    if(err) {
         throw err;
    }
    console.log(result);
    });
}); //shows how many got Agrade,B grade and c...

//grouped grades to arrange in descending order
    var sql = "select student_grade,count(student_id) from marks group by student_grade order by count(student_id)desc";
  
//deleting a particular value (delete the id's greater than 4)
var sql = "delete from students where student_id > 4";

//drop the marks table
var sql = "drop table marks";
*/
