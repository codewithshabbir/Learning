# Variable Names in JavaScript

## Introduction

JavaScript mein variable names ko define karna kaafi flexible hai, lekin kuch rules aur restrictions hain jo follow karna zaroori hai. Yeh rules ensure karte hain ke variable names valid aur consistent hain.

## Legal Variable Names

1. **Shuruat Letters ya Underscore**: Variable names ki shuruat letters (a-z, A-Z) ya underscore (`_`) se honi chahiye.

2. **Allowed Characters**: Variable names mein sirf letters, numbers (0-9), aur underscores (`_`) allowed hain.

3. **Reserved Keywords**: Variable names ko reserved keywords (jaise `var`, `function`) nahi hona chahiye.

### Example

```javascript
var firstName = 'Ali';  // Legal
var _age = 20;          // Legal

console.log(firstName); // Output: Ali
console.log(_age);      // Output: 20
```

## Illegal Variable Names

1. **Numbers se Shuru nahi Ho Sakte**: Variable names ki shuruat numbers se nahi ho sakti.

2. **Spaces**: Variable names mein spaces nahi ho sakti.

3. **Reserved Keywords**: Keywords (jaise `var`, `function`) ko variable names ke liye use nahi kiya ja sakta.

### Example

```javascript
var 123name;    // Illegal
var first name; // Illegal
var var;        // Illegal
```

**Note**: Illegal variable names JavaScript mein syntax error generate karte hain aur code execution mein issues create karte hain.

## Conclusion

JavaScript mein variable names ko define karne ke liye kuch specific rules follow karna zaroori hai. Legal variable names wo hain jo correct syntax aur naming conventions ko follow karte hain, jabke illegal variable names syntax errors aur execution issues ka sabab bante hain. Sahi variable naming practices ko apne code mein apply karke aap code readability aur maintainability improve kar sakte hain.