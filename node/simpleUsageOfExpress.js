//rest API
const express = require("express"); //import express
const Joi = require("joi"); //import joi
const app = express(); //create express application on the app variable
app.use(express.json()); //used the json file

//give data to the server
const customers = [
  { title: "George", id: 1 },
  { title: "josh", id: 2 },
  { title: "Tyler", id: 3 },
  { title: "Alice", id: 4 },
  { title: "candice", id: 5 },
];

//read request handlers
//display the message when the URL consists of '/'
app.get("/", (req, res) => {
  res.send("welcome all");
});
//display the list of customers when URL consists of api customers
app.get("/api/customers", (req, res) => {
  res.send(customers);
});
//display the info of specific customer when you mention the id.
app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  //if there is no valid customer id, then dis play an error
  if (!customer)
    res
      .status(404)
      .send(
        '<h2 style = "font-family:Times New Roman; color: darkred;">Ooops.. cant find what ur looking for</h2>'
      );
  res.send(customer);
});

//Create request handler and new customer information(post method)
app.post("/api/customers", (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  //increment the customer id
  const customer = {
    id: customers.length + 1,
    title: req.body.title,
  };
  customers.push(customer);
  res.send(customer);
});

//Update request Handler(put method)
app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  //if there is no valid customer id, then dis play an error
  if (!customer)
    res
      .status(404)
      .send(
        '<h2 style = "font-family:Times New Roman; color: darkred;">Ooops.. cant find what ur looking for</h2>'
      );

  const { error } = validateCustomer(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  customer.title = req.body.title;
  res.send(customer);
});

//delete request handler and delete customer details
app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  //if there is no valid customer id, then dis play an error
  if (!customer)
    res
      .status(404)
      .send(
        '<h2 style = "font-family:Times New Roman; color: darkred;">Ooops.. cant find what ur looking for</h2>'
      );

  const index = customers.indexOf(customer);
  customers.splice(index, 1);

  res.send(customer);
});

//validate information
function validateCustomer(customer) {
  const schema = {
    title: Joi.string().min(3).required(),
  };
  return Joi.validate(customer, schema);
}

//reading query parameters
const express = require("express");
const path = require("path");
const app = express();
var PORT = process.env.port || 3000;
app.set("views", path.join(__dirname));
app.set("view engine", "ejs");
app.get("/user", function (req, res) {
  var name = req.query.name;
  var age = req.query.age;

  console.log("Name :", name);
  console.log("Age :", age);
});
app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT", PORT);
});

//access query string parameters
const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Feel free to add query parameters to the end of the url");
  })
  .listen(8080);
const querystring = require("querystring");
const url = "http://example.com/index.html?code=string&key=12&id=false";
const qs = "code=string&key=12&id=false";

console.log(querystring.parse(qs));
// > { code: 'string', key: '12', id: 'false' }

console.log(querystring.parse(url));
// > { 'http://example.com/index.html?code': 'string', key: '12', id: 'false' }

//// parameter middleware that will run before the next routes
app.param("name", function (req, res, next, name) {
  // check if the user with that name exists
  // do some validations
  // add -dude to the name
  var modified = name + "-dude";

  // save name to the request
  req.name = modified;

  next();
});
// http://localhost:8080/api/users/chris
app.get("/api/users/:name", function (req, res) {
  // the user was found and is available in req.user
  res.send("What is up " + req.name + "!");
});
