// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
// 8th Kyu - A Wolf In Sheep's Clothing

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! 
// You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// P: array of sheep with one wolf in position, there will always be one wolf in the array
// R: message depenedent on the wolf's poristion in array:
    // if wolf is last in array => "Pls go away and stop eating my sheep"
    // else => "Oi! Sheep number N! You are about to be eaten by a wolf!"
        // where N is the position just in front of the wolf
// E: see above and below
// P: get the index of the wolf inthe array
    // if index is the length of the array - 1 return "pls go away..."
    // else retrun "Oi sheep number (wolf index"

    // array.length = 3
    // wolf index + 1 = 2
    // 3 - 2 = hey sheep 1

    // "sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"
    // array.length = 7
    // wolf index + 1 = 2
    // 7 - 2 = hey sheep 5

    // arra.length = 8
    // wolf index = 5 + 1 = 6
    // hey sheep 8 - 6 

function warnTheSheep(queue) {
    // First Try
    // let wolfPosition = queue.indexOf("wolf")
    // return wolfPosition === queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${(queue.length - (wolfPosition + 1))}! You are about to be eaten by a wolf!`

    // Refactor
    let position = queue.reverse().indexOf("wolf")
    return position === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!")
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!")
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!")
console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!")
console.log(warnTheSheep(["wolf"]), "Pls go away and stop eating my sheep")
console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep")