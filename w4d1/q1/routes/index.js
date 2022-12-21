var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let cookies;
  if (req.cookies) {
    cookies = req.cookies;
  }
  res.render("index", { title: "Add Cookie", cookies: cookies });
});
router.post("/addCookie", (req, res) => {
  let key = req.body.key;
  let value = req.body.value;

  if (!req.cookies.key) {
    res.cookie(`${key}`, `${value}`);
  }
  res.redirect("/");
});

module.exports = router;
