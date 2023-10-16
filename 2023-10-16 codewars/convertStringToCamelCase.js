// https://www.codewars.com/kata/517abf86da9663f1d2000003
// 6 Kyu - Convert string to camel case

// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing. The first word within the output 
// should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    return str
        .split(/[-_]/)
        .map((word, index) => (index === 0) ? word : word[0].toUpperCase() + word.slice(1))
        .join('')
}

console.log(toCamelCase(''), '')
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
console.log(toCamelCase("A-B-C"), "ABC")
console.log(toCamelCase("another_one"), "anotherOne")
