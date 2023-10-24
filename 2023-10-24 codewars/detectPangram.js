// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
// 6 Kyu - Detect Pangram

// A pangram is a sentence that contains every single letter of the 
// alphabet at least once. For example, the sentence "The quick brown 
// fox jumps over the lazy dog" is a pangram, because it uses the letters 
// A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True 
// if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    // First Try
    // let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // string = [...new Set(string.toLowerCase().split(''))]
  
    // for (let i = 0; i < alphabet.length; i++) {
    //     if (!string.includes(alphabet[i]))
    //         return false
    // }
    // return true

    string = [...new Set(string.toLowerCase().split(''))]
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(letter => string.includes(letter))

}


console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false)