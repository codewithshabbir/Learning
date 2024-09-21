// Unfamiliar operators mein kuch operators hain jo beginners ko samajhne mein mushkil ho sakte hain:

// num++ (Post Increment): Jab operator variable ke baad aata hai, to pehle variable ki original value
// assign hoti hai, aur phir increment hota hai.

var num = 1;
var newNum = num++;  // Pehle newNum ko num ki value (1) milti hai, phir num 2 ho jata hai.

console.log(newNum); // Output: 1
console.log(num);    // Output: 2

// ++num (Pre Increment): Jab operator variable ke pehle hota hai, to pehle increment hota hai aur nayi
// value assign hoti hai.

var num = 1;
var newNum = ++num;  // Pehle num ki value 1 se barhti hai, phir newNum ko woh value milti hai (2).

console.log(newNum); // Output: 2
console.log(num);    // Output: 2

// num-- (Post Decrement): Jab operator variable ke baad hota hai, to pehle original value assign hoti hai,
//  aur phir variable ki value 1 se ghati hai.

var num = 1;
var newNum = num--;  // Pehle newNum ko num ki value (1) milti hai, phir num 0 ho jata hai.

console.log(newNum); // Output: 1
console.log(num);    // Output: 0

// --num (Pre Decrement): Jab operator variable ke pehle hota hai, to pehle decrement hota hai aur nayi
// value assign hoti hai.

var num = 1;
var newNum = --num;  // Pehle num 1 se ghata hai, phir newNum ko woh value milti hai (0).

console.log(newNum); // Output: 0
console.log(num);    // Output: 0