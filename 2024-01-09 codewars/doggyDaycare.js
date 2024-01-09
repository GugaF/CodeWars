// https://www.codewars.com/kata/56951add53eccacf44000030
// 7 Kyu - Doggy Daycare

// The owner of the doggy daycare wants to know whether she can accept new 
// dogs into her daycare and needs to check whether they have been wormed and 
// vaccinated in order to accept them either by themselves or as well as other dogs.

// There is a Dog prototype that needs to be extended with the method checkDog. Dog 
// currently has the following properties (attributes):

//     name
//     age
//     breed
//     vaccinated
//     wormed

// You'll need to return the dog's name each time as well as:
// " can be accepted", 
// " can only be accepted by itself" and 
// " can not be accepted".

//     If the dog is vaccinated and wormed, the dog can be accepted.
//     If the dog is only vaccinated or only wormed, the dog can only be accepted by itself.
//     If the dog has not be vaccianted or wormed, the dog can not be accepted.

// var spot = new Dog("Spot", 5, "Labrador", true, false);
// spot.checkDog(); // Should return: "Spot can only be accepted by itself".


var spot = new Dog("Spot", 5, "Labrador", true, false);
var riley = new Dog("Riley", 3, "GoldenDoodle", true, true);
var clive = new Dog("Clive", 8, "German Shepard", false, false);

console.log(spot.checkDog(), "Spot can only be accepted by itself");
console.log(riley.checkDog(), "Riley can be accepted");
console.log(clive.checkDog(), "Clive can not be accepted");

Dog.prototype.checkDog = function() {
    if (vaccinated && wormed) { return `${this.name} can be accepted`}
}