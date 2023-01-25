// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
// 8th Kyu - Count of Positives, Sum of Negatives

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || input.length === 0) return [];
    
    return input.reduce((arr, n) => {
        if(n > 0) arr[0]++;
        if(n < 0) arr[1] += n;
        return arr;
    }, [0, 0]);
}


// Test 1
let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let actual = countPositivesSumNegatives(testData);
let expected = [8, -50];    
console.log(actual, expected);

// Test 2
testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
actual = countPositivesSumNegatives(testData);
expected = [10, -65];
console.log(actual, expected);

// Test 3
testData = [];
actual = countPositivesSumNegatives(testData);
expected = [];
console.log(actual, expected);
