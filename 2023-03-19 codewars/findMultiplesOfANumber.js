// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
// 8th Kyu - Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
// If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
// The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


// P: integer and limit
// R: an array containing all numbers that are multiple of the integer that lie between the integer and the limit (inclusive of the limit)
// E: see below
// P: loop between integer and limit
    // if index is divisible by integer, add it to array.
    // return array

const findMultiples = (integer, limit) => {
    let array = []
    
    for (let i = integer; i <= limit; i += integer) {
        if (i % integer === 0) {
            array.push(i)
        }
    }

    return array
}


console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])