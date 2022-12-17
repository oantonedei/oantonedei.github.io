const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", { time: date.toTimeString() });
});

app.listen(3000);
