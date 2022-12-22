var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Post/Redirect/Get Request" });
});
router.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "John Doe";
  }
  if (!age) {
    age = "-1";
  }
  if (!req.session.info) {
    req.session["info"] = { n: name, a: age };
  } else {
    req.session.info["n"] = name;
    req.session.info["a"] = age;
  }
  res.redirect(`/viewresult`);
});
router.get("/viewresult", (req, res) => {
  let info = req.session.info;
  res.render("result", {
    title: "View Result",
    info: info,
  });
});

module.exports = router;
