var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    // we are using stream here to break down output in chunks to enhance performance
    // res is a stream
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    
}).listen(3000, '127.0.0.1');
