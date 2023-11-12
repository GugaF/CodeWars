// https://www.codewars.com/kata/5208f99aee097e6552000148
// 6 Kyu - Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) { 
        el = ' ' + el
        }
        return el
    })

    return string.join('')
}
  
console.log(solution('camelCasing'), 'camel Casing')
console.log(solution('camelCasingTest'), 'camel Casing Test')
console.log(solution('camelCasingTestTestTestTEST'), 'camel Casing Test')