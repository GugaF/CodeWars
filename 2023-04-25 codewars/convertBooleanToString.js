// https://www.codewars.com/kata/551b4501ac0447318f0009cd
// 8th Kyu - Convert Boolean to String

// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.


function booleanToString(b){
    return b.toString();
}

console.log(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
console.log(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');