// https://www.codewars.com/kata/55edaba99da3a9c84000003b
// 8th Kyu - Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
// First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// P: an array of numbers, a divisor
// R: all the numbers in the array that are divisible by the divisor
// E: see below
// P: cycle through the array and if the number is divisible by the divisor, add it to a new array.
    // return the new array

const divisibleBy = (numbers, divisor) => {
    // let answer = []
    // for (let i = 0; i < numbers.length; i++) {
    //     if(numbers[i] % divisor === 0) {
    //     answer.push(numbers[i])
    //     }
    // }
    // return answer

    // refactor
    return numbers.filter(x => x % divisor === 0)
}


console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);