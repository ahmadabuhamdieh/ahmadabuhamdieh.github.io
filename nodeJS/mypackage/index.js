var express = require("express");
var addAhmad = require("./middleware/addAhmad");
var app = express();

app.set("x-powered-by", false);

app.set("port", process.env.PORT || 3000);
const port = app.get("port");
console.log(port);

//app.use('/users',addAhmad);

app.get("/", addAhmad,(req, res, next) => {
  res.json({ ok: true });
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
