// Working on modularization aka connecting js files to one another
// ================================================================

// Counter function -- Cutting out the 'middle-man' and 'shortening' the code.
module.exports.counter = function (arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

// Adder function using template strings 'eliminates need for a lot of concatenation'
module.exports.adder = function (a, b) {
    return `The sum of the 2 numbers is ${a+b}`;
};

// Pi function
module.exports.pi = 3.142;

// Explicitly state which parts of this module we want other files to have access to that require this module.
// module.exports is an empty object, add more into the object by using the syntax below.
// module.exports.counter = counter;
//  module.exports.adder = adder;
//  module.exports.pi = pi;