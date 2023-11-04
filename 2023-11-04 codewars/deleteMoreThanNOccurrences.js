// https://www.codewars.com/kata/554ca54ffa7d91b236000023
// 6 Kyu - Delete occurrences of an element if it occurs more than n times

// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the places 
// they've been, and now they want to show Charlie their entire collection. However, 
// Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of 
// seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most 
// N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help 
// them to remove numbers such that their list contains each number only up to N times, 
// without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N 
// times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
// drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, 
// which leads to [1,2,3,1,2,3].

// With list [20,37,20,21] and number 1, the result would be [20,37,21].


function deleteNth(arr,n){
  
    // initiate a dictionary that takes the current element as key and a count of its occurence as value
    // using a map to create new arr
    // check if current element exists in dictionary's values
      // if so
            // check that its value is less than n:
              // if so, ++ its vlaue
              // else drop the value
      // else create its entry in the dictionary
    // return modified array
    
    // FIRST ATTEMPT. IT WORKS
    // let cache = {}
    // let newArray = []
    
    // for (let i = 0; i < arr.length; i++) {
    //   let key = arr[i]    
      
    //   if (cache.hasOwnProperty(key)) {
    //     if (cache[key] < n) {
    //       cache[key] += 1 
    //       newArray.push(key)
    //     }
    //   } else {
    //     cache[key] = 1
    //     newArray.push(key)
    //   }
    // }
  
    // return newArray

    cache = {};
    return arr.filter(integer => (cache[integer] = (cache[integer] || 0) + 1 ) <= n);
  
  // cache[integer] || 0 ---> checks if the integer exists in the cache
  // (cache[integer] || 0) + 1 ) ---> if it exists, its current value is returned, else 0. 1 gets added to the value. 
  // cache[integer] = (cache[integer] || 0) + 1 ) ---> the new value is assigned to the current value
  // cache[integer] = (cache[integer] || 0) + 1 ) <= n ---> the comparison is now applied. if the new value in cache[integer] is above n, it won't be returned to the filtered array.
}

console.log(deleteNth([20,37,20,21], 1), [20,37,21]);
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);