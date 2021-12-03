
// Question - 01 

function max() {

    var numOne = document.getElementById("number1-01").value
    var numTwo = document.getElementById("number2-01").value

    var maximum = Math.max(numOne, numTwo)

    document.getElementById("result-01").innerHTML = `Maximum = ${maximum}`
}


// Quesion - 02

function min() {

    var numOne = document.getElementById("number1-02").value
    var numTwo = document.getElementById("number2-02").value

    var minimum = Math.min(numOne, numTwo)

    document.getElementById("result-02").innerHTML = `Maximum = ${minimum}`
}

// Question - 03

function typeCheck() {
    
    var number = document.getElementById("number1-03").value

    if (number > 0) {
        number = "Positive"
    }

    else if (number < 0) {
        number = "Negitive"
    }

    else {
        number = 0
    }

    document.getElementById("result-03").innerHTML = `Number = ${number}`
}


// Question - 04

function divCheck() {

    var numOne = document.getElementById("number1-04").value

    if (numOne % 5 == 0 && numOne % 11 == 0) {

        numOne = "True"
    }
    else{
        numOne = "False"
    }

    document.getElementById("result-04").innerHTML = `Result = ${numOne}`
}


// Question - 05

function evenOrOdd() {
    
    var numOne = document.getElementById("number1-05").value

    if (numOne % 2 == 0) {
        
        numOne = "Even"
    }
    else{
        numOne = "Odd"
    }

    document.getElementById("result-05").innerHTML = `Number = ${numOne}`
}


// Quesiton - 06

function leepYearCheck() {
    
    var year = document.getElementById("number1-06").value

    if (year % 4 == 0) {

        if (year % 100 == 0) {
            
            if (year % 400 ==0) {
                
                year = "True"
            }
            else{
                year = "False"
            }
        }
        else{
            year = "True"
        }
    }
    else{
        year = "False"
    }

    document.getElementById("result-06").innerHTML = `Result = ${year}`
}



// Question - 07


function checkCharacter() {
    
    var character = document.getElementById("character-07").value

    if (character >= "a" && character <= "z" || character >= "A" && character <= "Z") {
        
        character = "Alphabet"
    }
    else{
        character = "Not Alphabet"
    }

    document.getElementById("result-07").innerHTML = `Character = ${character}`
}


// Qoestion - 08

function checkVovel(params) {
    
    var character = document.getElementById("character-08").value

    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u" || character == "A" || character == "E" || character == "I" || character == "O" || character == "U") {
        character = "Vovel"
    }
    else{
        character = "Constant"
    }

    document.getElementById("result-08").innerHTML = `Character = ${character}`
}


// Question - 09

function checkIt() {
    
    var character = document.getElementById("character-09").value

    if (character >= "a" && character <= "z" || character >= "A" && character <= "Z") {
        character = "Alphabet"
    }
    else if (character >= 0 || character < 0) {
        character = "Digit"
    }
    else{
        character = "Speacial Character"
    }

    document.getElementById("result-09").innerHTML = `Character = ${character}`
}


// Question - 10

function UpperOrLower() {
    
    var character = document.getElementById("character-10").value

    if (character >= "A" && character <= "Z") {
        
        character = "UpperCase"
    }
    else if (character >= "a" && character <= "z") {
        
        character = "LowerCase"
    }
    else{
        character = "Not An Alphabet"
    }


    document.getElementById("result-10").innerHTML = `Character = ${character}`
}


// Question - 11


function weekDay() {
    
    var weekNumber = document.getElementById("weekNumber-11").value

    var weekDay

    switch (weekNumber) {
        case '1':
            weekDay = "Monday"
            break;

        case '2':
            weekDay = "Tuesday"
            break;

        case '3':
            weekDay = "Wednesday"
            break;

        case '4':
            weekDay = "Thursday"
            break;

        case '5':
            weekDay = "Friday"
            break;

        case '6':
            weekDay = "Saturday"
            break;

        case '7':
            weekDay = "Sunday"
            break;
    
        default:
            weekDay = "Limit Exceded"
            break;
    }


    document.getElementById("result-11").innerHTML = `Day = ${weekDay}`
}


// Question - 12

function monthDays(params) {
    
    var monthNumber = document.getElementById("monthNumber-12").value
    var monthDays

    switch (monthNumber) {
        case '1':
            monthDays = "Jan - 31"
            break;

        case '2':
            monthDays = "Feb - 28"
            break;

        case '3':
            monthDays = "Mar - 31"
            break;

        case '4':
            monthDays = "Apr - 30"
            break;

        case '5':
            monthDays = "May - 31"
            break;

        case '6':
            monthDays = "Jun - 30"
            break;

        case '7':
            monthDays = "Jul - 31"
            break;

        case '8':
            monthDays = "Aug - 31"
            break;

        case '9':
            monthDays = "Sep - 30"
            break;

        case '10':
            monthDays = "Oct - 31"
            break;

        case '11':
            monthDays = "Nov - 30"
            break;

        case '12':
            monthDays = "Dec - 31"
            break;

    
        default:
            monthDays = "Limit Exceded"
            break;
    }


    document.getElementById("result-12").innerHTML = `MonthDays = ${monthDays}`
}


