## HTML5 Complete Tags Cheatsheet: 84 Essential Tags with Attributes
Yeh cheatsheet HTML5 ke tamam 84 tags aur unke attributes ki tafseelat pesh karti hai. Iska maqsad un logon ko knowledge aur quick review faraham karna hai jo English nahi samajhte. Har tag ki explanation Roman Urdu mein hai, taake aap asani se samajh saken aur apne web development skills ko behtar bana saken.

### 1. **`<!DOCTYPE>`**
**Istemaal**: HTML document ka declaration jo browser ko batata hai ke yeh HTML5 document hai. Iska koi attribute nahi hota.

**Example**:
```html
<!DOCTYPE html>
```

### 2. **`<html>`**
**Istemaal**: Yeh tag document ka root element hota hai, is mein saari HTML content hoti hai. Iska common attribute **lang** hai jo page ki language set karta hai.

**Attributes**:
- `lang`: Page ki language define karta hai. Jaise `lang="en"` English ke liye.

**Example**:
```html
<html lang="en"></html>
```

### 3. **`<head>`**
**Istemaal**: Document ke head section mein meta information hoti hai, jaise title, links, scripts, etc. Iska koi specific attribute nahi hota.

**Example**:
```html
<head></head>
```

### 4. **`<title>`**
**Istemaal**: Page ka title set karta hai jo browser tab mein dikhai deta hai.

**Example**:
```html
<title>Meri Website</title>
```

### 5. **`<meta>`**
**Istemaal**: Document ke meta information ko define karta hai. Iske different attributes hotay hain.

**Attributes**:
- `charset`: Page ka character encoding define karta hai. Example: `charset="UTF-8"`.
- `name`: Meta information ka naam set karta hai. Example: `name="viewport"`.
- `content`: Meta information ki value set karta hai. Example: `content="width=device-width, initial-scale=1.0"`.

**Example**:
```html
<meta charset="UTF-8">
<meta name="description" content="Yeh aik website hai.">
```

### 6. **`<link>`**
**Istemaal**: External resources (CSS files) ko page ke sath link karta hai.

**Attributes**:
- `rel`: Relationship define karta hai. Example: `rel="stylesheet"`.
- `href`: External resource ka URL. Example: `href="style.css"`.

**Example**:
```html
<link rel="stylesheet" href="style.css">
```

### 7. **`<style>`**
**Istemaal**: Page ke andar CSS likhne ke liye use hota hai.

**Example**:
```html
<style>
  body { background-color: lightblue; }
</style>
```

### 8. **`<body>`**
**Istemaal**: Document ka main visible content is tag mein hota hai.

**Example**:
```html
<body></body>
```

### 9. **`<header>`**
**Istemaal**: Page ya section ke liye header banata hai.

**Example**:
```html
<header>Yeh header hai</header>
```

### 10. **`<footer>`**
**Istemaal**: Page ya section ke liye footer banata hai.

**Example**:
```html
<footer>Yeh footer hai</footer>
```

### 11. **`<nav>`**
**Istemaal**: Navigation links ka section banane ke liye.

**Example**:
```html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
```

### 12. **`<main>`**
**Istemaal**: Page ka main content yahan hota hai.

**Example**:
```html
<main>
  <h1>Yeh main content hai</h1>
</main>
```

### 13. **`<section>`**
**Istemaal**: Web page ke section ko define karta hai.

**Example**:
```html
<section>
  <h2>Section Heading</h2>
  <p>Section ka content</p>
</section>
```

### 14. **`<article>`**
**Istemaal**: Independent content ya articles banane ke liye.

**Example**:
```html
<article>
  <h2>Article Title</h2>
  <p>Article content</p>
</article>
```

### 15. **`<aside>`**
**Istemaal**: Additional content, jaise sidebar ke liye.

**Example**:
```html
<aside>
  <p>Yeh sidebar ka content hai.</p>
</aside>
```

### 16. **`<h1>` se `<h6>`**
**Istemaal**: Headings banane ke liye. `h1` sabse bara heading aur `h6` sabse chhota heading hota hai.

**Example**:
```html
<h1>Main Heading</h1>
<h6>Small Heading</h6>
```

### 17. **`<p>`**
**Istemaal**: Paragraph banane ke liye.

**Example**:
```html
<p>Yeh aik paragraph hai.</p>
```

### 18. **`<a>`**
**Istemaal**: Hyperlinks banane ke liye.

