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
    alert('You must enter a dogs name!');
    dogName = prompt("What is your dogs name?");
};
//get current time
var curTime = Number(prompt("What is the current time?"));
//if statemtent to see if prompt is blank
if(curTime == ''){
    alert('you must enter a Time');
    curTime = Number(prompt("What is the current time?"));
}
//Get the time interval for potty training
var pottyTime = Number(prompt("How often do you want to take out "+dogName+'?'));
//if blank statement
if(pottyTime == ''){
    alert("You didn't put a time that you want to take out "+dogName+", This is required");
    pottyTime = Number(prompt("How often do you want to take out "+dogName+'?'));
}

// if potty time is greater then 20 min give time tell next potty.
if(pottyTime >= 20){
    //add times to get new time for potty.
    var timeToPotty = curTime + pottyTime;
    //log results
    console.log(dogName+" needs to go potty at "+timeToPotty+" hundred hours!");
    alert(dogName+" needs to go potty at "+timeToPotty+" hundred hours!");
}else if(pottyTime <= 19){
    console.log(pottyTime+' is not enough time for your dog to even want to go potty. Relax and give '+dogName+' at least 20min!');
};