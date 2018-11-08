const http = require('http');

/*

// request listener function
function rqListener(req, res){
	// req contains data and res contains response // these words can be data and response also
}
http.createServer(rqListener);

// or ///////////////////////////////

http.createServer(function(req, res){

});

// or ///////////////////////////////

http.createServer((req, res) => {
	console.log(req);
	process.exit();
});

*/

const server = http.createServer((req, res) => {
	const url = req.url;
	// console.log(req);
	
	if(url === '/') {
		res.setHeader('Content-Type','text/html');
		res.write('</html>');
		res.write('<head><title>Home</title></head>');
		res.write('<body><h1>Home</h1><br><a href="/">Home</a> <a href="/about">About</a></body>');
		res.write('</html>');
		return res.end(); // returning res.end is necessary // otherwise u cant use more requests below this connection
		// process.exit();
	}
	if(url === '/about') {
		res.setHeader('Content-Type','text/html');
		res.write('</html>');
		res.write('<head><title>About</title></head>');
		res.write('<body><h1>About</h1><br><a href="/">Home</a> <a href="/about">About</a></body>');
		res.write('</html>');
		return res.end();
	}
	if(url === '/contact' && method === 'POST') {
		// 
	}


});

server.listen(3000);
// server.listen(3000, 'http://localhost');

///////////////////////////////
///////////////////////////////

/*
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/