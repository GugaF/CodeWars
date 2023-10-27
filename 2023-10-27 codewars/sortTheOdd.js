// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// 6 Kyu - Sort the Odd

// You will be given an array of numbers. You have to sort the odd 
// numbers in ascending order while leaving the even numbers at their 
// original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
    //   let oddsIndices = []
    //   let oddsValues = []
      
    //   for(let i = 0; i < array.length;i++) {
    //     if (array[i] % 2 !== 0) { 
    //       oddsIndices.push(i)
    //       oddsValues.push(array[i])
    //     }
    //   }
    //   oddsValues.sort((a, b) => a - b)
    
    //   for(let j = 0; j < oddsIndices.length; j++) {
    //     array[oddsIndices[j]] = oddsValues[j]
    //   }
      
    //   return array
    
    let odd = array.filter(x => x % 2).sort((a, b) => a - b)
    return array.map(x => x % 2 === 0 ? x : odd.shift())
    // odd .shift removes the first element of odd and returns it into array at the current position!
}
  
  
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]),[]);