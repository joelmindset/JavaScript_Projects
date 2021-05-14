//Global Variables
var Num1 = 15;
var Num2 = 5;
//Add Variables Local and Global
function Add_Variables() {
    var Num3 = 10; //Local
    document.write('Adding Variables: ' + (Num1 + Num2 + Num3 /*<-Global*/ + 20)) // +20 is Local
}
// console work
function work_function() {
    console.log(15 + Num1);
}

// Error intentional
function error_function() {
    console.log(15 + Num3); // ===> Num3 is not defined Error. Num3 is Local to Add_Variables()  
}
Add_Variables(); //Call
work_function();
error_function(); //Error

//Conditional Statements
//On Time Checker
function checkTime() {
    if (new Date().getDay() < 6, !0) { // if less then Saturday not Sunday
        document.getElementById('startTime').innerHTML = "Its a week day time to get started."
        if (new Date().getHours() > 8) { // if later then 9 p.m.
            document.getElementById('startTime').innerHTML = "Starting late in the day.";
        }
    }
}

//Total Hours for the week
function totalFunc() {
    var currentDay = new Date().getDay();
    var shouldHave = (currentDay - 1) * 8; // -1 so we go back a a day and don't count current
    var userInput = document.getElementById('totalWeekEnter').value;
    var totalHoursDay = 'You total hours a day are ' + (userInput / (currentDay - 1));
    var tooMuch = '.';
    console.log(userInput)
    console.log(shouldHave)
    console.log(typeof 'userInput')
    console.log(typeof 'shouldHave')
    if (shouldHave <= userInput) {
        Hours = "Great job you've worked " + (userInput - shouldHave) + ' hours extra! ';
    } else {
        Hours = 'You need to work ' + (shouldHave - userInput) + ' more hours to be on track. ';
    }
    if (userInput > (shouldHave * 2)) {
        tooMuch = ' you\'re way over the work limit contact your supervisor.';
    } else if (userInput < (shouldHave / 2)) {
        tooMuch = ' Unallowable time please contact your supervisor.';
    }
    document.getElementById('totalWeek').innerHTML = Hours + totalHoursDay + tooMuch;
}