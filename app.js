const express = require("express");
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");

const app = express();

app.use([authorize, logger]);

// req => middleware => response

app.get("/", (req, res) => {
  console.log(req.user);
  res.status(200).send("Home");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.get("/products", (req, res) => {
  res.status(200).send("Products");
});

app.get("/search", (req, res) => {
  res.status(200).send("Search");
});

app.listen(8000);
