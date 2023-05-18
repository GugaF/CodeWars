// https://www.codewars.com/kata/5547929140907378f9000039
// 8th Kyu - Vowel Remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

function shortcut (string) {
    return string.split('')                 
                //  .filter(x => !(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'))
                 .filter(char => !'aeiou'.includes(char))
                 .join(''); 
}

console.log('hello', 'hll');
console.log('how are you today?', 'hw r y tdy?');
console.log('complain', 'cmpln');
console.log('never', 'nvr');