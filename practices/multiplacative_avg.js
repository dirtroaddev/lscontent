// create a function that accepts an array
// create an empty variable to hold the sum of all the values
// create a loop to loop through the array and add them to the variable
// return the variable divided by the length of the array

function multiplicativeAverage(arr) {
    return (arr.reduce((accur, rec) => accur *= rec , 1) / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"