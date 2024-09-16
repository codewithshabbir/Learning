import sum from "./sum.js";
import { myName } from "./name.js";
import { subArrow, subFunc } from "./subtract.js";
import { myAge as age } from "./ageAlias.js"; //alias import



console.log("My name is", myName);
console.log(`I am ${age} years old`);  //backtick
console.log(sum(10,20));
console.log(subArrow(30,20));
console.log(subFunc(20,20));