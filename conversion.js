function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const badhonHeight = inchToFeet(75);
console.log("Height is: ", badhonHeight);

// function 2 

function inchToFeet2(inch) {
    const feetFaction = inch / 12;
    const feetNumber = parseInt(feetFaction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch';
    return result;
}

const badhonHeight2 = inchToFeet2(75);
console.log(badhonHeight2);

// miles to km 

function milesToKilometer(miles) {
    const kilometerFaction = miles * 1.60934;
    const kilometer = parseInt(kilometerFaction);
    const meter = (miles % 1000);
    const result = kilometer + ' Kilometer ' + meter + ' Meter'
    return result;
}
const kilometer = milesToKilometer(10);
console.log(kilometer);

