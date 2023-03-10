// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// 8th Kyu - Array Plus Array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// P: two arrays, containing integers only
// R: sum of all integers in the two arrays
// E: see below
// P: reduce the firs array, reduce the second array, add the two accumulations together, return

function arrayPlusArray(arr1, arr2) {
    // First try:
    // let sum = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    // return arr2.reduce((accumulator, currentValue) => accumulator + currentValue, sum)

    // three dots operator lists what is in arr1 and then arr2 to make combined arr
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
