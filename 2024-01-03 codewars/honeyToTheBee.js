// https://www.codewars.com/kata/52437f32636a67edb00002f7
// 7 Kyu - Honey to the Bee

// Find out why the amount of honey in the hive is not increasing.

function Bee(capacity, hive) {
    this.capacity = capacity;
    this.hive = hive;
}
  
function Hive() {
    this.pollen = 100;
}

//TODO: The amount of honey in the hive is not increasing.
Hive.prototype.addPollen = function(pollen) {
    this.pollen += pollen;
}

Hive.prototype.getPollen = function() {
    return this.pollen;
}

Bee.prototype.unloadPollen = function() {
    this.hive.addPollen(this.capacity);
}


let hive = new Hive();
let bee = new Bee(11, hive);

console.log(bee.capacity, 11);
console.log(hive.pollen, 100);

bee.unloadPollen(hive);

console.log(hive.pollen, 111);