// Question - 13


function checkNotes() {
    
    var amount = document.getElementById("amount-13").value

    var fiveThousand = 0
    var thousand = 0
    var fiveHundred = 0
    var hundred = 0
    var fifty = 0

    while (amount >= 50) {
        
        if (amount >= 5000) {
            fiveThousand += 1
            amount -= 5000
        }
        else if (amount >= 1000 && amount < 5000) {
            thousand += 1
            amount -= 1000
        }
        else if (amount >= 500 && amount < 1000) {
            fiveHundred += 1
            amount -= 500
        }
        else if (amount >= 100 && amount < 500) {
            hundred += 1
            amount -= 100
        }
        else if (amount >= 50 && amount < 100) {
            fifty += 1
            amount -= 50
        }
    }


    document.getElementById("fiveThousand").innerHTML = `Five Thousnad = ${fiveThousand}`
    document.getElementById("thousand").innerHTML = `Thousand = ${thousand}`
    document.getElementById("fiveHundred").innerHTML = `Five Hundred = ${fiveHundred}`
    document.getElementById("hundred").innerHTML = `Hundred = ${hundred}`
    document.getElementById("fifty").innerHTML = `Fifty = ${fifty}`

}


// Question - 14

function yourGrade() {
    
    var bioMarks = parseInt(document.getElementById("marksBio-14").value)
    var phyMarks = parseInt(document.getElementById("marksPhy-14").value)
    var chemMarks = parseInt(document.getElementById("marksChe-14").value)
    var mathMarks = parseInt(document.getElementById("marksMath-14").value)
    var comMarks = parseInt(document.getElementById("marksCom-14").value)

    var totalMarks = bioMarks + phyMarks + chemMarks + mathMarks + comMarks

    var percentage = (totalMarks / 500 * 100)

    var grade = "none"

    if (percentage >= 90 && percentage <= 100) {
        
        grade = "A"
    }
    else if (percentage >= 80 && percentage < 90) {
        
        grade = "B"
    }
    else if (percentage >= 70 && percentage < 80) {
        
        grade = "C"
    }
    else if (percentage >= 60 && percentage < 70) {
        
        grade = "D"
    }
    else if (percentage >= 40 && percentage < 60) {
        
        grade = "E"
    }
    else{
        grade = "F"
    }
    
    document.getElementById("grade").innerHTML = `Grdae = ${grade}`
    document.getElementById("percentage").innerHTML = `Percentage = ${percentage}`
}


// Quesion - 15

function grossSalary() {
    
    var basicSalary = parseInt(document.getElementById("basicSalary-15").value)

    var HRA
    var DA
    var grossSalary

    if (basicSalary >= 0) {
        

        if (basicSalary <= 10000) {
     
            HRA = (20 / 100) * basicSalary
            DA = (80 / 100) * basicSalary
            grossSalary = basicSalary + HRA + DA
             
            
        }
        else if (basicSalary > 10000 && basicSalary <= 20000) {
            
            HRA = (25 / 100) * basicSalary
            DA = (90 / 100) * basicSalary
            grossSalary = basicSalary + HRA + DA
    
        }
        else{
    
            HRA = (30 / 100) * basicSalary
            DA = (95 / 100) * basicSalary
            grossSalary = basicSalary + HRA + DA
    
        }

    }

    document.getElementById("result-15").innerHTML = `Gross Salary = ${grossSalary}`
}


// Quesion - 16


function bill() {
    
    var units = parseInt(document.getElementById("units-16").value)
    var bill = 0
    var basicBill = 0

    if (units <= 50) {
        
        basicBill = units * 0.50
        surcharge = (20 / 100) * basicBill
        bill = basicBill + surcharge

    }
    else if (units > 50 && units <= 150) {
        
        var fiftyUnitsBill = 50 * 0.50

        units = units - 50
        basicBill = (units * 0.75) + fiftyUnitsBill
        surcharge = (20 / 100) * basicBill
        bill = basicBill + surcharge
        
    }

    else if (units > 150 && units <= 250) {
        
        var fiftyUnitsBill = 50 * 0.50
        var oneFiftyUnitsBill = (100 * 0.75) + fiftyUnitsBill

        units = units - 150
        basicBill = (units * 1.20) + oneFiftyUnitsBill
        surcharge = (20 / 100) * basicBill
        bill = basicBill + surcharge

    }
    else if (units > 250) {
        
        var fiftyUnitsBill = 50 * 0.50
        var oneFiftyUnitsBill = (100 * 0.75) + fiftyUnitsBill
        var twoFiftyUnitsBill = (100 * 1.20) + oneFiftyUnitsBill

        units = units - 250
        basicBill = (units * 1.50) + twoFiftyUnitsBill
        surcharge = (20 / 100) * basicBill
        bill = basicBill + surcharge

    }

    document.getElementById("result-16").innerHTML = `TotalBill = ${bill}`
}