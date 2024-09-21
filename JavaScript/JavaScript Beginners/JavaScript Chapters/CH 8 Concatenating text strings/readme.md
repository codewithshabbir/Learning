# Strings: Concatenation in JavaScript

## Introduction

**Concatenation** ka matlab hota hai do ya zyada strings ko ek sath milana. JavaScript mein, hum `+` operator ka use karte hain strings ya text ko apas mein jorhne ke liye. Hum numbers ko bhi strings ke sath jor sakte hain.

## Syntax

`+` operator aik arithmetic operator hai, lekin JavaScript mein isko concatenation ke liye bhi istemal kiya jata hai.

## Examples

### 1. **Do Strings Ko Concatenate Karna**

```javascript
var str1 = "Muhammad";
var str2 = "Shabbir";

console.log("This is my full name: " + str1 + " " + str2);
// Output: This is my full name: Muhammad Shabbir
```

Yahaan `+` operator ka istemal do strings ko jor kar ek naya string banane ke liye kiya gaya hai.

### 2. **String Aur Number Ko Concatenate Karna**

```javascript
var str = "Muhammad Shabbir";
var num = 786;

console.log("My username is: " + str + num);
// Output: My username is: Muhammad Shabbir786
```

Is example mein, string aur number ko concatenate kiya gaya hai, aur result ek combined string hai.

### 3. **Numbers Ko Strings Ki Tarah Concatenate Karna**

```javascript
var num1 = "458";
var num2 = 786;

console.log('This is my number: ' + num1 + num2);
// Output: This is my number: 458786
```

Yahaan pehle number ko string ki tarah treat kiya gaya, isliye dono numbers ko jor kar ek string bana diya gaya.

### 4. **Arithmetic Expression Ke Sath Twist**

```javascript
console.log('This is my number: ' + (num1 - num2));
// Output: This is my number: -328
```

Yahaan subtraction perform ki gayi, kyunki `-` operator concatenation nahi karta, balkay numeric operation karta hai. Isliye result ek numeric subtraction hai.

## Important Points

1. **Concatenation Operator**: `+` operator ko strings aur numbers ko jorhne ke liye use kiya jata hai.
2. **Type Conversion**: Jab aap string aur number ko concatenate karte hain, JavaScript number ko string mein convert kar deta hai.
3. **Expression Handling**: Parentheses ka istemal aapko operations ke order ko control karne mein madad karta hai.

## Conclusion

Concatenation ka istemal JavaScript mein strings ko milane ke liye hota hai. Yeh programming mein data ko present karne ka ek zaroori hissa hai. Is technique ko samajh kar aap apne code ko aur effective bana sakte hain.