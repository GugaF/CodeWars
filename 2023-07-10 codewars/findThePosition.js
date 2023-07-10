// https://www.codewars.com/kata/5808e2006b65bff35500008f
// 8 Kyu - Find the Position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt() - 96}`
}

console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");
