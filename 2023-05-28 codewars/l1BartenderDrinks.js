// https://www.codewars.com/kata/568dc014440f03b13900001d
// 8 Kyu - L1: Bartender, Drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input 	            Output
// "Jabroni" 	        "Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	    "Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	    "Your tax dollars"
// "Rapper" 	        "Cristal"
// anything else 	    "Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


function getDrinkByProfession(profession) {
    return profession.toLowerCase() === "jabroni" ? "Patron Tequila" :
           profession.toLowerCase() === "school counselor" ? "Anything with Alcohol" :
           profession.toLowerCase() === "programmer" ? "Hipster Craft Beer" :
           profession.toLowerCase() === "bike gang member" ? "Moonshine" :
           profession.toLowerCase() === "politician" ? "Your tax dollars" :
           profession.toLowerCase() === "rapper" ? "Cristal" :
           "Beer"
}

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