**Attributes**:
- `href`: Link ka address set karta hai.
- `target`: Define karta hai ke link kaise open hoga. Example: `target="_blank"`.

**Example**:
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

### 19. **`<img>`**
**Istemaal**: Image insert karne ke liye.

**Attributes**:
- `src`: Image ka source (URL).
- `alt`: Alternate text jab image load na ho.
- `width` aur `height`: Image ka size define karta hai.

**Example**:
```html
<img src="image.jpg" alt="Yeh aik image hai" width="300" height="200">
```

### 20. **`<ul>` aur `<ol>`**
**Istemaal**: `ul` unordered list banata hai (bulleted list) aur `ol` ordered list banata hai (numbered list).

**Example**:
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

### 21. **`<li>`**
**Istemaal**: List ke items banane ke liye.

**Example**:
```html
<li>Item 1</li>
```

### 22. **`<div>`**
**Istemaal**: Block-level container banane ke liye.

**Example**:
```html
<div>Yeh aik div hai</div>
```

### 23. **`<span>`**
**Istemaal**: Inline container banane ke liye.

**Example**:
```html
<span>Yeh aik span hai</span>
```

### 24. **`<form>`**
**Istemaal**: User input collect karne ke liye forms banata hai.

**Attributes**:
- `action`: Form ko submit karne ka URL set karta hai.
- `method`: Form ko submit karne ka method define karta hai, jaise `GET` ya `POST`.

**Example**:
```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>
```

### 25. **`<input>`**
**Istemaal**: User se data input lene ke liye.

**Attributes**:
- `type`: Input ka type define karta hai, jaise `text`, `password`, `email`, `submit`.
- `name`: Input field ka naam define karta hai.
- `placeholder`: Placeholder text define karta hai jo input field ke andar show hota hai.
- `value`: Input ki default value define karta hai.
- `required`: Field ko required banata hai.

**Example**:
```html
<input type="text" name="username" placeholder="Enter Username" required>
```

### 26. **`<label>`**
**Istemaal**: Input field ke liye label banata hai. `for` attribute ka use input field se link karne ke liye hota hai.

**Example**:
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

### 27. **`<textarea>`**
**Istemaal**: Multi-line text input field banane ke liye.

**Attributes**:
- `rows` aur `cols`: Textarea ke size ko set karta hai (rows aur columns mein).
- `placeholder`: Placeholder text define karta hai.

**Example**:
```html
<textarea rows="4" cols="50" placeholder="Yahan apna message likhein"></textarea>
```

### 28. **`<button>`**
**Istemaal**: Button banane ke liye.

**Attributes**:
- `type`: Button ka type define karta hai, jaise `submit`, `button`, ya `reset`.

**Example**:
```html
<button type="submit">Submit</button>
```

### 29. **`<select>` aur `<option>`**
**Istemaal**: Dropdown list banane ke liye.

**Attributes (Select)**:
- `name`: Dropdown ka naam set karta hai.
- `multiple`: Multiple options ko select karne ki permission deta hai.

**Attributes (Option)**:
- `value`: Option ki value set karta hai.

**Example**:
```html
<select name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>
```

### 30. **`<table>`**
**Istemaal**: Table banane ke liye.

**Example**:
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>25</td>
  </tr>
</table>
```

### 31. **`<tr>`, `<td>`, aur `<th>`**
- **`<tr>`**: Table row banane ke liye.
- **`<td>`**: Table data (cell) banane ke liye.
- **`<th>`**: Table header cell banane ke liye.

**Example**:
```html
<tr>
  <th>Name</th>
  <td>Ali</td>
</tr>
```

### 32. **`<audio>`**
**Istemaal**: Audio file embed karne ke liye.

**Attributes**:
- `controls`: Audio ke liye controls show karta hai.
- `src`: Audio file ka source (URL).
  
**Example**:
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### 33. **`<video>`**
**Istemaal**: Video file embed karne ke liye.

**Attributes**:
- `controls`: Video ke controls show karta hai.
- `width` aur `height`: Video ka size set karta hai.
- `src`: Video ka source (URL).

**Example**:
```html
<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

### 34. **`<iframe>`**
**Istemaal**: Dusre web page ko embed karne ke liye.

**Attributes**:
- `src`: Iframe ka source URL.
- `width` aur `height`: Iframe ka size set karta hai.

