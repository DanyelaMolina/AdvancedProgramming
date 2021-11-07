var myInt = 24;
var myfloat = 3.1416;
var myString = "Danyela";
var mystringNumber = "24.5";
var myNull = null;

console.log(typeof myfloat);
console.log(typeof String(myfloat)); 
console.log(typeof myfloat);        

myString = Boolean(myString);
console.log(myString);

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(myNull));
console.log(Boolean(false));
console.log(Boolean(NaN)); 
                          
console.log(Boolean("Danyela"));
console.log(Boolean(5));
console.log(Boolean({}));
console.log(Boolean( [] ));
console.log(Boolean({key:"5"}));

console.log(typeof myNull);
console.log(isNaN( Number("5x")));

console.log(Number.parseFloat(myfloat));
console.log(Number.parseInt(myfloat));
console.log(Number.parseInt(mystringNumber));
console.log(Number.parseFloat(mystringNumber));

var result = "Hello " + "World";
var resultNumbersStringAdd  = 2 + " Hello"; 
var resultNumbersStringRemainder = 2 - "22";
console.log(result);
console.log(resultNumbersStringAdd);
console.log(resultNumbersStringRemainder);