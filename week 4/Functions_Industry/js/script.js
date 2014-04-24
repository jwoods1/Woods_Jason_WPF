/*
 Jason Woods
 20140422
 WPF 201404 S01
 Functions Industry
 */


/*
 Each of the following requirements must exist in at least one of the 3 subprojects:
 A ternary
 An else if
 An anonymous function
 A normal "named" function
 An expression with two arithmetic operators
 A function with three parameters.
 At least one logical operator

 */

// function to calculate time off earned at job.
//anonymous function
//tw = time worked, re = amount of time off is earned per pay period.
var leave = function(tw,re){
    // set vars to store values.
    var timeOff;
    var payPeriods = tw / 80;
    // if ternary to see if you worked for a payPeriod.
    (payPeriods >= 1) ? alert('You have worked '+payPeriods+' pay Periods:)') : payPeriods = 0;
    // calculate time Off.
    if(payPeriods != 0){
        timeOff = payPeriods * re;
        return timeOff;
    }else{
        timeOff = "you have not earned any time off :(";
        return timeOff;
    }
};

var timeWorked = Number(prompt("How much time have your worked?"));
var leaveEarn = Number(prompt("How much leave do you earn per pay period or 80 hrs?"));

console.log(leave(timeWorked,leaveEarn));