**Example**:
```html
<iframe src="https://example.com" width="600" height="400"></iframe>
```

### 35. **`<script>`**
**Istemaal**: JavaScript code ya external file ko embed karne ke liye.

**Attributes**:
- `src`: External JavaScript file ka URL.

**Example**:
```html
<script src="script.js"></script>
<script>
  console.log('Hello, World!');
</script>
```

### 36. **`<noscript>`**
**Istemaal**: Jab JavaScript disabled ho, tab alternate content show karta hai.

**Example**:
```html
<noscript>
  JavaScript is disabled in your browser.
</noscript>
```

### 37. **`<progress>`**
**Istemaal**: Task ke progress ko show karne ke liye.

**Attributes**:
- `value`: Current progress value.
- `max`: Maximum progress value.

**Example**:
```html
<progress value="70" max="100">70%</progress>
```

### 38. **`<meter>`**
**Istemaal**: Measured value ko show karne ke liye, jaise battery level.

**Attributes**:
- `min`: Minimum value.
- `max`: Maximum value.
- `value`: Current value.

**Example**:
```html
<meter value="0.6" min="0" max="1">60%</meter>
```

### 39. **`<details>` aur `<summary>`**
**Istemaal**: Expandable content banane ke liye.

**Example**:
```html
<details>
  <summary>More Information</summary>
  <p>Yeh aik extra information hai jo expand hone pe dikhai deti hai.</p>
</details>
```
### 40. **`<mark>`**
**Istemaal**: Text ko highlight karne ke liye.

**Example**:
```html
<p>This is <mark>important</mark> text.</p>
```

### 41. **`<fieldset>`**
**Istemaal**: Form fields ko group karne ke liye.

**Attributes**:
- `disabled`: Pura fieldset ko disable karta hai.

**Example**:
```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last Name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>
```

### 42. **`<legend>`**
**Istemaal**: `fieldset` ke liye title provide karta hai.

**Example**:
```html
<fieldset>
  <legend>Account Details</legend>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</fieldset>
```

### 43. **`<datalist>`**
**Istemaal**: Predefined options provide karne ke liye jo input field ke saath use hote hain.

**Example**:
```html
<input list="browsers" name="browser" id="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
  <option value="Safari">
</datalist>
```

### 44. **`<optgroup>`**
**Istemaal**: Dropdown menu mein option groups banane ke liye.

**Example**:
```html
<select>
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="broccoli">Broccoli</option>
  </optgroup>
</select>
```

### 45. **`<output>`**
**Istemaal**: Calculation ya form results show karne ke liye.

**Example**:
```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50"> +
  <input type="number" id="b" value="25">
  = <output name="result" for="a b">75</output>
</form>
```

### 46. **`<abbr>`**
**Istemaal**: Acronym ya abbreviation ke liye.

**Example**:
```html
<p>The abbreviation for Hypertext Markup Language is <abbr title="Hypertext Markup Language">HTML</abbr>.</p>
```

### 47. **`<cite>`**
**Istemaal**: Work ka reference ya citation dene ke liye.

**Example**:
```html
<p><cite>The Great Gatsby</cite> is a novel by F. Scott Fitzgerald.</p>
```

### 48. **`<bdo>` (Bi-Directional Override)**
**Istemaal**: Text direction ko override karne ke liye.

**Attributes**:
- `dir`: Text direction set karta hai, jaise `rtl` (right-to-left) ya `ltr` (left-to-right).

**Example**:
```html
<bdo dir="rtl">This text will be displayed right-to-left.</bdo>
```

### 49. **`<time>`**
**Istemaal**: Specific time ya date ko represent karne ke liye.

**Attributes**:
- `datetime`: Machine-readable format mein date ya time set karta hai.

**Example**:
```html
<time datetime="2024-01-01">January 1, 2024</time>
```

### 50. **`<address>`**
**Istemaal**: Contact information ko show karne ke liye.

**Example**:
```html
<address>
  Contact us at: <br>
  123 Street Name, City, Country <br>
  <a href="mailto:info@example.com">info@example.com</a>
</address>
```

### 51. **`<b>`**
**Istemaal**: Text ko bold banane ke liye (without adding emphasis).

**Example**:
```html
<p>This is <b>bold</b> text.</p>
```

### 52. **`<i>`**
**Istemaal**: Text ko italicize karne ke liye (without adding emphasis).

