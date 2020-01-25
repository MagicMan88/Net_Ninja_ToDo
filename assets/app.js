// Require in necessary dependencies in this case we're using fs 'reading and writing files'
var fs = require('fs');

// Read a file using fs synchronous
var readMe = fs.readFileSync('readMe.txt', 'utf8');


// Writing a new file using fs synchronous
fs.writeFileSync('writeMe.txt', readMe);