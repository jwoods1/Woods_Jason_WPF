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
var numSlicesPerPizza = 8;
//Poeple at the party
var numPeople = 10;
//Number of pizzas ordered
var numPizzas = 2;
//slices per person equation
var numSlicesPerPerson = numPizzas*numSlicesPerPizza/numPeople;
//log to the console
console.log('Each person ate '+ numSlicesPerPerson + ' slices of pizza at the party.');

//Slice of Pie part 2
/*
At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after 
the slices have been divided up evenly among the guests. Assume guests get whole slices, how many 
whole slices will Sparky feast on?
Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and 
Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate 
results no matter what numbers I put in for those given variables.)
*/

//Sparky gets equation
var sparkySlices = numPizzas*numSlicesPerPizza%numPeople;

//log to the console
console.log('Sparky got ' + sparkySlices + ' slices of pizza.');

// Average shopping bill
/*
You are budgeting your money for the year and must calculate your 
average weekly grocery shopping spending over the past five weeks.
Store the past five grocery totals as a list in an array. Create an 
expression that will use the items in the array to calculate the 
average amount spent on groceries.
Please note: there should only be one given for this problem set, 
the array holding the five weekly totals.  You should be able to access t
he array using the array access notation discussed earlier in the course.
*/
var shoppingTripArr = [100,50,80,150,200];

var total = ;

var average = ;

console.log('You have spent a total of $'+total+' on groceries over  5 weeks. That is an average of '+average+' per week');

