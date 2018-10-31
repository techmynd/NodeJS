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
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.send('<h2>express routing and nodemon and body-parser... send type is get</h2>');
});

app.post('/', function(req,res){
	res.send('send type is post ...');
});

app.put('/', function(req,res){
	res.send('send type is put ...');
});

app.delete('/', function(req,res){
	res.send('send type is delete ...');
});

app.listen(3000);
// go to http://localhost:3000
// run following command
// > node index.js
// in case you have isntaled nodemon use // > nodemon index.js
