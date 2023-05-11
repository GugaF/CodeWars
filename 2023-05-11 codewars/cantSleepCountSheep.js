// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// 8th Kyu - If you can't sleep, just count sheep!!

// If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    let message = ""
    for(let i = num; i > 0; i--) { message = `${i} sheep...${message}` }
    return message;
}

  console.log(countSheep(0), "");
  console.log(countSheep(1), "1 sheep...");
  console.log(countSheep(2), "1 sheep...2 sheep...");
  console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");