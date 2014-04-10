/*
 * Woods Jason
 * April 9 2014
 * WPF 201404 01
 * Expressions Wacky
 */
// JavaScript
alert('*****ThIs Is ThE WaCkY! Js FiLe *******');
//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#3D8077";

/*
* How many things are in an array.
*/
var wackyPromt = prompt('Add A wacky String!:D');
var Array = ['OnE WaCkY ThIng!!:>)','TwO WaXy Things!:D',wackyPromt];
//Tells the length of the array.
alert('The Array has '+Array.length+' Objects in it!:D');
console.log('The Array has '+Array.length+' Objects in it!:D');

//list array object wacky!
alert('Objects are wacky! Here is the list of array objects: '+Array[0]+', '+Array[1]+', '+Array[2]+'.');
console.log('Objects are wacky! Here is the list of array objects: '+Array[0]+', '+Array[1]+', '+Array[2]+'.');

//Add Some things together!
//have user enter a number
var enteredNum = Number(prompt('Enter a number Any Number!'));
// add number to array
var numberS = [100, 300, 600, enteredNum];
// add the numbers.
var addNums = numberS[1] + numberS[0] + numberS[2] + numberS[3];
console.log('The numbers added togehter are:'+addNums);
alert('The numbers added togehter are:'+addNums);

//divide the added nubmers by the length of the array.
var divided = addNums / numberS.length;
console.log('The added Numbers divided by the lenght of the array is '+divided);
alert('The added Numbers divided by the lenght of the array is '+divided);