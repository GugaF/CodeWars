// https://www.codewars.com/kata/545af3d185166a3dec001190
// 8th Kyu Enumerable Magic #20 - Cascading Subsets

// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]
// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// P: integer array and an integer
// R: cascading elements of the original array where each array's length is the number of the integer passed into the function
// E: see below


function eachCons(array, n) {
    let resArray = []

    for (let i = 0; i < array.length; i++) {
        // at each i create an internal array that is sliced from i to i + n
        resArray.push(array.slice(i, i + n));
    }

    // returns only arrays whose length === n
    return resArray.filter(e => e.length === n)
}

const lst = [3, 5, 8, 13];
console.log(eachCons(lst, 1), [[3], [5], [8], [13]]);
console.log(eachCons(lst, 2), [[3,5], [5,8], [8,13]]);
console.log(eachCons(lst, 3), [[3, 5, 8], [5, 8, 13]]);