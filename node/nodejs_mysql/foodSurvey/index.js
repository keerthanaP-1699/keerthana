const express = require("express");
const routes = require("./routes/routes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//test route
app.get("/", function (req, res) {
  res.json({ message: " welcome " });
});

app.post("/addfavfood", routes.report);

app.get("/surveyList", routes.surveyList);
app.listen(8081);
console.log("app runing at", 8081);
