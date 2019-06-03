const fs = require('fs');

const readStream = fs.createReadStream('file.txt', 'utf8');

const data = '';
readStream.on('data', function(chunk){
  console.log("--------start---------");
  console.log(chunk);
});

readStream.on('end', function(){
  console.log("--------end---------");
});