// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
// 8th Kyu - CSV representation of array

// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:
// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.

// P: Array of arrays
// R: csv of the arrays in one string
// E: see above
// P: cycle through arrays
    // add current element to string nad a comma
    // if the 1st dimension is at the last element , remove the comma add the /n character
    // if last element in an array, add a new line character

    function toCsvText(array) {
        //   let csvText = ''
          
        //   for (let i = 0; i < array.length; i++) {
        //     for (let j= 0; j < array[i].length; j++) {
        //       csvText += array[i][j]
        //       csvText +=  j !== array[i].length - 1 ? ',' :
        //         i !== array.length - 1 ? '\n' : ''
        //     }
        //   }
        // return csvText
        return array.join('\n')
      }


console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

console.log(toCsvText([
    [ -25, 21, 2, -33, 48 ],
    [ 30,31,-32,33,-34 ]
] ), '-25,21,2,-33,48\n30,31,-32,33,-34');

console.log(toCsvText([
    [ 5,55,5,5,55 ],
    [ 6,6,66,23,24 ],
    [ 666,31,66,33,7 ]
] ), '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');