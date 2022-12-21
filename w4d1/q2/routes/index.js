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
  }
  res.redirect(`/viewresult`);
});
router.get("/viewresult", (req, res) => {
  let n = req.session.info.n;
  let a = req.session.info.a;
  res.render("result", {
    title: "View Result",
    name: n,
    age: a,
  });
});

module.exports = router;
