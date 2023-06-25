// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f
// 8 Kyu - String Templates - Bug Fixing #5

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, 
// Help Timmy with his string template so it works as he expects!


function buildString(...template){
    return `I like ${template.join(', ')}!`;
}

console.log(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
console.log(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
console.log(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');