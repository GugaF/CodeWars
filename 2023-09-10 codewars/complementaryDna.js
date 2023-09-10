// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
// 7 Kyu - Complementary DNA

// Description:

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// 1st attempt
// function DNAStrand(dna){
//     return dna.split('').map(e => e === 'A' ? e = 'T' : 
//                              e === 'T' ? e = 'A' : 
//                              e === 'G' ? e = 'C' : 
//                              e === 'C' ? e = 'G' : 
//                              e).join('')
// }

// Refactor
function DNAStrand(dna){
    return dna
      .split('')
      .map(function(symbol) { return pairs[symbol] })
      .join('')
}
  
const pairs = {
    'A' : 'T',
    'T' : 'A',
    'C' : 'G',
    'G' : 'C'
}

console.log(DNAStrand("AAAA"),"TTTT")
console.log(DNAStrand("ATTGC"),"TAACG")
console.log(DNAStrand("GTAT"),"CATA")
