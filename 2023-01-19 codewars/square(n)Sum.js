// https://www.codewars.com/kata/515e271a311df0350d00000f
// 8th Kyu - Square (n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0)
}

console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0)