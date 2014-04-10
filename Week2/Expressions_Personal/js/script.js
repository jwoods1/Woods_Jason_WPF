/*
* Woods Jason
* April 9 2014
* WPF 201404 01
* Expressions Personal
*/

// JavaScript
/*
 For this Expression I want to find out how much I will make per year at a value per hour.
 Then I will Take the annual pay and see how much I will make every month.
 Then to every week. Then to every day.

*/
//Ask users for the hourly pay
var wagePerHour = Number(prompt('How much to you make per Hour?'));
//Ask the user how many hours they work
var hours = Number(prompt('How many hours do you work?'));
//Ask user how many weeks they work a year
var weeks = Number(prompt('How many weeks do you work a year?'));
//Calculate annual salary by multiplying them all together.
var annualSalary = wagePerHour*hours*weeks;
//alert and log the results.
alert('You will make $'+ annualSalary+' a year!');
console.log('You will make '+ annualSalary+' a year!');

//Ask user if they work overtime
var overtimeHours = Number(prompt('How many hours of over time?'));
//overtime is time and 1/2
var overtime = 1.5;
//calculate hours worked overtime with new overtime wage
var overTimeWage = wagePerHour*overtime;
console.log('You make $'+overTimeWage+' per hour when working overtime.');
alert('You make $'+overTimeWage+' per hour when working overtime.');
//calculate the amount earned for overtime
var totalOvertime = overTimeWage*overtimeHours;
//calculate the total of overtime + annual Salary.
var total = totalOvertime + annualSalary;
  // log and alert the results.
console.log('The total wages earned a year with overtime is $'+total);
alert('The total wages earned a year with overtime is $'+total);




