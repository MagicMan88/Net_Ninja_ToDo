// Use the require function which is on the global object in node.js so we can use it wherever we are.
// ==================================================================================================
// Using the events module and the util module
var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey, dudes');
ryu.emit('speak', 'I want a curry');
