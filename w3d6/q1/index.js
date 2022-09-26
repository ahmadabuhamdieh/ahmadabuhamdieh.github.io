const express = require("express");

const path = require("path");
const app = express();

app.use("/css", express.static(path.join(__dirname, "css")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  let st;
  if (hour >= 6 && hour <= 18) {
    st = "day";
  } else {
    st = "night";
  }
  res.render("index", {
    time: date.toTimeString(),
    style: `${st}.css`,
  });
});
app.listen(3000);
