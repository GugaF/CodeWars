// https://www.codewars.com/kata/57cff961eca260b71900008f
// 8th Kyu - Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// P: array of numbers
// R: the original array but if the numbers corresponds to the character code for a vowel, return the represented vowel instead
// E: see below
// P: loop through array and change the number to a letter if it corresponds to a vowel
    // return the altered array
    // character codes(a-97 , e-101 , i-105 , o-111 , u-117)

function isVow(a){
    return a.map( x => vowels[x] ? vowels[x] : x );
}
    
const vowels = {
    97 : 'a',
    101 : 'e',
    105 : 'i',
    111 : 'o',
    117 : 'u'
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);