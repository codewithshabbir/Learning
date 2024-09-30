// Q1, Declare and initialize an empty multidimensional array. (Array of arrays)

var multiArray = [[], [], []];

// Q2, Declare and initialize a multidimensional array representing the following matrix:

var multiArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

for (let i = 0; i < multiArray.length; i++) {
    document.write(multiArray[i].join(' '), '<br>');
}

// Q3, Write a program to print numeric counting from 1 to 10.

document.write(`<h1>Counting</h1>`);
for (let i = 1; i <= 10; i++) {
    document.write(i, '<br>');
}

// Q4, Write a program to print multiplication table of any number using for loop. Table number & length
// should be taken as an input from user.

var tableNumber = +prompt('Enter a number to show its multiplication');
var tableLength = +prompt('Enter length multiplication table');

document.write('<br> Multiplication table of ', tableNumber);
document.write('<br> Length ', tableLength, '<br>');
for (let i = 1; i <= tableLength; i++) {
    document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
}

// Q5, Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

document.write('<br>');
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i], '<br>')
}
document.write('<br>');
for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`)
}

// Q6, Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write('<br><h1>Counting</h1>');
for (let i = 1; i <= 15; i++) {
    document.write(i, ', ');
}

document.write('<h1>Reverse Counting</h1>');
for (let i = 10; i >= 1; i--) {
    document.write(i, ', ');
}

document.write('<h1>Even Counting</h1>');
for (let i = 0; i <= 20; i++) {
    if ( (i % 2) == 0) {
        document.write(i, ', ');        
    }
}

document.write('<h1>Odd Counting</h1>');
for (let i = 0; i <= 20; i++) {
    if ( (i % 2) != 0) {
        document.write(i, ', ');        
    }
}

document.write('<h1>Series Counting</h1>');
for (let i = 1; i <= 20; i++) {
    if ( (i % 2) == 0) {
        document.write(i, 'k, ');        
    }
}

// Q7,You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

var food = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var searchInput = prompt('Welcome to ABC Bakery. What do you want to order sir/mam?');
var itemFound = false;

document.write('<br><br>');
for (let i = 0; i < food.length; i++) {
    if (food[i].toLowerCase() == searchInput.toLowerCase()) {
        document.write(`${food[i]} is available at index ${i} in our bakery`);
        itemFound = true;
        break
    }
}
if (!itemFound){
    document.write(`We are sorry. ${searchInput} is not available in our bakery`);
}   

// Q8, Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

var numArr = [24, 53, 78, 91, 12];
var largestNum = numArr[0];

document.write('<br><br>');
document.write('Array Items: ', numArr);

for (let i = 0; i < numArr.length; i++) {
    if (largestNum < numArr[i]) {
        largestNum = numArr[i];
    }
}
document.write('<br>The Largest number is ', largestNum);

// Q9, Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

var numArr = [24, 53, 78, 91, 12];
var smallestNum = numArr[0];

document.write('<br><br>');
document.write('Array Items: ', numArr);

for (let i = 0; i < numArr.length; i++) {
    if (smallestNum > numArr[i]) {
        smallestNum = numArr[i];
    }
}
document.write('<br>The Smallest number is ', smallestNum);

// Q10, Write a program to print multiples of 5 ranging 1 to 100.

document.write('<br><br>');
for (let i = 5; i <= 100; i+=5) {
    document.write(i, ', ');
}