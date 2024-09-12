//1, word vs keyword

// mamu     this is a word not keyword.
// while    this is a keyword not simple word.

// 2, Declaration & Initialization

var num;    //ya declaration hoti hai
num = 20;   //issa initialization kehta hain

//3, var, const

// var  data store krna ka lia use hota hai or isma hum value re-asign kr skte hain.
// conts    data store krna ka lia use hota hai or isma hum value re-asign nh kr skte,
// iski value constant rehti hai.

// Example
var num1 = 45;
num1 = 55;   //re-assing i mean re-initialize
console.log(num1); // print: 45

const num2 = 44;
// num2 = 54;
console.log(num2);  //type error assingment to constant variable. hum contant variable ka andar dubara initialize nh kr skte.
// ya zyada tar jhah pa hame koi cheez contant rkhni hoti hai whah use hota hai jesa ka PI ki value.

//4, Hoisting

// javascript me jo variables and functions hote hain wo hoisted hote hain iska mtlb ya hai,
// jab hum koi variable ya function ko declare krte hain tu wo apki file ka top par challa jata hai

// Example
console.log(num3); //undefined
//yhah hoisted apply ho rh hai hum nw aik variable declare kia or usko initializr kia.
// or jab hum variable ko declare krte hain tu wo page ka top pa chala jata hai but uska andar jo value
// initialize ya assign ki hoti hai wo nh jati ishi lia hame undefined milta hai.

var num3 = 100;

//5, types in javascript

// javascript me mainly two types hote hain.
// a, Primitive.    number, string, null, undefined, boolean
// b, refrence      [], {}, ()      jhah bh brakcet a jaye wo refrence hota hai
// aesi koi bh value jisko copy krna par real copy nh hota, blka us main value ka refrence pass ho jata hai,
// usse hum refrence value kehta hain or jiska copy krna par real copy ho jaye wo premittive type value hota hai.

// Example
var ab = 3;
var bc = ab;

bc = bc + 2;    //ya premitive type hai agar me ab ki value ko copy krka change krnga bc me tu srf bc ki value change ho g,
// because ya aik premitive type hai or premitive type ka pass khd ki copy hoti hai kisi or ko refrence nh krta.

console.log(ab);
console.log(bc);


var a = [1,2,3,4,5];
var b = a;
b.pop();    //ya aik refrence type hai is lia agr me b me koi change krta houn tu wo a me bh change ho jaye ga,
// becuase iska pass apni real copy nh hoti ya refrence krta hai.

console.log(b);
console.log(a);

// 6, Conditionals - if else, else if, else

// if()     brackets ka andar bx srf 2 cheezain ayengi true or false but direct true false nh likhta
//  uski jghah aesi statement ya expression pass krte hain jo convert ho ka true ya phr false ban jaye.

// Example
// if(5 < 6)    true
// if(2 > 6)    false

// 7, loops     for, while

// 8, functions     function ka matlab hai hum apna kch code ko likh kar usko name da dein or baad me usko
// use kar saken jitni bar hum chahe.

// functions mainly 3 kam ka lia hote hain.
// a, jab hum apna code foran nh chalana chahte hain blka future me chalana chahte hain.
// b, jab hum apna code ko reused krna chahte hain.
// c, jab hum apna code ko different data ka sath reused krna chahte hain.

// differnce btw arguements and parameters
// arguements = real value jo hum deta hain function chlate wqt.
// parameters = variables jisme data store hota hai arguements wala.

// example

function sum(num1, num2){   //parameters
    num = num1 + num2;
    console.log(num);
}

sum(2,2)    //arguments


// 9, arrays    hum aik variable me aik variable store karte hain but hame aik variable me aik sa zyada
// valuse store krni ho tu uska lia hum array bnate hain or wo [] is brackets me atta hain or array ko hum
// index sa target karte hain jo 0 sa start hota hai.

// array = group of values

// example

var arr = [1,2,3,4,5,6,7,8,9]

console.log(arr);

// push, pop, shift, unshift

arr.push(10);

console.log(arr);

