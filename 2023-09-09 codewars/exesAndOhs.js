// https://www.codewars.com/kata/55908aad6620c066bc00002a
// 7 Kyu - Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// P: string of any characters
// R: whether the string provided has an equal number of x's and o's in it. include upper and lower case letters in the count.
// E: see below
// P: split the string into an array
//         reduce the array into o's
//         reduce the array into x's
//         compare the length of the two arrays


function XO(str) {
    str = str.toLowerCase().split('')    
    return str.filter(e => e === 'x').length == str.filter(e => e === 'o').length
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);