// Q1 Write a program that displays current date and time in your browser.

document.write('<h1>Question 1</h1>');
var dateObj = new Date();

document.write(`Current Date and Time is: ${dateObj}`);

// Q2 Write a program that alerts the current month in words. For example December.

document.write('<h1>Question 2</h1>');

var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

var getMonth = dateObj.getMonth();
document.write(`Current Month: ${months[getMonth]}`);

// Q3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then
// alert will show Sun.

document.write('<h1>Question 3</h1>');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var getDays = dateObj.getDay();
document.write(`Current Day: ${days[getDays].slice(0,3)}`);

// Q4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

document.write('<h1>Question 4</h1>');

if(days[getDays] === days[0] || days[getDays] === days[6]){
    document.write(`It’s Fun day because its ${days[getDays]}.`);
}
else{
    document.write(`It’s not a Fun day because its ${days[getDays]}`);
}

// Q5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of
// the month else shows “Last days of the month”.

document.write('<h1>Question 5</h1>');

if (dateObj.getDate() < 16) {
    document.write(`First fifteen days of the month ${days[getDays]}`);   
}
else{
    document.write('Last days of the month')
}

// Q6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable
// that hasn't been declared beforehand. Use any variable you like to represent the Date object.

document.write('<h1>Question 6</h1>');

document.write(`Current Date: ${dateObj} <br>`);
document.write(`Elappsed milliseconds since January 1, 1970: ${dateObj.getTime()} <br>`);
document.write(`Elappsed minutes since January 1, 1970: ${dateObj.getTime() / (1000 * 60)}`);

// Q7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

document.write('<h1>Question 7</h1>');

if (dateObj.getHours() < 12) {
    document.write('Its AM');    
}
else {
    document.write('Its PM');    
}

// Q8,  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to
// variable named laterDate.

document.write('<h1>Question 8</h1>');

var laterDateObj = new Date(2020,11,31);

document.write(`Later Date: ${laterDateObj}`);

// Q9 Create a date object of the starting date of this Ramadan and alert the number of days past since 1st
// Ramadan? Note: 1st Ramadan was on June 18, 2015

document.write('<h1>Question 9</h1>');

var ramadanDateObj = new Date(2015, 5, 18);
var timeDifference = dateObj - ramadanDateObj;
var dayPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write(`${dayPassed} days have passed since 1st Ramadan 2015`);

// Q10 Write a program that displays in your browser the seconds that elapsed between the reference date and the
// beginning of 2015.

var refDateObj = new Date(2015, 0, 1);

document.write('<h1>Question 10</h1>');
var refTimeDifference = dateObj - refDateObj;
var seconeEllapsed = Math.floor(timeDifference/1000);

document.write(`On refrence date: ${refDateObj} <br>`);
document.write(`${seconeEllapsed} seconds had passed since beginning of 2015`);

// Q11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead
// and finally display the date object in your browser.

document.write('<h1>Question 11</h1>');

var currentDate = new Date();
document.write(`Current Date: ${currentDate} <br>`);

var currentHours = currentDate.getHours();
currentDate.setHours(currentHours - 1);

document.write(`Current Date: ${currentDate} <br>`);

// Q12 Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

document.write('<h1>Question 12</h1>');

document.write(`Current Date: ${currentDate} <br>`);

var currentYear = currentDate.getFullYear();
currentDate.setFullYear(currentYear - 100);

document.write(`100 year back, it was: ${currentDate} <br>`);

// Q13 Write a program to ask the user about his age. Calculate and show his birth year in your browser.

document.write('<h1>Question 13</h1>');

var userAge = +prompt("Enter your age");

document.write(`Current Age: ${userAge} <br>`);
document.write(`Your Birth year is: ${dateObj.getFullYear() - userAge} <br>`);

// Q14 Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

document.write('<h1>Question 13</h1>');

document.write('<h1>K-Electric Bill</h1>');

var customerName = 'Muhammad Shabbir';
var month = 'February';
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;
var netAmount = numberOfUnits * chargesPerUnit;

document.write('Customer Name:<b>', customerName , '</b><br>');
document.write('Month:<b>', month , '</b><br>');
document.write('Number of units:<b>', numberOfUnits , '</b><br>');
document.write('Charges per unit:<b>', chargesPerUnit , '</b><br> <br>');

document.write(`Net Amount Payable (within Due Date) = <b> ${netAmount} </b> <br>`);
document.write(`Late Payment Surcharge = <b> ${latePaymentSurcharge} </b> <br>`);
document.write(`Net Amount Payable (after Due Date) = <b> ${netAmount + latePaymentSurcharge} </b>`);