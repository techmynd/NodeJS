var express = require('express');
var app = express();
app.get('/', function(req,res){
	res.send('Now this is express routing and nodemon ...');
});
// port listen // fireup local server
app.listen(3000);
// go to http://localhost:3000
// run following command
// > node index-express.js
// or > nodemon index-express.js