// Q1, Declare an empty array using JS literal notation to store student names in future.

var stuNames = [];

// Q2, Declare an empty array using JS object notation to store student names in future.

var stuNames = new Array();

// Q3, Declare and initialize a strings array.

var colorName = ['red', 'green', 'blue'];

// Q4, Declare and initialize a numbers array.

var countArray = [1,2,3,4,5,6];

// Q5, Declare and initialize a boolean array.

var boolArray = [true, false];

// Q6, Declare and initialize a mixed array.

var stuRecords = ['Muhammad Shabbir', 20, true];

// Q7, Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

var qualificationsPak = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];

document.write('<h1>Qualifications</h1>');
for (let i = 0; i < qualificationsPak.length; i++) {
    document.write(i+1 +", ", qualificationsPak[i] + "<br>");
}

// Q8, Write a program to store 3 student names in an array.Take another array to store score of these three
// students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

var stuName = ['Muhammad Shabbir', 'Izhan', 'Habib'];
var stuScore = [260, 155, 450];

document.write('<br>');
for (let i = 0; i < stuName.length; i++) {
    document.write(`Score of ${stuName[i]} is ${stuScore[i]}. Percentage: ${(stuScore[i] / 500) * 100}% <br>`);
}

// Q9, Initialize an array with color names. Display the array elements in your browser.

var colorNames = ['red', 'green', 'blue'];

document.write('<br>');
for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the
// array. Display the updated array in your browser.

var addColorNameStart = prompt('Enter a color name you want to add in start');

colorNames.unshift(addColorNameStart);

document.write('<br>');
document.write('<h1>Updated Color Names in Start</h1>');
for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.

var addColorNameEnd = prompt('Enter a color name you want to add in end');

colorNames.push(addColorNameEnd);

document.write('<br>');
document.write('<h1>Updated Color Names in End</h1>');
for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

var addFirstColorsStart = prompt('Enter a first color name you want to add in start');
var addSecondColorsStart = prompt('Enter a second color name you want to add in start');

colorNames.unshift(addFirstColorsStart);
colorNames.unshift(addSecondColorsStart);

document.write('<br>');
document.write('<h1>Updated Two Color Names in Start</h1>');
for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// d. Delete the first color in the array. Display the updated array in your browser.

colorNames.shift();

document.write('<br>');
document.write('<h1>Delete Color Names in Start</h1>');
for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// e. Delete the last color in the array. Display the updated array in your browser.

colorNames.pop();

document.write('<br>');
document.write('<h1>Delete Color Names in End</h1>');
for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// position/index. . Display the updated array in your browser.

var indexNumber = prompt('Enter a index number you wants to add a color');
var addColorSpecificIndex = prompt('Enter a color name you want to add');

colorNames.splice(indexNumber, 0, addColorSpecificIndex);

document.write('<br>');
document.write(`<h1>Update Color Names in ${indexNumber} index</h1>`);

for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array
// in your browser.

var deleteIndexNumber = prompt('Enter a index number you wants to delete a color');
var deleteColorCount = prompt('how many colors he/she wants to delete?');

colorNames.splice(deleteIndexNumber, deleteColorCount);

document.write('<br>');
document.write(`<h1>Delte Color Names in ${deleteIndexNumber} index and ${deleteColorCount} count</h1>`);

for (let i = 0; i < colorNames.length; i++) {
    document.write('Color Name: ', colorNames[i], '<br>');
}

// Q10, Write a program to store student scores in an array & sort the array in ascending order using
// Array’s sort method.

var studentScore = [200, 100, 50, 450, 350, 400, 300];

document.write(`Scores of students ${studentScore} <br>`);
studentScore.sort((a, b)=>{ return a-b });
document.write(`Ordered Scores of students ${studentScore}<br><br>`);

// Q11, Write a program to initialize an array with city names. Copy 3 array elements from cities array to
// selectedCities array.

var cities = ['karachi', 'Lahore', 'Islamabad', 'Multan', 'Peshawar', 'Quetta'];

document.write(`Cities List: ${cities} <br>`);
var selectedCities = cities.slice(1,4);
document.write(`Selected Cities List: ${selectedCities} <br><br>`);

// Q12, Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ['This', 'is', 'my', 'cat'];

document.write(`Array: ${arr}<br>`);
var arrToString = arr.join(" ");
document.write(`String: ${arrToString} <br><br>`);

// Q13, Create a new array. Store values one by one in such a way that you can access the values in the
// order in which they were stored. (FIFO-First In First Out)

var fifoQueue = [];

fifoQueue.push('keyboard');
fifoQueue.push('mouse');
fifoQueue.push('printer');
fifoQueue.push('monitor');

document.write('Devices: ', fifoQueue, '<br>');

document.write('<br>Out: <br>', fifoQueue.shift() + '<br>');    
document.write('Out: <br>', fifoQueue.shift() + '<br>');    
document.write('Out: <br>', fifoQueue.shift() + '<br>');    
document.write('Out: <br>', fifoQueue.shift() + '<br><br>');

// Q14, Create a new array. Store values one by one in such a way that you can access the values in reverse
// order. (Last In-First Out)

var lifoQueue = [];

lifoQueue.push('keyboard');
lifoQueue.push('mouse');
lifoQueue.push('printer');
lifoQueue.push('monitor');

document.write('Devices: ', lifoQueue, '<br>');

document.write('<br>Out: <br>', lifoQueue.pop() + '<br>');    
document.write('Out: <br>', lifoQueue.pop() + '<br>');    
document.write('Out: <br>', lifoQueue.pop() + '<br>');    
document.write('Out: <br>', lifoQueue.pop() + '<br><br>');

// Q15, Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an 
// array. Display the following dropdown/select menu in your browser using document.write() method:

var phoneManufactures = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];


document.write('<select>');
for (let i = 0; i < phoneManufactures.length; i++) {
    document.write(`<option> ${phoneManufactures[i]} </option>`);
}
document.write('</select>');