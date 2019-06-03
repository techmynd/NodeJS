var express = require('express');
var app = express();
 
app.get('/', function(req, rep) {
    rep.send('this is home page');
})
 
app.get('/about', function(req, rep) {
    rep.send('this is about page');
})
 
app.get('/contect', function(req, rep) {
    rep.send('this is contect page');
})
 
var students = {
    1 : 'Mark',
    2 : 'Tom',
    3 : 'john'
}
 
app.get('/students/:id', function(req, rep) {
    rep.send('you have requested to see the student name : '+ students[req.params.id]);
})
 
app.listen(3000, function() {
    console.log('our server is live on posrt 3000');
})