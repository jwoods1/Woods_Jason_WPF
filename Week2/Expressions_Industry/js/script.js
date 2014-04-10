/*
 * Woods Jason
 * April 9 2014
 * WPF 201404 01
 * Expressions Industry
 */
// JavaScript

/*
     Calculate the size I should make an object to be a percentage on the screen size.
    */

//var for screen size
var screenSize = Number(prompt('What size of screen?'));
console.log("The screenSize is"+screenSize);
alert(The screenSize is"+screenSize);
//Get image size
var imgPx = Number(prompt('What is the image pixel size?'));
//get the size they want the image
var percent = Number(prompt("What percent of the screen do you want the image?"));
//Transform var percent
var percentTran = percent*.01;
var newImageSize = screenSize*percentTran;
console.log("Change the "+screenSize+'px image to '+newImageSize+"px.");


