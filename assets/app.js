// Call function, taking a function as a parameter. I believe this is a callback.
function callFunction(fun){
    fun();
}

// Function expression. Assigned a variable named 'sayBye' to an anonymous function and then called it by typing out the variable
var sayBye = function(){
    console.log('Bye');
};

// Call the callFunction and pass in the sayBye function expression
callFunction(sayBye);