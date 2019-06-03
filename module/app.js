const moduleOne = require('./module-one');
const moduleTwo = require('./module-two');
const moduleThree = require('./module-three');
const moduleFour = require('./module-four');
const moduleFive = require('./module-five');


// use these when you have return statement and not console.log in your modules // to avoid undefined output

// console.log( moduleOne.m1() );
// console.log( moduleTwo() );
// console.log( moduleThree.m3() );
// console.log( moduleFour() );
// console.log(moduleFive.sayHelloEng());

// use these when you have only console.log in your modules

moduleOne.m1();
moduleTwo();
moduleThree.m3();
moduleFour();
moduleFive.sayHelloEng();


