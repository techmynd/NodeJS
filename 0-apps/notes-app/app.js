const fs = require('fs');

//Create File
fs.writeFileSync('notes.txt',"");
// write text
fs.writeFileSync('notes.txt', "Buy Milk.");
// add more text
fs.appendFileSync('notes.txt', "Buy Eggs.");
fs.appendFileSync('notes.txt', "Buy Bread.");