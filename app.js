const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.get("/test", function (req, res) {
  res.send("Testing the Site on deployment");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
