const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

//const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
//app.set('views',path.join(__dirname, "ahmad"));
/*
if (hour >=6 && hour <=18)
{
console.log("day");
}
else 
{
    console.log("night");
}
*/
app.use("/css", express.static(path.join(__dirname, "css")));

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
  //res.sendFile(path.join(__dirname, "index.html"));

  const date = new Date();
  const hour = date.getHours();
  let st;
  if (hour >= 6 && hour <= 18) {
    st = "day";
  } else {
    st = "night";
  }

  res.render("index", { variable: "Express", style: `${st}.css` });
});

app.post("/result", (req, res) => {
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

  // res.send(`Welcome ${name} and age is ${age}`);
  res.redirect(`/output?name=${name}&age=${age}`);
});

app.get("/output", (req, res) => {
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

  res.send(`Welcome ${name} and age is ${age}`);
});

app.listen(3000);


