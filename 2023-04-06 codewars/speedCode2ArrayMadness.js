// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
// 8th Kyu - SpeedCode #2 - Array Madness

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a 
// is strictly greater than the sum of the cubes of each element in b.

// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// Get your timer out. Are you ready? Ready, get set, GO!!!

// P: two arrays a and b that are greater than or equal to 1 in length
// R: true if sum of squares in a is greater than summ of cubes in b
// E: see below
// P: loop through a adding the square of each element
//      loop through b, adding the cube of each element
// return true if a^2 > b^3


const arrayMadness = (a, b) => {
    return a.reduce((acc, e) => acc + e**2, 0 ) > 
           b.reduce((acc, e) => acc + e**3, 0 );
}

console.log(arrayMadness([4,5,6],[1,2,3]), true);
console.log(arrayMadness([5,6,7],[4,5,6]), false);
console.log(arrayMadness([4,5,6],[3,4,5]), false);
console.log(arrayMadness([3,4,5],[2,3,4]), false);
console.log(arrayMadness([2,3,4],[1,2,3]), false);
console.log(arrayMadness([1,2,3],[0,1,2]), true);
console.log(arrayMadness([5,3,2,4,1],[15]), false);
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);