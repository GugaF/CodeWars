// https://www.codewars.com/kata/53d628de83db278fb1000710
// 7 Kyu - Re-open class

// Ruby and Javascript let you re-open classes so you can add new functionalities 
// to existing classes and objects.

// To demonstrate this, you'll have to add a new method (called my_new_method in Ruby 
// or myNewMethod in JS / Coffeescript) into the String class that simply calls the upcase 
// method (toUpperCase() in JS / Coffeescript), so that:
// returns "ABC"

String.prototype.myNewMethod = function() {
    return String.toUpperCase();
}

console.log("abc".myNewMethod(), "ABC", '"abc".myNewMethod() should return "ABC"');