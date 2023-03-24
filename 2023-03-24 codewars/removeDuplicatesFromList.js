// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
// 8th Kyu - Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

// P: array of integers
// R: the same array wihtout duplicates in the same order
// E: see below
// P: remove duplicates from array
    // return array

const distinct = (a) => { return [...new Set(a)] }

console.log(distinct([1]), [1]);
console.log(distinct([1,2]), [1,2]);
console.log(distinct([1,1,2]), [1,2]);