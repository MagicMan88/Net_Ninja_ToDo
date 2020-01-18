// Use the require function which is on the global object in node.js so we can use it wherever we are.
// ==================================================================================================

// Using require to 'attach' count.js to app.js, we do this by setting require equal to a variable that's equal to whatever's returned to us.
var counter = require('./count')

// Console.log the calling of the function to see it in the terminal
console.log(counter(['Steve', 'Kelly', 'Humphrey']));