// https://www.codewars.com/kata/587f1e1f39d444cee6000ad4
// 7 Kyu - Thinkful - Object Drills: Vectors

// Create a Vector class with x and a y attributes that represent component 
// magnitudes in the x and y directions. Your vectors should handle vector 
// additon with an .add() method that takes a second vector as an argument and 
// returns a new vector equal to the sum of the vector you call .add() on and the 
// vector you pass in.

// Adding vectors when you have their components is easy: just add the two x 
// components together and the two y components together to get the x and y 
// components for the vector sum.

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }
}

let a = new Vector(3, 4)
console.log(a.x, 3)
console.log(a.y, 4)

let b = new Vector(1, 2)

let c = a.add(b)
console.log(c.x, 4)
console.log(c.y, 6)