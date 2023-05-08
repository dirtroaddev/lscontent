// create an isLeapYear function
// ----leap year occurs every year that is divisible by 4 unless it is also divisible by 100
// ----unless the year is evenly divisible by 100 and 400
// use conditional to check whether year is divisble by 4 and not 100
// if it is divisible by 100 make sure it is also divisble by 400
// print whether it is a leap year or not

function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log(year + ' ' + true);
    } else if (year % 100 === 0 && year % 400 === 0) {
        console.log(year + ' ' + true);
    } else {
        console.log(false);
    }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true