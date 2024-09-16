# Next.js Project Setup and Overview

### 1. **Next.js Environment Setup**

#### Steps:
1. **Node.js install karo:** Next.js ke liye pehle Node.js install karna zaroori hai.
2. **VS Code install karo:** Code likhne ke liye Visual Studio Code ka use karenge.
3. **Create-Next-App use karo:** Next.js ka default starter app banane ke liye terminal mein yeh command run karo:

```bash
npx create-next-app@latest
```

---

### 2. **Project Structure**

**package.json:**
- Yeh file app ki **scripts** aur **dependencies** ko manage karti hai.
- `scripts` mein commands hoti hain jaise:
  - **`dev`**: Development mode mein app chalata hai.
  - **`build`**: Production ke liye app build karta hai.
  - **`start`**: Production mode mein app start karta hai.
  - **`lint`**: Code quality check karta hai.
- **dependencies** mein jo main packages tum use kar rahe ho, woh listed hote hain.

**package-lock.json:**
- Yeh file tumhari **dependencies** ka exact version lock karti hai taake jab doosre log app install karain toh exact wahi versions install hon.

**next.config.js:**
- Yeh Next.js ki configuration file hai. Isme **`reactStrictMode: true`** hota hai, jo development ke dauran runtime errors catch karta hai.

**.gitignore:**
- Git ke liye files ko ignore karne ke liye use hoti hai, jaise **`node_modules`** aur sensitive files.

---

### 3. **Styles Folder**

**global.css:**
- Is file mein tumhari app ki **global styles** hoti hain jo har page par apply hoti hain.

**Home.module.css:**
- Agar kisi specific page ko alag styles deni hoon, toh tum `module.css` file use kar sakte ho. Yeh styles sirf usi page par apply hoti hain.

---

### 4. **Public Folder**
- **Public** folder ke andar tumhare **static assets** hotay hain, jaise images aur files jo tumhare app mein use hoti hain.

---

### 5. **Pages Folder**

**api folder:**
- Next.js ke APIs ko manage karne ke liye **`api` folder** hota hai. Tumhare backend ke endpoints yahan banaye jate hain.

**_app.js:**
- Yeh tumhara **root component** hai jahan tumhare saare pages render hote hain.

**_document.js:**
- Is file mein tumhare **HTML aur body tags** ko customize kiya jata hai.

**index.js:**
- Yeh tumhara **home page** hai jo default route pe load hota hai (`http://localhost:3000/`).

---

### 6. **Code Workflow in Next.js**

1. Sabse pehle, app ko run karne ke liye `npm run dev` command run karo. Isse app development mode mein start hoti hai aur tumhe ek URL milta hai jahan app chalti hai.
2. Jab app run hoti hai, toh ek `.next` folder create hota hai jisme compiled code hota hai.
3. Har new page ka code **_app.js** ke andar **App** component ke through render hota hai.
4. Next.js mein **pre-rendering** hoti hai, jo server-side pe render hoti hai, taake app fast aur SEO-friendly ho.

---

### 7. **Basic Routing in Next.js**

- Next.js mein **file-based routing** hoti hai. Tum jo bhi **page** banao ge, woh automatically route ban jata hai.
- Example: Agar tumne `about.jsx` file banayi hai, toh tum usse access karne ke liye `http://localhost:3000/about` par ja sakte ho.

---

### 8. **Nesting Routes in Next.js**

- Tum Next.js mein **nested routes** bhi bana sakte ho. 
- Example: Tum ek folder banaoge, jaise `services`, aur uske andar multiple pages bana sakte ho, jaise `web-design.jsx` aur `graphic-design.jsx`. 
- URL: `http://localhost:3000/services/web-design`

---

### 9. **Dynamic Routing in Next.js**

- Jab tumhare paas **dynamic content** ho jaise blogs, tum dynamic routing use kar sakte ho.
- File ka naam square brackets mein likho, jaise `[blog_slug].jsx`. 
- **useRouter** hook ka use karke tum URL ka dynamic part access kar sakte ho.

---

### 10. **Nesting Dynamic Routes**

- Tum Next.js mein **dynamic routes** ko nest bhi kar sakte ho.
- Example folder structure:
  ```
  pages/
    blogs/
      [blog_slug]/
        images/
          [image_id].jsx
      index.jsx
  ```

Is structure mein tum ek blog aur uske andar images ko dynamically handle kar sakte ho.

Example URL:
- `http://localhost:3000/blogs/my-first-blog`
- `http://localhost:3000/blogs/my-first-blog/images/123`

---

### 11. **Navigating Routes in Next.js**

Next.js mein navigation ke liye tum **do tareeqe** use kar sakte ho:
1. **Link** (Static Navigation)
2. **Push** (Programmatic Navigation)

#### **Link:**
- Sabse pehle tum `_app.js` file mein **Navigation** component banao.
- Is component mein **next/link** ka use karke anchor tags ko **Link** component se replace karo.

```javascript
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/blogs">Blog</Link>
      <Link href="/services">Services</Link>
    </nav>
  );
}
```

Agar tumhe **replace** karna ho, taake browser back button se user wapas na ja sake, toh tum `Link` ke saath **replace** prop use kar sakte ho.

```javascript
<Link href="/" replace>Home</Link>
```

#### **Push:**
- Programmatically navigation ke liye **useRouter** ka `push` method use hota hai.

```javascript
import { useRouter } from 'next/router';

function NavigateWithPush() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return <button onClick={goToHome}>Go to Home</button>;
}
```

Agar tumhe **replace** option ke saath `push` use karna ho, toh tum is tarah se karoge:

```javascript
router.push('/', undefined, { replace: true });
```