// JavaScript mein bhi BODMAS rule (jo algebra mein hota hai) apply hota hai.
// BODMAS ka matlab hota hai

// B: Brackets (Parentheses)
// O: Orders (Exponents, like squares or powers)
// D: Division
// M: Multiplication
// A: Addition
// S: Subtraction

// Parentheses (Brackets): Sabse pehle parentheses ke andar wali calculations hoti hain.

var result = (2 + 3) * 4; // Pehle (2 + 3), phir * 4; Result: 20

// Multiplication/Division: Brackets ke baad Multiplication aur Division left se right order mein
// hoti hain.

var result = 10 / 2 * 5; // Pehle 10 / 2, phir * 5; Result: 25

// Addition/Subtraction: Baad mein Addition aur Subtraction hoti hain, phir left to right order
// follow hota hai.

var result = 10 + 5 - 3; // Pehle 10 + 5, phir - 3; Result: 12

// Example with BODMAS:

var total = (2 + 3) * (4 + 2) / 2 - 5;  //10

// Yahaan BODMAS rule kuch is tarah apply hoga:

// Brackets (B): Pehle (2 + 3) aur (4 + 2) solve hote hain.
(2 + 3) = 5;
(4 + 2) = 6;

// Multiplication (M): Ab multiply hoga:
5 * 6 // = 30;

// Division (D): Phir divide hoga:

30 / 2 // = 15;
// Subtraction (S): Phir subtract hoga:

15 - 5 // = 10;
// To final result 10 aayega.