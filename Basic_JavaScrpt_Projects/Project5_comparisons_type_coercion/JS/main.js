function hello() { //making a function to display in type of
    document.getElementById("getter").innerHTML = "Hello"
}

var Ret = 1 > 2

//Data type
document.write(typeof "word" + '<br>' + typeof 3 + '<br>' + typeof Ret + '<br>' + typeof(hello) + '<br>' + typeof whatami + '<br>' + typeof null);

//NaN "Not a Number"
function fucte() {
    document.getElementById("test").innerHTML = 0 / 0;
}

//Check Nan
document.write('<br>' + isNaN("word") + '<br>' + isNaN(23));

//infinity numbers
function pos() {
    document.getElementById("pos_in").innerHTML = '<br>' + 22E32343;
}

function neg() {
    document.getElementById("neg_in").innerHTML = '<br>' + -32E3222;
}
//boolean
document.write('<br>' + (15 < 7));
document.write('<br>' + (15 > 7));

// console.log
console.log(15 + 15);
console.log(1 < 0);

// == checking comparison of data boolean T or F
document.write('<br>' + (2 == 2));
document.write('<br>' + (1 == 2));

var A = 15
var B = 15
var C = false
var D = "15"
var E = true

//=== checking the value of data 
document.write('<br>' + (A === B));
document.write('<br>' + (C === B));
document.write('<br>' + (D === B));
document.write('<br>' + (E === B));

// and, or operators
document.write('<br>' + (2 > 1 && 10 > 5)); //and operator
document.write('<br>' + (2 < 1 && 10 > 5));
document.write('<br>' + (2 > 1 || 4 > 5)); //or operator
document.write('<br>' + (2 < 1 || 10 < 5));

// ! or not operators
document.write('<br>' + !(2 < 1));
document.write('<br>' + !(2 > 1));