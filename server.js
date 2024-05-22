const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dashboard", (req, res) => {
  res.send("DashBoard Page");
});

app.get("/new", (req, res) => {
  res.send("DashBoard Page new");
});

app.listen(port, () => {
  console.log("Server Started, Port ", port);
});
