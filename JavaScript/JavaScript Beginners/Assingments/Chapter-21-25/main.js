// Q1 Write a program that takes two user inputs for first and last name using prompt and merges them in a new
// variable titled fullName. Greet the user using his full name.

document.write("<h1>Question 1</h1>");

var firstName = prompt('Enter your first name:');
var lastName = prompt('Enter your last name:');
var fullName = firstName + ' ' + lastName;

alert(`Welcome ${fullName} to our website`);
document.write(`Welcome ${fullName} to our website`);

// Q2 Write a program to take a user input about his favorite mobile phone model. Find and display the length of
// user input in your browser.

document.write("<h1>Question 2</h1>");

var mobileData = prompt('Enter your favorite mobile phone model:');

document.write(`My favourite phone is: ${mobileData} <br>`);
document.write(`Length of string: ${mobileData.length} <br><br>`);

// Q3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

document.write("<h1>Question 3</h1>");

var countryName = 'Pakistani';

document.write(`String: ${countryName} <br>`);
document.write(`Index of 'n': ${countryName.indexOf('n')} <br><br>`);

// Q4 Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

document.write("<h1>Question 4</h1>");

var firstProgram = 'Hello World';

document.write(`String: ${firstProgram} <br>`);
document.write(`Last Index of 'l': ${firstProgram.lastIndexOf('l')} <br><br>`);

// Q5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

document.write("<h1>Question 5</h1>");

var countryPak = 'Pakistani';

document.write(`String: ${countryPak} <br>`);
document.write(`Character at index 3: ${countryPak.charAt(3)} <br><br>`);

// Q6 Repeat Q1 using string concat() method.

document.write("<h1>Question 6</h1>");

var firstName = prompt('Enter your first name:');
var lastName = prompt('Enter your last name:');
var fullName = firstName.concat(' ', lastName);

alert(`Welcome ${fullName} to our website`);
document.write(`Welcome ${fullName} to our website`);

// Q7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

document.write("<h1>Question 7</h1>");

var cityName = "Hyderabad";
var repName = cityName.replace('Hyder', 'Islam');

document.write(`City: ${cityName} <br>`);
document.write(`After Replacement: ${repName} <br><br>`);

// Q8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”

document.write("<h1>Question 8</h1>");

var message = 'Ali and Sami are best friends. They play cricket and football together.';
var messageRep = message.replaceAll('and', '&');

document.write(`Message: ${message} <br>`);
document.write(`After Replacement: ${messageRep} <br><br>`);

// Q9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

document.write("<h1>Question 9</h1>");

var num = '472';
var numToString = parseInt(num);

document.write(`Value: ${num} <br>`);
document.write(`Type: ${typeof(num)} <br>`);
document.write(`Value: ${numToString} <br>`);
document.write(`Type: ${typeof(numToString)} <br><br>`);

// Q10 Write a program that takes user input. Convert and show the input in capital letters.

document.write("<h1>Question 10</h1>");

var userInput = prompt('Enter your favourite fruit name:');
var convUpperCase = userInput.toUpperCase();

document.write(`User Input: ${userInput} <br>`);
document.write(`Upper Case: ${convUpperCase} <br>`);

// Q11 Write a program that takes user input. Convert and show the input in title case.

document.write("<h1>Question 11</h1>");

var userCarInput = prompt('Enter your favourite car name:');
var convTitleCase = userCarInput.charAt(0).toUpperCase() + userCarInput.slice(1,userCarInput.length); // method 1
var convTitleCase = userCarInput.charAt(0).toUpperCase() + userCarInput.substring(1); // method  return remainig characters

document.write(`User Input: ${userCarInput} <br>`);
document.write(`Title Case: ${convTitleCase} <br>`);

document.write("<h1>Question 12</h1>");

// Q12 Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36 ;

document.write(`Number: ${num} <br>`);
document.write(`Result: ${parseInt(num.toString().replace('.',''))} <br>`);
document.write(`Type: ${typeof(parseInt(num.toString().replace('.','')))} <br>`);

