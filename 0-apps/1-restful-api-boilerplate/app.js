const express = require("express");
const app = express();

// middleware
app.use((req, res, next) => {
  res.status(200).json({
    message: "it works!",
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
