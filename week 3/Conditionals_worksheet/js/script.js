/*
Jason Woods
2014 04 13
WPF 201404 S01
Conditionals Worksheet
*/// JavaScript
/*Example:

Problem: If the temperature is less than 75 degrees we will go to the beach, otherwise we will go to the movies. 
Answer: 
//Hot Enough?
//Is it hot enough to go to the beach?
var temp = 80;
//if the temperature is less than 75..

if(temp < 75){
     //if its less than 75
     console.log(“We will go to the beach!”);
}else{
     //if it’s greater or equal to 75
     console.log(“We will go to the movies.”);
}*/

/*
*************Problem # 1****************************<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>><<<<<<<<<<>>>>>>***********************


Celsius to Fahrenheit converter

Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.
    
Given:
Degrees (in F or C)
Unit (a string holding an “F” or a “C”)
Result:
“The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”
Data Sets to Test: (Note that data sets are not the only numbers that should work with your code.)
32F is 0C
100C is 212F
90F is 32.22C
*/
var Problem1 = function(){
    alert('Problem # 1');
    console.log('Promblem #1');
    // Ask for users input for current temp just value
    var degrees = prompt('What is the Current temp number?');
    // Ask for the unit of measure
    var Unit = prompt('Is that F? or C?');
    //If the Unit is F do F to C conversion then log to console the values
    if(Unit == 'F'){
       var degF = degrees;
       var degC = 5/9 * (degF - 32);
       console.log('The temperature is '+degF+'F degrees Fahrenheit converted to Celsius it is = '+degC+' C');
    //If the Unit is C do C to F conversion then log to console the values.
    }else{
       var degC = degrees;
       var degF = degC * 9 / 5 + 32;
       console.log('The temperature is '+degC+' C converted to Fahrenheit it is = '+degF+'F');
    }
    // Problem 1 successful !!!
};
/*
**********Problem #2*******************************<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>***********************
Check the Login

Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
Given:
Username entered by user
Password entered by user
Correct username
Correct password
Result To Print Out:
“Welcome, (place their username here)!”  - if the username and password is correct
“User not found. Try again.” -if the username does not match
“Password does not match our records.”  -if the username matches but the password does not
*/
var Problem2 = function(){
    alert('Problem # 2');
    console.log('Promblem #2');
    // have user create a Username and Password.
    var cUserName = prompt('Please Create a Username :)');
    var cPassword = prompt("Please Create a Password ");
    //Ask user to reenter the Username for varification
    var userNameLogin = prompt('Please enter your Username');
    //If statement to check username
    if(userNameLogin == cUserName){
        var passLogin = prompt('Please enter your Password');
        if(passLogin == cPassword){
            alert('Welcome '+userNameLogin);
            console.log('Welcome '+userNameLogin);
        }else{
            alert("YPassword does not match our records. "+userNameLogin);
            console.log("Password does not match our records for user "+userNameLogin);

        }
    }else{
        alert('User not found. Try again.');
        var userNameLogin = prompt('Please enter your Username');
        if(userNameLogin == cUserName){
            var passLogin = prompt('Please enter your Password');
            if(passLogin == cPassword){
                alert('Welcome '+userNameLogin);
                console.log('Welcome '+userNameLogin);
            }else{
                alert("YPassword does not match our records. "+userNameLogin);
                console.log("Password does not match our records for user "+userNameLogin);

            };

        };
    };
};


/*
*************Problem #3******************************<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Movie Ticket Price

The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price. 
Determine which of the two prices the customer is eligible for.
Given:
Time of Movie (Assume whole numbers here)
Age of the customer
 Result To Print Out:
“The ticket price is X”
*/
var Promblem3 = function(){
    alert('Problem # 3');
    // get movie time
    var movieTime = prompt("What time is the movie? example ( 5pm = 1700)");
    //get age
    var age = prompt("how old are you?");
    //Check to see what time they want to go to movie if between 3pm and 5pm it is $7.00
    if(movieTime <= 1700 && movieTime >= 1500){
        alert("The movie ticket will cost $7.00");
        console.log('The movie ticket will cost $7.00');
    //Check the age to see if they get the discount price.
    }else if(age > 55 || age <= 10){
        alert('The movie ticket will cost $7.00');
        console.log('The movie ticket will cost $7.00');
    }else{
        //they don't get discount to run the price.
        console.log('The movie will cost $12.00');
        alert('The movie will cost $12.00');
    }

};
