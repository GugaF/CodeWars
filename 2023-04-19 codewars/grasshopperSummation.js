// https://www.codewars.com/kata/55d24f55d7dd296eb9000030
// 8th Kyu - Grasshopper Summation 
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function summation(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        answer += i;        
    }
    return answer;
}


console.log(summation(1),  1);
console.log(summation(2),  3);
console.log(summation(8), 36);