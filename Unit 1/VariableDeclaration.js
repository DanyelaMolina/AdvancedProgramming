
var myVar = 100; 
let myLet = 15;
const myConst = 3.1416;   

console.log(`myVar: ${myVar}, myLet: ${myLet}, myConst: ${myConst}, varHoisted: ${hoistedVariable}`);


var hoistedVariable = 25; 



if (typeof myVar !== "undefined") { 
    console.log(myVar);
    var myVar = 50;
    console.log(myVar);
};