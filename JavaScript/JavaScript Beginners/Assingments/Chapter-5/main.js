//Q1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 3;
var num2 = 2;

var sum = num1 + num2;
document.write('Sum of '+ num1 +' and '+ num2 +' is '+ sum);

//Q2 Repeat task1 for subtraction, multiplication, division & modulus.

var sub = num1 - num2;
document.write('<br> Subtraction of '+ num1 +' and '+ num2 +' is '+ sub);

var mul = num1 * num2;
document.write('<br> Multiplication of '+ num1 +' and '+ num2 +' is '+ mul);

var div = num1 / num2;
document.write('<br> Division of '+ num1 +' and '+ num2 +' is '+ div);

var mod = num1 % num2;
document.write('<br> Modulus of '+ num1 +' and '+ num2 +' is '+ mod);

//Q3 Do the following using JS Mathematic Expressions
// a. Declare a variable.

var num;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write('<br><br> Value after variable declaration is: ', num);

// c. Initialize the variable with some number.

num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.

document.write('<br> Initial value: ', num);

// e. Increment the variable.

num++

// f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write('<br> Value after increment is: ', num);

// g. Add 7 to the variable.

num += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write('<br> Value after addition is: ', num);

// i. Decrement the variable.

--num;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write('<br> Value after decrement is: ', num);

// k. Show the remainder after dividing the variable’s value by 3.

var remainder = num % 3;

// l. Output : “The remainder is : 0”.

document.write('<br> The remainder is : ', remainder);

//Q4 Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate
// the cost of buying 5 tickets to a movie. Example output:

var ticketPrice = 600;
var ticketCount = 5;

document.write('<br><br> Total cost to buy ' + ticketCount + ' tickets to a movie is ' + ticketPrice * ticketCount);

//Q5 Write a script to display multiplication table of any number in your browser. E.g

var table = 5;

document.write('<h1>Table of '+ table + '</h1>');
document.write(table + ' X '+ 1 + ' = '+ table * 1);
document.write('<br>' + table + ' X '+ 2 + ' = '+ table * 2);
document.write('<br>' + table + ' X '+ 3 + ' = '+ table * 3);
document.write('<br>' + table + ' X '+ 4 + ' = '+ table * 4);
document.write('<br>' + table + ' X '+ 5 + ' = '+ table * 5);
document.write('<br>' + table + ' X '+ 6 + ' = '+ table * 6);
document.write('<br>' + table + ' X '+ 7 + ' = '+ table * 7);
document.write('<br>' + table + ' X '+ 8 + ' = '+ table * 8);
document.write('<br>' + table + ' X '+ 9 + ' = '+ table * 9);
document.write('<br>' + table + ' X '+ 10 + ' = '+ table * 10);

//Q6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.

var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

// Formula
// F = (C * 9/5) + 32

var fahrenheit = (celsiusTemperature * 9/5) + 32;

document.write("<br><br> " + celsiusTemperature + "C is " + fahrenheit + "F");

// c. Now store a Fahrenheit temperature into a variable.

var fahrenheitTemperature = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.

// Formula
// C = (F - 32) X 5/9

var celsius = (fahrenheitTemperature - 32) * 5/9;

document.write("<br> " + celsiusTemperature + "F is " + celsius + "C");

//Q7 Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables

// a. Price of item 1

var item1 = 600;

// b. Price of item 2

var item2 = 700;

// c. Ordered quantity of item 1

var item1_quantity = 3;

// d. Ordered Quantity of item 2

var item2_quantity = 4;

// e. Shipping charges

var shippingCharges = 100;

// Compute the total cost & show the receipt in your browser.

document.write('<br><br> Price of item 1 is ', item1);
document.write('<br> Quantity of item 1 is ', item1_quantity);
document.write('<br> Price of item 2 is ', item2);
document.write('<br> Quantity of item 2 is ', item2_quantity);
document.write('<br> Shipping Charges ', shippingCharges);

document.write('<br><br> Total cost of your order is ', (item1 * item1_quantity) + (item2 * item2_quantity) + shippingCharges);

//Q8 Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show 
// the result in your browser

var totalMarks = 800;
var obtainedMarks = 690;

document.write('<br><br> <h1><b>Marks Sheet</b></h1>');

document.write('Total Marks: ', totalMarks);
document.write('<br>Obtained Marks: ', obtainedMarks);

// Formula      (Marks Obtained / Total Marks) * 100
var percentage = (obtainedMarks / totalMarks) * 100;

document.write('<br><br> Percentage ', percentage);

//Q9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to
// Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write('<br><br> <h1><b>Currency in PKR</b></h1>');

var usDollarInPkr = 104.80;
var saudiRiyalInPkr = 28;

document.write('Total currency in PKR ', (10 * usDollarInPkr) + (25 * saudiRiyalInPkr));

//Q10 Write a program to initialize a variable with some number and do arithmetic in following sequence:

var someNumber = 8;

// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var calculation = ((someNumber + 5) * 10) / 2;

document.write('<br><br> Result: ', calculation);

//Q11 The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN years old”.

var currentYear = 2024;
var birthYear = 2000;

document.write('<br><br> <h1><b>Age Calculator</b></h1>');

document.write('Current Year: ', currentYear);
document.write('<br> Birth Year: ', birthYear);
document.write('<br> Your Age is: ', currentYear - birthYear);

//Q12 The Geometizer: Calculate properties of a circle.

// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and

// output “The circumference is NN”.

// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius,
// and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var circumference = 2 * 3.142 * 20;

document.write('<br><br> <h1><b>The Geometizer</b></h1>');

document.write('Radius of a circle: ', radius);
document.write('<br>The circumference is : ', circumference);
document.write('<br>The area is: ', 3.142 * radius * radius);

//Q13 The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.

// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var favSnack = "Kurleez";
var myAge = 20;
var maxAge = 60;
var estAmount = 3;

document.write('<br><br> <h1><b>The Lifetime Supply Calculator</b></h1>');

document.write('Favourite Snack: ', favSnack);
document.write('<br>Current Age: ', myAge);
document.write('<br>Estimated Maximum Age: ', maxAge);
document.write('<br>Amount of snacks per day: ', estAmount);

var totalSnacksNeeded = (maxAge - myAge) * 365 * estAmount;

document.write('<br><br> You will need ' + totalSnacksNeeded + ' ' + favSnack + ' to last you until the ripe old age of ' + maxAge);