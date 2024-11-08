function isLeapYear(year) {
    if ((year % 100 !== 0 && year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
        return true;
    }
    return false
}
const year = isLeapYear(2000);
const year2 = isLeapYear(2100);
const year3 = isLeapYear(2400);
console.log(year,year2,year3);