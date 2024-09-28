function printBoth(x, y, z) {
    console.log(x + y)
    document.getElementById(z).innerHTML =
    x + y; 
}

function checkNumber() {
    let number =  prompt("Please enter a number");
    if (number > 0) {
        printBoth(number, " is more than zero", "steptwo");
    } else if (number < 0) {
        printBoth(number, " is less than zero", "steptwo");
    } else {
        printBoth(number, " is zero", "steptwo");
    }
}

function tellDay() {
    let day = prompt("Please enter a number between 1-7");
    i = parseInt(day);
    switch (i) {
        case 1:
            printBoth(i, " is Sunday", "stepthree"); 
            break;
        case 2:
            printBoth(i, " is Monday", "stepthree"); 
            break;
        case 3:
            printBoth(i, " is Tuesday", "stepthree"); 
            break;
        case 4:
            printBoth(i, " is Wednesday", "stepthree"); 
            break;
        case 5:
            printBoth(i, " is Thursday", "stepthree");  
            break;
        case 6:
            printBoth(i, " is Friday", "stepthree");  
            break;
        case 7:
            printBoth(i, " is Saturday", "stepthree"); 
            break;
        default:
            printBoth(i, " is not a number between 1-7. Try again.", "stepthree"); 
     }
} 

function forFive(){
    for (let j = 1; j <= 5; j++) {
        console.log(j);
    }
    console.log("End of for loop example");
    document.getElementById("stepfour1").innerHTML = "Printed in console"; 
}

function whileFive(){
    let k = 1;
    while (k <= 5) {
        console.log(k);
        k++;
    }
    console.log("End of while loop example");
    document.getElementById("stepfour2").innerHTML = "Printed in console"; 
}

function doFive(){
    let m = 1;
    do {
        console.log(m);
        m++;
    } while (m <= 5);
    console.log("End of do while loop example");
    document.getElementById("stepfour3").innerHTML = "Printed in console"; 
}

function breakFive(){
    for (let n = 1; n <= 5; n++) {
        console.log(n);
        if (n === 3){
            break;
        }
    }
    console.log("End of break example using a for loop");
    document.getElementById("stepfive1").innerHTML = "Printed in console"; 
}

function continueFive(){
    let p = 0;
    while (p <= 4) {
        p++;
        if (p === 3) { 
            continue;
        }
        console.log(p);
    }
    console.log("End of continue exaple using a while loop");
    document.getElementById("stepfive2").innerHTML = "Printed in console"; 
}

let globalVar = "I'm global.";
 
function showScope() {
    let localVar = "I'm local.";
    printBoth(localVar, " Local variable, success!", "stepsix1");
    printBoth(globalVar, " Global variable, success!", "stepsix2");
}