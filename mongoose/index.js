const Joi = require("joi");
const express = require("express");
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // use public directory for assets

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

// custom routes
const myCourses = [
  { id: 1, name: "Angular JS" },
  { id: 2, name: "Vue JS" },
  { id: 3, name: "React JS" },
];
app.get("/api/mycourses", (req, res) => {
  res.send(myCourses);
});
// http://localhost:3000/api/mycourses
app.get("/api/mycourses/:id", (req, res) => {
  const myCourse = myCourses.find(
    course => course.id === parseInt(req.params.id),
  );
  if (!myCourse) return res.status(404).send("Course not found");
  res.send(myCourse);
});
// http://localhost:3000/api/mycourses/1
// http://localhost:3000/api/mycourses/2
// http://localhost:3000/api/mycourses/8 > not found

////////////////////////////////////////////////////////

// listen to port
// process.env.port is for hosting environment dynamic port
// so hosting env port or 3000 // whichever is available
// you can set port
// windows > set port 5000
// MAC > export port 5000
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port} ... http://localhost:${port}/`);
});

// > node index.js
// or > nodemon index.js
// http://localhost:3000/
