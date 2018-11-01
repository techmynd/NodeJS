var express = require('express');
var app = express();

// setup a static route
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
 
// this below is not needed
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
 
app.listen(3000);