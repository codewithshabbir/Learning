// Concatenation ka matlab hota hai do ya zyada strings ko ek sath milana. JavaScript mein, hum + operator ka use
//  karte hain strings ya text ko apas mein milane ke liye. Hum numbers ko bhi strings ke sath jor sakte hain.

// Syntax:
// + operator aik arithmetic operator hai, lekin JavaScript mein isko concatenation ke liye bhi use kiya jata hai.
// Example 1: Do Strings Ko Concatenate Karna

var str1 = "Muhammad";
var str2 = "Shabbir";

console.log("This is my full name: " + str1 + " " + str2);
// Output: This is my full name: Muhammad Shabbir

// Yahaan + operator ka use do strings ko jor kar ek naya string banane ke liye kiya gaya hai.

// Example 2: String Aur Number Ko Concatenate Karna

var str = "Muhammad Shabbir";
var num = 786;

console.log("My username is: " + str + num);
// Output: My username is: Muhammad Shabbir786

// Is example mein, string aur number ko concatenate kiya gaya hai, aur result ek combined string hai.

// Example 3: Numbers Ko Strings Ki Tarah Concatenate Karna

var num1 = "458";
var num2 = 786;

console.log('This is my number: ' + num1 + num2);
// Output: This is my number: 458786

// Yahaan pehle number ko string ki tarah treat kiya gaya, isliye dono numbers ko jor kar ek string bana diya gaya.

// Example 4: Arithmetic Expression Ke Sath Twist

console.log('This is my number: ' + (num1 - num2));
// Output: This is my number: -328

// Yahaan subtraction perform ki gayi, kyunki - operator concatenation nahi karta, balkay numeric operation 
// karta hai. Isliye result ek numeric subtraction hai.