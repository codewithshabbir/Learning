// Q1, Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var userInput = prompt("Enter your city name");

if (userInput.toLowerCase() == "karachi") {
  console.log("Welcome to city of lights");
}

// Q2, Write a program to take “gender” as input from user. If the user is male, give the message:
// Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var genInput = prompt("Enter your gender");

if (genInput.toLowerCase() == "male") {
  console.log("Good Morning Sir");
} else if (genInput.toLowerCase() == "female") {
  console.log("Good Morning Mam");
} else {
  console.log("Get Lost...");
}

// Q3, Write a program to take input color of road traffic signal from the user & show the message according
//  to this table:

var signalColorInput = prompt("Enter a road trafic signal color name");

if (signalColorInput.toLowerCase() == "red") {
  console.log("Must Stop");
} else if (signalColorInput.toLowerCase() == "yellow") {
  console.log("Ready to move");
} else if (signalColorInput.toLowerCase() == "green") {
  console.log("Move now");
}

// Q4, Write a program to take input remaining fuel in car (inlitres) from user. If the current fuel is less
// than 0.25litres, show the message “Please refill the fuel in your car”

var remainingFuel = Number(
  prompt("Enter a remaining fuel in car \nHint: (inlitres)")
);

if (remainingFuel < 0.25) {
  console.log("Please refill the fuel in your car");
} else {
  console.log("your fuel is good");
}

// Q5, Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// Answer: alert message displayed

// b.
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

// Answer: alert message not displayed

// c.
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");   // Answer: alert message not displayed
}
if (c === 13){
    alert("condition 2 is true");   // Answer: alert message displayed
}
if (++c < 14){
    alert("condition 3 is true");   // Answer: alert message not displayed
}
if(c === 14){
    alert("condition 4 is true");   // Answer: alert message displayed
}

// Answer: Condition 2 and 4 only displayed

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// Answer: alert message displayed

// e.
if (true){
    alert("True");      //Answer: alert message displayed
}
if (false){
    alert("False");     //Answer: alert message not displayed
}

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}

// Answer: alert message displayed

// Q6,  Write a program to take input the marks obtained in three subjects & total marks. Compute & show
// the resulting percentage on your page. Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:

var obtMarks = Number(prompt("Enter a Obtained Marks in 3 Subjects"));
var totalMarks = Number(prompt("Enter a Total Marks in 3 Subjects"));

var percentage = (obtMarks / totalMarks) * 100;

document.write('<h1>Marksheet</h1>');
document.write('<br><br> Total Marks: ', totalMarks);
document.write('<br> Obtained Marks: ', obtMarks);
document.write('<br> Percentage: ', percentage);

if (percentage >= 80) {
    document.write('<br><br> Grade: A-one');
    document.write('<br><br> Remarks: Excellent');
}
else if (percentage >= 70) {
    document.write('<br><br> Grade: A');
    document.write('<br><br> Remarks: Good');
}
else if (percentage >= 60) {
    document.write('<br><br> Grade: B');
    document.write('<br><br> Remarks: You need to improve');
}
else if (percentage < 60) {
    document.write('<br><br> Grade: Fail');
    document.write('<br><br> Remarks: Sorry');
}

// Q7, Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var randNum = 5;

var guessNumber = Number(prompt("Guess a Number"));

if(guessNumber == randNum){
    console.log("Bingo! Correct answer");
}
else {
    console.log('Close enough to the correct answer');    
}

// Q8, Write a program to check whether the given number is divisible by 3. Show the message to the 
// user if the number is divisible by 3.

var divByThree = Number(prompt('Enter a Number'));

console.log('A number is divided by three', );
