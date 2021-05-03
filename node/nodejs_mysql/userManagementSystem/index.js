const express = require("express");
const loginRoutes = require("./routes/empRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//test route
app.get("/", function (req, res) {
  res.json({ message: "welcome to our upload module apis" });
});

app.post("/employee", loginRoutes.employee);

app.post("/update", loginRoutes.update);

app.get("/employeeList", loginRoutes.employeeList);

app.post("/searchuser", loginRoutes.searchuser);

app.post("/userStatus",loginRoutes.userStatus);

app.listen(8081);
console.log("app runing at", 8081);
