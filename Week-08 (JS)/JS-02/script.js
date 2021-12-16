
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




