console.log("ahmad");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  console.log(req.query);
  let name = req.query.name;
  let age = req.query.age;
  console.log(req.query.name);
  console.log(req.query.age);
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "age";
  }

  // res.send(`Welcome ${name} and age is ${age}`);
  res.send(
    '<form action="/result" method="post">Name:<input name="name" />Age:<input name="age" /><button type="submit">Submit Query</button></form>'
  );
});

app.post("/result", urlencodedParser, (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let age = req.body.age;
  console.log(req.body.name);
  console.log(req.body.age);
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "age";
  }

  res.send(`Welcome ${name} and age is ${age}`);
});

app.listen(3000);
