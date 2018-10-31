/*
	// old method 

	// console.log("working...");

	// build local server
	const http = require('http');
	const site = http.createServer(function(req,res){
		//console.log('working...');
		res.setHeader('Content-Type','text/html');
		res.end('<h1>Local Server is working...</h1>');
	});
	// port listen // fireup local server
	site.listen(3000);
	// go to http://localhost:3000
	// run following command
	// > node index.js
*/

// using express routing
var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('Now this is express routing and nodemon ...');
});

app.listen(3000);
// go to http://localhost:3000
// run following command
// > node index.js
// in case you have isntaled nodemon use // > nodemon index.js
