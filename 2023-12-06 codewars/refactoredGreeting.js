// https://www.codewars.com/kata/5121303128ef4b495f000001
// 7 Kyu - Refactored Greeting

// The following code could use a bit of object-oriented artistry. While it's a simple method and works 
// just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at 
// least, something similar depending on your language)

// Refactor the following code so that it belongs to a Person class/object. Each Person instance will h
// ave a greet method. The Person instance should be instantiated with a name so that it no longer has 
// to be passed into each greet method call.

// Here is how the final refactored code would be used:

// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should == 'Joe'


class Person {
    constructor(name) {
        this.name = name;
        //this.greet = (personToGreet) => `Hello ${personToGreet}, my name is ${this.name}`;
    }

    greet(personToGreet) {
        return `Hello ${personToGreet}, my name is ${this.name}`;
    }
}

// Person.prototype.greet = function(personToGreet) {
//    return `Hello ${personToGreet}, my name is ${this.name}`;
// }


let jack = new Person('Jack');
let jill = new Person('Jill');

console.log(jack.name, 'Jack');
console.log(jill.name, 'Jill');
console.log(jack.greet('Jill'), 'Hello Jill, my name is Jack');
console.log(jill.greet('Jack'), 'Hello Jack, my name is Jill');