const express = require("express");
// router is provided by express to handle routes
const router = express.Router();
const mongoose = require("mongoose");

// import product schema
const Product = require("../models/products");

// router.get(req, res, next);
// router.post(req, res, next);
// router.patch(req, res, next);
// router.delete(req, res, next);

// Get requests for products //////////////////////
// @route   GET /products
// @desc    Get route for products
// @access  Public
// http://localhost:3001/products
router.get("/", (req, res, next) => {
  // if you want to sort use .sort({ date: -1 }) after exec but date should be in record
  // use Date.now to create date
  Product.find()
    .exec()
    .then(docs => {
      console.log(docs);
      // res.status(200).json(docs);
      if (docs.length > 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({
          message: "no entries found, may be add some...",
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  // res.status(200).json({
  //   message: "Get requests to /products",
  // });
});

// Post requests for products //////////////////////
// @route   POST /products
// @desc    POST route for products
// @access  Public
// http://localhost:3001/products
/* postman template
via postman post > http://localhost:3001/products
and create an object by selectinng > Body > Raw > JSON
{
	"name": "Harry Potter 5",
	"price": "50",
	"description": "Some text here"
}
and send
*/
// post requests will receive contents like name, price, description
// we create api docs to let user know what type of info this end point receives
// we have used body parser to parse such requests
router.post("/", (req, res, next) => {
  // lets say this end point receives name, price and body
  // const newProduct = {
  //   name: req.body.name,
  //   price: req.body.price,
  //   description: req.body.description,
  // };
  const newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
  // save in database // this is a promise below
  newProduct
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "POST requests to /products",
        createdProduct: result,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  // res.status(201).json({
  //   message: "POST requests to /products",
  //   createdProduct: newProduct,
  // });
});

// Get request for single product //////////////////////
// @route   GET /products/productid
// @desc    Get route for single product
// @access  Public
// product Id get request
// http://localhost:3001/products/123
// http://localhost:3001/products/special
// http://localhost:3001/products/5cfd8ea073a543259843e655
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  // if (id === "special") {
  //   res.status(200).json({
  //     message: "You discovered the special ID: " + id,
  //   });
  // }
  Product.findById(id)
    .exec()
    .then(doc => {
      console.log("From database ", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No entry found",
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  // res.status(200).json({
  //   message: "Product ID: " + id,
  // });
});

// Patch request for single product //////////////////////
// @route   PATCH /products/productid
// @desc    Patch route for single product
// @access  Public
// http://localhost:3001/products/123
// patch syntax for postman for this route
/*
[
	{ "propName": "name", "value": "Harry Potter 1" },
	{ "propName": "description", "value": "Some text here" }
]
*/
// update product
router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (let ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  // res.status(200).json({
  //   message: id + " Product updated",
  // });
});

// Delete request for single product //////////////////////
// @route   DELETE /products/productid
// @desc    Delete route for single product
// @access  Public
// http://localhost:3001/products/123
// http://localhost:3001/products/5cfd8a6973a543259843e651
// delete product
router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  // res.status(200).json({
  //   message: id + " Product deleted",
  // });
});

module.exports = router;
