// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// 8 Kyu - Reversed Sequence

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
  // let reverseArray = []
  // while (n !== 0) {
  //   reverseArray.push(n)
  //   n--
  // }  
  // return reverseArray
  
  return Array(n).fill().map(e => n--);
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);