// https://www.codewars.com/kata/5772da22b89313a4d50012f7
// 8th Kyu - Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case: name equals owner. return: 'Hello boss'
// case: otherwise. return: 'Hello guest'


const greet = ((name, owner) => name === owner ? "Hello boss" : "Hello guest")

console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')