**Example**:
```html
<p>This is <i>italicized</i> text.</p>
```

### 53. **`<small>`**
**Istemaal**: Text ko chhota karne ke liye, jaise disclaimer ya fine print ke liye.

**Example**:
```html
<p>This is a <small>small</small> text.</p>
```

### 54. **`<strong>`**
**Istemaal**: Important ya emphasized text ko represent karne ke liye (usually bold hota hai).

**Example**:
```html
<p>This is <strong>important</strong> text.</p>
```

### 55. **`<em>`**
**Istemaal**: Text ko emphasize karne ke liye (usually italicized hota hai).

**Example**:
```html
<p>This is an <em>emphasized</em> text.</p>
```

### 56. **`<code>`**
**Istemaal**: Inline code ko show karne ke liye.

**Example**:
```html
<p>Use the <code>&lt;code&gt;</code> tag to display code.</p>
```

### 57. **`<pre>`**
**Istemaal**: Preformatted text ko show karne ke liye (spaces aur line breaks ko preserve karta hai).

**Example**:
```html
<pre>
  This is
  preformatted
  text.
</pre>
```

### 58. **`<samp>`**
**Istemaal**: Program ka output ya sample text show karne ke liye.

**Example**:
```html
<p>The program returned <samp>Error 404</samp>.</p>
```

### 59. **`<kbd>`**
**Istemaal**: Keyboard input ko represent karne ke liye.

**Example**:
```html
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
```

### 60. **`<var>`**
**Istemaal**: Variable ko represent karne ke liye.

**Example**:
```html
<p>The variable <var>x</var> equals 5.</p>
```

### 61. **`<mark>`**
**Istemaal**: Highlighted ya marked text ko show karne ke liye.

**Example**:
```html
<p>This is <mark>highlighted</mark> text.</p>
```

### 62. **`<sub>`**
**Istemaal**: Text ko subscript mein show karne ke liye, jaise chemical formulas mein.

**Example**:
```html
<p>Water's chemical formula is H<sub>2</sub>O.</p>
```

### 63. **`<sup>`**
**Istemaal**: Text ko superscript mein show karne ke liye, jaise powers ya footnotes ke liye.

**Example**:
```html
<p>5<sup>2</sup> equals 25.</p>
```

### 64. **`<ins>`**
**Istemaal**: Document mein inserted text ko represent karne ke liye (usually underline hota hai).

**Example**:
```html
<p>This is an <ins>inserted</ins> word in the sentence.</p>
```

### 65. **`<del>`**
**Istemaal**: Document mein deleted text ko represent karne ke liye (usually strikethrough hota hai).

**Example**:
```html
<p>This is a <del>deleted</del> word in the sentence.</p>
```

### 66. **`<q>`**
**Istemaal**: Inline quotation ke liye.

**Example**:
```html
<p>He said, <q>This is a quoted text.</q></p>
```

### 67. **`<blockquote>`**
**Istemaal**: Block-level quotation ke liye.

**Example**:
```html
<blockquote>
  This is a block-level quote that can span multiple lines.
</blockquote>
```

### 68. **`<dfn>`**
**Istemaal**: Term ko define karne ke liye.

**Example**:
```html
<p><dfn>HTML</dfn> stands for Hypertext Markup Language.</p>
```

### 69. **`<progress>`**
**Istemaal**: Task ki progress ko represent karne ke liye.

**Attributes**:
- `value`: Current progress.
- `max`: Maximum value.

**Example**:
```html
<progress value="70" max="100">70%</progress>
```

### 70. **`<meter>`**
**Istemaal**: Scalar measurements ko represent karne ke liye, jaise disk usage ya temperature.

**Attributes**:
- `min`, `max`: Value range ko define karta hai.
- `value`: Current value ko set karta hai.

**Example**:
```html
<meter value="0.6" min="0" max="1">60%</meter>
```

### 71. **`<wbr>`**
**Istemaal**: Word break opportunity provide karta hai, jahan browser ko line break karne ka option diya jata hai.

**Example**:
```html
<p>Superlongword<wbr>thatcouldbebroken.</p>
```

### 72. **`<bdi>`**
**Istemaal**: Text ko bi-directional isolation mein rakhta hai, jisme text ki direction independent hoti hai surrounding content se.

**Example**:
```html
<p>User <bdi>محمد</bdi> logged in.</p>
```

