// https://www.codewars.com/kata/582e0e592029ea10530009ce
// 8th Kyu - Duck Duck Goose

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen 
// Player(name is a property of Player objects, e.g Player.name)

// Example:
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// P: array of player objects, and an index
// R: player.name property of the player that falls on the index provided. 
// E: see above
// P: divide the number of elments in array by the index
    // EG: 5 - 1 = 4 % 4 = 0
    // EG: 4 - 1 = 3 % 4 = 3
    // EG: 2 - 1 = 1 % 4 = 1
    // return the player at index[0].name
    // return the player at index[3].name
    // return the player at index[1].name


function duckDuckGoose(players, goose) {
    return players[ (goose - 1) % players.length ].name;
}


class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 1),  "a");
console.log(duckDuckGoose(players, 3),  "c");
console.log(duckDuckGoose(players, 10), "z");
console.log(duckDuckGoose(players, 20), "z");
console.log(duckDuckGoose(players, 30), "z");
console.log(duckDuckGoose(players, 18), "g");
console.log(duckDuckGoose(players, 28), "g");
console.log(duckDuckGoose(players, 12), "b");
console.log(duckDuckGoose(players, 2),  "b");
console.log(duckDuckGoose(players, 7),  "f");