document.write("<h1>Question 13</h1>");

// Q13 Write a program to take user input and store username in a variable. If the username contains any special
//symbol among [@ . , !], prompt the user to enter a valid username.

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var username = prompt('Enter a username');
var isValid = true;

for (let i = 0; i < username.length; i++) {
    if (username.charCodeAt(i) === 33 || 
    username.charCodeAt(i) === 44 ||
    username.charCodeAt(i) === 46 ||
    username.charCodeAt(i) === 64) {
        isValid = false;
        break;    
    }
}
if (isValid) {
    alert(`Username "${username}" is valid.`);
    document.write(`Username "${username}" is valid.`);
}
else{
    alert('Please enter a valid username without special symbols [@ . , !]')
    document.write('Please enter a valid username without special symbols [@ . , !]')
}

document.write("<h1>Question 14</h1>");

// Q14 You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given
// item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie,
// COOKIE or coOkIE, program should inform about its availability. Example:

var userDeserts = prompt('<br>Welcome to ABC Baker. What do you want to order sir/maam?');
var deserts = ["cake", "apple pie", "cookie", "chips", "patties"];
var isCheck = false;
var findIndex = 0;

for (let i = 0; i < deserts.length; i++) {
    if (userDeserts.toLowerCase() === deserts[i].toLowerCase()) {
        isCheck = true;
        findIndex = i;
        break;
    }
}

if (isCheck) {
    document.write(`${userDeserts} is available at index ${findIndex} in our bakery.`);
}
else{
    document.write(`we are sorry ${userDeserts} is not available in our bakery.`);
}

document.write("<h1>Question 15</h1>");

// Q15 Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var userPass = prompt('Enter your password \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long');
var hasChar = false;
var hasNumber = false;
var isValid = true;

document.write(`<br>Entered Password: ${userPass} <br>`);

if (userPass.charCodeAt(0) >= 48 && userPass.charCodeAt(0) <= 57) {
    document.write(`Password can't begin with a number. <br>`);
    isValid = false;
}

else if (userPass.length < 6) {
    document.write(`Password must be at least 6 characters long. <br>`);
    isValid = false;
}
else {
    for (let i = 0; i < userPass.length; i++) {
        if ((userPass.charCodeAt(i) >= 65 && userPass.charCodeAt(i) <= 90) ||
            (userPass.charCodeAt(i) >= 97 && userPass.charCodeAt(i) <= 122)) {
            hasChar = true;
        }
        else if (userPass.charCodeAt(i) >= 48 && userPass.charCodeAt(i) <= 57) {
            hasNumber = true;
        }
        
        if (hasChar && hasNumber) {
            break;
        }
    }
}

if (!hasChar || !hasNumber) {
    document.write("Password must contain both alphabets and numbers. <br>");
    isValid = false;
}

if (isValid && hasChar && hasNumber) {
    document.write("Your password is valid. <br>");
} else {
    document.write("Please enter a valid password. <br>");
}

document.write("<h1>Question 16</h1>");

// Q16 Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var uniToArr = university.split('');
for (let i = 0; i < uniToArr.length; i++) {
    document.write('<br>' + uniToArr[i] + '<br>');   
}

document.write("<h1>Question 17</h1>");

// Q17 Write a program to display the last character of a user input.

var choclate = prompt('Enter your favourite choclate name:');
document.write(`<br>User input ${choclate} <br>`);
document.write(`Last character of input ${choclate.charAt(choclate.length - 1)}`);

document.write("<h1>Question 18</h1>");

// Q18 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = 'The quick brown fox jumps over the lazy dog';
var sentenceLowerCase = sentence.toLowerCase();
var wordCount = sentenceLowerCase.split('the').length - 1;

document.write(`<br>Text: ${sentence} <br>`);
document.write(`There are ${wordCount} occurrences of word 'the' <br>`);
