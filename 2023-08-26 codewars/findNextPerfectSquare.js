// https://www.codewars.com/kata/56269eb78ad2e4ced1000013
// 7 Kyu - Find the next perfect square!

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after 
// the one passed as a parameter. Recall that an integral perfect square is an integer n such 
// that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume 
// the parameter is non-negative.

// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


// Brute Force
// function findNextSquare(sq) {
//     if (Math.sqrt(sq) % 1 === 0) {
//       return getNextPerfectSquare(sq);
//     } else {
//       return -1;
//     }
// }

// function getNextPerfectSquare(sq) {  
//   let isSquare = false
//   sq++
//   while(isSquare == false) {    
//     if (Math.sqrt(sq) % 1 === 0) {
//       isSquare = true;
//       return sq;
//     } else { 
//       sq++ 
//     }    
//   }
// }

function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

console.log(findNextSquare(121), 144, "Wrong output for 121");
console.log(findNextSquare(625), 676, "Wrong output for 625");
console.log(findNextSquare(319225), 320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
console.log(findNextSquare(155), -1, "Wrong output for 155");
console.log(findNextSquare(342786627), -1, "Wrong output for 342786627");