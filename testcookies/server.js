const express = require("express");
const app = express();
const cparser = require("cookie-parser"); /// it's inside express session so we can delete it in case of we use session
const session = require("express-session");

app.use(
  session({
    secret: "something to ecrypt your session data with ",
  })
);
app.use(cparser());

app.get("/", (req, res) => {
  if (req.session.cart) {
    res.send(req.session.cart.productName);
  } else {
    req.session.cart = {
      productName: "wig",
    };
    res.send("no card ");
  }
});

/*app.get("/", (req, res) => {
  if (req.cookies.mysweetcookie) {
    res.send("Welcome Back");
  } else {
    res.cookie("mysweetcookie", 1); //session cookies
    res.cookie("mysweetcookie", 1, { maxAge: 1000 * 60 * 60 * 24 });
    res.clearCookie("mysweetcookie");
    res.send("home page ");
  }
});
*/
app.listen(3000, (req, res) => {
  console.log("server running ....");
});
