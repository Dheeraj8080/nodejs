const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dashboard", (req, res) => {
  res.send("DashBoard Page");
});

app.get("/dashboard2", (req, res) => {
  res.send("DashBoard Page2");
});

app.listen(port, () => {
  console.log("Server Started, Port ", port);
});
