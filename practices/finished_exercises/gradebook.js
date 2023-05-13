// create a function that accepts three grades(numbers)
// create the average of the three grades
// create an if statement to return the grade
// return the grade to the user

function getGrade(grade1, grade2, grade3) {
    const average = (grade1 + grade2 + grade3) / 3;

    if (average >= 90 ) {
        console.log('A');
    } else if (average < 90 && average >= 80) {
        console.log('B');
    } else if (average < 80 && average >= 70) {
        console.log('C');
    } else if (average < 70 && average >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }

}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
