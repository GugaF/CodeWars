// https://www.codewars.com/kata/5546ea9bddfc5c0c38000026
// 7 Kyu - You Can't Code Under Pressure #2

// Code as fast as you can!

// You need to make a constructor function with two methods (and only these 
// two methods) to return and increment a counter, but the counter should not 
// be directly accessible from outside the function.

function Counter() {
    let counter = 0;
    this.check = function() { return counter; }; 
    this.increment = function() { counter++; };
};

var myCounter = new Counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.check(), 2)