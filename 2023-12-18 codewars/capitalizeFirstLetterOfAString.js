// https://www.codewars.com/kata/56c19316e8b139dff60006da
// 7 Kyu - Capitalize First Letter of a String

// Write a function capitalize() which capitalizes the 
// first letter (if any) of the given string. For example:

// Input 	Output
// string 	        String
// hello World 	    Hello World
// i love codewars 	I love codewars
// This sentence is already capitalized 	                    This sentence is already capitalized
// 0123the first character of this sentence is not a letter 	0123the first character of this sentence is not a letter

// Extend the String prototype with a method capitalize() so 
// you can call it on a string like so: "string".capitalize(). 
// Learn about inheritance and the prototype chain.

// Furthermore, the built-in string methods toUpperCase() and 
// toLowerCase() are disabled for this Kata.


String.prototype.capitalize = function () {
    let firstChar = this.charCodeAt(0);
    if (firstChar >= 97 && firstChar <= 122) { firstChar -=32 }
    
    return String.fromCharCode(firstChar) + this.slice(1)
};
  
  
  
console.log("hello world".capitalize(), "Hello world");
console.log("an apple a day keeps the doctor away".capitalize(), "An apple a day keeps the doctor away");
console.log("today, I have a dream ... ".capitalize(), "Today, I have a dream ... ");
console.log("hello how are you?  i am john doe".capitalize(), "Hello how are you?  i am john doe");
console.log("This one is already capitalized.".capitalize(), "This one is already capitalized.");