//Q1 Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 18;
alert(`I am ${age} years old`);

//Q2 Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
// Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var tracking = 20;
alert('You have visited this site '+ tracking +' times');

//Q3 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 2000;

document.write('My birth year is ' + birthYear);
document.write('<br> Data type of my declared variable is ' + typeof(birthYear)); //typeof method variable ki data type check krta hai

//Q4 A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName, productTitle, quantity;

visitorName = "Muhammad Shabbir";
productTitle = "T-Shirts";
quantity = 4;

document.write(`<br><br>${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store`);