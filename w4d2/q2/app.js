const express = require("express");
const app = express();
const path = require("path");
const list = require("./model/list.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use("/css", express.static(path.join(__dirname, "view", "css")));
app.use("/js", express.static(path.join(__dirname, "view", "js")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/8ball", (req, res) => {
  res.status(200).json({
    ok: true,
    data: list,
  });
  res.end();
});

app.listen(3000, () => {
  console.log("Server is running...");
});
