// https://www.codewars.com/kata/570597e258b58f6edc00230d
// Remove First and Last Character Part Two

// This is a spin off of my first kata.
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value
// (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

// P: string of comma separated characters
// R: the string minus first and last characters in sequence, null if string contains 2 or fewer values
// E: see below
// P: take string and split it into array
    // : check length of array, return null if less than two
    // : remove first and last elements of the array
    // : join array back into a string
    // : return string

const array = arr => {
    let split = arr.split(",")  
    return split.length > 2 ? split.slice(1, -1).join(" ") : null
}

console.log(array('1,2,3'), '2');
console.log(array('1,2,3,4'), '2 3');
console.log(array('1,2,3,4,5'), '2 3 4');
console.log(array(''), null);
console.log(array('1'), null);
console.log(array('1,2'), null);