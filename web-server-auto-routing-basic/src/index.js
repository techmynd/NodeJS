const path = require("path");
const express = require("express");
const app = express();
// middleware

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath)); // use public directory

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

// > nodemon index.js
// or > nodemon index.js
// http://localhost:3000/
// http://localhost:3000/index.html
// http://localhost:3000/about.html
// http://localhost:3000/help.html
