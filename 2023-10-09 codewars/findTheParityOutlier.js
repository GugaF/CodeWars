// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// 6 Kyu - Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very 
// large) containing integers. The array is either entirely comprised of odd integers 
// or entirely comprised of even integers except for a single integer N. Write a 
// method that takes the array as an argument and returns this "outlier" N.

// Examples:
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


function findOutlier(integers){
    let odd = 0, even = 0    
    for( let i = 0; i < 3; i++) {
      integers[i] % 2 === 0 ? even += 1 : odd += 1
    }
  
    return (odd > even) ? integers.filter( e => e % 2 === 0 )[0] : integers.filter( e => e % 2 !== 0 )[0]
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)