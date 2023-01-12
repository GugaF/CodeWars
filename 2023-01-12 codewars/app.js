// https://www.codewars.com/kata/5715eaedb436cf5606000381
// 8th Kyu - Sum of Positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// initial attempt
// function positiveSum(arr) {
//     let sum = 0
//     newArr = arr.map(x => x > 0 ? sum += x : sum += 0)
//     return sum
//   }


function positiveSum(arr) {
    return arr.reduce((accummulator, currentElement) => accummulator + (currentElement > 0 ? currentElement : 0), 0)
}
// .reduce arrray method is the test here, it generates an accumulative amount that is initialised by ,0 


console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);