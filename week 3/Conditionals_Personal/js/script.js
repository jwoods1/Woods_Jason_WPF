/*
 Jason Woods
 20140413
 WPF 201404 S01
 Conditional_Personal
 */
/*
 A ternary
 An else if
 A logical operator
 At least one relational operator other than ==

 //Collect info from prompt1 and place it into a variable
 //If the variable is an empty string
 //Put another prompt saying "You forgot to input something!"
 //Collect that info from that prompt and place it into a variable
 Otherwise
 //Continue on with the rest of the code...

 */

//Having the kids getting ready for bed!
//promt for the required bed time
var bedTime =  Number(prompt('What time is bed time? 24hr '));
//check for current time
var currentTime = Number(prompt('What is the current time?'));
// Tell if it is bed time or not by subtracting the times.
(currentTime - bedTime >= 0) ? console.log('It is bed time!'): console.log('Not bed time yet!');
// get how many minutes tell or past bed time
var timeTell = bedTime - currentTime;
//if else to see the time tell or past
if(timeTell >= 1){
    console.log('We have '+timeTell+'min tell bed time!')
    // If the time is less then or = 0 tell how much we went over.
}else if(timeTell <= 0){
    // if the time is = to 0 then we are right on time.
    if(timeTell == 0){
        console.log('You are right on time for going to bed!');
        //if not then how much did we go over.
    } else{
        console.log('We have went past bed time by '+timeTell+'mins! Get to bed!');
    }
};

