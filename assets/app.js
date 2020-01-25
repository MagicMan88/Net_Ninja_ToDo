// Use the require function which is on the global object in node.js so we can use it wherever we are.
// ==================================================================================================

// Using require to 'attach' count.js to app.js, we do this by setting require equal to a variable that's equal to whatever's returned to us.
// The variable 'stuff' is now the module.exports that's returned to this file from the stuff.js file.
var stuff = require('./stuff')

// Console.log the calling of the function to see it in the terminal
console.log(stuff.counter(['Steve', 'Kelly', 'Humphrey']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));
console.log(stuff.adder(18, 6));