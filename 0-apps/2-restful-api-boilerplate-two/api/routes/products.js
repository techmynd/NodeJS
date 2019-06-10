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
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "POST requests to /products",
  });
});
// POST
// http://localhost:3000/products

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
