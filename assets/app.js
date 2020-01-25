// Require in necessary dependencies in this case we're using fs 'reading and writing files'
var fs = require('fs');

// Read a file using fs asynchronously
var fs = require('fs');
 fs.readFile('readMe.txt', 'utf8', function (err, data) {
  fs.writeFile('writeMe.txt', data, function(err, result) {
     if(err) console.log('error', err);
   });
 });

// // Writing a new file using fs asynchronously
// fs.writeFileSync('writeMe.txt', readMe);