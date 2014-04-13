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
alert('Problem # 1');
var degrees = prompt('What is the Current temp number?');
var Unit = prompt('Is that F? or C?');

if(Unit == 'F'){
   var degF = degrees;
   var degC = 5/9 * (degF - 32);
   console.log('The temperature is '+degF+'F degrees Fahrenheit converted to Celsius it is = '+degC+' C');
}else{
   var degC = degrees;
   var degF = degC * 9 / 5 + 32;
   console.log('The temperature is '+degC+' C converted to Fahrenheit it is = '+degF+'F');
}


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
alert('Problem # 2');
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
alert('Problem # 3');

