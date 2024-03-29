// https://www.codewars.com/kata/547f1a8d4a437abdf800055c
// 6 Kyu - "this" is an other problem

// Having created a function NamedOne which takes first & last names as parameters and returns 
// an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties 
// which should be all accessibles, we discovered that "accessible" also means "mutable".

// If, for example, we've got a "NamedOne" like this :
// var namedOne = new NamedOne("Naomi","Wang")
// namedOne.firstName // -> "Naomi"
// namedOne.lastName  // -> "Wang"
// namedOne.fullName  // -> "Naomi Wang"
// ...properties may be changed :

// namedOne.firstName = "John"
// namedOne.firstName // -> "John"
// namedOne.lastName = "Doe"
// namedOne.lastName  // -> "Doe"
// ...but all properties are not updated !

// namedOne.fullName  // -> "Naomi Wang" 
// //-- Oh no ! we want fullName == "John Doe" now !

// Your mission:
// So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.
//     If .firstName or .lastName are changed, then .fullName should also be changed
//     If .fullName is changed, then .firstName and .lastName should also be changed.
// Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.
// Examples:
// var namedOne = new NamedOne("Naomi","Wang")
// namedOne.firstName = "John"
// namedOne.lastName = "Doe"
// // ...then...
// namedOne.fullName // -> "John Doe"

// // -- And :
// namedOne.fullName = "Bill Smith"
// // ...then...
// namedOne.firstName // -> "Bill"
// namedOne.lastName  // -> "Smith"

// // -- But :
// namedOne.fullName = "Tom" // -> no : lastName missing
// namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
// namedOne.fullName // -> "Bill Smith" (unchanged)
// Can you change our function to create such a NamedOne object ?
// ( Hint: in this kata you'll try to define properties of an object )

class NamedOne {
    constructor(first, last) {
      this.firstName = first;
      this.lastName = last;
    }
    
    set fullName(fullName) {
      var names = fullName.split(' ');
      if (names.length == 2) {
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


var n = new NamedOne('John', 'Doe');
console.log( n.firstName, "John");
console.log( n.lastName, "Doe");
console.log( n.fullName, "John Doe");

n.firstName = "Jane";
console.log( n.firstName, "Jane");
console.log( n.fullName, "Jane Doe");

n.firstName = "Jane";
n.lastName = "Smith"; // -> n.name = "Jane Smith"
console.log( n.lastName, "Smith");
console.log( n.fullName, "Jane Smith");

n.fullName = "Juan Herrero";
console.log( n.fullName, "Juan Herrero");
console.log( n.lastName, "Herrero");
console.log( n.firstName, "Juan");