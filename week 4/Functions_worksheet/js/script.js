/*
    Woods, Jason
    Week 4 Functional Worksheet
    21 April 2014
    WPF 0414 01
*/

/*    Example:

 Problem: Calculate the area of a rectangle given the width and height of the rectangle.
 //Calculate the Area of a Rectangle
 var width = 5;
 var height = 6;
 var area = calculateArea(width, height);
 console.log(“The Area of the Rectangle is “ + area);
 private function calculateArea(w, h ):Number
 {
 return w *h;
 }
 */

// Problem #1   Circumference

// Create function with parameters for equation.
var circumference = function(r){
    // circumference equation
    var round = 2 * 3.14 * r;
    // return result
    return round;
};
// get radius
var radius = Number(prompt("What is the radius?"));
// Put the function inside of a var to hold the value.
var cir = circumference(radius);
console.log("The circumference of the circle is "+cir);


/* Problem # 2 Stung!

 It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
 Given:
 Victim’s weight (in pounds)
 Parameter(s) for function:
 Victim’s weight (in pounds)
 Return:
 Number of Bee stings
 Result to print to the console:
 “It takes X bee stings to kill this animal.*/

// c