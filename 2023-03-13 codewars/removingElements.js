// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// 8th Kyu - Removonig Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

// P: an array of any type of elements
// R: a new array containing only elemnets whose index is odd numbered from the source array
// E: see below
// P: initiate resulting array
    // run a loop through the length of the initial array
    // check if the index is odd numbered: push the element to the result array
    // return the result array

function removeEveryOther(arr) {
    let result = []

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i])
    }

    return result
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);