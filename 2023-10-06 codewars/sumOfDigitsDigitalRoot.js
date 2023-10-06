// https://www.codewars.com/kata/541c8630095125aba6000c00
// 6 Kyu - Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more 
// than one digit, continue reducing in this way until a single-digit 
// number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    if (n < 10) return n 
    n = n.toString().split('').map(d => Number(d)).reduce((acc, d) => acc += d, 0)
    return digitalRoot(n)
}

console.log( digitalRoot(16), 7 )
console.log( digitalRoot(456), 6 )
console.log( digitalRoot(942), 6 )
console.log( digitalRoot(132189), 6 )
console.log( digitalRoot(493193), 2 )

// This can be solved mathematically using:
// return (n - 1) % 9 + 1

// console.log(15 % 9 + 1)      => 7
// console.log(455 % 9 + 1)     => 6
// console.log(941 % 9 + 1)     => 6
// console.log(132188 % 9 + 1)  => 6
// console.log(493192 % 9 + 1)  => 2
// but is only valid up to n = 9 999 999
// using this method, no recursion is required.