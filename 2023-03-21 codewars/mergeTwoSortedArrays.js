// https://www.codewars.com/kata/5899642f6e1b25935d000161
// 8th Kyu - Merge Two Sorted Arrays into One

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. 
// Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// P: two arrays containing only integers
// R: return ocmbination of both arrays sorted in ascending order. return array may not have duplicates. return an empty array, if source arrays are empty.
// E: see below
// P: merge both arrays
    // sort new array
    // check if each element is in array, at another position, remove it if it is
    // retun the filtered arrray

function mergeArrays(arr1, arr2) {
    // let arr3 = arr1.concat(arr2).sort((a, b) => a - b)  
    // return arr3.filter((item, index) => arr3.indexOf(item) === index);
    
    // Refactor 1
    // return Array.from(new Set(arr1.concat(arr2).sort((a, b) => (a - b))))
    
    // Refactor 2
    return arr1
        .filter((item) => !arr2.includes(item))
        .concat(arr2)
        .sort((a,b) => a - b)
}

console.log(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8]);
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10]);
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12]);