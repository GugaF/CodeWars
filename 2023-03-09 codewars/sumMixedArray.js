// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// 8th Kyu - Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


// P: receive mixed array of integers and strings
// R: sum of the array of integers
// E: [9, 3, '7', '3'] must return 22
// P: run loop for the length of input array
    // check if element is integer, otherwise convert to integer
    // add element to starting number (sum)
    // return sum


function sumMix(x){
    // let sum = 0
    // for(let i = 0; i < x.length; i++) {
    //     sum += parseInt(x[i])
    // }
    // return sum

    return x.reduce((sum, value) => sum + parseInt(value), 0)
}


console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);