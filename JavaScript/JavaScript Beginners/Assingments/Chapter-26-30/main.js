// Q1 Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write('<h1>Question 1</h1>');

var num = prompt('Enter a positive number:');

document.write(`number: ${num} <br>`);
document.write(`round off value: ${Math.round(num)} <br>`);
document.write(`floor value: ${Math.floor(num)} <br>`);
document.write(`ceil value: ${Math.ceil(num)}`);

// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write('<h1>Question 2</h1>');

// Q2 var num2 = prompt('Enter a negative number:');

document.write(`number: ${num2} <br>`);
document.write(`round off value: ${Math.round(num2)} <br>`);
document.write(`floor value: ${Math.floor(num2)} <br>`);
document.write(`ceil value: ${Math.ceil(num2)}`);

// Q3 Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

document.write('<h1>Question 3</h1>');

var absVal = -4;
document.write(`The absolute value of ${absVal} is ${Math.abs(absVal)}`);

// Q4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice
// in your browser.:

document.write('<h1>Question 4</h1>');

var randomDice = Math.ceil(Math.random() * 10);
document.write(`random dice value: ${randomDice}`);

// Q5 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of
// coin in your browser

document.write('<h1>Question 5</h1> <br>');

var toss = Math.ceil(Math.random()*2);

document.write(`${toss} <br>`);

if (toss === 2) {
    document.write(`random coin value: Heads`);
}else
{
    document.write(`random coin value: Tails`);
}

// Q6 Write a program that shows a random number between 1 and 100 in your browser.

document.write('<h1>Question 6</h1>');

var randomNum = Math.ceil(Math.random() * 100);
document.write(`random number between 1 and 100: ${randomNum}`);

// Q7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

document.write('<h1>Question 7</h1>');

var userWeight = prompt('Enter your weight in kilograms:');
var numWeight = '';

for (let i = 0; i < userWeight.length; i++) {
    if (userWeight[i] >= 0 && userWeight[i] <=9 || userWeight[i] === '.') {
        numWeight += userWeight[i];
    }
    
}

document.write(`The weight of user is ${numWeight} kilograms`);

// Q8 Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a
// number between 1 and 10. If the user input equals the secret number, congratulate the user.

document.write('<h1>Question 8</h1>');

var guessNum = +prompt('Enter a number between 1 and 10');
var secreatNum = Math.ceil(Math.random() * 10);

if (secreatNum === guessNum) {
    alert(`Congratulations you guess ${guessNum} right number.`);
    document.write(`Congratulations you guess ${guessNum} right number.`);
}else{
    alert(`you guess ${guessNum} wrong number.`);
    document.write(`you guess ${guessNum} wrong number.`);
}
