const express = require("express");
// router is provided by express to handle routes
const router = express.Router();
const mongoose = require("mongoose");

// import order schema
const Order = require("../models/orders");

// get requests for orders
router.get("/", (req, res, next) => {
  Order.find()
    .exec()
    .then(docs => {
      console.log(docs);
      //res.status(200).json(docs);
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
  //   message: "Get requests to /orders, orders were fetched",
  // });
});
// GET
// http://localhost:3000/orders

// post requests for orders
// post requests for orders will receive contents like productId and quantity
// we create api docs to let user know what type of info this end point receives
// we have used body parser to parse such requests
router.post("/", (req, res, next) => {
  // const newOrder = {
  //   productId: req.body.productId,
  //   quantity: req.body.quantity,
  // };
  const newOrder = new Order({
    _id: new mongoose.Types.ObjectId(),
    productId: req.body.productId,
    quantity: req.body.quantity,
  });
  // save in database
  newOrder
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "POST requests to /orders",
        orderCreated: result,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  // res.status(201).json({
  //   message: "POST requests to /orders",
  //   orderCreated: newOrder,
  // });
});
// POST
// http://localhost:3000/orders
/*
via postman post > http://localhost:3000/products
and create an object by selectinng > Body > Raw > JSON
{
	"productId": "1234",
	"quantity": "2"
}
and send
*/

// orders Id get request
router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  // if (id === "special") {
  //   res.status(200).json({
  //     message: "You discovered the special order ID: " + id,
  //   });
  // }
  Order.findById(id)
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
  //   message: "Order ID: " + id,
  // });
});
// http://localhost:3000/orders/123
// http://localhost:3000/orders/special
// http://localhost:3000/orders/5cfd8a6973a543259843e651

// update order
router.patch("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  const updateOps = {};
  for (let ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Order.update({ _id: id }, { $set: updateOps })
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
  //   message: id + " Order updated",
  // });
});
// patch
// http://localhost:3000/orders/123
// http://localhost:3000/orders/5cfd8e3673a543259843e653
/*
[
	{ "propName": "quantity", "value": "20" }
]
*/

// delete product
router.delete("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  Order.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  // res.status(200).json({
  //   message: id + " Order deleted",
  // });
});
// delete
// http://localhost:3000/orders/123
// http://localhost:3000/orders/5cfd8a6973a543259843e651

module.exports = router;
