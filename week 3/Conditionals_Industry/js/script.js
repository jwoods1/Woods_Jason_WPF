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
if(troubleshoot == 'yes'){
    //Get the ohms of a wire.
    var ohms = Number(prompt("What is the current omhs of wire 10?"));
// if ohms is blank
    if(ohms == ''){
         oops = Number(prompt("You must enter a reading of omhs"));
        ohms = oops;
    };

}else if(troubleshoot == 'no'){
    alert("Well I'm glade everything works!");
    console.log("Well I'm glade everything works!");
}
