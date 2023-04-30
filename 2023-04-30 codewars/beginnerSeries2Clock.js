// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
// 8th Kyu - Beginner Series 2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000

// Input constraints:
//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59


function past(h, m, s){
    // 1 hour = 60 minutes = 60 × 60 seconds = 3600 seconds = 3600 × 1000 milliseconds = 3,600,000 ms.
    return (h * 3600 * 1000) + (m * 60 * 1000) + (s * 1000)
}

console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)