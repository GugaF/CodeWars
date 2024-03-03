// https://www.codewars.com/kata/5b853229cfde412a470000d0
// 8 Kyu - Twice as Old

// Your function takes two arguments:
//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son 
// (or in how many years he will be twice as old). The answer is always 
// greater or equal to 0, no matter if it was in the past or it is in the future.


function twiceAsOld(dad, son) {
    // dadStart = dad - son
    // sonStart = 0
    // count = 0 - son
    // while(dadStart != sonStart * 2) {
    //   dadStart++
    //   sonStart++
    //   count++
    // }
    // return Math.abs(count)
    
    return Math.abs(dad - (2 * son))
}


console.log(twiceAsOld(36,7) , 22);
console.log(twiceAsOld(55,30) , 5);
console.log(twiceAsOld(42,21) , 0);
console.log(twiceAsOld(22,1) , 20);
console.log(twiceAsOld(29,0) , 29);