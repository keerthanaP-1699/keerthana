const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse request of content-type:app/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//simple route
app.get('/',(req,res) => {
    res.json({messsage: "Welcome"});
});

require("../nodejs-express-mysql/config/routes.js")(app);
//set port,listen for request
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
