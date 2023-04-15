// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// 7th Kyu: Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    // First Attempt
    // let strArray = str.split('');
    // let count = 0;
    // for( let i = 0; i < strArray.length; i++ ) {
    //   if (strArray[i] === 'a' || strArray[i] ==='e' || strArray[i] === 'i' || strArray[i] === 'o' || strArray[i] === 'u' )
    //     count++;
    //   }
    // return count;
    
    // Refactored
    return str.split('').filter(c => 'aeiou'.includes(c)).length;
  }



console.log(getCount("abracadabra"), 5) ;
console.log(getCount("helllo world"), 3) ;