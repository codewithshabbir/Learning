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

var limcaJuice = prompt('Do you want to drink limca?');
var finalPrice = 0;

document.write('<h1><b>Limca Bill Calculation</b></h1>');

if(limcaJuice.toLowerCase() == 'yes'){
    var limcaFlav = prompt('What flavour do you want?\nchoclate, stawberry, mango');
    finalPrice = 300;
    console.log(finalPrice);
    
    if (limcaFlav.toLowerCase() == 'choclate') {
        finalPrice += 40;
        console.log(finalPrice);

        document.write('You selected this flavour ', limcaFlav);

        var limcaGlassSize = prompt('which size do you want?\nlarge, medium, small');
        if (limcaGlassSize.toLowerCase() == 'large') {
            finalPrice += 60;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);
            alert('Your total bill is: ' + finalPrice);
        }
        else if (limcaGlassSize.toLowerCase() == 'medium') {
            finalPrice += 50;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else if (limcaGlassSize.toLowerCase() == 'small') {
            finalPrice += 40;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else {
            console.log('wrong command enter');
        }
    }
    else if (limcaFlav.toLowerCase() == 'stawberry') {
        finalPrice += 50;
        console.log(finalPrice);

        document.write('You selected this flavour ', limcaFlav);

        var limcaGlassSize = prompt('which size do you want?\nlarge, medium, small');
        if (limcaGlassSize.toLowerCase() == 'large') {
            finalPrice += 60;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else if (limcaGlassSize.toLowerCase() == 'medium') {
            finalPrice += 50;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else if (limcaGlassSize.toLowerCase() == 'small') {
            finalPrice += 40;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else {
            console.log('wrong command enter');
        }
    }
    else if (limcaFlav.toLowerCase() == 'mango') {
        finalPrice += 60;
        console.log(finalPrice);

        document.write('You selected this flavour ', limcaFlav);

        var limcaGlassSize = prompt('which size do you want?\nlarge, medium, small');
        if (limcaGlassSize.toLowerCase() == 'large') {
            finalPrice += 60;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else if (limcaGlassSize.toLowerCase() == 'medium') {
            finalPrice += 50;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else if (limcaGlassSize.toLowerCase() == 'small') {
            finalPrice += 40;
            console.log(finalPrice);

            document.write('<br>You selected this Glass Size ', limcaGlassSize);
            document.write('<br>Your total bill is: ', finalPrice);

            alert('Your total bill is: '+ finalPrice);
        }
        else {
            console.log('wrong command enter');
        }
    }
    else {
        console.log('wrong command enter');
    }
}
else {
    console.log('wrong command enter');
}