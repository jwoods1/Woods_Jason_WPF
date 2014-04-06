/*
  Woods Jason
  April 5 2014
  Expressions Worksheet
*/
/* Examples
//Calculate the area of a rectangle given the width and height of the rectangle.
// rectangle value
var recWidth = 15;
var recHeight = 20;

// Calculate Area of a rectangle 
var recArea = recWidth * recHeight;

//logging the result to console
console.log('The Area of the Rectangle is: ' + recArea);

// Calculate the circumference of the circle
//constent 
var Pi = 3.14159265;
// circle values
var radius = 10;
// equation for circumference
var circum = 2*Pi*radius;

console.log('The circumference of the circle is: '+circum);
*/

//Dog Years
//constent for dog years
var dogYears = 7;
//how many years old the dog is in human years.
var humanYears = 3;
//human to dog year equation
var sparkyAge = dogYears * humanYears;
//log to the console. 
console.log('Sparky is ' + humanYears + ' years old which is '+ sparkyAge + ' in dog years.');

//Slice of Pie part 1
/*
A bunch of students are having a party and somebody ordered pizza. 
Create an expression that calculates how much pizza each partygoer will get at the party.  
(Assume all pizzas have the same number of slices and that the person dividing the pizza 
is really precise, so this can be a decimal, like 3.52 slices, etc.)
*/
//Pizza slices
var numSlicesPerPizza = 12;
//Poeple at the party
var numPeople = 4;
//Number of pizzas ordered
var numPizzas = 3;
//slices per person equation
var numSlicesPerPerson = numPizzas*numSlicesPerPizza/numPeople;
//log to the console
console.log('Each person ate '+ numSlicesPerPerson + ' slices of pizza at the party.');



