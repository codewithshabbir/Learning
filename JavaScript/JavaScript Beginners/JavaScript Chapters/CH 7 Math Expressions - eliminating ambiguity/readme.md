# Math Expressions: BODMAS Rule in JavaScript

## Introduction

JavaScript mein bhi wohi **BODMAS** rule apply hota hai jo hum algebra mein use karte hain. BODMAS ke zariye hum complex math expressions ko sahi tarteeb se solve karte hain. Har operation ka apna ek order hota hai, jise follow karna zaroori hota hai.

### BODMAS ka Full Form:
- **B**: Brackets (Parentheses)
- **O**: Orders (Exponents, jaise squares ya powers)
- **D**: Division
- **M**: Multiplication
- **A**: Addition
- **S**: Subtraction

## Explanation

### 1. **Brackets (Parentheses)**
   - Sabse pehle parentheses ke andar wali calculations perform hoti hain.
   
#### Example:

```javascript
var result = (2 + 3) * 4; 
// Pehle (2 + 3) solve hoga, phir uska result * 4 hoga.
// Result: 20
```

### 2. **Multiplication/Division**
   - Brackets ke baad, **Multiplication** aur **Division** left se right order mein perform hoti hain.
   
#### Example:

```javascript
var result = 10 / 2 * 5;
// Pehle 10 ko 2 se divide kiya jayega, phir jo result aayega usko 5 se multiply kiya jayega.
// Result: 25
```

### 3. **Addition/Subtraction**
   - Sabse aakhri mein **Addition** aur **Subtraction** perform hoti hain, aur yeh bhi left to right order follow karti hain.
   
#### Example:

```javascript
var result = 10 + 5 - 3;
// Pehle 10 aur 5 ko add karenge, phir usme se 3 minus karenge.
// Result: 12
```

### Example with Complete BODMAS Rule:

```javascript
var total = (2 + 3) * (4 + 2) / 2 - 5;
// Result: 10
```

#### Breakdown of BODMAS in Example:

1. **Brackets (B)**: Pehle parentheses ke andar wale operations solve hote hain.
   - (2 + 3) = 5
   - (4 + 2) = 6

2. **Multiplication (M)**: Phir multiply hota hai:
   - 5 * 6 = 30

3. **Division (D)**: Phir division hota hai:
   - 30 / 2 = 15

4. **Subtraction (S)**: Phir subtract hota hai:
   - 15 - 5 = 10

   Final result: **10**

## Important Points

1. **Order of Operations**: JavaScript mein operations ko solve karne ka order BODMAS rule ke zariye hota hai. Yeh rule ensure karta hai ke aapka result sahi aaye.
   
2. **Brackets First**: Agar aapke expression mein parentheses (brackets) hain, to pehle unko solve kiya jata hai. Phir baqi operations perform hote hain.

## Conclusion

BODMAS rule ko follow karna math expressions ko sahi order mein solve karne ka tareeqa hai. Agar aap complex calculations kar rahe hain to yeh rule aapko hamesha sahi result dene mein madad karega. Is rule ke zariye aap ka code consistent aur error-free hoga.