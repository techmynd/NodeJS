const express = require("express");
const app = express();

// middleware
// just a logging mechanism
const morgan = require("morgan");
app.use(morgan("dev"));

// defining routes for products and orders
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

// only request with http://localhost:3000/products will route to
// http://localhost:3000/api/routes/products.js
app.use("/products", productRoutes);

// only request with http://localhost:3000/orders will route to
// http://localhost:3000/api/routes/orders.js
app.use("/orders", orderRoutes);

/*
// middleware // this catches everything // not a good default route
app.use((req, res, next) => {
  res.status(200).json({
    message: "it works!",
  });
});
// http://localhost:3000/
*/

// default route
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "it works...",
  });
});

// error handling at the end
// if there is no handling mechanism and u call a unhandled route, throw this

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  // throw 404 error or 500
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

/*
// app.get();
// app.post();
// app.put();
// app.delete();
// app.use(); // use middleware

// express get > methods >  request, response
// expressjs.com

// route with path or url / and a callback function that calls a handler
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// http://localhost:3000/

// route
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
// http://localhost:3000/api/courses

// route
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});
// http://localhost:3000/api/courses/1
// http://localhost:3000/api/courses/2
// http://localhost:3000/api/courses/7

// route
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});
// http://localhost:3000/api/posts/2019/1

// route
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});
// http://localhost:3000/api/posts/2019/1?sortBy=name

////////////////////////////////////////////////////////
*/
