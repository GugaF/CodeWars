// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    return (number % 2 === 0 ? 'Even' : 'Odd')
}
// number Modulo 2 = 0 means there is no remainder therefore the number is even
// using ternary opertor instead of typing out a full if else statement


console.log(evenOrOdd(2), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(-42), "Even");
console.log(evenOrOdd(-7), "Odd");
console.log(evenOrOdd(0), "Even");