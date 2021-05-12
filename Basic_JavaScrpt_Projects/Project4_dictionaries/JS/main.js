function Dict() { //set up fuction
    var Vehicle = { //dictionary
        Make: 'Toyota', //key-value paris
        Year: 2020,
        Color: 'Black',
        Engine: 'V8',
    };
    delete Vehicle.Make; //remove Make
    document.getElementById('Dictionary').innerHTML = Vehicle.Make + ' ' + Vehicle.Year; //Make undefine "deleted"

}