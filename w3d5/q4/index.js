const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); //This allows us load an external file such as html to our app view
});
app.use(express.urlencoded({ extended: true })); //This allows us wrap our post form data in the body of the request object
app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  res.redirect(`/output?name=${name}&age=${age}`);
});
app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
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
