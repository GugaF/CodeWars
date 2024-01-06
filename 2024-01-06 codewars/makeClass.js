// https://www.codewars.com/kata/5d774cfde98179002a7cb3c8
// 7 Kyu - Make Class

// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }

// Give me the power to create a similar class like this:
// const Animal = makeClass("name","species","age","health","weight","color") 




function makeClass(...properties) {
    return class {
        constructor(...props) {
            properties.forEach((prop, index) => {
                this[prop] = props[index]
            })
        }
    }
}
  
  
function Animal(name,species,age,health,weight,color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.weight = weight;
    this.color = color;
}

const Animel = makeClass('name','species','age','health','weight','color')
  
  
const dog1 = new Animal('Bob','Dog','5','good','50lb','brown')
const dog2 = new Animel('Bob','Dog','5','good','50lb','brown')

console.log(Object.keys(dog1).join`,`,Object.keys(dog2).join`,`)
console.log(Object.values(dog1).join`,`,Object.values(dog2).join`,`)