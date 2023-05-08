// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a
// 8th Kyu - Color Ghost

// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"


class Ghost{
    constructor(){
        this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)]
    }

    get color(){
        return this.color
    }
}

let ghost = new Ghost();
console.log(ghost.color);