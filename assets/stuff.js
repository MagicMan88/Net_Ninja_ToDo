// Working on modularization aka connecting js files to one another
// ================================================================

// Counter function -- Cutting out the 'middle-man' and 'shortening' the code.
var counter = function (arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

// Adder function using template strings 'eliminates need for a lot of concatenation'
var adder = function (a, b) {
    return `The sum of the 2 numbers is ${a+b}`;
};

// Pi function
var pi = 3.142;

// Object literal notation make module.exports an object. Put different properties or methods in the object.
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};