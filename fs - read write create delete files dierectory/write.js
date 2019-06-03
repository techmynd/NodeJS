const fs = require('fs');


// write Asyncronously
// fs.writeFile
 
let dataToWrite = "hello node .... i am new text";
fs.writeFile('./write.txt', dataToWrite, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log("done writing in file...");
	}
});


