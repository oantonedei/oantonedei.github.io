var express = require("express");
var router = express.Router();

let product = [
  {
    id: 1,
    name: "Macbook 2016",
    description: "It has retina display",
    price: 350,
    qty: 4,
  },
  {
    id: 2,
    name: "Macbook 2012",
    description: "It does not have retina display",
    price: 120,
    qty: 5,
  },
  {
    id: 3,
    name: "iPhone 2000",
    description: "It is yet to be created",
    price: 50,
    qty: 3,
  },
  {
    id: 4,
    name: "Self-esteem 2.0",
    description: "It will help you see yourself differently",
    price: 1000,
    qty: 2,
  },
];

router.get("/", (req, res) => {
  res.render("index", { product: product.slice(0, 3) });
});
router.post("/viewProduct", (req, res) => {
  let id = parseInt(req.body.id);
  res.render("product", { product: product.filter((x) => x.id === id) });
});
router.post("/addToCart", (req, res) => {
  let id = parseInt(req.body.id);
  let qty = req.body.qty;
  let productDetail = product.filter((x) => x.id === id);
  let item = {
    id: id,
    name: productDetail[0].name,
    desc: productDetail[0].description,
    price: productDetail[0].price,
    qty: qty,
  };
  if (!req.session.cart) {
    req.session.cart = [];
    req.session.cart.push(item);
  } else {
    let checker = req.session.cart.filter((x) => x.id === id);
    if (checker.length === 0) {
      req.session.cart.push(item);
    } else {
      req.session.cart.forEach((x) => {
        if (x.id == id) {
          x.qty = qty;
        }
      });
    }
  }
  res.redirect("/shoppingCart");
});
router.get("/shoppingCart", (req, res) => {
  let cart = req.session.cart;
  res.render("shoppingcart", { cart });
});

module.exports = router;
