// https://www.codewars.com/kata/54edbc7200b811e956000556
// 8th Kyu - Counting Sheep

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let accumulator = 0;
    arrayOfSheep.forEach(element => {
        if (element) {
            accumulator++;
        }
    });
    return accumulator;

    // could also use the array.filter() method
    // returns a filtered array of only true values here. we are interested in its length
    // return arrayOfSheep.filter(x => x).length
  }

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
console.log(countSheeps(array1), 17, "There are 17 sheeps in total");