// https://www.codewars.com/kata/55ad04714f0b468e8200001c
// Description:

// Write a function get_char() / getChar() which takes a number 
// and returns the corresponding ASCII char for that value.

// Example:         get_char(65)
// Should return:   'A'

// For ASCII table, you can refer to http://www.asciitable.com/

function getChar(n) {
    return charCodeat(n)
}

console.log(getChar(55),'7')
console.log(getChar(56),'8')
console.log(getChar(57),'9')
console.log(getChar(58),':')
console.log(getChar(59),';')
console.log(getChar(60),'<')
console.log(getChar(61),'=')
console.log(getChar(62),'>')
console.log(getChar(63),'?')
console.log(getChar(64),'@')
console.log(getChar(65),'A')