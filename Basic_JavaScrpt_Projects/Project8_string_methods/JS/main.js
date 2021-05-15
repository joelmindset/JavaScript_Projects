//Search  / Uppercase / Slice
function partMyString() {
    var amandaString = "First Second";
    var getable = amandaString.search('Second');
    var amandaString = amandaString.toUpperCase();
    var second = amandaString.slice(6, 12);
    document.getElementById("myString").innerHTML = getable + ' ' + second;
}
//num to string
function numString() {
    var num = 1111;
    document.getElementById("numtoString").innerHTML = num.toString();
}
//precision
function round_last_Method() {
    var num = 1235.5637;
    document.getElementById("roundlast").innerHTML = num.toPrecision(7);
}
//fixed
function fixed_Method() {
    var num = 1235.5637;
    document.getElementById("Fixed").innerHTML = num.toFixed(1);
}
//value of
function Value_Method() {
    var num = 1111;
    var n = num.valueOf();
    document.getElementById("Value").innerHTML = n;
}