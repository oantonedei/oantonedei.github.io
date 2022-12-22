const express = require("express");
const path = require("path");
const indexRoute = require("./routes/index");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(
  session({
    secret: "Lab Soln",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRoute);

app.listen(3000, () => {
  console.log("Server is running...");
});
