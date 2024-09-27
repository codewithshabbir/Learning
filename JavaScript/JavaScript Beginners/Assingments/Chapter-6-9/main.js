// Q1, Write a program to take a number in a variable, do the required arithmetic to display the following result
// in your browser:

var num = 10;

document.write('<b>Result:</b> <br>');
document.write('The value of a is: ', num);
document.write('<br>........................................<br><br>');

document.write('The value of ++a is: ', ++num);
document.write('<br>Now the value of a is: ', num);

document.write('<br><br> The value of a++ is: ', num++);
document.write('<br>Now the value of a is: ', num);

document.write('<br><br>The value of --a is: ', --num);
document.write('<br>Now the value of a is: ', num);

document.write('<br><br>The value of a-- is: ', num--);
document.write('<br>Now the value of a is: ', num);


// Q2, What will be the output in variables a, b & result after execution of the following script:

var a = 2, b = 1;
var result = --a - --b + ++b + b--; // 1 - 0 + 1 + 1 = 3
// Explain the output at each stage:
--a; // 0
--a - --b;   // -1 - -1 = 0
--a - --b + ++b;     // -2 - -2 + -1 = -1
--a - --b + ++b + b--;   // -3 - -2 + -1 + -1 = -3

document.write('<br><br>a is: ', a);    // -3
document.write('<br>b is: ', b);        // -2
document.write('<br>result is: ', result);  // 3

// Q3, Write a program that takes input a name from user & greet the user.

var userPrompt = prompt("Enter your name");

document.write("<br><br>Welcome our site ", userPrompt)

// Q4, Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default.

var getTableNum = Number( prompt('Enter a number for which you want to print a table.', 5));

for (let i = 0; i <= 10; i++) {
    document.write(`${getTableNum} x ${i} = ${getTableNum * i} <br>`);
}

// Q5, Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subOne = prompt("Enter a Subject One Name");
var subTwo = prompt("Enter a Subject Two Name");
var subThree = prompt("Enter a Subject Three Name");
var totalMarks = 100;
var subOneObtainedMarks = Number(prompt('Enter Obtained Marks for subject one'));
var subTwoObtainedMarks = Number(prompt('Enter Obtained Marks for subject two'));
var subThreeObtainedMarks = Number(prompt('Enter Obtained Marks for subject three'));

document.write('<br> <table>');

document.write('<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>');
document.write(`<tr> <td>${subOne}</td> <td>${totalMarks}</td> <td>${subOneObtainedMarks}</td> <td> ${ (subOneObtainedMarks/totalMarks) * 100 } %</td> </tr>`);
document.write(`<tr> <td>${subTwo}</td> <td>${totalMarks}</td> <td>${subTwoObtainedMarks}</td> <td> ${ (subTwoObtainedMarks/totalMarks) * 100 } %</td> </tr>`);
document.write(`<tr> <td>${subThree}</td> <td>${totalMarks}</td> <td>${subThreeObtainedMarks}</td> <td> ${ (subThreeObtainedMarks/totalMarks) * 100 } %</td> </tr>`);

var totalObtainedMarks = Number(subOneObtainedMarks) + Number(subTwoObtainedMarks) + Number(subThreeObtainedMarks);
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write(`<tr> <td></td> <td>${totalMarks * 3}</td> <td>${totalObtainedMarks}</td> <td>${totalPercentage} %</td> </tr>`);

document.write('</table>');