### 73. **`<details>`**
**Istemaal**: Collapsible content ko create karta hai jo user ke click par reveal hota hai.

**Example**:
```html
<details>
  <summary>More Information</summary>
  <p>This is the detailed content that can be hidden or shown.</p>
</details>
```

### 74. **`<summary>`**
**Istemaal**: `<details>` element ke liye clickable summary define karta hai.

**Example**:
```html
<details>
  <summary>Click to expand</summary>
  <p>This text is revealed upon clicking the summary.</p>
</details>
```

### 75. **`<figure>`**
**Istemaal**: Self-contained content, usually images or illustrations, ko represent karta hai.

**Example**:
```html
<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Caption for the image.</figcaption>
</figure>
```

### 76. **`<figcaption>`**
**Istemaal**: `<figure>` ke content ke liye caption provide karta hai.

**Example**:
```html
<figure>
  <img src="mountains.jpg" alt="Mountains">
  <figcaption>A beautiful mountain view.</figcaption>
</figure>
```

### 77. **`<nav>`**
**Istemaal**: Navigation links ko define karta hai.

**Example**:
```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

### 78. **`<article>`**
**Istemaal**: Independent, self-contained content ko represent karta hai, jaise blog post ya news article.

**Example**:
```html
<article>
  <h2>Blog Post Title</h2>
  <p>This is the content of the blog post.</p>
</article>
```

### 79. **`<aside>`**
**Istemaal**: Page ke main content se related additional information ko represent karta hai, jaise sidebar ya pull quotes.

**Example**:
```html
<aside>
  <p>This is a side note or related content.</p>
</aside>
```

### 80. **`<section>`**
**Istemaal**: Document ka logical section create karta hai, jaise chapters ya different topics ke parts.

**Example**:
```html
<section>
  <h2>Introduction</h2>
  <p>This is the introductory section of the document.</p>
</section>
```

### 81. **`<dialog>`**
**Istemaal**: Modal dialog box ya interactive popup ko represent karta hai.

**Example**:
```html
<dialog open>
  <p>This is a dialog box.</p>
  <button>Close</button>
</dialog>
```

### 82. **`<picture>`**
**Istemaal**: Multiple versions of images ko support karne ke liye, jo screen size ya resolution ke hisaab se change hoti hain.

**Example**:
```html
<picture>
  <source srcset="image-large.jpg" media="(min-width: 800px)">
  <img src="image-small.jpg" alt="A responsive image">
</picture>
```

### 83. **`<map>`**
**Istemaal**: Image ke liye clickable areas ko define karta hai.

**Example**:
```html
<img src="planets.jpg" usemap="#planetmap">
<map name="planetmap">
  <area shape="rect" coords="34,44,270,350" alt="Mercury" href="mercury.html">
  <area shape="circle" coords="337,300,44" alt="Venus" href="venus.html">
</map>
```

### 84. **`<area>`**
**Istemaal**: <map> element ke andar clickable areas ko define karta hai.

**Example**:
```html
<img src="planets.jpg" usemap="#planetmap">
<map name="planetmap">
  <area shape="rect" coords="34,44,270,350" alt="Mercury" href="mercury.html">
</map>
```
## 🌟 Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues with the HTML5 Complete Tags Cheatsheet, please feel free to create a pull request or open an issue on the GitHub repository. Your feedback helps us enhance this resource for everyone!

## 📝 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this work as per the terms of the license.

## 👨‍💻 Author

- **Muhammad Shabbir**  
  - [GitHub](https://github.com/codewithshabbir)
  - [LinkedIn](https://www.linkedin.com/in/codewithshabbir)
  - [CodePen](https://codepen.io/codewithshabbir)
  - [Instagram](https://www.instagram.com/codewithshabbir)
  - [Facebook](https://www.facebook.com/codewithshabbir)

## 📞 Contact

For any inquiries or feedback, feel free to reach out at:
- **Email**: [muhammadshabbir4589@gmail.com](mailto:muhammadshabbir4589@gmail.com)

## 📢 Hashtags

Sure! Here are the hashtags space-separated:

#HTML5 #Cheatsheet #WebDevelopment #WebDesign #FrontendDevelopment #HTMLTags #Coding #Programming #WebStandards #OpenSource #LearnToCode #WebDesignTips #TechTutorial #ResponsiveDesign #JavaScript #CSS #WebAccessibility #DeveloperCommunity #CodingLife #SoftwareEngineering