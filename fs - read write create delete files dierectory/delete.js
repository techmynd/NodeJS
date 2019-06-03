const fs = require('fs');

// delete
// fs.unlinkSync('./filetodelete.txt');
// console.log('do next thing afer deleting');


// delete syncronously
/*
try {
	fs.unlinkSync('./filetodelete.txt');
} catch(e) {
	console.log(e);
} finally {
	console.log('done deleting... synchronously')
}
console.log('do next thing afer deleting');
*/


// delete Asyncronously
fs.unlink('./filetodelete.txt', err => {
	if(err) {
		console.log(err);
	} else {
		console.log('done deleting asynchronously...')
	}
});
console.log('do next thing afer deleting');