// https://www.codewars.com/kata/57f6ad55cca6e045d2000627
// 8th Kyu - To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// The input array will always contain only positive numbers, and will never be empty or null.

// P: integer array
// R: array as follows:
    // if number has an integer squre root => return the square root
    // else square the number
// E: see below
// P: loop through each element in the array
    // check if the square root has no remainder, if it doesn't return the square root
    // else return the number squared

function squareOrSquareRoot(array) {
    // First Try
    // let answer = []
    // for (let i = 0; i < array.length; i++) {
    //     if (Math.sqrt(array[i]) % 1 === 0) {
    //         answer[i] = Math.sqrt(array[i])
    //     } else {
    //         answer[i] = array[i] * array[i]
    //     }
    // }
    // return answer

    // Refactor
    return array.map(x => Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : (x*x))
}



console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]), [ 2, 9, 3, 49, 4, 1 ]);
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]), [ 10, 10201, 25, 25, 1, 1 ]);
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]), [ 1, 4, 9, 2, 25, 36 ]);