const express = require("express");
const app = express();
// body parser extracts request body from request > post request
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// connect mongoose to atlas - MongoDB
/*
mongoose.connect(
  "mongodb+srv://tm-first-usr:***PASSWORD***@cluster-first-test-8qrfn.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  },
);
*/

// save password in .env file or nodemon.json file
// don't hardcode password
require("dotenv/config");
mongoose.connect(
  "mongodb+srv://tm-first-usr:" +
    process.env.DB_PASS +
    "@cluster-first-test-8qrfn.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  },
);

// middleware
// just a logging mechanism
const morgan = require("morgan");
app.use(morgan("dev"));

// enable body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow access to external requests
// CORS (Cross Origin Resource Sharing) errors solution
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization",
  );
  // res.header("Access-Control-Allow-Origin", "http://www.onlymysite.com");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  // next is necessary
  next();
});

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
