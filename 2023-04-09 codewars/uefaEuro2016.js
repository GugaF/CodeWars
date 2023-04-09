// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
// 8th Kyu - UEFA EURO 2016

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


function uefaEuro2016(teams, scores){
    let winner = scores[0] > scores[1] ? `${teams[0]} won!`
               : scores[0] < scores[1] ? `${teams[1]} won!` 
               : `teams played draw.`;
        
    return `At match ${teams[0]} - ${teams[1]}, ${winner}`
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");