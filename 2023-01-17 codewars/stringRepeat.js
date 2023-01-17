// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
// 8th Kyu - String Repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let answer = '';
    for(i = 0; i < n; i++){
        answer += s;
    }
    return answer;

}

// shorthand  answer uses .repeat() method:
// return s.repeat(n) 

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");