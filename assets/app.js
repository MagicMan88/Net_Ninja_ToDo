// Use the require function which is on the global object in node.js so we can use it wherever we are.
// ==================================================================================================
// Using the events module
var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'The event was emitted.');