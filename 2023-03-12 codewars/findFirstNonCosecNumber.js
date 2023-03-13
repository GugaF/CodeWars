// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// 8th Kyu - Find the First Non Consecutive Number

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.

// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive could be either too!

// Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, 
// but you can write your own example test. )

// P: array of positive or negative numbers in ascending order
// R: element of the first non consecutive number in an array
// E: see below
// P: 
    // check lengths of array. proceed only if length is 2 or more, else return null - done
    // check current element vs next element: if next - current is 1 proceed to the next elment 
    // else return next element
    // if element.length is reached return null


function firstNonConsecutive(arr) {
    if (arr.length <= 1) {
        return null
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i+1] - arr[i] !== 1) {
                return arr[i + 1]
            }
        }
        return null
    }
}

console.log(firstNonConsecutive([3]), null)
console.log(firstNonConsecutive([]), null)
console.log(firstNonConsecutive([1,2,3,4,6,7,8]), 6)
console.log(firstNonConsecutive([1,2,3,4]), null)
console.log(firstNonConsecutive([-2,-1, 0, 2]), 2) 
console.log(firstNonConsecutive([-12,-1, 0, 2]), -1) 
