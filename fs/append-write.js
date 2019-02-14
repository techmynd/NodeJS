const fs = require('fs');


// write Asyncronously
// fs.appendFile
 
let dataToWrite = " /// ..... hello node .... i am new text .... /// ";
fs.appendFile('./write.txt', dataToWrite, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log("done writing in file...");
	}
});


