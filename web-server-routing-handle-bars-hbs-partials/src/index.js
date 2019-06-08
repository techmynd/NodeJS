const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
// middleware
const publicDirectoryPath = path.join(__dirname, "../public");

// customize views directory path
const viewsPath = path.join(__dirname, "../templates/views");
// partials path
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");

// customize views directory path
app.set("views", viewsPath);
// register partials
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath)); // use public directory

app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    detail: "some paragraph",
  });
});

app.get("", (req, res) => {
  res.render("index", {
    title: "Homepage",
    detail: "some paragraph",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    detail: "some paragraph about about page",
  });
});

// for pages next to about // such as // /about/contact
// sub pages
// defining sub pages is necessary otherwise they will hit 404 wild card

app.get("/about/*", (req, res) => {
  res.send("contact page");
  /*
   res.render("contact", {
    title: "Contact Page",
    detail: "some paragraph",
   });
  */
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    detail: "some paragraph about help page",
  });
});

// last 404 page

app.get("*", (req, res) => {
  // res.send("404 page");
  // or

  res.render("404", {
    title: "404 Page",
    detail: "This is 404 page",
  });
});

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

// > node src/index.js
// or > nodemon src/index.js
// http://localhost:3000/
// http://localhost:3000/index
// http://localhost:3000/about
// http://localhost:3000/help
