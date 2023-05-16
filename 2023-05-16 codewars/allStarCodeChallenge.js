// https://www.codewars.com/kata/5865918c6b569962950002a1
// 8th kyu - All Star Code Challenge #18

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// strCount("Hello", 'o'); // returns 1
// strCount("Hello", 'l'); // returns 2
// strCount("", 'z'); // returns 0

// Notes
//     The first argument can be an empty string
//     In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, char) {
    return str.split(char).length - 1;

    // let count = 0
    // for(let i = 0; i < str.length; i++) {
    //     str[i] === char ? count++ : count += 0;
    // }
    // return count
}

console.log(strCount("Hello", 'o'), 1); // returns 1
console.log(strCount("Hello", 'l'), 2); // returns 2
console.log(strCount("", 'z'), 3); // returns 0
