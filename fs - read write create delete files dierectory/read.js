const fs = require('fs');

// read
// fs.readFileSync('./myfile.txt');
/*
let content = fs.readFileSync('./myfile.txt');
console.log(content);
// this will throw buffer > raw data ... not readable
*/

/*
// fs.readFileSync
let content = fs.readFileSync('./myfile.txt', {encoding: "utf8"});
console.log(content);
*/


// read Asyncronously
// fs.readFile
 
fs.readFile('./myfile.txt', 'utf8', (err, data) => {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
console.log('do something else');

