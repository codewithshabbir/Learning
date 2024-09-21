# Math Expressions: Unfamiliar Operators in JavaScript

## Introduction

JavaScript mein kuch operators aise hote hain jo shuru mein samajhne mein thode mushkil ho sakte hain, khaaskar jab aap math operations ke liye inhe use karte hain. In unfamiliar operators ka use aapko variables ko increment (barhawa) ya decrement (ghatawa) karne mein help karta hai. Yeh operators short aur efficient hain.

## Unfamiliar Operators

### 1. **Post Increment (`num++`)**
   - **Syntax**: `num++`
   - Jab `++` operator variable ke baad use hota hai, to pehle variable ki **original value assign** hoti hai, aur phir variable ki value **1 se barhti** hai.

#### Example:

```javascript
var num = 1;
var newNum = num++;  // Pehle newNum ko num ki value (1) milti hai, phir num 2 ho jata hai.

console.log(newNum); // Output: 1
console.log(num);    // Output: 2
```

### 2. **Pre Increment (`++num`)**
   - **Syntax**: `++num`
   - Jab `++` operator variable ke pehle use hota hai, to pehle variable ki value **1 se barhti** hai aur phir woh **nayi value assign** hoti hai.

#### Example:

```javascript
var num = 1;
var newNum = ++num;  // Pehle num ki value 1 se barhti hai, phir newNum ko woh value milti hai (2).

console.log(newNum); // Output: 2
console.log(num);    // Output: 2
```

### 3. **Post Decrement (`num--`)**
   - **Syntax**: `num--`
   - Jab `--` operator variable ke baad use hota hai, to pehle variable ki **original value assign** hoti hai, aur phir variable ki value **1 se ghatti** hai.

#### Example:

```javascript
var num = 1;
var newNum = num--;  // Pehle newNum ko num ki value (1) milti hai, phir num 0 ho jata hai.

console.log(newNum); // Output: 1
console.log(num);    // Output: 0
```

### 4. **Pre Decrement (`--num`)**
   - **Syntax**: `--num`
   - Jab `--` operator variable ke pehle use hota hai, to pehle variable ki value **1 se ghatti** hai aur phir woh **nayi value assign** hoti hai.

#### Example:

```javascript
var num = 1;
var newNum = --num;  // Pehle num 1 se ghata hai, phir newNum ko woh value milti hai (0).

console.log(newNum); // Output: 0
console.log(num);    // Output: 0
```

## Important Points

1. **Pre vs Post Operators**: Jab `++` ya `--` operator variable ke baad hota hai (post-increment/post-decrement), to pehle original value assign hoti hai, aur phir increment/decrement hota hai. Jab `++` ya `--` operator variable ke pehle hota hai (pre-increment/pre-decrement), to pehle increment/decrement hota hai aur phir nayi value assign hoti hai.

2. **Use Cases**: Yeh operators tab useful hote hain jab aapko variables ki values ko ek step increment ya decrement karna ho, aur unhe assignments ya loops mein use karna ho.

## Conclusion

Unfamiliar operators jaise `++` aur `--` JavaScript mein kaafi important hain, khaaskar jab aapko variables ki values ko efficiently modify karna ho. Pre-aur post-increment/decrement ko samajhna code ko concise aur accurate banata hai.