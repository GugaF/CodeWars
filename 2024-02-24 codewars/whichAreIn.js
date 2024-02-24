// https://www.codewars.com/kata/550554fd08b86f84fe000a58

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order 
// of the strings of a1 which are substrings of strings of a2.

// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []


function inArray(array1,array2) {
    // let answer = []
    // for(let i = 0; i < array1.length; i++) {
    //   for (let j = 0; j < array2.length; j++) {
    //     if(array2[j].includes(array1[i])) { answer.push(array1[i]) }
    //   }
    // }
    // answer.sort()
    // return [...new Set(answer)]
    
    return array1
      .filter(a1 => array2.find(a2 => a2.includes(a1)))
      .sort()
}

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
let a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])
  
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
  
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])