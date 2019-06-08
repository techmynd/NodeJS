const path = require("path");
const express = require("express");
const app = express();
// middleware
const publicDirectoryPath = path.join(__dirname, "../public");

// customize views directory path
// const viewsPath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");

// customize views directory path
// app.set('views', viewsPath);
// 
app.use(express.static(publicDirectoryPath)); // use public directory

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

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    detail: "some paragraph about help page",
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
