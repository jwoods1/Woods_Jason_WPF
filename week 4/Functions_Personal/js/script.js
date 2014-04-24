/*
 Jason Woods
 20140422
 WPF 201404 S01
 Functions Personal
 */


/*
 Each of the following requirements must exist in at least one of the 3 subprojects:
 A ternary
 An else if
 An anonymous function
1 A normal "named" function
1 An expression with two arithmetic operators
1 A function with three parameters.
1 At least one logical operator

 */
//normal named function
//Function to figure out how much time i have for homework a week.  function with three parameters.
function homeWorkTime(time,assignments,work){
    // expression with 2 operators
    // take the time in a day that you don't sleep and subtract work to get time left.
    var timeLeft = time - work;
    //see how much time is needed.
    var timeNeeded = assignments * 1.5;
    // see if it is enough time.
    if(timeLeft > 1 && timeNeeded <=timeLeft){
        // see what time is left over after homework.
        var totalT = timeLeft - timeNeeded;
        var timeLeftOver = "there is "+totalT+" hrs left over after homework is complete";
        return timeLeftOver;
    }else{
        var notEnoughTime = "There is not enought time it will require "+timeLeft+" more hours in the day.";
        return notEnoughTime;
    }
}

var homework = prompt("How much home work do you have?");
var timeInDay = prompt("How much time do you have in the day that you don't sleep?");
var workDay = prompt("How long is your work day?");

console.log(homeWorkTime(timeInDay,homework,workDay));