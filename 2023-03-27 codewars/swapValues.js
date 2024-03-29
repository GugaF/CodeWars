// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
// 8th Kyu - Swap Values

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?


function swapValues(array) {
    let temp = array[0]
    array[0] = array[1]
    array[1] = temp
    return array

    // OR just reverse the array, assuming it stays a two element array.
    // return array.reverse()
  }


  console.log(swapValues([0, 2]), [2, 0])
  console.log(swapValues([1, 1]), [1, 1])
  console.log(swapValues([3, "apple"]), ["apple", 3])