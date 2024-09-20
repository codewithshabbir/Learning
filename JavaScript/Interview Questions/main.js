// Q1 How can you swap the values of two variables?

var num1 = 5;
var num2 = 10;

console.log('Before Swapping', num1, num2);     // 5, 10

var temp;
temp = num2;    //10
num2 = num1;    //5
num1 = temp;    //10

console.log('After Swapping', num1, num2);      //10, 5

// Q2 Can you swap the values of two variables without using a third (temporary) variable in JavaScript?

var num3 = 8;
var num4 = 14;

console.log('Before Swapping', num3, num4);     // 8, 14

[ num3 , num4 ] = [ num4 , num3 ]       //[8,14] = [14,8]

// console.log([ num3 , num4 ] = [ num4 , num3 ]);

console.log('After Swapping', num3, num4);      //14, 8

// Q3 Can you swap the values of two variables without using a third (temporary) variable and built-in function in JavaScript?

var num5 = 7;
var num6 = 10;

console.log('Before Swapping', num5, num6);     // 7, 10

num5 = num5 + num6;     //10 + 7 = 17
num6 = num5 - num6;     //17 - 10 = 7
num5 = num5 - num6;     //17 - 7 = 10

console.log('After Swapping', num5, num6);      //10, 7

// Q4 How can you swap three variables a, b, and c so that a gets b's value, b gets c's value, and c gets a's value?

var a = 10;
var b = 14;
var c = 8;

console.log('Before Swapping', a, b, c);     // 10, 14, 8

[a,b,c]= [b,c,a]    // [10, 14, 8] = [14, 8, 10]

console.log('After Swapping', a, b, c);      //14, 8, 10

// Q5 How can you swap two variables using bitwise XOR in JavaScript?

var d = 5;  // Binary: 0101
var e = 3;  // Binary: 0011

console.log('Before Swapping', d, e);     // 5, 3

// Step 1: d = d ^ e
d = d ^ e;  // d = 0101 ^ 0011 = 0110 (6)

// Step 2: e = d ^ e
e = d ^ e;  // e = 0110 ^ 0011 = 0101 (5)

// Step 3: d = d ^ e
d = d ^ e;  // d = 0110 ^ 0101 = 0011 (3)

// Now d = 3 and e = 5 (Swapped successfully)
console.log('After Swapping', d, e);      //3, 5

// Q6 create pop function without using any built-in function

var arr = ["Shabbir", "Izhaan", "Habib"];

