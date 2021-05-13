//Ternary Operators Constructors

//Height check Boolean
function Ride_Function() {
    var Height, Can_ride; //Objects 
    Height = document.getElementById("Height").value; //Input 
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //Boolean and define Properties
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //result
}

function Vote_Function() {
    var Age_vote, Can_vote;
    Age_vote = document.getElementById("Age").value;
    Can_vote = (Age_vote < 18) ? "You are not old enough to vote" : "You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Constructor for Person Objects 
function Person(Name, Age1, Gender, EyeColor, HairColor) {
    this.Person_Name = Name;
    this.Person_Age1 = Age1;
    this.Person_Gender = Gender;
    this.Person_EyeColor = EyeColor;
    this.Person_HairColor = HairColor;
}

//Person Objects
var Person1 = new Person("Bob", 54, "Male", "Blue", "Brown");
var Person2 = new Person("George", 23, "Male", "Brown", "Black");
var Person3 = new Person("Caria", 35, "Female", "Brown", "Black");
var Person4 = new Person("Jessica", 45, "Female", "Green", "Red");

//Display Person1 objects
function GetPerson1() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        " Name: " + Person1.Person_Name + " | Age: " + Person1.Person_Age1 + " | Gender: " +
        Person1.Person_Gender + " | Eye Color: " + Person1.Person_EyeColor + " | Hair Color: " + Person1.Person_HairColor;
}

//Nested function
function Five() {
    document.getElementById("Nested_Function").innerHTML = Add_Five();

    function Add_Five() {
        var Starter = 0;

        function Plus_Five() {
            Starter += 5;
        }
        Plus_Five();
        Plus_Five(); //Repeating function 
        Plus_Five();
        Plus_Five();
        Plus_Five();
        return Starter
    }
}