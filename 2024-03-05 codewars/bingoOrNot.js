// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
// 7 Kyu - Bingo ( Or Not )

// For this game of BINGO, you will receive a single array of 10 numbers from 
// 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). 
// Write a function where you will win the game if your numbers can spell "BINGO". They do 
// not need to be in the right order in the input array. Otherwise you will lose. Your 
// outputs should be "WIN" or "LOSE" respectively.


function bingo(numbers) {
    // let bingo = [2, 7, 9, 14, 15]
    // let overlap = bingo.filter(letter => numbers.includes(letter)) 
    // return bingo.length == overlap.length ? "WIN" : "LOSE"
  
    return [2, 7, 9, 14, 15].every(el => numbers.includes(el)) ? 'WIN' : 'LOSE'
}

console.log( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
console.log( bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");