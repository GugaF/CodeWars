// https://www.codewars.com/kata/52efefcbcdf57161d4000091
// 6 Kyu - Count characters in your string

// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// If the string is empty, the result should be an empty object literal, {}.


function count(string) {
    let count = {}
    
    // for (let i = 0; i < string.length; i++) {
    //   let char = string[i]
    //   object[char] = object[char] + 1 || 1
    // }
  
    string.split('').forEach(function(c) {
      count[c] ? count[c]++ : count[c] = 1;
    });
  
   return count
}

console.log(count(''), {});
console.log(count('a'), {'a': 1});
console.log(count('ab'), {'a': 1, 'b': 1});
console.log(count('aba'), {'a': 2, 'b': 1});
console.log(count('ABC'), {'A': 1, 'B': 1, 'C': 1});