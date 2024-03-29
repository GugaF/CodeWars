// https://www.codewars.com/kata/57036f007fd72e3b77000023
// 8 Kyu - Classic Hello World

// You are given a method called main, make it print the line Hello World!,
// (yes, that includes a new line character at the end) and don't return anything

// Note that for some languages, the function main is the entry point of the program.
// Here's how it will be tested:

// Solution.main("parameter1","parameter2");

// Check your references
// Think about the scope of your method
// For prolog you can use write but there are better ways
// If you still don't get it probably you can define main as an attribute 
// of the Solution class that accepts a single argument, and that only prints 
// "Hello World!" without any return.

class Solution{
    static main = function() {
        console.log("Hello World!")
    }
}

// Another way!
// Solution = {};
// Solution.main = () => { console.log("Hello World!"); };
