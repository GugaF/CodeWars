// https://www.codewars.com/kata/55f74a7433feba03680000c5
// 7 Kyu - Create the base - Dungeon crawler #1

// Welcome to the Dungeon crawler series! You and your friends had a great idea to 
// create this awesome text based dungeon crawler for a school project. Since you're 
// a programmer pro now you have been given the task of creating the logic and graphics 
// (since this is just a text based game). First off you have to create the base of the 
// game, Introduction, initilizing variables all the important basic stuff!

// Your task is to create all the base classes we will be using the four classes ```Game```,
//  ```Player```, ```Monster``` and ```Map```.

// 1. Game
// Parameters
//     name - The name parameter will be used to pass into the ```Player``` class which will 
//             then be stored in the property name ```player```.
//     level - The level parameter will be used to determin the difficulty of the game you must 
//             store this in a property called ```level```. This should have a default value of 0. 
//             WARNING: You may also get given a string of a number if so parse it, but if you are 
//             given anything other than a valid int then default to 0

// Properties
//     player - This should be a new Player class with the name used as the parameter.
//     level - This should store the level passed into the constructor.
//     floors - This should be an empty array for now.


// 2. Player
// Parameters
//     name - The name parameter will be used to pass into the ```Player``` class which will then be 
//             stored in the property name ```player```. This should have a default value of 'Player' 
//             if a name is null, empty or not a string.

// Properties
//     name - The name property must be initilized with the name parameter but if the name is null or 
//             empty then you must use 'Player'
//     health - The health property must have a default value of ```100.00```
//     position - The position must have a default value of an object which looks similar to this: ```{x:0, y:0}```
//     damage - The damage must have a default value of ```10.00```
//     luck - The luck must have a default value of ```1.00```


// 3. Monster
// Parameters
//     level - The level parameter will be used to determin the difficulty of the game you must store this in a 
//             property called ```level```.

// Properties
//     level - This should store the level passed into the constructor.


// 4. Map
// Parameters
//     level - The level parameter will be used to determin the difficulty of the game you must store this in a 
//             property called ```level```.

// Properties
//     level - This should store the level passed into the constructor.


class Game {
    constructor(name, level = 0) {
        this.player = new Player(name);
        this.level = Number(level) || 0;
        this.floors = [];
    }  
}

class Player {
    constructor(name = "Player") {
        this.name = typeof(name) !== 'string' || name == '' ? 'Player' : name;
        this.health = 100;
        this.position = { x : 0, y : 0};
        this.damage = 10;
        this.luck = 1.00;
    }
}

class Monster {
    constructor(level) {
        this.level = level
    }
}

class Map {
    constructor(level) {
        this.level = level
    }
}


var game = new Game('Leeroy', 0)
console.log(game.level, 0);
console.log(game.floors, []);
console.log(game.player.name, 'Leeroy');
console.log(game.player.health, 100.00);
console.log(game.player.position, {x:0,y:0});
console.log(game.player.damage, 10.00);
console.log(game.player.luck, 1.00);
let mon = new Monster(0);
console.log(mon.level, 0);
let map = new Map(0);
console.log(map.level, 0);

var play1 = new Player()
play1.name
var play2 = new Player('Jeff')
play2.name