const express = require("express");
// router is provided by express to handle routes
const router = express.Router();
const mongoose = require("mongoose");

// import product schema
const Product = require("../models/products");

// get requests for products
router.get("/", (req, res, next) => {
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
// GET
// http://localhost:3000/products

// post requests for products
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
// http://localhost:3000/products/123
// http://localhost:3000/products/special
// http://localhost:3000/products/5cfd8ea073a543259843e655

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
// patch
// http://localhost:3000/products/123
// patch syntax for postman
/*
[
	{ "propName": "name", "value": "Harry Potter 1" },
	{ "propName": "description", "value": "Some text here" }
]
*/

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
// delete
// http://localhost:3000/products/123
// http://localhost:3000/products/5cfd8a6973a543259843e651

module.exports = router;
