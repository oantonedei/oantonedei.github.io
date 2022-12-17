const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  let hour = new Date().getHours();
  let theme = hour >= 6 || hour <= 18 ? "day" : "night";
  res.render(path.join(__dirname, "index.ejs"), { theme: theme });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
