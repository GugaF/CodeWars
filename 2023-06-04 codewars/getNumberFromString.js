// https://www.codewars.com/kata/57a37f3cbb99449513000cd8
// 8 Kyu - Get number from string

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56


function getNumberFromString(s) {
    return parseInt(s.split("").filter(char => '0123456789'.includes(char)).join(""));
}


console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);