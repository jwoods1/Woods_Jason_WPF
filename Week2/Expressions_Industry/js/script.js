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
console.log("The screenSize is " +screenSize+'px.');
alert("The screenSize is " +screenSize+'px');
//Get image size
var imgPx = Number(prompt('What is the image pixel size?'));
//get the size they want the image
var percent = Number(prompt("What percent of the screen do you want the image?"));
//Transform var percent
var percentTran = percent*.01;
//multiply the sceenSize by the percent.
var newImageSize = screenSize*percentTran;
alert("Change the "+screenSize+'px image to '+newImageSize+"px.");
console.log("Change the "+screenSize+'px image to '+newImageSize+"px.");
//Scale the image to this size
var screenArr= [400,700,960];
//log the different screen sizes
alert("Some of the more common screen sizes are: "+screenArr[0]+'px, '+screenArr[1]+'px, '+screenArr[2]+'px.');
console.log("Some of the more common screen sizes are: "+screenArr[0]+'px, '+screenArr[1]+'px, '+screenArr[2]+'px.');
//what size of image for each screen.
var smallScreen = screenArr[0]*percentTran;
var midScreen = screenArr[1]*percentTran;
var largeScreen = screenArr[2]*percentTran;
//log the different sizes.
console.log("You should make images that are "+smallScreen+'px, '+midScreen+'px and '+largeScreen+'px.');
alert('You should make images that are '+smallScreen+'px, '+midScreen+'px and '+largeScreen+'px.');
//How much screen size is left after image is place.
var leftOverSmal = screenArr[0] - smallScreen;
console.log('On the Small screen you have '+leftOverSmal+'px left Over to use!');
alert('On the Small screen you have '+leftOverSmal+'px left Over to use!')