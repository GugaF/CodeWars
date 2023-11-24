// https://www.codewars.com/kata/55a14aa4817efe41c20000bc
// 8 Kyu - Classy Extentions

// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing 
// extends keyword. You will be preloaded with the Animal class, so you should 
// only edit the Cat class.

// Task
// Your task is to complete the Cat class which Extends Animal and replace the 
// speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

// The name attribute is passed with this.name (JS)


class Animal {
    constructor(name) {
        this.name = name
    }
}

class Cat extends Animal {
    speak() {
      return `${this.name} meows.`;
    }
}


var cat1 = new Cat('Mr Whiskers');
console.log(cat1.speak(),'Mr Whiskers meows.')

var cat2 = new Cat('Lamp');
console.log(cat2.speak(),'Lamp meows.')

var cat3 = new Cat('$$Money Bags$$');
console.log(cat3.speak(),'$$Money Bags$$ meows.')