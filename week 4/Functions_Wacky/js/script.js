/*
    Jason Woods
    20140422
    WPF 201404 S01
    Functions Wacky
*/


/*
 Each of the following requirements must exist in at least one of the 3 sub projects:
 A ternary
 1 An else if
 An anonymous function
 A normal "named" function
 An expression with two arithmetic operators
 A function with three parameters.
 At least one logical operator

 */

//Function to calculate the time it takes to come up with ideas for functions.
// create anonymous function.
var functionIdeas = function(n){
     // take the n = number of functions
    //create a var to store value in.
    var Stress;
    if(n >= 1 && n <= 5){
        //tell the stress level by # of function to create.
        Stress = "You will have a slightly stressed time with creating your "+n+" functions";
        // return value created
        return Stress;
    }else if(n > 5){
        // stress increase
        Stress = " Oh my "+n+" functions! The stress is all most unbearable :(";
        // return value created
        return Stress;
    }else{
        Stress = "Man you have "+n+" functions to create! You have all the time in the world :) !";
        // return value created
        return Stress;
    }
}

var numberOf = prompt("How many functions do you have to create today?");

console.log(functionIdeas(numberOf));