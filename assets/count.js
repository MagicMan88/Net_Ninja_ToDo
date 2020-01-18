// Working on modularization aka connecting js files to one another
// ================================================================

// 
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

// Explicitly state which parts of this module we want other files to have access to that require this module.
module.exports = counter;