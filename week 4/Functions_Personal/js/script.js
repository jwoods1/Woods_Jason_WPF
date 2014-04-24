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
 A normal "named" function
 An expression with two arithmetic operators
 A function with three parameters.
 At least one logical operator

 */
//Function to figure out how much time i have for homework a week.
function homeWorkTime(time,assignments,work){
    // take the time in a day that you don't sleep and subtract work to get time left.
    var timeLeft = time - work;
    // see if it is enough time.
    if(timeLeft >= 1 ){
        //see how much time is needed.
        var timeNeeded = assignments * 1.5;
        // see what time is left over after homework.
        var totalT = timeLeft - timeNeeded;
        var timeLeftOver = "there is "+totalT+" hrs left over after homework is complete";
        return timeLeftOver;
    }else{
        var notEnoughTime = "There is not enought time it will require "+timeLeft+" more hours in the day.";
        return timeLeft;
    }
}
var homework = homeWorkTime(18,3,10);
console.log(homework);