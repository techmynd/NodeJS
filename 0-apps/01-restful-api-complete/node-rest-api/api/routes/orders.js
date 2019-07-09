const express = require("express");
// router is provided by express to handle routes
const router = express.Router();
const mongoose = require("mongoose");

// import order schema
const Order = require("../models/orders");

// router.get(req, res, next);
// router.post(req, res, next);
// router.patch(req, res, next);
// router.delete(req, res, next);

// Get requests for orders //////////////////////
// @route   GET /orders
// @desc    Get route for orders
// @access  Public
// http://localhost:3001/orders
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

// Post request for orders //////////////////////////
// @route   POST /orders
// @desc    Post route for orders
// @access  Public
// http://localhost:3001/orders
/* postman template
via postman post > http://localhost:3001/orders
and create an object by selecting > Body > Raw > JSON
{
	"orderId": "1234",
	"quantity": "2"
}
and send
*/
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

// Get request for single order ////////////////////////
// @route   Get /orders/orderid
// @desc    Get route for single order
// @access  Public
// http://localhost:3001/orders/123
// http://localhost:3001/orders/special
// http://localhost:3001/orders/5cfd8a6973a543259843e651
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

// Patch request for single order ////////////////////////
// @route   Patch /orders/orderid
// @desc    Patch route for single order
// @access  Public
// Partially update single order
// http://localhost:3001/orders/123
// http://localhost:3001/orders/5cfd8e3673a543259843e653
/* postman template
[
	{ "propName": "quantity", "value": "20" }
]
*/
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

// Delete request for single order ////////////////////////
// @route   Delete /orders/orderid
// @desc    Delete route for single order
// @access  Public
// delete order request
// http://localhost:3001/orders/123
// http://localhost:3001/orders/5cfd8a6973a543259843e651
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

module.exports = router;
