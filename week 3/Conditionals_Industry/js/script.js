/*
    Jason Woods
    20140413
    WPF 201404 S01
    Conditional_Industry
*/


/*
 A ternary
 An else if
 A logical operator
 At least one relational operator other than ==
 */

//Electrical wire troubleshooting.
var troubleshoot = prompt("Do you need to troubleshoot a wire? yes or no");
if(troubleshoot == ''){
  var oops = prompt("You have to answer yes or no if you need to troubleshoot");
  troubleshoot = oops;
};
//If yes run the Troubleshooter
if(troubleshoot == 'yes'){
    //Get the ohms of a wire.
    var ohms = Number(prompt("What is the current ohms of wire 10?"));
// if ohms is blank
    if(ohms == ''){
         oops = Number(prompt("You must enter a reading of ohms"));
        ohms = oops;
    };
    //get wire length for troubleshooting
    var wireLength = Number(prompt("What is the length of the wire you are checking?"));
    // if length is blank ask again
    if(wireLength == ''){
        var oopsL = Number(prompt('You must enter a length'));
        wireLength = oopsL;
    };
    //get the length ohms to compare to reading
     var wireLenthOhms = wireLength * .01;
     if(ohms > wireLenthOhms && ohms != 1000){
        console.log('With a ohms reading of '+ohms+'ohms and a flat ohms rate of '+wireLenthOhms+'ohms you seem to have an open!');
     }else if (ohms <= wireLengthOhms || ohms == 0 ){

     }



}else if(troubleshoot == 'no'){
    alert("Well I'm glade everything works!");
    console.log("Well I'm glade everything works!");
}
