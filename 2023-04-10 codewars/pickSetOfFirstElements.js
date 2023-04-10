// https://www.codewars.com/kata/572b77262bedd351e9000076
// 8th Kyu - pick a set of first elements

// Write a function to get the first element(s) of a sequence. 
// Passing a parameter n (default=1) will return the first n element(s) of the sequence.
// If n == 0 return an empty sequence []



// P: array of characters and an integer
// R: return the same array up to the index of integer passed.
    // if intager is 0, return empty array
    // if no integer, return first elements only
// E:
    // var arr = ['a', 'b', 'c', 'd', 'e'];
    // first(arr) //=> ['a'];
    // first(arr, 2) //=> ['a', 'b']
    // first(arr, 3) //=> ['a', 'b', 'c'];
    // first(arr, 0) //=> [];
// P: splice the array 

const first = (arr, n = 1) => { return arr.splice(0, n) };

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first([...arr]   ),      ['a']);
console.log(first([...arr], 2), ['a', 'b']);