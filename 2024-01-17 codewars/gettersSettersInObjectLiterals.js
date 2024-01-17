// https://www.codewars.com/kata/56fe9dbb69510b2ff8000fb3
// 7 Kyu - SpeedCode #1 - Getters and Setters in Object Literals

// This Kata series aims to test your ability to quickly recall 
// programming language features and apply them appropriately and 
// efficiently. For example, if you are asked to return the square 
// root of a number, you are expected to recall the built-in method 
// Math.sqrt(number) immediately instead of sitting down thinking for 
// 5 minutes before programming a custom algorithm that calculates the 
// square root of a number.

// Define a variable person which stores an object literal. The object 
// literal should have the following properties:
//     A firstName of "Jane"
//     A lastName of "Doe"

// The object literal should then have a getter and setter called 
// fullName which returns and parses the full name of the person respectively. 
// A full name is defined as follows: If the first name is "Jane" and the 
// last name is "Doe" then the full name is "Jane Doe" and vice versa. You 
// may assume all full names are valid when parsing them.

// Get your timer out and get ready. Ready, get set, GO!!! :D

var person = {
    firstName : "Jane",
    lastName : "Doe",    
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },  
    set fullName(fullName) {
      this.firstName = fullName.split(' ')[0]
      this.lastName = fullName.split(' ')[1]
    }
}

console.log(person.fullName, 'Jane Doe')
person.fullName = 'Mary Smith'
console.log(person.fullName, 'Mary Smith')