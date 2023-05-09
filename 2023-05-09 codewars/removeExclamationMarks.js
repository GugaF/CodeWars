// https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// 8th Kyu - Remove Exclamation Marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}

assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");