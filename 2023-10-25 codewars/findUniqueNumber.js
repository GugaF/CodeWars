// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// 6 Kyu - Find the unique number

// There is an array with some numbers. All numbers are equal except for one. 
// Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    arr.sort((a,b) => a - b)
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}


assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);