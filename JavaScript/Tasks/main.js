// var getAge = prompt("Enter your age:");

// if (getAge <= 3) {
//     console.log('Infant');
// }
// else if(getAge >= 4 && getAge <= 15){
//     console.log('School Boy');
// }
// else if(getAge >= 16 && getAge <= 26){
//     console.log('Lover');
// }
// else if(getAge >= 27 && getAge <= 35){
//     console.log('Soldier');
// }
// else if(getAge >= 36 && getAge <= 45){
//     console.log('Justice');
// }
// else if(getAge >= 46 && getAge <= 60){
//     console.log('Pantaloon');
// }
// else if(getAge > 60){
//     console.log('Old Age');
// }

// var limcaJuice = prompt('Do you want to drink limca?');
// var finalPrice = 0;

// document.write('<h1><b>Limca Bill Calculation</b></h1>');

// if(limcaJuice.toLowerCase() == 'yes'){
//     var limcaFlav = prompt('What flavour do you want?\nchoclate, stawberry, mango');
//     finalPrice = 300;
//     console.log(finalPrice);
    
//     if (limcaFlav.toLowerCase() == 'choclate') {
//         finalPrice += 40;
//         console.log(finalPrice);

//         document.write('You selected this flavour ', limcaFlav);

//         var limcaGlassSize = prompt('which size do you want?\nlarge, medium, small');
//         if (limcaGlassSize.toLowerCase() == 'large') {
//             finalPrice += 60;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);
//             alert('Your total bill is: ' + finalPrice);
//         }
//         else if (limcaGlassSize.toLowerCase() == 'medium') {
//             finalPrice += 50;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else if (limcaGlassSize.toLowerCase() == 'small') {
//             finalPrice += 40;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else {
//             console.log('wrong command enter');
//         }
//     }
//     else if (limcaFlav.toLowerCase() == 'stawberry') {
//         finalPrice += 50;
//         console.log(finalPrice);

//         document.write('You selected this flavour ', limcaFlav);

//         var limcaGlassSize = prompt('which size do you want?\nlarge, medium, small');
//         if (limcaGlassSize.toLowerCase() == 'large') {
//             finalPrice += 60;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else if (limcaGlassSize.toLowerCase() == 'medium') {
//             finalPrice += 50;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else if (limcaGlassSize.toLowerCase() == 'small') {
//             finalPrice += 40;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else {
//             console.log('wrong command enter');
//         }
//     }
//     else if (limcaFlav.toLowerCase() == 'mango') {
//         finalPrice += 60;
//         console.log(finalPrice);

//         document.write('You selected this flavour ', limcaFlav);

//         var limcaGlassSize = prompt('which size do you want?\nlarge, medium, small');
//         if (limcaGlassSize.toLowerCase() == 'large') {
//             finalPrice += 60;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else if (limcaGlassSize.toLowerCase() == 'medium') {
//             finalPrice += 50;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else if (limcaGlassSize.toLowerCase() == 'small') {
//             finalPrice += 40;
//             console.log(finalPrice);

//             document.write('<br>You selected this Glass Size ', limcaGlassSize);
//             document.write('<br>Your total bill is: ', finalPrice);

//             alert('Your total bill is: '+ finalPrice);
//         }
//         else {
//             console.log('wrong command enter');
//         }
//     }
//     else {
//         console.log('wrong command enter');
//     }
// }
// else {
//     console.log('wrong command enter');
// }

// how to find minimum and maximum values in array without using built-in function?

// var arr = [20,3,33,40, 20, 300, 800, 10, 440, 900, 30, 200, 40];
// var max = 0;
// var secondMax = 0;
// var min = arr[0];
// var secondMin = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//         if(max < arr[i] && secondMax < arr[i]){
//             secondMax = arr[i];
//         }
//     }    
    
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }

// console.log('Maxiumum Value in Array:', max);
// console.log('Second Maxiumum Value in Array:', secondMax);

// console.log('Minimum Value in Array:', min);
// console.log('Second Minimum Value in Array:', secondMin);





//random array ko sort krna hai ascending and descending order me without bui-in function
var randomNum = [300, 20, 34, 50, 100, 700, 400, 350, 10];
var temp;

for (let i = 0; i < randomNum.length; i++) {
    for (let j = 0; j < i; j++) {
        if (i < j) {
            temp = i;
            j=i;
            i=temp;
        }
    }
}

console.log(temp);



// Task 2, 5 subject ka nmae lena hai or unka numbers lena hai or har subject ki individual percntage nklni hai or 

// var subjectCount = Number(prompt("Enter a number of subject you want to make marksheet"));
// var subName = [];
// var subObtainedMarks = [];
// var totalMrks = 100;
// var percntage = [];
// var totalPercentage = 0;

// for (let i = 1; i <= subjectCount; i++) {
//     var getName = prompt(`Enter a subject ${i} name`);
//     subName.push(getName);

//     for (let j = i; j <= i; j++) {
//         var ObtainedMarks = Number(prompt(`Enter a marks of subject ${j}`));
//         subObtainedMarks.push(ObtainedMarks);
//     }
// }

// for (let i = 0; i < subObtainedMarks.length; i++) {
//     var getPercentage = (subObtainedMarks[i] / totalMrks) * 100; 
//     percntage.push(getPercentage);
// }

// for (let i = 0; i < percntage.length; i++) {
//     totalPercentage += percntage[i];
// }

// var finalPercntage = (totalPercentage / (totalMrks * subjectCount)) * 100;

// document.write('<h1>Marksheet<br><br></h1>');
// document.write('Subject Count: ', subjectCount);
// document.write('<br>Total Marks<br>: ', totalMrks);

// for (let i = 0; i < subjectCount; i++) {
//     document.write(`<br>${i+1} subject name is ${subName[i]} <br> `);
//     document.write(`${i+1} subject obtained marks is ${subObtainedMarks[i]} <br>`);
//     document.write(`${i+1} subject percenage is ${percntage[i]} % <br>`);
// }
// document.write('<br>Final Percentage is: ', finalPercntage + "%");

// Task 3 input from user and show pattern

// var rowCount = +prompt('Enter a count for pattern');

// for (let i = 1; i <= rowCount; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '*'
//     }
//     console.log(pattern);
// }

// for (let i = rowCount; i > 0; i--) {
//     let pattern = '';
//     for (let j = 0; j < i; j++) {
//         pattern += '*'
//     }
//     console.log(pattern);
// }