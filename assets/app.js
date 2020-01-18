// Time variable
var time = 0;

// setInterval function in node that console.log's a message after five seconds have passed. Add a condition that clears the interval after 5 seconds.
var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5){
        clearInterval(timer);
    }
}, 2000);