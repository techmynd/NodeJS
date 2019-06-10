const express = require("express");
// router is provided by express to handle routes
const router = express.Router();

// get requests for orders
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get requests to /orders, orders were fetched",
  });
});
// GET
// http://localhost:3000/orders

// post requests for orders
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "POST requests to /orders",
  });
});
// POST
// http://localhost:3000/orders

// orders Id get request
router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special order ID: " + id,
    });
  }
  res.status(200).json({
    message: "Order ID: " + id,
  });
});
// http://localhost:3000/orders/123
// http://localhost:3000/orders/special

// update order
router.patch("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: id + " Order updated",
  });
});
// patch
// http://localhost:3000/orders/123

// delete product
router.delete("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: id + " Order deleted",
  });
});
// delete
// http://localhost:3000/orders/123

module.exports = router;
