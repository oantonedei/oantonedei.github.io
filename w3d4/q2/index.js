const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
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
  res.send(`Welcome ${name}, you are ${age} years old today.`);
});

app.listen(3000, () => {
  console.log("Server is running...");
});
