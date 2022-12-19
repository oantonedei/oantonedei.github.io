const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use("/css", express.static(path.join(__dirname, "view", "css")));
app.use(express.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.render("product", { product: product.slice(0, 1) });
});
app.post("/addToCart", (req, res) => {
  res.send("The selected product is: " + req.body.id);
});
app.get("/shoppingCart", (req, res) => {
  res.render("shoppingcart", { product });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
