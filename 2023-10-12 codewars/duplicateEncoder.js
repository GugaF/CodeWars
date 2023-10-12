// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// 6 Kyu - Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each 
// character in the new string is "(" if that character appears only once in the 
// original string, or ")" if that character appears more than once in the original 
// string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    // generate an array of the input
    let array = word.toLowerCase().split('')
    
    // loop through the array, accumulating counts of each character into a dictionary
    let dict = {}
    for( i in array ) {
      dict[ array[i] ] == undefined ? dict[ array[i] ] = 1 : dict[ array[i] ] += 1
    }
    
    // generate a string of each input letter where letters appearing once are represented by '(' otherwise ')'
    return array.map(char => dict[char] > 1 ? ')' : '(').join('')
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())");
console.log(duplicateEncode("(( @"),"))((");