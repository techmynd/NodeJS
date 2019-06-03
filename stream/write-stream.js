var fs = require('fs');
 
var readStream = fs.createReadStream('file.txt', 'utf8');
var writeStream = fs.createWriteStream('written_stream.txt');
 
readStream.on('data', function(chunk) {
    writeStream.write(chunk);
    console.log("done ... check new file");
});
 