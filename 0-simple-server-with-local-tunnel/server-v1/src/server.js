var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000, function(){
    console.log('.................');
    console.log('.................');
    console.log('Server ready and is running at port 3000');
    console.log('Go to http://localhost:3000/');
    console.log('.................');
    console.log('.................');
});