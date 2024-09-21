# Variables for Numbers

## Introduction

JavaScript mein numbers ko bhi variables mein store kiya ja sakta hai. Numbers ke saath mathematical operations perform karna possible hai. Yeh operations jaise addition, subtraction, multiplication, aur division include karte hain.

## Syntax

```javascript
var age = 25;           // Integer
var price = 199.99;     // Float
```

- **var**: Yeh keyword variable declare karne ke liye use hota hai.
- **age**: Yeh variable hai jisme integer value `25` store ki gayi hai.
- **price**: Yeh variable hai jisme float value `199.99` store ki gayi hai.

## Important Points

1. **Integer aur Float**: Numbers do main types ke hote hain – integers (whole numbers) aur floats (decimal numbers). JavaScript dono types ko handle kar sakta hai.

2. **Mathematical Operations**: Numbers ke sath addition, subtraction, multiplication, aur division jaise basic mathematical operations perform kiye ja sakte hain.

3. **Precision**: Floating-point numbers (decimal numbers) ke sath precision issues ho sakte hain. Yeh numbers exact nahi hote, aur kabhi kabhi rounding errors aa sakte hain.

## Limitations

1. **Precision Issues**: Floats ki precision limited hoti hai aur rounding errors ke issues aa sakte hain. Bahut bade ya chhote decimal numbers ke sath kaam karte waqt accuracy ko ensure karna zaroori hota hai.

2. **Overflow/Underflow**: Extremely large ya small numbers ke sath arithmetic operations karne par overflow (value limit exceed karna) ya underflow (value limit se niche jaana) issues ho sakte hain.

3. **NaN (Not-a-Number)**: Agar mathematical operation ke dauran invalid input diya jaye, toh result `NaN` (Not-a-Number) ho sakta hai. Yeh ek special value hai jo indicate karti hai ke result numeric nahi hai.

## Example

### Addition

```javascript
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log(sum); // Output: 30
```

### Multiplication

```javascript
var length = 5;
var width = 10;
var area = length * width;
console.log(area); // Output: 50
```

### Division

```javascript
var totalPrice = 100;
var numberOfItems = 4;
var pricePerItem = totalPrice / numberOfItems;
console.log(pricePerItem); // Output: 25
```

## Conclusion

Numbers JavaScript mein variables ke saath store aur manipulate kiye ja sakte hain. Mathematical operations ke liye numbers ka use karke aap calculations aur data manipulations perform kar sakte hain. Precision aur potential issues ko samajhna zaroori hai taake accurate aur reliable results ensure kiye ja sakein.