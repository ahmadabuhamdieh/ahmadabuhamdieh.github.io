const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  let name = req.query.name;
  let age = req.query.age;
  console.log(req.query.name);
  console.log(req.query.age);
  if (!name ) {
    name = "person";
  }
  if (!age ) {
    age = "age";
  }

  res.send(`Welcome ${name} and age is ${age}`);
});

app.listen(3000);
