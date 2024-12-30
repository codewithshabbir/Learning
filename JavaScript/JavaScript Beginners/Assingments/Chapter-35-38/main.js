// // Q1 Write a function that displays current date & time in your browser.

// document.write('<h1>Question 1</h1>');

// function currentDateAndTime(){
//     let currentDate = new Date();
//     document.write(currentDate);
// }

// currentDateAndTime();

// // Q2 Write a function that takes first & last name and then it greets the user using his full name.

// document.write('<h1>Question 2</h1>');

// let firstName = 'Muhammad';
// let lastName = 'Shabbir';

// function greetUser(){
//     document.write(`Welcome to our website ${firstName + ' ' +lastName}`);
// }

// greetUser();

// // Q3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// document.write('<h1>Question 3</h1>');

// let num1 = +prompt('Enter a number 1');
// let num2 = +prompt('Enter a number 2');

// function sum(num1, num2) {
//     let num3 = num1 + num2
//     return num3
// }

// let sumNumber = sum(num1, num2);

// document.write(`Sum of two number is ${sumNumber}`);

// // Q4 Calculator:
// // Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// // show the desired result in your browser.

// document.write('<h1>Question 4</h1>');

// let operator = prompt("Enter any Operator:");

// function calculator(num1, num2, operator){
//     switch (operator) {
//         case "+":
//             return Number(num1 + num2)
//         case "-":
//             return Number(num1 - num2)
//         case "*":
//             return Number(num1 * num2)
//         case "/":
//             return Number(num1 / num2)
//         default:
//             console.log("Invalid Operator");
//     }
// }

// let result = calculator(num1, num2, operator);
// if (operator.toString() == '+') {
//     document.write(`Sum of two number is ${result}`)    
// }
// else if (operator.toString() == '-') {
//     document.write(`Subtract of two number is ${result}`)    
// }
// else if (operator.toString() == '*') {
//     document.write(`Multiply of two number is ${result}`)    
// }
// else if (operator.toString() == '/') {
//     document.write(`Divide of two number is ${result}`)    
// }

// //Q5 Write a function that squares its argument.

// document.write('<h1>Question 5</h1>');

// let squareInput = prompt("Enter any Number:");

// function square(num) {
//     return num * num;
// }

// let squareResult = square(squareInput);

// document.write(`Square of ${squareInput} is ${squareResult}`)    

// //Q6. Write a function that computes factorial of a number.

// document.write('<h1>Question 6</h1>');

// let factorialInput = +prompt("Enter a number to calculate its factorial:");

// let factorial = (n) => {
//     if (n < 0) {
//         return "Not defined for negative numbers";
//     }
//     else if(n === 0 || n === 1){
//         return 1;
//     }
//     else {
//         let resultCount = 1;
//         for (let i = 1; i <= n; i++) {
//             resultCount *= i;
//         }
//         return resultCount;
//     }
// }

// let factorialResult = factorial(factorialInput);

// document.write(`Factorial of ${factorialInput} is: ${factorialResult}`);

// // Q7, Write a function that take start and end number as inputs & display counting in your browser.

// document.write('<h1>Question 7</h1>');

// let startInput = +prompt('Enter the starting number:')
// let endInput = +prompt('Enter the ending number:')

// let counting = (startInput, endInput) => {
//     for (let i = startInput; i <= endInput; i++) {
//         document.write(`Counting: ${i} <br>`);
//     }
// }

// counting(startInput, endInput);

// // 8. Write a nested function that computes hypotenuse of a right angle triangle.
// // Hypotenuse2 = Base2 + Perpendicular2
// // Take base and perpendicular as inputs.
// // Outer function : calculateHypotenuse()
// // Inner function: calculateSquare()

// document.write('<h1>Question 8</h1>');

// let base = +prompt('Enter the values of base:');
// let perpendicular = +prompt('Enter the values of perpendicular:');

// let calculateHypotenuse = () => {
//     let calculateSquare = (num) => {
//         return num * num;
//     }

//     let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     calculateSquare(base, perpendicular);

//     return hypotenuse;
// }

// let hypotenuseAnswer = calculateHypotenuse();

// document.write(`The hypotenuse of the triangle is: ${hypotenuseAnswer}`);

// // Q9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables

// document.write('<h1>Question 9</h1>');

// let width = +prompt('Enter the values of width');
// let height = +prompt('Enter the values of height');

// let areaOfRectangle = (height, width) => {
//     return  width * height;
// }

// let rectangleResult = areaOfRectangle(height, width);

// document.write(`Area of Rectangle is: ${rectangleResult}`);

// // Q10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// document.write('<h1>Question 10</h1>');

// let userInput = prompt('Enter a string to check if it is a palindrome:');

// let palindrome = (str) => {
//     let reverseString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseString += str[i];
//     }
//     return reverseString === str;
// };

// if (palindrome(userInput)) {
//     document.write('This string is a palindrome.');
// } else {
//     document.write('This string is not a palindrome.');
// }

// // Q11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// // string in upper case.
// // EXAMPLE STRING : 'the quick brown fox'
// // EXPECTED OUTPUT : 'The Quick Brown Fox'

document.write('<h1>Question 11</h1>');

let exmString = 'the quick brown fox';

const convertInCapitalize = (examStr) => {
    let stringToArray = examStr.split(' ');
    let capitalizeString = '';
    
    for (let i = 0; i < stringToArray.length; i++) {
        capitalizeString += stringToArray[i][0].toUpperCase() + stringToArray[i].slice(1) + ' ';
    }
    return capitalizeString;
}

let capatalizeForm = convertInCapitalize(exmString);

document.write('<b>Orignal String:</b> ', exmString, '<br>');
document.write('<b>Captilaize String:</b> ', capatalizeForm);

// Q12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

document.write('<h1>Question 12</h1>');

let senteseString = 'Web Development Tutorial';
let words = senteseString.split(' ');
let longestWord = '';

document.write('<b>Sentence:</b> ', senteseString, '<br>');

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}
document.write('<b>Longest Word:</b> ', longestWord);


// Q13, Write a JavaScript function that accepts two arguments, a string and a letter and the function will count 
// the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

document.write('<h1>Question 13</h1>');

let string = 'JSResourceS.com';
let letter = 'o';

const countOccurence = (str, lett) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == lett) {
            count++;
        }
    }
    return count;
}

document.write(`The letter ${letter} occurs ${countOccurence(string, letter)} time(s) in the string 'JSResourceS.com'.`);


// Q14, The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

document.write('<h1>Question 14</h1>');

const calcCircumference = (radius) => {
    const circumference = 2 * Math.PI * radius; 
    return circumference.toFixed(2);
};

const calcArea = (radius) => {
    const area = Math.PI * Math.pow(radius, 2); 
    return area.toFixed(2); 
};

const radius = 5;

document.write('<p>The circumference is: ' + calcCircumference(radius) + '</p>');
document.write('<p>The area is: ' + calcArea(radius) + '</p>');