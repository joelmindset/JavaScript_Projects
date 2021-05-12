//Math Operators

//add 
function Math_Add() {
    var Add = 4 + 3; // add
    document.getElementById("Math").innerHTML = "Anwser is:" + Add;
}

//sub
function Math_Sub() {
    var Sub = 4 - 3; // sub
    document.getElementById("Math_1").innerHTML = "Anwser is:" + Sub;
}

//multiplication
function Math_Multi() {
    var Mult = 4 * 3; // multiply
    document.getElementById("Math_2").innerHTML = "Anwser is:" + Mult;
}

// Division
function Math_Div() {
    var Div = 4 / 3; // Division
    document.getElementById("Math_3").innerHTML = "Anwser is:" + Div;
}

//Modulus 
function Math_Mod() {
    var Mod = 4 % 3; // Modulus
    document.getElementById("Math_4").innerHTML = "Anwser is:" + Mod;
}

// Math
function Math_Math() {
    var Math = (4 * 3) * 5 + 3 - 4 / 9;
    document.getElementById("Math_5").innerHTML = "Anwser is:" + Math;
}

//negation  
function Math_Opp() {
    var Opp = 4 + 3;
    document.getElementById("Math_6").innerHTML = "Anwser is:" + -Opp; //negation '-'Opp
}

//decrement
var Num1 = 6
Num1--; //decrement
document.write(' 6 Decremnted is: ' + Num1);

//increment
var Num2 = 6
Num2++; //increment
document.write(' | 6 Incremented is: ' + Num2);

//Alert Random Num
window.alert(' | Random number to 1000 is: ' +
    Math.random() * 1000); // Random 0 to 1000

//round
var num3 = 5.65
document.write(' | Rounded 5.65 is: ' + Math.round(num3)); // round