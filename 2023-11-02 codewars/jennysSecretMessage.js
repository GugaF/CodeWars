// https://www.codewars.com/kata/55225023e1be1ec8bc000390
// 8 Kyu - Jenny's Secret Message

// Jenny has written a function that returns a greeting for a user. However, 
// she's in love with Johnny, and would like to greet him slightly different. 
// She added a special case to her function, but she made a mistake.

// Can you help her?


function greet(name) {    
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");