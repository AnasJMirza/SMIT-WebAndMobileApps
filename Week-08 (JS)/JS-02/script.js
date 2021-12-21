
// Q - 01 : Write a JavaScript function to check whether an 'input' is a date object or not.

// Test Data:
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));
// Output :
// false
// true
// true
// false


console.log("Question - 01");
console.log("");

function checkDate(input) {
    var typeCheck = Object.prototype.toString.call(input)
    
    if (typeCheck == "[object Date]") {
        return true
    }
    else{
        return false
    }
}


console.log(checkDate("October 13, 2014 11:13:00"));
console.log(checkDate(new Date(86400000)));
console.log(checkDate(new Date(99,5,24,11,33,30,0)));
console.log(checkDate([1, 2, 4, 0]));


// -----------------------------------------------------------------------------


//  Q - 02 : Write a JavaScript function to get the current date.   

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"


console.log("Question - 02");
console.log("");

function currentDate() {
    
    var input = document.getElementById("input-02").value;

    if (input == '/' || input == '-') {
        var date = new Date();
        var getDate = date.getDate()
        var getMonth = date.getMonth()
        var getYear = date.getFullYear()
    
        var result = getDate + input + getMonth + input + getYear
    
        document.getElementById("result-02").innerHTML = `Output : ${result}`
    }
    else{
        document.getElementById("result-02").innerHTML = `Output : Please Enter "-" or "/" seperator`
    }
        
}

// -------------------------------------------------------------------------

// Q - 03 : Write a JavaScript function to get the number of days in a month.   

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31


var month = "1"
var year = "2012"
// var month = 2
// var month = 9
// var month = 12

function getDaysInMoth(month, year) {
    
    var m = `${month}-10-${year}`
    console.log(m);

    var date = new Date(m)

    var monthData = ["Jan-31", "Feb-28", "Mar-31", "Apr-30", "May-31", "Jun-30", "Jul-31", "Aug-31", "Sep-30", "Oct-31", "Nov-30", "Dec-31"]
    


    console.log(monthData[date.getMonth()])
        
}

getDaysInMoth(month, year)

// -----------------------------------------------------------------------------------------------

// Question - 04 : Write a JavaScript function to get the month name from a particular date.

// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"


console.log("Question - 04");

function monthName(input) {

    var date  = new Date(input)

    var monthData = ["Jan-31", "Feb-28", "Mar-31", "Apr-30", "May-31", "Jun-30", "Jul-31", "Aug-31", "Sep-30", "Oct-31", "Nov-30", "Dec-31"]

    console.log(monthData[date.getMonth()]);
}

monthName("10/11/2009");
monthName("11/13/2014");

// ----------------------------------------------------------------------------------------

// Q - 4 : Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   

// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"









