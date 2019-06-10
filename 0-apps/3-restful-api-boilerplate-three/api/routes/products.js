const express = require("express");
// router is provided by express to handle routes
const router = express.Router();

// get requests for products
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get requests to /products",
  });
});
// GET
// http://localhost:3000/products

// post requests for products
// post requests will receive contents like name, price, description
// we create api docs to let user know what type of info this end point receives
// we have used body parser to parse such requests
router.post("/", (req, res, next) => {
  // lets say this end point receives name, price and body
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };

  res.status(201).json({
    message: "POST requests to /products",
    createdProduct: newProduct,
  });
});
// POST
// http://localhost:3000/products
/*
via postman post > http://localhost:3000/products
and create an object by selectinng > Body > Raw > JSON
{
	"name": "Harry Potter 5",
	"price": "50",
	"description": "Some text here"
}
and send
*/

// product Id get request
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID: " + id,
    });
  }
  res.status(200).json({
    message: "Product ID: " + id,
  });
});
// http://localhost:3000/products/123
// http://localhost:3000/products/special

// update product
router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: id + " Product updated",
  });
});
// patch
// http://localhost:3000/products/123

// delete product
router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: id + " Product deleted",
  });
});
// delete
// http://localhost:3000/products/123

module.exports = router;
