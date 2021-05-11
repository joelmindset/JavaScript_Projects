// basic js
document.write(" Hello, World!");
var A1 = " This is a string.";
document.write(A1);
window.alert(A1); //alert window
document.write(" Checking, \"if this work's\" look's like it."); // using " in code
document.write(" Here is a \"string\" 1" + " here is 2" + "3" + " and 4."); // making a string
var B2 = " part 1" + " part 2. ";
document.write(B2)
    // making a family
var Numbers = "Alpha",
    A = "1", //not a int
    B = "2",
    C = "3",
    D = "4",
    E = 5; //add int
F = 6;

document.write(E + F); // does math
document.write(' ')
    // assigning the color
var A = A.fontcolor("blue")
var B = B.fontcolor("red")
var C = C.fontcolor("green")
var D = D.fontcolor("orange")
document.write(A + B) // does no math but prints string "12"
document.write(' ')
    // expression
document.write(15 + 15) // does math    
document.write(" 15 + 15") // prints out 15 + 15 no math
    //Function
function My_First_Function() { // define fuction and name it
    var str = "Here is my text!"; // giving the fuction a string variable
    var result = str.fontcolor("Blue"); // adding color blue to font
    document.getElementById("Blue_Text").innerHTML = result;
}