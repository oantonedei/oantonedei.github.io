const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  res.render("index");
});
app.use(express.urlencoded({ extended: true }));
app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "John Doe";
  }
  if (!age) {
    age = "-1";
  }
  let output = `Welcome ${name}, you are ${age} years old today.`;
  res.render("output", { output: output });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
