const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use("/css", express.static(path.join(__dirname, "view", "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const theme = date.getHours() >= 6 || date.getHours() <= 18 ? "day" : "night";
  res.render("index", { time: date.toTimeString(), theme: theme });
});

app.listen(3000);
