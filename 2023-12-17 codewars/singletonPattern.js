// https://www.codewars.com/kata/534fcca5edb124cfe6000f60
// 7 Kyu - Singleton Pattern

// In software engineering, the singleton pattern is a design pattern that 
// restricts the instantiation of a class to one object. This is useful when 
// exactly one object is needed to coordinate actions across the system.

// Create an Singleton pattern, so there is one object in system.

// Example:
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1

var Singleton = function(){
    if(Singleton.__instance) {
        return Singleton.__instance;
    }

    Singleton.__instance = this;
};

var obj1 = new Singleton();
var obj2 = new Singleton();

obj1.test = 1;

console.log(obj2, obj1);
console.log(obj2.test, obj1.test);
console.log(obj1 instanceof Singleton);
console.log(obj2 instanceof Singleton);