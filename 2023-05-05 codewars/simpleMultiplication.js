// https://www.codewars.com/kata/583710ccaa6717322c000105
// 8th Kyu - Simple Multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}

console.log(simpleMultiplication(2),16,'Should return given argument times eight...')
console.log(simpleMultiplication(1),9, 'Should return given argument times nine...')
console.log(simpleMultiplication(8),64,'Should return given argument times eight...')
console.log(simpleMultiplication(4),32,'Should return given argument times eight...')
console.log(simpleMultiplication(5),45,'Should return given argument times nine...')