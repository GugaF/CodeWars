// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// 8th Kyu - Calculate Average

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((a, b) => a + b, 0) / array.length
}


console.log(findAverage([1,1,1]), 1);
console.log(findAverage([1,2,3]), 2);
console.log(findAverage([1,2,3,4]), 2.5);
console.log(findAverage([]), 0);