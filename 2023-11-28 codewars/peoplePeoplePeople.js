// https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19
// 8 Kyu - Fun with ES6 Classes #1 - People, People, People

// Define a class Person with the following properties:

//     A constructor that accepts 4 arguments: firstName (defaults to "John" if not set), 
//     lastName (defaults to "Doe" if not set), age (defaults to 0 if not set) and 
//     gender (defaults to "Male" if not set). 
//     These should be stored in this.firstName, this.lastName, this.age and this.gender respectively.
//     A method sayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
//     A class/static method greetExtraTerrestrials that accepts one 
//     parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race 
//     name is "Martians", it should say "Welcome to Planet Earth Martians"

// You may use any valid syntax you like; however, it is highly recommended that you complete this 
// Kata using ES6 syntax and features.


class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;

        // can also say Object.assign(this, { firstName, lastName, age, gender } );
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}

let john = new Person();
console.log(john.firstName, "John");
console.log(john.lastName, "Doe");
console.log(john.age, 0);
console.log(john.gender, "Male");
console.log(john.sayFullName(), "John Doe");

let jane = new Person("Jane", "Doe", 25, "Female");
console.log(jane.firstName, "Jane");
console.log(jane.lastName, "Doe");
console.log(jane.age, 25);
console.log(jane.gender, "Female");
console.log(jane.sayFullName(), "Jane Doe");

console.log(Person.greetExtraTerrestrials("Martians"), "Welcome to Planet Earth Martians");