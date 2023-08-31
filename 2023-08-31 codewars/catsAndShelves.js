// https://www.codewars.com/kata/62c93765cef6f10030dfa92b
// 7th Kyu - Cats and Shelves

// Description

// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//                 ┌────────┐
//                 │-6------│
//                 └────────┘
// ┌────────┐       
// │------5-│        
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │     
// BANG!────┘  ├─────► OK! 
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘

// Input

// Start and finish shelf numbers (always positive integers, finish no smaller than start)
// Task

// Find the minimum number of jumps to go from start to finish
// Example

// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)


function solution(start, finish, difference = finish - start) {
    let numberJumps = 0
    while(finish - start > 0) {
        if (finish - start >  2) { start += 3 ; numberJumps += 1}
        else if (finish - start === 2) { start += 2 ; numberJumps += 2 }
        else if (finish - start === 1) { start += 1 ; numberJumps += 1 }
    }
    return numberJumps
    

    // REFACTOR 1  
    // let difference = finish - start;
    // let bigJumps = Math.floor(difference / 3)
    // let smallJumps = difference % 3
    // return bigJumps + smallJumps
    

    // REFACTOR 2
    return Math.floor(difference / 3) + (difference % 3)  
  }

console.log(solution(1, 5), 2);
console.log(solution(3, 3), 0);
console.log(solution(2, 4), 2);