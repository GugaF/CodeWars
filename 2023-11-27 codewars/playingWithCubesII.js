// https://www.codewars.com/kata/55c0ac142326fdf18d0000af
// 8 Kyu - Playing with Cubes II

// You already implemented a Cube class, but now we need your help again! 
// I'm talking about constructors. We don't have one. Let's code two: One 
// taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative 
// values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.


class Cube {
    constructor(side) {
      this.setSide(side);
    }
    
    getSide() {
      return this.side; 
    }
    setSide(side = 0) {
      this.side = Math.abs(side);
    }
}
  
let cube = new Cube(12);
console.log(cube.getSide(), 12);
cube.setSide(42);
console.log(cube.getSide(), 42);