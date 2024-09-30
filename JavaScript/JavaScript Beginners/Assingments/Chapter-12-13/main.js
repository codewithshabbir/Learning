// Q1, Write a program that takes a character (number or string) in a variable & checks whether the given 
// input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var characterInput = prompt('Enter any character (number or string)');

var ascii = characterInput.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log('Character input is a number', characterInput);
}
else if(ascii >= 65 && ascii <= 90){
    console.log('Character input is an uppercase letter ', characterInput);
}
else if(ascii >= 97 && ascii <= 122){
    console.log('Character input is an lowercase letter ', characterInput);
}


// Q2 Write a JavaScript program that accept two integers and display the larger. Also show if the two 
// integers are equal.

var num1 = +prompt("Enter a first number");
var num2 = +prompt("Enter a second number");

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}
else if(num2 > num1){
    console.log(`${num2} is greater than ${num1}`);
}
else if(num1 == num2){
    console.log(`${num1} and ${num2} both are equall`);
}

// Q3, Write a program that takes input a number from user & state whether the number is positive,
// negative or zero.

var num3 = +prompt("Enter a first number");

if (num3 > 0) {
    console.log(`${num3} is positive number`);
}
else if (num3 < 0) {
    console.log(`${num3} is negative number`);
}
else if (num3 == 0) {
    console.log(`${num3} is equal to zero`);
}

// Q4, Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, 
// false otherwise

var checkVowels = prompt('Enter any character');

if(checkVowels.toLowerCase() == 'a' || checkVowels.toLowerCase() == 'e' || checkVowels.toLowerCase() == 'i' 
|| checkVowels.toLowerCase() == 'o' || checkVowels.toLowerCase() == 'u'){
    console.log(true);
}
else{
    console.log(false);
}

// Q5, Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered 
// matches the original password”. Show “Incorrect password” otherwise.

var userPassInput = prompt('Enter your password');
var correctPass = 'sheikh786';

if (!userPassInput) {
    console.log('Please enter your password');
}
else{
    if (userPassInput.toLowerCase() == correctPass.toLowerCase()) {
        console.log('Correct! The password you entered matches the original password');
    }
    else{
        console.log('Incorrect password');
    }
}

// Q6, This if/else statement does not work. Try to fix it: 
// var greeting; var hour = 13; if (hour < 18) 
// { greeting = "Good day"; else greeting = "Good evening"; }

var greeting;
var hour = 13;

if (hour < 18){ 
    greeting = "Good day";
    console.log(greeting);
}else {
    greeting = "Good evening";
    console.log(greeting);
}

// Q7, Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements

var time = +prompt("Enter time in 24-hour clock format (like: 1900 for 7pm):");

if (time >= Number("0000") && time < 1200) {
    console.log('Good Morning');
}
else if (time >= 1200 && time < 1700) {
    console.log('Good Afternoon');
}
else if (time >= 1700 && time < 2100) {
    console.log('Good Evening');
}
else if (time >= 2100 && time < 2359) {
    console.log('Good Night');
}
else {
    console.log('Invalid time!');
}