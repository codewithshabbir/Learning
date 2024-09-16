# React.js Learning and Project Setup

### 1. **React Project Creation**

#### **Command:**
React project banane ke liye sabse pehle **npx** ka use karte hain:

```bash
npx create-react-app my-app
```
- Yeh command tumhara React project initialize karta hai, aur ek basic structure create karta hai.

---

### 2. **Project Structure Overview**

**`package.json` file:**
- Is file mein **scripts** aur **dependencies** hoti hain.
- Scripts wo commands hoti hain jo tum React app ko run, build, ya lint karne ke liye use karte ho.
  - **`npm start`**: App ko start karta hai.
  - **`npm build`**: Production ke liye app ko optimize karta hai.
  - **`npm test`**: App ke tests ko run karta hai.
- **dependencies**: React app ki sari zaroori libraries yahan listed hoti hain.

**`node_modules` folder:**
- Yeh folder React app ki **dependencies** ko contain karta hai. Isme sari libraries hoti hain jo `package.json` mein listed hoti hain.

**Public Folder:**
- Is folder mein tumhari **index.html** file hoti hai jo browser mein pehli dafa load hoti hai. Isme ek `<div id="root">` hota hai, jahan tumhari React app render hoti hai.

**src Folder:**
- Yeh React app ka main folder hota hai jahan tum apne saare **components** banate ho aur React ka main code likhte ho. Isme:
  - **index.js**: Yeh file tumhari app ko start karti hai.
  - **App.js**: Main component hota hai jo index.js se load hota hai.

---

### 3. **What is JSX?**

- **JSX** ek syntax extension hai jo tumhe HTML ko directly JavaScript ke andar likhne ki ijazat deta hai.
- Yeh JavaScript ka XML jaise syntax hai jo browser mein JavaScript code banata hai.
  
Example:
```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

---

### 4. **Components in React**

React mein **components** do tarah ke hotay hain:

1. **Functional Components:**
   - Simple JavaScript functions hote hain jo JSX return karte hain.

   Example:
   ```jsx
   function Header() {
     return <h1>My Header</h1>;
   }
   ```

2. **Class Components:**
   - JavaScript classes hoti hain jo `render` method ke through JSX return karti hain. **(Note: Functional components ko zyada prefer kiya jata hai aaj kal)**

   Example:
   ```jsx
   class Header extends React.Component {
     render() {
       return <h1>My Header</h1>;
     }
   }
   ```

**Component ka First Letter Capital rakho:**  
- React ko batane ke liye ke yeh ek component hai, tumhe component ka naam **capital letter** se shuru karna hota hai.

**Multiple HTML Tags:**
- Agar ek component ke andar multiple HTML tags likhne ho, toh tumhe un sab ko ek parent element ke andar wrap karna hota hai.

---

### 5. **Props in React**

- **Props** React mein ek mechanism hai jo tumhe **parent component** se **child component** ko data pass karne deta hai.
- Props ko tum **custom attributes** ki tarah likhte ho jo object ke form mein child component tak pochti hain.

Example:
```jsx
function Parent() {
  return <Child name="Shabbir" />;
}

function Child(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Destructuring Props:**
- Tum props ko directly destructure bhi kar sakte ho:

```jsx
function Child({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

---

### 6. **Children Props**

- **Children props** ka use tab hota hai jab tum **component ke andar** kuch content likhna chaho.
- Yeh content **children prop** ke zariye child component tak pochta hai.

Example:
```jsx
function Parent() {
  return (
    <Child>
      <p>This is a child content</p>
    </Child>
  );
}

function Child(props) {
  return <div>{props.children}</div>;
}
```

---

### 7. **Inline Styling in React**

React mein inline styling karte waqt tum **object** ka format use karte ho:

```jsx
const headingStyle = {
  color: 'red',
  backgroundColor: 'yellow',
};

function Header() {
  return <h1 style={headingStyle}>Styled Heading</h1>;
}
```

Ya phir direct bhi kar sakte ho:

```jsx
<h1 style={{ color: 'blue' }}>Inline Styled Heading</h1>
```

---

### 8. **Bootstrap with React**

Bootstrap ko React mein use karne ke liye pehle tumhe **bootstrap package** install karna hota hai:

```bash
npm i bootstrap
```

Phir tum apni **index.js** file mein import karte ho:

```javascript
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
```

---

### 9. **React-Bootstrap**

React-Bootstrap ek library hai jo Bootstrap ko React components ki tarah provide karti hai. Install karne ke liye:

```bash
npm i react-bootstrap
```

Phir tum direct Bootstrap ke React components use kar sakte ho:

```jsx
import { Button } from 'react-bootstrap';

function MyButton() {
  return <Button variant="primary">Click Me</Button>;
}
```

---

### 10. **Handling State in React**

React mein **state** ko handle karne ke liye tum **useState hook** ka use karte ho. State woh data hota hai jo component ke andar rehti hai aur component ke render hone ke process ko control karti hai.

Example:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### 11. **React Project Commands**

- **Project Start karna:**  
  React project ko chalane ke liye terminal mein yeh command run karo:

  ```bash
  npm start
  ```

- **Project Stop karna:**  
  Project ko rokne ke liye **Ctrl + C** press karo.

---

### 12. **What is npm and npx?**

- **npm:**  
  Yeh ek package manager hai jo tumhare project mein **dependencies** ko manage karta hai. 
  Tumhe koi bhi library install karni ho toh `npm install` use karte ho.

- **npx:**  
  Yeh **npm** ke saath aata hai lekin directly commands ko **run** karne ke liye use hota hai bina package ko globally install kiye.

Example:  
```bash
npx create-react-app my-app
```

---

### 13. **Default Export vs Named Export**

- **Default Export:**  
  Is mein ek hi function ya variable ko export kar sakte hain.

  Example:
  ```javascript
  export default function Header() {}
  ```

- **Named Export:**  
  Is mein multiple functions ya variables ko export kar sakte hain.

  Example:
  ```javascript
  export function Header() {}
  export function Footer() {}
  ```

- Importing Default or Named Exports:
  ```javascript
  import Header from './Header'; // Default Export
  import { Header, Footer } from './Components'; // Named Export
  ```

- **Alias Import:**
  Tum **named exports** ka alias bhi bana sakte ho.

  Example:
  ```javascript
  import { myAge as age } from './ageAlias.js';
  ```

---

### 14. **Command to Run index.js File in Node.js**

React ke ilawa agar tum plain Node.js use kar rahe ho, toh **index.js** file ko run karne ke liye:

```bash
node index.js
```

Agar tum real-time changes dekhna chahte ho toh **nodemon** install karo:

```bash
npm install -g nodemon
nodemon index.js
```