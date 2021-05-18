//Loop
function Call_Loop() {
    var Loop = "";
    var counter = 0;
    while (counter <= 20) { // loop 21 times
        Loop += "<br> " + counter;
        counter++;
    }
    document.getElementById("Loop").innerHTML = Loop;
}
//break statement
function Break() {
    var text = "";
    var counter;
    for (counter = 0; counter < 20; counter++) {
        if (counter === 11) { break; }
        text += "count " + counter + "<br>";
    }

    document.getElementById("break").innerHTML = text;
}

//String
function Call_String() {
    var String = "How big am i ?";
    var howBig = String.length;
    document.getElementById("String").innerHTML = howBig;
}
// Instruments
var Instruments = ["Violin", "Cello", "Double Bass", "Flute", "Clarinet", "Saxophone", "Trumpet", "Guitar", "Piano", "Harp"];
//let example
{
    let Instruments = "temporary use of data." // { let } scopes block 
    document.write(Instruments)
}
//for loop
var Item = "";
var Give;

function for_loop() {
    for (Give = 0; Give < Instruments.length; Give++) {
        Item += Instruments[Give] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Item;
}
//Array
function array_Function() {
    var cars = [" Ford", " BMW", " Toyota", " Honda"];
    document.getElementById("Array").innerHTML = cars;
}

//constant
function constant_Function() {
    const popularGames = {
        First: " Minecraft.",
        Second: " Super Smash Bros. Ultimate.",
        Third: " Spider-Man.",
        Fourth: " Grand Theft Auto V.",
        Fifth: " Red Dead Redemption II.",
        Sixth: " Fortnite.",
        Seventh: " Rocket League.",
        Eighth: " Call of Duty: Black Ops IIII."
    };
    popularGames.Eighth = " Super Smash Bros. Ultimate."; // change property's value
    popularGames.Ninth = " World of Warcraft." // Add a property value
    document.getElementById("Constant").innerHTML = popularGames.First + popularGames.Eighth + popularGames.Ninth;
}

//lets multiply some numbers
//call button
function callx() {
    document.getElementById("answerMulti").innerHTML = "= " + multi(document.getElementById("Num1").value, document.getElementById("Num2").value);
}

function multi(a, b) {
    return a * b;
}

let websites = {
    Domain: "Google ",
    VisitsMarch: "18.24B ",
    PagesVisited: "7 pages",
    avgDuration: "24mins ",
    infoMarch: function() {
        return " Website " + this.Domain + " this march " +
            this.VisitsMarch + " visited. " + this.PagesVisited + "vested on avg. the duration: " +
            this.avgDuration
    }
};
document.getElementById("results").innerHTML = websites.infoMarch();