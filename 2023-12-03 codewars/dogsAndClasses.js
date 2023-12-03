// https://www.codewars.com/kata/56ff9b53140fcca90b000530
// 8 Kyu - SpeedCode #3 : Fun with ES6 Classes #5 - Dogs and Classes

// Preloaded for you is a class Dog:
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

// You are then given a working class Labrador as your initial code.
class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}

