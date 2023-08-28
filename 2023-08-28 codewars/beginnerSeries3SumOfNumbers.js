// https://www.codewars.com/kata/55f2b110f61eb01779000053
// 7 Kyu - Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers
// between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

// First Try, More readable
// function getSum(a, b) {
//     let ordered = [a, b].sort((a, b) => a - b)
//     let accumulator = 0

//     for (let i = ordered[0]; i <= ordered[1]; i++) {
//         accumulator += i
//     }

//     return accumulator
// }


// Refactored, use of mathematical function
function getSum(a, b) {
    [a, b] = [a, b].sort((a, b) => a - b)
    return (b - a + 1) * (a + b) / 2
}

console.log(getSum(0,-1), -1);
console.log(getSum(0, 1),  1);
console.log(getSum(2, 2),  2);
console.log(getSum(2, 3),  5);
console.log(getSum(4, 2),  9);
console.log(getSum(-1, 2), 2);