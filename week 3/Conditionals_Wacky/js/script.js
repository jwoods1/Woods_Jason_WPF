/*
 Jason Woods
 20140413
 WPF 201404 S01
 Conditional_Wacky
 */

/*
 A ternary
 An else if
 A logical operator
 At least one relational operator other than ==
    */

// Dog the dog have to go potty?
var dogName = prompt("What is your dogs name?");
//if statement to see if the prompt is blank
if(dogName == ''){
    Alert('You must enter a dogs name!');
    dogName = prompt("What is your dogs name?");
};
//get current time
var curTime = Number(prompt("What is the current time?"));
//if statemtent to see if prompt is blank
if(curTime == ''){
    Alert('you must enter a Time');
    curTime = Number(prompt("What is the current time?"));
}
//Get the time interval for potty training
var pottyTime = Number(prompt("How often do you want to take out "+dogName+'?'));
