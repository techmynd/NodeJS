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
// post requests for orders will receive contents like productId and quantity
// we create api docs to let user know what type of info this end point receives
// we have used body parser to parse such requests
router.post("/", (req, res, next) => {
  const newOrder = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "POST requests to /orders",
    orderCreated: newOrder,
  });
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
