// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
// 8 Kyu - Draw Stairs
// Description:

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

function drawStairs(n) {
    let string = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            // check if it is the last column
            j === i ? string += "I" : string += " "
        }
      // check if it is the last row
      i < n ? string += "\n" : string += ""
    }
  return string
}

console.log(drawStairs(1), "I");
console.log(drawStairs(3), "I\n I\n  I");
console.log(drawStairs(5), "I\n I\n  I\n   I\n    I");