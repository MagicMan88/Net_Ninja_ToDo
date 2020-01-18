// Time variable
var time = 0;

// setInterval function in node that console.log's a message after five seconds have passed.
setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000);