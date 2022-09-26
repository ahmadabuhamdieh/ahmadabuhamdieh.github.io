

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/product");
const path = require("path");
const app = express();






app.get("/add-product", routes.get);

app.post("/add-product", routes.post);

app.listen(3000);
