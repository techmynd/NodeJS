var express = require('express');
 
var app = express();
// GET
// POST
// PUT
// DELETE
 
app.get('/', function(req, rep) {
    rep.send('this is home page');
})
 
app.get('/about', function(req, rep) {
    rep.send('this is about page');
})
 
app.get('/contect', function(req, rep) {
    rep.send('this is contect page');
})
 
app.listen(3000, function() {
    console.log('our server is live on posrt 3000');
})
