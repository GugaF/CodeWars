// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
// 8th Kyu - Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0

// P: array of integers of varying length
// R: if array is less than 2 return 0,
    // else sort array in descending order
    // then loop through array, take difference of current and next elements and sum them together
// E: see below
// P: see return above

function sumOfDifferences(arr) {
    return arr.length < 2 ? 0 : Math.max(...arr) - Math.min(...arr);
}

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(sumOfDifferences([]), 0);
console.log(sumOfDifferences([-35]), 0);